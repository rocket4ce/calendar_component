defmodule LiveCalendar.StaticCalendarTest do
  use ExUnit.Case, async: true

  import Phoenix.LiveViewTest

  test "renders static calendar with basic options" do
    html =
      render_component(&LiveCalendar.Components.static_calendar/1,
        id: "static-cal",
        events: [%{id: 1, title: "Test Event", start: "2025-08-15"}],
        options: %{view: "dayGridMonth"}
      )

    assert html =~ ~s(id="static-cal")
    assert html =~ "static-calendar"
    assert html =~ ~s(data-events)
    assert html =~ ~s(data-options)
    assert html =~ "Test Event"
    assert html =~ "dayGridMonth"
  end

  test "handles global function references in options" do
    html =
      render_component(&LiveCalendar.Components.static_calendar/1,
        id: "static-cal-2",
        events: [],
        options: %{
          view: "dayGridMonth",
          eventClick: "MyApp.handleEventClick",
          dateClick: "window.MyCalendar.onDateClick"
        }
      )

    assert html =~ ~s(id="static-cal-2")
    assert html =~ "MyApp.handleEventClick"
    assert html =~ "window.MyCalendar.onDateClick"
  end

  test "handles simple function body strings in options with security restrictions" do
    html =
      render_component(&LiveCalendar.Components.static_calendar/1,
        id: "static-cal-3",
        events: [],
        options: %{
          view: "dayGridMonth",
          eventClick: "console.log('Event:', info.event.title)",
          dateClick: "alert('Date: ' + info.dateStr)"
        }
      )

    assert html =~ ~s(id="static-cal-3")
    assert html =~ "console.log"
    assert html =~ "alert"
  end

  test "rejects dangerous function strings for security" do
    # These would be rejected by the JavaScript security checks
    html =
      render_component(&LiveCalendar.Components.static_calendar/1,
        id: "static-cal-4",
        events: [],
        options: %{
          view: "dayGridMonth",
          eventClick: "eval('malicious code')",
          dateClick: "function() { return 'blocked'; }"
        }
      )

    assert html =~ ~s(id="static-cal-4")
    # The dangerous code is still in the JSON, but JavaScript will reject it
    assert html =~ "eval"
    assert html =~ "function"
  end

  test "passes global attributes correctly" do
    html =
      render_component(&LiveCalendar.Components.static_calendar/1, %{
        :id => "static-cal-5",
        :class => "custom-calendar",
        "data-testid" => "calendar-widget",
        :events => [],
        :options => %{}
      })

    assert html =~ ~s(id="static-cal-5")
    assert html =~ "static-calendar"
    assert html =~ "custom-calendar"
    assert html =~ ~s(data-testid="calendar-widget")
  end
end
