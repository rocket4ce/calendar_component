defmodule LiveCalendar.Components do
  @moduledoc """
  HEEx components that render an [EventCalendar](https://github.com/vkurko/calendar).

    * `calendar/1` - for Phoenix LiveView, driven by the `LiveCalendar` hook
    * `static_calendar/1` - for regular controllers, initialized with vanilla JavaScript

  Both components serialize `events` and `options` to JSON `data-*` attributes that the
  bundled JavaScript passes to EventCalendar. Any EventCalendar option can be given in
  `options` (see the [EventCalendar docs](https://github.com/vkurko/calendar#options)).

  ## Interaction callbacks (LiveView)

  `calendar/1` forwards EventCalendar interactions to LiveView. Each callback attribute accepts:

    * a string - the name of the event pushed to the server with the callback payload
    * a `Phoenix.LiveView.JS` struct - commands executed on the client. Every `JS.push/2`
      in it receives the callback payload merged into its `:value`
    * `false` - disables the default server event of that callback

      alias Phoenix.LiveView.JS

      <.calendar
        id="calendar"
        events={@events}
        options={%{view: "dayGridMonth", editable: true, selectable: true}}
        on_event_click={JS.push("select_event") |> JS.show(to: "#event-modal")}
        on_event_drop="event_dropped"
        on_select="range_selected"
      />

  `on_event_click`, `on_date_click` and `on_month_change` push `"event_clicked"`,
  `"date_clicked"` and `"month_changed"` by default, unless they are given a string,
  `false`, or JS commands that already include a `JS.push/2`. `on_event_drop`,
  `on_event_resize` and `on_select` push nothing unless configured.

  The handlers of `on_event_drop` and `on_event_resize` can reply `%{revert: true}` to
  move the event back to where it was:

      def handle_event("event_dropped", %{"id" => id, "event" => event}, socket) do
        case Events.reschedule(id, event["start"], event["end"]) do
          {:ok, _} -> {:noreply, socket}
          {:error, _} -> {:reply, %{revert: true}, socket}
        end
      end
  """
  use Phoenix.Component

  alias Phoenix.LiveView.JS

  # {attr, EventCalendar callback, legacy `options.lv` key, default server event}
  @callbacks [
    {:on_event_click, "eventClick", "onEventClick", "event_clicked"},
    {:on_date_click, "dateClick", "onDateClick", "date_clicked"},
    {:on_month_change, "datesSet", "onMonthChange", "month_changed"},
    {:on_event_drop, "eventDrop", "onEventDrop", nil},
    {:on_event_resize, "eventResize", "onEventResize", nil},
    {:on_select, "select", "onSelect", nil}
  ]

  @callback_doc "Server event name (string), `%Phoenix.LiveView.JS{}` commands or `false`."

  @doc """
  Renders a calendar for LiveView, managed by the `LiveCalendar` hook.

  The container uses `phx-update="ignore"`, so LiveView keeps the calendar DOM intact
  while `events` and `options` changes are still applied by the hook. Only options whose
  value changed are re-applied, so re-renders don't reset the date or view the user
  navigated to.

  ## Payloads

  Dates are sent twice: as instants (`"start"`, `"end"`, `"date"`, e.g.
  `"2026-10-19T13:00:00.000Z"`) and as wall-clock strings in the calendar's `timeZone`
  (`"startStr"`, `"endStr"`, `"dateStr"`, e.g. `"2026-10-19T10:00:00"`).

    * `on_event_click` - `%{"id", "event", "view"}`
    * `on_date_click` - `%{"date", "dateStr", "allDay", "resource", "view"}`
    * `on_month_change` - `%{"month", "year", "start", "end", "startStr", "endStr", "view"}`
    * `on_event_drop` - `%{"id", "event", "oldEvent", "delta", "oldResource", "newResource", "view"}`
    * `on_event_resize` - `%{"id", "event", "oldEvent", "startDelta", "endDelta", "view"}`
    * `on_select` - `%{"start", "end", "startStr", "endStr", "allDay", "resource", "view"}`

  `"event"` is a map with `"id"`, `"title"`, `"start"`, `"end"`, `"startStr"`, `"endStr"`,
  `"allDay"`, `"resourceIds"`, `"display"`, `"backgroundColor"`, `"textColor"` and
  `"extendedProps"`. `"view"` holds `"type"`, `"title"` and the visible range.

  ## Examples

      <.calendar id="calendar" events={@events} options={%{view: "dayGridMonth"}} />
  """
  attr(:id, :string, required: true)
  attr(:events, :list, default: [], doc: "EventCalendar events (maps encodable with Jason).")
  attr(:options, :map, default: %{}, doc: "EventCalendar options.")
  attr(:on_event_click, :any, default: nil, doc: @callback_doc)
  attr(:on_date_click, :any, default: nil, doc: @callback_doc)
  attr(:on_month_change, :any, default: nil, doc: @callback_doc)
  attr(:on_event_drop, :any, default: nil, doc: @callback_doc)
  attr(:on_event_resize, :any, default: nil, doc: @callback_doc)
  attr(:on_select, :any, default: nil, doc: @callback_doc)
  attr(:rest, :global, doc: "Global attributes (class, style, data-*, aria-*, ...).")

  def calendar(assigns) do
    {legacy_names, options} = pop_legacy_names(assigns.options)

    {push_events, js_callbacks} =
      Enum.reduce(@callbacks, {%{}, %{}}, fn {attr, name, legacy_key, default}, {push, js} ->
        value = Map.fetch!(assigns, attr)
        default = Map.get(legacy_names, legacy_key, default)

        {put_present(push, name, push_event(value, default)), put_present(js, name, js_ops(value))}
      end)

    assigns =
      assign(assigns,
        events_json: Jason.encode!(assigns.events),
        options_json: Jason.encode!(options),
        push_events_json: Jason.encode!(push_events),
        js_callbacks_json: Jason.encode!(js_callbacks)
      )

    ~H"""
    <div
      id={@id}
      phx-hook="LiveCalendar"
      phx-update="ignore"
      data-events={@events_json}
      data-options={@options_json}
      data-push-events={@push_events_json}
      data-js-callbacks={@js_callbacks_json}
      {@rest}
    >
    </div>
    """
  end

  # `options.lv` was the original way of renaming the pushed events.
  defp pop_legacy_names(options) do
    {atom_names, options} = Map.pop(options, :lv)
    {string_names, options} = Map.pop(options, "lv")

    names =
      [atom_names, string_names]
      |> Enum.filter(&is_map/1)
      |> Enum.reduce(%{}, &Map.merge(&2, &1))
      |> Map.new(fn {key, value} -> {to_string(key), value} end)

    {names, options}
  end

  defp push_event(false, _default), do: nil
  defp push_event(name, _default) when is_binary(name), do: name
  defp push_event(%JS{ops: ops}, default), do: if(Enum.any?(ops, &push_op?/1), do: nil, else: event_name(default))
  defp push_event(_value, default), do: event_name(default)

  defp event_name(name) when is_binary(name), do: name
  defp event_name(name) when is_atom(name) and name not in [nil, false, true], do: Atom.to_string(name)
  defp event_name(_name), do: nil

  defp push_op?(["push", _args]), do: true
  defp push_op?(_op), do: false

  defp js_ops(%JS{ops: ops}), do: ops
  defp js_ops(_value), do: nil

  defp put_present(map, _key, nil), do: map
  defp put_present(map, key, value), do: Map.put(map, key, value)

  @doc """
  Renders a calendar for regular Phoenix controllers (no LiveView required).

  The container gets the `static-calendar` class and is initialized by the
  `calendar_component/static` module (automatically on page load, or with
  `initStaticCalendars()`).

  ## Callbacks

  Callback options (`eventClick`, `dateClick`, `datesSet`, `eventDrop`, `eventResize`,
  `select`, `eventDidMount`, ... and `customButtons.*.click`) can be given as strings:

    * a global function reference (recommended): `"MyApp.Calendar.onEventClick"`
    * a short function body that receives `info` (max. 200 characters, keywords like
      `function`, `eval` or `setTimeout` are rejected): `"console.log(info.event.title)"`

  ## Example

      <.static_calendar
        id="my-calendar"
        events={@events}
        options={%{
          view: "dayGridMonth",
          eventClick: "MyApp.Calendar.onEventClick",
          dateClick: "MyApp.Calendar.onDateClick",
          datesSet: "MyApp.Calendar.onMonthChange"
        }}
      />

  ```javascript
  import {initStaticCalendars} from "calendar_component/static"

  window.MyApp = {
    Calendar: {
      onEventClick(info) { console.log("Event clicked:", info.event.title) },
      onDateClick(info) { console.log("Date clicked:", info.dateStr) },
      onMonthChange(info) { console.log("Range:", info.startStr, info.endStr) }
    }
  }

  initStaticCalendars()
  ```
  """
  attr(:id, :string, required: true)
  attr(:events, :list, default: [], doc: "EventCalendar events (maps encodable with Jason).")
  attr(:options, :map, default: %{}, doc: "EventCalendar options, callbacks given as strings.")
  attr(:class, :any, default: nil, doc: "Extra classes, added to `static-calendar`.")
  attr(:rest, :global, doc: "Global attributes (style, data-*, aria-*, ...).")

  def static_calendar(assigns) do
    assigns =
      assign(assigns,
        events_json: Jason.encode!(assigns.events),
        options_json: Jason.encode!(assigns.options)
      )

    ~H"""
    <div
      id={@id}
      class={["static-calendar", @class]}
      data-events={@events_json}
      data-options={@options_json}
      {@rest}
    >
    </div>
    """
  end
end
