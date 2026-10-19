# Usage

This guide shows how to render the calendar and handle its events with Phoenix LiveView.
For controllers without LiveView see the [static calendar guide](static_calendar_usage.md).

## 1) Basic render

```elixir
def mount(_params, _session, socket) do
  events = [
    %{id: 1, title: "Meeting", start: ~N[2026-10-05 09:00:00], end: ~N[2026-10-05 10:00:00]},
    %{id: 2, title: "Demo", start: ~D[2026-10-06]}
  ]

  {:ok, assign(socket, events: events)}
end
```

```heex
<.calendar id="calendar" events={@events} options={%{view: "dayGridMonth"}} />
```

Without a `view` option the calendar opens in `timeGridWeek`.

## 2) Server events

Clicking an event, clicking a date and changing the visible period push `"event_clicked"`,
`"date_clicked"` and `"month_changed"`:

```elixir
def handle_event("event_clicked", %{"id" => id, "event" => event}, socket), do: {:noreply, socket}
def handle_event("date_clicked", %{"dateStr" => date, "allDay" => all_day}, socket), do: {:noreply, socket}
def handle_event("month_changed", %{"month" => month, "year" => year, "view" => view}, socket), do: {:noreply, socket}
```

Rename them with a string, or disable them with `false`:

```heex
<.calendar id="calendar" events={@events} on_event_click="select_event" on_month_change={false} />
```

`"month_changed"` is also pushed when the calendar is first rendered, so the server knows the
initial range.

## 3) Phoenix.LiveView.JS commands

Callback attributes accept JS commands. `JS.push/2` operations receive the callback payload
merged into their `:value`:

```elixir
alias Phoenix.LiveView.JS

~H"""
<.calendar
  id="calendar"
  events={@events}
  on_event_click={JS.push("select_event") |> JS.show(to: "#event-modal")}
  on_date_click={JS.push("new_event", value: %{source: "calendar"}) |> JS.focus(to: "#title")}
/>
"""

def handle_event("select_event", %{"id" => id}, socket), do: {:noreply, assign(socket, selected: id)}
def handle_event("new_event", %{"dateStr" => date, "source" => "calendar"}, socket), do: {:noreply, socket}
```

When the commands contain a `JS.push/2`, the default event (`"event_clicked"`, ...) is not
pushed. Commands without a push, like `JS.show/1` alone, still push the default event.

## 4) Updating events and options

Update the assigns as usual, the hook applies the changes:

```elixir
def handle_event("date_clicked", %{"dateStr" => date}, socket) do
  event = %{id: System.unique_integer([:positive]), title: "New", start: date}
  {:noreply, update(socket, :events, &[event | &1])}
end

def handle_event("show_weekends", %{"value" => value}, socket) do
  {:noreply, assign(socket, hidden_days: if(value == "true", do: [], else: [0, 6]))}
end
```

```heex
<.calendar id="calendar" events={@events} options={%{view: "timeGridWeek", hiddenDays: @hidden_days}} />
```

Only options whose value changed are applied. Re-rendering for unrelated reasons doesn't move
the calendar back to the `date` or `view` in `options` after the user navigated.

The `views` option is only read when the calendar is created.

## 5) Drag & drop, resizing and selections

```heex
<.calendar
  id="calendar"
  events={@events}
  options={%{view: "timeGridWeek", editable: true, selectable: true}}
  on_event_drop="event_dropped"
  on_event_resize="event_resized"
  on_select="range_selected"
/>
```

```elixir
def handle_event("event_dropped", %{"id" => id, "event" => event, "newResource" => resource}, socket) do
  case Events.move(id, event["start"], event["end"], resource && resource["id"]) do
    {:ok, _event} -> {:noreply, assign(socket, events: Events.list())}
    {:error, _reason} -> {:reply, %{revert: true}, socket}
  end
end

def handle_event("event_resized", %{"id" => id, "event" => %{"end" => finish}}, socket) do
  {:ok, _event} = Events.resize(id, finish)
  {:noreply, socket}
end

def handle_event("range_selected", %{"startStr" => start, "endStr" => finish, "allDay" => all_day}, socket) do
  {:noreply, assign(socket, draft: %{start: start, end: finish, all_day: all_day})}
end
```

Replying `%{revert: true}` moves the event back to its previous position.

## 6) Driving the calendar from the server

```elixir
def handle_event("jump_to_next_month", _params, socket) do
  {:noreply, CalendarComponent.push_command(socket, "calendar", :goto_date, [~D[2026-11-01]])}
end
```

Commands: `:goto_date`, `:next`, `:prev`, `:today`, `:refetch_events`, `:refetch_resources`,
`:unselect` and `:set_option` (`[name, value]`).

## 7) List views and localization

```elixir
opts = %{
  view: "listWeek",
  locale: "es",
  firstDay: 1,
  buttonText: %{today: "hoy", listWeek: "lista"},
  noEventsContent: "Sin eventos"
}
```

## 8) Resources and timelines

```elixir
opts = %{
  view: "resourceTimelineWeek",
  headerToolbar: %{start: "prev,next today", center: "title", end: "resourceTimelineDay,resourceTimelineWeek"},
  resources: [%{id: "a", title: "Room A"}, %{id: "b", title: "Room B"}]
}

events = [
  %{id: 1, title: "Workshop", start: "2026-10-05T09:00:00", end: "2026-10-05T12:00:00", resourceId: "a"}
]
```

Events with `resourceIds: ["a", "b"]` are shown in every listed resource.

## 9) Time zones

Event dates without offset (`NaiveDateTime`, `"2026-10-05T09:00:00"`) are shown as is. Dates
with an offset (`DateTime`, `"...Z"`, `"...+02:00"`) are shifted to the calendar's `timeZone`,
which is the browser's by default:

```elixir
%{timeZone: "UTC"}      # or "+02:00"
```

Payloads include both the instant (`"start"`) and the wall-clock time shown in the calendar
(`"startStr"`).
