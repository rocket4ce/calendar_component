defmodule CalendarDemoWeb.PageController do
  use CalendarDemoWeb, :controller

  def home(conn, _params) do
    render(conn, :home)
  end
end
