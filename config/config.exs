import Config

config :esbuild,
  version: "0.25.0",
  calendar_component: [
    args: ~w(js/calendar-hooks.js --bundle --target=es2016 --outdir=../priv/static/assets),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]
