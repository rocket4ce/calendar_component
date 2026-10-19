// LiveView hook for `<.calendar>` (see `LiveCalendar.Components.calendar/1`).
//
// The host app registers it in its LiveSocket:
//
//   import CalendarHooks from "calendar_component"
//   new LiveSocket("/live", Socket, {hooks: {...CalendarHooks}})

import {createCalendar, destroyCalendar} from "@event-calendar/core"
import "@event-calendar/core/index.css"
import {
	CREATE_ONLY_OPTIONS,
	PLUGINS,
	isPlainObject,
	normalizeEvents,
	normalizeOptions,
	parseJSON,
	resolveCallbacks,
	serializeDuration,
	serializeEvent,
	serializeResource,
	serializeView,
	toInstant
} from "./lib/core.js"

const DEFAULT_VIEW = "timeGridWeek"

// Server events pushed when the component does not configure a name
// (kept for backwards compatibility). The other callbacks are opt-in.
const DEFAULT_PUSH_EVENTS = {
	eventClick: "event_clicked",
	dateClick: "date_clicked",
	datesSet: "month_changed"
}

// EventCalendar callbacks the hook forwards to LiveView, with the payload sent for each one.
const PAYLOADS = {
	eventClick: (info, tz) => ({
		id: info.event?.id,
		event: serializeEvent(info.event, tz),
		view: serializeView(info.view)
	}),
	dateClick: (info, tz) => ({
		date: toInstant(info.date, tz),
		dateStr: info.dateStr,
		allDay: !!info.allDay,
		resource: serializeResource(info.resource),
		view: serializeView(info.view)
	}),
	datesSet: (info, tz) => {
		const current = info.view?.currentStart || info.start
		return {
			month: current ? current.getMonth() + 1 : null,
			year: current ? current.getFullYear() : null,
			start: toInstant(info.start, tz),
			end: toInstant(info.end, tz),
			startStr: info.startStr,
			endStr: info.endStr,
			view: serializeView(info.view)
		}
	},
	eventDrop: (info, tz) => ({
		id: info.event?.id,
		event: serializeEvent(info.event, tz),
		oldEvent: serializeEvent(info.oldEvent, tz),
		delta: serializeDuration(info.delta),
		oldResource: serializeResource(info.oldResource),
		newResource: serializeResource(info.newResource),
		view: serializeView(info.view)
	}),
	eventResize: (info, tz) => ({
		id: info.event?.id,
		event: serializeEvent(info.event, tz),
		oldEvent: serializeEvent(info.oldEvent, tz),
		startDelta: serializeDuration(info.startDelta),
		endDelta: serializeDuration(info.endDelta),
		view: serializeView(info.view)
	}),
	select: (info, tz) => ({
		start: toInstant(info.start, tz),
		end: toInstant(info.end, tz),
		startStr: info.startStr,
		endStr: info.endStr,
		allDay: !!info.allDay,
		resource: serializeResource(info.resource),
		view: serializeView(info.view)
	})
}

const MANAGED_CALLBACKS = Object.keys(PAYLOADS)

// Calendar methods the server can call with
// `push_event(socket, "calendar:command", %{id: id, command: ..., args: [...]})`
// (see `CalendarComponent.push_command/4`).
const COMMANDS = {
	gotoDate: (ec, date) => ec.gotoDate(date),
	next: ec => ec.next(),
	prev: ec => ec.prev(),
	today: ec => ec.gotoDate(new Date()),
	refetchEvents: ec => ec.refetchEvents(),
	refetchResources: ec => ec.refetchResources(),
	unselect: ec => ec.unselect(),
	setOption: (ec, name, value) => ec.setOption(name, value)
}

const LiveCalendar = {
	mounted() {
		this._eventsJSON = this.el.dataset.events || "[]"
		this._optionsJSON = this.el.dataset.options || "{}"
		this._readCallbackConfig()

		const options = this._prepareOptions(parseJSON(this._optionsJSON, {}))
		const handlers = Object.fromEntries(
			MANAGED_CALLBACKS.map(name => [name, info => this._dispatch(name, info)])
		)

		this._ec = createCalendar(this.el, PLUGINS, {
			...options,
			...handlers,
			events: normalizeEvents(parseJSON(this._eventsJSON, []))
		})
		this.el._calendarInstance = this._ec

		this.handleEvent("calendar:command", payload => this._runCommand(payload))
	},

	updated() {
		if (!this._ec) return
		this._readCallbackConfig()

		const optionsJSON = this.el.dataset.options || "{}"
		if (optionsJSON !== this._optionsJSON) {
			this._optionsJSON = optionsJSON
			const previous = this._snapshot
			const options = this._prepareOptions(parseJSON(optionsJSON, {}))

			// Only changed options are applied, so re-renders don't reset what the user
			// did on the client (navigated dates, switched views, ...).
			for (const [name, value] of Object.entries(options)) {
				if (CREATE_ONLY_OPTIONS.includes(name)) continue
				if (previous[name] === this._snapshot[name]) continue
				this._ec.setOption(name, value)
			}
		}

		const eventsJSON = this.el.dataset.events || "[]"
		if (eventsJSON !== this._eventsJSON) {
			this._eventsJSON = eventsJSON
			this._ec.setOption("events", normalizeEvents(parseJSON(eventsJSON, [])))
		}
	},

	destroyed() {
		if (!this._ec) return
		try {
			destroyCalendar(this._ec)
		} catch (_e) {
			// The calendar may already be gone together with its element.
		}
		this.el._calendarInstance = null
		this._ec = null
	},

	// Normalizes options, keeps a JSON snapshot of each one for change detection and
	// separates user callbacks for the events this hook manages.
	_prepareOptions(rawOptions) {
		const normalized = normalizeOptions(rawOptions, DEFAULT_VIEW)
		delete normalized.events

		this._snapshot = Object.fromEntries(
			Object.entries(normalized).map(([name, value]) => [name, JSON.stringify(value)])
		)

		const options = resolveCallbacks(normalized)
		this._userCallbacks = {}
		for (const name of MANAGED_CALLBACKS) {
			if (options[name]) this._userCallbacks[name] = options[name]
			delete options[name]
		}

		if (isPlainObject(options.customButtons)) {
			options.customButtons = this._withPushButtons(options.customButtons)
		}

		return options
	},

	// Custom buttons may declare `push: "event_name"` to notify the server when clicked.
	_withPushButtons(buttons) {
		return Object.fromEntries(
			Object.entries(buttons).map(([name, button]) => {
				if (!isPlainObject(button) || typeof button.push !== "string") return [name, button]
				const {push, ...rest} = button
				const click = rest.click
				return [
					name,
					{
						...rest,
						click: (...args) => {
							if (click) click(...args)
							this._push(push, {button: name, view: serializeView(this._ec?.getView())})
						}
					}
				]
			})
		)
	},

	_readCallbackConfig() {
		const pushEvents = parseJSON(this.el.dataset.pushEvents, null)
		this._pushEvents = isPlainObject(pushEvents) ? pushEvents : DEFAULT_PUSH_EVENTS
		this._jsCallbacks = parseJSON(this.el.dataset.jsCallbacks, {}) || {}
	},

	_dispatch(name, info) {
		const userCallback = this._userCallbacks[name]
		if (userCallback) {
			try {
				userCallback(info)
			} catch (e) {
				console.error(`[calendar_component] ${name} callback failed:`, e)
			}
		}

		const ops = this._jsCallbacks[name]
		const eventName = this._pushEvents[name]
		if (!ops && !eventName) return

		const payload = PAYLOADS[name](info, this._ec?.getOption("timeZone"))

		if (ops) this._execJS(ops, payload)

		if (eventName) {
			// `{:reply, %{revert: true}, socket}` undoes a drop/resize the server rejected.
			this._push(eventName, payload, reply => {
				if (reply?.revert && typeof info.revert === "function") info.revert()
			})
		}
	},

	// Runs the JS commands given to the component; `JS.push` operations receive the
	// callback payload merged into their `value` (explicit values win).
	_execJS(ops, payload) {
		if (!Array.isArray(ops)) return

		const encoded = JSON.stringify(
			ops.map(([kind, args]) =>
				kind === "push" ? [kind, {...args, value: {...payload, ...(args?.value || {})}}] : [kind, args]
			)
		)

		try {
			if (typeof this.js === "function") this.js().exec(encoded)
			else this.liveSocket.execJS(this.el, encoded, "hook")
		} catch (e) {
			console.error("[calendar_component] Failed to execute JS commands:", e)
		}
	},

	_push(eventName, payload, onReply = () => {}) {
		try {
			// Passing a reply callback makes LiveView swallow errors when disconnected.
			this.pushEvent(eventName, payload, onReply)
		} catch (e) {
			console.error(`[calendar_component] Failed to push "${eventName}":`, e)
		}
	},

	_runCommand(payload) {
		const {id, command, args} = payload || {}
		if (id !== this.el.id || !this._ec) return

		const run = COMMANDS[command]
		if (!run) {
			console.warn(`[calendar_component] Unknown calendar command "${command}"`)
			return
		}

		try {
			run(this._ec, ...(Array.isArray(args) ? args : []))
		} catch (e) {
			console.error(`[calendar_component] Calendar command "${command}" failed:`, e)
		}
	}
}

// Kept for apps that read the hooks from the global scope.
const Hooks = {LiveCalendar}

if (typeof window !== "undefined") {
	window.LiveCalendarHooks = Hooks
}

export {LiveCalendar}
export default Hooks
