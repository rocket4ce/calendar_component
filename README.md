# CalendarComponent

[![Hex.pm](https:Register the JS hook in your app's LiveSocket:

```js
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"
import CalendarHooks from "calendar_component"

const liveSocket = new LiveSocket("/live", Socket, { hooks: CalendarHooks })
liveSocket.connect()
```s.io/hexpm/v/calendar_component.svg)](https://hex.pm/packages/calendar_component)
[![Docs](https://img.shields.io/badge/docs-hexdocs.pm-blue)](https://hexdocs.pm/calendar_component)

Phoenix LiveView component library that renders an interactive calendar powered by EventCalendar and a LiveView JavaScript hook. It ships as a library (not a full Phoenix app) and compiles colocated JS/CSS assets.

## Usage

Render the calendar component in HEEx and wire events with Phoenix LiveView JS:

```elixir
alias Phoenix.LiveView.JS

~H"""
<.calendar
	id="calendar"
	events={@events}
	on_event_click={JS.push("event_clicked", value: %{id: event.id})}
	on_date_click={JS.push("date_clicked", value: %{date: date})}
	on_month_change={JS.push("month_changed", value: %{month: month})}
/>
"""
```

Server-side handlers (example):

```elixir
@impl true
def handle_event("event_clicked", %{"id" => id}, socket), do: {:noreply, socket}

@impl true
def handle_event("date_clicked", %{"date" => date}, socket), do: {:noreply, socket}

@impl true
def handle_event("month_changed", %{"month" => month, "year" => year}, socket), do: {:noreply, socket}
```

Register the JS hook in your app’s LiveSocket (ensure the built asset is loaded so `window.LiveCalendarHooks` exists):

```js
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"

const Hooks = window.LiveCalendarHooks || {}
const liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks })
liveSocket.connect()
```

Note: This library compiles a hook at `priv/static/assets/calendar-hooks.js` and CSS at `priv/static/assets/calendar-hooks.css`. Ensure the asset is served/loaded in your host app (or copy the hook code into your app assets and register it).

### Options mapping

- Pass any EventCalendar options via the `:options` assign of `<.calendar ... />`. They are forwarded to the JS calendar.
- Special integration key: `options.lv` lets you rename the server events the hook will push:
	- `lv.onEventClick` (default: `"event_clicked"`)
	- `lv.onDateClick` (default: `"date_clicked"`)
	- `lv.onMonthChange` (default: `"month_changed"`)
- If you provide JS handlers in `options.eventClick`, `options.dateClick`, or `options.datesSet`, the hook composes them and still pushes to LiveView.
- The hook auto-picks plugins based on `options.view` (`timeGrid*`, `dayGrid*`, `list*`). You can also pass `options.plugins` explicitly if needed.

Implemented features in hook/component:
- Container render with `phx-hook="LiveCalendar"` and data-json for `events`/`options`.
- JS initialization with `createCalendar(...)` and plugin selection.
- LiveView push for `eventClick`, `dateClick`, `datesSet` (month change).
- Runtime updates via `setOption("events", ...)` and applying changed options on `updated`.
- Cleanup on `destroyed` with `destroyCalendar(...)`.

Refer to `docs/event_calendar.md` for the full list of EventCalendar options and methods. Most options can be passed through `:options`; unsupported options should be raised as issues/PRs if necessary.

## Installation

Add `calendar_component` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:calendar_component, "~> 0.1.3"}
  ]
end
```

### JavaScript Setup

The library provides JavaScript hooks that need to be registered with Phoenix LiveView. There are two main approaches:

#### Option 1: Direct Import (Recommended)

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

#### Option 2: Using the compiled assets

You can also include the compiled JavaScript file directly. First, add the CSS to your `assets/css/app.css`:

```css
@import "../deps/calendar_component/priv/static/assets/calendar-hooks.css";
```

Then in your layout template, include the JavaScript:

```heex
<script src={~p"/assets/deps/calendar_component/priv/static/assets/calendar-hooks.js"} defer></script>
```

And register the hooks:

```javascript
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"

const Hooks = window.LiveCalendarHooks || {}
let liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks })
liveSocket.connect()
```

## Phoenix examples

### 1) Basic: static render with events

LiveView module:

```elixir
defmodule MyAppWeb.CalendarLive do
	use MyAppWeb, :live_view

	def mount(_params, _session, socket) do
		events = [
			%{id: 1, title: "Meeting", start: "2025-08-01T09:00:00"},
			%{id: 2, title: "Demo", start: "2025-08-02"}
		]
		{:ok, assign(socket, events: events)}
	end
end
```

HEEx:

```elixir
<.calendar id="calendar" events={@events} />
```

### 2) Handling calendar events (event/date/month)

Use the default event names the hook pushes: "event_clicked", "date_clicked", "month_changed".

```elixir
@impl true
def handle_event("event_clicked", %{"id" => id}, socket) do
	{:noreply, put_flash(socket, :info, "Event #{id} clicked")}
end

@impl true
def handle_event("date_clicked", %{"date" => iso}, socket) do
	{:noreply, put_flash(socket, :info, "Date #{iso}")}
end

@impl true
def handle_event("month_changed", %{"month" => m, "year" => y}, socket) do
	{:noreply, socket}
end
```

### 3) Customize view and toolbar

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

### 4) Live update events (add after date click)

```elixir
@impl true
def handle_event("date_clicked", %{"date" => iso}, socket) do
	new = %{id: System.unique_integer([:positive]), title: "New", start: iso}
	{:noreply, update(socket, :events, fn ev -> [new | ev] end)}
end
```

### 5) Rename events the hook pushes (options.lv)

```elixir
opts = %{lv: %{onEventClick: "my_event_click", onDateClick: "my_date_click", onMonthChange: "my_month"}}

~H"""
<.calendar id="cal_lv" events={@events} options={opts} />
"""

@impl true
def handle_event("my_event_click", payload, socket), do: {:noreply, socket}
```

### 6) List view and localization

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

### 7) Resource Timeline (plugins and resources)

For resource/timeline views, pass plugins explicitly in `options.plugins` and data in `options.resources`.

```elixir
resources = [
	%{id: "r1", title: "Room A"},
	%{id: "r2", title: "Room B"}
]

events = [
	%{id: "e1", title: "Booking", start: "2025-08-03T10:00:00", end: "2025-08-03T12:00:00", resourceId: "r1"}
]

opts = %{
	view: "resourceTimelineWeek",
	resources: resources,
	plugins: :keep_plugins, # see note below
	headerToolbar: %{start: "title", end: "today prev,next"}
}

~H"""
<.calendar id="cal_resources" events={events} options={opts} />
"""

# Note: This package auto-selects plugins by `view` (timeGrid/dayGrid/list).
# For ResourceTimeline/ResourceTimeGrid, ensure your asset includes the needed plugins.
# If you use the hooks compiled by this library, consider copying the hook into your app
# and importing the plugins from `@event-calendar/core` you need, for example:
#   import { ResourceTimeline, ResourceTimeGrid } from "@event-calendar/core"
# and pass `options.plugins: [ResourceTimeline]`.
```

### 8) Drag & drop and resize editing

Enable `editable: true` and handle `eventDrop`/`eventResize` on the server or client side.

```elixir
opts = %{
	view: "timeGridWeek",
	editable: true,
	eventDurationEditable: true
}

~H"""
<.calendar id="cal_edit" events={@events} options={opts} />
"""

# On the server side, the hook does not push these events automatically.
# You can handle it client-side with `options.eventDrop`/`eventResize` and
# use `pushEvent` manually (by copying/extending the hook in your app) or send via AJAX.
```

## Acknowledgments

This library builds on EventCalendar by Vlad Kurko: https://github.com/vkurko/calendar/
Thanks to the EventCalendar project for providing a lightweight, flexible calendar core.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
