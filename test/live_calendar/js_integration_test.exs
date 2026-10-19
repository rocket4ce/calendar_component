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
    {:ok, view, _html} = live_isolated(conn, LV)

    [callbacks] =
      view |> element("#cal") |> render() |> LazyHTML.from_fragment() |> LazyHTML.attribute("data-js-callbacks")

    callbacks = Jason.decode!(callbacks)

    assert callbacks["eventClick"] == [["push", %{"event" => "select_event"}], ["show", %{"to" => "#event-modal"}]]

    assert callbacks["dateClick"] == [
             ["push", %{"event" => "select_date"}],
             ["add_class", %{"names" => ["highlighted"], "to" => ".fc-day"}]
           ]

    assert callbacks["datesSet"] == [["push", %{"event" => "month_changed"}], ["dispatch", %{"event" => "month:changed"}]]

    # Every callback pushes through its JS commands, so no default events are pushed
    [push_events] =
      view |> element("#cal") |> render() |> LazyHTML.from_fragment() |> LazyHTML.attribute("data-push-events")

    assert Jason.decode!(push_events) == %{}
  end

  test "JS.push handlers receive the callback payload" do
    conn = build_conn()
    {:ok, view, _html} = live_isolated(conn, LV)

    render_hook(view, "select_event", %{"id" => "event-2", "event" => %{"id" => "event-2"}})
    assert render(view) =~ ~s(data-selected-event="event-2")
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
