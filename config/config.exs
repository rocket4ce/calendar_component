import Config

# `esbuild` is a dev-only dependency, so configuring it in any other environment makes Mix
# warn that the application is not available (it shows up on every `mix test` run).
if config_env() == :dev do
  config :esbuild,
    version: "0.25.0",
    calendar_component: [
      args:
        ~w(js/main.js --bundle --target=es2022 --format=esm --outdir=../priv/static/assets --outbase=js --external:phoenix --external:phoenix_html --external:phoenix_live_view --loader:.css=css --conditions=production),
      cd: Path.expand("../assets", __DIR__),
      env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
    ],
    static_calendar: [
      args:
        ~w(js/static-main.js --bundle --target=es2022 --format=esm --outdir=../priv/static/assets --outbase=js --loader:.css=css --conditions=production),
      cd: Path.expand("../assets", __DIR__),
      env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
    ]
end

if config_env() == :test do
  config :calendar_component, LiveCalendar.TestEndpoint,
    secret_key_base: String.duplicate("a", 64),
    server: false,
    live_view: [signing_salt: "lv_tests"],
    url: [host: "localhost"]

  config :logger, level: :warning
end
