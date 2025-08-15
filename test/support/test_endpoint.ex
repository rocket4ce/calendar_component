defmodule LiveCalendar.TestEndpoint do
  use Phoenix.Endpoint, otp_app: :calendar_component

  socket("/live", Phoenix.LiveView.Socket, websocket: [connect_info: [:peer_data, :x_headers, :uri, :user_agent]])

  def init(_key, config), do: {:ok, config}
end
