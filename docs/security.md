# Security

Both components turn JSON in `data-*` attributes into EventCalendar options. Options such as
`eventClick` or `dateClick` have to be *functions*, so the JavaScript side has to turn the
strings coming from Elixir into callables. This document describes how that works and what the
limits are.

## Callback formats

### Global function references — recommended

Define the function in a JavaScript file and reference it by name:

```javascript
// assets/js/app.js
window.MyApp = {
  Calendar: {
    handleEventClick(info) {
      console.log("Event:", info.event.title)
    }
  }
}
```

```elixir
<.static_calendar
  id="calendar"
  events={@events}
  options={%{eventClick: "MyApp.Calendar.handleEventClick"}}
/>
```

The string is resolved by walking `window` one property at a time:

- every segment must be a valid JavaScript identifier
- `__proto__`, `prototype` and `constructor` are rejected
- the resolved value must be a function, otherwise the option is dropped with a console warning

Nothing is compiled, so this works under a strict `script-src` CSP. This is the **only**
format `calendar/1` (LiveView) accepts.

### Inline function bodies — deprecated

`static_calendar/1` also accepts a short function body that receives `info`:

```elixir
options={%{eventClick: "console.log('Event:', info.event.title)"}}
```

> **Deprecated.** This format logs a warning and is removed in 1.0. Use a global function
> reference instead.

Before compiling, the body is rejected when it is longer than 200 characters or contains
`function`, `=>`, `eval`, `setTimeout`, `setInterval`, `import`, `constructor`, `__proto__`
or `prototype`.

**That keyword filter is a guard rail against mistakes, not a sandbox.** It is a substring
check on the source text, so it can be worked around (string concatenation, unicode escapes,
computed property access). It stops an accidental `eval(...)`; it does not contain an attacker
who controls the string.

Two consequences:

- The body is compiled with `new Function`, so it needs `'unsafe-eval'` in your `script-src`
  CSP. Global function references do not.
- A callback string is **code**. Hardcode it in your template. Never build one from user input,
  database content, query parameters or anything else outside your source tree.

```elixir
# Fine: the string is a literal in your template
options = %{eventClick: "MyApp.handleEvent"}

# Not fine: this is arbitrary JavaScript execution
options = %{eventClick: user_params["callback"]}
```

Callbacks that cannot be resolved are removed, so EventCalendar never receives a string where
it expects a function.

## Events and options

`events` and `options` are serialized with `Jason.encode!/1` into HEEx attributes, which escape
their content, so event titles and `extendedProps` coming from your database cannot break out
of the attribute. They are rendered by EventCalendar as text.

The exception is EventCalendar's own content options (`eventContent`, `dayCellContent`,
`noEventsContent`, ...), which accept `%{html: "..."}` and insert raw HTML. Sanitize anything
user-provided before putting it there.

## Reporting a vulnerability

Do not open a public issue. Contact the maintainers directly with reproduction steps and allow
time for a patch before disclosing.

## Further reading

- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Phoenix security guidelines](https://hexdocs.pm/phoenix/security.html)
