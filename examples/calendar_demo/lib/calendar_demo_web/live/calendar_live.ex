defmodule CalendarDemoWeb.CalendarLive do
  @moduledoc """
  Demo of `LiveCalendar.Components.calendar/1`.

  Exercises every way the component can be driven: the six callback attributes (as a string,
  as `Phoenix.LiveView.JS` commands and disabled with `false`), `%{revert: true}` replies,
  custom toolbar buttons that push to the server, option changes through assigns, and
  `CalendarComponent.push_command/4`.
  """
  use CalendarDemoWeb, :live_view

  import LiveCalendar.Components

  alias CalendarDemo.Events
  alias Phoenix.LiveView.JS

  @calendar_id "calendar"

  @impl true
  def mount(_params, _session, socket) do
    {:ok,
     socket
     |> assign(:page_title, "LiveView calendar")
     # `@calendar_id` inside ~H refers to assigns, so the module attribute is assigned here.
     |> assign(:calendar_id, @calendar_id)
     |> assign(:view, "timeGridWeek")
     |> assign(:compact, false)
     |> assign(:selection, nil)
     |> assign(:selected, nil)
     |> assign(:last_event, nil)
     |> assign(:range, nil)
     |> assign(:events, Events.list())}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <Layouts.app flash={@flash}>
      <div class="mx-auto max-w-5xl space-y-4">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold">LiveView calendar</h1>
          <p class="text-sm opacity-70">
            Drag an event outside 07:00&ndash;20:00 and the server replies <code>%&#123;revert: true&#125;</code>, putting it back.
          </p>
        </header>

        <div class="flex flex-wrap gap-2">
          <button id="btn-prev" phx-click="prev" class="btn btn-sm">Prev</button>
          <button id="btn-today" phx-click="today" class="btn btn-sm">Today</button>
          <button id="btn-next" phx-click="next" class="btn btn-sm">Next</button>
          <button id="btn-month" phx-click="set_view" phx-value-view="dayGridMonth" class="btn btn-sm">
            Month
          </button>
          <button id="btn-week" phx-click="set_view" phx-value-view="timeGridWeek" class="btn btn-sm">
            Week
          </button>
          <button id="btn-list" phx-click="set_view" phx-value-view="listWeek" class="btn btn-sm">
            List
          </button>
          <button id="btn-compact" phx-click="toggle_compact" class="btn btn-sm">
            {if @compact, do: "Full height", else: "Compact height"}
          </button>
          <button id="btn-reset" phx-click="reset" class="btn btn-sm btn-ghost">Reset events</button>
        </div>

        <div id="status" class="rounded bg-base-200 p-3 text-sm font-mono space-y-1">
          <div id="status-selected" data-selected={@selected}>selected: {@selected || "-"}</div>
          <div id="status-range" data-range={@range}>range: {@range || "-"}</div>
          <div id="status-last" data-last={@last_event}>last: {@last_event || "-"}</div>
          <div id="status-count" data-count={length(@events)}>events: {length(@events)}</div>
        </div>

        <%!-- The calendar container is phx-update="ignore", so LiveView only patches its
              data-* attributes. Dynamic classes go on this wrapper instead. --%>
        <div class={["rounded border p-2", @compact && "bg-base-200"]}>
          <.calendar
            id={@calendar_id}
            events={@events}
            options={calendar_options(@view, @compact)}
            on_event_click={JS.push("event_clicked") |> JS.add_class("ring", to: "#status")}
            on_date_click="date_clicked"
            on_month_change="month_changed"
            on_event_drop="event_moved"
            on_event_resize="event_moved"
            on_select="range_selected"
            aria-label="Team calendar"
          />
        </div>

        <div :if={@selection} id="draft" class="rounded border border-primary p-3 text-sm">
          <p>
            New event from <strong>{@selection.start}</strong> to <strong>{@selection.end}</strong>
          </p>
          <button id="btn-create" phx-click="create_event" class="btn btn-sm btn-primary mt-2">
            Create
          </button>
          <button id="btn-discard" phx-click="discard" class="btn btn-sm mt-2">Discard</button>
        </div>

        <div :if={@selected} id="selected-actions" class="flex gap-2">
          <button id="btn-delete" phx-click="delete_selected" class="btn btn-sm btn-error">
            Delete selected event
          </button>
        </div>
      </div>
    </Layouts.app>
    """
  end

  defp calendar_options(view, compact) do
    base = %{
      view: view,
      editable: true,
      selectable: true,
      nowIndicator: true,
      firstDay: 1,
      slotMinTime: "07:00",
      slotMaxTime: "21:00",
      headerToolbar: %{
        start: "prev,next today",
        center: "title",
        end: "dayGridMonth,timeGridWeek,listWeek addEvent"
      },
      customButtons: %{addEvent: %{text: "Quick add", push: "quick_add"}}
    }

    # An option that comes and goes: the hook restores `height` to the value it had before
    # it was first applied once the key disappears from the map.
    if compact, do: Map.put(base, :height, "420px"), else: base
  end

  # --- Calendar callbacks ---------------------------------------------------------------

  @impl true
  def handle_event("event_clicked", %{"id" => id}, socket) do
    {:noreply, assign(socket, selected: id, last_event: "event_clicked:#{id}")}
  end

  def handle_event("date_clicked", %{"dateStr" => date}, socket) do
    {:noreply, assign(socket, last_event: "date_clicked:#{date}")}
  end

  def handle_event("month_changed", %{"startStr" => from, "endStr" => to} = payload, socket) do
    {:noreply,
     assign(socket,
       range: "#{from} .. #{to}",
       last_event: "month_changed:#{payload["year"]}-#{payload["month"]}"
     )}
  end

  def handle_event(
        "range_selected",
        %{"startStr" => from, "endStr" => to, "allDay" => all_day},
        socket
      ) do
    {:noreply,
     assign(socket,
       selection: %{start: from, end: to, all_day: all_day},
       last_event: "range_selected:#{from}"
     )}
  end

  # `on_event_drop` and `on_event_resize` share this handler. Replying `%{revert: true}`
  # moves the event back when the server rejects the new range.
  def handle_event("event_moved", %{"id" => id, "event" => event}, socket) do
    case Events.reschedule(id, event["startStr"], event["endStr"]) do
      {:ok, updated} ->
        {:noreply,
         socket
         |> assign(events: Events.list(), last_event: "event_moved:#{updated.id}")
         |> put_flash(:info, "#{updated.title} rescheduled")}

      {:error, reason} ->
        {:reply, %{revert: true},
         socket
         |> assign(last_event: "event_moved_rejected:#{reason}")
         |> put_flash(:error, "Outside office hours (#{reason}), reverted")}
    end
  end

  # Custom toolbar button declared with `push: "quick_add"`.
  def handle_event("quick_add", %{"button" => button, "view" => view}, socket) do
    start_at = NaiveDateTime.new!(Date.utc_today(), ~T[12:00:00])

    {:ok, _event} =
      Events.create(%{
        start: start_at,
        end: NaiveDateTime.add(start_at, 3600),
        title: "Quick add"
      })

    {:noreply,
     socket
     |> assign(events: Events.list(), last_event: "quick_add:#{button}:#{view["type"]}")
     |> CalendarComponent.push_command(@calendar_id, :goto_date, [Date.utc_today()])}
  end

  # --- Toolbar buttons driving the calendar from the server -----------------------------

  def handle_event("prev", _params, socket) do
    {:noreply, CalendarComponent.push_command(socket, @calendar_id, :prev)}
  end

  def handle_event("next", _params, socket) do
    {:noreply, CalendarComponent.push_command(socket, @calendar_id, :next)}
  end

  def handle_event("today", _params, socket) do
    {:noreply, CalendarComponent.push_command(socket, @calendar_id, :today)}
  end

  def handle_event("set_view", %{"view" => view}, socket) do
    {:noreply, assign(socket, :view, view)}
  end

  def handle_event("toggle_compact", _params, socket) do
    {:noreply, assign(socket, :compact, !socket.assigns.compact)}
  end

  # --- Single event commands ------------------------------------------------------------

  def handle_event("create_event", _params, socket) do
    %{start: from, end: to, all_day: all_day} = socket.assigns.selection
    {:ok, event} = Events.create(%{start: from, end: to, allDay: all_day, title: "New event"})

    {:noreply,
     socket
     |> assign(events: Events.list(), selection: nil, last_event: "created:#{event.id}")
     |> CalendarComponent.push_command(@calendar_id, :unselect)}
  end

  def handle_event("delete_selected", _params, socket) do
    id = socket.assigns.selected
    {:ok, _event} = Events.delete(id)

    # Removes the event on the client without re-sending the whole list.
    {:noreply,
     socket
     |> assign(events: Events.list(), selected: nil, last_event: "deleted:#{id}")
     |> CalendarComponent.push_command(@calendar_id, :remove_event, [id])}
  end

  def handle_event("discard", _params, socket) do
    {:noreply,
     socket
     |> assign(:selection, nil)
     |> CalendarComponent.push_command(@calendar_id, :unselect)}
  end

  def handle_event("reset", _params, socket) do
    Events.reset()

    {:noreply,
     assign(socket, events: Events.list(), selected: nil, selection: nil, last_event: "reset")}
  end
end
