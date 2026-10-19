# CalendarComponent

[![Hex.pm](https://img.shields.io/hexpm/v/calendar_component.svg)](https://hex.pm/packages/calendar_component)
[![Docs](https://img.shields.io/badge/docs-hexdocs.pm-blue)](https://hexdocs.pm/calendar_component)

Phoenix components for [EventCalendar](https://github.com/vkurko/calendar) (v5.17.2): a
full-sized, drag & drop event calendar with day, week, month, list, resource and timeline views.

- `<.calendar>` for **LiveView**: clicks, drag & drop, resizing and selections are pushed to
  the server, `Phoenix.LiveView.JS` commands are supported and the server can drive the calendar.
- `<.static_calendar>` for **regular controllers**, initialized with plain JavaScript.
- Every [EventCalendar option](https://github.com/vkurko/calendar#options) can be passed from Elixir.
- The JavaScript and CSS ship prebuilt with the package, no npm install needed.

## Installation

Add `calendar_component` to your dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:calendar_component, "~> 0.3.0"}
  ]
end
```

### JavaScript

Register the hook in `assets/js/app.js`:

```javascript
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"
import CalendarHooks from "calendar_component"

const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
const liveSocket = new LiveSocket("/live", Socket, {
  params: {_csrf_token: csrfToken},
  hooks: {...CalendarHooks}  // merge with your other hooks: {...CalendarHooks, ...MyHooks}
})
liveSocket.connect()
```

Phoenix resolves `calendar_component` from `deps/` through the `NODE_PATH` set in the default
esbuild configuration.

### CSS

Import the EventCalendar stylesheet in `assets/css/app.css`:

```css
@import "../../deps/calendar_component/priv/static/assets/main.css";
```

Add the `ec-dark` class to any parent element (or `ec-auto-dark` to follow the system
preference) to enable the built-in dark theme, or override the CSS variables:

```css
.ec {
  --ec-bg-color: #22272e;
  --ec-text-color: #adbac7;
}
```

## Usage with LiveView

```elixir
defmodule MyAppWeb.CalendarLive do
  use MyAppWeb, :live_view

  import LiveCalendar.Components

  def mount(_params, _session, socket) do
    events = [
      %{id: 1, title: "Planning", start: ~N[2026-10-05 09:00:00], end: ~N[2026-10-05 10:00:00]},
      %{id: 2, title: "Offsite", start: ~D[2026-10-14], allDay: true}
    ]

    {:ok, assign(socket, events: events)}
  end

  def render(assigns) do
    ~H"""
    <.calendar
      id="calendar"
      events={@events}
      options={%{
        view: "dayGridMonth",
        headerToolbar: %{start: "prev,next today", center: "title", end: "dayGridMonth,timeGridWeek,listWeek"},
        firstDay: 1,
        nowIndicator: true
      }}
    />
    """
  end

  def handle_event("event_clicked", %{"id" => id}, socket), do: {:noreply, socket}
  def handle_event("date_clicked", %{"dateStr" => date}, socket), do: {:noreply, socket}
  def handle_event("month_changed", %{"month" => month, "year" => year}, socket), do: {:noreply, socket}
end
```

The container is rendered with `phx-update="ignore"`: LiveView never touches the calendar DOM,
while changes to `events` and `options` are still applied by the hook. Only options whose value
changed are re-applied, so unrelated re-renders don't reset the date or the view the user
navigated to.

### Callbacks

| Attribute         | EventCalendar callback | Default server event |
| ----------------- | ---------------------- | -------------------- |
| `on_event_click`  | `eventClick`           | `"event_clicked"`    |
| `on_date_click`   | `dateClick`            | `"date_clicked"`     |
| `on_month_change` | `datesSet`             | `"month_changed"`    |
| `on_event_drop`   | `eventDrop`            | none                 |
| `on_event_resize` | `eventResize`          | none                 |
| `on_select`       | `select`               | none                 |

Each attribute accepts:

- a **string**: the event pushed to the server with the callback payload
- a **`Phoenix.LiveView.JS`** struct: commands run on the client. Every `JS.push/2` in it
  receives the payload merged into its `:value`, so `JS.push("select_event")` gets the clicked
  event. The default event is not pushed when the commands already contain a `JS.push/2`.
- **`false`**: disables the default server event

```heex
<.calendar
  id="calendar"
  events={@events}
  on_event_click={JS.push("select_event") |> JS.show(to: "#event-modal")}
  on_date_click={false}
  on_month_change="range_changed"
/>
```

### Payloads

Dates are sent in two formats:

- `start`, `end`, `date`: instants with offset, e.g. `"2026-10-05T12:00:00.000Z"`
  (use `DateTime.from_iso8601/1`)
- `startStr`, `endStr`, `dateStr`: the wall-clock time shown in the calendar, e.g.
  `"2026-10-05T09:00:00"` (use `NaiveDateTime.from_iso8601/1`)

| Callback          | Payload keys                                                              |
| ----------------- | ------------------------------------------------------------------------- |
| `on_event_click`  | `id`, `event`, `view`                                                     |
| `on_date_click`   | `date`, `dateStr`, `allDay`, `resource`, `view`                           |
| `on_month_change` | `month`, `year`, `start`, `end`, `startStr`, `endStr`, `view`             |
| `on_event_drop`   | `id`, `event`, `oldEvent`, `delta`, `oldResource`, `newResource`, `view`  |
| `on_event_resize` | `id`, `event`, `oldEvent`, `startDelta`, `endDelta`, `view`               |
| `on_select`       | `start`, `end`, `startStr`, `endStr`, `allDay`, `resource`, `view`        |

- `event`: `id`, `title`, `start`, `end`, `startStr`, `endStr`, `allDay`, `resourceIds`,
  `display`, `backgroundColor`, `textColor`, `extendedProps`
- `view`: `type`, `title`, `currentStart`, `currentEnd`, `activeStart`, `activeEnd`
- `resource`: `id`, `title`, `extendedProps`
- `delta`: `years`, `months`, `days`, `seconds`

`month` and `year` come from the current period (`view.currentStart`), so in month views they
match the displayed month even though the grid starts in the previous one.

### Drag & drop, resize and selection

```elixir
def render(assigns) do
  ~H"""
  <.calendar
    id="calendar"
    events={@events}
    options={%{view: "timeGridWeek", editable: true, selectable: true}}
    on_event_drop="event_changed"
    on_event_resize="event_changed"
    on_select="range_selected"
  />
  """
end

def handle_event("event_changed", %{"id" => id, "event" => event}, socket) do
  case Events.reschedule(id, event["start"], event["end"]) do
    {:ok, _event} -> {:noreply, assign(socket, events: Events.list())}
    # Moves the event back to where it was
    {:error, _reason} -> {:reply, %{revert: true}, socket}
  end
end

def handle_event("range_selected", %{"start" => start, "end" => finish}, socket) do
  {:noreply, assign(socket, new_event: %{start: start, end: finish})}
end
```

### Driving the calendar from the server

```elixir
socket
|> CalendarComponent.push_command("calendar", :goto_date, [~D[2026-12-01]])
|> CalendarComponent.push_command("calendar", :set_option, ["view", "timeGridDay"])
```

Commands: `:goto_date`, `:next`, `:prev`, `:today`, `:refetch_events`, `:refetch_resources`,
`:unselect` and `:set_option`. Changing an option in `options` works as well, it is applied
whenever its value changes.

### Custom buttons

Custom toolbar buttons can push an event when clicked:

```elixir
options = %{
  headerToolbar: %{start: "prev,next today", center: "title", end: "addEvent"},
  customButtons: %{addEvent: %{text: "New event", push: "new_event_clicked"}}
}
```

The handler receives `%{"button" => "addEvent", "view" => view}`.

### JavaScript callbacks

Callback options can also reference global JavaScript functions, which run before the event is
pushed to the server:

```elixir
options={%{eventDidMount: "MyApp.Calendar.addTooltip", eventClick: "MyApp.Calendar.track"}}
```

## Usage with controllers

Use `static_calendar/1` in regular controller templates:

```heex
<.static_calendar
  id="calendar"
  events={@events}
  options={%{
    view: "dayGridMonth",
    eventClick: "MyApp.Calendar.onEventClick",
    dateClick: "MyApp.Calendar.onDateClick"
  }}
/>
```

```javascript
// assets/js/app.js
import {initStaticCalendars} from "calendar_component"   // or "calendar_component/static"

window.MyApp = {
  Calendar: {
    onEventClick(info) { window.location = `/events/${info.event.id}` },
    onDateClick(info) { window.location = `/events/new?date=${info.dateStr}` }
  }
}

initStaticCalendars()  // optional, calendars are also initialized on page load
```

Callback options given as strings are resolved to global functions. Short function bodies
receiving `info` are also accepted (max. 200 characters, keywords such as `function`, `eval`
or `setTimeout` are rejected), but global function references are recommended. See the
[static calendar guide](guides/static_calendar_usage.md) and [security notes](docs/security.md).

`initStaticCalendar(el)`, `getStaticCalendar(el)`, `updateStaticCalendarEvents(el, events)` and
`destroyStaticCalendar(el)` manage single calendars.

## Events

Events are maps that are encoded with Jason (structs must be converted to maps first):

```elixir
%{
  id: 1,
  title: "Meeting",
  start: ~N[2026-10-05 09:00:00],     # Date, NaiveDateTime, DateTime or ISO8601 string
  end: ~N[2026-10-05 10:00:00],       # optional
  allDay: false,                      # optional
  color: "#3b82f6",                   # optional, also backgroundColor / textColor
  resourceId: 1,                      # or resourceIds: [1, 2]
  display: "auto",                    # "background" for background events
  extendedProps: %{room: "A"}         # any extra data, sent back in payloads
}
```

- `Date` values (`"2026-10-05"`) are all-day.
- `NaiveDateTime` values are shown as is, in the calendar's time zone.
- `DateTime` values are encoded with an offset (`"...Z"`) and shifted to the calendar's time
  zone, which is the browser's by default. Set `timeZone: "UTC"` or `timeZone: "+02:00"` in
  `options` to use another one.
- Events without `end` last one day (all-day) or one hour.

## Options

Pass any EventCalendar option in `options`. Some common ones:

```elixir
%{
  view: "timeGridWeek",
  date: "2026-10-01",
  locale: "es",
  firstDay: 1,
  height: "700px",
  slotMinTime: "07:00",
  slotMaxTime: "20:00",
  hiddenDays: [0, 6],
  dayMaxEvents: true,
  nowIndicator: true,
  timeZone: "UTC",
  headerToolbar: %{start: "prev,next today", center: "title", end: "dayGridMonth,timeGridWeek"},
  views: %{timeGridFourDay: %{type: "timeGridDay", duration: %{days: 4}}}
}
```

Available views: `dayGridDay`, `dayGridWeek`, `dayGridMonth`, `timeGridDay`, `timeGridWeek`,
`listDay`, `listWeek`, `listMonth`, `listYear`, `resourceTimeGridDay`, `resourceTimeGridWeek`,
`resourceTimelineDay`, `resourceTimelineWeek`, `resourceTimelineMonth`, `resourceTimelineYear`,
plus custom views defined in `views` with a `type`. All plugins are loaded, so any view can be
used without extra configuration.

For compatibility, `initialView` is accepted as an alias of `view` and `headerToolbar` accepts
`left`/`right` as aliases of `start`/`end`.

### Resources

```elixir
options = %{
  view: "resourceTimelineWeek",
  resources: [
    %{id: 1, title: "Room A"},
    %{id: 2, title: "Room B", children: [%{id: 3, title: "Booth B1"}]}
  ]
}

events = [%{id: 1, title: "Workshop", start: "2026-10-05T09:00:00", end: "2026-10-05T12:00:00", resourceIds: [1, 3]}]
```

`resources` and `eventSources` can also be URLs (`%{url: "/api/resources"}`), refreshed with
`push_command(socket, id, :refetch_resources)` / `:refetch_events`.

## Upgrading from 0.2.x

- EventCalendar was upgraded from 4.5 to 5.17. Its CSS Grid layout and styles changed, so
  review custom CSS (see the [EventCalendar releases](https://github.com/vkurko/calendar/releases)).
- Event dates ending in `Z` or with an offset (for example encoded `DateTime`s) are now shifted
  to the calendar's time zone. Use `NaiveDateTime` or set `timeZone` to keep the old display.
- The `view` option is respected again (it was replaced by an `initialView` option EventCalendar
  doesn't support).
- JS commands given to the callback attributes now run (they were HTML-escaped and silently
  failed). Their `JS.push/2` operations receive the payload, and the default event is no longer
  pushed when they contain one. Make sure those events have `handle_event/3` clauses.
- Events are no longer filtered client side: events with `resourceIds` are shown, and an empty
  `events` list clears the calendar.
- `month_changed` reports the displayed month in month views (it used to report the month of
  the first visible day).
- The unused `tzdata` and `mimerl` dependencies and the placeholder `hello` function were removed.

## Development

```bash
mix setup                 # deps, esbuild, assets and format
cd assets && npm install  # EventCalendar sources
mix assets.build          # builds priv/static/assets
mix test                  # Elixir tests
cd assets && npm test     # JavaScript tests
```

## Acknowledgments

This library builds on [EventCalendar](https://github.com/vkurko/calendar) by Vlad Kurko.
Thanks to the EventCalendar project for providing a lightweight, flexible calendar core.

## License

MIT. See the `LICENSE` file for details.
