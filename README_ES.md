# CalendarComponent

Librería de componentes Phoenix LiveView que renderiza un calendario interactivo basado en EventCalendar y un hook de LiveView. Se distribuye como librería (no una app completa) e incluye assets JS/CSS colocalizados.

[![Hex.pm](https://img.shields.io/hexpm/v/calendar_component.svg)](https://hex.pm/packages/calendar_component)
[![Hexdocs](https://img.shields.io/badge/docs-hexdocs.pm-blue)](https://hexdocs.pm/calendar_component)

## Uso

### Con LiveView

Renderiza el componente calendario en HEEx y conecta eventos con Phoenix LiveView JS:

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

Manejadores del lado del servidor (ejemplo):

```elixir
@impl true
def handle_event("event_clicked", %{"id" => id}, socket), do: {:noreply, socket}

@impl true
def handle_event("date_clicked", %{"date" => date}, socket), do: {:noreply, socket}

@impl true
def handle_event("month_changed", %{"month" => month, "year" => year}, socket), do: {:noreply, socket}
```

### Con Controladores Phoenix Tradicionales

Para controladores Phoenix tradicionales (sin LiveView), usa el componente de calendario estático:

```elixir
# En tu controlador
defmodule MyAppWeb.EventController do
  use MyAppWeb, :controller
  import LiveCalendar.Components

  def index(conn, _params) do
    events = [
      %{id: 1, title: "Reunión", start: "2025-08-01T09:00:00"},
      %{id: 2, title: "Demo", start: "2025-08-02"}
    ]

    render(conn, "index.html", events: events)
  end
end
```

En tu template:

```elixir
# events/index.html.heex
<.static_calendar
  id="calendario-estatico"
  events={@events}
  options={%{
    view: "dayGridMonth",
    eventClick: "function(info) {
      alert('Evento: ' + info.event.title);
    }",
    dateClick: "function(info) {
      console.log('Fecha clickeada:', info.dateStr);
    }"
  }}
/>
```

El calendario estático se inicializa automáticamente cuando la página carga. Los eventos se manejan vía callbacks de JavaScript definidos en las opciones.

Registra el hook JS en el LiveSocket de tu app:

```js
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"
import CalendarHooks from "calendar_component"

const liveSocket = new LiveSocket("/live", Socket, { hooks: CalendarHooks })
liveSocket.connect()
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

### Mapeo de opciones

- Pasa cualquier opción de EventCalendar vía el assign `:options` de `<.calendar ... />`. Se reenvían al calendario JS.
- Clave de integración especial: `options.lv` te permite renombrar los eventos del servidor que el hook enviará:
  - `lv.onEventClick` (por defecto: `"event_clicked"`)
  - `lv.onDateClick` (por defecto: `"date_clicked"`)
  - `lv.onMonthChange` (por defecto: `"month_changed"`)
- Si proporcionas manejadores JS en `options.eventClick`, `options.dateClick`, o `options.datesSet`, el hook los compone y aún envía a LiveView.
- El hook selecciona automáticamente plugins basado en `options.view` (`timeGrid*`, `dayGrid*`, `list*`). También puedes pasar `options.plugins` explícitamente si es necesario.

Funciones implementadas en hook/componente:
- Renderizado de contenedor con `phx-hook="LiveCalendar"` y data-json para `events`/`options`.
- Inicialización JS con `createCalendar(...)` y selección de plugins.
- Push de LiveView para `eventClick`, `dateClick`, `datesSet` (cambio de mes).
- Actualizaciones en tiempo de ejecución vía `setOption("events", ...)` y aplicación de opciones cambiadas en `updated`.
- Limpieza en `destroyed` con `destroyCalendar(...)`.

Consulta `docs/event_calendar.md` para la lista completa de opciones y métodos de EventCalendar. La mayoría de opciones se pueden pasar a través de `:options`; opciones no soportadas deben reportarse como issues/PRs si es necesario.

## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed
by adding `calendar_component` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:calendar_component, "~> 0.1.6"}
  ]
end
```

## Documentación

La documentación completa está disponible en [https://hexdocs.pm/calendar_component](https://hexdocs.pm/calendar_component).

Para más información sobre las opciones de EventCalendar, consulta:
- [EventCalendar Documentation](docs/event_calendar.md)
- [Phoenix LiveView JS Documentation](docs/live_view_js.md)
- [Testing LiveView Components](docs/test_live_view.md)

## Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Asegúrate de que los tests pasen (`mix test`)
4. Formatea el código (`mix format`)
5. Haz commit de tus cambios (`git commit -am 'Add some amazing feature'`)
6. Push a la rama (`git push origin feature/amazing-feature`)
7. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Soporte

Si tienes problemas o preguntas:

1. Revisa los [ejemplos completos](#ejemplos-completos) arriba
2. Consulta la [documentación](https://hexdocs.pm/calendar_component)
3. Busca en [GitHub Issues](https://github.com/your-username/calendar_component/issues)
4. Abre un nuevo issue si es necesario

## Agradecimientos

- [EventCalendar](https://github.com/vkurko/calendar) por la excelente librería de calendario JavaScript
- [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view) por la plataforma reactiva
- La comunidad de Elixir por el soporte continuo

## Build assets

Run the esbuild task to (re)compile the JS hooks and CSS output:

```bash
mix assets.build
```

La documentación actual menciona usar:
```javascript
import {Hooks as calendar_hook} from "calendar_component";
```

## Ejemplos completos

### Uso básico del calendario

```elixir
# En tu LiveView
defmodule MyAppWeb.CalendarLive do
  use MyAppWeb, :live_view

  def mount(_params, _session, socket) do
    events = [
      %{
        id: "1",
        title: "Reunión de equipo",
        start: "2024-01-15T10:00:00",
        end: "2024-01-15T11:00:00",
        backgroundColor: "#3498db"
      },
      %{
        id: "2",
        title: "Almuerzo con cliente",
        start: "2024-01-15T13:00:00",
        end: "2024-01-15T14:00:00",
        backgroundColor: "#e74c3c"
      }
    ]

    {:ok, assign(socket, :events, events)}
  end

  def render(assigns) do
    ~H"""
    <div class="calendar-container">
      <.calendar
        id="my-calendar"
        events={@events}
        options=%{
          initialView: "dayGridMonth",
          headerToolbar: %{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
          },
          height: "auto"
        }
      />
    </div>
    """
  end
end
```

### Calendario interactivo con manejo de eventos

```elixir
defmodule MyAppWeb.InteractiveCalendarLive do
  use MyAppWeb, :live_view

  def mount(_params, _session, socket) do
    socket =
      socket
      |> assign(:events, load_events())
      |> assign(:selected_event, nil)
      |> assign(:show_modal, false)

    {:ok, socket}
  end

  def render(assigns) do
    ~H"""
    <div>
      <.calendar
        id="interactive-calendar"
        events={@events}
        options=%{
          initialView: "dayGridMonth",
          selectable: true,
          selectMirror: true,
          dayMaxEvents: true,
          weekends: true,
          navLinks: true,
          lv: %{
            onEventClick: "event_selected",
            onDateClick: "date_selected",
            onMonthChange: "month_changed"
          }
        }
      />

      <%= if @show_modal do %>
        <.modal id="event-modal" show={@show_modal} on_cancel={JS.push("close_modal")}>
          <:title>Detalles del evento</:title>
          <div class="p-4">
            <h3 class="font-bold"><%= @selected_event.title %></h3>
            <p><strong>Inicio:</strong> <%= @selected_event.start %></p>
            <p><strong>Fin:</strong> <%= @selected_event.end %></p>
            <%= if @selected_event[:description] do %>
              <p><strong>Descripción:</strong> <%= @selected_event.description %></p>
            <% end %>
          </div>
        </.modal>
      <% end %>
    </div>
    """
  end

  def handle_event("event_selected", %{"id" => event_id}, socket) do
    event = Enum.find(socket.assigns.events, &(&1.id == event_id))

    socket =
      socket
      |> assign(:selected_event, event)
      |> assign(:show_modal, true)

    {:noreply, socket}
  end

  def handle_event("date_selected", %{"start" => date_str}, socket) do
    # Crear un nuevo evento para la fecha seleccionada
    new_event = %{
      id: generate_id(),
      title: "Nuevo evento",
      start: date_str,
      backgroundColor: "#2ecc71"
    }

    events = [new_event | socket.assigns.events]
    {:noreply, assign(socket, :events, events)}
  end

  def handle_event("month_changed", %{"start" => start_date, "end" => end_date}, socket) do
    # Cargar eventos para el nuevo rango de fechas
    events = load_events_for_range(start_date, end_date)
    {:noreply, assign(socket, :events, events)}
  end

  def handle_event("close_modal", _params, socket) do
    socket =
      socket
      |> assign(:show_modal, false)
      |> assign(:selected_event, nil)

    {:noreply, socket}
  end

  defp load_events do
    [
      %{
        id: "1",
        title: "Reunión matutina",
        start: "2024-01-15T09:00:00",
        end: "2024-01-15T10:00:00",
        description: "Standup diario del equipo"
      },
      %{
        id: "2",
        title: "Presentación cliente",
        start: "2024-01-16T14:00:00",
        end: "2024-01-16T15:30:00",
        description: "Presentar propuesta del proyecto"
      }
    ]
  end

  defp load_events_for_range(_start_date, _end_date) do
    # Implementar lógica para cargar eventos de base de datos
    load_events()
  end

  defp generate_id, do: :crypto.strong_rand_bytes(8) |> Base.encode16()
end
```

### Línea de tiempo de recursos

```elixir
defmodule MyAppWeb.ResourceTimelineLive do
  use MyAppWeb, :live_view

  def mount(_params, _session, socket) do
    resources = [
      %{id: "room-a", title: "Sala A"},
      %{id: "room-b", title: "Sala B"},
      %{id: "room-c", title: "Sala C"}
    ]

    events = [
      %{
        id: "1",
        title: "Reunión Marketing",
        start: "2024-01-15T09:00:00",
        end: "2024-01-15T10:30:00",
        resourceId: "room-a"
      },
      %{
        id: "2",
        title: "Entrevista técnica",
        start: "2024-01-15T10:00:00",
        end: "2024-01-15T11:00:00",
        resourceId: "room-b"
      },
      %{
        id: "3",
        title: "Presentación ventas",
        start: "2024-01-15T11:30:00",
        end: "2024-01-15T12:30:00",
        resourceId: "room-a"
      }
    ]

    socket =
      socket
      |> assign(:resources, resources)
      |> assign(:events, events)

    {:ok, socket}
  end

  def render(assigns) do
    ~H"""
    <div>
      <h2 class="text-2xl font-bold mb-4">Reservas de salas</h2>

      <.calendar
        id="resource-timeline"
        events={@events}
        options=%{
          initialView: "resourceTimelineDay",
          headerToolbar: %{
            left: "prev,next today",
            center: "title",
            right: "resourceTimelineDay,resourceTimelineWeek"
          },
          resources: @resources,
          slotMinTime: "08:00:00",
          slotMaxTime: "18:00:00",
          slotDuration: "00:30:00",
          resourceAreaHeaderContent: "Salas",
          resourceAreaWidth: "15%",
          height: 600
        }
      />
    </div>
    """
  end
end
```

### Calendario con tema oscuro

```elixir
defmodule MyAppWeb.DarkCalendarLive do
  use MyAppWeb, :live_view

  def render(assigns) do
    ~H"""
    <div class="dark-calendar-container bg-gray-900 p-6 rounded-lg">
      <style>
        .dark-calendar-container {
          --fc-border-color: #374151;
          --fc-button-text-color: #f3f4f6;
          --fc-button-bg-color: #4b5563;
          --fc-button-border-color: #6b7280;
          --fc-button-hover-bg-color: #6b7280;
          --fc-button-active-bg-color: #9ca3af;
          --fc-event-bg-color: #3b82f6;
          --fc-event-border-color: #2563eb;
          --fc-event-text-color: #ffffff;
          --fc-page-bg-color: transparent;
          --fc-neutral-bg-color: #1f2937;
          --fc-neutral-text-color: #f3f4f6;
          --fc-list-event-hover-bg-color: #374151;
        }
      </style>

      <.calendar
        id="dark-calendar"
        events={@events}
        options=%{
          initialView: "dayGridMonth",
          themeSystem: "standard",
          headerToolbar: %{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,listWeek"
          },
          dayMaxEvents: 3,
          moreLinkClick: "popover",
          height: "auto"
        }
      />
    </div>
    """
  end
end
```

### Integración con formularios

```elixir
defmodule MyAppWeb.FormCalendarLive do
  use MyAppWeb, :live_view

  def mount(_params, _session, socket) do
    socket =
      socket
      |> assign(:events, [])
      |> assign(:form, to_form(%{"title" => "", "start" => "", "end" => ""}))
      |> assign(:editing_event, nil)

    {:ok, socket}
  end

  def render(assigns) do
    ~H"""
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Formulario -->
      <div class="lg:col-span-1">
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-lg font-semibold mb-4">
            <%= if @editing_event, do: "Editar evento", else: "Nuevo evento" %>
          </h3>

          <.form for={@form} phx-submit="save_event" phx-change="validate_event">
            <div class="space-y-4">
              <.input field={@form[:title]} label="Título" required />
              <.input field={@form[:start]} label="Fecha/hora inicio" type="datetime-local" required />
              <.input field={@form[:end]} label="Fecha/hora fin" type="datetime-local" required />
              <.input field={@form[:description]} label="Descripción" type="textarea" />

              <div class="flex gap-2">
                <.button type="submit" class="flex-1">
                  <%= if @editing_event, do: "Actualizar", else: "Crear evento" %>
                </.button>
                <%= if @editing_event do %>
                  <.button type="button" phx-click="cancel_edit" class="bg-gray-500">
                    Cancelar
                  </.button>
                  <.button type="button" phx-click="delete_event" class="bg-red-500">
                    Eliminar
                  </.button>
                <% end %>
              </div>
            </div>
          </.form>
        </div>
      </div>

      <!-- Calendario -->
      <div class="lg:col-span-2">
        <.calendar
          id="form-calendar"
          events={@events}
          options=%{
            initialView: "timeGridWeek",
            selectable: true,
            selectMirror: true,
            editable: true,
            headerToolbar: %{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            },
            lv: %{
              onEventClick: "edit_event",
              onDateClick: "select_date"
            }
          }
        />
      </div>
    </div>
    """
  end

  def handle_event("validate_event", %{"title" => title, "start" => start_time, "end" => end_time, "description" => description}, socket) do
    form = to_form(%{"title" => title, "start" => start_time, "end" => end_time, "description" => description})
    {:noreply, assign(socket, :form, form)}
  end

  def handle_event("save_event", %{"title" => title, "start" => start_time, "end" => end_time, "description" => description}, socket) do
    event_data = %{
      title: title,
      start: start_time,
      end: end_time,
      description: description
    }

    events =
      if socket.assigns.editing_event do
        # Actualizar evento existente
        event_id = socket.assigns.editing_event
        Enum.map(socket.assigns.events, fn event ->
          if event.id == event_id do
            Map.merge(event, event_data)
          else
            event
          end
        end)
      else
        # Crear nuevo evento
        new_event = Map.put(event_data, :id, generate_id())
        [new_event | socket.assigns.events]
      end

    socket =
      socket
      |> assign(:events, events)
      |> assign(:form, to_form(%{"title" => "", "start" => "", "end" => "", "description" => ""}))
      |> assign(:editing_event, nil)

    {:noreply, socket}
  end

  def handle_event("edit_event", %{"id" => event_id}, socket) do
    event = Enum.find(socket.assigns.events, &(&1.id == event_id))

    form = to_form(%{
      "title" => event.title,
      "start" => event.start,
      "end" => event.end,
      "description" => event[:description] || ""
    })

    socket =
      socket
      |> assign(:form, form)
      |> assign(:editing_event, event_id)

    {:noreply, socket}
  end

  def handle_event("select_date", %{"start" => date_str}, socket) do
    form = to_form(%{
      "title" => "",
      "start" => date_str,
      "end" => date_str,
      "description" => ""
    })

    socket =
      socket
      |> assign(:form, form)
      |> assign(:editing_event, nil)

    {:noreply, socket}
  end

  def handle_event("cancel_edit", _params, socket) do
    socket =
      socket
      |> assign(:form, to_form(%{"title" => "", "start" => "", "end" => "", "description" => ""}))
      |> assign(:editing_event, nil)

    {:noreply, socket}
  end

  def handle_event("delete_event", _params, socket) do
    events = Enum.reject(socket.assigns.events, &(&1.id == socket.assigns.editing_event))

    socket =
      socket
      |> assign(:events, events)
      |> assign(:form, to_form(%{"title" => "", "start" => "", "end" => "", "description" => ""}))
      |> assign(:editing_event, nil)

    {:noreply, socket}
  end

  defp generate_id, do: :crypto.strong_rand_bytes(8) |> Base.encode16()
end
```

### Uso en controladores tradicionales (Phoenix sin LiveView)

Si usas controladores tradicionales de Phoenix en lugar de LiveView, puedes usar el componente estático:

#### 1. En tu controlador:

```elixir
defmodule MyAppWeb.EventController do
  use MyAppWeb, :controller
  import LiveCalendar.Components

  def index(conn, _params) do
    events = [
      %{
        id: "1",
        title: "Reunión de equipo",
        start: "2024-01-15T10:00:00",
        end: "2024-01-15T11:00:00"
      },
      %{
        id: "2",
        title: "Presentación cliente",
        start: "2024-01-16T14:00:00",
        end: "2024-01-16T16:00:00"
      }
    ]

    render(conn, :index, events: events)
  end
end
```

#### 2. En tu template (.html.heex):

```heex
<div class="calendar-page">
  <h1>Calendario de eventos</h1>

  <.static_calendar
    id="events-calendar"
    events={@events}
    options=%{
      initialView: "dayGridMonth",
      headerToolbar: %{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      },
      height: "auto",
      eventClick: "function(info) {
        alert('Evento: ' + info.event.title + '
Fecha: ' + info.event.start.toLocaleDateString());
      }",
      dateClick: "function(info) {
        console.log('Fecha seleccionada:', info.dateStr);
      }"
    }
  />
</div>
```

#### 3. Incluir el JavaScript en tu app.js:

```javascript
// assets/js/app.js
import { initStaticCalendars } from "calendar_component"

// Inicializar calendarios estáticos cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  initStaticCalendars()
})
```

### Configuración avanzada con plugins personalizados

```elixir
defmodule MyAppWeb.AdvancedCalendarLive do
  use MyAppWeb, :live_view

  def render(assigns) do
    ~H"""
    <.calendar
      id="advanced-calendar"
      events={@events}
      options=%{
        initialView: "dayGridMonth",
        plugins: ["dayGrid", "timeGrid", "list", "interaction"],
        headerToolbar: %{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
        },
        footerToolbar: %{
          right: "prev,next"
        },
        height: 650,
        contentHeight: 600,
        aspectRatio: 1.35,
        expandRows: true,
        handleWindowResize: true,
        dayMaxEvents: 3,
        moreLinkClick: "popover",
        navLinks: true,
        selectable: true,
        selectMirror: true,
        selectOverlap: false,
        unselectAuto: true,
        selectConstraint: %{
          start: "09:00",
          end: "18:00"
        },
        businessHours: %{
          daysOfWeek: [1, 2, 3, 4, 5],
          startTime: "09:00",
          endTime: "18:00"
        },
        slotMinTime: "08:00:00",
        slotMaxTime: "20:00:00",
        slotDuration: "00:30:00",
        snapDuration: "00:15:00",
        scrollTime: "09:00:00",
        allDaySlot: true,
        nowIndicator: true,
        weekNumbers: true,
        weekText: "Sem",
        dayHeaderFormat: %{weekday: "short", month: "numeric", day: "numeric"},
        eventTimeFormat: %{
          hour: "numeric",
          minute: "2-digit",
          meridiem: "short"
        },
        displayEventTime: true,
        displayEventEnd: false,
        nextDayThreshold: "08:00:00",
        eventOrder: "start,-duration,allDay,title",
        eventOrderStrict: false,
        eventDisplay: "auto",
        dayPopoverFormat: %{month: "long", day: "numeric", year: "numeric"},
        locale: "es",
        firstDay: 1,
        weekNumberCalculation: "ISO",
        buttonText: %{
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          list: "Lista"
        },
        allDayText: "Todo el día",
        moreLinkText: "más",
        noEventsText: "No hay eventos que mostrar"
      }
    />
    """
  end
end
```

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
