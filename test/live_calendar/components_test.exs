defmodule LiveCalendar.ComponentsTest do
  use ExUnit.Case, async: true

  import Phoenix.LiveViewTest

  test "renders minimal calendar container with id and hook" do
    html = render_component(&LiveCalendar.Components.calendar/1, id: "calendar")

    assert html =~ ~s(id="calendar")
    assert html =~ ~s(phx-hook="LiveCalendar")
    assert html =~ ~s(data-events="[") or html =~ ~s(data-events="[]")
    assert html =~ ~s(data-options="{") or html =~ ~s(data-options="{}")
  end

  test "accepts events and options and serializes them" do
    events = [%{id: 1, title: "A", start: "2025-08-01"}]
    options = %{view: "timeGridWeek"}

    html =
      render_component(&LiveCalendar.Components.calendar/1,
        id: "cal2",
        events: events,
        options: options
      )

    assert html =~ ~s(id="cal2")
    assert html =~ ~s(data-events)
    assert html =~ ~s(data-options)
    assert html =~ "timeGridWeek"
  end

  test ":global attributes pass through (class, data-*, phx-*)" do
    html =
      render_component(&LiveCalendar.Components.calendar/1, %{
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
    html = render_component(&LiveCalendar.Components.calendar/1, id: "cal4", options: options)

    assert html =~ ~s(data-options)
    assert html =~ "dayGridMonth"
    assert html =~ "headerToolbar"
    assert html =~ "prev,next"
  end

  test "accepts JS callback assigns (no-op in markup)" do
    js = %Phoenix.LiveView.JS{}

    html =
      render_component(&LiveCalendar.Components.calendar/1,
        id: "cal5",
        on_event_click: js,
        on_date_click: js,
        on_month_change: js
      )

    assert html =~ ~s(id="cal5")
    # Callbacks are not rendered; they are passed via options or handled client-side
    refute html =~ "on_event_click"
  end
end
