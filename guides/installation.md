# Installation

This guide explains how to install and set up `calendar_component` in your Phoenix project.

## 1) Dependency in mix.exs

Add the library to your dependencies and fetch packages:

```elixir
# mix.exs

  [
    {:calendar_component, "~> 0.1.3"}
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
    {:calendar_component, "~> 0.1.3"}
  ]
end
```

Then install deps:

```bash
mix deps.get
```

## 2) JavaScript Setup

This library provides a LiveView hook that initializes EventCalendar. The easiest way to set it up is to import the module directly.

### Option A: Direct Import (Recommended)

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

### Option B: Using prebuilt assets

If you prefer to use the prebuilt assets, first add the CSS to your `assets/css/app.css`:

```css
@import "../deps/calendar_component/priv/static/assets/calendar-hooks.css";
```

Then in your layout template, include the JavaScript:

```heex
<script src={~p"/assets/deps/calendar_component/priv/static/assets/calendar-hooks.js"} defer></script>
```

And register the hooks in your `assets/js/app.js`:

```javascript
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"

const Hooks = window.LiveCalendarHooks || {}
let liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks })
liveSocket.connect()
```

## 3) Verification

Once you've set up the hooks, you can verify the installation by using the calendar component in a LiveView:

```elixir
defmodule MyAppWeb.CalendarLive do
  use MyAppWeb, :live_view
  alias LiveCalendar.Components

  def render(assigns) do
    ~H"""
    <div>
      <h1>My Calendar</h1>
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

## 4) Versions and compatibility

- Elixir >= 1.18
- Phoenix LiveView ~> 1.1.4
- EventCalendar core ^4.5.1

When building for production, remember to include the calendar_component assets in your build process.
