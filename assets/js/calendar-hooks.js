import "phoenix_html"
// Establish Phoenix Socket and LiveView configuration (left to host app).
// Library exposes hooks only; host app should register them in LiveSocket.

import {
	createCalendar,
	destroyCalendar,
	TimeGrid,
	DayGrid,
	List,
	Interaction,
	ResourceTimeGrid,
	ResourceTimeline
} from "@event-calendar/core"
import "@event-calendar/core/index.css"

function parseJSON(value, fallback) {
	try {
		return value ? JSON.parse(value) : fallback
	} catch (_e) {
		return fallback
	}
}

function pluginsForView(view) {
	const set = new Set([Interaction])
	if (typeof view === "string") {
		if (view.startsWith("timeGrid")) set.add(TimeGrid)
		if (view.startsWith("dayGrid")) set.add(DayGrid)
		if (view.startsWith("list")) set.add(List)
		if (view.startsWith("resourceTimeGrid")) set.add(ResourceTimeGrid)
		if (view.startsWith("resourceTimeline")) set.add(ResourceTimeline)
	}
	// Default to TimeGrid for week/day views
	if (set.size === 1) set.add(TimeGrid)
	return Array.from(set)
}

function getAllPluginsFromOptions(options) {
	const set = new Set([Interaction])

	// Check initial view
	const view = options.view || options.initialView || "timeGridWeek"
	if (view.startsWith("timeGrid")) set.add(TimeGrid)
	if (view.startsWith("dayGrid")) set.add(DayGrid)
	if (view.startsWith("list")) set.add(List)
	if (view.startsWith("resourceTimeGrid")) set.add(ResourceTimeGrid)
	if (view.startsWith("resourceTimeline")) set.add(ResourceTimeline)

	// Check headerToolbar for additional views
	const headerToolbar = options.headerToolbar || {}
	const toolbarValues = Object.values(headerToolbar).join(" ")

	if (toolbarValues.includes("dayGridMonth") || toolbarValues.includes("dayGridWeek")) set.add(DayGrid)
	if (toolbarValues.includes("timeGridWeek") || toolbarValues.includes("timeGridDay")) set.add(TimeGrid)
	if (toolbarValues.includes("listWeek") || toolbarValues.includes("listMonth") || toolbarValues.includes("listDay")) set.add(List)
	if (toolbarValues.includes("resourceTimeGrid")) set.add(ResourceTimeGrid)
	if (toolbarValues.includes("resourceTimeline")) set.add(ResourceTimeline)

	// Check footerToolbar as well
	const footerToolbar = options.footerToolbar || {}
	const footerValues = Object.values(footerToolbar).join(" ")

	if (footerValues.includes("dayGridMonth") || footerValues.includes("dayGridWeek")) set.add(DayGrid)
	if (footerValues.includes("timeGridWeek") || footerValues.includes("timeGridDay")) set.add(TimeGrid)
	if (footerValues.includes("listWeek") || footerValues.includes("listMonth") || footerValues.includes("listDay")) set.add(List)
	if (footerValues.includes("resourceTimeGrid")) set.add(ResourceTimeGrid)
	if (footerValues.includes("resourceTimeline")) set.add(ResourceTimeline)

	// Default to TimeGrid for week/day views if nothing else is specified
	if (set.size === 1) set.add(TimeGrid)
	return Array.from(set)
}

function validateEvent(event) {
	if (!event) return null

	// Ensure we have valid dates
	if (event.start && typeof event.start === 'string') {
		try {
			new Date(event.start).toISOString()
		} catch (e) {
			console.warn('Invalid start date for event:', event.id, event.start)
			return null
		}
	}

	if (event.end && typeof event.end === 'string') {
		try {
			new Date(event.end).toISOString()
		} catch (e) {
			console.warn('Invalid end date for event:', event.id, event.end)
			event = { ...event, end: undefined } // Remove invalid end date
		}
	}

	return event
}

function validateEventsForResources(events, options) {
	const view = options.view || options.initialView || "timeGridWeek"
	const isResourceView = view.startsWith("resource")

	if (!isResourceView) {
		return events.map(validateEvent).filter(Boolean)
	}

	// For resource views, ensure we have resources defined
	if (!options.resources || !Array.isArray(options.resources) || options.resources.length === 0) {
		console.warn('Resource view requires options.resources to be defined')
		return []
	}

	const resourceIds = new Set()
	function collectResourceIds(resources) {
		resources.forEach(resource => {
			resourceIds.add(resource.id)
			if (resource.children) {
				collectResourceIds(resource.children)
			}
		})
	}
	collectResourceIds(options.resources)

	// Filter events and ensure they have valid resourceId
	return events.map(event => {
		const validated = validateEvent(event)
		if (!validated) return null

		// For resource views, events must have a valid resourceId
		if (validated.resourceId === undefined || validated.resourceId === null) {
			console.warn('Event in resource view missing resourceId:', validated.id)
			return null
		}

		if (!resourceIds.has(validated.resourceId)) {
			console.warn('Event has invalid resourceId:', validated.id, validated.resourceId)
			return null
		}

		return validated
	}).filter(Boolean)
}

		const LiveCalendar = {
		mounted() {
			const rawEvents = parseJSON(this.el.dataset.events, [])
			const options = parseJSON(this.el.dataset.options, {})
			const jsCallbacks = parseJSON(this.el.dataset.jsCallbacks, {})
			const view = options.view || options.initialView || "timeGridWeek"
			const plugins = getAllPluginsFromOptions(options)

			// Debug: log the options to see what we're getting
			console.log('Calendar options received:', options)
			console.log('Resolved view:', view)

			// Store JS callbacks for use in event handlers
			this._jsCallbacks = jsCallbacks

			// Validate events based on view type and resources
			const events = validateEventsForResources(rawEvents, options)

			// Extract LiveView integration options
			const lv = options.lv || {}
			const onEventClickName = lv.onEventClick || "event_clicked"
			const onDateClickName = lv.onDateClick || "date_clicked"
			const onMonthChangeName = lv.onMonthChange || "month_changed"

			// Keep user handlers if provided to compose with them
			const userEventClick = typeof options.eventClick === "function" ? options.eventClick : null
			const userDateClick = typeof options.dateClick === "function" ? options.dateClick : null
			const userDatesSet = typeof options.datesSet === "function" ? options.datesSet : null

			// Avoid passing internal lv key and invalid view option to calendar
			const { lv: _lv, view: _view, ...baseOptions } = options

			const merged = {
				...baseOptions,
				initialView: view,
				events,
				// Compose user handlers with LiveView pushes and JS commands
				eventClick: (arg) => {
					try { userEventClick?.(arg) } catch (_e) {}

					// Execute JS command if provided
					if (this._jsCallbacks?.onEventClick) {
						try {
							this.liveSocket.execJS(this.el, this._jsCallbacks.onEventClick, "click")
						} catch (_e) {}
					}

					// Still push the event for backwards compatibility
					const payload = { id: arg?.event?.id, event: safeEvent(arg?.event) }
					this.pushEvent(onEventClickName, payload)
				},
				dateClick: (arg) => {
					try { userDateClick?.(arg) } catch (_e) {}

					// Execute JS command if provided
					if (this._jsCallbacks?.onDateClick) {
						try {
							this.liveSocket.execJS(this.el, this._jsCallbacks.onDateClick, "click")
						} catch (_e) {}
					}

					// Still push the event for backwards compatibility
					const payload = { date: arg?.date?.toISOString?.() || arg?.date || null }
					this.pushEvent(onDateClickName, payload)
				},
				datesSet: (arg) => {
					try { userDatesSet?.(arg) } catch (_e) {}

					// Execute JS command if provided
					if (this._jsCallbacks?.onMonthChange) {
						try {
							this.liveSocket.execJS(this.el, this._jsCallbacks.onMonthChange, "change")
						} catch (_e) {}
					}

					// Still push the event for backwards compatibility
					const start = toISODate(arg?.start)
					const month = arg?.start?.getMonth ? arg.start.getMonth() + 1 : null
					const year = arg?.start?.getFullYear?.() || null
					this.pushEvent(onMonthChangeName, { month, year, start })
				}
			}

			console.log('Final merged options for calendar:', merged)
			this._ec = createCalendar(this.el, plugins, merged)
			console.log('Calendar created with view:', this._ec.getOption?.('initialView') || 'unknown')
		},

	updated() {
		if (!this._ec) return
		const rawEvents = parseJSON(this.el.dataset.events, [])
		const options = parseJSON(this.el.dataset.options, {})
		const jsCallbacks = parseJSON(this.el.dataset.jsCallbacks, {})

		// Validate events based on current view type and resources
		const events = validateEventsForResources(rawEvents, options)

		try {
			this._ec.setOption("events", events)
			for (const [k, v] of Object.entries(options || {})) {
				if (k === "events") continue
				if (k === "lv") continue
				this._ec.setOption(k, v)
			}
		} catch (_e) {
			// no-op fallback if calendar not ready
		}

		// Store updated JS callbacks for next interaction
		this._jsCallbacks = jsCallbacks
	},

	destroyed() {
		if (this._ec) {
			try { destroyCalendar(this._ec) } catch (_e) {}
			this._ec = null
		}
	}
}

function toISODate(d) {
	try { return d?.toISOString?.() || null } catch (_e) { return null }
}

function safeEvent(ev) {
	if (!ev) return null
	// pick common fields to avoid circular/json issues
	const { id, title, start, end, allDay } = ev
	return { id, title, start, end, allDay }
}

// Expose hooks for host app LiveSocket registration
// Example in host app:
//   import Hooks from "calendar_component"; new LiveSocket("/live", Socket, { hooks: Hooks })
const Hooks = { LiveCalendar }

if (typeof window !== "undefined") {
	window.LiveCalendarHooks = Hooks
}

export default Hooks