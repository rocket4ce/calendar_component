// Calendar initialization for regular Phoenix controllers (no LiveView),
// see `LiveCalendar.Components.static_calendar/1`.

import {createCalendar, destroyCalendar} from "@event-calendar/core"
import "@event-calendar/core/index.css"
import {PLUGINS, normalizeEvents, normalizeOptions, parseJSON, resolveCallbacks} from "./lib/core.js"

const DEFAULT_VIEW = "dayGridMonth"
const SELECTOR = ".static-calendar"

/**
 * Initializes a single static calendar from its `data-events` and `data-options`.
 * Returns the existing instance when the element was already initialized.
 * @param {HTMLElement} element - The calendar container element
 */
export function initStaticCalendar(element) {
	if (element._calendarInstance) return element._calendarInstance

	const options = normalizeOptions(parseJSON(element.dataset.options, {}), DEFAULT_VIEW)
	const events = normalizeEvents(parseJSON(element.dataset.events, []))

	const calendar = createCalendar(element, PLUGINS, {
		...resolveCallbacks(options, {allowInline: true}),
		events
	})

	element._calendarInstance = calendar
	return calendar
}

/**
 * Initializes every element with the `static-calendar` class inside `root`.
 * @param {ParentNode} [root=document]
 */
export function initStaticCalendars(root = document) {
	const instances = []

	root.querySelectorAll(SELECTOR).forEach(element => {
		if (element._calendarInstance) return

		try {
			instances.push(initStaticCalendar(element))
		} catch (error) {
			console.error("[calendar_component] Failed to initialize calendar:", error, element)
		}
	})

	return instances
}

/**
 * Returns the EventCalendar instance mounted on `element`, or `null`.
 * @param {HTMLElement} element
 */
export function getStaticCalendar(element) {
	return element?._calendarInstance || null
}

/**
 * Destroys a static calendar.
 * @param {HTMLElement} element - The calendar container element
 */
export function destroyStaticCalendar(element) {
	if (!element?._calendarInstance) return
	destroyCalendar(element._calendarInstance)
	element._calendarInstance = null
}

/**
 * Replaces the events of a static calendar.
 * @param {HTMLElement} element - The calendar container element
 * @param {Array} events - New events array
 */
export function updateStaticCalendarEvents(element, events) {
	element?._calendarInstance?.setOption("events", normalizeEvents(events))
}

// Auto-initialize calendars once the DOM is ready. DOMContentLoaded waits for deferred
// scripts, so callbacks they define are available; `load` covers modules loaded later.
// Already initialized elements are skipped.
if (typeof document !== "undefined") {
	const autoInit = () => initStaticCalendars()

	if (document.readyState === "complete") {
		queueMicrotask(autoInit)
	} else {
		document.addEventListener("DOMContentLoaded", autoInit, {once: true})
		window.addEventListener("load", autoInit, {once: true})
	}
}

export default {
	initStaticCalendar,
	initStaticCalendars,
	getStaticCalendar,
	destroyStaticCalendar,
	updateStaticCalendarEvents
}
