# Phoenix LiveView 1.8+ JS Commands Example

This example demonstrates how to use Phoenix.LiveView.JS commands with the calendar component for rich client-side interactions.

## LiveView Module

```elixir
defmodule MyAppWeb.CalendarLive do
  use MyAppWeb, :live_view

  alias Phoenix.LiveView.JS
  import LiveCalendar.Components

  def mount(_params, _session, socket) do
    socket =
      socket
      |> assign(:events, sample_events())
      |> assign(:selected_event, nil)
      |> assign(:selected_date, nil)
      |> assign(:show_modal, false)

    {:ok, socket}
  end

  def render(assigns) do
    ~H"""
    <div class="calendar-container">
      <h1>Interactive Calendar with JS Commands</h1>

      <.calendar
        id="interactive-calendar"
        events={@events}
        options={%{view: "dayGridMonth", height: "auto"}}
        on_event_click={
          JS.push("select_event")
          |> JS.show(to: "#event-modal")
          |> JS.add_class("selected", to: ".event-details")
        }
        on_date_click={
          JS.push("select_date")
          |> JS.add_class("highlighted", to: ".fc-day")
          |> JS.remove_class("highlighted", to: ".fc-day")
          |> JS.add_class("highlighted", to: "[data-date='#{@selected_date}']")
        }
        on_month_change={
          JS.push("month_changed")
          |> JS.dispatch("calendar:month_changed")
        }
      />

      <!-- Event Modal -->
      <div id="event-modal" class={"modal #{if @show_modal, do: "visible", else: "hidden"}"}>
        <div class="modal-content">
          <h3>Event Details</h3>
          <div class="event-details">
            <%= if @selected_event do %>
              <p><strong>Title:</strong> {@selected_event["title"]}</p>
              <p><strong>Date:</strong> {@selected_event["start"]}</p>
            <% end %>
          </div>
          <button phx-click={JS.hide(to: "#event-modal")}>Close</button>
        </div>
      </div>

      <!-- Debug Info -->
      <div class="debug-info" style="margin-top: 2rem; padding: 1rem; background: #f5f5f5;">
        <h4>Debug Info</h4>
        <p>Selected Event: {inspect(@selected_event)}</p>
        <p>Selected Date: {@selected_date}</p>
      </div>
    </div>
    """
  end

  # Event handlers
  def handle_event("select_event", %{"id" => id, "event" => event}, socket) do
    {:noreply, assign(socket, selected_event: event, show_modal: true)}
  end

  def handle_event("select_date", %{"date" => date}, socket) do
    {:noreply, assign(socket, selected_date: date)}
  end

  def handle_event("month_changed", %{"month" => month, "year" => year}, socket) do
    IO.puts("Month changed to: #{month}/#{year}")
    {:noreply, socket}
  end

  # Sample data
  defp sample_events do
    [
      %{
        id: "event-1",
        title: "Team Meeting",
        start: "2025-08-15T10:00:00",
        backgroundColor: "#3b82f6"
      },
      %{
        id: "event-2",
        title: "Project Demo",
        start: "2025-08-16T14:00:00",
        backgroundColor: "#10b981"
      },
      %{
        id: "event-3",
        title: "Client Call",
        start: "2025-08-17T09:30:00",
        backgroundColor: "#f59e0b"
      }
    ]
  end
end
```

## Key Features Demonstrated

1. **Event Click with JS Commands**: When an event is clicked:
   - Pushes "select_event" to the server
   - Shows the event modal immediately (client-side)
   - Adds CSS class for visual feedback

2. **Date Click with JS Commands**: When a date is clicked:
   - Pushes "select_date" to the server
   - Highlights the selected date (client-side CSS manipulation)

3. **Month Change with JS Commands**: When the month changes:
   - Pushes "month_changed" to the server
   - Dispatches custom DOM event for other JavaScript to listen to

## CSS (optional styling)

```css
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal.hidden {
  display: none;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
}

.fc-day.highlighted {
  background-color: #fef3c7 !important;
}

.event-details.selected {
  border: 2px solid #3b82f6;
  padding: 0.5rem;
  border-radius: 4px;
}
```

This example shows how the new Phoenix LiveView 1.8+ JS commands integration provides immediate client-side feedback while still maintaining server-side state management.
