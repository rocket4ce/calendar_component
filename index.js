// Entry point of the `calendar_component` JavaScript package.
//
//   import CalendarHooks from "calendar_component"                   // LiveView hooks
//   import {initStaticCalendars} from "calendar_component"           // controllers
//   import {initStaticCalendars} from "calendar_component/static"    // controllers, without hooks
//
// The EventCalendar stylesheet is shipped as priv/static/assets/main.css.

import "./priv/static/assets/main.css"

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
