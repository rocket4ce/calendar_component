// Main entry point for calendar_component JavaScript hooks
// This file is designed to be imported by Phoenix applications using this library

// Import CSS files explicitly to ensure they're loaded
import "./priv/static/assets/main.css";
import "./priv/static/assets/static-main.css";

// Import the compiled hooks for LiveView
import CalendarHooks from "./priv/static/assets/main.js";

// Import the static calendar functions for regular Phoenix controllers
import StaticCalendar from "./priv/static/assets/static-main.js";

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