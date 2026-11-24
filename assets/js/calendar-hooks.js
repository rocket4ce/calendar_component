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
	MANAGED_CALLBACKS,
	PLUGINS,
	REVERTABLE_CALLBACKS,
	buildPayload,
	cloneOptionValue,
	diffOptions,
	encodeJSOps,
	isPlainObject,
	normalizeEvents,
	normalizeOptions,
	parseJSON,
	resolveCallbacks,
	serializeView,
	snapshotOptions,
	withPushButtons
} from "./lib/core.js"

const DEFAULT_VIEW = "timeGridWeek"

// Server events pushed when the component does not configure a name
// (kept for backwards compatibility). The other callbacks are opt-in.
const DEFAULT_PUSH_EVENTS = {
	eventClick: "event_clicked",
	dateClick: "date_clicked",
	datesSet: "month_changed"
}

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
	setOption: (ec, name, value) => ec.setOption(name, value),
	addEvent: (ec, event) => withEvent(event, normalized => ec.addEvent(normalized)),
	updateEvent: (ec, event) => withEvent(event, normalized => ec.updateEvent(normalized)),
	removeEventById: (ec, id) => ec.removeEventById(id)
}

// `addEvent` / `updateEvent` take a single event, normalized like the ones in `events`.
// `normalizeEvents` drops entries EventCalendar cannot render.
function withEvent(event, run) {
	const [normalized] = normalizeEvents([event])
	if (normalized) run(normalized)
}

const LiveCalendar = {
	mounted() {
		this._eventsJSON = this.el.dataset.events || "[]"
		this._optionsJSON = this.el.dataset.options || "{}"
		this._warned = new Set()
		// Baseline values of the options this hook has applied, so an option that later
		// disappears from the options map can be restored (see `_restoreOptions`).
		this._baselines = {}
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
			const {changed, removed} = diffOptions(previous, this._snapshot)

			// Only changed options are applied, so re-renders don't reset what the user
			// did on the client (navigated dates, switched views, ...).
			this._applyOptions(changed, options)
			this._restoreOptions(removed)
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

	_applyOptions(names, options) {
		for (const name of names) {
			if (!(name in options)) continue

			if (CREATE_ONLY_OPTIONS.includes(name)) {
				this._warnOnce(
					`create-only:${name}`,
					`"${name}" is only read when the calendar is created, so its new value was ignored. ` +
						"Change the calendar's `id` to force a remount."
				)
				continue
			}

			// Remember what the option looked like before we touched it for the first time.
			if (!(name in this._baselines)) {
				this._baselines[name] = cloneOptionValue(this._ec.getOption(name))
			}

			this._ec.setOption(name, options[name])
		}
	},

	// EventCalendar has no "unset option" API, so an option that disappears from the map is
	// restored to the value it had before this hook first applied it. Options that were
	// already set when the calendar was created have no recoverable baseline.
	_restoreOptions(names) {
		for (const name of names) {
			if (CREATE_ONLY_OPTIONS.includes(name)) continue

			if (name in this._baselines) {
				this._ec.setOption(name, this._baselines[name])
				delete this._baselines[name]
			} else {
				this._warnOnce(
					`removed:${name}`,
					`"${name}" was removed from the options map but EventCalendar keeps its current value. ` +
						"Send the option with an explicit value instead of removing it."
				)
			}
		}
	},

	// Normalizes options, keeps a JSON snapshot of each one for change detection and
	// separates user callbacks for the events this hook manages.
	_prepareOptions(rawOptions) {
		const normalized = normalizeOptions(rawOptions, DEFAULT_VIEW)
		delete normalized.events

		this._snapshot = snapshotOptions(normalized)

		const options = resolveCallbacks(normalized)
		this._userCallbacks = {}
		for (const name of MANAGED_CALLBACKS) {
			if (options[name]) this._userCallbacks[name] = options[name]
			delete options[name]
		}

		if (isPlainObject(options.customButtons)) {
			options.customButtons = withPushButtons(options.customButtons, (event, button) =>
				this._push(event, {button, view: serializeView(this._ec?.getView())})
			)
		}

		return options
	},

	_readCallbackConfig() {
		const pushEvents = parseJSON(this.el.dataset.pushEvents, null)
		this._pushEvents = isPlainObject(pushEvents) ? pushEvents : DEFAULT_PUSH_EVENTS
		this._jsCallbacks = parseJSON(this.el.dataset.jsCallbacks, {}) || {}

		// `{:reply, %{revert: true}, socket}` travels on the reply of a hook push, which only
		// exists when the callback pushes a named server event. A `JS.push/2` goes through
		// LiveView's own command pipeline and never comes back to this hook.
		for (const name of REVERTABLE_CALLBACKS) {
			const ops = this._jsCallbacks[name]
			if (!this._pushEvents[name] && Array.isArray(ops) && ops.some(([kind]) => kind === "push")) {
				this._warnOnce(
					`revert:${name}`,
					`${name} is configured with JS commands, so a "%{revert: true}" reply cannot undo the change. ` +
						`Pass a server event name (e.g. on_event_drop="event_dropped") if you need to revert.`
				)
			}
		}
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

		const payload = buildPayload(name, info, this._ec?.getOption("timeZone"))

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
		const encoded = encodeJSOps(ops, payload)
		if (!encoded) return

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
	},

	_warnOnce(key, message) {
		if (this._warned.has(key)) return
		this._warned.add(key)
		console.warn(`[calendar_component] ${message}`)
	}
}

// Kept for apps that read the hooks from the global scope.
const Hooks = {LiveCalendar}

if (typeof window !== "undefined") {
	window.LiveCalendarHooks = Hooks
}

export {LiveCalendar}
export default Hooks
