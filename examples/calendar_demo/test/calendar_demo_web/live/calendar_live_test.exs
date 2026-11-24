defmodule CalendarDemoWeb.CalendarLiveTest do
  use CalendarDemoWeb.ConnCase, async: false

  import Phoenix.LiveViewTest

  alias CalendarDemo.Events

  setup do
    Events.reset()
    :ok
  end

  describe "rendering" do
    test "mounts the calendar container wired to the LiveCalendar hook", %{conn: conn} do
      {:ok, view, html} = live(conn, ~p"/calendar")

      assert html =~ ~s(phx-hook="LiveCalendar")
      assert html =~ ~s(phx-update="ignore")
      assert html =~ ~s(aria-label="Team calendar")

      assert view |> element("#calendar") |> has_element?()
    end

    test "serializes the events into data-events", %{conn: conn} do
      {:ok, view, _html} = live(conn, ~p"/calendar")

      events = data(view, "events")

      assert length(events) == 6
      planning = Enum.find(events, &(&1["title"] == "Sprint planning"))
      assert planning["backgroundColor"] == "#2563eb"
      assert planning["extendedProps"] == %{"kind" => "meeting"}
      # NaiveDateTime is encoded as a wall-clock ISO8601 string.
      assert planning["start"] =~ ~r/^\d{4}-\d{2}-\d{2}T09:00:00$/

      offsite = Enum.find(events, &(&1["title"] == "Offsite"))
      assert offsite["allDay"]
      assert offsite["start"] =~ ~r/^\d{4}-\d{2}-\d{2}$/
    end

    test "serializes the options, including the custom button", %{conn: conn} do
      {:ok, view, _html} = live(conn, ~p"/calendar")

      options = data(view, "options")

      assert options["view"] == "timeGridWeek"
      assert options["editable"]
      assert options["selectable"]
      assert options["headerToolbar"]["end"] =~ "addEvent"

      assert options["customButtons"]["addEvent"] == %{
               "text" => "Quick add",
               "push" => "quick_add"
             }

      # `height` is only present in compact mode.
      refute Map.has_key?(options, "height")
    end

    test "declares the pushed events and the JS commands of each callback", %{conn: conn} do
      {:ok, view, _html} = live(conn, ~p"/calendar")

      # on_event_click is JS commands containing a push, so no default event is declared.
      assert data(view, "push-events") == %{
               "dateClick" => "date_clicked",
               "datesSet" => "month_changed",
               "eventDrop" => "event_moved",
               "eventResize" => "event_moved",
               "select" => "range_selected"
             }

      assert data(view, "js-callbacks") == %{
               "eventClick" => [
                 ["push", %{"event" => "event_clicked"}],
                 ["add_class", %{"names" => ["ring"], "to" => "#status"}]
               ]
             }
    end
  end

  describe "callbacks coming from the hook" do
    test "event_clicked selects the event", %{conn: conn} do
      {:ok, view, _html} = live(conn, ~p"/calendar")

      render_hook(view, "event_clicked", %{"id" => "ev-1", "event" => %{"id" => "ev-1"}})

      assert view |> element("#status-selected") |> render() =~ "ev-1"
      assert view |> element("#btn-delete") |> has_element?()
    end

    test "month_changed records the visible range", %{conn: conn} do
      {:ok, view, _html} = live(conn, ~p"/calendar")

      render_hook(view, "month_changed", %{
        "startStr" => "2026-10-19T00:00:00",
        "endStr" => "2026-10-26T00:00:00",
        "month" => 10,
        "year" => 2026
      })

      assert view |> element("#status-range") |> render() =~
               "2026-10-19T00:00:00 .. 2026-10-26T00:00:00"

      assert view |> element("#status-last") |> render() =~ "month_changed:2026-10"
    end

    test "range_selected opens the draft and creating it adds an event", %{conn: conn} do
      {:ok, view, _html} = live(conn, ~p"/calendar")

      render_hook(view, "range_selected", %{
        "startStr" => "2026-10-19T09:00:00",
        "endStr" => "2026-10-19T10:00:00",
        "allDay" => false
      })

      assert view |> element("#draft") |> render() =~ "2026-10-19T09:00:00"

      view |> element("#btn-create") |> render_click()

      assert length(Events.list()) == 7
      assert length(data(view, "events")) == 7
      refute view |> element("#draft") |> has_element?()
    end
  end

  describe "drag & drop" do
    test "a move inside office hours is persisted", %{conn: conn} do
      {:ok, view, _html} = live(conn, ~p"/calendar")

      payload = %{
        "id" => "ev-1",
        "event" => %{
          "id" => "ev-1",
          "startStr" => "2026-10-19T09:00:00",
          "endStr" => "2026-10-19T10:30:00"
        }
      }

      render_hook(view, "event_moved", payload)

      assert Events.get("ev-1").start == ~N[2026-10-19 09:00:00]
      assert view |> element("#status-last") |> render() =~ "event_moved:ev-1"
    end

    test "a move outside office hours replies revert: true and keeps the event", %{conn: conn} do
      {:ok, view, _html} = live(conn, ~p"/calendar")

      before = Events.get("ev-1")

      payload = %{
        "id" => "ev-1",
        "event" => %{
          "id" => "ev-1",
          "startStr" => "2026-10-19T05:00:00",
          "endStr" => "2026-10-19T06:00:00"
        }
      }

      render_hook(view, "event_moved", payload)

      # The hook calls info.revert() when the reply carries revert: true.
      assert_reply view, %{revert: true}
      assert Events.get("ev-1") == before
      assert view |> element("#status-last") |> render() =~ "event_moved_rejected:too_early"
    end
  end

  describe "driving the calendar from the server" do
    test "the toolbar buttons push calendar:command events", %{conn: conn} do
      {:ok, view, _html} = live(conn, ~p"/calendar")

      for {id, command} <- [{"#btn-prev", "prev"}, {"#btn-next", "next"}, {"#btn-today", "today"}] do
        view |> element(id) |> render_click()
        assert_push_event(view, "calendar:command", %{id: "calendar", command: ^command})
      end
    end

    test "deleting the selected event also removes it on the client", %{conn: conn} do
      {:ok, view, _html} = live(conn, ~p"/calendar")

      render_hook(view, "event_clicked", %{"id" => "ev-1", "event" => %{"id" => "ev-1"}})
      view |> element("#btn-delete") |> render_click()

      assert_push_event(view, "calendar:command", %{command: "removeEventById", args: ["ev-1"]})
      assert Events.get("ev-1") == nil
      assert length(data(view, "events")) == 5
    end

    test "the custom toolbar button creates an event and jumps to today", %{conn: conn} do
      {:ok, view, _html} = live(conn, ~p"/calendar")

      render_hook(view, "quick_add", %{
        "button" => "addEvent",
        "view" => %{"type" => "timeGridWeek"}
      })

      assert_push_event(view, "calendar:command", %{command: "gotoDate"})
      assert length(Events.list()) == 7
      assert view |> element("#status-last") |> render() =~ "quick_add:addEvent:timeGridWeek"
    end
  end

  describe "option changes" do
    test "switching the view updates data-options without remounting", %{conn: conn} do
      {:ok, view, _html} = live(conn, ~p"/calendar")

      assert data(view, "options")["view"] == "timeGridWeek"

      view |> element("#btn-month") |> render_click()

      assert data(view, "options")["view"] == "dayGridMonth"
      # Same element id, so the hook is updated instead of remounted.
      assert view |> element("#calendar") |> has_element?()
    end

    test "compact mode adds height and leaving it removes the key again", %{conn: conn} do
      {:ok, view, _html} = live(conn, ~p"/calendar")

      view |> element("#btn-compact") |> render_click()
      assert data(view, "options")["height"] == "420px"

      view |> element("#btn-compact") |> render_click()
      refute Map.has_key?(data(view, "options"), "height")
    end
  end

  defp data(view, name) do
    [value] =
      view
      |> element("#calendar")
      |> render()
      |> LazyHTML.from_fragment()
      |> LazyHTML.attribute("data-" <> name)

    Jason.decode!(value)
  end
end
