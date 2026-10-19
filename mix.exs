defmodule CalendarComponent.MixProject do
  use Mix.Project

  @version "0.3.0"

  def project do
    [
      app: :calendar_component,
      version: @version,
      elixir: "~> 1.18",
      start_permanent: Mix.env() == :prod,
      elixirc_paths: elixirc_paths(Mix.env()),
      deps: deps(),
      aliases: aliases(),
      description: description(),
      name: "Event Calendar Component",
      docs: docs(),
      package: package(),
      source_url: "https://github.com/rocket4ce/calendar_component"
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:phoenix_live_view, "~> 1.1"},
      {:jason, "~> 1.4"},
      {:esbuild, "~> 0.10", only: :dev, runtime: false},
      {:usage_rules, "~> 1.2", only: :dev},
      {:igniter, "~> 0.8", only: [:dev, :test]},
      {:lazy_html, ">= 0.1.0", only: :test},
      {:styler, "~> 1.5", only: [:dev, :test], runtime: false},
      {:ex_doc, ">= 0.0.0", only: :dev, runtime: false}
    ]
  end

  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  defp aliases do
    [
      setup: ["deps.get", "assets.setup", "assets.build", "format"],
      "assets.setup": ["esbuild.install --if-missing", "cmd --cd assets npm install"],
      "assets.build": ["esbuild calendar_component", "esbuild static_calendar"],
      "assets.deploy": ["esbuild calendar_component", "esbuild static_calendar"]
    ]
  end

  defp description do
    """
    A Phoenix LiveView component library for rendering interactive calendars.
    This library builds on EventCalendar by Vlad Kurko: https://github.com/vkurko/calendar/
    Thanks to the EventCalendar project for providing a lightweight, flexible calendar core.
    """
  end

  defp package do
    [
      name: "calendar_component",
      licenses: ["MIT"],
      files: ~w(lib priv index.js package.json mix.exs README* LICENSE* CHANGELOG*),
      links: %{
        "GitHub" => "https://github.com/rocket4ce/calendar_component",
        "Documentation" => "https://hexdocs.pm/calendar_component"
      }
    ]
  end

  defp docs do
    [
      main: "readme",
      source_ref: "v#{@version}",
      extras: [
        "README.md": [title: "Overview"],
        "guides/installation.md": [title: "Installation"],
        "guides/usage.md": [title: "Usage"],
        "guides/static_calendar_usage.md": [title: "Static Calendar"],
        "docs/security.md": [title: "Security"],
        "CHANGELOG.md": [title: "Changelog"]
      ],
      groups_for_extras: [
        Guides: [
          "guides/installation.md",
          "guides/usage.md",
          "guides/static_calendar_usage.md",
          "docs/security.md"
        ],
        Readme: ["README.md", "CHANGELOG.md"]
      ]
    ]
  end
end
