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
import ResourceTimeGrid from "@event-calendar/resource-time-grid"
import ResourceTimeline from "@event-calendar/resource-timeline"
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
  const view = options.view || "dayGridMonth"
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
  const view = options.view || "timeGridWeek"
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

// Convert string functions to actual functions
function parseCallbacks(options) {
  const callbacks = {}

  // Helper function to parse a callback string
  function parseCallback(callbackString, paramName) {
    if (!callbackString || typeof callbackString !== 'string') {
      return null
    }

    try {
      // Clean the string and extract function body
      let functionBody = callbackString.trim()

      // If it's a complete function declaration, extract the body
      if (functionBody.startsWith('function')) {
        // Match function(params) { body } and extract body
        const match = functionBody.match(/function\s*\([^)]*\)\s*\{(.*)\}$/s)
        if (match) {
          functionBody = match[1]
        } else {
          console.warn(`Invalid function format: ${callbackString}`)
          return null
        }
      }

      // Create function with the body
      return new Function(paramName, functionBody)
    } catch (e) {
      console.warn(`Invalid ${paramName} callback:`, e, 'String was:', callbackString)
      return null
    }
  }

  // Handle eventClick callback
  if (options.eventClick && typeof options.eventClick === 'string') {
    const callback = parseCallback(options.eventClick, 'info')
    if (callback) callbacks.eventClick = callback
  } else if (typeof options.eventClick === 'function') {
    callbacks.eventClick = options.eventClick
  }

  // Handle dateClick callback
  if (options.dateClick && typeof options.dateClick === 'string') {
    const callback = parseCallback(options.dateClick, 'info')
    if (callback) callbacks.dateClick = callback
  } else if (typeof options.dateClick === 'function') {
    callbacks.dateClick = options.dateClick
  }

  // Handle datesSet callback (for month changes)
  if (options.datesSet && typeof options.datesSet === 'string') {
    const callback = parseCallback(options.datesSet, 'dateInfo')
    if (callback) callbacks.datesSet = callback
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
  const rawEvents = parseJSON(element.dataset.events, [])
  const options = parseJSON(element.dataset.options, {})

  const view = options.view || "dayGridMonth"
  const plugins = options.plugins || getAllPluginsFromOptions(options)

  // Validate events based on view type and resources
  const events = validateEventsForResources(rawEvents, options)

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
