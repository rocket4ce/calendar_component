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
