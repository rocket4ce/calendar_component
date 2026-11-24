defmodule CalendarDemoWeb.PageControllerTest do
  use CalendarDemoWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get(conn, ~p"/")
    html = html_response(conn, 200)

    assert html =~ "calendar_component demo"
    assert html =~ ~p"/calendar"
    assert html =~ ~p"/static-calendar"
  end
end
