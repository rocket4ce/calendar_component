defmodule CalendarDemo.EventsTest do
  use ExUnit.Case, async: false

  alias CalendarDemo.Events

  setup do
    Events.reset()
    :ok
  end

  test "seeds a week of events, ordered by start" do
    events = Events.list()

    assert length(events) == 6
    assert Enum.any?(events, &(&1.title == "Sprint planning"))

    starts = Enum.map(events, &sortable/1)
    assert starts == Enum.sort(starts, NaiveDateTime)
  end

  test "the all-day event carries a Date, timed ones a NaiveDateTime" do
    all_day = Events.get("ev-6")

    assert all_day.allDay
    assert %Date{} = all_day.start
    assert %NaiveDateTime{} = Events.get("ev-1").start
  end

  test "create/1 adds an event with a generated id" do
    {:ok, event} = Events.create(%{start: ~N[2026-10-19 10:00:00], end: ~N[2026-10-19 11:00:00]})

    assert event.id =~ ~r/^ev-\d+$/
    assert event.title == "New event"
    assert Events.get(event.id) == event
    assert length(Events.list()) == 7
  end

  describe "reschedule/3" do
    test "accepts a move inside office hours" do
      {:ok, event} = Events.reschedule("ev-1", "2026-10-19T09:00:00", "2026-10-19T10:00:00")

      assert event.start == ~N[2026-10-19 09:00:00]
      assert Events.get("ev-1").end == ~N[2026-10-19 10:00:00]
    end

    test "rejects a move starting before 07:00" do
      assert {:error, :too_early} =
               Events.reschedule("ev-1", "2026-10-19T06:00:00", "2026-10-19T07:00:00")

      refute Events.get("ev-1").start == ~N[2026-10-19 06:00:00]
    end

    test "rejects a move ending after 20:00" do
      assert {:error, :too_late} =
               Events.reschedule("ev-1", "2026-10-19T19:00:00", "2026-10-19T21:00:00")
    end

    test "rejects unparsable dates and unknown ids" do
      assert {:error, :invalid_date} =
               Events.reschedule("ev-1", "not-a-date", "2026-10-19T10:00:00")

      assert {:error, :not_found} =
               Events.reschedule("nope", "2026-10-19T09:00:00", "2026-10-19T10:00:00")
    end
  end

  test "delete/1 removes the event" do
    assert {:ok, _} = Events.delete("ev-1")
    assert Events.get("ev-1") == nil
    assert {:error, :not_found} = Events.delete("ev-1")
  end

  defp sortable(%{start: %Date{} = date}), do: NaiveDateTime.new!(date, ~T[00:00:00])
  defp sortable(%{start: start}), do: start
end
