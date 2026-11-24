defmodule CalendarComponent do
  @moduledoc """
  Phoenix components for [EventCalendar](https://github.com/vkurko/calendar).

  The HEEx components live in `LiveCalendar.Components`. This module provides helpers
  to drive a LiveView calendar from the server.
  """

  alias Phoenix.LiveView.Socket

  @event_calendar_version "5.17.2"

  @commands %{
    goto_date: "gotoDate",
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
  }

  @doc """
  Returns the version of EventCalendar bundled with this library.

      iex> CalendarComponent.event_calendar_version()
      "5.17.2"
  """
  @spec event_calendar_version() :: String.t()
  def event_calendar_version, do: @event_calendar_version

  @doc """
  Runs a calendar method on the client from a LiveView.

  `calendar_id` is the `id` given to `LiveCalendar.Components.calendar/1`.

  Supported commands:

    * `:goto_date` - `[date]`, a `Date`, `DateTime` or ISO8601 string
    * `:next`, `:prev`, `:today`
    * `:refetch_events`, `:refetch_resources` - reload `eventSources` / `resources` given as URLs
    * `:unselect` - clears the current selection
    * `:set_option` - `[name, value]`, sets any EventCalendar option
    * `:add_event` - `[event]`, adds a single event
    * `:update_event` - `[event]`, replaces the event with the same `id`
    * `:remove_event` - `[id]`, removes the event with that `id`

  `:add_event`, `:update_event` and `:remove_event` change one event without re-sending the
  whole `events` list. The calendar is then out of sync with the `events` assign, so keep the
  assign updated as well if a later re-render may change it.

  ## Examples

      socket
      |> CalendarComponent.push_command("calendar", :goto_date, [~D[2026-12-01]])
      |> CalendarComponent.push_command("calendar", :set_option, ["view", "timeGridWeek"])
      |> CalendarComponent.push_command("calendar", :remove_event, ["event-7"])
  """
  @spec push_command(Socket.t(), String.t(), atom(), list()) ::
          Socket.t()
  def push_command(socket, calendar_id, command, args \\ []) when is_binary(calendar_id) and is_list(args) do
    name =
      Map.get(@commands, command) ||
        raise ArgumentError,
              "unknown calendar command #{inspect(command)}, expected one of: " <>
                Enum.map_join(Map.keys(@commands), ", ", &inspect/1)

    Phoenix.LiveView.push_event(socket, "calendar:command", %{id: calendar_id, command: name, args: args})
  end
end
