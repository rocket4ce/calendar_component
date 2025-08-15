defmodule CalendarComponent.HeaderToolbarTest do
  use ExUnit.Case, async: true

  import LiveCalendar.Components
  import Phoenix.Component
  import Phoenix.LiveViewTest

  describe "headerToolbar button grouping" do
    test "single buttons without grouping" do
      assigns = %{
        events: [],
        options: %{
          headerToolbar: %{
            left: "prev",
            center: "title",
            right: "next"
          }
        }
      }

      html =
        rendered_to_string(~H"""
        <.calendar id="test-calendar" events={@events} options={@options} />
        """)

      # Check that the HTML contains the correct headerToolbar structure (HTML escaped)
      assert html =~ "headerToolbar"
      assert html =~ "&quot;left&quot;:&quot;prev&quot;"
      assert html =~ "&quot;center&quot;:&quot;title&quot;"
      assert html =~ "&quot;right&quot;:&quot;next&quot;"
    end

    test "comma-grouped buttons (no visual separation)" do
      assigns = %{
        events: [],
        options: %{
          headerToolbar: %{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
          }
        }
      }

      html =
        rendered_to_string(~H"""
        <.calendar id="test-calendar" events={@events} options={@options} />
        """)

      # These should be grouped together with commas (no spaces)
      assert html =~ "&quot;left&quot;:&quot;prev,next&quot;"
      assert html =~ "&quot;right&quot;:&quot;dayGridMonth,timeGridWeek,timeGridDay&quot;"
    end

    test "space-separated button groups (with visual separation)" do
      assigns = %{
        events: [],
        options: %{
          headerToolbar: %{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek timeGridDay,listWeek"
          }
        }
      }

      html =
        rendered_to_string(~H"""
        <.calendar id="test-calendar" events={@events} options={@options} />
        """)

      # Space creates separate button groups
      assert html =~ "&quot;left&quot;:&quot;prev,next today&quot;"
      assert html =~ "&quot;right&quot;:&quot;dayGridMonth,timeGridWeek timeGridDay,listWeek&quot;"
    end

    test "complex grouping with resources" do
      assigns = %{
        events: [],
        options: %{
          headerToolbar: %{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek resourceTimeGridWeek,resourceTimelineWeek"
          }
        }
      }

      html =
        rendered_to_string(~H"""
        <.calendar id="test-calendar" events={@events} options={@options} />
        """)

      # Should have two distinct groups on the right
      assert html =~
               "&quot;right&quot;:&quot;dayGridMonth,timeGridWeek,timeGridDay,listWeek resourceTimeGridWeek,resourceTimelineWeek&quot;"
    end

    test "mixed grouping patterns" do
      assigns = %{
        events: [],
        options: %{
          headerToolbar: %{
            left: "prev,next today customButton",
            center: "title",
            right: "month,agendaWeek agendaDay,listMonth print,email"
          }
        }
      }

      html =
        rendered_to_string(~H"""
        <.calendar id="test-calendar" events={@events} options={@options} />
        """)

      # Multiple groups with different spacing patterns
      assert html =~ "&quot;left&quot;:&quot;prev,next today customButton&quot;"
      assert html =~ "&quot;right&quot;:&quot;month,agendaWeek agendaDay,listMonth print,email&quot;"
    end
  end

  describe "footerToolbar button grouping" do
    test "footer toolbar follows same grouping rules" do
      assigns = %{
        events: [],
        options: %{
          headerToolbar: %{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek"
          },
          footerToolbar: %{
            left: "today customButton",
            right: "print,export pdf,excel"
          }
        }
      }

      html =
        rendered_to_string(~H"""
        <.calendar id="test-calendar" events={@events} options={@options} />
        """)

      assert html =~ "footerToolbar"
      assert html =~ "&quot;left&quot;:&quot;today customButton&quot;"
      assert html =~ "&quot;right&quot;:&quot;print,export pdf,excel&quot;"
    end
  end

  describe "static calendar header toolbar" do
    test "static calendar preserves button grouping" do
      assigns = %{
        events: [],
        options: %{
          headerToolbar: %{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay listWeek,resourceTimeGridWeek"
          }
        }
      }

      html =
        rendered_to_string(~H"""
        <.static_calendar id="test-static-calendar" events={@events} options={@options} />
        """)

      # Static calendar should preserve the exact same grouping
      assert html =~ "data-options"
      assert html =~ "headerToolbar"
      assert html =~ "&quot;right&quot;:&quot;dayGridMonth,timeGridWeek,timeGridDay listWeek,resourceTimeGridWeek&quot;"
    end
  end

  describe "button grouping validation" do
    test "empty toolbar sections" do
      assigns = %{
        events: [],
        options: %{
          headerToolbar: %{
            left: "",
            center: "title",
            right: "dayGridMonth,timeGridWeek"
          }
        }
      }

      html =
        rendered_to_string(~H"""
        <.calendar id="test-calendar" events={@events} options={@options} />
        """)

      assert html =~ "&quot;left&quot;:&quot;&quot;"
      assert html =~ "&quot;center&quot;:&quot;title&quot;"
    end

    test "toolbar with false values (hidden sections)" do
      assigns = %{
        events: [],
        options: %{
          headerToolbar: %{
            left: false,
            center: "title",
            right: "dayGridMonth,timeGridWeek"
          }
        }
      }

      html =
        rendered_to_string(~H"""
        <.calendar id="test-calendar" events={@events} options={@options} />
        """)

      assert html =~ "&quot;left&quot;:false"
    end
  end
end
