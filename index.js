// Main entry point for calendar_component JavaScript hooks
// This file is designed to be imported by Phoenix applications using this library

// Import the compiled hooks for LiveView
import CalendarHooks from "./priv/static/assets/calendar-hooks.js";

// Import the static calendar functions for regular Phoenix controllers
import StaticCalendar from "./priv/static/assets/static-calendar.js";

// Export as ES6 default (LiveView hooks)
export default CalendarHooks;

// Named exports for convenience
export const Hooks = CalendarHooks;
export const LiveCalendar = CalendarHooks.LiveCalendar;

// Static calendar exports for use without LiveView
export const Static = StaticCalendar;
export const {
  initStaticCalendar,
  initStaticCalendars,
  destroyStaticCalendar,
  updateStaticCalendarEvents
} = StaticCalendar;