# Security Guidelines for Static Calendar Components

This document outlines the security measures implemented in the static calendar component to prevent code injection vulnerabilities.

## Security Principles

### ❌ **PROHIBITED: Complete Function Strings**

**Never** use complete function declarations in callback options:

```elixir
# 🚨 DANGEROUS - Code injection vulnerability
<.static_calendar
  id="calendar"
  events={@events}
  options={%{
    eventClick: "function(info) { eval('malicious code'); }"
  }}
/>
```

This approach is **completely blocked** in the current implementation to prevent JavaScript code injection attacks.

## ✅ **Approved Callback Formats**

### 1. Global Function References (Recommended)

**Safest approach** - Define functions in separate JavaScript files:

```javascript
// In your app.js
window.MyApp = {
  Calendar: {
    handleEventClick(info) {
      console.log('Safe event handling:', info.event.title);
    }
  }
};
```

```elixir
# In your Elixir template
<.static_calendar
  id="calendar"
  events={@events}
  options={%{
    eventClick: "MyApp.Calendar.handleEventClick"
  }}
/>
```

### 2. Simple Function Body Strings (Limited)

For very simple cases only, with strict security restrictions:

```elixir
# ✅ SAFE - Simple expression, under 200 chars
<.static_calendar
  id="calendar"
  events={@events}
  options={%{
    eventClick: "console.log('Event:', info.event.title)"
  }}
/>
```

## 🛡️ **Security Measures Implemented**

### JavaScript-Side Protection

1. **Global references only resolve functions**:
   - Each part of `"MyApp.Calendar.onClick"` must be a valid JavaScript identifier
   - `__proto__`, `prototype` and `constructor` are rejected
   - The resolved value must be a function, otherwise the callback is dropped

2. **Short function bodies (static calendar only)**:
   - Rejected when they contain `function`, `=>`, `eval`, `setTimeout`, `setInterval`,
     `import`, `constructor`, `__proto__` or `prototype`
   - Limited to 200 characters
   - The LiveView calendar (`<.calendar>`) never compiles strings: it only accepts global
     function references

3. **Unresolved callbacks are removed**:
   - EventCalendar never receives a string where it expects a function
   - Violations are logged to the browser console

The keyword filter is a guard rail, not a sandbox: a short body is still JavaScript running in
your page. Treat callback strings as code, hardcode them in your templates and never build them
from user input.

### Content Security Policy

Short function bodies are compiled with `new Function`, which requires `'unsafe-eval'` in a
`script-src` CSP. Global function references work with a strict CSP.

### Example Security Blocks

```javascript
// These are automatically blocked by the security system:

"eval('alert(1)')"                    // ❌ Contains 'eval'
"setTimeout(() => hack(), 1000)"      // ❌ Contains 'setTimeout' and '=>'
"function() { return 'blocked'; }"    // ❌ Contains 'function'
"new Function('return alert(1)')()"   // ❌ Contains 'function'
"a".repeat(300)                       // ❌ Exceeds 200 char limit
```

## 🎯 **Best Practices**

### ✅ **DO:**

1. **Use Global Function References**:
   ```elixir
   options: %{eventClick: "MyApp.handleEvent"}
   ```

2. **Keep JavaScript in .js Files**:
   ```javascript
   // calendar-handlers.js
   window.CalendarHandlers = {
     onEventClick(info) { /* complex logic here */ }
   };
   ```

3. **Validate User Input**:
   ```elixir
   # In your controller/context
   def build_calendar_options(user_preferences) do
     %{
       view: sanitize_view(user_preferences.view),
       eventClick: "MyApp.handleEvent"  # Always hardcoded, never from user input
     }
   end
   ```

### ❌ **DON'T:**

1. **Never Pass User Input to Callbacks**:
   ```elixir
   # 🚨 DANGEROUS - User input could contain malicious code
   options: %{eventClick: user_provided_callback}
   ```

2. **Don't Use Complex Strings**:
   ```elixir
   # 🚨 BAD - Complex logic should be in JS files
   options: %{eventClick: "if(confirm('Delete?')){fetch('/delete/'+info.event.id)}"}
   ```

3. **Don't Bypass Security**:
   ```elixir
   # 🚨 DON'T try to work around the security measures
   # Use proper global function references instead
   ```

## 🔍 **Security Testing**

The library includes comprehensive security tests:

```elixir
# Security measures are tested to ensure they work
test "rejects dangerous function strings for security" do
  # Verifies that dangerous keywords are rejected
  # Confirms length limits are enforced
  # Validates function name restrictions
end
```

## 📋 **Migration Guide**

If you have existing code using function strings, migrate as follows:

### Before (Insecure):
```elixir
<.static_calendar
  options={%{
    eventClick: "function(info) { showModal(info.event); }"
  }}
/>
```

### After (Secure):

1. **Move to JavaScript file**:
```javascript
window.MyCalendar = {
  showEventModal(info) {
    showModal(info.event);
  }
};
```

2. **Reference by name**:
```elixir
<.static_calendar
  options={%{
    eventClick: "MyCalendar.showEventModal"
  }}
/>
```

## 🆘 **Reporting Security Issues**

If you discover a security vulnerability in the calendar component:

1. **Do NOT** open a public issue
2. Contact the maintainers directly
3. Provide detailed reproduction steps
4. Allow time for patching before disclosure

## 📚 **Additional Resources**

- [OWASP JavaScript Security](https://owasp.org/www-community/attacks/DOM_Based_XSS)
- [Phoenix Security Guidelines](https://hexdocs.pm/phoenix/security.html)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

Remember: **Security is everyone's responsibility**. Always prefer explicit, separated JavaScript functions over inline string-based code.
