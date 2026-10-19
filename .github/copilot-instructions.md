## Instrucciones para agentes en este repo

Objetivo: librería Phoenix de componentes HEEx. Primer entregable: un calendario interactivo apoyado en EventCalendar y Phoenix LiveView JS.

Arquitectura y estructura
- Elixir + Phoenix.Component/LiveView (lib, no app completa).
- Frontend npm `@event-calendar/core` v5 (Svelte 5) via hooks/JS; build con esbuild (target ES2022).
- Carpetas clave: `lib/live_calendar/components.ex`, `lib/calendar_component.ex` (`push_command/4`),
  `assets/js/lib/core.js` (lógica compartida: plugins, opciones, eventos, callbacks, payloads),
  `assets/js/calendar-hooks.js` (hook LiveView), `assets/js/static-calendar.js` (sin LiveView),
  salida `priv/static/assets/` (se commitea).

Convenciones
- Componentes HEEx con `use Phoenix.Component`, `attr/3`, `slot/3` y attrs `:global` (phx-*, data-*, aria-*).
- Callbacks como `%Phoenix.LiveView.JS{}` (`JS.push/2`, etc.).
- TDD recomendado (ver `docs/test_live_view.md`).

Workflows (build/tests/assets)
- Setup: `mix setup` (incluye `npm install` en `assets/`) | Tests: `mix test` y `cd assets && npm test` | Formato: `mix format`.
- Assets: `mix assets.build` (entries `assets/js/main.js` y `assets/js/static-main.js`, ver `config/config.exs`).
- Al actualizar EventCalendar: cambiar `assets/package.json`, `CalendarComponent.event_calendar_version/0`
  y `docs/event_calendar.md` (copia del README upstream), luego `mix assets.build`.

Componente Calendario (API mínima)
- Implementa `LiveCalendar.Components.calendar/1` en `lib/live_calendar/components.ex`.
- Props: `id` (req), `events`, `options`, `on_event_click`, `on_date_click`, `on_month_change`,
  `on_event_drop`, `on_event_resize`, `on_select` (string = evento al server, `%JS{}` o `false`).
- Ejemplo: <.calendar id="calendar" events={@events} on_event_click={JS.push("event_clicked", value: %{id: event.id})} />
- Flexibilidad: soporta opciones adicionales (`:options`) inspiradas en `docs/event_calendar.md`.

Integración JS
- Hook/Colocated JS para crear/destruir el calendario y escuchar eventos.
- `assets/js/calendar-hooks.js` crea el calendario con `createCalendar(el, PLUGINS, options)` (todos los plugins);
  en `updated()` solo aplica con `setOption` las opciones/eventos cuyo JSON cambió.
- El contenedor usa `phx-update="ignore"` (LiveView sigue actualizando los `data-*`).
- EventCalendar usa `view` (no `initialView`) y `headerToolbar` con `start`/`center`/`end`.
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