// Run with `npm test` from the assets directory.
import assert from "node:assert/strict"
import {afterEach, describe, test} from "node:test"

import {
	normalizeEvents,
	normalizeOptions,
	resolveCallbacks,
	serializeEvent,
	toInstant,
	toWallClock
} from "../js/lib/core.js"

const silence = () => {
	const {warn, error} = console
	console.warn = console.error = () => {}
	return () => Object.assign(console, {warn, error})
}

describe("normalizeOptions", () => {
	test("uses the default view", () => {
		assert.deepEqual(normalizeOptions({}, "dayGridMonth"), {view: "dayGridMonth"})
	})

	test("accepts initialView as an alias of view", () => {
		assert.deepEqual(normalizeOptions({initialView: "listWeek"}, "dayGridMonth"), {view: "listWeek"})
		assert.equal(normalizeOptions({view: "timeGridDay", initialView: "listWeek"}, "x").view, "timeGridDay")
	})

	test("removes internal keys", () => {
		const options = normalizeOptions({lv: {onEventClick: "x"}, plugins: [], firstDay: 1}, "dayGridMonth")
		assert.deepEqual(options, {firstDay: 1, view: "dayGridMonth"})
	})

	test("maps left/right toolbar sections to start/end", () => {
		const {headerToolbar} = normalizeOptions({headerToolbar: {left: "prev,next", center: "title", right: "today"}}, "x")
		assert.deepEqual(headerToolbar, {start: "prev,next", center: "title", end: "today"})
	})

	test("keeps start/end when both naming styles are given", () => {
		const {headerToolbar} = normalizeOptions({headerToolbar: {left: "a", start: "b"}}, "x")
		assert.deepEqual(headerToolbar, {start: "b"})
	})
})

describe("normalizeEvents", () => {
	let restore
	afterEach(() => restore?.())

	test("drops invalid entries", () => {
		restore = silence()
		const events = normalizeEvents([null, "x", {title: "no start"}, {start: "nope"}, {start: "2026-10-19", end: "2026-10-20"}])
		assert.deepEqual(events, [{start: "2026-10-19", end: "2026-10-20"}])
	})

	test("returns an empty list for non-arrays", () => {
		assert.deepEqual(normalizeEvents(undefined), [])
	})

	test("all-day events without end last one day", () => {
		assert.equal(normalizeEvents([{start: "2026-10-19"}])[0].end, "2026-10-19")
		assert.equal(normalizeEvents([{start: "2026-10-19T10:00:00", allDay: true}])[0].end, "2026-10-19T10:00:00")
	})

	test("timed events without end last one hour, keeping the offset", () => {
		const ends = ["2026-10-19T10:00:00", "2026-10-19 23:30", "2026-10-19T10:00:00.000Z", "2026-10-19T10:00:00+02:00"].map(
			start => normalizeEvents([{start}])[0].end
		)
		assert.deepEqual(ends, ["2026-10-19T11:00:00", "2026-10-20T00:30:00", "2026-10-19T11:00:00Z", "2026-10-19T11:00:00+02:00"])
	})

	test("keeps an explicit end", () => {
		assert.equal(normalizeEvents([{start: "2026-10-19T10:00:00", end: "2026-10-19T12:00:00"}])[0].end, "2026-10-19T12:00:00")
	})
})

describe("resolveCallbacks", () => {
	let restore
	afterEach(() => {
		restore?.()
		delete globalThis.window
	})

	test("resolves global function references", () => {
		const onClick = () => {}
		globalThis.window = {MyApp: {Calendar: {onClick}}}

		assert.equal(resolveCallbacks({eventClick: "MyApp.Calendar.onClick"}).eventClick, onClick)
		assert.equal(resolveCallbacks({eventClick: "window.MyApp.Calendar.onClick"}).eventClick, onClick)
	})

	test("removes callbacks that cannot be resolved", () => {
		restore = silence()
		globalThis.window = {}

		const options = resolveCallbacks({eventClick: "Missing.fn", dateClick: "alert(1)", view: "x"})
		assert.deepEqual(options, {view: "x"})
	})

	test("rejects prototype access", () => {
		restore = silence()
		globalThis.window = {}
		assert.equal(resolveCallbacks({eventClick: "constructor.constructor"}).eventClick, undefined)
	})

	test("compiles short bodies only when inline callbacks are allowed", () => {
		restore = silence()
		const options = resolveCallbacks({eventClick: "info.calls.push(info.event.id)"}, {allowInline: true})
		const info = {calls: [], event: {id: "1"}}
		options.eventClick(info)
		assert.deepEqual(info.calls, ["1"])

		const blocked = resolveCallbacks(
			{eventClick: "eval('1')", dateClick: "x".repeat(201), datesSet: "fetch('/')"},
			{allowInline: true}
		)
		assert.deepEqual(Object.keys(blocked), ["datesSet"])
	})

	test("datesSet bodies can use the legacy dateInfo name", () => {
		const {datesSet} = resolveCallbacks({datesSet: "dateInfo.seen = true"}, {allowInline: true})
		const info = {}
		datesSet(info)
		assert.equal(info.seen, true)
	})

	test("resolves custom button clicks and keeps other options untouched", () => {
		const click = () => {}
		globalThis.window = {click}
		const {customButtons, noEventsContent} = resolveCallbacks({
			customButtons: {a: {text: "A", click: "click"}, b: {text: "B"}},
			noEventsContent: "Nothing here"
		})

		assert.deepEqual(customButtons, {a: {text: "A", click}, b: {text: "B"}})
		assert.equal(noEventsContent, "Nothing here")
	})
})

describe("date serialization", () => {
	const date = new Date(2026, 9, 19, 10, 5, 0)

	test("toWallClock formats local dates without offset", () => {
		assert.equal(toWallClock(date), "2026-10-19T10:05:00")
		assert.equal(toWallClock(null), null)
		assert.equal(toWallClock(new Date("nope")), null)
	})

	test("toInstant appends the calendar offset", () => {
		assert.equal(toInstant(date, "UTC"), "2026-10-19T10:05:00Z")
		assert.equal(toInstant(date, "+05:30"), "2026-10-19T10:05:00+05:30")
		assert.equal(toInstant(date, "local"), date.toISOString())
		assert.equal(toInstant(date, undefined), date.toISOString())
	})

	test("serializeEvent returns JSON friendly data", () => {
		const event = {id: "1", title: "A", start: date, end: date, allDay: false, resourceIds: ["r1"], extendedProps: {x: 1}}

		assert.deepEqual(serializeEvent(event, "UTC"), {
			id: "1",
			title: "A",
			start: "2026-10-19T10:05:00Z",
			end: "2026-10-19T10:05:00Z",
			startStr: "2026-10-19T10:05:00",
			endStr: "2026-10-19T10:05:00",
			allDay: false,
			resourceIds: ["r1"],
			display: undefined,
			backgroundColor: undefined,
			textColor: undefined,
			extendedProps: {x: 1}
		})
	})
})
