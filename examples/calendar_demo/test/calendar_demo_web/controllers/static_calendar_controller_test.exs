defmodule CalendarDemoWeb.StaticCalendarControllerTest do
  use CalendarDemoWeb.ConnCase, async: true

  test "renders the static calendar container with its data attributes", %{conn: conn} do
    html = conn |> get(~p"/static-calendar") |> html_response(200)

    assert html =~ ~s(id="static-calendar")
    assert html =~ "static-calendar"
    # No LiveView hook on the static component.
    refute html =~ ~s(phx-hook="LiveCalendar")

    options = attribute(html, "static-calendar", "data-options")
    assert options["view"] == "dayGridMonth"
    assert options["eventClick"] == "CalendarDemo.Static.onEventClick"
    assert options["headerToolbar"]["start"] == "prev,next today"

    events = attribute(html, "static-calendar", "data-events")
    assert length(events) == 6
    assert Enum.any?(events, &(&1["title"] == "Sprint planning"))
  end

  defp attribute(html, id, name) do
    [value] =
      html
      |> LazyHTML.from_document()
      |> LazyHTML.query_by_id(id)
      |> LazyHTML.attribute(name)

    Jason.decode!(value)
  end
end
