# Static Calendar Usage Guide

`static_calendar/1` renders a calendar in regular controller templates, without LiveView.
Interactions are handled with JavaScript callbacks.

## 1. Basic setup

```elixir
defmodule MyAppWeb.CalendarController do
  use MyAppWeb, :controller

  def index(conn, _params) do
    events = [
      %{id: 1, title: "Meeting", start: ~N[2026-10-05 10:00:00], end: ~N[2026-10-05 11:00:00]},
      %{id: 2, title: "Demo", start: ~D[2026-10-06]}
    ]

    render(conn, :index, events: events)
  end
end
```

```heex
<%!-- calendar_html/index.html.heex --%>
<LiveCalendar.Components.static_calendar
  id="my-calendar"
  class="mt-4"
  events={@events}
  options={%{view: "dayGridMonth"}}
/>
```

The element gets the `static-calendar` class plus the classes in `class`. Without a `view`
option the static calendar opens in `dayGridMonth`.

## 2. JavaScript setup

```javascript
// assets/js/app.js
import {initStaticCalendars} from "calendar_component"
```

Calendars are initialized on `DOMContentLoaded`. Call `initStaticCalendars()` again after
inserting calendars into the page, already initialized ones are skipped. Apps that don't use
LiveView can import from `"calendar_component/static"`, a bundle without the LiveView hook.

Other functions:

```javascript
import {
  initStaticCalendar,          // (element) -> calendar
  getStaticCalendar,           // (element) -> calendar | null
  updateStaticCalendarEvents,  // (element, events)
  destroyStaticCalendar        // (element)
} from "calendar_component"

const calendar = getStaticCalendar(document.getElementById("my-calendar"))
calendar.setOption("view", "timeGridWeek")
calendar.gotoDate("2026-12-01")
```

The returned object is the EventCalendar instance, see its
[methods](https://github.com/vkurko/calendar#methods).

## 3. Callbacks

Callback options (`eventClick`, `dateClick`, `datesSet`, `eventDrop`, `eventResize`, `select`,
`eventDidMount`, `eventMouseEnter`, `viewDidMount`, ...) and `customButtons.*.click` can be
given as strings.

### Global function references (recommended)

```javascript
window.MyApp = {
  Calendar: {
    onEventClick(info) {
      window.location = `/events/${info.event.id}`
    },

    onDateClick(info) {
      window.location = `/events/new?date=${info.dateStr}`
    },

    onRangeChange(info) {
      console.log("Visible range:", info.startStr, info.endStr, info.view.type)
    }
  }
}
```

```heex
<LiveCalendar.Components.static_calendar
  id="my-calendar"
  events={@events}
  options={%{
    view: "dayGridMonth",
    eventClick: "MyApp.Calendar.onEventClick",
    dateClick: "MyApp.Calendar.onDateClick",
    datesSet: "MyApp.Calendar.onRangeChange"
  }}
/>
```

References are resolved when the calendar is created, so define the functions before the
page finishes loading (for example in `app.js`). References that don't exist are ignored with
a console warning.

### Short function bodies (limited)

```heex
<LiveCalendar.Components.static_calendar
  id="my-calendar"
  events={@events}
  options={%{eventClick: "console.log('Event:', info.event.title)"}}
/>
```

The body receives `info`. It is limited to 200 characters and bodies containing `function`,
`=>`, `eval`, `setTimeout`, `setInterval`, `import`, `constructor` or `prototype` are
rejected. Never build these strings from user input; see the [security notes](../docs/security.md).

## 4. Complete example: loading and saving events over HTTP

Load events from a JSON endpoint with `eventSources`, and save changes made with drag & drop.

### Controller

```elixir
defmodule MyAppWeb.EventController do
  use MyAppWeb, :controller

  def index(conn, _params), do: render(conn, :index)

  # GET /api/events?start=...&end=...
  def feed(conn, %{"start" => start, "end" => finish}) do
    json(conn, Events.between(start, finish))
  end

  # PUT /api/events/:id
  def update(conn, %{"id" => id, "start" => start, "end" => finish}) do
    case Events.reschedule(id, start, finish) do
      {:ok, event} -> json(conn, event)
      {:error, _changeset} -> send_resp(conn, 422, "")
    end
  end
end
```

### Template

```heex
<LiveCalendar.Components.static_calendar
  id="calendar"
  options={%{
    view: "timeGridWeek",
    editable: true,
    eventSources: [%{url: ~p"/api/events"}],
    eventDrop: "MyApp.Calendar.save",
    eventResize: "MyApp.Calendar.save"
  }}
/>
```

### JavaScript

```javascript
import {initStaticCalendars} from "calendar_component"

const csrfToken = document.querySelector("meta[name='csrf-token']").content
const pad = n => String(n).padStart(2, "0")
const wallClock = d =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:00`

window.MyApp = {
  Calendar: {
    async save(info) {
      const response = await fetch(`/api/events/${info.event.id}`, {
        method: "PUT",
        headers: {"content-type": "application/json", "x-csrf-token": csrfToken},
        body: JSON.stringify({start: wallClock(info.event.start), end: wallClock(info.event.end)})
      })

      // Move the event back when the server rejects the change
      if (!response.ok) info.revert()
    }
  }
}

initStaticCalendars()
```

EventCalendar requests the URL with `start` and `end` query parameters whenever it needs
events for a new range. `getStaticCalendar(el).refetchEvents()` reloads them.

## 5. Styling

Import the stylesheet in `assets/css/app.css`:

```css
@import "../../deps/calendar_component/priv/static/assets/main.css";
```

Use the `ec-dark` / `ec-auto-dark` classes for the dark theme, or override the CSS variables
of `.ec` (see the [EventCalendar theming docs](https://github.com/vkurko/calendar#theming)).
