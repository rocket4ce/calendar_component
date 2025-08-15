# Installation

This guide explains how to install and set up `calendar_component` in your Phoenix project.

## 1) Dependency in mix.exs

Add the library to your dependencies and fetch packages:

```elixir
# mix.exs

  [
    {:calendar_component, "~> 0.1.2"}
  ]
end
```

Then install deps:

```bash
mix deps.get
```

## 2) Assets (JS/CSS for the hook)

This library provides a LiveView hook that initializes EventCalendar. You have two options:

- Use the library’s prebuilt assets (placed under `priv/static/assets/`).
- Copy the hook into your app and build it with your own assets.

To get started quickly, ensure your layout serves the generated `calendar-hooks.js`. If your app already has its own asset pipeline, copy the hook’s code into it as needed.

Build the library assets:

```bash
mix assets.build
```

This generates or updates:
- `priv/static/assets/calendar-hooks.js`
- `priv/static/assets/calendar-hooks.css`

Include these files in your layout or load them via your host app’s asset pipeline.

## 3) Register the Hook in LiveSocket

In your Phoenix app, register the hook when creating the `LiveSocket` (make sure `calendar-hooks.js` is loaded so `window.LiveCalendarHooks` exists):

```javascript
import { Socket } from "phoenix"
import { LiveSocket } from "phoenix_live_view"

const Hooks = window.LiveCalendarHooks || {}
const liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks })
liveSocket.connect()
```

## 4) Versions and compatibility

- Elixir >= 1.18
- Phoenix LiveView ~> 1.1.4
- esbuild ~> 0.10.0 (if you build assets yourself)

When building for production, remember to run:

```bash
MIX_ENV=prod mix assets.deploy
```

This ensures assets are minified and ready for production.
