// Shared helpers for the LiveView hook and the static (controller) calendar.

import {
	DayGrid,
	Interaction,
	List,
	ResourceTimeGrid,
	ResourceTimeline,
	TimeGrid
} from "@event-calendar/core"

// Every plugin ends up in the bundle anyway, so registering all of them costs nothing
// and lets users switch to any view (toolbar buttons, `setOption("view", ...)`,
// custom `views` with a `type`). Same list and order as the official standalone build.
export const PLUGINS = [DayGrid, Interaction, List, ResourceTimeGrid, ResourceTimeline, TimeGrid]

// Options that EventCalendar only accepts as functions. When given as strings
// they are resolved to functions (see `resolveCallbacks`).
export const CALLBACK_OPTIONS = [
	"dateClick",
	"datesSet",
	"dragConstraint",
	"eventAllUpdated",
	"eventClick",
	"eventDidMount",
	"eventDragStart",
	"eventDragStop",
	"eventDrop",
	"eventFilter",
	"eventMouseEnter",
	"eventMouseLeave",
	"eventOrder",
	"eventResize",
	"eventResizeStart",
	"eventResizeStop",
	"loading",
	"noEventsClick",
	"resizeConstraint",
	"resourceExpand",
	"resourceLabelDidMount",
	"select",
	"selectConstraint",
	"unselect",
	"viewDidMount"
]

// Options that EventCalendar reads only when the calendar is created.
export const CREATE_ONLY_OPTIONS = ["views"]

// Keys used by this library that must never reach EventCalendar.
const INTERNAL_OPTIONS = ["lv", "initialView", "plugins"]

export function parseJSON(value, fallback) {
	try {
		return value ? JSON.parse(value) : fallback
	} catch (_e) {
		return fallback
	}
}

export function isPlainObject(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value)
}

/**
 * Normalizes user options into something EventCalendar understands:
 *
 *   - `initialView` (FullCalendar naming) is accepted as an alias of `view`
 *   - `headerToolbar` accepts `left`/`right` as aliases of `start`/`end`
 *   - internal keys (`lv`, `plugins`) are removed
 */
export function normalizeOptions(options, defaultView) {
	const source = isPlainObject(options) ? options : {}
	const result = {}

	for (const [key, value] of Object.entries(source)) {
		if (!INTERNAL_OPTIONS.includes(key)) result[key] = value
	}

	result.view = source.view || source.initialView || defaultView

	if (isPlainObject(result.headerToolbar)) {
		result.headerToolbar = normalizeToolbar(result.headerToolbar)
	}

	return result
}

function normalizeToolbar(toolbar) {
	const {left, right, ...rest} = toolbar
	if (left !== undefined && rest.start === undefined) rest.start = left
	if (right !== undefined && rest.end === undefined) rest.end = right
	return rest
}

/**
 * Drops entries EventCalendar cannot render (non-objects and events whose
 * `start` cannot be parsed).
 *
 * EventCalendar treats a missing `end` as "now", which stretches the event up to
 * today, so events without `end` get a default one (see `defaultEnd`).
 */
export function normalizeEvents(events) {
	if (!Array.isArray(events)) return []

	return events.flatMap(event => {
		if (!isPlainObject(event)) return []

		if (event.start === undefined || event.start === null || Number.isNaN(Date.parse(event.start))) {
			console.warn("[calendar_component] Ignoring event with an invalid start date:", event)
			return []
		}

		return event.end === undefined || event.end === null ? [{...event, end: defaultEnd(event)}] : [event]
	})
}

const DATE_TIME = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?(?:\.\d+)?(Z|[+-]\d{2}:?\d{2})?$/

// All-day events last one day (EventCalendar extends `end = start` to the next day),
// timed events one hour. The wall-clock time and offset of `start` are preserved.
function defaultEnd({start, allDay}) {
	const match = typeof start === "string" && allDay !== true && start.match(DATE_TIME)
	if (!match) return start

	const [, year, month, day, hours, minutes, seconds = "0", offset = ""] = match
	const end = new Date(Date.UTC(+year, +month - 1, +day, +hours + 1, +minutes, +seconds))
	return end.toISOString().slice(0, 19) + offset
}

/**
 * Resolves callback options given as strings into functions.
 *
 * Supported formats:
 *   - a global function reference: "myHandler", "MyApp.Calendar.onClick", "window.MyApp.onClick"
 *   - a short function body (only when `allowInline` is true, used by the static calendar)
 *
 * Unresolvable callbacks are removed so EventCalendar never receives a string
 * where it expects a function.
 */
export function resolveCallbacks(options, {allowInline = false} = {}) {
	const result = {...options}

	for (const name of CALLBACK_OPTIONS) {
		if (!(name in result)) continue
		const fn = resolveCallback(result[name], name, allowInline)
		if (fn) result[name] = fn
		else delete result[name]
	}

	if (isPlainObject(result.customButtons)) {
		result.customButtons = Object.fromEntries(
			Object.entries(result.customButtons).map(([name, button]) => {
				if (!isPlainObject(button) || button.click === undefined) return [name, button]
				const click = resolveCallback(button.click, `customButtons.${name}.click`, allowInline)
				const {click: _click, ...rest} = button
				return [name, click ? {...rest, click} : rest]
			})
		)
	}

	return result
}

function resolveCallback(callback, name, allowInline) {
	if (callback === undefined || callback === null) return null
	if (typeof callback === "function") return callback

	if (typeof callback !== "string") {
		console.warn(`[calendar_component] Invalid ${name} callback:`, callback)
		return null
	}

	if (/^[\w$.]+$/.test(callback)) return resolveGlobalFunction(callback, name)

	if (allowInline) return compileInlineCallback(callback, name)

	console.error(
		`[calendar_component] ${name} must be a global function reference (e.g. "MyApp.Calendar.${name}").`
	)
	return null
}

function resolveGlobalFunction(path, name) {
	if (typeof window === "undefined") return null

	let target = window
	for (const part of path.split(".")) {
		if (part === "window") continue
		if (!/^[a-zA-Z_$][\w$]*$/.test(part) || part === "__proto__" || part === "prototype" || part === "constructor") {
			console.warn(`[calendar_component] Invalid function reference "${path}" for ${name}`)
			return null
		}
		target = target?.[part]
	}

	if (typeof target === "function") return target

	console.warn(`[calendar_component] Global function "${path}" not found for ${name}`)
	return null
}

const DANGEROUS_KEYWORDS = [
	"function",
	"eval",
	"settimeout",
	"setinterval",
	"constructor",
	"__proto__",
	"prototype",
	"import",
	"=>"
]
const MAX_INLINE_LENGTH = 200

// Compiles a short function body like "console.log(info.event.title)".
// Kept for backwards compatibility with the static calendar; prefer global function references.
function compileInlineCallback(body, name) {
	const lower = body.toLowerCase()
	const keyword = DANGEROUS_KEYWORDS.find(k => lower.includes(k))

	if (keyword) {
		console.error(`[calendar_component] SECURITY: "${keyword}" is not allowed in the ${name} callback body.`)
		return null
	}

	if (body.length > MAX_INLINE_LENGTH) {
		console.error(
			`[calendar_component] SECURITY: ${name} callback body is longer than ${MAX_INLINE_LENGTH} characters. Use a global function reference.`
		)
		return null
	}

	try {
		// `dateInfo` is kept as an alias because older docs used it for `datesSet`.
		const fn = new Function("info", "dateInfo", body)
		return info => fn(info, info)
	} catch (e) {
		console.warn(`[calendar_component] Invalid ${name} callback body:`, e)
		return null
	}
}

// --- Serialization of EventCalendar callback arguments --------------------------------
//
// EventCalendar hands callbacks local `Date` objects whose wall-clock time is the time
// shown in the calendar (in its `timeZone`). We send both representations to the server:
//
//   - `*Str` fields: wall-clock ISO strings without offset, e.g. "2026-10-19T10:00:00"
//   - plain fields:  instants with offset, e.g. "2026-10-19T13:00:00.000Z"

const pad = n => String(n).padStart(2, "0")

export function toWallClock(date) {
	if (!(date instanceof Date) || Number.isNaN(date.getTime())) return null
	return (
		`${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
		`T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
	)
}

export function toInstant(date, timeZone) {
	const wallClock = toWallClock(date)
	if (!wallClock) return null
	if (timeZone === "UTC") return `${wallClock}Z`
	if (typeof timeZone === "string" && /^[+-]\d{2}:\d{2}$/.test(timeZone)) return `${wallClock}${timeZone}`
	return date.toISOString()
}

export function serializeEvent(event, timeZone) {
	if (!event) return null

	return {
		id: event.id,
		title: typeof event.title === "string" ? event.title : null,
		start: toInstant(event.start, timeZone),
		end: toInstant(event.end, timeZone),
		startStr: toWallClock(event.start),
		endStr: toWallClock(event.end),
		allDay: !!event.allDay,
		resourceIds: event.resourceIds || [],
		display: event.display,
		backgroundColor: event.backgroundColor,
		textColor: event.textColor,
		extendedProps: event.extendedProps || {}
	}
}

export function serializeResource(resource) {
	if (!resource) return null
	return {
		id: resource.id,
		title: typeof resource.title === "string" ? resource.title : null,
		extendedProps: resource.extendedProps || {}
	}
}

export function serializeView(view) {
	if (!view) return null
	return {
		type: view.type,
		title: view.title,
		currentStart: toWallClock(view.currentStart),
		currentEnd: toWallClock(view.currentEnd),
		activeStart: toWallClock(view.activeStart),
		activeEnd: toWallClock(view.activeEnd)
	}
}

export function serializeDuration(duration) {
	if (!duration) return null
	return {
		years: duration.years || 0,
		months: duration.months || 0,
		days: duration.days || 0,
		seconds: duration.seconds || 0
	}
}
