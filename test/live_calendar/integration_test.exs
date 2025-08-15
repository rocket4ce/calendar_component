defmodule LiveCalendar.IntegrationTest do
  use ExUnit.Case, async: true

  import Phoenix.ConnTest
  import Phoenix.LiveViewTest

  @endpoint LiveCalendar.TestEndpoint

  defmodule LV do
    @moduledoc false
    use Phoenix.LiveView

    import LiveCalendar.Components

    def mount(_params, _session, socket) do
      socket = Phoenix.Component.assign(socket, :events, [])
      {:ok, Phoenix.Component.assign(socket, :last, nil)}
    end

    def render(assigns) do
      ~H"""
      <div id="wrap">
        <.calendar id="cal" events={@events} options={%{view: "dayGridMonth"}} />
        <div id="debug" data-last={inspect(@last)}></div>
      </div>
      """
    end

    def handle_event(name, payload, socket) when name in ["event_clicked", "date_clicked", "month_changed"] do
      {:noreply, Phoenix.Component.assign(socket, :last, {name, payload})}
    end
  end

  test "receives client hook pushes for event/date/month" do
    conn = build_conn()
    {:ok, view, _html} = live_isolated(conn, LV)

    # Simula los pushes del hook
    render_hook(view, "event_clicked", %{"id" => "e1"})
    html = render(view)
    assert html =~ ~s(&quot;event_clicked&quot;)
    assert html =~ ~s(&quot;e1&quot;)

    render_hook(view, "date_clicked", %{"date" => "2025-08-15"})
    html = render(view)
    assert html =~ ~s(&quot;date_clicked&quot;)
    assert html =~ ~s(&quot;2025-08-15&quot;)

    render_hook(view, "month_changed", %{"month" => 8, "year" => 2025})
    html = render(view)
    assert html =~ ~s(&quot;month_changed&quot;)
    assert html =~ ~s(&quot;month&quot;)
    assert html =~ ~s(8)
    assert html =~ ~s(2025)
  end
end
