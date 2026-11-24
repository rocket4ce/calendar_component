defmodule CalendarComponentTest do
  use ExUnit.Case, async: true

  doctest CalendarComponent

  defp socket, do: %Phoenix.LiveView.Socket{}

  defp pushed_events(socket), do: get_in(socket.private, [:live_temp, :push_events]) || []

  test "the reported EventCalendar version matches the declared npm dependency" do
    package = "assets/package.json" |> File.read!() |> Jason.decode!()

    assert package["dependencies"]["@event-calendar/core"] == "^" <> CalendarComponent.event_calendar_version()
  end

  @installed "assets/node_modules/@event-calendar/core/package.json"

  @tag :npm
  test "the reported EventCalendar version matches the installed one" do
    if File.exists?(@installed) do
      installed = @installed |> File.read!() |> Jason.decode!()

      assert installed["version"] == CalendarComponent.event_calendar_version(),
             "`mix assets.build` bundles #{installed["version"]}, but event_calendar_version/0 " <>
               "reports #{CalendarComponent.event_calendar_version()}. Update @event_calendar_version " <>
               "and assets/package.json together."
    else
      IO.puts(:stderr, "skipped: run `cd assets && npm install` to check the installed EventCalendar version")
    end
  end

  describe "push_command/4" do
    test "pushes a calendar command for the given calendar id" do
      socket = CalendarComponent.push_command(socket(), "calendar", :goto_date, [~D[2026-12-01]])

      assert pushed_events(socket) == [
               ["calendar:command", %{id: "calendar", command: "gotoDate", args: [~D[2026-12-01]]}]
             ]
    end

    test "maps every command to its EventCalendar method" do
      for {command, method} <- [
            next: "next",
            prev: "prev",
            today: "today",
            refetch_events: "refetchEvents",
            refetch_resources: "refetchResources",
            unselect: "unselect",
            set_option: "setOption",
            add_event: "addEvent",
            update_event: "updateEvent",
            remove_event: "removeEventById"
          ] do
        assert [["calendar:command", %{command: ^method}]] =
                 pushed_events(CalendarComponent.push_command(socket(), "cal", command))
      end
    end

    test "single event commands carry their argument" do
      event = %{id: "e1", title: "New", start: ~N[2026-10-19 10:00:00]}

      assert [["calendar:command", %{command: "addEvent", args: [^event]}]] =
               pushed_events(CalendarComponent.push_command(socket(), "cal", :add_event, [event]))

      assert [["calendar:command", %{command: "removeEventById", args: ["e1"]}]] =
               pushed_events(CalendarComponent.push_command(socket(), "cal", :remove_event, ["e1"]))
    end

    test "raises on unknown commands" do
      assert_raise ArgumentError, ~r/unknown calendar command :destroy/, fn ->
        CalendarComponent.push_command(socket(), "cal", :destroy)
      end
    end
  end
end
