// Main entry point for calendar_component JavaScript hooks
// This file is designed to be imported by Phoenix applications using this library

// Import the compiled hooks
import CalendarHooks from "./priv/static/assets/calendar-hooks.js";

// Export as ES6 default
export default CalendarHooks;

// Named export for convenience
export const Hooks = CalendarHooks;
export const LiveCalendar = CalendarHooks.LiveCalendar;
