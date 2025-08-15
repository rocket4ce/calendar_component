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

1. **Dangerous Keyword Detection**:
   - `function`, `eval`, `setTimeout`, `setInterval`
   - `new Function`, `constructor`, `__proto__`, `prototype`

2. **Content Length Limits**:
   - Function body strings limited to 200 characters
   - Prevents complex malicious code injection

3. **Function Name Validation**:
   - Global function references use regex validation
   - Only allows valid JavaScript identifier names

4. **Error Logging**:
   - All security violations are logged to console
   - Clear error messages for debugging

### Example Security Blocks

```javascript
// These are automatically blocked by the security system:

"eval('alert(1)')"                    // ❌ Contains 'eval'
"setTimeout(() => hack(), 1000)"      // ❌ Contains 'setTimeout'
"function() { return 'blocked'; }"    // ❌ Contains 'function'
"new Function('return alert(1)')()"   // ❌ Contains 'new Function'
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
