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

### With LiveView

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

### With Regular Phoenix Controllers

For traditional Phoenix controllers (without LiveView), use the static calendar component:

```elixir
# In your controller
defmodule MyAppWeb.EventController do
  use MyAppWeb, :controller
  import LiveCalendar.Components

  def index(conn, _params) do
    events = [
      %{id: 1, title: "Meeting", start: "2025-08-01T09:00:00"},
      %{id: 2, title: "Demo", start: "2025-08-02"}
    ]

    render(conn, "index.html", events: events)
  end
end
```

In your template:

```elixir
# events/index.html.heex
<.static_calendar
  id="static-calendar"
  events={@events}
  options={%{
    view: "dayGridMonth",
    eventClick: "function(info) {
      alert('Event: ' + info.event.title);
    }",
    dateClick: "function(info) {
      console.log('Date clicked:', info.dateStr);
    }"
  }}
/>
```

The static calendar automatically initializes when the page loads. Events are handled via JavaScript callbacks defined in the options.

Register the JS hook in your app’s LiveSocket (ensure the built asset is loaded so `window.LiveCalendarHooks` exists):

```js
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"

const Hooks = window.LiveCalendarHooks || {}
const liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks })
liveSocket.connect()
```

**Important note**:

Starting with version **0.2.0**, the library includes full support for resource views (`resourceTimeGridWeek`, `resourceTimelineWeek`) with proper event validation and error handling. CSS is automatically included when you import the JavaScript component.

For resource views, make sure to:
1. Define `options.resources` with valid resource objects
2. Assign `resourceId` to events that matches existing resource IDs
3. Use valid ISO date strings for event start/end times

If you still have CSS issues, you can manually import it in your `assets/css/app.css`:

```css
/* In assets/css/app.css - Only if necessary */
@import "../../deps/calendar_component/priv/static/assets/main.css";
```### Options mapping

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
    {:calendar_component, "~> 0.2.0"}
  ]
end
```

### JavaScript Setup

The library provides JavaScript hooks that need to be registered with Phoenix LiveView, and also supports static calendar initialization for regular Phoenix controllers.

#### For LiveView (Option 1): Direct Import (Recommended)

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

#### For Regular Controllers: Static Calendar

In your `assets/js/app.js`:

```javascript
import { initStaticCalendars } from "calendar_component"

// Initialize static calendars when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  initStaticCalendars()
})
```

#### Option 2: Using the compiled assets

You can also include the compiled JavaScript file directly. The CSS is automatically included when you import the JavaScript modules.

For LiveView, include the LiveView hooks:

```heex
<script src={~p"/assets/deps/calendar_component/priv/static/assets/calendar-hooks.js"} defer></script>
```

For regular controllers, include the static calendar:

```heex
<script src={~p"/assets/deps/calendar_component/priv/static/assets/static-calendar.js"} defer></script>
```

Both JavaScript files automatically include their respective CSS styles, so no additional CSS imports are needed.

## Phoenix examples

### LiveView Examples

#### 1) Basic calendar with events

LiveView module:

```elixir
defmodule MyAppWeb.CalendarLive do
  use MyAppWeb, :live_view

  def mount(_params, _session, socket) do
    events = [
      %{id: 1, title: "Team Meeting", start: "2025-08-01T09:00:00", end: "2025-08-01T10:00:00"},
      %{id: 2, title: "Project Demo", start: "2025-08-02T14:00:00", color: "#FE6B64"},
      %{id: 3, title: "All-day Event", start: "2025-08-03", allDay: true, color: "#B29DD9"}
    ]
    {:ok, assign(socket, events: events)}
  end
end
```

HEEx template:

```elixir
<.calendar id="basic-calendar" events={@events} />
```

#### 2) Interactive calendar with event handling

```elixir
defmodule MyAppWeb.InteractiveCalendarLive do
  use MyAppWeb, :live_view
  alias Phoenix.LiveView.JS

  def render(assigns) do
    ~H"""
    <div>
      <.calendar
        id="interactive-calendar"
        events={@events}
        on_event_click={JS.push("event_clicked")}
        on_date_click={JS.push("date_clicked")}
        on_month_change={JS.push("month_changed")}
        options={%{
          view: "dayGridMonth",
          selectable: true,
          nowIndicator: true
        }}
      />
    </div>
    """
  end

  def mount(_params, _session, socket) do
    events = create_sample_events()
    {:ok, assign(socket, events: events)}
  end

  @impl true
  def handle_event("event_clicked", %{"id" => id}, socket) do
    {:noreply, put_flash(socket, :info, "Event #{id} clicked")}
  end

  @impl true
  def handle_event("date_clicked", %{"date" => date}, socket) do
    # Add new event on date click
    new_event = %{
      id: System.unique_integer([:positive]),
      title: "New Event",
      start: date,
      color: "#779ECB"
    }
    events = [new_event | socket.assigns.events]
    {:noreply, assign(socket, events: events)}
  end

  @impl true
  def handle_event("month_changed", %{"month" => month, "year" => year}, socket) do
    {:noreply, put_flash(socket, :info, "Viewing #{month}/#{year}")}
  end

  defp create_sample_events do
    today = Date.utc_today()
    [
      %{
        id: 1,
        title: "Morning Meeting",
        start: "#{today}T09:00:00",
        end: "#{today}T10:00:00",
        color: "#FE6B64"
      },
      %{
        id: 2,
        title: "Lunch Break",
        start: "#{Date.add(today, 1)}T12:00:00",
        end: "#{Date.add(today, 1)}T13:00:00",
        color: "#B29DD9"
      }
    ]
  end
end
```

#### 3) Advanced calendar with custom toolbar and views

```elixir
def render(assigns) do
  ~H"""
  <.calendar
    id="advanced-calendar"
    events={@events}
    options={%{
      view: "timeGridWeek",
      headerToolbar: %{
        start: "prev,next today",
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
      },
      scrollTime: "09:00:00",
      dayMaxEvents: true,
      nowIndicator: true,
      selectable: true,
      selectMirror: true,
      weekends: true,
      views: %{
        timeGridWeek: %{pointer: true},
        dayGridMonth: %{dayMaxEvents: 3}
      }
    }}
  />
  """
end
```

#### 4) Resource calendar with timeline view

```elixir
def render(assigns) do
  ~H"""
  <.calendar
    id="resource-calendar"
    events={@events}
    options={%{
      view: "resourceTimeGridWeek",
      resources: [
        %{id: 1, title: "Resource A"},
        %{id: 2, title: "Resource B"},
        %{id: 3, title: "Resource C"}
      ],
      headerToolbar: %{
        start: "prev,next today",
        center: "title",
        end: "resourceTimeGridWeek,resourceTimelineWeek"
      },
      scrollTime: "08:00:00",
      slotMinTime: "08:00:00",
      slotMaxTime: "20:00:00"
    }}
  />
  """
end

defp create_resource_events do
  [
    %{
      id: 1,
      title: "Resource A Meeting",
      start: "2025-08-15T10:00:00",
      end: "2025-08-15T11:00:00",
      resourceId: 1,
      color: "#FE6B64"
    },
    %{
      id: 2,
      title: "Resource B Workshop",
      start: "2025-08-15T14:00:00",
      end: "2025-08-15T16:00:00",
      resourceId: 2,
      color: "#779ECB"
    }
  ]
end
```

### Controller Examples (Static Calendar)

#### 1) Basic static calendar

```elixir
# Controller
defmodule MyAppWeb.EventController do
  use MyAppWeb, :controller
  import LiveCalendar.Components

  def index(conn, _params) do
    events = [
      %{id: 1, title: "Team Meeting", start: "2025-08-15T10:00:00", color: "#FE6B64"},
      %{id: 2, title: "Project Review", start: "2025-08-16T14:00:00", color: "#B29DD9"},
      %{id: 3, title: "All-day Event", start: "2025-08-17", allDay: true, color: "#779ECB"}
    ]
    render(conn, "index.html", events: events)
  end
end
```

```elixir
# Template: events/index.html.heex
<div class="calendar-container">
  <h1>My Events</h1>
  <.static_calendar
    id="events-calendar"
    events={@events}
    options={%{
      view: "dayGridMonth",
      height: "600px",
      nowIndicator: true
    }}
  />
</div>
```

#### 2) Interactive static calendar with JavaScript callbacks

```elixir
# Template with interactive features
<.static_calendar
  id="interactive-static-calendar"
  events={@events}
  options={%{
    view: "timeGridWeek",
    headerToolbar: %{
      start: "prev,next today",
      center: "title",
      end: "dayGridMonth,timeGridWeek,timeGridDay"
    },
    scrollTime: "09:00:00",
    selectable: true,
    eventClick: "function(info) {
      alert('Event: ' + info.event.title + '\\nStart: ' + info.event.start);
      // Or redirect to event details
      // window.location.href = '/events/' + info.event.id;
    }",
    dateClick: "function(info) {
      if (confirm('Create new event on ' + info.dateStr + '?')) {
        window.location.href = '/events/new?date=' + info.dateStr + '&time=' + info.dateStr;
      }
    }",
    select: "function(info) {
      var title = prompt('Event title:');
      if (title) {
        // Here you could make an AJAX call to create the event
        fetch('/events', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            title: title,
            start: info.startStr,
            end: info.endStr
          })
        }).then(() => window.location.reload());
      }
    }"
  }}
/>
```

#### 3) Advanced resource timeline calendar

```elixir
def show(conn, _params) do
  # Create events for the week
  events = create_weekly_events()
  resources = create_resources()

  render(conn, "show.html", events: events, resources: resources)
end

defp create_weekly_events do
  today = Date.utc_today()
  days = for i <- 0..6 do
    Date.add(today, i - Date.day_of_week(today) + 1)
    |> Date.to_string()
  end

  [
    # Background events
    %{start: "#{Enum.at(days, 0)} 00:00", end: "#{Enum.at(days, 0)} 09:00", resourceId: 1, display: "background"},
    %{start: "#{Enum.at(days, 1)} 12:00", end: "#{Enum.at(days, 1)} 14:00", resourceId: 2, display: "background"},
    %{start: "#{Enum.at(days, 2)} 17:00", end: "#{Enum.at(days, 2)} 24:00", resourceId: 1, display: "background"},

    # Regular events
    %{start: "#{Enum.at(days, 0)} 10:00", end: "#{Enum.at(days, 0)} 14:00", resourceId: 1,
      title: "The calendar can display background and regular events", color: "#FE6B64"},
    %{start: "#{Enum.at(days, 1)} 16:00", end: "#{Enum.at(days, 2)} 08:00", resourceId: 2,
      title: "An event may span to another day", color: "#B29DD9"},
    %{start: "#{Enum.at(days, 2)} 09:00", end: "#{Enum.at(days, 2)} 13:00", resourceId: 2,
      title: "Events can be assigned to resources", color: "#779ECB"},
    %{start: "#{Enum.at(days, 3)} 14:00", end: "#{Enum.at(days, 3)} 20:00", resourceId: 1,
      title: "Meeting Room A", color: "#FE6B64"},
    %{start: "#{Enum.at(days, 3)} 15:00", end: "#{Enum.at(days, 3)} 18:00", resourceId: 1,
      title: "Overlapping events are positioned properly", color: "#779ECB"},
    %{start: "#{Enum.at(days, 5)} 10:00", end: "#{Enum.at(days, 5)} 16:00", resourceId: 2,
      title: "Workshop: Advanced Phoenix", color: "#779ECB"},
    %{start: "#{Enum.at(days, 1)}", end: "#{Enum.at(days, 3)}", resourceId: 1,
      title: "All-day conference", color: "#B29DD9", allDay: true}
  ]
end

defp create_resources do
  [
    %{id: 1, title: "Conference Room A"},
    %{id: 2, title: "Conference Room B"},
    %{id: 3, title: "Meeting Room C"},
    %{
      id: 4,
      title: "Building Floor 2",
      children: [
        %{id: 5, title: "Room 2A"},
        %{id: 6, title: "Room 2B"},
        %{
          id: 7,
          title: "Executive Suite",
          children: [
            %{id: 8, title: "Board Room"},
            %{id: 9, title: "VIP Lounge"}
          ]
        }
      ]
    }
  ]
end
```

```elixir
# Template: events/show.html.heex
<.static_calendar
  id="resource-timeline-calendar"
  events={@events}
  options={%{
    view: "resourceTimelineWeek",
    headerToolbar: %{
      start: "prev,next today",
      center: "title",
      end: "dayGridMonth,timeGridWeek,resourceTimeGridWeek,resourceTimelineWeek"
    },
    resources: @resources,
    scrollTime: "09:00:00",
    views: %{
      resourceTimelineWeek: %{
        slotDuration: "00:15",
        slotLabelInterval: "01:00",
        slotMinTime: "08:00",
        slotMaxTime: "20:00",
        slotWidth: 20
      }
    },
    dayMaxEvents: true,
    nowIndicator: true,
    selectable: true,
    eventClick: "function(info) {
      console.log('Resource Event:', info.event.title, 'Resource:', info.event.getResources()[0]?.title);
    }"
  }}
/>
```

#### 4) Dark theme calendar

```elixir
<.static_calendar
  id="dark-calendar"
  events={@events}
  options={%{
    view: "timeGridWeek",
    theme: "dark",
    headerToolbar: %{
      start: "prev,next today",
      center: "title",
      end: "dayGridMonth,timeGridWeek,timeGridDay"
    },
    height: "600px",
    nowIndicator: true,
    eventClick: "function(info) {
      alert('Dark theme - Event: ' + info.event.title);
    }"
  }}
/>
```

#### 5) Calendar with form integration

```elixir
# Controller with form handling
def new(conn, params) do
  date = params["date"] || Date.utc_today() |> Date.to_string()
  time = params["time"] || "09:00"

  changeset = Event.changeset(%Event{}, %{start: "#{date}T#{time}:00"})
  events = list_events()

  render(conn, "new.html", events: events, changeset: changeset)
end

def create(conn, %{"event" => event_params}) do
  case Events.create_event(event_params) do
    {:ok, _event} ->
      conn
      |> put_flash(:info, "Event created successfully")
      |> redirect(to: Routes.event_path(conn, :index))

    {:error, changeset} ->
      events = list_events()
      render(conn, "new.html", events: events, changeset: changeset)
  end
end
```

```elixir
# Template: events/new.html.heex
<div class="row">
  <div class="col-md-8">
    <.static_calendar
      id="calendar-with-form"
      events={@events}
      options={%{
        view: "dayGridMonth",
        selectable: true,
        dateClick: "function(info) {
          document.getElementById('event_start_date').value = info.dateStr;
          document.getElementById('event-form').style.display = 'block';
          document.getElementById('event_title').focus();
        }",
        eventClick: "function(info) {
          if (confirm('Edit event: ' + info.event.title + '?')) {
            window.location.href = '/events/' + info.event.id + '/edit';
          }
        }"
      }}
    />
  </div>
  <div class="col-md-4">
    <div id="event-form" class="card">
      <div class="card-header">
        <h5>Create New Event</h5>
      </div>
      <div class="card-body">
        <.simple_form for={@changeset} action={Routes.event_path(@conn, :create)}>
          <.input field={@changeset[:title]} label="Title" id="event_title" />
          <.input field={@changeset[:start_date]} label="Start Date" type="date" id="event_start_date" />
          <.input field={@changeset[:start_time]} label="Start Time" type="time" />
          <.input field={@changeset[:end_time]} label="End Time" type="time" />
          <.input field={@changeset[:description]} label="Description" type="textarea" />
          <:actions>
            <.button type="submit">Create Event</.button>
            <.button type="button" onclick="document.getElementById('event-form').style.display='none'">
              Cancel
            </.button>
          </:actions>
        </.simple_form>
      </div>
    </div>
  </div>
</div>
```

### Controller Examples (Static Calendar)

#### 1) Basic calendar in a controller

```elixir
# Controller
defmodule MyAppWeb.CalendarController do
  use MyAppWeb, :controller
  import LiveCalendar.Components

  def show(conn, _params) do
    events = [
      %{id: 1, title: "Team Meeting", start: "2025-08-15T10:00:00"},
      %{id: 2, title: "Project Review", start: "2025-08-16T14:00:00"}
    ]
    render(conn, "show.html", events: events)
  end
end

# Template: calendar/show.html.heex
<div class="calendar-container">
  <h1>My Events</h1>
  <.static_calendar
    id="events-calendar"
    events={@events}
    options={%{view: "dayGridMonth"}}
  />
</div>
```

#### 2) Interactive calendar with JavaScript callbacks

```elixir
# Template with interactive callbacks
<.static_calendar
  id="interactive-calendar"
  events={@events}
  options={%{
    view: "dayGridMonth",
    eventClick: "function(info) {
      window.location.href = '/events/' + info.event.id;
    }",
    dateClick: "function(info) {
      window.location.href = '/events/new?date=' + info.dateStr;
    }"
  }}
/>
```

#### 3) Advanced calendar with form integration

```elixir
# Controller with form handling
defmodule MyAppWeb.EventController do
  use MyAppWeb, :controller
  import LiveCalendar.Components

  def index(conn, _params) do
    events = get_events() # Your function to fetch events
    render(conn, "index.html", events: events, changeset: Event.changeset(%Event{}))
  end

  def create(conn, %{"event" => event_params}) do
    case Events.create_event(event_params) do
      {:ok, _event} ->
        conn
        |> put_flash(:info, "Event created successfully")
        |> redirect(to: Routes.event_path(conn, :index))

      {:error, changeset} ->
        events = get_events()
        render(conn, "index.html", events: events, changeset: changeset)
    end
  end
end

# Template: events/index.html.heex
<div class="row">
  <div class="col-md-8">
    <.static_calendar
      id="events-calendar"
      events={@events}
      options={%{
        view: "dayGridMonth",
        eventClick: "function(info) {
          document.getElementById('event-form').style.display = 'block';
          document.getElementById('event_title').value = info.event.title;
        }",
        dateClick: "function(info) {
          document.getElementById('event-form').style.display = 'block';
          document.getElementById('event_start').value = info.dateStr;
        }"
      }}
    />
  </div>
  <div class="col-md-4">
    <div id="event-form" style="display: none;">
      <.simple_form for={@changeset} action={Routes.event_path(@conn, :create)}>
        <.input field={@changeset[:title]} label="Title" id="event_title" />
        <.input field={@changeset[:start]} label="Start Date" type="date" id="event_start" />
        <:actions>
          <.button>Create Event</.button>
        </:actions>
      </.simple_form>
    </div>
  </div>
</div>
```

## Acknowledgments

This library builds on EventCalendar by Vlad Kurko: https://github.com/vkurko/calendar/
Thanks to the EventCalendar project for providing a lightweight, flexible calendar core.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
