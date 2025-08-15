# CalendarComponent

[![Hex.pm](https://img.shields.io/hexpm/v/calendar_component.svg)](https://hex.pm/packages/calendar_component)
[![Docs](https://img.shields.io/badge/docs-hexdocs.pm-blue)](https://hexdocs.pm/calendar_component)

Phoenix LiveView component library that renders an interactive calendar powered by EventCalendar. It ships as a library (not a full Phoenix app) with secure colocated JS/CSS assets.

**Key Features:**
- ✅ Full Phoenix LiveView 1.8+ JS commands support
- ✅ Secure static calendar components for regular Phoenix controllers
- ✅ Built-in security measures against code injection
- ✅ Resource timeline views support
- ✅ Comprehensive event handling and customization

## Installation

Add `calendar_component` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:calendar_component, "~> 0.2.0"}
  ]
end
```

## JavaScript Setup

### For LiveView Applications

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
import { initStaticCalendars } from "calendar_component/static"

// Initialize static calendars when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  initStaticCalendars()
})
```

## Phoenix LiveView 1.8+ JS Commands Support

This library fully supports Phoenix.LiveView.JS commands for rich client-side interactions:

```elixir
alias Phoenix.LiveView.JS

~H"""
<.calendar
  id="calendar"
  events={@events}
  on_event_click={JS.push("select_event") |> JS.show(to: "#event-modal")}
  on_date_click={JS.push("create_event") |> JS.add_class("highlight", to: ".selected")}
  on_month_change={JS.push("month_changed") |> JS.dispatch("calendar:month_changed")}
/>
"""
```

The JS commands execute on the client immediately, then server events are handled for persistence and state management.

## Usage

### With LiveView

Basic calendar with event handling:

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

Server-side handlers:

```elixir
@impl true
def handle_event("event_clicked", %{"id" => id}, socket), do: {:noreply, socket}

@impl true
def handle_event("date_clicked", %{"date" => date}, socket), do: {:noreply, socket}

@impl true
def handle_event("month_changed", %{"month" => month, "year" => year}, socket), do: {:noreply, socket}
```

@impl true
def handle_event("month_changed", %{"month" => month, "year" => year}, socket), do: {:noreply, socket}
```

### With Regular Phoenix Controllers (Static Calendar)

For traditional Phoenix controllers (without LiveView), use the secure static calendar component:

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
    render(conn, :index, events: events)
  end
end
```

```elixir
# In your template (.html.heex) - Using secure global function references
<.static_calendar
  id="my-calendar"
  events={@events}
  options={%{
    view: "dayGridMonth",
    eventClick: "MyApp.Calendar.handleEventClick",
    dateClick: "MyApp.Calendar.handleDateClick",
    datesSet: "MyApp.Calendar.handleMonthChange"
  }}
/>
```

```javascript
// In your app.js - Define global callback functions
import { initStaticCalendars } from "calendar_component/static";

window.MyApp = {
  Calendar: {
    handleEventClick(info) {
      console.log('Event clicked:', info.event.title);
      alert('Event: ' + info.event.title);
      // Add your event handling logic here
    },

    handleDateClick(info) {
      console.log('Date clicked:', info.dateStr);
      // Redirect to create new event
      window.location.href = `/events/new?date=${info.dateStr}`;
    },

    handleMonthChange(info) {
      console.log('Month changed to:', info.start);
      // Update URL or fetch month-specific data
    }
  }
};

document.addEventListener('DOMContentLoaded', () => initStaticCalendars());
```

#### Static Calendar Security Features

**✅ Secure Global Function References (Recommended):**
```elixir
options: %{eventClick: "MyApp.handleEvent"}
```

**⚠️ Limited Function Body Strings (For Simple Cases Only):**
```elixir
options: %{eventClick: "console.log('Event:', info.event.title)"}
```

**🔒 Security Measures Applied:**
- Function strings limited to 200 characters max
- Dangerous keywords blocked: `eval`, `Function`, `script`, `innerHTML`, `document.write`, etc.
- Complex logic should use global function references for security
- All callbacks are sanitized and validated

**See our [Security Documentation](docs/security.md) for complete guidelines.**

## Component API Reference

### LiveView Calendar Component

```elixir
<.calendar
  id="calendar"                           # Required: unique DOM ID
  events={@events}                        # List of event maps
  on_event_click={JS.push(...)}          # Phoenix.LiveView.JS commands for event clicks
  on_date_click={JS.push(...)}           # Phoenix.LiveView.JS commands for date clicks
  on_month_change={JS.push(...)}         # Phoenix.LiveView.JS commands for month navigation
  options={%{...}}                       # EventCalendar options (optional)
  rest={@rest}                           # Global attributes (phx-*, data-*, aria-*, class, style)
/>
```

### Static Calendar Component

```elixir
<.static_calendar
  id="calendar"                          # Required: unique DOM ID
  events={@events}                       # List of event maps
  options={%{                           # EventCalendar options with secure callbacks
    view: "dayGridMonth",
    eventClick: "MyApp.handleEvent",     # Global function reference (secure)
    dateClick: "console.log('clicked')"  # Simple expression (limited, validated)
  }}
  rest={@rest}                          # Global attributes
/>
```

### Event Data Structure

Events should be maps with EventCalendar-compatible properties:

```elixir
%{
  id: 1,                                # Unique identifier
  title: "Meeting",                     # Event title
  start: "2025-08-01T09:00:00",        # ISO datetime or date string
  end: "2025-08-01T10:00:00",          # Optional end time
  allDay: true,                         # Optional all-day flag
  color: "#FE6B64",                     # Optional color
  resourceId: 1,                        # Optional for resource views
  display: "background"                 # Optional display type
}
```

### Options Mapping

Pass any EventCalendar options via the `:options` assign. They are forwarded to the JavaScript calendar:

- **View Types**: `dayGridMonth`, `timeGridWeek`, `timeGridDay`, `listWeek`, `resourceTimeGridWeek`, `resourceTimelineWeek`
- **Header Toolbar**: Customize buttons and title positioning
- **Resource Views**: Full support for resource timeline calendars
- **Theming**: Light and dark theme support
- **Event Rendering**: Colors, display modes, background events
- **Interaction**: Selectable dates, drag-and-drop, resizing

For complete options reference, see [EventCalendar Documentation](docs/event_calendar.md).
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
## Phoenix Examples

### LiveView Examples

#### 1) Basic calendar with events

```elixir
defmodule MyAppWeb.CalendarLive do
  use MyAppWeb, :live_view
  alias Phoenix.LiveView.JS

  def render(assigns) do
    ~H"""
    <div class="calendar-container">
      <h1>My Calendar</h1>
      <.calendar
        id="basic-calendar"
        events={@events}
        on_event_click={JS.push("event_selected")}
      />
    </div>
    """
  end

  def mount(_params, _session, socket) do
    events = [
      %{id: 1, title: "Team Meeting", start: "2025-08-01T09:00:00", end: "2025-08-01T10:00:00"},
      %{id: 2, title: "Project Demo", start: "2025-08-02T14:00:00", color: "#FE6B64"},
      %{id: 3, title: "All-day Event", start: "2025-08-03", allDay: true, color: "#B29DD9"}
    ]
    {:ok, assign(socket, events: events)}
  end

  @impl true
  def handle_event("event_selected", %{"id" => id}, socket) do
    {:noreply, put_flash(socket, :info, "Selected event: #{id}")}
  end
end
```

#### 2) Interactive calendar with rich JS commands

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
        on_event_click={
          JS.push("event_clicked")
          |> JS.show(to: "#event-details")
          |> JS.add_class("highlight", to: ".selected-event")
        }
        on_date_click={
          JS.push("date_clicked")
          |> JS.show(to: "#new-event-form")
          |> JS.focus(to: "#event-title")
        }
        on_month_change={
          JS.push("month_changed")
          |> JS.dispatch("calendar:month_changed")
        }
        options={%{
          view: "dayGridMonth",
          selectable: true,
          nowIndicator: true,
          height: "600px"
        }}
      />

      <div id="event-details" style="display: none;" class="mt-4 p-4 bg-blue-100 rounded">
        <h3>Event Details</h3>
        <p>Selected event: <%= @selected_event_title %></p>
      </div>

      <div id="new-event-form" style="display: none;" class="mt-4 p-4 bg-green-100 rounded">
        <h3>Create New Event</h3>
        <input id="event-title" type="text" placeholder="Event title..." class="border p-2 rounded">
      </div>
    </div>
    """
  end

  def mount(_params, _session, socket) do
    events = create_sample_events()
    {:ok, assign(socket, events: events, selected_event_title: nil)}
  end

  @impl true
  def handle_event("event_clicked", %{"id" => id, "title" => title}, socket) do
    {:noreply, assign(socket, selected_event_title: title)}
  end

  @impl true
  def handle_event("date_clicked", %{"date" => date}, socket) do
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

#### 3) Advanced resource calendar

```elixir
def render(assigns) do
  ~H"""
  <.calendar
    id="resource-calendar"
    events={@events}
    on_event_click={JS.push("resource_event_clicked")}
    options={%{
      view: "resourceTimeGridWeek",
      resources: [
        %{id: 1, title: "Conference Room A"},
        %{id: 2, title: "Conference Room B"},
        %{id: 3, title: "Meeting Room C"}
      ],
      headerToolbar: %{
        start: "prev,next today",
        center: "title",
        end: "resourceTimeGridWeek,resourceTimelineWeek,dayGridMonth"
      },
      scrollTime: "08:00:00",
      slotMinTime: "08:00:00",
      slotMaxTime: "20:00:00",
      nowIndicator: true
    }}
  />
  """
end

defp create_resource_events do
  [
    %{
      id: 1,
      title: "Team Meeting",
      start: "2025-08-15T10:00:00",
      end: "2025-08-15T11:00:00",
      resourceId: 1,
      color: "#FE6B64"
    },
    %{
      id: 2,
      title: "Workshop",
      start: "2025-08-15T14:00:00",
      end: "2025-08-15T16:00:00",
      resourceId: 2,
      color: "#779ECB"
    }
  ]
end
```

#### 4) Drag and Drop Calendar with Event Management

```elixir
defmodule MyAppWeb.DragDropCalendarLive do
  use MyAppWeb, :live_view
  alias Phoenix.LiveView.JS

  def render(assigns) do
    ~H"""
    <div class="drag-drop-calendar">
      <h1>Drag & Drop Calendar</h1>

      <div class="alert alert-info" :if={@drop_message}>
        <%= @drop_message %>
      </div>

      <.calendar
        id="dragdrop-calendar"
        events={@events}
        on_event_click={
          JS.push("event_selected")
          |> JS.add_class("ring-2 ring-blue-500", to: ".selected-event")
        }
        options={%{
          view: "timeGridWeek",
          editable: true,                    # Enable drag and drop
          droppable: true,                   # Allow external drops
          selectable: true,                  # Allow date selection
          selectMirror: true,                # Show selection mirror
          eventStartEditable: true,          # Allow event start time editing
          eventDurationEditable: true,       # Allow event duration editing
          eventResourceEditable: true,       # Allow resource changes (if using resources)
          dayMaxEvents: true,                # Limit events per day
          height: "600px",
          scrollTime: "08:00:00",
          slotMinTime: "07:00:00",
          slotMaxTime: "22:00:00",
          headerToolbar: %{
            start: "prev,next today",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay"
          },
          # Drag and drop event handlers using Phoenix LiveView hooks
          eventDrop: "handleEventDrop",      # Custom hook function
          eventResize: "handleEventResize",  # Custom hook function
          drop: "handleExternalDrop",        # External drop handler
          eventReceive: "handleEventReceive" # Event received from external
        }}
      />

      <!-- External draggable events -->
      <div class="mt-6 p-4 bg-gray-100 rounded">
        <h3 class="font-semibold mb-3">Drag these events to the calendar:</h3>
        <div class="space-y-2">
          <div
            class="external-event bg-blue-500 text-white p-2 rounded cursor-move"
            data-event='{"title": "New Meeting", "duration": "01:00", "color": "#3B82F6"}'
          >
            📅 New Meeting (1 hour)
          </div>
          <div
            class="external-event bg-green-500 text-white p-2 rounded cursor-move"
            data-event='{"title": "Team Standup", "duration": "00:30", "color": "#10B981"}'
          >
            🤝 Team Standup (30 min)
          </div>
          <div
            class="external-event bg-purple-500 text-white p-2 rounded cursor-move"
            data-event='{"title": "Code Review", "duration": "02:00", "color": "#8B5CF6"}'
          >
            💻 Code Review (2 hours)
          </div>
        </div>
      </div>
    </div>
    """
  end

  def mount(_params, _session, socket) do
    events = create_draggable_events()
    {:ok, assign(socket, events: events, drop_message: nil)}
  end

  # Handle when an existing event is moved (drag and drop)
  @impl true
  def handle_event("event_dropped", params, socket) do
    %{
      "id" => id,
      "start" => new_start,
      "end" => new_end,
      "resourceId" => resource_id
    } = params

    # Update the event in your data store
    updated_events =
      Enum.map(socket.assigns.events, fn event ->
        if event.id == String.to_integer(id) do
          event
          |> Map.put(:start, new_start)
          |> Map.put(:end, new_end)
          |> maybe_put_resource(resource_id)
        else
          event
        end
      end)

    message = "Event moved to #{format_datetime(new_start)}"

    {:noreply, assign(socket, events: updated_events, drop_message: message)}
  end

  # Handle when an event is resized
  @impl true
  def handle_event("event_resized", params, socket) do
    %{
      "id" => id,
      "start" => new_start,
      "end" => new_end
    } = params

    updated_events =
      Enum.map(socket.assigns.events, fn event ->
        if event.id == String.to_integer(id) do
          event
          |> Map.put(:start, new_start)
          |> Map.put(:end, new_end)
        else
          event
        end
      end)

    message = "Event resized: #{format_datetime(new_start)} - #{format_datetime(new_end)}"

    {:noreply, assign(socket, events: updated_events, drop_message: message)}
  end

  # Handle when an external event is dropped onto the calendar
  @impl true
  def handle_event("external_dropped", params, socket) do
    %{
      "title" => title,
      "start" => start_time,
      "end" => end_time,
      "color" => color
    } = params

    new_event = %{
      id: System.unique_integer([:positive]),
      title: title,
      start: start_time,
      end: end_time,
      color: color
    }

    updated_events = [new_event | socket.assigns.events]
    message = "New event '#{title}' added at #{format_datetime(start_time)}"

    {:noreply, assign(socket, events: updated_events, drop_message: message)}
  end

  @impl true
  def handle_event("event_selected", %{"id" => id}, socket) do
    {:noreply, put_flash(socket, :info, "Selected event: #{id}")}
  end

  # Helper functions
  defp create_draggable_events do
    today = Date.utc_today()
    [
      %{
        id: 1,
        title: "Daily Standup",
        start: "#{today}T09:00:00",
        end: "#{today}T09:30:00",
        color: "#10B981"
      },
      %{
        id: 2,
        title: "Sprint Planning",
        start: "#{today}T10:00:00",
        end: "#{today}T12:00:00",
        color: "#3B82F6"
      },
      %{
        id: 3,
        title: "Lunch Break",
        start: "#{Date.add(today, 1)}T12:00:00",
        end: "#{Date.add(today, 1)}T13:00:00",
        color: "#F59E0B"
      }
    ]
  end

  defp maybe_put_resource(event, nil), do: event
  defp maybe_put_resource(event, ""), do: event
  defp maybe_put_resource(event, resource_id), do: Map.put(event, :resourceId, String.to_integer(resource_id))

  defp format_datetime(datetime_str) do
    case DateTime.from_iso8601(datetime_str) do
      {:ok, dt, _} -> Calendar.strftime(dt, "%B %d at %I:%M %p")
      _ -> datetime_str
    end
  end
end
```

You'll also need to add custom JavaScript hooks for drag and drop handling:

```javascript
// In your assets/js/app.js - Add these custom hooks
let Hooks = {}

// Hook for handling drag and drop events in LiveView calendars
Hooks.LiveCalendar = {
  mounted() {
    this.handleCalendarEvents()
  },

  updated() {
    this.handleCalendarEvents()
  },

  handleCalendarEvents() {
    // Add custom drag and drop event handlers
    if (this.calendar) {
      this.calendar.setOption('eventDrop', (info) => {
        this.pushEvent("event_dropped", {
          id: info.event.id,
          start: info.event.start.toISOString(),
          end: info.event.end ? info.event.end.toISOString() : info.event.start.toISOString(),
          resourceId: info.newResource ? info.newResource.id : null
        })
      })

      this.calendar.setOption('eventResize', (info) => {
        this.pushEvent("event_resized", {
          id: info.event.id,
          start: info.event.start.toISOString(),
          end: info.event.end.toISOString()
        })
      })

      this.calendar.setOption('drop', (info) => {
        const eventData = JSON.parse(info.draggedEl.dataset.event)
        const endTime = new Date(info.date.getTime() + (parseInt(eventData.duration.split(':')[0]) * 60 * 60 * 1000) + (parseInt(eventData.duration.split(':')[1]) * 60 * 1000))

        this.pushEvent("external_dropped", {
          title: eventData.title,
          start: info.date.toISOString(),
          end: endTime.toISOString(),
          color: eventData.color
        })

        // Remove the dragged element
        info.draggedEl.remove()
      })
    }
  }
}

// Initialize external draggable events
document.addEventListener('DOMContentLoaded', function() {
  const draggableElements = document.querySelectorAll('.external-event')
  draggableElements.forEach(el => {
    new Draggable(el, {
      itemSelector: '.external-event',
      data: el.dataset.event
    })
  })
})

let liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks })
```

### Controller Examples (Static Calendar)

#### 1) Basic static calendar with secure callbacks

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
      nowIndicator: true,
      eventClick: "MyApp.Events.handleEventClick",
      dateClick: "MyApp.Events.handleDateClick"
    }}
  />
</div>
```

```javascript
// In your app.js - Define secure global callbacks
import { initStaticCalendars } from "calendar_component/static";

window.MyApp = {
  Events: {
    handleEventClick(info) {
      // Secure: redirect to event details
      window.location.href = `/events/${info.event.id}`;
    },

    handleDateClick(info) {
      // Secure: redirect to create new event
      window.location.href = `/events/new?date=${info.dateStr}`;
    }
  }
};

document.addEventListener('DOMContentLoaded', () => initStaticCalendars());
```

#### 2) Interactive static calendar with form integration

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
```

```elixir
# Template: events/index.html.heex
<div class="row">
  <div class="col-md-8">
    <.static_calendar
      id="calendar-with-form"
      events={@events}
      options={%{
        view: "dayGridMonth",
        selectable: true,
        eventClick: "MyApp.Calendar.showEventDetails",
        dateClick: "MyApp.Calendar.showNewEventForm",
        select: "MyApp.Calendar.handleDateRange"
      }}
    />
  </div>
  <div class="col-md-4">
    <div id="event-form" style="display: none;" class="card">
      <div class="card-header">
        <h5>Create New Event</h5>
      </div>
      <div class="card-body">
        <.simple_form for={@changeset} action={Routes.event_path(@conn, :create)}>
          <.input field={@changeset[:title]} label="Title" id="event_title" />
          <.input field={@changeset[:start_date]} label="Start Date" type="date" id="event_start_date" />
          <.input field={@changeset[:start_time]} label="Start Time" type="time" id="event_start_time" />
          <.input field={@changeset[:description]} label="Description" type="textarea" />
          <:actions>
            <.button type="submit">Create Event</.button>
            <button type="button" onclick="MyApp.Calendar.hideForm()">Cancel</button>
          </:actions>
        </.simple_form>
      </div>
    </div>
  </div>
</div>
```

```javascript
// Secure JavaScript handlers
window.MyApp = {
  Calendar: {
    showEventDetails(info) {
      alert(`Event: ${info.event.title}\nTime: ${info.event.start}`);
      // Or show in modal/sidebar
    },

    showNewEventForm(info) {
      const form = document.getElementById('event-form');
      const dateInput = document.getElementById('event_start_date');
      const timeInput = document.getElementById('event_start_time');

      form.style.display = 'block';
      dateInput.value = info.dateStr;

      // If time is available, set it
      if (info.date) {
        const hours = info.date.getHours().toString().padStart(2, '0');
        const minutes = info.date.getMinutes().toString().padStart(2, '0');
        timeInput.value = `${hours}:${minutes}`;
      }

      document.getElementById('event_title').focus();
    },

    handleDateRange(info) {
      const title = prompt('Event title for selected time range:');
      if (title) {
        // Create event via form submission or AJAX
        const form = document.querySelector('#event-form form');
        document.getElementById('event_title').value = title;
        document.getElementById('event_start_date').value = info.startStr.split('T')[0];
        form.submit();
      }
    },

    hideForm() {
      document.getElementById('event-form').style.display = 'none';
    }
  }
};
```

#### 3) Advanced resource timeline calendar

```elixir
def show(conn, _params) do
  events = create_weekly_events()
  resources = create_resources()

  render(conn, "show.html", events: events, resources: resources)
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
        %{id: 6, title: "Room 2B"}
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
        slotMaxTime: "20:00"
      }
    },
    dayMaxEvents: true,
    nowIndicator: true,
    selectable: true,
    eventClick: "MyApp.Resources.handleResourceEvent"
  }}
/>
```

```javascript
```javascript
// Resource calendar handlers
window.MyApp = {
  Resources: {
    handleResourceEvent(info) {
      const resource = info.event.getResources()[0];
      console.log('Event:', info.event.title, 'Resource:', resource?.title);

      // Show resource-specific actions
      if (confirm(`Manage "${info.event.title}" in ${resource?.title}?`)) {
        window.location.href = `/resources/${resource.id}/events/${info.event.id}`;
      }
    }
  }
};
```

#### 4) Drag and Drop Static Calendar

```elixir
# Controller
defmodule MyAppWeb.DragDropController do
  use MyAppWeb, :controller
  import LiveCalendar.Components

  def index(conn, _params) do
    events = create_draggable_events()
    render(conn, "index.html", events: events)
  end

  def update_event(conn, %{"id" => id} = params) do
    # Handle AJAX request to update event after drag/drop
    case Events.update_event(id, params) do
      {:ok, _event} ->
        conn
        |> put_status(200)
        |> json(%{success: true, message: "Event updated successfully"})

      {:error, _} ->
        conn
        |> put_status(400)
        |> json(%{success: false, message: "Failed to update event"})
    end
  end

  def create_event(conn, params) do
    # Handle AJAX request to create new event from external drop
    case Events.create_event(params) do
      {:ok, event} ->
        conn
        |> put_status(201)
        |> json(%{success: true, event: event, message: "Event created successfully"})

      {:error, changeset} ->
        conn
        |> put_status(400)
        |> json(%{success: false, errors: translate_errors(changeset)})
    end
  end

  defp create_draggable_events do
    today = Date.utc_today()
    [
      %{
        id: 1,
        title: "Morning Standup",
        start: "#{today}T09:00:00",
        end: "#{today}T09:30:00",
        color: "#10B981",
        editable: true
      },
      %{
        id: 2,
        title: "Project Review",
        start: "#{today}T14:00:00",
        end: "#{today}T16:00:00",
        color: "#3B82F6",
        editable: true
      },
      %{
        id: 3,
        title: "Team Lunch",
        start: "#{Date.add(today, 1)}T12:00:00",
        end: "#{Date.add(today, 1)}T13:00:00",
        color: "#F59E0B",
        editable: false  # Not draggable
      }
    ]
  end
end
```

```elixir
# Template: drag_drop/index.html.heex
<div class="drag-drop-container">
  <div class="row">
    <!-- External draggable events -->
    <div class="col-md-3">
      <div class="external-events p-4 bg-gray-100 rounded">
        <h4 class="font-semibold mb-3">Drag Events to Calendar</h4>
        <p class="text-sm text-gray-600 mb-4">Drag these items onto the calendar to create new events</p>

        <div class="space-y-2">
          <div
            class="external-event bg-blue-500 text-white p-2 rounded cursor-move hover:bg-blue-600"
            data-event='{"title": "Quick Meeting", "duration": "00:30", "color": "#3B82F6"}'
          >
            📅 Quick Meeting (30min)
          </div>

          <div
            class="external-event bg-green-500 text-white p-2 rounded cursor-move hover:bg-green-600"
            data-event='{"title": "Code Review", "duration": "01:00", "color": "#10B981"}'
          >
            🔍 Code Review (1hr)
          </div>

          <div
            class="external-event bg-purple-500 text-white p-2 rounded cursor-move hover:bg-purple-600"
            data-event='{"title": "Design Session", "duration": "02:00", "color": "#8B5CF6"}'
          >
            🎨 Design Session (2hrs)
          </div>

          <div
            class="external-event bg-red-500 text-white p-2 rounded cursor-move hover:bg-red-600"
            data-event='{"title": "Client Call", "duration": "00:45", "color": "#EF4444"}'
          >
            📞 Client Call (45min)
          </div>
        </div>
      </div>

      <!-- Status messages -->
      <div id="drag-messages" class="mt-4">
        <div id="success-message" class="alert alert-success" style="display: none;"></div>
        <div id="error-message" class="alert alert-danger" style="display: none;"></div>
      </div>
    </div>

    <!-- Calendar -->
    <div class="col-md-9">
      <.static_calendar
        id="dragdrop-static-calendar"
        events={@events}
        options={%{
          view: "timeGridWeek",
          height: "700px",
          editable: true,                    # Enable drag and drop for existing events
          droppable: true,                   # Allow external drops
          selectable: true,                  # Allow date/time selection
          selectMirror: true,                # Show selection feedback
          eventStartEditable: true,          # Allow changing event start time
          eventDurationEditable: true,       # Allow resizing events
          dayMaxEvents: true,                # Auto-limit events per day in month view
          scrollTime: "08:00:00",
          slotMinTime: "07:00:00",
          slotMaxTime: "22:00:00",
          headerToolbar: %{
            start: "prev,next today",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay"
          },
          businessHours: %{              # Highlight business hours
            daysOfWeek: [1, 2, 3, 4, 5], # Monday - Friday
            startTime: "09:00",
            endTime: "17:00"
          },
          # Secure callback functions for drag and drop
          eventDrop: "MyApp.DragDrop.handleEventDrop",
          eventResize: "MyApp.DragDrop.handleEventResize",
          drop: "MyApp.DragDrop.handleExternalDrop",
          eventClick: "MyApp.DragDrop.handleEventClick",
          select: "MyApp.DragDrop.handleDateSelect"
        }}
      />
    </div>
  </div>
</div>
```

```javascript
// In your app.js - Drag and drop handlers for static calendar
import { initStaticCalendars } from "calendar_component/static";

window.MyApp = {
  DragDrop: {
    // Handle when existing event is moved
    handleEventDrop(info) {
      const eventData = {
        id: info.event.id,
        start: info.event.start.toISOString(),
        end: info.event.end ? info.event.end.toISOString() : info.event.start.toISOString()
      };

      // Send AJAX request to update event
      fetch(`/events/${info.event.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
        },
        body: JSON.stringify(eventData)
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          this.showMessage('success', `Event "${info.event.title}" moved successfully!`);
        } else {
          this.showMessage('error', 'Failed to move event. Please try again.');
          info.revert(); // Revert the move if server update failed
        }
      })
      .catch(error => {
        console.error('Error updating event:', error);
        this.showMessage('error', 'Network error. Please try again.');
        info.revert();
      });
    },

    // Handle when event is resized
    handleEventResize(info) {
      const eventData = {
        id: info.event.id,
        start: info.event.start.toISOString(),
        end: info.event.end.toISOString()
      };

      fetch(`/events/${info.event.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
        },
        body: JSON.stringify(eventData)
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          this.showMessage('success', `Event "${info.event.title}" resized successfully!`);
        } else {
          this.showMessage('error', 'Failed to resize event. Please try again.');
          info.revert();
        }
      })
      .catch(error => {
        console.error('Error resizing event:', error);
        this.showMessage('error', 'Network error. Please try again.');
        info.revert();
      });
    },

    // Handle external event drop (create new event)
    handleExternalDrop(info) {
      try {
        const eventData = JSON.parse(info.draggedEl.dataset.event);
        const duration = eventData.duration.split(':');
        const endTime = new Date(info.date.getTime() +
          (parseInt(duration[0]) * 60 * 60 * 1000) +
          (parseInt(duration[1]) * 60 * 1000));

        const newEventData = {
          title: eventData.title,
          start: info.date.toISOString(),
          end: endTime.toISOString(),
          color: eventData.color
        };

        // Create new event via AJAX
        fetch('/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
          },
          body: JSON.stringify(newEventData)
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            this.showMessage('success', `Event "${eventData.title}" created successfully!`);
            // Remove the dragged element from external events
            info.draggedEl.remove();
          } else {
            this.showMessage('error', 'Failed to create event. Please try again.');
          }
        })
        .catch(error => {
          console.error('Error creating event:', error);
          this.showMessage('error', 'Network error. Please try again.');
        });
      } catch (error) {
        console.error('Error processing drop:', error);
        this.showMessage('error', 'Invalid event data. Please try again.');
      }
    },

    // Handle event click
    handleEventClick(info) {
      if (confirm(`Edit event: "${info.event.title}"?`)) {
        window.location.href = `/events/${info.event.id}/edit`;
      }
    },

    // Handle date/time selection
    handleDateSelect(info) {
      const title = prompt('Enter event title:');
      if (title && title.trim()) {
        const newEventData = {
          title: title.trim(),
          start: info.start.toISOString(),
          end: info.end.toISOString(),
          color: '#3B82F6'
        };

        fetch('/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
          },
          body: JSON.stringify(newEventData)
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            this.showMessage('success', `Event "${title}" created successfully!`);
            // Refresh the page to show the new event
            setTimeout(() => location.reload(), 1500);
          } else {
            this.showMessage('error', 'Failed to create event. Please try again.');
          }
        })
        .catch(error => {
          console.error('Error creating event:', error);
          this.showMessage('error', 'Network error. Please try again.');
        });
      }
    },

    // Utility function to show messages
    showMessage(type, message) {
      const messageDiv = document.getElementById(`${type}-message`);
      messageDiv.textContent = message;
      messageDiv.style.display = 'block';

      // Hide other message types
      const otherType = type === 'success' ? 'error' : 'success';
      document.getElementById(`${otherType}-message`).style.display = 'none';

      // Auto-hide after 5 seconds
      setTimeout(() => {
        messageDiv.style.display = 'none';
      }, 5000);
    }
  }
};

// Initialize external draggable events and static calendars
document.addEventListener('DOMContentLoaded', function() {
  // Initialize static calendars first
  initStaticCalendars();

  // Make external events draggable (requires a drag library like Draggable)
  const draggableEvents = document.querySelectorAll('.external-event');
  draggableEvents.forEach(eventEl => {
    eventEl.draggable = true;
    eventEl.addEventListener('dragstart', function(e) {
      // Store the event data for the drop handler
      e.dataTransfer.setData('text/plain', eventEl.dataset.event);
    });
  });
});
```
```

#### 4) Simple calendar with minimal callbacks

For simple use cases, you can use limited function body strings:

```elixir
<.static_calendar
  id="simple-calendar"
  events={@events}
  options={%{
    view: "dayGridMonth",
    eventClick: "alert('Event: ' + info.event.title)",
    dateClick: "console.log('Clicked:', info.dateStr)"
  }}
/>
```

⚠️ **Security Note**: Function body strings are limited to 200 characters and dangerous keywords are blocked. For complex logic, always use global function references.

});
```

#### 5) Simple calendar with minimal callbacks

For simple use cases, you can use limited function body strings:

```elixir
<.static_calendar
  id="simple-calendar"
  events={@events}
  options={%{
    view: "dayGridMonth",
    eventClick: "alert('Event: ' + info.event.title)",
    dateClick: "console.log('Clicked:', info.dateStr)"
  }}
/>
```

⚠️ **Security Note**: Function body strings are limited to 200 characters and dangerous keywords are blocked. For complex logic like drag and drop, always use global function references.

## Drag and Drop Best Practices

### For LiveView Calendars:
- ✅ Use Phoenix.LiveView.JS commands for immediate feedback
- ✅ Handle server events for data persistence
- ✅ Implement proper error handling with rollback
- ✅ Use custom hooks for complex drag interactions
- ✅ Combine client-side updates with server-side validation

### For Static Calendars:
- ✅ Use secure global function references for callbacks
- ✅ Implement AJAX requests for server updates
- ✅ Provide user feedback with success/error messages
- ✅ Handle network errors gracefully with event reversion
- ✅ Use CSRF protection for all server requests
- ✅ Validate all event data on the server side

### Security Considerations:
- 🔒 Always validate event data on the server
- 🔒 Use CSRF tokens for AJAX requests
- 🔒 Sanitize user input (event titles, descriptions)
- 🔒 Implement proper authorization for event modifications
- 🔒 Never trust client-side data for business logic

### Performance Tips:
- ⚡ Debounce rapid drag operations
- ⚡ Use optimistic UI updates with server confirmation
- ⚡ Implement proper loading states during operations
- ⚡ Cache event data to reduce server requests
- ⚡ Use efficient data structures for large event sets

## Important Notes

### Version 0.2.0+ Features

- ✅ **Full Phoenix LiveView 1.8+ JS commands support** - Compose rich client-side interactions
- ✅ **Enhanced security** - Built-in protection against code injection attacks
- ✅ **Resource timeline views** - Complete support for resource-based calendars
- ✅ **Automatic CSS inclusion** - No manual CSS imports needed
- ✅ **Global function callbacks** - Secure, maintainable JavaScript integration
- ✅ **Comprehensive testing** - 25+ tests covering functionality and security

### Security First

All callback functions are validated and sanitized:
- Function body strings limited to 200 characters
- Dangerous keywords automatically blocked
- Global function references recommended for complex logic
- See [Security Documentation](docs/security.md) for complete guidelines

### Migration from 0.1.x

If upgrading from version 0.1.x:
1. Replace function body strings with global function references
2. Update JavaScript imports to use new module structure
3. Review callback implementations for security compliance
4. Run tests to verify functionality

## Additional Resources

- **[Installation Guide](guides/installation.md)** - Detailed setup instructions
- **[Usage Guide](guides/usage.md)** - Component usage examples
- **[Static Calendar Guide](guides/static_calendar_usage.md)** - Controller integration
- **[Security Documentation](docs/security.md)** - Security best practices
- **[EventCalendar Options](docs/event_calendar.md)** - Complete options reference
- **[LiveView JS Integration](docs/live_view_js.md)** - Phoenix LiveView JS patterns
- **[Testing Guide](docs/test_live_view.md)** - Testing LiveView components

## Acknowledgments

This library builds on EventCalendar by Vlad Kurko: https://github.com/vkurko/calendar/

Thanks to the EventCalendar project for providing a lightweight, flexible calendar core that makes this Phoenix integration possible.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
