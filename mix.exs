defmodule CalendarComponent.MixProject do
  use Mix.Project

  def project do
    [
      app: :calendar_component,
      version: "0.1.0",
      elixir: "~> 1.18",
      start_permanent: Mix.env() == :prod,
      elixirc_paths: elixirc_paths(Mix.env()),
      deps: deps(),
      aliases: aliases(),
      description: description(),
      name: "Event Calendar Component",
      package: package()
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
      {:usage_rules, "~> 0.1", only: [:dev]},
      {:igniter, "~> 0.6", only: [:dev, :test]},
      {:tzdata, "~> 1.1.3"},
      {:jason, "~> 1.4.4"},
      {:esbuild, "~> 0.10.0"},
      {:phoenix_live_view, "~> 1.1.4"},
      {:lazy_html, ">= 0.1.0", only: :test},
      {:styler, "~> 1.5", only: [:dev, :test], runtime: false},
      {:mimerl, "~> 1.4"}

      # {:dep_from_hexpm, "~> 0.3.0"},
      # {:dep_from_git, git: "https://github.com/elixir-lang/my_dep.git", tag: "0.1.0"}
    ]
  end

  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  defp aliases do
    [
      setup: ["deps.get", "assets.setup", "assets.build", "format"],
      "assets.setup": ["esbuild.install --if-missing"],
      "assets.build": ["esbuild calendar_component"],
      "assets.deploy": ["esbuild calendar_component"]
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
      links: %{
        "GitHub" => "https://github.com/rocket4ce/calendar_component",
        "Documentation" => "https://hexdocs.pm/calendar_component"
      }
    ]
  end
end
