import Config

config :esbuild,
  version: "0.25.0",
  calendar_component: [
    args:
      ~w(js/calendar-hooks.js --bundle --target=es2016 --format=esm --outdir=../priv/static/assets --external:phoenix --external:phoenix_html --external:phoenix_live_view),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ],
  static_calendar: [
    args: ~w(js/static-calendar.js --bundle --target=es2016 --format=esm --outdir=../priv/static/assets),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]

if config_env() == :test do
  config :calendar_component, LiveCalendar.TestEndpoint,
    secret_key_base: String.duplicate("a", 64),
    server: false,
    live_view: [signing_salt: "lv_tests"],
    url: [host: "localhost"]
end
