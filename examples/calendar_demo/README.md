# calendar_demo

A Phoenix 1.8.17 application that integrates [`calendar_component`](../../README.md) from this
repository, used as the end-to-end example and manual test bed.

It has no database: events live in an `Agent` (`CalendarDemo.Events`), so the app boots with
nothing but `mix setup`.

## Running

```bash
cd examples/calendar_demo
mix setup          # deps, esbuild/tailwind, assets
mix phx.server     # http://localhost:4000
```

| Route | What it shows |
| --- | --- |
| `/` | Index |
| `/calendar` | `LiveCalendar.Components.calendar/1` driven by LiveView |
| `/static-calendar` | `LiveCalendar.Components.static_calendar/1` in a plain controller |
| `/tidewave/mcp` | Tidewave MCP endpoint (dev only) |

## How the library is wired in

**`mix.exs`** — a path dependency, since the library lives in this repository:

```elixir
{:calendar_component, path: "../.."}
```

**`assets/package.json`** — a published release resolves from `deps/` through the `NODE_PATH`
Phoenix sets by default, but a *path* dependency never lands in `deps/`, so the example links
it through npm instead:

```json
{"dependencies": {"calendar_component": "file:../../.."}}
```

> Do **not** add `"type": "module"` to that file: it would make esbuild treat Phoenix's
> CommonJS `assets/vendor/*.js` files as ESM and the build fails.

**`assets/js/app.js`** — the hook is merged into the LiveSocket:

```javascript
import CalendarHooks from "calendar_component"

const liveSocket = new LiveSocket("/live", Socket, {
  hooks: {...colocatedHooks, ...CalendarHooks},
})
```

**`assets/css/app.css`** — the stylesheet is imported from CSS, never from JavaScript:

```css
@import "calendar_component/css";
```

Tailwind inlines it into `priv/static/assets/css/app.css`. Because the package's JS entry point
does not import any CSS, esbuild emits only `priv/static/assets/js/app.js` and never a second
stylesheet that could overwrite the Tailwind output.

## What the demo exercises

`/calendar` covers the whole component surface:

- all six callback attributes, as a string (`on_date_click`), as `Phoenix.LiveView.JS`
  commands (`on_event_click`) and sharing a handler (`on_event_drop` / `on_event_resize`)
- `%{revert: true}` replies: dragging an event outside 07:00&ndash;20:00 is rejected by
  `CalendarDemo.Events.reschedule/3` and the calendar puts it back
- a custom toolbar button declared with `push: "quick_add"`
- `CalendarComponent.push_command/4` for `:prev`, `:next`, `:today`, `:goto_date`,
  `:unselect` and `:remove_event`
- option changes through assigns, including an option (`height`) that appears and disappears
- the wrapper-element pattern for dynamic classes, because LiveView only patches `data-*`
  attributes on a `phx-update="ignore"` element

`/static-calendar` covers the controller component with global JavaScript callbacks defined in
`assets/js/app.js` (`CalendarDemo.Static.*`).

## Tests

```bash
mix test
```

28 tests covering the `Events` context, the rendered `data-*` attributes, every callback, the
revert reply (`assert_reply`), the pushed `calendar:command` events and the option diffing.

## Tidewave MCP

In `dev` the endpoint serves [Tidewave](https://tidewave.ai) before `Plug.Parsers`:

```elixir
if code_reloading? do
  plug Tidewave
end
```

Point an agent at it while the server runs:

```bash
claude mcp add --transport http tidewave http://localhost:4000/tidewave/mcp
```

`project_eval`, `get_logs`, `get_docs` and `get_source_location` work against the running app
with no further setup. The `browser_eval` tool additionally requires signing in at
tidewave.ai from `http://localhost:4000/tidewave`.
