defmodule LiveCalendar.Components do
  @moduledoc """
  HEEx components for rendering an interactive calendar container.

  This module provides two main functions:
  - `calendar/1`: For use with Phoenix LiveView (uses phx-hook)
  - `static_calendar/1`: For use with regular Phoenix controllers (no LiveView required)

  The `<.calendar>` component renders a `div` with a `phx-hook="LiveCalendar"`.
  The `<.static_calendar>` component renders a `div` with a CSS class that can be targeted by vanilla JS.

  The associated JavaScript hook (compiled in this library's assets) reads
  `data-events`, `data-options`, and `data-js-callbacks` to initialize the EventCalendar instance.

  ## Phoenix LiveView 1.8+ JS Commands Support

  The calendar component fully supports Phoenix.LiveView.JS commands for rich client-side interactions.
  You can pass JS structs to the callback attributes and they will be converted to executable JavaScript:

      alias Phoenix.LiveView.JS

      <.calendar
        id="my-calendar"
        events={@events}
        on_event_click={JS.push("select_event") |> JS.show(to: "#event-modal")}
        on_date_click={JS.push("create_event") |> JS.add_class("highlight", to: ".selected")}
        on_month_change={JS.push("month_changed") |> JS.dispatch("calendar:changed")}
      />

  The JS commands execute on the client immediately, then the server events are handled.

  ## Assigns

  - `:id` (required): DOM id of the container.
  - `:events` (list): EventCalendar events list (maps converted to JSON).
  - `:options` (map): EventCalendar options forwarded to the JS calendar.
  - `:on_event_click` (Phoenix.LiveView.JS | nil): JS commands to run on event click (LiveView only).
  - `:on_date_click` (Phoenix.LiveView.JS | nil): JS commands to run when a date is clicked (LiveView only).
  - `:on_month_change` (Phoenix.LiveView.JS | nil): JS commands when the visible month changes (LiveView only).
  - `:rest` (:global): Any global attributes (class, phx-*, data-*, aria-*).

  ## Notes

  - The callback assigns accept %Phoenix.LiveView.JS{} structs which are converted to executable JavaScript.
  - For backwards compatibility, the default event names ("event_clicked", "date_clicked", "month_changed")
    are still pushed to the server after JS commands execute.
  - For static calendars, handle events via JavaScript callbacks in `options.*`.
  - See the guides in the docs for options and examples.
  """
  use Phoenix.Component

  # Note: callbacks accept %Phoenix.LiveView.JS{}, but we don't use the alias directly here

  # Helper function to convert Phoenix.LiveView.JS structs to executable JavaScript strings
  defp js_to_string(nil), do: nil

  defp js_to_string(%Phoenix.LiveView.JS{} = js) do
    # Convert JS struct to its string representation using Phoenix.HTML.Safe
    js |> Phoenix.HTML.Safe.to_iodata() |> IO.iodata_to_binary()
  end

  defp js_to_string(other), do: other

  @doc """
  Calendar component container for LiveView. Integrates with a JS hook via phx-hook="LiveCalendar".

  Exposes `events` and `options` as JSON in data attributes for the hook to initialize EventCalendar.
  """
  attr(:id, :string, required: true)
  attr(:events, :list, default: [])
  attr(:options, :map, default: %{})
  attr(:on_event_click, :any, default: nil, doc: "Callback as %Phoenix.LiveView.JS{}")
  attr(:on_date_click, :any, default: nil, doc: "Callback as %Phoenix.LiveView.JS{}")
  attr(:on_month_change, :any, default: nil, doc: "Callback as %Phoenix.LiveView.JS{}")
  attr(:rest, :global, doc: "Global attrs (phx-*, data-*, aria-*)")

  def calendar(assigns) do
    # Convert JS structs to executable JavaScript strings
    js_callbacks = %{}

    js_callbacks =
      if assigns.on_event_click,
        do: Map.put(js_callbacks, "onEventClick", js_to_string(assigns.on_event_click)),
        else: js_callbacks

    js_callbacks =
      if assigns.on_date_click,
        do: Map.put(js_callbacks, "onDateClick", js_to_string(assigns.on_date_click)),
        else: js_callbacks

    js_callbacks =
      if assigns.on_month_change,
        do: Map.put(js_callbacks, "onMonthChange", js_to_string(assigns.on_month_change)),
        else: js_callbacks

    assigns =
      assigns
      |> assign(:events_json, Jason.encode!(assigns.events))
      |> assign(:options_json, Jason.encode!(assigns.options))
      |> assign(:js_callbacks_json, Jason.encode!(js_callbacks))

    ~H"""
    <div id={@id}
         phx-hook="LiveCalendar"
         data-events={@events_json}
         data-options={@options_json}
         data-js-callbacks={@js_callbacks_json}
         {@rest}>
    </div>
    """
  end

  @doc """
  Static calendar component for use in regular Phoenix controllers (no LiveView required).

  This renders a calendar container that can be initialized with vanilla JavaScript.
  Events can be handled via multiple callback formats in the options map.

  ## Callback Formats

  The static calendar supports secure callback formats for event handling:

  ### 1. Global Function Reference (Recommended)
  Reference global functions by name - this is the safest and cleanest approach:

      # In your JavaScript file:
      window.MyCalendar = {
        handleEventClick: function(info) {
          console.log('Event clicked:', info.event.title);
        },
        handleDateClick: function(info) {
          console.log('Date clicked:', info.date);
        }
      };

      # In your Elixir template:
      <.static_calendar
        id="my-calendar"
        events={@events}
        options={%{
          view: "dayGridMonth",
          eventClick: "MyCalendar.handleEventClick",
          dateClick: "MyCalendar.handleDateClick"
        }}
      />

  ### 2. Simple Function Body Strings (Limited)
  For very simple callbacks only, with security restrictions:

      <.static_calendar
        id="my-calendar"
        events={@events}
        options={%{
          view: "dayGridMonth",
          eventClick: "console.log('Event:', info.event.title)",
          dateClick: "alert('Date: ' + info.dateStr)"
        }}
      />

  **Security Note**: Function body strings are limited to 200 characters and dangerous
  keywords (function, eval, setTimeout, etc.) are blocked to prevent code injection.
  For complex logic, always use global function references.

  ## Example

      <.static_calendar
        id="my-calendar"
        events={@events}
        options={%{
          view: "dayGridMonth",
          eventClick: "MyApp.Calendar.onEventClick",
          dateClick: "MyApp.Calendar.onDateClick",
          datesSet: "MyApp.Calendar.onMonthChange"
        }}
      />

  ## JavaScript Initialization

  In your application's JavaScript:

      import { initStaticCalendars } from "calendar_component/static";

      // Define your callback functions
      window.MyApp = {
        Calendar: {
          onEventClick(info) {
            console.log('Event clicked:', info.event.title);
            // Add your event handling logic here
          },

          onDateClick(info) {
            console.log('Date clicked:', info.dateStr);
            // Add your date handling logic here
          },

          onMonthChange(info) {
            console.log('Month changed:', info.start);
            // Add your month change logic here
          }
        }
      };

      // Initialize all static calendars on the page
      document.addEventListener('DOMContentLoaded', function() {
        initStaticCalendars();
      });
  """
  attr(:id, :string, required: true)
  attr(:events, :list, default: [])
  attr(:options, :map, default: %{})
  attr(:rest, :global, doc: "Global attrs (class, data-*, aria-*)")

  def static_calendar(assigns) do
    # Extract class from rest to handle it separately
    {class_value, rest} = Map.pop(assigns.rest, :class, nil)

    assigns =
      assigns
      |> assign(:events_json, Jason.encode!(assigns.events))
      |> assign(:options_json, Jason.encode!(assigns.options))
      |> assign(:combined_class, ["static-calendar", class_value])
      |> assign(:rest, rest)

    ~H"""
    <div id={@id}
         class={@combined_class}
         data-events={@events_json}
         data-options={@options_json}
         {@rest}>
    </div>
    """
  end
end
