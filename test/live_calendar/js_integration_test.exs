defmodule LiveCalendar.JSIntegrationTest do
  @moduledoc """
  Integration test to verify that Phoenix.LiveView.JS commands work properly
  with the calendar component for Phoenix LiveView 1.8+ compatibility.
  """
  use ExUnit.Case, async: true

  import Phoenix.ConnTest
  import Phoenix.LiveViewTest

  @endpoint LiveCalendar.TestEndpoint

  defmodule LV do
    @moduledoc false
    use Phoenix.LiveView

    import LiveCalendar.Components

    alias Phoenix.LiveView.JS

    def mount(_params, _session, socket) do
      socket =
        socket
        |> assign(:events, [
          %{id: "event-1", title: "Test Event", start: "2025-08-15T10:00:00"},
          %{id: "event-2", title: "Another Event", start: "2025-08-16T14:00:00"}
        ])
        |> assign(:selected_event, nil)
        |> assign(:selected_date, nil)
        |> assign(:modal_visible, false)

      {:ok, socket}
    end

    def render(assigns) do
      ~H"""
      <div id="wrap">
        <.calendar
          id="cal"
          events={@events}
          options={%{view: "dayGridMonth"}}
          on_event_click={JS.push("select_event") |> JS.show(to: "#event-modal")}
          on_date_click={JS.push("select_date") |> JS.add_class("highlighted", to: ".fc-day")}
          on_month_change={JS.push("month_changed") |> JS.dispatch("month:changed")}
        />

        <div id="event-modal" class={"modal #{if @modal_visible, do: "visible", else: "hidden"}"}>
          <p>Selected Event: {@selected_event}</p>
        </div>

        <div id="debug" data-selected-event={@selected_event} data-selected-date={@selected_date}></div>
      </div>
      """
    end

    def handle_event("select_event", payload, socket) do
      {:noreply, assign(socket, :selected_event, payload["id"])}
    end

    def handle_event("select_date", payload, socket) do
      {:noreply, assign(socket, :selected_date, payload["date"])}
    end

    def handle_event("month_changed", _payload, socket) do
      {:noreply, socket}
    end

    # Handle the default event names for backwards compatibility
    def handle_event("event_clicked", payload, socket) do
      {:noreply, assign(socket, :selected_event, payload["id"])}
    end

    def handle_event("date_clicked", payload, socket) do
      {:noreply, assign(socket, :selected_date, payload["date"])}
    end

    # Fallback for other events to prevent crashes
    def handle_event(_name, _payload, socket) do
      {:noreply, socket}
    end
  end

  test "JS commands are properly converted and passed to the client" do
    conn = build_conn()
    {:ok, view, html} = live_isolated(conn, LV)

    # Check that the calendar component includes the JS callbacks
    assert html =~ ~s(data-js-callbacks)
    assert html =~ ~s(&quot;onEventClick&quot;)
    assert html =~ ~s(&quot;onDateClick&quot;)
    assert html =~ ~s(&quot;onMonthChange&quot;)

    # The JS commands should contain the push commands
    assert html =~ ~s(select_event)
    assert html =~ ~s(select_date)
    assert html =~ ~s(month_changed)

    # And should also contain client-side JS commands
    assert html =~ ~s(show)
    assert html =~ ~s(add_class)
    assert html =~ ~s(dispatch)
  end

  test "event handlers still work for backwards compatibility" do
    conn = build_conn()
    {:ok, view, _html} = live_isolated(conn, LV)

    # Simulate hook events (these should still work)
    render_hook(view, "event_clicked", %{"id" => "event-1"})
    html = render(view)
    assert html =~ ~s(data-selected-event="event-1")

    render_hook(view, "date_clicked", %{"date" => "2025-08-15"})
    html = render(view)
    assert html =~ ~s(data-selected-date="2025-08-15")
  end
end
