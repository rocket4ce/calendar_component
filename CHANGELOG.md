# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2026-10-19

### Changed
- **Breaking:** upgraded EventCalendar from 4.5.1 to 5.17.2. The new CSS Grid layout changes the
  calendar markup and styles, review custom CSS.
- **Breaking:** event dates with an offset (`"...Z"`, `"...+02:00"`, encoded `DateTime`s) are
  shifted to the calendar's `timeZone` (EventCalendar 5.16). Use `NaiveDateTime` or set
  `timeZone` to keep displaying them as is.
- **Breaking:** when the JS commands given to a callback attribute contain a `JS.push/2`, the
  default server event (`"event_clicked"`, `"date_clicked"`, `"month_changed"`) is not pushed.
- **Breaking:** removed the unused `tzdata` and `mimerl` dependencies, `esbuild` is now dev only,
  and removed the placeholder `hello` function.
- All EventCalendar plugins are always loaded, so every view (including `dayGridDay`,
  `dayGridWeek`, `listYear`, `resourceTimelineYear` and custom `views`) can be used.
- The hook only re-applies the options whose value changed, so re-renders no longer reset the
  date or view the user navigated to.
- The LiveView hook and the static calendar share their option, event and callback handling.
- The main JavaScript bundle also exports the static calendar functions, so importing
  `calendar_component` loads a single copy of EventCalendar. Bundles target ES2022.
- Requires Phoenix LiveView `~> 1.1` (tested with 1.2).

### Added
- `on_event_drop`, `on_event_resize` and `on_select` attributes. Drop and resize handlers can
  reply `%{revert: true}` to undo the change.
- Callback attributes accept a string (server event name) or `false` (disable the event)
  besides `Phoenix.LiveView.JS` commands.
- `JS.push/2` operations in callback attributes receive the callback payload.
- Richer payloads: instants and wall-clock strings for every date, `view`, `resource`,
  `oldEvent`, deltas and the event's `resourceIds`, colors and `extendedProps`.
- `CalendarComponent.push_command/4` to call `gotoDate`, `next`, `prev`, `today`,
  `refetchEvents`, `refetchResources`, `unselect` and `setOption` from the server.
- `CalendarComponent.event_calendar_version/0`.
- Custom toolbar buttons with `push: "event_name"` notify LiveView when clicked.
- Callback options given as global function references (`"MyApp.Calendar.onClick"`) in the
  LiveView calendar, and for every callback option (plus `customButtons.*.click`) in the
  static calendar.
- `getStaticCalendar/1` JavaScript function.
- `initialView` is accepted as an alias of `view`, and `headerToolbar` accepts `left`/`right`
  as aliases of `start`/`end`.
- JavaScript unit tests (`cd assets && npm test`).

### Fixed
- The `view` option was ignored: it was replaced by `initialView`, which EventCalendar does
  not support.
- LiveView patches removed the calendar DOM; the container now uses `phx-update="ignore"`.
- JS commands given to callback attributes never ran because they were HTML-escaped.
- An empty `events` list did not clear the calendar.
- Events with `resourceIds` (or without resources) were dropped in resource views.
- `month_changed` reported the month of the first visible day instead of the displayed month.
- Events without `end` were stretched up to the current date; they now last one day
  (all-day) or one hour.
- Static callbacks that could not be resolved were passed to EventCalendar as strings.
- Removed the debug `console.log` calls from the LiveView hook.

## [0.1.5] - 2024-12-15

### Added
- `static_calendar/1` component for use with regular Phoenix controllers (no LiveView required)
- Static calendar JavaScript module for vanilla Phoenix applications
- Support for string-based JavaScript callbacks in static calendar options
- Auto-initialization of static calendars via CSS class selector
- Comprehensive documentation for controller usage
- New exports in JavaScript module for static calendar functions

### Changed
- Enhanced component module documentation to cover both LiveView and controller usage
- Updated installation guides with controller-specific examples
- Added controller examples to README
- Improved JavaScript build process to generate both LiveView hooks and static calendar modules

### Fixed
- Calendar now works in both LiveView and traditional Phoenix controller contexts

## [0.1.4] - 2024-12-15

### Added
- ES6 module support for JavaScript hooks
- `index.js` entry point for easier import in Phoenix applications
- `package.json` for npm compatibility
- Improved documentation with installation examples

### Changed
- JavaScript build format changed from IIFE to ESM for better compatibility
- Updated README with clearer installation instructions
- Simplified hook registration process

### Fixed
- JavaScript import issues when using `{:calendar_component, "~> 0.1.9"}` in Phoenix apps
- Hook accessibility for external applications

## [0.1.3] - 2024-12-14

### Added
- Initial release of the calendar component
- Phoenix LiveView integration
- EventCalendar JS hooks
- CSS compilation
- Documentation and examples

### Features
- Interactive calendar rendering
- Event handling with LiveView callbacks
- Customizable options forwarding to EventCalendar
- Automatic plugin selection based on view type
- CSS and JS asset compilation
