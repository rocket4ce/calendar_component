// Entry point of the `calendar_component` JavaScript package.
//
//   import CalendarHooks from "calendar_component"                   // LiveView hooks
//   import {initStaticCalendars} from "calendar_component"           // controllers
//   import {initStaticCalendars} from "calendar_component/static"    // controllers, without hooks
//
// The stylesheet is NOT imported here on purpose: in a standard Phoenix app esbuild would
// then emit it next to app.js as priv/static/assets/app.css, overwriting the Tailwind output.
// Import it from your CSS instead (see the installation guide), or from "calendar_component/css".

import CalendarHooks, {
  destroyStaticCalendar,
  getStaticCalendar,
  initStaticCalendar,
  initStaticCalendars,
  updateStaticCalendarEvents
} from "./priv/static/assets/main.js"

export default CalendarHooks

export const Hooks = CalendarHooks
export const LiveCalendar = CalendarHooks.LiveCalendar

export {destroyStaticCalendar, getStaticCalendar, initStaticCalendar, initStaticCalendars, updateStaticCalendarEvents}

export const Static = {
  initStaticCalendar,
  initStaticCalendars,
  getStaticCalendar,
  destroyStaticCalendar,
  updateStaticCalendarEvents
}
