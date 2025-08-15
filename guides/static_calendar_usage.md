# Static Calendar Usage Guide

This guide shows how to use the static calendar component with regular Phoenix controllers (no LiveView required) and the various callback options available.

## 1. Basic Setup

### In your Phoenix template (.html.heex)

```elixir
<.static_calendar
  id="my-calendar"
  events={@events}
  options={%{view: "dayGridMonth"}}
/>
```

### In your controller

```elixir
defmodule MyAppWeb.CalendarController do
  use MyAppWeb, :controller

  def index(conn, _params) do
    events = [
      %{id: 1, title: "Meeting", start: "2025-08-15T10:00:00"},
      %{id: 2, title: "Demo", start: "2025-08-16T14:00:00"}
    ]

    render(conn, :index, events: events)
  end
end
```

## 2. JavaScript Setup

### Install and initialize

```javascript
// In your app.js or main JavaScript file
import { initStaticCalendars } from "calendar_component/static";

document.addEventListener('DOMContentLoaded', function() {
  initStaticCalendars();
});
```

## 3. Event Handling Options

### Option 1: Global Function References (Recommended)

This is the cleanest approach - define your functions in JavaScript and reference them by name:

```javascript
// Define your callback functions globally
window.MyCalendar = {
  handleEventClick(info) {
    console.log('Event clicked:', info.event.title);

    // Example: Show event details in a modal
    const modal = document.getElementById('event-modal');
    const title = modal.querySelector('.event-title');
    const date = modal.querySelector('.event-date');

    title.textContent = info.event.title;
    date.textContent = info.event.start.toLocaleDateString();
    modal.style.display = 'block';
  },

  handleDateClick(info) {
    console.log('Date clicked:', info.dateStr);

    // Example: Create new event
    const title = prompt('Enter event title:');
    if (title) {
      // Here you could make an AJAX call to create the event
      fetch('/events', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          title: title,
          start: info.dateStr
        })
      });
    }
  },

  handleMonthChange(info) {
    console.log('Month changed to:', info.start);

    // Example: Load events for the new month
    const year = info.start.getFullYear();
    const month = info.start.getMonth() + 1;

    fetch(`/events?year=${year}&month=${month}`)
      .then(response => response.json())
      .then(events => {
        // Update calendar events
        info.view.calendar.removeAllEvents();
        info.view.calendar.addEventSource(events);
      });
  }
};
```

Then reference these functions in your Elixir template:

```elixir
<.static_calendar
  id="my-calendar"
  events={@events}
  options={%{
    view: "dayGridMonth",
    eventClick: "MyCalendar.handleEventClick",
    dateClick: "MyCalendar.handleDateClick",
    datesSet: "MyCalendar.handleMonthChange"
  }}
/>
```

### Option 2: Simple Function Body Strings (Limited)

For very simple callbacks, you can provide just the function body with security restrictions:

```elixir
<.static_calendar
  id="my-calendar"
  events={@events}
  options={%{
    view: "dayGridMonth",
    eventClick: "console.log('Event:', info.event.title)",
    dateClick: "alert('Date: ' + info.dateStr)"
  }}
/>
```

**Security Note**: This option is limited to simple expressions (max 200 chars) and dangerous keywords are blocked. For anything complex, use global function references.

## 4. Complete Example

### Controller

```elixir
defmodule MyAppWeb.EventController do
  use MyAppWeb, :controller

  def calendar(conn, _params) do
    events = get_events_for_month(Date.utc_today())
    render(conn, :calendar, events: events)
  end

  defp get_events_for_month(date) do
    [
      %{
        id: 1,
        title: "Team Meeting",
        start: "2025-08-15T10:00:00",
        backgroundColor: "#3b82f6"
      },
      %{
        id: 2,
        title: "Project Demo",
        start: "2025-08-16T14:00:00",
        backgroundColor: "#10b981"
      }
    ]
  end
end
```

### Template (calendar.html.heex)

```elixir
<div class="calendar-container">
  <h1>Event Calendar</h1>

  <.static_calendar
    id="event-calendar"
    events={@events}
    options={%{
      view: "dayGridMonth",
      height: "auto",
      headerToolbar: %{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      },
      eventClick: "EventCalendar.showEventDetails",
      dateClick: "EventCalendar.createEvent",
      datesSet: "EventCalendar.loadMonthEvents"
    }}
  />

  <!-- Event Details Modal -->
  <div id="event-modal" class="modal" style="display: none;">
    <div class="modal-content">
      <span class="close" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
      <h3 class="event-title"></h3>
      <p class="event-date"></p>
      <button onclick="EventCalendar.editEvent()">Edit</button>
      <button onclick="EventCalendar.deleteEvent()">Delete</button>
    </div>
  </div>
</div>
```

### JavaScript (app.js)

```javascript
import { initStaticCalendars } from "calendar_component/static";

// Define global event handlers
window.EventCalendar = {
  currentEvent: null,

  showEventDetails(info) {
    this.currentEvent = info.event;

    const modal = document.getElementById('event-modal');
    modal.querySelector('.event-title').textContent = info.event.title;
    modal.querySelector('.event-date').textContent =
      info.event.start.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

    modal.style.display = 'block';
  },

  createEvent(info) {
    const title = prompt('Enter event title:');
    if (!title) return;

    fetch('/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
      },
      body: JSON.stringify({
        event: {
          title: title,
          start: info.dateStr
        }
      })
    })
    .then(response => response.json())
    .then(event => {
      // Add event to calendar
      info.view.calendar.addEvent(event);
    })
    .catch(error => {
      console.error('Error creating event:', error);
      alert('Failed to create event');
    });
  },

  loadMonthEvents(info) {
    const start = info.start.toISOString().split('T')[0];
    const end = info.end.toISOString().split('T')[0];

    fetch(`/events?start=${start}&end=${end}`)
      .then(response => response.json())
      .then(events => {
        const calendar = info.view.calendar;
        calendar.removeAllEvents();
        calendar.addEventSource(events);
      })
      .catch(error => {
        console.error('Error loading events:', error);
      });
  },

  editEvent() {
    if (!this.currentEvent) return;

    const newTitle = prompt('Edit event title:', this.currentEvent.title);
    if (!newTitle) return;

    // Update via API and refresh calendar
    // Implementation depends on your backend
  },

  deleteEvent() {
    if (!this.currentEvent || !confirm('Delete this event?')) return;

    // Delete via API and remove from calendar
    // Implementation depends on your backend
  }
};

// Initialize calendars when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  initStaticCalendars();
});
```

## 5. CSS Styling (optional)

```css
.calendar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 300px;
  border-radius: 8px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: black;
}
```

This approach gives you maximum flexibility while maintaining clean, maintainable code with proper separation between Elixir templates and JavaScript logic.
