defmodule CalendarComponentTest do
  use ExUnit.Case, async: true

  doctest CalendarComponent

  defp socket, do: %Phoenix.LiveView.Socket{}

  defp pushed_events(socket), do: get_in(socket.private, [:live_temp, :push_events]) || []

  test "the reported EventCalendar version matches the bundled npm dependency" do
    package = "assets/package.json" |> File.read!() |> Jason.decode!()

    assert package["dependencies"]["@event-calendar/core"] == "^" <> CalendarComponent.event_calendar_version()
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
            set_option: "setOption"
          ] do
        assert [["calendar:command", %{command: ^method}]] =
                 pushed_events(CalendarComponent.push_command(socket(), "cal", command))
      end
    end

    test "raises on unknown commands" do
      assert_raise ArgumentError, ~r/unknown calendar command :destroy/, fn ->
        CalendarComponent.push_command(socket(), "cal", :destroy)
      end
    end
  end
end
