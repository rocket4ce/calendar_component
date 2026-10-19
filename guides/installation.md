# Installation

## 1) Dependency

Add the library to your dependencies in `mix.exs` and fetch it:

```elixir
def deps do
  [
    {:calendar_component, "~> 0.3.0"}
  ]
end
```

```bash
mix deps.get
```

The JavaScript and CSS are prebuilt in `priv/static/assets`, so there is nothing to install
with npm.

## 2) JavaScript

Phoenix's default esbuild configuration sets `NODE_PATH` to `deps/`, so the package can be
imported by name from `assets/js/app.js`.

### LiveView

```javascript
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"
import CalendarHooks from "calendar_component"

const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
const liveSocket = new LiveSocket("/live", Socket, {
  params: {_csrf_token: csrfToken},
  hooks: {...CalendarHooks}
})
liveSocket.connect()
```

If you already have hooks (including colocated hooks), merge them:

```javascript
import {hooks as colocatedHooks} from "phoenix-colocated/my_app"

const liveSocket = new LiveSocket("/live", Socket, {
  params: {_csrf_token: csrfToken},
  hooks: {...colocatedHooks, ...CalendarHooks}
})
```

### Controllers (no LiveView)

```javascript
import {initStaticCalendars} from "calendar_component"

// Calendars are initialized automatically on page load; call it again after inserting
// calendars dynamically.
initStaticCalendars()
```

Apps that don't use LiveView at all can import the smaller `calendar_component/static` bundle
instead. Don't import both entry points: each one includes its own copy of EventCalendar.

## 3) CSS

Import the EventCalendar stylesheet in `assets/css/app.css`:

```css
@import "../../deps/calendar_component/priv/static/assets/main.css";
```

esbuild also emits the stylesheet next to `app.js` when the package is imported, but the
default Phoenix layout only links the Tailwind output, so the `@import` above is the reliable
way to load it.

## 4) Verification

```elixir
defmodule MyAppWeb.CalendarLive do
  use MyAppWeb, :live_view

  import LiveCalendar.Components

  def mount(_params, _session, socket) do
    today = Date.utc_today()

    events = [
      %{id: 1, title: "Sample event", start: NaiveDateTime.new!(today, ~T[10:00:00]), end: NaiveDateTime.new!(today, ~T[11:00:00])}
    ]

    {:ok, assign(socket, events: events)}
  end

  def render(assigns) do
    ~H"""
    <.calendar id="my-calendar" events={@events} options={%{view: "dayGridMonth"}} />
    """
  end

  def handle_event(_event, _params, socket), do: {:noreply, socket}
end
```

For a controller:

```elixir
defmodule MyAppWeb.EventController do
  use MyAppWeb, :controller

  def index(conn, _params) do
    events = [%{id: 1, title: "Sample event", start: Date.utc_today()}]
    render(conn, :index, events: events)
  end
end
```

```heex
<%!-- lib/my_app_web/controllers/event_html/index.html.heex --%>
<LiveCalendar.Components.static_calendar id="my-static-calendar" events={@events} options={%{view: "dayGridMonth"}} />
```

## 5) Versions and compatibility

- Elixir >= 1.18
- Phoenix LiveView ~> 1.1 (tested with 1.2)
- EventCalendar 5.17.2 (bundled, see `CalendarComponent.event_calendar_version/0`)
- Current versions of Chrome, Firefox, Safari and Edge
