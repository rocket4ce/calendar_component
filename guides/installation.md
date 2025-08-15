# Installation

This guide explains how to install and set up `calendar_component` in your Phoenix project.

## 1) Dependency in mix.exs

Add the library to your dependencies and fetch packages:

```elixir
# mix.exs

  [
    {:calendar_component, "~> 0.1.5"}
  ]
end
```

Then install deps:

```bash
mix deps.get
```

# Installation

This guide explains how to install and set up `calendar_component` in your Phoenix project.

## 1) Dependency in mix.exs

Add the library to your dependencies and fetch packages:

```elixir
# mix.exs
def deps do
  [
    {:calendar_component, "~> 0.1.5"}
  ]
end
```

Then install deps:

```bash
mix deps.get
```

## 2) JavaScript Setup

This library provides two ways to use calendars:
1. **LiveView Integration**: Using hooks for real-time calendar interactions
2. **Static Calendar**: For regular Phoenix controllers without LiveView

### For LiveView Applications

#### Option A: Direct Import (Recommended)

In your `assets/js/app.js`:

```javascript
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"
import CalendarHooks from "calendar_component"

// Register the calendar hooks
let liveSocket = new LiveSocket("/live", Socket, {
  hooks: CalendarHooks
})
liveSocket.connect()
```

### For Regular Phoenix Controllers

In your `assets/js/app.js`:

```javascript
import { initStaticCalendars } from "calendar_component"

// Initialize static calendars when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  initStaticCalendars()
})
```

#### Option B: Using prebuilt assets

If you prefer to use the prebuilt assets, first add the CSS to your `assets/css/app.css`:

```css
@import "../deps/calendar_component/priv/static/assets/calendar-hooks.css";
```

For LiveView, include the LiveView hooks in your layout:

```heex
<script src={~p"/assets/deps/calendar_component/priv/static/assets/calendar-hooks.js"} defer></script>
```

For controllers, include the static calendar script:

```heex
<script src={~p"/assets/deps/calendar_component/priv/static/assets/static-calendar.js"} defer></script>
```

And register the hooks in your `assets/js/app.js`:

```javascript
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"

// For LiveView
const Hooks = window.LiveCalendarHooks || {}
let liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks })
liveSocket.connect()

// For static calendars (controllers)
// The static calendar initializes automatically when the page loads
```

## 3) Verification

Once you've set up the hooks, you can verify the installation by using the calendar component:

### In a LiveView

```elixir
defmodule MyAppWeb.CalendarLive do
  use MyAppWeb, :live_view
  alias LiveCalendar.Components

  def render(assigns) do
    ~H"""
    <div>
      <h1>My LiveView Calendar</h1>
      <Components.calendar
        id="my-calendar"
        events={@events}
        options={%{view: "dayGridMonth"}}
      />
    </div>
    """
  end

  def mount(_params, _session, socket) do
    events = [
      %{
        id: 1,
        title: "Sample Event",
        start: "2024-12-15T10:00:00",
        end: "2024-12-15T11:00:00"
      }
    ]

    {:ok, assign(socket, events: events)}
  end
end
```

### In a Regular Controller

```elixir
# Controller
defmodule MyAppWeb.EventController do
  use MyAppWeb, :controller
  import LiveCalendar.Components

  def index(conn, _params) do
    events = [
      %{
        id: 1,
        title: "Sample Event",
        start: "2024-12-15T10:00:00",
        end: "2024-12-15T11:00:00"
      }
    ]

    render(conn, "index.html", events: events)
  end
end

# Template: events/index.html.heex
<div>
  <h1>My Static Calendar</h1>
  <.static_calendar
    id="my-static-calendar"
    events={@events}
    options={%{view: "dayGridMonth"}}
  />
</div>
```

## 4) Versions and compatibility

- Elixir >= 1.18
- Phoenix LiveView ~> 1.1.4
- EventCalendar core ^4.5.1

When building for production, remember to include the calendar_component assets in your build process.
