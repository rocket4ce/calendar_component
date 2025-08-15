import "phoenix_html"
// Establish Phoenix Socket and LiveView configuration (left to host app).
// Library exposes hooks only; host app should register them in LiveSocket.

import {
	createCalendar,
	destroyCalendar,
	TimeGrid,
	DayGrid,
	List,
	Interaction
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
	}
	// Default to TimeGrid for week/day views
	if (set.size === 1) set.add(TimeGrid)
	return Array.from(set)
}

const LiveCalendar = {
		mounted() {
			const events = parseJSON(this.el.dataset.events, [])
			const options = parseJSON(this.el.dataset.options, {})
			const view = options.view || "timeGridWeek"
			const plugins = pluginsForView(view)

			// Extract LiveView integration options
			const lv = options.lv || {}
			const onEventClickName = lv.onEventClick || "event_clicked"
			const onDateClickName = lv.onDateClick || "date_clicked"
			const onMonthChangeName = lv.onMonthChange || "month_changed"

			// Keep user handlers if provided to compose with them
			const userEventClick = typeof options.eventClick === "function" ? options.eventClick : null
			const userDateClick = typeof options.dateClick === "function" ? options.dateClick : null
			const userDatesSet = typeof options.datesSet === "function" ? options.datesSet : null

			// Avoid passing internal lv key to calendar
			const { lv: _lv, ...baseOptions } = options

			const merged = {
				view,
				events,
				// Compose user handlers with LiveView pushes
				eventClick: (arg) => {
					try { userEventClick?.(arg) } catch (_e) {}
					const payload = { id: arg?.event?.id, event: safeEvent(arg?.event) }
					this.pushEvent(onEventClickName, payload)
				},
				dateClick: (arg) => {
					try { userDateClick?.(arg) } catch (_e) {}
					const payload = { date: arg?.date?.toISOString?.() || arg?.date || null }
					this.pushEvent(onDateClickName, payload)
				},
				datesSet: (arg) => {
					try { userDatesSet?.(arg) } catch (_e) {}
					const start = toISODate(arg?.start)
					const month = arg?.start?.getMonth ? arg.start.getMonth() + 1 : null
					const year = arg?.start?.getFullYear?.() || null
					this.pushEvent(onMonthChangeName, { month, year, start })
				},
				...baseOptions
			}

			this._ec = createCalendar(this.el, plugins, merged)
		},

	updated() {
		if (!this._ec) return
		const events = parseJSON(this.el.dataset.events, [])
			const options = parseJSON(this.el.dataset.options, {})
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