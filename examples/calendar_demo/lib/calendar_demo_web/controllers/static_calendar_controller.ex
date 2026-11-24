defmodule CalendarDemoWeb.StaticCalendarController do
  @moduledoc """
  Demo of `LiveCalendar.Components.static_calendar/1` in a plain controller, without LiveView.
  """
  use CalendarDemoWeb, :controller

  alias CalendarDemo.Events

  def index(conn, _params) do
    render(conn, :index, events: Events.list(), page_title: "Static calendar")
  end
end
