# Usage

This guide shows how to render the calendar and handle events with Phoenix LiveView.

## 1) Basic render

In your HEEx:

```elixir
<.calendar id="calendar" events={@events} />
```

In your LiveView:

```elixir
def mount(_params, _session, socket) do
  events = [
    %{id: 1, title: "Meeting", start: "2025-08-01T09:00:00"},
    %{id: 2, title: "Demo", start: "2025-08-02"}
  ]
  {:ok, assign(socket, events: events)}
end
```

## 2) Handle event click, date click, and month change

By default, the hook pushes these events to the server: "event_clicked", "date_clicked", and "month_changed".

```elixir
@impl true
def handle_event("event_clicked", %{"id" => id}, socket), do: {:noreply, socket}

@impl true
def handle_event("date_clicked", %{"date" => iso}, socket), do: {:noreply, socket}

@impl true
def handle_event("month_changed", %{"month" => m, "year" => y}, socket), do: {:noreply, socket}
```

## 3) EventCalendar options

Pass any supported EventCalendar option via `:options`:

```elixir
opts = %{
  view: "dayGridMonth",
  headerToolbar: %{start: "title", end: "today prev,next"},
  nowIndicator: true,
  firstDay: 1
}

~H"""
<.calendar id="cal_toolbar" events={@events} options={opts} />
"""
```

## 4) Live update events

```elixir
@impl true
def handle_event("date_clicked", %{"date" => iso}, socket) do
  new = %{id: System.unique_integer([:positive]), title: "New", start: iso}
  {:noreply, update(socket, :events, fn ev -> [new | ev] end)}
end
```

## 5) Rename events pushed by the hook

Use `options.lv` to change the event names the hook pushes:

```elixir
opts = %{lv: %{onEventClick: "my_event_click", onDateClick: "my_date_click", onMonthChange: "my_month"}}

~H"""
<.calendar id="cal_lv" events={@events} options={opts} />
"""

@impl true
def handle_event("my_event_click", payload, socket), do: {:noreply, socket}
```

## 6) List views and localization

```elixir
opts = %{
  view: "listWeek",
  locale: "es",
  height: "auto",
  dayMaxEvents: true
}

~H"""
<.calendar id="cal_list" events={@events} options={opts} />
"""
```

## 7) Editing (drag & drop, resize)

Enable `editable: true` and handle `eventDrop`/`eventResize` client- or server-side.

```elixir
opts = %{
  view: "timeGridWeek",
  editable: true,
  eventDurationEditable: true
}

~H"""
<.calendar id="cal_edit" events={@events} options={opts} />
"""
```

Note: The hook does not push `eventDrop`/`eventResize` by default. You can compose `options.eventDrop`/`eventResize` and use `pushEvent` client-side if you copy/extend the hook in your app.
