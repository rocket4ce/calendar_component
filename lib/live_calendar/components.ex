defmodule LiveCalendar.Components do
  @moduledoc false
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
