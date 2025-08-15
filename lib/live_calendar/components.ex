defmodule LiveCalendar.Components do
  @moduledoc """
  HEEx components for rendering an interactive calendar container.

  The `<.calendar>` component renders a `div` with a `phx-hook="LiveCalendar"`.
  The associated JavaScript hook (compiled in this library's assets) reads
  `data-events` and `data-options` to initialize the EventCalendar instance.

  Assigns
  - `:id` (required): DOM id of the container.
  - `:events` (list): EventCalendar events list (maps converted to JSON).
  - `:options` (map): EventCalendar options forwarded to the JS hook.
  - `:on_event_click` (JS.t): Optional Phoenix.LiveView.JS to run on event click.
  - `:on_date_click` (JS.t): Optional JS to run when a date is clicked.
  - `:on_month_change` (JS.t): Optional JS when the visible month changes.
  - `:rest` (:global): Any global attributes (class, phx-*, data-*, aria-*).

  Notes
  - The callback assigns are provided for API symmetry but are not rendered
    directly in the markup. Prefer passing LiveView event names via
    `options.lv` (see README) or composing client handlers in `options.*`.
  - See the guides in the docs for options and examples.
  """
  use Phoenix.Component

  # Note: callbacks accept %Phoenix.LiveView.JS{}, but we don't use the alias directly here

  @doc """
  Calendar component container. Integrates with a JS hook via phx-hook="LiveCalendar".

  Exposes `events` and `options` as JSON in data attributes for the hook to initialize EventCalendar.
  """
  attr(:id, :string, required: true)
  attr(:events, :list, default: [])
  attr(:options, :map, default: %{})
  attr(:on_event_click, :any, default: nil, doc: "Callback as %Phoenix.LiveView.JS{}")
  attr(:on_date_click, :any, default: nil, doc: "Callback as %Phoenix.LiveView.JS{}")
  attr(:on_month_change, :any, default: nil, doc: "Callback as %Phoenix.LiveView.JS{}")
  attr(:rest, :global, doc: "Global attrs (phx-*, data-*, aria-*)")

  def calendar(assigns) do
    assigns =
      assigns
      |> assign(:events_json, Jason.encode!(assigns.events))
      |> assign(:options_json, Jason.encode!(assigns.options))

    ~H"""
    <div id={@id}
         phx-hook="LiveCalendar"
         data-events={@events_json}
         data-options={@options_json}
         {@rest}>
    </div>
    """
  end
end
