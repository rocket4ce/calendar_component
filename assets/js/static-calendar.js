// Static calendar initialization for regular Phoenix controllers (no LiveView)
// This file provides functionality to initialize calendars without LiveView hooks

import {
  createCalendar,
  destroyCalendar,
  TimeGrid,
  DayGrid,
  List,
  Interaction
} from "@event-calendar/core"

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

// Convert string functions to actual functions
function parseCallbacks(options) {
  const callbacks = {}

  // Handle eventClick callback
  if (options.eventClick && typeof options.eventClick === 'string') {
    try {
      callbacks.eventClick = new Function('info', options.eventClick)
    } catch (e) {
      console.warn('Invalid eventClick callback:', e)
    }
  } else if (typeof options.eventClick === 'function') {
    callbacks.eventClick = options.eventClick
  }

  // Handle dateClick callback
  if (options.dateClick && typeof options.dateClick === 'string') {
    try {
      callbacks.dateClick = new Function('info', options.dateClick)
    } catch (e) {
      console.warn('Invalid dateClick callback:', e)
    }
  } else if (typeof options.dateClick === 'function') {
    callbacks.dateClick = options.dateClick
  }

  // Handle datesSet callback (for month changes)
  if (options.datesSet && typeof options.datesSet === 'string') {
    try {
      callbacks.datesSet = new Function('dateInfo', options.datesSet)
    } catch (e) {
      console.warn('Invalid datesSet callback:', e)
    }
  } else if (typeof options.datesSet === 'function') {
    callbacks.datesSet = options.datesSet
  }

  return callbacks
}

/**
 * Initialize a single static calendar
 * @param {HTMLElement} element - The calendar container element
 */
export function initStaticCalendar(element) {
  const events = parseJSON(element.dataset.events, [])
  const options = parseJSON(element.dataset.options, {})

  const view = options.view || "dayGridMonth"
  const plugins = options.plugins || pluginsForView(view)

  // Parse string callbacks to functions
  const callbacks = parseCallbacks(options)

  // Create calendar options in the same format as the LiveView hook
  const calendarOptions = {
    view: view,
    events: events,
    ...options,
    ...callbacks
  }

  // Use the same createCalendar signature as the LiveView hook
  const calendar = createCalendar(element, plugins, calendarOptions)

  // Store the calendar instance on the element for later cleanup
  element._calendarInstance = calendar

  return calendar
}/**
 * Initialize all static calendars on the page
 * Looks for elements with class 'static-calendar'
 */
export function initStaticCalendars() {
  const calendars = document.querySelectorAll('.static-calendar')
  const instances = []

  calendars.forEach(element => {
    // Skip if already initialized
    if (element._calendarInstance) return

    try {
      const calendar = initStaticCalendar(element)
      instances.push(calendar)
    } catch (error) {
      console.error('Failed to initialize calendar:', error, element)
    }
  })

  return instances
}

/**
 * Destroy a static calendar
 * @param {HTMLElement} element - The calendar container element
 */
export function destroyStaticCalendar(element) {
  if (element._calendarInstance) {
    destroyCalendar(element._calendarInstance)
    element._calendarInstance = null
  }
}

/**
 * Update events for a static calendar
 * @param {HTMLElement} element - The calendar container element
 * @param {Array} events - New events array
 */
export function updateStaticCalendarEvents(element, events) {
  if (element._calendarInstance) {
    element._calendarInstance.setOption('events', events)
  }
}

// Auto-initialize calendars when DOM is ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initStaticCalendars)
}

// Export for manual initialization
export default {
  initStaticCalendar,
  initStaticCalendars,
  destroyStaticCalendar,
  updateStaticCalendarEvents
}
