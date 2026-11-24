defmodule CalendarDemo.Events do
  @moduledoc """
  In-memory event store for the demo, so the example runs without a database.

  Events are plain maps shaped the way `LiveCalendar.Components.calendar/1` expects them:
  any key EventCalendar understands can be used, and everything is encoded with Jason.
  """

  use Agent

  @colors %{
    "meeting" => "#2563eb",
    "focus" => "#7c3aed",
    "travel" => "#ea580c"
  }

  def start_link(_opts) do
    Agent.start_link(fn -> seed() end, name: __MODULE__)
  end

  @doc "Every event, ordered by start time."
  def list do
    __MODULE__
    |> Agent.get(& &1)
    |> Map.values()
    |> Enum.sort_by(&sort_key(&1.start), NaiveDateTime)
  end

  # All-day events carry a `Date`, timed ones a `NaiveDateTime`.
  defp sort_key(%Date{} = date), do: NaiveDateTime.new!(date, ~T[00:00:00])
  defp sort_key(%NaiveDateTime{} = naive), do: naive

  def get(id), do: Agent.get(__MODULE__, &Map.get(&1, id))

  @doc """
  Creates an event in the given range. `start` and `end` arrive from the calendar as
  wall-clock strings (`"startStr"`), which is what `NaiveDateTime` parses.
  """
  def create(attrs) do
    id = "ev-#{System.unique_integer([:positive])}"

    event = %{
      id: id,
      title: Map.get(attrs, :title, "New event"),
      start: coerce(attrs.start),
      end: coerce(attrs.end),
      allDay: Map.get(attrs, :allDay, false),
      backgroundColor: @colors[Map.get(attrs, :kind, "meeting")],
      extendedProps: %{kind: Map.get(attrs, :kind, "meeting")}
    }

    Agent.update(__MODULE__, &Map.put(&1, id, event))
    {:ok, event}
  end

  @doc """
  Moves or resizes an event.

  Rejects anything that would start before 07:00 or end after 20:00, so the demo can show
  the `%{revert: true}` reply putting the event back where it was.
  """
  def reschedule(id, start_str, end_str) do
    with {:ok, start_at} <- parse(start_str),
         {:ok, end_at} <- parse(end_str),
         :ok <- within_office_hours(start_at, end_at),
         event when not is_nil(event) <- get(id) do
      updated = %{event | start: start_at, end: end_at}
      Agent.update(__MODULE__, &Map.put(&1, id, updated))
      {:ok, updated}
    else
      nil -> {:error, :not_found}
      {:error, reason} -> {:error, reason}
    end
  end

  def delete(id) do
    case get(id) do
      nil -> {:error, :not_found}
      event -> Agent.update(__MODULE__, &Map.delete(&1, id)) && {:ok, event}
    end
  end

  @doc "Restores the initial set of events."
  def reset, do: Agent.update(__MODULE__, fn _ -> seed() end)

  defp within_office_hours(start_at, end_at) do
    cond do
      start_at.hour < 7 -> {:error, :too_early}
      end_at.hour > 20 or (end_at.hour == 20 and end_at.minute > 0) -> {:error, :too_late}
      true -> :ok
    end
  end

  defp parse(value) when is_binary(value) do
    case NaiveDateTime.from_iso8601(value) do
      {:ok, naive} -> {:ok, naive}
      {:error, _} -> {:error, :invalid_date}
    end
  end

  defp parse(%NaiveDateTime{} = value), do: {:ok, value}
  defp parse(_value), do: {:error, :invalid_date}

  # The calendar sends wall-clock strings ("startStr"); all-day ranges are date only.
  defp coerce(value) when is_binary(value) do
    case NaiveDateTime.from_iso8601(value) do
      {:ok, naive} -> naive
      {:error, _} -> Date.from_iso8601!(value)
    end
  end

  defp coerce(%Date{} = value), do: value
  defp coerce(%NaiveDateTime{} = value), do: value

  defp seed do
    monday = Date.add(Date.utc_today(), -Date.day_of_week(Date.utc_today()) + 1)

    [
      {"ev-1", "Sprint planning", monday, ~T[09:00:00], ~T[10:30:00], "meeting"},
      {"ev-2", "Deep work", monday, ~T[11:00:00], ~T[13:00:00], "focus"},
      {"ev-3", "Design review", Date.add(monday, 1), ~T[15:00:00], ~T[16:00:00], "meeting"},
      {"ev-4", "Pairing session", Date.add(monday, 2), ~T[10:00:00], ~T[12:00:00], "focus"},
      {"ev-5", "Retro", Date.add(monday, 4), ~T[16:00:00], ~T[17:00:00], "meeting"}
    ]
    |> Map.new(fn {id, title, date, from, to, kind} ->
      {id,
       %{
         id: id,
         title: title,
         start: NaiveDateTime.new!(date, from),
         end: NaiveDateTime.new!(date, to),
         allDay: false,
         backgroundColor: @colors[kind],
         extendedProps: %{kind: kind}
       }}
    end)
    |> Map.put("ev-6", %{
      id: "ev-6",
      title: "Offsite",
      start: Date.add(monday, 3),
      end: Date.add(monday, 4),
      allDay: true,
      backgroundColor: @colors["travel"],
      extendedProps: %{kind: "travel"}
    })
  end
end
