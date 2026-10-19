defmodule LiveCalendar.ComponentsTest do
  use ExUnit.Case, async: true

  import Phoenix.LiveViewTest

  alias Phoenix.LiveView.JS

  defp render_calendar(assigns) do
    assigns = Map.new(assigns)
    render_component(&LiveCalendar.Components.calendar/1, assigns)
  end

  defp data(html, id, name) do
    [value] =
      html
      |> LazyHTML.from_fragment()
      |> LazyHTML.query_by_id(id)
      |> LazyHTML.attribute("data-" <> name)

    Jason.decode!(value)
  end

  test "renders minimal calendar container with id and hook" do
    html = render_calendar(id: "calendar")

    assert html =~ ~s(id="calendar")
    assert html =~ ~s(phx-hook="LiveCalendar")
    assert data(html, "calendar", "events") == []
    assert data(html, "calendar", "options") == %{}
  end

  test "ignores LiveView DOM patches so the calendar DOM is preserved" do
    assert render_calendar(id: "calendar") =~ ~s(phx-update="ignore")
  end

  test "accepts events and options and serializes them" do
    events = [%{id: 1, title: "A", start: "2025-08-01"}]
    html = render_calendar(id: "cal2", events: events, options: %{view: "timeGridWeek"})

    assert data(html, "cal2", "events") == [%{"id" => 1, "title" => "A", "start" => "2025-08-01"}]
    assert data(html, "cal2", "options") == %{"view" => "timeGridWeek"}
  end

  test "serializes Elixir dates as ISO8601 strings" do
    events = [
      %{id: 1, start: ~D[2026-10-19]},
      %{id: 2, start: ~N[2026-10-19 10:00:00]},
      %{id: 3, start: ~U[2026-10-19 10:00:00Z]}
    ]

    html = render_calendar(id: "cal", events: events)

    assert Enum.map(data(html, "cal", "events"), & &1["start"]) == [
             "2026-10-19",
             "2026-10-19T10:00:00",
             "2026-10-19T10:00:00Z"
           ]
  end

  test ":global attributes pass through (class, data-*, phx-*)" do
    html =
      render_calendar(%{
        :id => "cal3",
        :class => "my-cal",
        "data-testid" => "calendar",
        "phx-click" => "noop"
      })

    assert html =~ ~s(id="cal3")
    assert html =~ ~s(class="my-cal")
    assert html =~ ~s(data-testid="calendar")
    assert html =~ ~s(phx-click="noop")
  end

  test "nested options are serialized into data-options" do
    options = %{view: "dayGridMonth", headerToolbar: %{start: "title", end: "today prev,next"}}
    html = render_calendar(id: "cal4", options: options)

    assert data(html, "cal4", "options") == %{
             "view" => "dayGridMonth",
             "headerToolbar" => %{"start" => "title", "end" => "today prev,next"}
           }
  end

  describe "server events" do
    test "click, date and month callbacks push their default events" do
      html = render_calendar(id: "cal")

      assert data(html, "cal", "push-events") == %{
               "eventClick" => "event_clicked",
               "dateClick" => "date_clicked",
               "datesSet" => "month_changed"
             }
    end

    test "a string sets the pushed event name" do
      html =
        render_calendar(
          id: "cal",
          on_event_click: "select_event",
          on_event_drop: "event_dropped",
          on_event_resize: "event_resized",
          on_select: "range_selected"
        )

      assert data(html, "cal", "push-events") == %{
               "eventClick" => "select_event",
               "dateClick" => "date_clicked",
               "datesSet" => "month_changed",
               "eventDrop" => "event_dropped",
               "eventResize" => "event_resized",
               "select" => "range_selected"
             }
    end

    test "false disables the default event" do
      html = render_calendar(id: "cal", on_date_click: false, on_month_change: false)

      assert data(html, "cal", "push-events") == %{"eventClick" => "event_clicked"}
    end

    test "legacy options.lv names are honored and not forwarded to EventCalendar" do
      options = %{view: "dayGridMonth", lv: %{onEventClick: "my_click", onMonthChange: false, onEventDrop: "dropped"}}
      html = render_calendar(id: "cal", options: options)

      assert data(html, "cal", "push-events") == %{
               "eventClick" => "my_click",
               "dateClick" => "date_clicked",
               "eventDrop" => "dropped"
             }

      assert data(html, "cal", "options") == %{"view" => "dayGridMonth"}
    end

    test "legacy options.lv also works with string keys" do
      html = render_calendar(id: "cal", options: %{"lv" => %{"onDateClick" => "my_date"}})

      assert data(html, "cal", "push-events")["dateClick"] == "my_date"
      assert data(html, "cal", "options") == %{}
    end
  end

  describe "JS commands" do
    test "are serialized as JSON operations the hook can execute" do
      js = "select_event" |> JS.push(value: %{source: "calendar"}) |> JS.show(to: "#event-modal")
      html = render_calendar(id: "cal", on_event_click: js)

      assert data(html, "cal", "js-callbacks") == %{
               "eventClick" => [
                 ["push", %{"event" => "select_event", "value" => %{"source" => "calendar"}}],
                 ["show", %{"to" => "#event-modal"}]
               ]
             }
    end

    test "with a push replace the default event" do
      html = render_calendar(id: "cal", on_event_click: JS.push("select_event"))

      refute Map.has_key?(data(html, "cal", "push-events"), "eventClick")
    end

    test "without a push keep the default event" do
      html = render_calendar(id: "cal", on_event_click: JS.show(to: "#modal"))

      assert data(html, "cal", "push-events")["eventClick"] == "event_clicked"
    end

    test "are supported by every callback" do
      js = JS.dispatch("calendar:changed")

      html =
        render_calendar(
          id: "cal",
          on_event_click: js,
          on_date_click: js,
          on_month_change: js,
          on_event_drop: js,
          on_event_resize: js,
          on_select: js
        )

      assert html |> data("cal", "js-callbacks") |> Map.keys() |> Enum.sort() ==
               ~w(dateClick datesSet eventClick eventDrop eventResize select)
    end

    test "nil callbacks render no JS" do
      html = render_calendar(id: "cal7", on_event_click: nil, on_date_click: nil, on_month_change: nil)

      assert data(html, "cal7", "js-callbacks") == %{}
    end
  end
end
