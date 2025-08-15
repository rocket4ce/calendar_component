# EventCalendar Header Toolbar Button Grouping

## Overview

EventCalendar's `headerToolbar` and `footerToolbar` options use a specific syntax for grouping buttons. Understanding this syntax is crucial for creating properly organized toolbar layouts.

## Grouping Syntax Rules

### 1. Comma-Separated Values = Grouped Buttons (No Visual Separation)

When buttons are separated by commas, they appear **grouped together** without visual separation:

```elixir
%{
  headerToolbar: %{
    right: "dayGridMonth,timeGridWeek,timeGridDay"
  }
}
```

**Visual Result:**
```
┌─────────┬──────┬─────┐
│ Month   │ Week │ Day │
└─────────┴──────┴─────┘
```
Buttons appear connected as a single group.

### 2. Space-Separated Values = Separate Button Groups (With Visual Separation)

When button groups are separated by spaces, they appear as **distinct groups** with visual separation:

```elixir
%{
  headerToolbar: %{
    right: "dayGridMonth,timeGridWeek timeGridDay,listWeek"
  }
}
```

**Visual Result:**
```
┌─────────┬──────┐    ┌─────┬──────┐
│ Month   │ Week │    │ Day │ List │
└─────────┴──────┘    └─────┴──────┘
     Group 1              Group 2
```
Two separate groups with visual spacing between them.

## Common Patterns

### Basic View Switching
```elixir
headerToolbar: %{
  left: "prev,next today",      # Navigation buttons + today button
  center: "title",              # Calendar title
  right: "dayGridMonth,timeGridWeek,timeGridDay"  # View buttons grouped
}
```

### With Resource Views
```elixir
headerToolbar: %{
  left: "prev,next today",
  center: "title",
  right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek resourceTimeGridWeek,resourceTimelineWeek"
}
```
This creates two groups:
- Group 1: `dayGridMonth,timeGridWeek,timeGridDay,listWeek`
- Group 2: `resourceTimeGridWeek,resourceTimelineWeek`

### Complex Grouping
```elixir
headerToolbar: %{
  left: "prev,next today customButton",
  center: "title",
  right: "month,agendaWeek agendaDay,list print,export"
}
```

This creates multiple groups:
- Left: `[prev][next]` | `[today]` | `[customButton]`
- Right: `[month][agendaWeek]` | `[agendaDay][list]` | `[print][export]`

## Examples in Practice

### LiveView Component
```elixir
def render(assigns) do
  ~H"""
  <.calendar
    id="grouped-calendar"
    events={@events}
    options={%{
      headerToolbar: %{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay listWeek,resourceTimeGridWeek"
      }
    }}
  />
  """
end
```

### Static Calendar
```elixir
<.static_calendar
  id="static-grouped-calendar"
  events={@events}
  options={%{
    headerToolbar: %{
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay listWeek,resourceTimeGridWeek"
    }
  }}
/>
```

### Footer Toolbar
```elixir
options: %{
  headerToolbar: %{
    left: "prev,next",
    center: "title",
    right: "dayGridMonth,timeGridWeek"
  },
  footerToolbar: %{
    left: "today customButton",
    right: "print,export pdf,excel"
  }
}
```

## Hiding Sections

You can hide toolbar sections by setting them to `false` or empty string:

```elixir
headerToolbar: %{
  left: false,              # Hide left section entirely
  center: "title",          # Show only title
  right: ""                 # Hide right section (empty string)
}
```

## Custom Buttons

You can also add custom buttons to any group:

```elixir
headerToolbar: %{
  left: "prev,next today customRefresh",
  center: "title",
  right: "dayGridMonth,timeGridWeek customExport,customPrint"
}
```

The calendar component will pass through custom button names - you'll need to handle them in your EventCalendar configuration.

## Visual Examples

### Single Group
```
right: "dayGridMonth,timeGridWeek,timeGridDay"
```
Renders as: `[Month][Week][Day]`

### Two Groups
```
right: "dayGridMonth,timeGridWeek timeGridDay,listWeek"
```
Renders as: `[Month][Week] | [Day][List]`

### Three Groups
```
right: "dayGridMonth,timeGridWeek timeGridDay listWeek,resourceTimeGridWeek"
```
Renders as: `[Month][Week] | [Day] | [List][Resource Week]`

## Testing Button Grouping

The library includes comprehensive tests for button grouping patterns. Run them with:

```bash
mix test test/header_toolbar_test.exs
```

This test suite covers:
- Single buttons without grouping
- Comma-grouped buttons (grouped together)
- Space-separated button groups (with visual separation)
- Complex patterns with resources
- Mixed grouping patterns
- Footer toolbar grouping
- Static calendar grouping
- Edge cases (empty sections, hidden sections)

## Advanced Visual Examples

### Example 1: Standard Layout
```elixir
%{
  headerToolbar: %{
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay"
  }
}
```

**Visual Result:**
```
┌──────┬──────┐   ┌───────┐                    ┌───────┬──────┬─────┐
│ Prev │ Next │   │ Today │      TITLE         │ Month │ Week │ Day │
└──────┴──────┘   └───────┘                    └───────┴──────┴─────┘
   Group 1          Group 2                         Group 3
```

### Example 2: Resource Views with Separation
```elixir
%{
  headerToolbar: %{
    left: "prev,next",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay resourceTimeGridWeek,resourceTimelineWeek"
  }
}
```

**Visual Result:**
```
┌──────┬──────┐                                 ┌───────┬──────┬─────┐    ┌────────┬──────────┐
│ Prev │ Next │         TITLE                   │ Month │ Week │ Day │    │ R-Week │ Timeline │
└──────┴──────┘                                 └───────┴──────┴─────┘    └────────┴──────────┘
   Group 1                                           Standard Views           Resource Views
```

### Example 3: Complex Multi-Group Layout
```elixir
%{
  headerToolbar: %{
    left: "prev,next today customButton",
    center: "title",
    right: "month,agendaWeek agendaDay,listMonth print,export"
  }
}
```

**Visual Result:**
```
┌──────┬──────┐ ┌───────┐ ┌────────┐    TITLE    ┌─────┬──────┐ ┌─────┬──────┐ ┌─────┬──────┐
│ Prev │ Next │ │ Today │ │ Custom │             │Month│ Week │ │ Day │ List │ │Print│Export│
└──────┴──────┘ └───────┘ └────────┘             └─────┴──────┘ └─────┴──────┘ └─────┴──────┘
   Group 1        Group 2    Group 3                Group 4        Group 5       Group 6
```
