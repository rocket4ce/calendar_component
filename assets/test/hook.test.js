// Tests for the pieces of the LiveView hook that do not touch the DOM.
// Run with `npm test` from the assets directory.
import assert from "node:assert/strict"
import {describe, test} from "node:test"

import {
	MANAGED_CALLBACKS,
	REVERTABLE_CALLBACKS,
	buildPayload,
	cloneOptionValue,
	diffOptions,
	encodeJSOps,
	snapshotOptions,
	withPushButtons
} from "../js/lib/core.js"

describe("snapshotOptions / diffOptions", () => {
	test("reports the options whose value changed", () => {
		const previous = snapshotOptions({view: "dayGridMonth", firstDay: 1})
		const next = snapshotOptions({view: "listWeek", firstDay: 1})

		assert.deepEqual(diffOptions(previous, next), {changed: ["view"], removed: []})
	})

	test("ignores reordered keys inside an option", () => {
		const previous = snapshotOptions({headerToolbar: {start: "title", end: "today"}})
		const next = snapshotOptions({headerToolbar: {start: "title", end: "today"}})

		assert.deepEqual(diffOptions(previous, next).changed, [])
	})

	test("reports options that disappeared from the map", () => {
		const previous = snapshotOptions({view: "dayGridMonth", height: "700px"})
		const next = snapshotOptions({view: "dayGridMonth"})

		assert.deepEqual(diffOptions(previous, next), {changed: [], removed: ["height"]})
	})

	test("treats a newly added option as changed", () => {
		const diff = diffOptions(snapshotOptions({view: "listWeek"}), snapshotOptions({view: "listWeek", firstDay: 1}))

		assert.deepEqual(diff, {changed: ["firstDay"], removed: []})
	})
})

describe("cloneOptionValue", () => {
	test("returns primitives untouched", () => {
		assert.equal(cloneOptionValue("700px"), "700px")
		assert.equal(cloneOptionValue(null), null)
		assert.equal(cloneOptionValue(undefined), undefined)
	})

	test("detaches objects from the calendar", () => {
		const live = {start: "title", nested: {end: "today"}}
		const copy = cloneOptionValue(live)

		live.nested.end = "changed"
		assert.deepEqual(copy, {start: "title", nested: {end: "today"}})
	})

	test("falls back to the original value when it cannot be cloned", () => {
		// structuredClone throws on functions, so the option is kept as it is.
		const value = {eventFilter: () => true}
		assert.equal(cloneOptionValue(value), value)
	})
})

describe("encodeJSOps", () => {
	const payload = {id: "e1", view: {type: "listWeek"}}

	test("merges the payload into the value of every push", () => {
		const ops = encodeJSOps([["push", {event: "select"}]], payload)

		assert.deepEqual(JSON.parse(ops), [["push", {event: "select", value: payload}]])
	})

	test("explicit values win over the payload", () => {
		const ops = encodeJSOps([["push", {event: "select", value: {id: "forced"}}]], payload)

		assert.equal(JSON.parse(ops)[0][1].value.id, "forced")
		assert.deepEqual(JSON.parse(ops)[0][1].value.view, payload.view)
	})

	test("leaves other operations untouched", () => {
		const ops = encodeJSOps([["show", {to: "#modal"}], ["push", {event: "select"}]], payload)
		const [show, push] = JSON.parse(ops)

		assert.deepEqual(show, ["show", {to: "#modal"}])
		assert.equal(push[1].event, "select")
	})

	test("returns null for anything that is not a list of operations", () => {
		assert.equal(encodeJSOps(undefined, payload), null)
		assert.equal(encodeJSOps({}, payload), null)
	})
})

describe("withPushButtons", () => {
	test("notifies the server and still runs the original click", () => {
		const calls = []
		const buttons = withPushButtons(
			{addEvent: {text: "New", push: "new_clicked", click: () => calls.push("click")}},
			(event, button) => calls.push([event, button])
		)

		buttons.addEvent.click()

		assert.deepEqual(calls, ["click", ["new_clicked", "addEvent"]])
		assert.equal(buttons.addEvent.text, "New")
		assert.equal("push" in buttons.addEvent, false)
	})

	test("buttons without push are left as they are", () => {
		const button = {text: "Help", click: () => {}}
		const buttons = withPushButtons({help: button}, () => assert.fail("should not push"))

		assert.equal(buttons.help, button)
		buttons.help.click()
	})
})

describe("buildPayload", () => {
	const view = {
		type: "timeGridWeek",
		title: "Oct 19 – 25",
		currentStart: new Date(2026, 9, 19),
		currentEnd: new Date(2026, 9, 26),
		activeStart: new Date(2026, 9, 19),
		activeEnd: new Date(2026, 9, 26)
	}

	test("covers every callback the hook manages", () => {
		assert.deepEqual(MANAGED_CALLBACKS, [
			"eventClick",
			"dateClick",
			"datesSet",
			"eventDrop",
			"eventResize",
			"select"
		])
	})

	test("eventClick carries the event id and the view", () => {
		const event = {id: "e1", title: "Planning", start: new Date(2026, 9, 19, 10), end: new Date(2026, 9, 19, 11)}
		const payload = buildPayload("eventClick", {event, view}, "UTC")

		assert.equal(payload.id, "e1")
		assert.equal(payload.event.startStr, "2026-10-19T10:00:00")
		assert.equal(payload.event.start, "2026-10-19T10:00:00Z")
		assert.equal(payload.view.type, "timeGridWeek")
	})

	test("datesSet reports the month of the current period, not of the first visible day", () => {
		const payload = buildPayload(
			"datesSet",
			{start: new Date(2026, 8, 28), end: new Date(2026, 10, 1), view: {...view, currentStart: new Date(2026, 9, 1)}},
			"UTC"
		)

		assert.equal(payload.month, 10)
		assert.equal(payload.year, 2026)
	})

	test("dateClick serializes the resource", () => {
		const payload = buildPayload(
			"dateClick",
			{date: new Date(2026, 9, 19, 9), dateStr: "2026-10-19T09:00:00", allDay: false, resource: {id: 3, title: "Room A"}, view},
			"UTC"
		)

		assert.deepEqual(payload.resource, {id: 3, title: "Room A", extendedProps: {}})
		assert.equal(payload.allDay, false)
	})

	test("eventDrop and eventResize carry the previous event and the deltas", () => {
		const event = {id: "e1", start: new Date(2026, 9, 20, 10), end: new Date(2026, 9, 20, 11)}
		const oldEvent = {id: "e1", start: new Date(2026, 9, 19, 10), end: new Date(2026, 9, 19, 11)}

		const drop = buildPayload("eventDrop", {event, oldEvent, delta: {days: 1}, view}, "UTC")
		assert.deepEqual(drop.delta, {years: 0, months: 0, days: 1, seconds: 0})
		assert.equal(drop.oldEvent.startStr, "2026-10-19T10:00:00")

		const resize = buildPayload("eventResize", {event, oldEvent, endDelta: {seconds: 3600}, view}, "UTC")
		assert.deepEqual(resize.endDelta, {years: 0, months: 0, days: 0, seconds: 3600})
		assert.equal(resize.startDelta, null)
	})

	test("select carries the range in both formats", () => {
		const payload = buildPayload(
			"select",
			{
				start: new Date(2026, 9, 19, 9),
				end: new Date(2026, 9, 19, 10),
				startStr: "2026-10-19T09:00:00",
				endStr: "2026-10-19T10:00:00",
				allDay: false,
				view
			},
			"+02:00"
		)

		assert.equal(payload.start, "2026-10-19T09:00:00+02:00")
		assert.equal(payload.startStr, "2026-10-19T09:00:00")
	})

	test("returns null for a callback it does not know", () => {
		assert.equal(buildPayload("nope", {}, "UTC"), null)
	})

	test("only drop and resize can be reverted", () => {
		assert.deepEqual(REVERTABLE_CALLBACKS, ["eventDrop", "eventResize"])
		for (const name of REVERTABLE_CALLBACKS) assert.ok(MANAGED_CALLBACKS.includes(name))
	})
})
