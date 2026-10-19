// Entry point of the main bundle (priv/static/assets/main.{js,css}): LiveView hooks plus the
// static calendar functions, so apps using both load a single copy of EventCalendar.
// The EventCalendar stylesheet is imported by the modules and emitted as main.css.
export {default, LiveCalendar} from "./calendar-hooks.js"
export {
	destroyStaticCalendar,
	getStaticCalendar,
	initStaticCalendar,
	initStaticCalendars,
	updateStaticCalendarEvents
} from "./static-calendar.js"
