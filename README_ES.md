# CalendarComponent

Librería de componentes Phoenix LiveView que renderiza un calendario interactivo basado en EventCalendar y un hook de LiveView. Se distribuye como librería (no una app completa) e incluye assets JS/CSS colocalizados.

[![Hex.pm](https://img.shields.io/hexpm/v/calendar_component.svg)](https://hex.pm/packages/calendar_component)
[![Hexdocs](https://img.shields.io/badge/docs-hexdocs.pm-blue)](https://hexdocs.pm/calendar_component)

## Usage

Render the calendar component in HEEx and wire events with Phoenix LiveView JS:

```elixir
alias Phoenix.LiveView.JS

~H"""
<.calendar
  id="calendar"
  events={@events}
  on_event_click={JS.push("event_clicked", value: %{id: event.id})}
  on_date_click={JS.push("date_clicked", value: %{date: date})}
  on_month_change={JS.push("month_changed", value: %{month: month})}
/>
"""
```

Server-side handlers (example):

```elixir
@impl true
def handle_event("event_clicked", %{"id" => id}, socket), do: {:noreply, socket}

@impl true
def handle_event("date_clicked", %{"date" => date}, socket), do: {:noreply, socket}

@impl true
def handle_event("month_changed", %{"month" => month, "year" => year}, socket), do: {:noreply, socket}
```

Register the JS hook in your app’s LiveSocket (ensure the built asset is loaded so `window.LiveCalendarHooks` exists):

```js
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"

const Hooks = window.LiveCalendarHooks || {}
const liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks })
liveSocket.connect()
```

Note: This library compiles a hook at `priv/static/assets/calendar-hooks.js` and CSS at `priv/static/assets/calendar-hooks.css`. Ensure the asset is served/loaded in your host app (or copy the hook code into your app assets and register it).

### Options mapping

- Pass any EventCalendar options via the `:options` assign of `<.calendar ... />`. They are forwarded to the JS calendar.
- Special integration key: `options.lv` lets you rename the server events the hook will push:
  - `lv.onEventClick` (default: `"event_clicked"`)
  - `lv.onDateClick` (default: `"date_clicked"`)
  - `lv.onMonthChange` (default: `"month_changed"`)
- If you provide JS handlers in `options.eventClick`, `options.dateClick`, or `options.datesSet`, the hook composes them and still pushes to LiveView.
- The hook auto-picks plugins based on `options.view` (`timeGrid*`, `dayGrid*`, `list*`). You can also pass `options.plugins` explicitly if needed.

Implemented features in hook/component:
- Container render with `phx-hook="LiveCalendar"` and data-json for `events`/`options`.
- JS initialization with `createCalendar(...)` and plugin selection.
- LiveView push for `eventClick`, `dateClick`, `datesSet` (month change).
- Runtime updates via `setOption("events", ...)` and applying changed options on `updated`.
- Cleanup on `destroyed` with `destroyCalendar(...)`.

Refer to `docs/event_calendar.md` for the full list of EventCalendar options and methods. Most options can be passed through `:options`; unsupported options should be raised as issues/PRs if necessary.

## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed
by adding `calendar_component` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:calendar_component, "~> 0.1.1"}
  ]
end
```

La documentación se genera con [ExDoc](https://github.com/elixir-lang/ex_doc)
y se publica en [HexDocs](https://hexdocs.pm). Una vez publicada, puede
consultarse en <https://hexdocs.pm/calendar_component>.

## Build assets

Run the esbuild task to (re)compile the JS hooks and CSS output:

```bash
mix assets.build
```

## Phoenix examples

### 1) Básico: render estático con eventos

LiveView module:

```elixir
defmodule MyAppWeb.CalendarLive do
  use MyAppWeb, :live_view

  def mount(_params, _session, socket) do
    events = [
      %{id: 1, title: "Reunión", start: "2025-08-01T09:00:00"},
      %{id: 2, title: "Demo", start: "2025-08-02"}
    ]
    {:ok, assign(socket, events: events)}
  end
end
```

HEEx:

```elixir
<.calendar id="calendar" events={@events} />
```

### 2) Manejo de eventos del calendario (click de evento/fecha/mes)

Usa los nombres por defecto que el hook envía: "event_clicked", "date_clicked", "month_changed".

```elixir
@impl true
def handle_event("event_clicked", %{"id" => id}, socket) do
  {:noreply, put_flash(socket, :info, "Evento #{id} clickeado")}
end

@impl true
def handle_event("date_clicked", %{"date" => iso}, socket) do
  {:noreply, put_flash(socket, :info, "Fecha #{iso}")}
end

@impl true
def handle_event("month_changed", %{"month" => m, "year" => y}, socket) do
  {:noreply, socket}
end
```

### 3) Personalizar vista y toolbar

```elixir
opts = %{
  view: "dayGridMonth",
  headerToolbar: %{start: "title", end: "today prev,next"},
  nowIndicator: true,
  firstDay: 1
}

~H"""
<.calendar id="cal_toolbar" events={@events} options={opts} />
"""
```

### 4) Actualizar eventos en vivo (agregar tras click en fecha)

```elixir
@impl true
def handle_event("date_clicked", %{"date" => iso}, socket) do
  new = %{id: System.unique_integer([:positive]), title: "Nuevo", start: iso}
  {:noreply, update(socket, :events, fn ev -> [new | ev] end)}
end
```

### 5) Renombrar eventos que el hook empuja (options.lv)

```elixir
opts = %{lv: %{onEventClick: "my_event_click", onDateClick: "my_date_click", onMonthChange: "my_month"}}

~H"""
<.calendar id="cal_lv" events={@events} options={opts} />
"""

@impl true
def handle_event("my_event_click", payload, socket), do: {:noreply, socket}
```

### 6) List view y localización

```elixir
opts = %{
  view: "listWeek",
  locale: "es",
  height: "auto",
  dayMaxEvents: true
}

~H"""
<.calendar id="cal_list" events={@events} options={opts} />
"""
```

### 7) Resource Timeline (plugins y recursos)

Para vistas de recursos/timeline, pasa los plugins explícitamente en `options.plugins` y datos en `options.resources`.

```elixir
resources = [
  %{id: "r1", title: "Sala A"},
  %{id: "r2", title: "Sala B"}
]

events = [
  %{id: "e1", title: "Reserva", start: "2025-08-03T10:00:00", end: "2025-08-03T12:00:00", resourceId: "r1"}
]

opts = %{
  view: "resourceTimelineWeek",
  resources: resources,
  plugins: :keep_plugins, # ver nota debajo
  headerToolbar: %{start: "title", end: "today prev,next"}
}

~H"""
<.calendar id="cal_resources" events={events} options={opts} />
"""

# Nota: Este paquete selecciona plugins por `view` (timeGrid/dayGrid/list) automáticamente.
# Para ResourceTimeline/ResourceTimeGrid, asegúrate de que tu asset incluya los plugins necesarios.
# Si usas los hooks compilados por esta librería, considera copiar el hook a tu app
# e importar los plugins de `@event-calendar/core` que requieras, por ejemplo:
#   import { ResourceTimeline, ResourceTimeGrid } from "@event-calendar/core"
# y pasar `options.plugins: [ResourceTimeline]`.
```

### 8) Edición drag & drop y resize

Habilita `editable: true` y maneja `eventDrop`/`eventResize` en el servidor o del lado del cliente.

```elixir
opts = %{
  view: "timeGridWeek",
  editable: true,
  eventDurationEditable: true
}

~H"""
<.calendar id="cal_edit" events={@events} options={opts} />
"""

# Del lado del servidor, el hook no empuja automáticamente estos eventos.
# Puedes manejarlo del lado del cliente con `options.eventDrop`/`eventResize` y
# usar `pushEvent` manualmente (copiando el hook a tu app para extenderlo) o enviar vía AJAX.
```
