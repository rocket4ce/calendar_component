## Instrucciones para agentes en este repo

Objetivo: librería Phoenix de componentes HEEx. Primer entregable: un calendario interactivo apoyado en EventCalendar y Phoenix LiveView JS.

Arquitectura y estructura
- Elixir + Phoenix.Component/LiveView (lib, no app completa).
- Frontend npm `@event-calendar/core` via hooks/JS; build con esbuild.
- Carpetas clave: `lib/live_calendar/components.ex`, `assets/js/calendar-hooks.js`, salida `priv/static/assets/`.

Convenciones
- Componentes HEEx con `use Phoenix.Component`, `attr/3`, `slot/3` y attrs `:global` (phx-*, data-*, aria-*).
- Callbacks como `%Phoenix.LiveView.JS{}` (`JS.push/2`, etc.).
- TDD recomendado (ver `docs/test_live_view.md`).

Workflows (build/tests/assets)
- Setup: `mix setup` | Tests: `mix test` | Formato: `mix format`.
- Assets: `mix assets.build` (entry `assets/js/calendar-hooks.js`, ver `config/config.exs`).

Componente Calendario (API mínima)
- Implementa `LiveCalendar.Components.calendar/1` en `lib/live_calendar/components.ex`.
- Props (ver `.github/PLAN.md`): `id` (req), `events`, `on_event_click`, `on_date_click`, `on_month_change` (todos `%JS{}`).
- Ejemplo: <.calendar id="calendar" events={@events} on_event_click={JS.push("event_clicked", value: %{id: event.id})} />
- Flexibilidad: soporta opciones adicionales (`:options`) inspiradas en `docs/event_calendar.md`.

Integración JS
- Hook/Colocated JS para crear/destruir el calendario y escuchar eventos.
- Inicializa en `assets/js/calendar-hooks.js` con `EventCalendar.create(...)`; actualiza con `setOption` al cambiar assigns (p.ej. `events`).
- Propaga eventos al server con `phx-*`/`JS.push` (ver `docs/live_view_js.md`).

Pruebas
- HEEx: `rendered_to_string(~H""" <.calendar ... /> """)` o `render_component/3`.
- Eventos: `Phoenix.LiveViewTest` con `render_hook/3`, `render_click/1`.

Calidad (“definición de hecho”)
- Solo mergea si `mix format` y `mix test` pasan; recompila assets si tocaste JS.
- Usa aliases de `mix.exs` (`setup`, `assets.build`, `assets.deploy`).

Referencias
- `docs/phoenix_live_view.md`, `docs/live_view_js.md`, `docs/event_calendar.md`, `docs/test_live_view.md`.
- Reglas del repo: lee `.github/PLAN.md`; registra tareas en `.todos.md` (raíz); “Hecho” = `mix format` + `mix test` ok.