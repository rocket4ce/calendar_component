// node_modules/esm-env/false.js
var false_default = false;

// node_modules/svelte/src/internal/shared/utils.js
var is_array = Array.isArray;
var index_of = Array.prototype.indexOf;
var includes = Array.prototype.includes;
var array_from = Array.from;
var object_keys = Object.keys;
var define_property = Object.defineProperty;
var get_descriptor = Object.getOwnPropertyDescriptor;
var get_descriptors = Object.getOwnPropertyDescriptors;
var object_prototype = Object.prototype;
var array_prototype = Array.prototype;
var get_prototype_of = Object.getPrototypeOf;
var is_extensible = Object.isExtensible;
var noop = () => {
};
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}
function deferred() {
  var resolve;
  var reject;
  var promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

// node_modules/svelte/src/internal/client/constants.js
var DERIVED = 1 << 1;
var EFFECT = 1 << 2;
var RENDER_EFFECT = 1 << 3;
var MANAGED_EFFECT = 1 << 24;
var BLOCK_EFFECT = 1 << 4;
var BRANCH_EFFECT = 1 << 5;
var ROOT_EFFECT = 1 << 6;
var BOUNDARY_EFFECT = 1 << 7;
var PAUSED = 1 << 8;
var CONNECTED = 1 << 9;
var CLEAN = 1 << 10;
var DIRTY = 1 << 11;
var MAYBE_DIRTY = 1 << 12;
var INERT = 1 << 13;
var DESTROYED = 1 << 14;
var REACTION_RAN = 1 << 15;
var DESTROYING = 1 << 25;
var EFFECT_TRANSPARENT = 1 << 16;
var EAGER_EFFECT = 1 << 17;
var HEAD_EFFECT = 1 << 18;
var EFFECT_PRESERVED = 1 << 19;
var USER_EFFECT = 1 << 20;
var EFFECT_OFFSCREEN = 1 << 25;
var REACTION_IS_UPDATING = 1 << 21;
var ASYNC = 1 << 22;
var ERROR_VALUE = 1 << 23;
var STATE_SYMBOL = Symbol("$state");
var COMPONENT_SYMBOL = Symbol("component");
var LEGACY_PROPS = Symbol("legacy props");
var LOADING_ATTR_SYMBOL = Symbol("");
var PROXY_PATH_SYMBOL = Symbol("proxy path");
var ATTRIBUTES_CACHE = Symbol("attributes");
var CLASS_CACHE = Symbol("class");
var STYLE_CACHE = Symbol("style");
var TEXT_CACHE = Symbol("text");
var FORM_RESET_HANDLER = Symbol("form reset");
var HMR_ANCHOR = Symbol("hmr anchor");
var STALE_REACTION = new class StaleReactionError extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
var IS_XHTML = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

// node_modules/svelte/src/constants.js
var EACH_ITEM_REACTIVE = 1;
var EACH_INDEX_REACTIVE = 1 << 1;
var EACH_IS_CONTROLLED = 1 << 2;
var EACH_IS_ANIMATED = 1 << 3;
var EACH_ITEM_IMMUTABLE = 1 << 4;
var PROPS_IS_IMMUTABLE = 1;
var PROPS_IS_RUNES = 1 << 1;
var PROPS_IS_UPDATED = 1 << 2;
var PROPS_IS_BINDABLE = 1 << 3;
var PROPS_IS_LAZY_INITIAL = 1 << 4;
var TRANSITION_OUT = 1 << 1;
var TRANSITION_GLOBAL = 1 << 2;
var TEMPLATE_FRAGMENT = 1;
var TEMPLATE_USE_IMPORT_NODE = 1 << 1;
var TEMPLATE_USE_SVG = 1 << 2;
var TEMPLATE_USE_MATHML = 1 << 3;
var HYDRATION_START = "[";
var HYDRATION_START_ELSE = "[!";
var HYDRATION_START_FAILED = "[?";
var HYDRATION_END = "]";
var HYDRATION_ERROR = {};
var ELEMENT_PRESERVE_ATTRIBUTE_CASE = 1 << 1;
var ELEMENT_IS_INPUT = 1 << 2;
var UNINITIALIZED = Symbol("uninitialized");
var FILENAME = Symbol("filename");
var HMR = Symbol("hmr");
var NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";

// node_modules/svelte/src/internal/client/warnings.js
var bold = "font-weight: bold";
var normal = "font-weight: normal";
function await_reactivity_loss(name) {
  if (false_default) {
    console.warn(`%c[svelte] await_reactivity_loss
%cDetected reactivity loss when reading \`${name}\`. This happens when state is read in an async function after an earlier \`await\`
https://svelte.dev/e/await_reactivity_loss`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/await_reactivity_loss`);
  }
}
function await_waterfall(name, location) {
  if (false_default) {
    console.warn(`%c[svelte] await_waterfall
%cAn async derived, \`${name}\` (${location}) was not read immediately after it resolved. This often indicates an unnecessary waterfall, which can slow down your app
https://svelte.dev/e/await_waterfall`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/await_waterfall`);
  }
}
function derived_inert() {
  if (false_default) {
    console.warn(`%c[svelte] derived_inert
%cReading a derived belonging to a now-destroyed effect may result in stale values
https://svelte.dev/e/derived_inert`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/derived_inert`);
  }
}
function hydration_attribute_changed(attribute, html2, value) {
  if (false_default) {
    console.warn(`%c[svelte] hydration_attribute_changed
%cThe \`${attribute}\` attribute on \`${html2}\` changed its value between server and client renders. The client value, \`${value}\`, will be ignored in favour of the server value
https://svelte.dev/e/hydration_attribute_changed`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/hydration_attribute_changed`);
  }
}
function hydration_mismatch(location) {
  if (false_default) {
    console.warn(
      `%c[svelte] hydration_mismatch
%c${location ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${location}` : "Hydration failed because the initial UI does not match what was rendered on the server"}
https://svelte.dev/e/hydration_mismatch`,
      bold,
      normal
    );
  } else {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
function lifecycle_double_unmount() {
  if (false_default) {
    console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/lifecycle_double_unmount`);
  }
}
function state_proxy_equality_mismatch(operator) {
  if (false_default) {
    console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/state_proxy_equality_mismatch`);
  }
}
function svelte_boundary_reset_noop() {
  if (false_default) {
    console.warn(`%c[svelte] svelte_boundary_reset_noop
%cA \`<svelte:boundary>\` \`reset\` function only resets the boundary the first time it is called
https://svelte.dev/e/svelte_boundary_reset_noop`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
  }
}

// node_modules/svelte/src/internal/client/dom/hydration.js
var hydrating = false;
function set_hydrating(value) {
  hydrating = value;
}
var hydrate_node;
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
function hydrate_next() {
  return set_hydrate_node(get_next_sibling(hydrate_node));
}
function reset(node) {
  if (!hydrating) return;
  if (get_next_sibling(hydrate_node) !== null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  hydrate_node = node;
}
function next(count = 1) {
  if (hydrating) {
    var i = count;
    var node = hydrate_node;
    while (i--) {
      node = /** @type {TemplateNode} */
      get_next_sibling(node);
    }
    hydrate_node = node;
  }
}
function skip_nodes(remove = true) {
  var depth = 0;
  var node = hydrate_node;
  while (true) {
    if (node.nodeType === COMMENT_NODE) {
      var data = (
        /** @type {Comment} */
        node.data
      );
      if (data === HYDRATION_END) {
        if (depth === 0) return node;
        depth -= 1;
      } else if (data === HYDRATION_START || data === HYDRATION_START_ELSE || // "[1", "[2", etc. for if blocks
      data[0] === "[" && !isNaN(Number(data.slice(1)))) {
        depth += 1;
      }
    }
    var next2 = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    if (remove) node.remove();
    node = next2;
  }
}
function read_hydration_instruction(node) {
  if (!node || node.nodeType !== COMMENT_NODE) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return (
    /** @type {Comment} */
    node.data
  );
}

// node_modules/svelte/src/internal/client/reactivity/equality.js
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}

// node_modules/svelte/src/internal/shared/errors.js
function invariant_violation(message) {
  if (false_default) {
    const error = new Error(`invariant_violation
An invariant violation occurred, meaning Svelte's internal assumptions were flawed. This is a bug in Svelte, not your app \u2014 please open an issue at https://github.com/sveltejs/svelte, citing the following message: "${message}"
https://svelte.dev/e/invariant_violation`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/invariant_violation`);
  }
}
function lifecycle_outside_component(name) {
  if (false_default) {
    const error = new Error(`lifecycle_outside_component
\`${name}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
function set_context_after_init() {
  if (false_default) {
    const error = new Error(`set_context_after_init
\`setContext\` must be called when a component first initializes, not in a subsequent effect or after an \`await\` expression
https://svelte.dev/e/set_context_after_init`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/set_context_after_init`);
  }
}

// node_modules/svelte/src/internal/client/errors.js
function async_derived_orphan() {
  if (false_default) {
    const error = new Error(`async_derived_orphan
Cannot create a \`$derived(...)\` with an \`await\` expression outside of an effect tree
https://svelte.dev/e/async_derived_orphan`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/async_derived_orphan`);
  }
}
function derived_references_self() {
  if (false_default) {
    const error = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/derived_references_self`);
  }
}
function each_key_duplicate(a, b, value) {
  if (false_default) {
    const error = new Error(`each_key_duplicate
${value ? `Keyed each block has duplicate key \`${value}\` at indexes ${a} and ${b}` : `Keyed each block has duplicate key at indexes ${a} and ${b}`}
https://svelte.dev/e/each_key_duplicate`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/each_key_duplicate`);
  }
}
function each_key_volatile(index2, a, b) {
  if (false_default) {
    const error = new Error(`each_key_volatile
Keyed each block has key that is not idempotent \u2014 the key for item at index ${index2} was \`${a}\` but is now \`${b}\`. Keys must be the same each time for a given item
https://svelte.dev/e/each_key_volatile`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/each_key_volatile`);
  }
}
function effect_in_teardown(rune) {
  if (false_default) {
    const error = new Error(`effect_in_teardown
\`${rune}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_in_teardown`);
  }
}
function effect_in_unowned_derived() {
  if (false_default) {
    const error = new Error(`effect_in_unowned_derived
Effect cannot be created inside a \`$derived\` value that was not itself created inside an effect
https://svelte.dev/e/effect_in_unowned_derived`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
  }
}
function effect_orphan(rune) {
  if (false_default) {
    const error = new Error(`effect_orphan
\`${rune}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_orphan`);
  }
}
function effect_update_depth_exceeded() {
  if (false_default) {
    const error = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function get_abort_signal_outside_reaction() {
  if (false_default) {
    const error = new Error(`get_abort_signal_outside_reaction
\`getAbortSignal()\` can only be called inside an effect or derived
https://svelte.dev/e/get_abort_signal_outside_reaction`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/get_abort_signal_outside_reaction`);
  }
}
function hydration_failed() {
  if (false_default) {
    const error = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/hydration_failed`);
  }
}
function invalid_snippet() {
  if (false_default) {
    const error = new Error(`invalid_snippet
Could not \`{@render}\` snippet due to the expression being \`null\` or \`undefined\`. Consider using optional chaining \`{@render snippet?.()}\`
https://svelte.dev/e/invalid_snippet`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/invalid_snippet`);
  }
}
function props_invalid_value(key2) {
  if (false_default) {
    const error = new Error(`props_invalid_value
Cannot do \`bind:${key2}={undefined}\` when \`${key2}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/props_invalid_value`);
  }
}
function props_rest_readonly(property) {
  if (false_default) {
    const error = new Error(`props_rest_readonly
Rest element properties of \`$props()\` such as \`${property}\` are readonly
https://svelte.dev/e/props_rest_readonly`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/props_rest_readonly`);
  }
}
function rune_outside_svelte(rune) {
  if (false_default) {
    const error = new Error(`rune_outside_svelte
The \`${rune}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/rune_outside_svelte`);
  }
}
function state_descriptors_fixed() {
  if (false_default) {
    const error = new Error(`state_descriptors_fixed
Property descriptors defined on \`$state\` objects must contain \`value\` and always be \`enumerable\`, \`configurable\` and \`writable\`.
https://svelte.dev/e/state_descriptors_fixed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
  }
}
function state_prototype_fixed() {
  if (false_default) {
    const error = new Error(`state_prototype_fixed
Cannot set prototype of \`$state\` object
https://svelte.dev/e/state_prototype_fixed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
  }
}
function state_unsafe_mutation() {
  if (false_default) {
    const error = new Error(`state_unsafe_mutation
Updating state inside \`$derived(...)\`, \`$inspect(...)\` or a template expression is forbidden. If the value should not be reactive, declare it without \`$state\`
https://svelte.dev/e/state_unsafe_mutation`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}
function svelte_boundary_reset_onerror() {
  if (false_default) {
    const error = new Error(`svelte_boundary_reset_onerror
A \`<svelte:boundary>\` \`reset\` function cannot be called while an error is still being handled
https://svelte.dev/e/svelte_boundary_reset_onerror`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
  }
}

// node_modules/svelte/src/internal/flags/index.js
var async_mode_flag = false;
var legacy_mode_flag = false;
var tracing_mode_flag = false;

// node_modules/svelte/src/internal/client/dev/tracing.js
var tracing_expressions = null;
function tag(source2, label2) {
  source2.label = label2;
  tag_proxy(source2.v, label2);
  return source2;
}
function tag_proxy(value, label2) {
  value?.[PROXY_PATH_SYMBOL]?.(label2);
  return value;
}
function label(value) {
  if (typeof value === "symbol") return `Symbol(${value.description})`;
  if (typeof value === "function") return "<function>";
  if (typeof value === "object" && value) return "<object>";
  return String(value);
}

// node_modules/svelte/src/internal/shared/dev.js
function get_error(label2) {
  const error = new Error();
  const stack2 = get_stack();
  if (stack2.length === 0) {
    return null;
  }
  stack2.unshift("\n");
  define_property(error, "stack", {
    value: stack2.join("\n")
  });
  define_property(error, "name", {
    value: label2
  });
  return (
    /** @type {Error & { stack: string }} */
    error
  );
}
function get_stack() {
  const limit2 = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;
  const stack2 = new Error().stack;
  Error.stackTraceLimit = limit2;
  if (!stack2) return [];
  const lines = stack2.split("\n");
  const new_lines = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const posixified = line.replaceAll("\\", "/");
    if (line.trim() === "Error") {
      continue;
    }
    if (line.includes("validate_each_keys")) {
      return [];
    }
    if (posixified.includes("svelte/src/internal") || posixified.includes("node_modules/.vite")) {
      continue;
    }
    new_lines.push(line);
  }
  return new_lines;
}
function invariant(condition, message) {
  if (!false_default) {
    throw new Error("invariant(...) was not guarded by if (DEV)");
  }
  if (!condition) invariant_violation(message);
}

// node_modules/svelte/src/internal/shared/context.js
function get_parent_context(context) {
  let parent = context.p;
  while (parent !== null && parent.c === null) {
    parent = parent.p;
  }
  return parent?.c ?? null;
}
function get_or_init_context_map(context, name) {
  if (context === null) {
    lifecycle_outside_component(name);
  }
  return context.c ??= new Map(get_parent_context(context) || void 0);
}

// node_modules/svelte/src/internal/client/context.js
var component_context = null;
function set_component_context(context) {
  component_context = context;
}
var dev_stack = null;
function set_dev_stack(stack2) {
  dev_stack = stack2;
}
var dev_current_component_function = null;
function set_dev_current_component_function(fn) {
  dev_current_component_function = fn;
}
function getContext(key2) {
  const context_map = get_or_init_context_map(component_context, "getContext");
  const result = (
    /** @type {T} */
    context_map.get(key2)
  );
  return result;
}
function setContext(key2, context) {
  const context_map = get_or_init_context_map(component_context, "setContext");
  if (async_mode_flag) {
    var flags2 = (
      /** @type {Effect} */
      active_effect.f
    );
    var valid = !active_reaction && (flags2 & BRANCH_EFFECT) !== 0 && // pop() runs synchronously, so this indicates we're setting context after an await
    !/** @type {ComponentContext} */
    component_context.i;
    if (!valid) {
      set_context_after_init();
    }
  }
  context_map.set(key2, context);
  return context;
}
function push(props, runes = false, fn) {
  component_context = {
    p: component_context,
    i: false,
    c: null,
    e: null,
    s: props,
    x: null,
    r: (
      /** @type {Effect} */
      active_effect
    ),
    l: legacy_mode_flag && !runes ? { s: null, u: null, $: [] } : null
  };
  if (false_default) {
    component_context.function = fn;
    dev_current_component_function = fn;
  }
}
function pop(component2) {
  var context = (
    /** @type {ComponentContext} */
    component_context
  );
  var effects = context.e;
  if (effects !== null) {
    context.e = null;
    for (var fn of effects) {
      create_user_effect(fn);
    }
  }
  if (component2 !== void 0) {
    context.x = component2;
  }
  context.i = true;
  component_context = context.p;
  if (false_default) {
    dev_current_component_function = component_context?.function ?? null;
  }
  return mark_as_component(component2);
}
function mark_as_component(component2 = {}) {
  define_property(component2, COMPONENT_SYMBOL, { value: true });
  return component2;
}
function is_runes() {
  return !legacy_mode_flag || component_context !== null && component_context.l === null;
}

// node_modules/svelte/src/internal/client/dom/task.js
var micro_tasks = [];
function run_micro_tasks() {
  var tasks = micro_tasks;
  micro_tasks = [];
  run_all(tasks);
}
function queue_micro_task(fn) {
  if (micro_tasks.length === 0 && !is_flushing_sync) {
    var tasks = micro_tasks;
    queueMicrotask(() => {
      if (tasks === micro_tasks) run_micro_tasks();
    });
  }
  micro_tasks.push(fn);
}
function flush_tasks() {
  while (micro_tasks.length > 0) {
    run_micro_tasks();
  }
}

// node_modules/svelte/src/internal/client/reactivity/status.js
var STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}
function update_derived_status(derived2) {
  if ((derived2.f & CONNECTED) !== 0 || derived2.deps === null) {
    set_signal_status(derived2, CLEAN);
  } else {
    set_signal_status(derived2, MAYBE_DIRTY);
  }
}

// node_modules/svelte/src/internal/client/reactivity/utils.js
function defer_effect(effect2, dirty_effects, maybe_dirty_effects) {
  if ((effect2.f & DIRTY) !== 0) {
    dirty_effects.add(effect2);
  } else if ((effect2.f & MAYBE_DIRTY) !== 0) {
    maybe_dirty_effects.add(effect2);
  }
  set_signal_status(effect2, CLEAN);
}

// node_modules/svelte/src/internal/client/dom/elements/misc.js
function autofocus(dom, value) {
  if (value) {
    const body = document.body;
    dom.autofocus = true;
    queue_micro_task(() => {
      if (document.activeElement === body) {
        dom.focus();
      }
    });
  }
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function without_reactive_context(fn) {
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    return fn();
  } finally {
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}

// node_modules/svelte/src/internal/client/reactivity/async.js
function flatten(blockers, sync, async2, fn) {
  const d = is_runes() ? derived : derived_safe_equal;
  var pending2 = blockers.filter((b) => !b.settled);
  var deriveds = sync.map(d);
  if (false_default) {
    deriveds.forEach((d2, i) => {
      d2.label = sync[i].toString().replace("() => ", "").replaceAll("$.eager(() => ", "$state.eager(").replace(/\$\.get\((.+?)\)/g, (_, id) => id);
    });
  }
  if (async2.length === 0 && pending2.length === 0) {
    fn(deriveds);
    return;
  }
  var parent = (
    /** @type {Effect} */
    active_effect
  );
  var restore = capture();
  var blocker_promise = pending2.length === 1 ? pending2[0].promise : pending2.length > 1 ? Promise.all(pending2.map((b) => b.promise)) : null;
  function finish(async3) {
    if ((parent.f & DESTROYED) !== 0) {
      return;
    }
    restore();
    try {
      fn([...deriveds, ...async3]);
    } catch (error) {
      invoke_error_boundary(error, parent);
    }
    unset_context();
  }
  var decrement_pending = increment_pending();
  if (async2.length === 0) {
    blocker_promise.then(() => finish([])).finally(decrement_pending);
    return;
  }
  function run4() {
    Promise.all(async2.map((expression) => async_derived(expression))).then(finish).catch((error) => invoke_error_boundary(error, parent)).finally(decrement_pending);
  }
  if (blocker_promise) {
    blocker_promise.then(() => {
      if ((parent.f & DESTROYED) !== 0) {
        decrement_pending();
        return;
      }
      restore();
      run4();
      unset_context();
    });
  } else {
    run4();
  }
}
function capture() {
  var previous_effect = (
    /** @type {Effect} */
    active_effect
  );
  var previous_reaction = active_reaction;
  var previous_component_context = component_context;
  var previous_batch2 = (
    /** @type {Batch} */
    current_batch
  );
  if (false_default) {
    var previous_dev_stack = dev_stack;
  }
  return function restore(activate_batch = true) {
    set_active_effect(previous_effect);
    set_active_reaction(previous_reaction);
    set_component_context(previous_component_context);
    if (activate_batch && (previous_effect.f & DESTROYED) === 0) {
      previous_batch2?.activate();
      previous_batch2?.apply();
    }
    if (false_default) {
      set_reactivity_loss_tracker(null);
      set_dev_stack(previous_dev_stack);
    }
  };
}
var restored = false;
function unset_context(deactivate_batch = true) {
  restored = false;
  set_active_effect(null);
  set_active_reaction(null);
  set_component_context(null);
  if (deactivate_batch) current_batch?.deactivate();
  if (false_default) {
    set_reactivity_loss_tracker(null);
    set_dev_stack(null);
  }
}
function increment_pending() {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  var boundary2 = effect2.b;
  var batch = (
    /** @type {Batch} */
    current_batch
  );
  var blocking = !!boundary2?.is_rendered();
  boundary2?.update_pending_count(1, batch);
  batch.increment(blocking, effect2);
  return () => {
    boundary2?.update_pending_count(-1, batch);
    batch.decrement(blocking, effect2);
  };
}

// node_modules/svelte/src/internal/client/reactivity/deriveds.js
var reactivity_loss_tracker = null;
function set_reactivity_loss_tracker(v) {
  reactivity_loss_tracker = v;
}
var recent_async_deriveds = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function derived(fn) {
  var flags2 = DERIVED | DIRTY;
  if (active_effect !== null) {
    active_effect.f |= EFFECT_PRESERVED;
  }
  const signal = {
    ctx: component_context,
    deps: null,
    effects: null,
    equals,
    f: flags2,
    fn,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      UNINITIALIZED
    ),
    wv: 0,
    parent: active_effect,
    ac: null
  };
  if (false_default && tracing_mode_flag) {
    signal.created = get_error("created at");
  }
  return signal;
}
var OBSOLETE = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function async_derived(fn, label2, location) {
  let parent = (
    /** @type {Effect | null} */
    active_effect
  );
  if (parent === null) {
    async_derived_orphan();
  }
  var promise = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  );
  var signal = source(
    /** @type {V} */
    UNINITIALIZED
  );
  if (false_default) signal.label = label2 ?? fn.toString();
  var should_suspend = !active_reaction;
  var deferreds = /* @__PURE__ */ new Set();
  async_effect(() => {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    if (false_default) {
      reactivity_loss_tracker = { effect: effect2, effect_deps: /* @__PURE__ */ new Set(), warned: false };
    }
    var d = deferred();
    promise = d.promise;
    try {
      Promise.resolve(fn()).then(d.resolve, (e) => {
        if (e !== STALE_REACTION) d.reject(e);
      }).finally(unset_context);
    } catch (error) {
      d.reject(error);
      unset_context();
    }
    if (false_default) {
      if (reactivity_loss_tracker) {
        if (effect2.deps !== null) {
          for (let i = 0; i < skipped_deps; i += 1) {
            reactivity_loss_tracker.effect_deps.add(effect2.deps[i]);
          }
        }
        if (new_deps !== null) {
          for (let i = 0; i < new_deps.length; i += 1) {
            reactivity_loss_tracker.effect_deps.add(new_deps[i]);
          }
        }
      }
      reactivity_loss_tracker = null;
    }
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    if (should_suspend) {
      if ((effect2.f & REACTION_RAN) !== 0) {
        var decrement_pending = increment_pending();
      }
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        parent.b?.is_rendered()
      ) {
        batch.async_deriveds.get(effect2)?.reject(OBSOLETE);
      } else {
        for (const d2 of deferreds.values()) {
          d2.reject(OBSOLETE);
        }
      }
      deferreds.add(d);
      batch.async_deriveds.set(effect2, d);
    }
    const handler = (value, error = void 0) => {
      if (false_default) {
        reactivity_loss_tracker = null;
      }
      decrement_pending?.();
      deferreds.delete(d);
      if (error === OBSOLETE) return;
      batch.activate();
      if (error) {
        signal.f |= ERROR_VALUE;
        internal_set(signal, error);
      } else {
        if ((signal.f & ERROR_VALUE) !== 0) {
          signal.f ^= ERROR_VALUE;
        }
        if (false_default && location !== void 0 && !signal.equals(value)) {
          recent_async_deriveds.add(signal);
          setTimeout(() => {
            if (recent_async_deriveds.has(signal) && (effect2.f & DESTROYED) === 0) {
              await_waterfall(
                /** @type {string} */
                signal.label,
                location
              );
              recent_async_deriveds.delete(signal);
            }
          });
        }
        internal_set(signal, value);
      }
      batch.deactivate();
    };
    d.promise.then(handler, (e) => handler(null, e || "unknown"));
  });
  teardown(() => {
    for (const d of deferreds) {
      d.reject(OBSOLETE);
    }
  });
  if (false_default) {
    signal.f |= ASYNC;
  }
  return new Promise((fulfil) => {
    function next2(p) {
      function go() {
        if (p === promise) {
          fulfil(signal);
        } else {
          next2(promise);
        }
      }
      p.then(go, go);
    }
    next2(promise);
  });
}
// @__NO_SIDE_EFFECTS__
function user_derived(fn) {
  const d = /* @__PURE__ */ derived(fn);
  if (!async_mode_flag) push_reaction_value(d);
  return d;
}
// @__NO_SIDE_EFFECTS__
function derived_safe_equal(fn) {
  const signal = /* @__PURE__ */ derived(fn);
  signal.equals = safe_equals;
  return signal;
}
function destroy_derived_effects(derived2) {
  var effects = derived2.effects;
  if (effects !== null) {
    derived2.effects = null;
    for (var i = 0; i < effects.length; i += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i]
      );
    }
  }
}
var stack = [];
function execute_derived(derived2) {
  var value;
  var prev_active_effect = active_effect;
  var parent = derived2.parent;
  if (!is_destroying_effect && parent !== null && derived2.v !== UNINITIALIZED && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (parent.f & (DESTROYED | INERT)) !== 0) {
    derived_inert();
    return derived2.v;
  }
  set_active_effect(parent);
  if (false_default) {
    let prev_eager_effects = eager_effects;
    set_eager_effects(/* @__PURE__ */ new Set());
    try {
      if (includes.call(stack, derived2)) {
        derived_references_self();
      }
      stack.push(derived2);
      destroy_derived_effects(derived2);
      value = update_reaction(derived2);
    } finally {
      set_active_effect(prev_active_effect);
      set_eager_effects(prev_eager_effects);
      stack.pop();
    }
  } else {
    try {
      destroy_derived_effects(derived2);
      value = update_reaction(derived2);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived2) {
  var value = execute_derived(derived2);
  if (!derived2.equals(value)) {
    derived2.wv = increment_write_version();
    if (!current_batch?.is_fork || derived2.deps === null) {
      if (current_batch !== null) {
        current_batch.capture(derived2, value, true);
        previous_batch?.capture(derived2, value, true);
      } else {
        derived2.v = value;
      }
      if (derived2.deps === null) {
        set_signal_status(derived2, CLEAN);
        return;
      }
    }
  }
  if (is_destroying_effect) {
    return;
  }
  if (batch_values !== null) {
    if (effect_tracking() || current_batch?.is_fork) {
      batch_values.set(derived2, value);
    }
  } else {
    update_derived_status(derived2);
  }
}
function freeze_derived_effects(derived2) {
  if (derived2.effects === null) return;
  for (const e of derived2.effects) {
    if (e.teardown || e.ac) {
      e.teardown?.();
      if (e.ac !== null) {
        without_reactive_context(() => {
          e.ac.abort(STALE_REACTION);
          e.ac = null;
        });
      }
      if (e.fn !== null) e.teardown = noop;
      remove_reactions(e, 0);
      destroy_effect_children(e);
    }
  }
}
function unfreeze_derived_effects(derived2) {
  if (derived2.effects === null) return;
  for (const e of derived2.effects) {
    if (e.teardown && e.fn !== null) {
      update_effect(e);
    }
  }
}

// node_modules/svelte/src/internal/client/reactivity/batch.js
var first_batch = null;
var last_batch = null;
var current_batch = null;
var previous_batch = null;
var batch_values = null;
var last_scheduled_effect = null;
var is_flushing_sync = false;
var is_processing = false;
var collected_effects = null;
var legacy_updates = null;
var flush_count = 0;
var source_stacks = /* @__PURE__ */ new Set();
var uid = 1;
var Batch = class _Batch {
  id = uid++;
  /** True as soon as `#process` was called */
  #started = false;
  linked = true;
  /** @type {Batch | null} */
  #prev = null;
  /** @type {Batch | null} */
  #next = null;
  /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
  async_deriveds = /* @__PURE__ */ new Map();
  /**
   * The current values of any signals that are updated in this batch.
   * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Value, [any, boolean]>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Value, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<(batch: Batch) => void>}
   */
  #commit_callbacks = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #discard_callbacks = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #pending = 0;
  /**
   * Async effects that are currently in flight, _not_ inside a pending boundary
   * @type {Map<Effect, number>}
   */
  #blocking_pending = /* @__PURE__ */ new Map();
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #deferred = null;
  /**
   * Effects that were scheduled in this batch but not yet 'resolved' into the
   * root effects that need to be flushed. Resolving — the upwards traversal that
   * marks the path to each effect on the shared effect tree (see #resolve) — is
   * deferred until the batch is processed, so that the markers are created and
   * consumed within a single traversal. Scheduling into other batches (which can
   * happen concurrently, e.g. while a batch is committed) can therefore never
   * observe (and be confused by) this batch's markers.
   * May contain duplicates — deduplication happens during resolving
   * @type {Effect[]}
   */
  #scheduled = [];
  /**
   * Effects created while this batch was active.
   * @type {Effect[]}
   */
  #new_effects = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #dirty_effects = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #maybe_dirty_effects = /* @__PURE__ */ new Set();
  /**
   * A map of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`.
   * The value contains child effects that were dirty/maybe_dirty before being reset,
   * so they can be rescheduled if the branch survives.
   * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
   */
  #skipped_branches = /* @__PURE__ */ new Map();
  /**
   * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
   * @type {Set<Effect>}
   */
  #unskipped_branches = /* @__PURE__ */ new Set();
  is_fork = false;
  #decrement_queued = false;
  constructor() {
    if (last_batch === null) {
      first_batch = last_batch = this;
    } else {
      last_batch.#next = this;
      this.#prev = last_batch;
    }
    last_batch = this;
  }
  #is_deferred() {
    if (this.is_fork) return true;
    for (const effect2 of this.#blocking_pending.keys()) {
      var e = effect2;
      var skipped = false;
      while (e.parent !== null) {
        if (this.#skipped_branches.has(e)) {
          skipped = true;
          break;
        }
        e = e.parent;
      }
      if (!skipped) {
        return true;
      }
    }
    return false;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(effect2) {
    if (!this.#skipped_branches.has(effect2)) {
      this.#skipped_branches.set(effect2, { d: [], m: [] });
    }
    this.#unskipped_branches.delete(effect2);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(effect2, callback = (e) => this.schedule(e)) {
    var tracked = this.#skipped_branches.get(effect2);
    if (tracked) {
      this.#skipped_branches.delete(effect2);
      for (var e of tracked.d) {
        set_signal_status(e, DIRTY);
        callback(e);
      }
      for (e of tracked.m) {
        set_signal_status(e, MAYBE_DIRTY);
        callback(e);
      }
    }
    this.#unskipped_branches.add(effect2);
  }
  /**
   * Convert the effects that were scheduled in this batch into the root effects
   * that need to be traversed, marking the path to each effect (by clearing the
   * `CLEAN` flag on ancestor branches) so that the traversal can find them.
   * This happens right before traversal rather than at scheduling time, so that
   * the markers left on the (shared) effect tree are created and consumed within
   * a single traversal — scheduling into other batches can never observe them
   * @returns {Effect[]}
   */
  #resolve() {
    var roots = [];
    for (const effect2 of this.#scheduled) {
      if ((effect2.f & DESTROYED) !== 0 || (effect2.f & (DIRTY | MAYBE_DIRTY)) === 0) continue;
      var e = effect2;
      var covered = false;
      while (e.parent !== null) {
        e = e.parent;
        var flags2 = e.f;
        if ((flags2 & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
          if ((flags2 & CLEAN) === 0) {
            covered = true;
            break;
          }
          e.f ^= CLEAN;
        }
      }
      if (!covered) {
        roots.push(e);
      }
    }
    this.#scheduled = [];
    return roots;
  }
  #process() {
    this.#started = true;
    if (false_default) {
      for (const value of this.current.keys()) {
        source_stacks.add(value);
      }
    }
    for (const e of this.#dirty_effects) {
      this.#maybe_dirty_effects.delete(e);
      set_signal_status(e, DIRTY);
      this.schedule(e);
    }
    for (const e of this.#maybe_dirty_effects) {
      set_signal_status(e, MAYBE_DIRTY);
      this.schedule(e);
    }
    this.apply();
    var effects = collected_effects = [];
    var render_effects = [];
    var updates = legacy_updates = [];
    while (this.#scheduled.length > 0) {
      if (flush_count++ > 1e3) {
        this.#unlink();
        infinite_loop_guard();
      }
      for (const root2 of this.#resolve()) {
        try {
          this.#traverse(root2, effects, render_effects);
        } catch (e) {
          reset_all(root2);
          if (!this.#is_deferred()) this.discard();
          throw e;
        }
      }
    }
    current_batch = null;
    if (updates.length > 0) {
      var batch = _Batch.ensure();
      for (const e of updates) {
        batch.schedule(e);
      }
    }
    collected_effects = null;
    legacy_updates = null;
    if (this.#is_deferred()) {
      this.#defer_effects(render_effects);
      this.#defer_effects(effects);
      for (const [e, t] of this.#skipped_branches) {
        reset_branch(e, t);
      }
      if (updates.length > 0) {
        /** @type {unknown} */
        current_batch.#process();
      }
      return;
    }
    const earlier_batch = this.#find_earlier_batch();
    if (earlier_batch) {
      this.#defer_effects(render_effects);
      this.#defer_effects(effects);
      earlier_batch.#merge(this);
      return;
    }
    this.#dirty_effects.clear();
    this.#maybe_dirty_effects.clear();
    for (const fn of this.#commit_callbacks) fn(this);
    this.#commit_callbacks.clear();
    previous_batch = this;
    flush_queued_effects(render_effects);
    flush_queued_effects(effects);
    previous_batch = null;
    this.#deferred?.resolve();
    var next_batch = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      current_batch
    );
    if (this.#pending === 0 && (this.#scheduled.length === 0 || next_batch !== null)) {
      this.#unlink();
      if (async_mode_flag) {
        this.#commit();
        current_batch = next_batch;
      }
    }
    if (this.#scheduled.length > 0) {
      if (next_batch !== null) {
        for (const e of this.#scheduled) {
          next_batch.#scheduled.push(e);
        }
        this.#scheduled = [];
      } else {
        next_batch = this;
      }
    }
    if (next_batch !== null) {
      old_values.clear();
      next_batch.#process();
    }
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #traverse(root2, effects, render_effects) {
    root2.f ^= CLEAN;
    var effect2 = root2.first;
    while (effect2 !== null) {
      var flags2 = effect2.f;
      var is_branch = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
      var is_skippable_branch = is_branch && (flags2 & CLEAN) !== 0;
      var skip = is_skippable_branch || (flags2 & INERT) !== 0 || this.#skipped_branches.has(effect2);
      if (!skip && effect2.fn !== null) {
        if (is_branch) {
          effect2.f ^= CLEAN;
        } else if ((flags2 & EFFECT) !== 0) {
          effects.push(effect2);
        } else if (async_mode_flag && (flags2 & (RENDER_EFFECT | MANAGED_EFFECT)) !== 0) {
          render_effects.push(effect2);
        } else if (is_dirty(effect2)) {
          if ((flags2 & BLOCK_EFFECT) !== 0) this.#maybe_dirty_effects.add(effect2);
          update_effect(effect2);
        }
        var child2 = effect2.first;
        if (child2 !== null) {
          effect2 = child2;
          continue;
        }
      }
      while (effect2 !== null) {
        var next2 = effect2.next;
        if (next2 !== null) {
          effect2 = next2;
          break;
        }
        effect2 = effect2.parent;
      }
    }
  }
  #find_earlier_batch() {
    var batch = this.#prev;
    while (batch !== null) {
      if (!batch.is_fork) {
        for (const [value, [, is_derived]] of this.current) {
          if (batch.current.has(value) && !is_derived) {
            return batch;
          }
        }
      }
      batch = batch.#prev;
    }
    return null;
  }
  /**
   * @param {Batch} batch
   */
  #merge(batch) {
    for (const [source2, value] of batch.current) {
      if (!this.previous.has(source2) && batch.previous.has(source2)) {
        this.previous.set(source2, batch.previous.get(source2));
      }
      this.current.set(source2, value);
    }
    for (const [effect2, deferred2] of batch.async_deriveds) {
      const d = this.async_deriveds.get(effect2);
      if (d) deferred2.promise.then(d.resolve).catch(d.reject);
    }
    batch.async_deriveds.clear();
    this.transfer_effects(batch.#dirty_effects, batch.#maybe_dirty_effects);
    const mark = (value) => {
      var reactions = value.reactions;
      if (reactions === null) return;
      if ((value.f & DERIVED) !== 0 && (value.f & (DIRTY | MAYBE_DIRTY)) === 0) {
        return;
      }
      for (const reaction of reactions) {
        var flags2 = reaction.f;
        if ((flags2 & DERIVED) !== 0) {
          mark(
            /** @type {Derived} */
            reaction
          );
        } else {
          var effect2 = (
            /** @type {Effect} */
            reaction
          );
          if (flags2 & (ASYNC | BLOCK_EFFECT) && !this.async_deriveds.has(effect2)) {
            this.#maybe_dirty_effects.delete(effect2);
            set_signal_status(effect2, DIRTY);
            this.schedule(effect2);
          }
        }
      }
    };
    for (const source2 of this.current.keys()) {
      mark(source2);
    }
    this.oncommit(() => batch.discard());
    batch.#unlink();
    current_batch = this;
    this.#process();
  }
  /**
   * @param {Effect[]} effects
   */
  #defer_effects(effects) {
    for (var i = 0; i < effects.length; i += 1) {
      defer_effect(effects[i], this.#dirty_effects, this.#maybe_dirty_effects);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(source2, value, is_derived = false) {
    if (source2.v !== UNINITIALIZED && !this.previous.has(source2)) {
      this.previous.set(source2, source2.v);
    }
    if ((source2.f & ERROR_VALUE) === 0) {
      this.current.set(source2, [value, is_derived]);
      batch_values?.set(source2, value);
    }
    if (!this.is_fork) {
      source2.v = value;
    }
  }
  activate() {
    current_batch = this;
  }
  deactivate() {
    current_batch = null;
    batch_values = null;
  }
  flush() {
    try {
      if (false_default) {
        source_stacks.clear();
      }
      is_processing = true;
      current_batch = this;
      this.#process();
    } finally {
      flush_count = 0;
      last_scheduled_effect = null;
      collected_effects = null;
      legacy_updates = null;
      is_processing = false;
      current_batch = null;
      batch_values = null;
      old_values.clear();
      if (false_default) {
        for (const source2 of source_stacks) {
          source2.updated = null;
        }
      }
    }
  }
  discard() {
    for (const fn of this.#discard_callbacks) fn(this);
    this.#discard_callbacks.clear();
    for (const deferred2 of this.async_deriveds.values()) {
      deferred2.reject(OBSOLETE);
    }
    this.#unlink();
    this.#deferred?.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(effect2) {
    this.#new_effects.push(effect2);
  }
  #commit() {
    for (let batch = first_batch; batch !== null; batch = batch.#next) {
      var is_earlier = batch.id < this.id;
      var sources = [];
      for (const [source3, [value, is_derived]] of this.current) {
        if (batch.current.has(source3)) {
          var batch_value = (
            /** @type {[any, boolean]} */
            batch.current.get(source3)[0]
          );
          if (is_earlier && value !== batch_value) {
            batch.current.set(source3, [value, is_derived]);
          } else {
            continue;
          }
        }
        sources.push(source3);
      }
      if (is_earlier) {
        for (const [effect2, deferred2] of this.async_deriveds) {
          const d = batch.async_deriveds.get(effect2);
          if (d) deferred2.promise.then(d.resolve).catch(d.reject);
        }
      }
      var current = [...batch.current.keys()].filter(
        (source3) => !/** @type {[any, boolean]} */
        batch.current.get(source3)[1]
      );
      if (!batch.#started || current.length === 0) continue;
      var others = current.filter((source3) => !this.current.has(source3));
      if (others.length === 0) {
        if (is_earlier) {
          batch.discard();
        }
      } else if (sources.length > 0) {
        if (false_default && !batch.#decrement_queued) {
          invariant(batch.#scheduled.length === 0, "Batch has scheduled effects");
        }
        if (is_earlier) {
          for (const unskipped of this.#unskipped_branches) {
            batch.unskip_effect(unskipped, (e) => {
              if ((e.f & (BLOCK_EFFECT | ASYNC)) !== 0) {
                batch.schedule(e);
              } else {
                batch.#defer_effects([e]);
              }
            });
          }
        }
        batch.activate();
        var marked = /* @__PURE__ */ new Set();
        var checked = /* @__PURE__ */ new Map();
        for (var source2 of sources) {
          mark_effects(source2, others, marked, checked);
        }
        checked = /* @__PURE__ */ new Map();
        var current_unequal = [...batch.current].filter(([c, v1]) => {
          const v2 = this.current.get(c);
          if (!v2) return true;
          return v2[0] !== v1[0] || v2[1] !== v1[1];
        }).map(([c]) => c);
        if (current_unequal.length > 0) {
          for (const effect2 of this.#new_effects) {
            if ((effect2.f & (DESTROYED | INERT | EAGER_EFFECT)) === 0 && depends_on(effect2, current_unequal, checked)) {
              if ((effect2.f & (ASYNC | BLOCK_EFFECT)) !== 0) {
                set_signal_status(effect2, DIRTY);
                batch.schedule(effect2);
              } else {
                batch.#dirty_effects.add(effect2);
              }
            }
          }
        }
        if (batch.#scheduled.length > 0 && !batch.#decrement_queued) {
          batch.apply();
          for (var root2 of batch.#resolve()) {
            batch.#traverse(root2, [], []);
          }
        }
        batch.deactivate();
      }
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(blocking, effect2) {
    this.#pending += 1;
    if (blocking) {
      let blocking_pending_count = this.#blocking_pending.get(effect2) ?? 0;
      this.#blocking_pending.set(effect2, blocking_pending_count + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(blocking, effect2) {
    this.#pending -= 1;
    if (blocking) {
      let blocking_pending_count = this.#blocking_pending.get(effect2) ?? 0;
      if (blocking_pending_count === 1) {
        this.#blocking_pending.delete(effect2);
      } else {
        this.#blocking_pending.set(effect2, blocking_pending_count - 1);
      }
    }
    if (this.#decrement_queued) return;
    this.#decrement_queued = true;
    queue_micro_task(() => {
      this.#decrement_queued = false;
      if (this.linked) {
        this.flush();
      }
    });
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(dirty_effects, maybe_dirty_effects) {
    for (const e of dirty_effects) {
      this.#dirty_effects.add(e);
    }
    for (const e of maybe_dirty_effects) {
      this.#maybe_dirty_effects.add(e);
    }
    dirty_effects.clear();
    maybe_dirty_effects.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(fn) {
    this.#commit_callbacks.add(fn);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(fn) {
    this.#discard_callbacks.add(fn);
  }
  settled() {
    return (this.#deferred ??= deferred()).promise;
  }
  static ensure() {
    if (current_batch === null) {
      const batch = current_batch = new _Batch();
      if (!is_processing && !is_flushing_sync) {
        queue_micro_task(() => {
          if (!batch.#started) {
            batch.flush();
          }
        });
      }
    }
    return current_batch;
  }
  apply() {
    if (!async_mode_flag || !this.is_fork && this.#prev === null && this.#next === null) {
      batch_values = null;
      return;
    }
    batch_values = /* @__PURE__ */ new Map();
    for (const [source2, [value]] of this.current) {
      batch_values.set(source2, value);
    }
    for (let batch = first_batch; batch !== null; batch = batch.#next) {
      if (batch === this || batch.is_fork) continue;
      var intersects = false;
      if (batch.id < this.id) {
        for (const [source2, [, is_derived]] of batch.current) {
          if (is_derived) continue;
          if (this.current.has(source2)) {
            intersects = true;
            break;
          }
        }
      }
      if (!intersects) {
        for (const [source2, previous] of batch.previous) {
          if (!batch_values.has(source2)) {
            batch_values.set(source2, previous);
          }
        }
      }
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(effect2) {
    last_scheduled_effect = effect2;
    if (effect2.b?.is_pending && (effect2.f & (EFFECT | RENDER_EFFECT | MANAGED_EFFECT)) !== 0 && (effect2.f & REACTION_RAN) === 0) {
      effect2.b.defer_effect(effect2);
      return;
    }
    this.#scheduled.push(effect2);
  }
  #unlink() {
    if (!this.linked) return;
    var prev = this.#prev;
    var next2 = this.#next;
    if (prev === null) {
      first_batch = next2;
    } else {
      prev.#next = next2;
    }
    if (next2 === null) {
      last_batch = prev;
    } else {
      next2.#prev = prev;
    }
    this.linked = false;
  }
};
function flushSync(fn) {
  var was_flushing_sync = is_flushing_sync;
  var prev_previous_batch = previous_batch;
  previous_batch = null;
  is_flushing_sync = true;
  try {
    var result;
    if (fn) {
      flushSync();
      result = fn();
    }
    while (true) {
      flush_tasks();
      if (current_batch === null) {
        return (
          /** @type {T} */
          result
        );
      }
      current_batch.flush();
    }
  } finally {
    is_flushing_sync = was_flushing_sync;
    previous_batch = prev_previous_batch;
  }
}
function infinite_loop_guard() {
  if (false_default) {
    var updates = /* @__PURE__ */ new Map();
    for (
      const source2 of
      /** @type {Batch} */
      current_batch.current.keys()
    ) {
      for (const [stack2, update2] of source2.updated ?? []) {
        var entry = updates.get(stack2);
        if (!entry) {
          entry = { error: update2.error, count: 0 };
          updates.set(stack2, entry);
        }
        entry.count += update2.count;
      }
    }
    for (const update2 of updates.values()) {
      if (update2.error) {
        console.error(update2.error);
      }
    }
  }
  try {
    effect_update_depth_exceeded();
  } catch (error) {
    if (false_default) {
      define_property(error, "stack", { value: "" });
    }
    invoke_error_boundary(error, last_scheduled_effect);
  }
}
var eager_block_effects = null;
function flush_queued_effects(effects) {
  var length2 = effects.length;
  if (length2 === 0) return;
  var i = 0;
  while (i < length2) {
    var effect2 = effects[i++];
    if ((effect2.f & (DESTROYED | INERT)) === 0 && is_dirty(effect2)) {
      eager_block_effects = /* @__PURE__ */ new Set();
      update_effect(effect2);
      if (effect2.deps === null && effect2.first === null && effect2.nodes === null && effect2.teardown === null && effect2.ac === null) {
        unlink_effect(effect2);
      }
      if (eager_block_effects?.size > 0) {
        old_values.clear();
        for (const e of eager_block_effects) {
          if ((e.f & (DESTROYED | INERT)) !== 0) continue;
          const ordered_effects = [e];
          let ancestor2 = e.parent;
          while (ancestor2 !== null) {
            if (eager_block_effects.has(ancestor2)) {
              eager_block_effects.delete(ancestor2);
              ordered_effects.push(ancestor2);
            }
            ancestor2 = ancestor2.parent;
          }
          for (let j = ordered_effects.length - 1; j >= 0; j--) {
            const e2 = ordered_effects[j];
            if ((e2.f & (DESTROYED | INERT)) !== 0) continue;
            update_effect(e2);
          }
        }
        eager_block_effects.clear();
      }
    }
  }
  eager_block_effects = null;
}
function mark_effects(value, sources, marked, checked) {
  if (marked.has(value)) return;
  marked.add(value);
  if (value.reactions !== null) {
    for (const reaction of value.reactions) {
      const flags2 = reaction.f;
      if ((flags2 & DERIVED) !== 0) {
        mark_effects(
          /** @type {Derived} */
          reaction,
          sources,
          marked,
          checked
        );
      } else if ((flags2 & (ASYNC | BLOCK_EFFECT)) !== 0 && (flags2 & DIRTY) === 0 && depends_on(reaction, sources, checked)) {
        set_signal_status(reaction, DIRTY);
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}
function depends_on(reaction, sources, checked) {
  const depends = checked.get(reaction);
  if (depends !== void 0) return depends;
  if (reaction.deps !== null) {
    for (const dep of reaction.deps) {
      if (includes.call(sources, dep)) {
        return true;
      }
      if ((dep.f & DERIVED) !== 0 && depends_on(
        /** @type {Derived} */
        dep,
        sources,
        checked
      )) {
        checked.set(
          /** @type {Derived} */
          dep,
          true
        );
        return true;
      }
    }
  }
  checked.set(reaction, false);
  return false;
}
function schedule_effect(effect2) {
  current_batch.schedule(effect2);
}
function reset_branch(effect2, tracked) {
  if ((effect2.f & BRANCH_EFFECT) !== 0 && (effect2.f & CLEAN) !== 0) {
    return;
  }
  if ((effect2.f & DIRTY) !== 0) {
    tracked.d.push(effect2);
  } else if ((effect2.f & MAYBE_DIRTY) !== 0) {
    tracked.m.push(effect2);
  }
  set_signal_status(effect2, CLEAN);
  var e = effect2.first;
  while (e !== null) {
    reset_branch(e, tracked);
    e = e.next;
  }
}
function reset_all(effect2) {
  set_signal_status(effect2, CLEAN);
  var e = effect2.first;
  while (e !== null) {
    reset_all(e);
    e = e.next;
  }
}

// node_modules/svelte/src/internal/client/reactivity/sources.js
var eager_effects = /* @__PURE__ */ new Set();
var old_values = /* @__PURE__ */ new Map();
function set_eager_effects(v) {
  eager_effects = v;
}
var eager_effects_deferred = false;
function set_eager_effects_deferred() {
  eager_effects_deferred = true;
}
function source(v, stack2) {
  var signal = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  if (false_default && tracing_mode_flag) {
    signal.created = stack2 ?? get_error("created at");
    signal.updated = null;
    signal.set_during_effect = false;
    signal.trace = null;
  }
  return signal;
}
// @__NO_SIDE_EFFECTS__
function state(v, stack2) {
  const s = source(v, stack2);
  push_reaction_value(s);
  return s;
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable = false, trackable = true) {
  const s = source(initial_value);
  if (!immutable) {
    s.equals = safe_equals;
  }
  if (legacy_mode_flag && trackable && component_context !== null && component_context.l !== null) {
    (component_context.l.s ??= []).push(s);
  }
  return s;
}
function set(source2, value, should_proxy = false) {
  if (active_reaction !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!untracking || (active_reaction.f & EAGER_EFFECT) !== 0) && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | EAGER_EFFECT)) !== 0 && (current_sources === null || !current_sources.has(source2))) {
    state_unsafe_mutation();
  }
  let new_value = should_proxy ? proxy(value) : value;
  if (false_default) {
    tag_proxy(
      new_value,
      /** @type {string} */
      source2.label
    );
  }
  return internal_set(source2, new_value, legacy_updates);
}
var seen = null;
var count_deps = 0;
function internal_set(source2, value, updated_during_traversal = null) {
  if (!source2.equals(value)) {
    if (is_destroying_effect) {
      old_values.set(source2, value);
    } else if (!old_values.has(source2)) {
      old_values.set(source2, source2.v);
    }
    var batch = Batch.ensure();
    batch.capture(source2, value);
    if (false_default) {
      if (tracing_mode_flag || active_effect !== null) {
        source2.updated ??= /* @__PURE__ */ new Map();
        const count = (source2.updated.get("")?.count ?? 0) + 1;
        source2.updated.set("", { error: (
          /** @type {any} */
          null
        ), count });
        if (tracing_mode_flag || count > 5) {
          const error = get_error("updated at");
          if (error !== null) {
            let entry = source2.updated.get(error.stack);
            if (!entry) {
              entry = { error, count: 0 };
              source2.updated.set(error.stack, entry);
            }
            entry.count++;
          }
        }
      }
      if (active_effect !== null) {
        source2.set_during_effect = true;
      }
    }
    if ((source2.f & DERIVED) !== 0) {
      const derived2 = (
        /** @type {Derived} */
        source2
      );
      if ((source2.f & DIRTY) !== 0) {
        execute_derived(derived2);
      }
      if (batch_values === null) {
        update_derived_status(derived2);
      }
    }
    source2.wv = increment_write_version();
    seen = null;
    count_deps = 0;
    mark_reactions(source2, DIRTY, updated_during_traversal);
    seen = null;
    if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
    if (!batch.is_fork && eager_effects.size > 0 && !eager_effects_deferred) {
      flush_eager_effects();
    }
  }
  return value;
}
function flush_eager_effects() {
  eager_effects_deferred = false;
  for (const effect2 of eager_effects) {
    if ((effect2.f & CLEAN) !== 0) {
      set_signal_status(effect2, MAYBE_DIRTY);
    }
    let dirty;
    try {
      dirty = is_dirty(effect2);
    } catch {
      dirty = true;
    }
    if (dirty) {
      update_effect(effect2);
    }
  }
  eager_effects.clear();
}
function increment(source2) {
  set(source2, source2.v + 1);
}
function mark_reactions(signal, status, updated_during_traversal) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var runes = is_runes();
  var length2 = reactions.length;
  count_deps += length2;
  if (count_deps > 1e5 && seen === null) seen = /* @__PURE__ */ new Set();
  if (seen !== null) {
    if (seen.has(signal)) return;
    seen.add(signal);
  }
  for (var i = 0; i < length2; i++) {
    var reaction = reactions[i];
    var flags2 = reaction.f;
    if (!runes && reaction === active_effect) continue;
    var not_dirty = (flags2 & DIRTY) === 0;
    if (not_dirty) {
      set_signal_status(reaction, status);
    }
    if ((flags2 & EAGER_EFFECT) !== 0) {
      eager_effects.add(
        /** @type {Effect} */
        reaction
      );
    } else if ((flags2 & DERIVED) !== 0) {
      var derived2 = (
        /** @type {Derived} */
        reaction
      );
      batch_values?.delete(derived2);
      mark_reactions(derived2, MAYBE_DIRTY, updated_during_traversal);
    } else if (not_dirty) {
      var effect2 = (
        /** @type {Effect} */
        reaction
      );
      if ((flags2 & BLOCK_EFFECT) !== 0 && eager_block_effects !== null) {
        eager_block_effects.add(effect2);
      }
      if (updated_during_traversal !== null) {
        updated_during_traversal.push(effect2);
      } else {
        schedule_effect(effect2);
      }
    }
  }
}

// node_modules/svelte/src/internal/client/proxy.js
var regex_is_valid_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function proxy(value) {
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value || COMPONENT_SYMBOL in value) {
    return value;
  }
  const prototype = get_prototype_of(value);
  if (prototype !== object_prototype && prototype !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = state(0);
  var stack2 = false_default && tracing_mode_flag ? get_error("created at") : null;
  var parent_version = update_version;
  var with_parent = (fn) => {
    if (update_version === parent_version) {
      return fn();
    }
    var reaction = active_reaction;
    var version2 = update_version;
    set_active_reaction(null);
    set_update_version(parent_version);
    var result = fn();
    set_active_reaction(reaction);
    set_update_version(version2);
    return result;
  };
  if (is_proxied_array) {
    sources.set("length", state(
      /** @type {any[]} */
      value.length,
      stack2
    ));
    if (false_default) {
      value = /** @type {any} */
      inspectable_array(
        /** @type {any[]} */
        value
      );
    }
  }
  var path = "";
  let updating = false;
  function update_path(new_path) {
    if (updating) return;
    updating = true;
    path = new_path;
    tag(version, `${path} version`);
    for (const [prop2, source2] of sources) {
      tag(source2, get_label(path, prop2));
    }
    updating = false;
  }
  return new Proxy(
    /** @type {any} */
    value,
    {
      defineProperty(_, prop2, descriptor) {
        if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
          state_descriptors_fixed();
        }
        var s = sources.get(prop2);
        if (s === void 0) {
          with_parent(() => {
            var s2 = state(descriptor.value, stack2);
            sources.set(prop2, s2);
            if (false_default && typeof prop2 === "string") {
              tag(s2, get_label(path, prop2));
            }
            return s2;
          });
        } else {
          set(s, descriptor.value, true);
        }
        return true;
      },
      deleteProperty(target, prop2) {
        var s = sources.get(prop2);
        if (s === void 0) {
          if (prop2 in target) {
            const s2 = with_parent(() => state(UNINITIALIZED, stack2));
            sources.set(prop2, s2);
            increment(version);
            if (false_default) {
              tag(s2, get_label(path, prop2));
            }
          }
        } else {
          set(s, UNINITIALIZED);
          increment(version);
        }
        return true;
      },
      get(target, prop2, receiver) {
        if (prop2 === STATE_SYMBOL) {
          return value;
        }
        if (false_default && prop2 === PROXY_PATH_SYMBOL) {
          return update_path;
        }
        var s = sources.get(prop2);
        var exists = prop2 in target;
        if (s === void 0 && (!exists || get_descriptor(target, prop2)?.writable)) {
          s = with_parent(() => {
            var p = proxy(exists ? target[prop2] : UNINITIALIZED);
            var s2 = state(p, stack2);
            if (false_default) {
              tag(s2, get_label(path, prop2));
            }
            return s2;
          });
          sources.set(prop2, s);
        }
        if (s !== void 0) {
          var v = get(s);
          return v === UNINITIALIZED ? void 0 : v;
        }
        return Reflect.get(target, prop2, receiver);
      },
      getOwnPropertyDescriptor(target, prop2) {
        this.has?.(target, prop2);
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        var s = sources.get(prop2);
        if (s !== void 0) {
          var value2 = get(s);
          if (value2 === UNINITIALIZED) {
            return void 0;
          }
          if (descriptor && "value" in descriptor) {
            descriptor.value = value2;
          } else {
            return {
              enumerable: true,
              configurable: true,
              value: value2,
              writable: true
            };
          }
        }
        return descriptor;
      },
      has(target, prop2) {
        if (prop2 === STATE_SYMBOL) {
          return true;
        }
        var s = sources.get(prop2);
        var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
        if (s !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop2)?.writable)) {
          if (s === void 0) {
            s = with_parent(() => {
              var p = has ? proxy(target[prop2]) : UNINITIALIZED;
              var s2 = state(p, stack2);
              if (false_default) {
                tag(s2, get_label(path, prop2));
              }
              return s2;
            });
            sources.set(prop2, s);
          }
          var value2 = get(s);
          if (value2 === UNINITIALIZED) {
            return false;
          }
        }
        return has;
      },
      set(target, prop2, value2, receiver) {
        var s = sources.get(prop2);
        var has = prop2 in target;
        if (is_proxied_array && prop2 === "length") {
          for (var i = value2; i < /** @type {Source<number>} */
          s.v; i += 1) {
            var other_s = sources.get(i + "");
            if (other_s !== void 0) {
              set(other_s, UNINITIALIZED);
            } else if (i in target) {
              other_s = with_parent(() => state(UNINITIALIZED, stack2));
              sources.set(i + "", other_s);
              if (false_default) {
                tag(other_s, get_label(path, i));
              }
            }
          }
        }
        if (s === void 0) {
          if (!has || get_descriptor(target, prop2)?.writable) {
            s = with_parent(() => state(void 0, stack2));
            if (false_default) {
              tag(s, get_label(path, prop2));
            }
            set(s, proxy(value2));
            sources.set(prop2, s);
          }
        } else {
          has = s.v !== UNINITIALIZED;
          var p = with_parent(() => proxy(value2));
          set(s, p);
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor?.set) {
          descriptor.set.call(receiver, value2);
        }
        if (!has) {
          if (is_proxied_array && typeof prop2 === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop2);
            if (Number.isInteger(n) && n >= ls.v) {
              set(ls, n + 1);
            }
          }
          increment(version);
        }
        return true;
      },
      ownKeys(target) {
        get(version);
        var own_keys = Reflect.ownKeys(target).filter((key3) => {
          var source3 = sources.get(key3);
          return source3 === void 0 || source3.v !== UNINITIALIZED;
        });
        for (var [key2, source2] of sources) {
          if (source2.v !== UNINITIALIZED && !(key2 in target)) {
            own_keys.push(key2);
          }
        }
        return own_keys;
      },
      setPrototypeOf() {
        state_prototype_fixed();
      }
    }
  );
}
function get_label(path, prop2) {
  if (typeof prop2 === "symbol") return `${path}[Symbol(${prop2.description ?? ""})]`;
  if (regex_is_valid_identifier.test(prop2)) return `${path}.${prop2}`;
  return /^\d+$/.test(prop2) ? `${path}[${prop2}]` : `${path}['${prop2}']`;
}
function get_proxied_value(value) {
  try {
    if (value !== null && typeof value === "object" && STATE_SYMBOL in value) {
      return value[STATE_SYMBOL];
    }
  } catch {
  }
  return value;
}
var ARRAY_MUTATING_METHODS = /* @__PURE__ */ new Set([
  "copyWithin",
  "fill",
  "pop",
  "push",
  "reverse",
  "shift",
  "sort",
  "splice",
  "unshift"
]);
function inspectable_array(array) {
  return new Proxy(array, {
    get(target, prop2, receiver) {
      var value = Reflect.get(target, prop2, receiver);
      if (!ARRAY_MUTATING_METHODS.has(
        /** @type {string} */
        prop2
      )) {
        return value;
      }
      return function(...args) {
        set_eager_effects_deferred();
        var result = value.apply(this, args);
        flush_eager_effects();
        return result;
      };
    }
  });
}

// node_modules/svelte/src/internal/client/dev/equality.js
function init_array_prototype_warnings() {
  const array_prototype2 = Array.prototype;
  const cleanup = Array.__svelte_cleanup;
  if (cleanup) {
    cleanup();
  }
  const { indexOf, lastIndexOf, includes: includes2 } = array_prototype2;
  array_prototype2.indexOf = function(item, from_index) {
    const index2 = indexOf.call(this, item, from_index);
    if (index2 === -1) {
      for (let i = from_index ?? 0; i < this.length; i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.indexOf(...)");
          break;
        }
      }
    }
    return index2;
  };
  array_prototype2.lastIndexOf = function(item, from_index) {
    const index2 = lastIndexOf.call(this, item, from_index ?? this.length - 1);
    if (index2 === -1) {
      for (let i = 0; i <= (from_index ?? this.length - 1); i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.lastIndexOf(...)");
          break;
        }
      }
    }
    return index2;
  };
  array_prototype2.includes = function(item, from_index) {
    const has = includes2.call(this, item, from_index);
    if (!has) {
      for (let i = 0; i < this.length; i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.includes(...)");
          break;
        }
      }
    }
    return has;
  };
  Array.__svelte_cleanup = () => {
    array_prototype2.indexOf = indexOf;
    array_prototype2.lastIndexOf = lastIndexOf;
    array_prototype2.includes = includes2;
  };
}

// node_modules/svelte/src/internal/client/dom/operations.js
var $window;
var $document;
var is_firefox;
var first_child_getter;
var next_sibling_getter;
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  $document = document;
  is_firefox = /Firefox/.test(navigator.userAgent);
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  var text_prototype = Text.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  if (is_extensible(element_prototype)) {
    element_prototype[CLASS_CACHE] = void 0;
    element_prototype[ATTRIBUTES_CACHE] = null;
    element_prototype[STYLE_CACHE] = void 0;
    element_prototype.__e = void 0;
  }
  if (is_extensible(text_prototype)) {
    text_prototype[TEXT_CACHE] = void 0;
  }
  if (false_default) {
    element_prototype.__svelte_meta = null;
    init_array_prototype_warnings();
  }
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return (
    /** @type {TemplateNode | null} */
    first_child_getter.call(node)
  );
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return (
    /** @type {TemplateNode | null} */
    next_sibling_getter.call(node)
  );
}
function child(node, is_text) {
  if (!hydrating) {
    return /* @__PURE__ */ get_first_child(node);
  }
  var child2 = /* @__PURE__ */ get_first_child(hydrate_node);
  if (child2 === null) {
    child2 = hydrate_node.appendChild(create_text());
  } else if (is_text && child2.nodeType !== TEXT_NODE) {
    var text2 = create_text();
    child2?.before(text2);
    set_hydrate_node(text2);
    return text2;
  }
  if (is_text) {
    merge_text_nodes(
      /** @type {Text} */
      child2
    );
  }
  set_hydrate_node(child2);
  return child2;
}
function first_child(node, is_text = false) {
  if (!hydrating) {
    var first = /* @__PURE__ */ get_first_child(node);
    if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
    return first;
  }
  if (is_text) {
    if (hydrate_node?.nodeType !== TEXT_NODE) {
      var text2 = create_text();
      hydrate_node?.before(text2);
      set_hydrate_node(text2);
      return text2;
    }
    merge_text_nodes(
      /** @type {Text} */
      hydrate_node
    );
  }
  return hydrate_node;
}
function only_child(node, is_text = false) {
  if (!hydrating) {
    return /* @__PURE__ */ get_first_child(node);
  }
  var first = child(node, is_text);
  reset(node);
  return first;
}
function sibling(node, count = 1, is_text = false) {
  let next_sibling = hydrating ? hydrate_node : node;
  var last_sibling;
  while (count--) {
    last_sibling = next_sibling;
    next_sibling = /** @type {TemplateNode} */
    /* @__PURE__ */ get_next_sibling(next_sibling);
  }
  if (!hydrating) {
    return next_sibling;
  }
  if (is_text) {
    if (next_sibling?.nodeType !== TEXT_NODE) {
      var text2 = create_text();
      if (next_sibling === null) {
        last_sibling?.after(text2);
      } else {
        next_sibling.before(text2);
      }
      set_hydrate_node(text2);
      return text2;
    }
    merge_text_nodes(
      /** @type {Text} */
      next_sibling
    );
  }
  set_hydrate_node(next_sibling);
  return next_sibling;
}
function clear_text_content(node) {
  node.textContent = "";
}
function should_defer_append() {
  if (!async_mode_flag) return false;
  if (eager_block_effects !== null) return false;
  var flags2 = (
    /** @type {Effect} */
    active_effect.f
  );
  return (flags2 & REACTION_RAN) !== 0;
}
function create_element(tag2, namespace, is2) {
  if (namespace == null || namespace === NAMESPACE_HTML) {
    return (
      /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
      is2 ? document.createElement(tag2, { is: is2 }) : document.createElement(tag2)
    );
  }
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    is2 ? document.createElementNS(namespace, tag2, { is: is2 }) : document.createElementNS(namespace, tag2)
  );
}
function merge_text_nodes(text2) {
  if (
    /** @type {string} */
    text2.nodeValue.length < 65536
  ) {
    return;
  }
  let next2 = text2.nextSibling;
  while (next2 !== null && next2.nodeType === TEXT_NODE) {
    next2.remove();
    text2.nodeValue += /** @type {string} */
    next2.nodeValue;
    next2 = text2.nextSibling;
  }
}

// node_modules/svelte/src/internal/client/error-handling.js
var adjustments = /* @__PURE__ */ new WeakMap();
function handle_error(error) {
  var effect2 = active_effect;
  if (effect2 === null) {
    active_reaction.f |= ERROR_VALUE;
    return error;
  }
  if (false_default && error instanceof Error && !adjustments.has(error)) {
    adjustments.set(error, get_adjustments(error, effect2));
  }
  if ((effect2.f & REACTION_RAN) === 0 && (effect2.f & EFFECT) === 0) {
    if (false_default && !effect2.parent && error instanceof Error) {
      apply_adjustments(error);
    }
    throw error;
  }
  invoke_error_boundary(error, effect2);
}
function invoke_error_boundary(error, effect2) {
  if (error === HYDRATION_ERROR) {
    throw error;
  }
  if (effect2 !== null && (effect2.f & DESTROYED) !== 0) {
    return;
  }
  while (effect2 !== null) {
    if ((effect2.f & BOUNDARY_EFFECT) !== 0 && (effect2.f & (DESTROYED | DESTROYING)) === 0) {
      if ((effect2.f & REACTION_RAN) === 0) {
        throw error;
      }
      try {
        effect2.b.error(error);
        return;
      } catch (e) {
        error = e;
      }
    }
    effect2 = effect2.parent;
  }
  if (false_default && error instanceof Error) {
    apply_adjustments(error);
  }
  throw error;
}
function get_adjustments(error, effect2) {
  const message_descriptor = get_descriptor(error, "message");
  if (message_descriptor && !message_descriptor.configurable) return;
  var indent = is_firefox ? "  " : "	";
  var component_stack = `
${indent}in ${effect2.fn?.name || "<unknown>"}`;
  var context = effect2.ctx;
  while (context !== null) {
    component_stack += `
${indent}in ${context.function?.[FILENAME].split("/").pop()}`;
    context = context.p;
  }
  return {
    message: error.message + `
${component_stack}
`,
    stack: error.stack?.split("\n").filter((line) => !line.includes("svelte/src/internal")).join("\n")
  };
}
function apply_adjustments(error) {
  const adjusted = adjustments.get(error);
  if (adjusted) {
    define_property(error, "message", {
      value: adjusted.message
    });
    define_property(error, "stack", {
      value: adjusted.stack
    });
  }
}

// node_modules/svelte/src/internal/client/reactivity/effects.js
function validate_effect(rune) {
  if (active_effect === null) {
    if (active_reaction === null) {
      effect_orphan(rune);
    }
    effect_in_unowned_derived();
  }
  if (is_destroying_effect) {
    effect_in_teardown(rune);
  }
}
function push_effect(effect2, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect2;
  } else {
    parent_last.next = effect2;
    effect2.prev = parent_last;
    parent_effect.last = effect2;
  }
}
function create_effect(type, fn) {
  var parent = active_effect;
  if (false_default) {
    while (parent !== null && (parent.f & EAGER_EFFECT) !== 0) {
      parent = parent.parent;
    }
  }
  if (parent !== null && (parent.f & INERT) !== 0) {
    type |= INERT;
  }
  var effect2 = {
    ctx: component_context,
    deps: null,
    nodes: null,
    f: type | DIRTY | CONNECTED,
    first: null,
    fn,
    last: null,
    next: null,
    parent,
    b: parent && parent.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (false_default) {
    effect2.component_function = dev_current_component_function;
  }
  current_batch?.register_created_effect(effect2);
  var e = effect2;
  if ((type & EFFECT) !== 0) {
    if (collected_effects !== null) {
      collected_effects.push(effect2);
    } else {
      Batch.ensure().schedule(effect2);
    }
  } else if (fn !== null) {
    try {
      update_effect(effect2);
    } catch (e2) {
      destroy_effect(effect2);
      throw e2;
    }
    if (e.deps === null && e.teardown === null && e.nodes === null && e.first === e.last && // either `null`, or a singular child
    (e.f & EFFECT_PRESERVED) === 0) {
      e = e.first;
      if ((type & BLOCK_EFFECT) !== 0 && (type & EFFECT_TRANSPARENT) !== 0 && e !== null) {
        e.f |= EFFECT_TRANSPARENT;
      }
    }
  }
  if (e !== null) {
    e.parent = parent;
    if (parent !== null) {
      push_effect(e, parent);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0 && (type & ROOT_EFFECT) === 0) {
      var derived2 = (
        /** @type {Derived} */
        active_reaction
      );
      (derived2.effects ??= []).push(e);
    }
  }
  return effect2;
}
function effect_tracking() {
  return active_reaction !== null && !untracking;
}
function teardown(fn) {
  const effect2 = create_effect(RENDER_EFFECT, null);
  set_signal_status(effect2, CLEAN);
  effect2.teardown = fn;
  return effect2;
}
function user_effect(fn) {
  validate_effect("$effect");
  if (false_default) {
    define_property(fn, "name", {
      value: "$effect"
    });
  }
  var flags2 = (
    /** @type {Effect} */
    active_effect.f
  );
  var defer = !active_reaction && (flags2 & BRANCH_EFFECT) !== 0 && component_context !== null && !component_context.i;
  if (defer) {
    var context = (
      /** @type {ComponentContext} */
      component_context
    );
    (context.e ??= []).push(fn);
  } else {
    return create_user_effect(fn);
  }
}
function create_user_effect(fn) {
  return create_effect(EFFECT | USER_EFFECT, fn);
}
function user_pre_effect(fn) {
  validate_effect("$effect.pre");
  if (false_default) {
    define_property(fn, "name", {
      value: "$effect.pre"
    });
  }
  return create_effect(RENDER_EFFECT | USER_EFFECT, fn);
}
function effect_root(fn) {
  Batch.ensure();
  const effect2 = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn);
  return () => {
    destroy_effect(effect2);
  };
}
function component_root(fn) {
  Batch.ensure();
  const effect2 = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn);
  return (options = {}) => {
    return new Promise((fulfil) => {
      if (options.outro) {
        pause_effect(effect2, () => {
          destroy_effect(effect2);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect2);
        fulfil(void 0);
      }
    });
  };
}
function effect(fn) {
  return create_effect(EFFECT, fn);
}
function async_effect(fn) {
  return create_effect(ASYNC | EFFECT_PRESERVED, fn);
}
function render_effect(fn, flags2 = 0) {
  return create_effect(RENDER_EFFECT | flags2, fn);
}
function template_effect(fn, sync = [], async2 = [], blockers = []) {
  flatten(blockers, sync, async2, (values) => {
    create_effect(RENDER_EFFECT, () => {
      fn(...values.map(get));
    });
  });
}
function block(fn, flags2 = 0) {
  var effect2 = create_effect(BLOCK_EFFECT | flags2, fn);
  if (false_default) {
    effect2.dev_stack = dev_stack;
  }
  return effect2;
}
function managed(fn, flags2 = 0) {
  var effect2 = create_effect(MANAGED_EFFECT | flags2, fn);
  if (false_default) {
    effect2.dev_stack = dev_stack;
  }
  return effect2;
}
function branch(fn) {
  return create_effect(BRANCH_EFFECT | EFFECT_PRESERVED, fn);
}
function execute_effect_teardown(effect2) {
  var teardown2 = effect2.teardown;
  if (teardown2 !== null) {
    const previously_destroying_effect = is_destroying_effect;
    const previous_reaction = active_reaction;
    set_is_destroying_effect(true);
    set_active_reaction(null);
    try {
      teardown2.call(null);
    } catch (error) {
      invoke_error_boundary(error, effect2.parent);
    } finally {
      set_is_destroying_effect(previously_destroying_effect);
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect2 = signal.first;
  signal.first = signal.last = null;
  while (effect2 !== null) {
    const controller = effect2.ac;
    if (controller !== null) {
      without_reactive_context(() => {
        controller.abort(STALE_REACTION);
      });
    }
    var next2 = effect2.next;
    if ((effect2.f & ROOT_EFFECT) !== 0) {
      effect2.parent = null;
    } else {
      destroy_effect(effect2, remove_dom);
    }
    effect2 = next2;
  }
}
function destroy_block_effect_children(signal) {
  var effect2 = signal.first;
  while (effect2 !== null) {
    var next2 = effect2.next;
    if ((effect2.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect2);
    }
    effect2 = next2;
  }
}
function destroy_effect(effect2, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes !== null && effect2.nodes.end !== null) {
    remove_effect_dom(
      effect2.nodes.start,
      /** @type {TemplateNode} */
      effect2.nodes.end
    );
    removed = true;
  }
  effect2.f |= DESTROYING;
  destroy_effect_children(effect2, remove_dom && !removed);
  remove_reactions(effect2, 0);
  var transitions = effect2.nodes && effect2.nodes.t;
  if (transitions !== null) {
    for (const transition2 of transitions) {
      transition2.stop();
    }
  }
  execute_effect_teardown(effect2);
  effect2.f ^= DESTROYING;
  effect2.f |= DESTROYED;
  var parent = effect2.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect2);
  }
  if (false_default) {
    effect2.component_function = null;
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes = effect2.ac = effect2.b = null;
}
function remove_effect_dom(node, end) {
  while (node !== null) {
    var next2 = node === end ? null : get_next_sibling(node);
    node.remove();
    node = next2;
  }
}
function unlink_effect(effect2) {
  var parent = effect2.parent;
  var prev = effect2.prev;
  var next2 = effect2.next;
  if (prev !== null) prev.next = next2;
  if (next2 !== null) next2.prev = prev;
  if (parent !== null) {
    if (parent.first === effect2) parent.first = next2;
    if (parent.last === effect2) parent.last = prev;
  }
}
function pause_effect(effect2, callback, destroy = true) {
  var transitions = [];
  effect2.f |= PAUSED;
  pause_children(effect2, transitions, true);
  var fn = () => {
    if (destroy) destroy_effect(effect2);
    if (callback) callback();
  };
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = () => --remaining || fn();
    for (var transition2 of transitions) {
      transition2.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect2, transitions, local) {
  if ((effect2.f & INERT) !== 0) return;
  effect2.f ^= INERT;
  var t = effect2.nodes && effect2.nodes.t;
  if (t !== null) {
    for (const transition2 of t) {
      if (transition2.is_global || local) {
        transitions.push(transition2);
      }
    }
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    if ((child2.f & ROOT_EFFECT) === 0) {
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (child2.f & BRANCH_EFFECT) !== 0 && (effect2.f & BLOCK_EFFECT) !== 0;
      pause_children(child2, transitions, transparent ? local : false);
    }
    child2 = sibling2;
  }
}
function resume_effect(effect2) {
  effect2.f &= ~PAUSED;
  resume_children(effect2, true);
}
function resume_children(effect2, local) {
  if ((effect2.f & PAUSED) !== 0) return;
  if ((effect2.f & INERT) === 0) return;
  effect2.f ^= INERT;
  if ((effect2.f & CLEAN) === 0) {
    set_signal_status(effect2, DIRTY);
    Batch.ensure().schedule(effect2);
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
    resume_children(child2, transparent ? local : false);
    child2 = sibling2;
  }
  var t = effect2.nodes && effect2.nodes.t;
  if (t !== null) {
    for (const transition2 of t) {
      if (transition2.is_global || local) {
        transition2.in();
      }
    }
  }
}
function move_effect(effect2, fragment) {
  if (!effect2.nodes) return;
  var node = effect2.nodes.start;
  var end = effect2.nodes.end;
  while (node !== null) {
    var next2 = node === end ? null : get_next_sibling(node);
    fragment.append(node);
    node = next2;
  }
}

// node_modules/svelte/src/internal/client/legacy.js
var captured_signals = null;

// node_modules/svelte/src/internal/client/runtime.js
var is_destroying_effect = false;
function set_is_destroying_effect(value) {
  is_destroying_effect = value;
}
var active_reaction = null;
var untracking = false;
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
var active_effect = null;
function set_active_effect(effect2) {
  active_effect = effect2;
}
var current_sources = null;
function push_reaction_value(value) {
  if (active_reaction !== null && (!async_mode_flag && (active_reaction.f & REACTION_IS_UPDATING) !== 0 || (active_reaction.f & DERIVED) !== 0)) {
    (current_sources ??= /* @__PURE__ */ new Set()).add(value);
  }
}
var new_deps = null;
var skipped_deps = 0;
var untracked_writes = null;
function set_untracked_writes(value) {
  untracked_writes = value;
}
var write_version = 1;
var read_version = 0;
var update_version = read_version;
function set_update_version(value) {
  update_version = value;
}
function increment_write_version() {
  return ++write_version;
}
function is_dirty(reaction) {
  var flags2 = reaction.f;
  if ((flags2 & DIRTY) !== 0) {
    return true;
  }
  if ((flags2 & MAYBE_DIRTY) !== 0) {
    var dependencies = (
      /** @type {Value[]} */
      reaction.deps
    );
    var length2 = dependencies.length;
    for (var i = 0; i < length2; i++) {
      var dependency = dependencies[i];
      if (is_dirty(
        /** @type {Derived} */
        dependency
      )) {
        update_derived(
          /** @type {Derived} */
          dependency
        );
      }
      if (dependency.wv > reaction.wv) {
        return true;
      }
    }
    if ((flags2 & CONNECTED) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    batch_values === null) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function schedule_possible_effect_self_invalidation(signal, effect2, root2 = true) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  if (!async_mode_flag && current_sources !== null && current_sources.has(signal)) {
    return;
  }
  for (var i = 0; i < reactions.length; i++) {
    var reaction = reactions[i];
    if ((reaction.f & DERIVED) !== 0) {
      schedule_possible_effect_self_invalidation(
        /** @type {Derived} */
        reaction,
        effect2,
        false
      );
    } else if (effect2 === reaction) {
      if (root2) {
        set_signal_status(reaction, DIRTY);
      } else if ((reaction.f & CLEAN) !== 0) {
        set_signal_status(reaction, MAYBE_DIRTY);
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function update_reaction(reaction) {
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_sources = current_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var previous_update_version = update_version;
  var flags2 = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  active_reaction = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  current_sources = null;
  set_component_context(reaction.ctx);
  untracking = false;
  update_version = ++read_version;
  if (reaction.ac !== null) {
    without_reactive_context(() => {
      reaction.ac.abort(STALE_REACTION);
    });
    reaction.ac = null;
  }
  try {
    reaction.f |= REACTION_IS_UPDATING;
    var fn = (
      /** @type {Function} */
      reaction.fn
    );
    var result = fn();
    reaction.f |= REACTION_RAN;
    var deps = update_dependencies(reaction);
    if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (var i = 0; i < /** @type {Source[]} */
      untracked_writes.length; i++) {
        schedule_possible_effect_self_invalidation(
          untracked_writes[i],
          /** @type {Effect} */
          reaction
        );
      }
    }
    if (previous_reaction !== null && previous_reaction !== reaction) {
      read_version++;
      if (previous_reaction.deps !== null) {
        for (let i2 = 0; i2 < previous_skipped_deps; i2 += 1) {
          previous_reaction.deps[i2].rv = read_version;
        }
      }
      if (previous_deps !== null) {
        for (const dep of previous_deps) {
          dep.rv = read_version;
        }
      }
      if (untracked_writes !== null) {
        if (previous_untracked_writes === null) {
          previous_untracked_writes = untracked_writes;
        } else {
          previous_untracked_writes.push(.../** @type {Source[]} */
          untracked_writes);
        }
      }
    }
    if ((reaction.f & ERROR_VALUE) !== 0) {
      reaction.f ^= ERROR_VALUE;
    }
    return result;
  } catch (error) {
    update_dependencies(reaction);
    return handle_error(error);
  } finally {
    reaction.f ^= REACTION_IS_UPDATING;
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    current_sources = previous_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
    update_version = previous_update_version;
  }
}
function update_dependencies(reaction) {
  var deps = reaction.deps;
  var is_fork = current_batch?.is_fork;
  if (new_deps !== null) {
    var i;
    if (!is_fork) {
      remove_reactions(reaction, skipped_deps);
    }
    if (deps !== null && skipped_deps > 0) {
      deps.length = skipped_deps + new_deps.length;
      for (i = 0; i < new_deps.length; i++) {
        deps[skipped_deps + i] = new_deps[i];
      }
    } else {
      reaction.deps = deps = new_deps;
    }
    if (effect_tracking() && (reaction.f & CONNECTED) !== 0) {
      for (i = skipped_deps; i < deps.length; i++) {
        (deps[i].reactions ??= []).push(reaction);
      }
    }
  } else if (!is_fork && deps !== null && skipped_deps < deps.length) {
    remove_reactions(reaction, skipped_deps);
    deps.length = skipped_deps;
  }
  return deps;
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index2 = index_of.call(reactions, signal);
    if (index2 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index2] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !includes.call(new_deps, dependency))) {
    var derived2 = (
      /** @type {Derived} */
      dependency
    );
    if ((derived2.f & CONNECTED) !== 0) {
      derived2.f ^= CONNECTED;
    }
    if (derived2.v !== UNINITIALIZED) {
      update_derived_status(derived2);
    }
    if (derived2.ac !== null) {
      without_reactive_context(() => {
        derived2.ac.abort(STALE_REACTION);
        derived2.ac = null;
        set_signal_status(derived2, DIRTY);
      });
    }
    freeze_derived_effects(derived2);
    remove_reactions(derived2, 0);
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
function update_effect(effect2) {
  var flags2 = effect2.f;
  if ((flags2 & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  active_effect = effect2;
  if (false_default) {
    var previous_component_fn = dev_current_component_function;
    set_dev_current_component_function(effect2.component_function);
    var previous_stack = (
      /** @type {any} */
      dev_stack
    );
    set_dev_stack(effect2.dev_stack ?? dev_stack);
  }
  try {
    if ((flags2 & (BLOCK_EFFECT | MANAGED_EFFECT)) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    execute_effect_teardown(effect2);
    var teardown2 = update_reaction(effect2);
    effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
    effect2.wv = write_version;
    if (false_default && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && effect2.deps !== null) {
      for (var dep of effect2.deps) {
        if (dep.set_during_effect) {
          dep.wv = increment_write_version();
          dep.set_during_effect = false;
        }
      }
    }
  } finally {
    active_effect = previous_effect;
    if (false_default) {
      set_dev_current_component_function(previous_component_fn);
      set_dev_stack(previous_stack);
    }
  }
}
async function tick() {
  if (async_mode_flag) {
    return new Promise((f) => {
      requestAnimationFrame(() => f());
      setTimeout(() => f());
    });
  }
  await Promise.resolve();
  flushSync();
}
function get(signal) {
  var flags2 = signal.f;
  var is_derived = (flags2 & DERIVED) !== 0;
  captured_signals?.add(signal);
  if (active_reaction !== null && !untracking) {
    var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;
    if (!destroyed && (current_sources === null || !current_sources.has(signal))) {
      var deps = active_reaction.deps;
      if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
        if (signal.rv < read_version) {
          signal.rv = read_version;
          if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
            skipped_deps++;
          } else if (new_deps === null) {
            new_deps = [signal];
          } else {
            new_deps.push(signal);
          }
        }
      } else {
        active_reaction.deps ??= [];
        if (!includes.call(active_reaction.deps, signal)) {
          active_reaction.deps.push(signal);
        }
        var reactions = signal.reactions;
        if (reactions === null) {
          signal.reactions = [active_reaction];
        } else if (!includes.call(reactions, active_reaction)) {
          reactions.push(active_reaction);
        }
      }
    }
  }
  if (false_default) {
    if (!untracking && reactivity_loss_tracker && // By checking that current/previous batch are null we filter out false positives.
    // reactivity_loss_tracker is only reset after a microtask, so if a flush happens
    // before that, we get warnings for things we shouldn't warn on.
    current_batch === null && previous_batch === null && !reactivity_loss_tracker.warned && (reactivity_loss_tracker.effect.f & REACTION_IS_UPDATING) === 0 && !reactivity_loss_tracker.effect_deps.has(signal)) {
      reactivity_loss_tracker.warned = true;
      await_reactivity_loss(
        /** @type {string} */
        signal.label
      );
      var trace2 = get_error("traced at");
      if (trace2) console.warn(trace2);
    }
    recent_async_deriveds.delete(signal);
    if (tracing_mode_flag && !untracking && tracing_expressions !== null && active_reaction !== null && tracing_expressions.reaction === active_reaction) {
      if (signal.trace) {
        signal.trace();
      } else {
        trace2 = get_error("traced at");
        if (trace2) {
          var entry = tracing_expressions.entries.get(signal);
          if (entry === void 0) {
            entry = { traces: [] };
            tracing_expressions.entries.set(signal, entry);
          }
          var last = entry.traces[entry.traces.length - 1];
          if (trace2.stack !== last?.stack) {
            entry.traces.push(trace2);
          }
        }
      }
    }
  }
  if (is_destroying_effect && old_values.has(signal)) {
    return old_values.get(signal);
  }
  if (is_derived) {
    var derived2 = (
      /** @type {Derived} */
      signal
    );
    if (is_destroying_effect) {
      var value = derived2.v;
      if ((derived2.f & CLEAN) === 0 && derived2.reactions !== null || depends_on_old_values(derived2)) {
        value = execute_derived(derived2);
      }
      old_values.set(derived2, value);
      return value;
    }
    var should_connect = (derived2.f & CONNECTED) === 0 && !untracking && active_reaction !== null && (active_reaction.f & CONNECTED) !== 0;
    var is_new = (derived2.f & REACTION_RAN) === 0;
    if (is_dirty(derived2)) {
      if (should_connect) {
        derived2.f |= CONNECTED;
      }
      update_derived(derived2);
    }
    if (should_connect && !is_new) {
      unfreeze_derived_effects(derived2);
      reconnect(derived2);
    }
  }
  if (batch_values?.has(signal)) {
    return batch_values.get(signal);
  }
  if ((signal.f & ERROR_VALUE) !== 0) {
    throw signal.v;
  }
  return signal.v;
}
function reconnect(derived2) {
  derived2.f |= CONNECTED;
  if (derived2.deps === null) return;
  for (const dep of derived2.deps) {
    var reactions = dep.reactions;
    if (reactions === null) {
      dep.reactions = [derived2];
    } else if (!includes.call(reactions, derived2)) {
      reactions.push(derived2);
    }
    if ((dep.f & DERIVED) !== 0 && (dep.f & CONNECTED) === 0) {
      unfreeze_derived_effects(
        /** @type {Derived} */
        dep
      );
      reconnect(
        /** @type {Derived} */
        dep
      );
    }
  }
}
function depends_on_old_values(derived2) {
  if (derived2.v === UNINITIALIZED) return true;
  if (derived2.deps === null) return false;
  for (const dep of derived2.deps) {
    if (old_values.has(dep)) {
      return true;
    }
    if ((dep.f & DERIVED) !== 0 && depends_on_old_values(
      /** @type {Derived} */
      dep
    )) {
      return true;
    }
  }
  return false;
}
function untrack(fn) {
  var previous_untracking = untracking;
  try {
    untracking = true;
    return fn();
  } finally {
    untracking = previous_untracking;
  }
}

// node_modules/svelte/src/utils.js
var DOM_BOOLEAN_ATTRIBUTES = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected",
  "webkitdirectory",
  "defer",
  "disablepictureinpicture",
  "disableremoteplayback"
];
var DOM_PROPERTIES = [
  ...DOM_BOOLEAN_ATTRIBUTES,
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  "readOnly",
  "value",
  "volume",
  "defaultValue",
  "defaultChecked",
  "srcObject",
  "noValidate",
  "allowFullscreen",
  "disablePictureInPicture",
  "disableRemotePlayback"
];
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}
var STATE_CREATION_RUNES = (
  /** @type {const} */
  [
    "$state",
    "$state.raw",
    "$derived",
    "$derived.by"
  ]
);
var RUNES = (
  /** @type {const} */
  [
    ...STATE_CREATION_RUNES,
    "$state.eager",
    "$state.snapshot",
    "$props",
    "$props.id",
    "$bindable",
    "$effect",
    "$effect.pre",
    "$effect.tracking",
    "$effect.root",
    "$effect.pending",
    "$inspect",
    "$inspect().with",
    "$inspect.trace",
    "$host"
  ]
);

// node_modules/svelte/src/internal/client/dom/elements/events.js
var event_symbol = Symbol("events");
var all_registered_events = /* @__PURE__ */ new Set();
var root_event_handles = /* @__PURE__ */ new Set();
function create_event(event_name, dom, handler, options = {}) {
  function target_handler(event2) {
    if (!options.capture) {
      handle_event_propagation.call(dom, event2);
    }
    if (!event2.cancelBubble) {
      return without_reactive_context(() => {
        return handler?.call(this, event2);
      });
    }
  }
  if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") {
    target_handler.__removed = false;
    queue_micro_task(() => {
      if (!target_handler.__removed) {
        dom.addEventListener(event_name, target_handler, options);
      }
    });
  } else {
    dom.addEventListener(event_name, target_handler, options);
  }
  return target_handler;
}
function event(event_name, dom, handler, capture2, passive2) {
  var options = { capture: capture2, passive: passive2 };
  var target_handler = create_event(event_name, dom, handler, options);
  if (dom === document.body || // @ts-ignore
  dom === window || // @ts-ignore
  dom === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  dom instanceof HTMLMediaElement) {
    teardown(() => {
      target_handler.__removed = true;
      dom.removeEventListener(event_name, target_handler, options);
    });
  }
}
function delegated(event_name, element2, handler) {
  (element2[event_symbol] ??= {})[event_name] = handler;
}
function delegate(events) {
  for (var i = 0; i < events.length; i++) {
    all_registered_events.add(events[i]);
  }
  for (var fn of root_event_handles) {
    fn(events);
  }
}
var last_propagated_event = null;
var last_propagated_event_clear_scheduled = false;
function handle_event_propagation(event2) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event2.type;
  var path = event2.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event2.target
  );
  last_propagated_event = event2;
  if (!last_propagated_event_clear_scheduled) {
    last_propagated_event_clear_scheduled = true;
    setTimeout(() => {
      last_propagated_event_clear_scheduled = false;
      last_propagated_event = null;
    });
  }
  var path_idx = 0;
  var handled_at = last_propagated_event === event2 && event2[event_symbol];
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event2[event_symbol] = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event2.target;
  if (current_target === handler_element) return;
  define_property(event2, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      if (current_target === handler_element) break;
      try {
        var delegated2 = current_target[event_symbol]?.[event_name];
        if (delegated2 != null && (!/** @type {any} */
        current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        event2.target === current_target)) {
          delegated2.call(current_target, event2);
        }
      } catch (error) {
        if (throw_error) {
          other_errors.push(error);
        } else {
          throw_error = error;
        }
      }
      if (event2.cancelBubble) break;
      path_idx++;
      current_target = path_idx < path.length ? (
        /** @type {Element} */
        path[path_idx]
      ) : null;
    }
    if (throw_error) {
      for (let error of other_errors) {
        queueMicrotask(() => {
          throw error;
        });
      }
      throw throw_error;
    }
  } finally {
    event2[event_symbol] = handler_element;
    delete event2.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}

// node_modules/svelte/src/internal/client/dom/reconciler.js
var policy = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (html2) => {
      return html2;
    }
  })
);
function create_trusted_html(html2) {
  return (
    /** @type {string} */
    policy?.createHTML(html2) ?? html2
  );
}
function create_fragment_from_html(html2) {
  var elem = create_element("template");
  elem.innerHTML = create_trusted_html(html2.replaceAll("<!>", "<!---->"));
  return elem.content;
}

// node_modules/svelte/src/internal/client/dom/template.js
function assign_nodes(start, end) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if (effect2.nodes === null) {
    effect2.nodes = { start, end, a: null, t: null };
  }
}
// @__NO_SIDE_EFFECTS__
function from_html(content, flags2) {
  var is_fragment = (flags2 & TEMPLATE_FRAGMENT) !== 0;
  var use_import_node = (flags2 & TEMPLATE_USE_IMPORT_NODE) !== 0;
  var node;
  var has_start = !content.startsWith("<!>");
  return () => {
    if (hydrating) {
      assign_nodes(hydrate_node, null);
      return hydrate_node;
    }
    if (node === void 0) {
      node = create_fragment_from_html(has_start ? content : "<!>" + content);
      if (!is_fragment) node = /** @type {TemplateNode} */
      get_first_child(node);
    }
    var clone = (
      /** @type {TemplateNode} */
      use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true)
    );
    if (is_fragment) {
      var start = (
        /** @type {TemplateNode} */
        get_first_child(clone)
      );
      var end = (
        /** @type {TemplateNode} */
        clone.lastChild
      );
      assign_nodes(start, end);
    } else {
      assign_nodes(clone, clone);
    }
    return clone;
  };
}
function comment() {
  if (hydrating) {
    assign_nodes(hydrate_node, null);
    return hydrate_node;
  }
  var frag = document.createDocumentFragment();
  var start = document.createComment("");
  var anchor = create_text();
  frag.append(start, anchor);
  assign_nodes(start, anchor);
  return frag;
}
function append(anchor, dom) {
  if (hydrating) {
    var effect2 = (
      /** @type {Effect & { nodes: EffectNodes }} */
      active_effect
    );
    if ((effect2.f & REACTION_RAN) === 0 || effect2.nodes.end === null) {
      effect2.nodes.end = hydrate_node;
    }
    hydrate_next();
    return;
  }
  if (anchor === null) {
    return;
  }
  anchor.before(
    /** @type {Node} */
    dom
  );
}

// node_modules/svelte/src/reactivity/create-subscriber.js
function createSubscriber(start) {
  let subscribers = 0;
  let version = source(0);
  let stop;
  if (false_default) {
    tag(version, "createSubscriber version");
  }
  return () => {
    if (effect_tracking()) {
      get(version);
      render_effect(() => {
        if (subscribers === 0) {
          stop = untrack(() => start(() => increment(version)));
        }
        subscribers += 1;
        return () => {
          queue_micro_task(() => {
            subscribers -= 1;
            if (subscribers === 0) {
              stop?.();
              stop = void 0;
              increment(version);
            }
          });
        };
      });
    }
  };
}

// node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
function boundary(node, props, children, transform_error) {
  new Boundary(node, props, children, transform_error);
}
var Boundary = class {
  /** @type {Boundary | null} */
  parent;
  is_pending = false;
  /**
   * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
   * Inherited from parent boundary, or defaults to identity.
   * @type {(error: unknown) => unknown}
   */
  transform_error;
  /** @type {TemplateNode} */
  #anchor;
  /** @type {TemplateNode | null} */
  #hydrate_open = hydrating ? hydrate_node : null;
  /** @type {BoundaryProps} */
  #props;
  /** @type {((anchor: Node) => void)} */
  #children;
  /** @type {Effect} */
  #effect;
  /** @type {Effect | null} */
  #main_effect = null;
  /** @type {Effect | null} */
  #pending_effect = null;
  /** @type {Effect | null} */
  #failed_effect = null;
  /** @type {DocumentFragment | null} */
  #offscreen_fragment = null;
  #local_pending_count = 0;
  #pending_count = 0;
  #pending_count_update_queued = false;
  /** @type {Set<Effect>} */
  #dirty_effects = /* @__PURE__ */ new Set();
  /** @type {Set<Effect>} */
  #maybe_dirty_effects = /* @__PURE__ */ new Set();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #effect_pending = null;
  #effect_pending_subscriber = createSubscriber(() => {
    this.#effect_pending = source(this.#local_pending_count);
    if (false_default) {
      tag(this.#effect_pending, "$effect.pending()");
    }
    return () => {
      this.#effect_pending = null;
    };
  });
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(node, props, children, transform_error) {
    this.#anchor = node;
    this.#props = props;
    this.#children = (anchor) => {
      var effect2 = (
        /** @type {Effect} */
        active_effect
      );
      effect2.b = this;
      effect2.f |= BOUNDARY_EFFECT;
      children(anchor);
    };
    this.parent = /** @type {Effect} */
    active_effect.b;
    this.transform_error = transform_error ?? this.parent?.transform_error ?? ((e) => e);
    this.#effect = block(() => {
      if (hydrating) {
        const comment_data = read_hydration_instruction(
          /** @type {TemplateNode} */
          this.#hydrate_open
        );
        hydrate_next();
        const server_rendered_pending = comment_data === HYDRATION_START_ELSE;
        const server_rendered_failed = comment_data.startsWith(HYDRATION_START_FAILED);
        if (server_rendered_failed) {
          const serialized_error = JSON.parse(comment_data.slice(HYDRATION_START_FAILED.length));
          this.#hydrate_failed_content(serialized_error);
        } else if (server_rendered_pending) {
          this.#hydrate_pending_content();
        } else {
          this.#hydrate_resolved_content();
        }
      } else {
        this.#render();
      }
    }, flags);
    if (hydrating) {
      this.#anchor = hydrate_node;
    }
  }
  #hydrate_resolved_content() {
    try {
      this.#main_effect = branch(() => this.#children(this.#anchor));
    } catch (error) {
      this.error(error);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #hydrate_failed_content(error) {
    const failed = this.#props.failed;
    const { reset: reset2, invoke_onerror } = this.#create_reset(error);
    queue_micro_task(invoke_onerror);
    if (!failed) return;
    this.#failed_effect = branch(() => {
      failed(
        this.#anchor,
        () => error,
        () => reset2
      );
    });
  }
  /**
   * Creates the `reset` function for a failed boundary, along with a function
   * that invokes `onerror` with it (if provided)
   * @param {unknown} error
   * @returns {{ reset: () => void, invoke_onerror: () => void }}
   */
  #create_reset(error) {
    var did_reset = false;
    var calling_on_error = false;
    const reset2 = () => {
      if (this.#is_destroyed()) return;
      if (did_reset) {
        svelte_boundary_reset_noop();
        return;
      }
      did_reset = true;
      if (calling_on_error) {
        svelte_boundary_reset_onerror();
      }
      if (this.#failed_effect !== null) {
        pause_effect(this.#failed_effect, () => {
          this.#failed_effect = null;
        });
      }
      this.#run(() => {
        this.#render();
      });
    };
    const invoke_onerror = () => {
      if (this.#is_destroyed()) return;
      try {
        calling_on_error = true;
        this.#props.onerror?.(error, reset2);
        calling_on_error = false;
      } catch (err) {
        invoke_error_boundary(err, this.#effect && this.#effect.parent);
      }
    };
    return { reset: reset2, invoke_onerror };
  }
  #is_destroyed() {
    return (this.#effect.f & (DESTROYED | DESTROYING)) !== 0;
  }
  #hydrate_pending_content() {
    const pending2 = this.#props.pending;
    if (!pending2) return;
    this.is_pending = true;
    this.#pending_effect = branch(() => pending2(this.#anchor));
    queue_micro_task(() => {
      if (this.#is_destroyed()) return;
      var fragment = this.#offscreen_fragment = document.createDocumentFragment();
      var anchor = create_text();
      var handled = false;
      fragment.append(anchor);
      this.#main_effect = this.#run(() => {
        try {
          return branch(() => this.#children(anchor));
        } catch (error) {
          try {
            this.error(error);
            handled = true;
          } catch (error2) {
            invoke_error_boundary(error2, this.#effect.parent);
          }
          return null;
        }
      });
      if (this.#main_effect === null) {
        this.#offscreen_fragment = null;
        if (handled) this.#resolve(
          /** @type {Batch} */
          current_batch
        );
        return;
      }
      if (this.#pending_count === 0) {
        this.#anchor.before(fragment);
        this.#offscreen_fragment = null;
        pause_effect(
          /** @type {Effect} */
          this.#pending_effect,
          () => {
            this.#pending_effect = null;
          }
        );
        this.#resolve(
          /** @type {Batch} */
          current_batch
        );
      }
    });
  }
  #render() {
    try {
      this.is_pending = this.has_pending_snippet();
      this.#pending_count = 0;
      this.#local_pending_count = 0;
      this.#main_effect = branch(() => {
        this.#children(this.#anchor);
      });
      if (this.#pending_count > 0) {
        var fragment = this.#offscreen_fragment = document.createDocumentFragment();
        move_effect(this.#main_effect, fragment);
        const pending2 = (
          /** @type {(anchor: Node) => void} */
          this.#props.pending
        );
        this.#pending_effect = branch(() => pending2(this.#anchor));
      } else {
        this.#resolve(
          /** @type {Batch} */
          current_batch
        );
      }
    } catch (error) {
      this.error(error);
    }
  }
  /**
   * @param {Batch} batch
   */
  #resolve(batch) {
    this.is_pending = false;
    batch.transfer_effects(this.#dirty_effects, this.#maybe_dirty_effects);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(effect2) {
    defer_effect(effect2, this.#dirty_effects, this.#maybe_dirty_effects);
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#props.pending;
  }
  /**
   * @template T
   * @param {() => T} fn
   */
  #run(fn) {
    var previous_effect = active_effect;
    var previous_reaction = active_reaction;
    var previous_ctx = component_context;
    set_active_effect(this.#effect);
    set_active_reaction(this.#effect);
    set_component_context(this.#effect.ctx);
    try {
      Batch.ensure();
      return fn();
    } finally {
      set_active_effect(previous_effect);
      set_active_reaction(previous_reaction);
      set_component_context(previous_ctx);
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  #update_pending_count(d, batch) {
    if (!this.has_pending_snippet()) {
      if (this.parent) {
        this.parent.#update_pending_count(d, batch);
      }
      return;
    }
    this.#pending_count += d;
    if (this.#pending_count === 0) {
      this.#resolve(batch);
      if (this.#pending_effect) {
        pause_effect(this.#pending_effect, () => {
          this.#pending_effect = null;
        });
      }
      if (this.#offscreen_fragment) {
        this.#anchor.before(this.#offscreen_fragment);
        this.#offscreen_fragment = null;
      }
    }
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(d, batch) {
    this.#update_pending_count(d, batch);
    this.#local_pending_count += d;
    if (!this.#effect_pending || this.#pending_count_update_queued) return;
    this.#pending_count_update_queued = true;
    queue_micro_task(() => {
      this.#pending_count_update_queued = false;
      if (this.#effect_pending) {
        internal_set(this.#effect_pending, this.#local_pending_count);
      }
    });
  }
  get_effect_pending() {
    this.#effect_pending_subscriber();
    return get(
      /** @type {Source<number>} */
      this.#effect_pending
    );
  }
  /** @param {unknown} error */
  error(error) {
    if (error === HYDRATION_ERROR) {
      throw error;
    }
    if (!this.#props.onerror && !this.#props.failed) {
      throw error;
    }
    if (current_batch?.is_fork) {
      if (this.#main_effect) current_batch.skip_effect(this.#main_effect);
      if (this.#pending_effect) current_batch.skip_effect(this.#pending_effect);
      if (this.#failed_effect) current_batch.skip_effect(this.#failed_effect);
      current_batch.oncommit(() => {
        if (!this.#is_destroyed()) this.#handle_error(error);
      });
    } else {
      this.#handle_error(error);
    }
  }
  /**
   * @param {unknown} error
   */
  #handle_error(error) {
    if (this.#main_effect) {
      destroy_effect(this.#main_effect);
      this.#main_effect = null;
    }
    if (this.#pending_effect) {
      destroy_effect(this.#pending_effect);
      this.#pending_effect = null;
    }
    if (this.#failed_effect) {
      destroy_effect(this.#failed_effect);
      this.#failed_effect = null;
    }
    if (hydrating) {
      set_hydrate_node(
        /** @type {TemplateNode} */
        this.#hydrate_open
      );
      next();
      set_hydrate_node(skip_nodes());
    }
    let failed = this.#props.failed;
    const handle_error_result = (transformed_error) => {
      if (this.#is_destroyed()) return;
      const { reset: reset2, invoke_onerror } = this.#create_reset(transformed_error);
      invoke_onerror();
      if (failed && !this.#is_destroyed()) {
        this.#failed_effect = this.#run(() => {
          try {
            return branch(() => {
              var effect2 = (
                /** @type {Effect} */
                active_effect
              );
              effect2.b = this;
              effect2.f |= BOUNDARY_EFFECT;
              failed(
                this.#anchor,
                () => transformed_error,
                () => reset2
              );
            });
          } catch (error2) {
            invoke_error_boundary(
              error2,
              /** @type {Effect} */
              this.#effect.parent
            );
            return null;
          }
        });
      }
    };
    queue_micro_task(() => {
      if (this.#is_destroyed()) return;
      var result;
      try {
        result = this.transform_error(error);
      } catch (e) {
        invoke_error_boundary(e, this.#effect && this.#effect.parent);
        return;
      }
      if (result !== null && typeof result === "object" && typeof /** @type {any} */
      result.then === "function") {
        result.then(
          handle_error_result,
          /** @param {unknown} e */
          (e) => invoke_error_boundary(e, this.#effect && this.#effect.parent)
        );
      } else {
        handle_error_result(result);
      }
    });
  }
};

// node_modules/svelte/src/internal/client/render.js
var should_intro = true;
function set_text(text2, value) {
  var str = value == null ? "" : typeof value === "object" ? `${value}` : value;
  if (str !== /** @type {any} */
  (text2[TEXT_CACHE] ??= text2.nodeValue)) {
    text2[TEXT_CACHE] = str;
    text2.nodeValue = `${str}`;
  }
}
function mount(component2, options) {
  return _mount(component2, options);
}
function hydrate(component2, options) {
  init_operations();
  options.intro = options.intro ?? false;
  const target = options.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = get_first_child(target);
    while (anchor && (anchor.nodeType !== COMMENT_NODE || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    const instance = _mount(component2, { ...options, anchor });
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error) {
    if (error instanceof Error && error.message.split("\n").some((line) => line.startsWith("https://svelte.dev/e/"))) {
      throw error;
    }
    if (error !== HYDRATION_ERROR) {
      console.warn("Failed to hydrate: ", error);
    }
    if (options.recover === false) {
      hydration_failed();
    }
    init_operations();
    clear_text_content(target);
    set_hydrating(false);
    return mount(component2, options);
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
  }
}
var listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context, intro = true, transformError }) {
  init_operations();
  var component2 = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    boundary(
      /** @type {TemplateNode} */
      anchor_node,
      {
        pending: () => {
        }
      },
      (anchor_node2) => {
        push({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        if (context) ctx.c = context;
        if (events) {
          props.$$events = events;
        }
        if (hydrating) {
          assign_nodes(
            /** @type {TemplateNode} */
            anchor_node2,
            null
          );
        }
        should_intro = intro;
        component2 = Component(anchor_node2, props) || mark_as_component();
        should_intro = true;
        if (hydrating) {
          active_effect.nodes.end = hydrate_node;
          if (hydrate_node === null || hydrate_node.nodeType !== COMMENT_NODE || /** @type {Comment} */
          hydrate_node.data !== HYDRATION_END) {
            hydration_mismatch();
            throw HYDRATION_ERROR;
          }
        }
        pop();
      },
      transformError
    );
    var registered_events = /* @__PURE__ */ new Set();
    var event_handle = (events2) => {
      for (var i = 0; i < events2.length; i++) {
        var event_name = events2[i];
        if (registered_events.has(event_name)) continue;
        registered_events.add(event_name);
        var passive2 = is_passive_event(event_name);
        for (const node of [target, document]) {
          var counts = listeners.get(node);
          if (counts === void 0) {
            counts = /* @__PURE__ */ new Map();
            listeners.set(node, counts);
          }
          var count = counts.get(event_name);
          if (count === void 0) {
            node.addEventListener(event_name, handle_event_propagation, { passive: passive2 });
            counts.set(event_name, 1);
          } else {
            counts.set(event_name, count + 1);
          }
        }
      }
    };
    event_handle(array_from(all_registered_events));
    root_event_handles.add(event_handle);
    return () => {
      for (var event_name of registered_events) {
        for (const node of [target, document]) {
          var counts = (
            /** @type {Map<string, number>} */
            listeners.get(node)
          );
          var count = (
            /** @type {number} */
            counts.get(event_name)
          );
          if (--count == 0) {
            node.removeEventListener(event_name, handle_event_propagation);
            counts.delete(event_name);
            if (counts.size === 0) {
              listeners.delete(node);
            }
          } else {
            counts.set(event_name, count);
          }
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component2, unmount2);
  return component2;
}
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component2, options) {
  const fn = mounted_components.get(component2);
  if (fn) {
    mounted_components.delete(component2);
    return fn(options);
  }
  if (false_default) {
    lifecycle_double_unmount();
  }
  return Promise.resolve();
}

// node_modules/svelte/src/internal/client/dom/blocks/branches.js
var BranchManager = class {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #batches = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #onscreen = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #offscreen = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #outroing = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #transition = true;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(anchor, transition2 = true) {
    this.anchor = anchor;
    this.#transition = transition2;
  }
  /**
   * @param {Batch} batch
   */
  #commit = (batch) => {
    if (!this.#batches.has(batch)) return;
    var key2 = (
      /** @type {Key} */
      this.#batches.get(batch)
    );
    var onscreen = this.#onscreen.get(key2);
    if (onscreen) {
      resume_effect(onscreen);
      this.#outroing.delete(key2);
    } else {
      var offscreen = this.#offscreen.get(key2);
      if (offscreen) {
        resume_effect(offscreen.effect);
        this.#onscreen.set(key2, offscreen.effect);
        this.#offscreen.delete(key2);
        if (false_default) {
          offscreen.fragment.lastChild[HMR_ANCHOR] = this.anchor;
        }
        offscreen.fragment.lastChild.remove();
        this.anchor.before(offscreen.fragment);
        onscreen = offscreen.effect;
      }
    }
    for (const [b, k] of this.#batches) {
      this.#batches.delete(b);
      if (b === batch) {
        break;
      }
      const offscreen2 = this.#offscreen.get(k);
      if (offscreen2) {
        destroy_effect(offscreen2.effect);
        this.#offscreen.delete(k);
      }
    }
    for (const [k, effect2] of this.#onscreen) {
      if (k === key2 || this.#outroing.has(k)) continue;
      const on_destroy = () => {
        const keys2 = Array.from(this.#batches.values());
        if (keys2.includes(k)) {
          var fragment = document.createDocumentFragment();
          move_effect(effect2, fragment);
          fragment.append(create_text());
          this.#offscreen.set(k, { effect: effect2, fragment });
        } else {
          destroy_effect(effect2);
        }
        this.#outroing.delete(k);
        this.#onscreen.delete(k);
      };
      if (this.#transition || !onscreen) {
        this.#outroing.add(k);
        pause_effect(effect2, on_destroy, false);
      } else {
        on_destroy();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #discard = (batch) => {
    this.#batches.delete(batch);
    const keys2 = Array.from(this.#batches.values());
    for (const [k, branch2] of this.#offscreen) {
      if (!keys2.includes(k)) {
        destroy_effect(branch2.effect);
        this.#offscreen.delete(k);
      }
    }
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(key2, fn) {
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    var defer = should_defer_append();
    if (fn && !this.#onscreen.has(key2) && !this.#offscreen.has(key2)) {
      if (defer) {
        var fragment = document.createDocumentFragment();
        var target = create_text();
        fragment.append(target);
        this.#offscreen.set(key2, {
          effect: branch(() => fn(target)),
          fragment
        });
      } else {
        this.#onscreen.set(
          key2,
          branch(() => fn(this.anchor))
        );
      }
    }
    this.#batches.set(batch, key2);
    if (defer) {
      for (const [k, effect2] of this.#onscreen) {
        if (k === key2) {
          batch.unskip_effect(effect2);
        } else {
          batch.skip_effect(effect2);
        }
      }
      for (const [k, branch2] of this.#offscreen) {
        if (k === key2) {
          batch.unskip_effect(branch2.effect);
        } else {
          batch.skip_effect(branch2.effect);
        }
      }
      batch.oncommit(this.#commit);
      batch.ondiscard(this.#discard);
    } else {
      if (hydrating) {
        this.anchor = hydrate_node;
      }
      this.#commit(batch);
    }
  }
};

// node_modules/svelte/src/internal/client/dom/blocks/if.js
function if_block(node, fn, elseif = false) {
  var marker;
  if (hydrating) {
    marker = hydrate_node;
    hydrate_next();
  }
  var branches = new BranchManager(node);
  var flags2 = elseif ? EFFECT_TRANSPARENT : 0;
  function update_branch(key2, fn2) {
    if (hydrating) {
      var data = read_hydration_instruction(
        /** @type {TemplateNode} */
        marker
      );
      if (key2 !== parseInt(data.substring(1))) {
        var anchor = skip_nodes();
        set_hydrate_node(anchor);
        branches.anchor = anchor;
        set_hydrating(false);
        branches.ensure(key2, fn2);
        set_hydrating(true);
        return;
      }
    }
    branches.ensure(key2, fn2);
  }
  block(() => {
    var has_branch = false;
    fn((fn2, key2 = 0) => {
      has_branch = true;
      update_branch(key2, fn2);
    });
    if (!has_branch) {
      update_branch(-1, null);
    }
  }, flags2);
}

// node_modules/svelte/src/internal/client/dom/blocks/key.js
var NAN = Symbol("NaN");

// node_modules/svelte/src/internal/client/dom/blocks/each.js
function index(_, i) {
  return i;
}
function pause_effects(state2, to_destroy, controlled_anchor) {
  var transitions = [];
  var length2 = to_destroy.length;
  var group;
  var remaining = to_destroy.length;
  for (var i = 0; i < length2; i++) {
    let effect2 = to_destroy[i];
    pause_effect(
      effect2,
      () => {
        if (group) {
          group.pending.delete(effect2);
          group.done.add(effect2);
          if (group.pending.size === 0) {
            var groups = (
              /** @type {Set<EachOutroGroup>} */
              state2.outrogroups
            );
            destroy_effects(state2, array_from(group.done));
            groups.delete(group);
            if (groups.size === 0) {
              state2.outrogroups = null;
            }
          }
        } else {
          remaining -= 1;
        }
      },
      false
    );
  }
  if (remaining === 0) {
    var fast_path = transitions.length === 0 && controlled_anchor !== null && state2.pending.size === 0;
    if (fast_path) {
      var anchor = (
        /** @type {Element} */
        controlled_anchor
      );
      var parent_node = (
        /** @type {Element} */
        anchor.parentNode
      );
      clear_text_content(parent_node);
      parent_node.append(anchor);
      state2.items.clear();
    }
    destroy_effects(state2, to_destroy, !fast_path);
  } else {
    group = {
      pending: new Set(to_destroy),
      done: /* @__PURE__ */ new Set()
    };
    (state2.outrogroups ??= /* @__PURE__ */ new Set()).add(group);
  }
}
function destroy_effects(state2, to_destroy, remove_dom = true) {
  var preserved_effects;
  if (state2.pending.size > 0) {
    preserved_effects = /* @__PURE__ */ new Set();
    for (const keys2 of state2.pending.values()) {
      for (const key2 of keys2) {
        preserved_effects.add(
          /** @type {EachItem} */
          state2.items.get(key2).e
        );
      }
    }
  }
  for (var i = 0; i < to_destroy.length; i++) {
    var e = to_destroy[i];
    if (preserved_effects?.has(e)) {
      e.f |= EFFECT_OFFSCREEN;
      const fragment = document.createDocumentFragment();
      move_effect(e, fragment);
    } else {
      destroy_effect(to_destroy[i], remove_dom);
    }
  }
}
var offscreen_anchor;
function each(node, flags2, get_collection, get_key, render_fn, fallback_fn = null) {
  var anchor = node;
  var items = /* @__PURE__ */ new Map();
  var is_controlled = (flags2 & EACH_IS_CONTROLLED) !== 0;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      node
    );
    anchor = hydrating ? set_hydrate_node(get_first_child(parent_node)) : parent_node.appendChild(create_text());
  }
  if (hydrating) {
    hydrate_next();
  }
  var fallback2 = null;
  var each_array = derived_safe_equal(() => {
    var collection = get_collection();
    return (
      /** @type {V[]} */
      is_array(collection) ? collection : collection == null ? [] : array_from(collection)
    );
  });
  if (false_default) {
    tag(each_array, "{#each ...}");
  }
  var pending2 = /* @__PURE__ */ new Map();
  var first_run = true;
  function commit(batch) {
    if ((state2.effect.f & DESTROYED) !== 0) {
      return;
    }
    state2.pending.delete(batch);
    var array = get(each_array);
    state2.fallback = fallback2;
    reconcile(state2, array, anchor, flags2, get_key);
    if (fallback2 !== null) {
      if (array.length === 0) {
        if ((fallback2.f & EFFECT_OFFSCREEN) === 0) {
          resume_effect(fallback2);
        } else {
          fallback2.f ^= EFFECT_OFFSCREEN;
          move(fallback2, null, anchor);
        }
      } else {
        pause_effect(fallback2, () => {
          fallback2 = null;
        });
      }
    }
  }
  function discard(batch) {
    state2.pending.delete(batch);
  }
  var effect2 = block(() => {
    var array = (
      /** @type {V[]} */
      get(each_array)
    );
    var length2 = array.length;
    let mismatch = false;
    if (hydrating) {
      var is_else = read_hydration_instruction(anchor) === HYDRATION_START_ELSE;
      if (is_else !== (length2 === 0)) {
        anchor = skip_nodes();
        set_hydrate_node(anchor);
        set_hydrating(false);
        mismatch = true;
      }
    }
    var keys2 = /* @__PURE__ */ new Set();
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    var defer = should_defer_append();
    for (var index2 = 0; index2 < length2; index2 += 1) {
      if (hydrating && hydrate_node.nodeType === COMMENT_NODE && /** @type {Comment} */
      hydrate_node.data === HYDRATION_END) {
        anchor = /** @type {Comment} */
        hydrate_node;
        mismatch = true;
        set_hydrating(false);
      }
      var value = array[index2];
      var key2 = get_key(value, index2);
      if (false_default) {
        var key_again = get_key(value, index2);
        if (key2 !== key_again) {
          each_key_volatile(String(index2), String(key2), String(key_again));
        }
      }
      var item = first_run ? null : items.get(key2);
      if (item) {
        if (item.v) internal_set(item.v, value);
        if (item.i) internal_set(item.i, index2);
        if (defer) {
          batch.unskip_effect(item.e);
        }
      } else {
        item = create_item(
          items,
          first_run ? anchor : offscreen_anchor ??= create_text(),
          value,
          key2,
          index2,
          render_fn,
          flags2,
          get_collection
        );
        if (!first_run) {
          item.e.f |= EFFECT_OFFSCREEN;
        }
        items.set(key2, item);
      }
      keys2.add(key2);
    }
    if (length2 === 0 && fallback_fn && !fallback2) {
      if (first_run) {
        fallback2 = branch(() => fallback_fn(anchor));
      } else {
        fallback2 = branch(() => fallback_fn(offscreen_anchor ??= create_text()));
        fallback2.f |= EFFECT_OFFSCREEN;
      }
    }
    if (length2 > keys2.size) {
      if (false_default) {
        validate_each_keys(array, get_key);
      } else {
        each_key_duplicate("", "", "");
      }
    }
    if (hydrating && length2 > 0) {
      set_hydrate_node(skip_nodes());
    }
    if (!first_run) {
      pending2.set(batch, keys2);
      if (defer) {
        for (const [key3, item2] of items) {
          if (!keys2.has(key3)) {
            batch.skip_effect(item2.e);
          }
        }
        batch.oncommit(commit);
        batch.ondiscard(discard);
      } else {
        commit(batch);
      }
    }
    if (mismatch) {
      set_hydrating(true);
    }
    get(each_array);
  });
  var state2 = { effect: effect2, flags: flags2, items, pending: pending2, outrogroups: null, fallback: fallback2 };
  first_run = false;
  if (hydrating) {
    anchor = hydrate_node;
  }
}
function skip_to_branch(effect2) {
  while (effect2 !== null && (effect2.f & BRANCH_EFFECT) === 0) {
    effect2 = effect2.next;
  }
  return effect2;
}
function reconcile(state2, array, anchor, flags2, get_key) {
  var is_animated = (flags2 & EACH_IS_ANIMATED) !== 0;
  var length2 = array.length;
  var items = state2.items;
  var current = skip_to_branch(state2.effect.first);
  var seen2;
  var prev = null;
  var to_animate;
  var matched = [];
  var stashed = [];
  var value;
  var key2;
  var effect2;
  var i;
  if (is_animated) {
    for (i = 0; i < length2; i += 1) {
      value = array[i];
      key2 = get_key(value, i);
      effect2 = /** @type {EachItem} */
      items.get(key2).e;
      if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
        effect2.nodes?.a?.measure();
        (to_animate ??= /* @__PURE__ */ new Set()).add(effect2);
      }
    }
  }
  for (i = 0; i < length2; i += 1) {
    value = array[i];
    key2 = get_key(value, i);
    effect2 = /** @type {EachItem} */
    items.get(key2).e;
    if (state2.outrogroups !== null) {
      for (const group of state2.outrogroups) {
        group.pending.delete(effect2);
        group.done.delete(effect2);
      }
    }
    if ((effect2.f & INERT) !== 0) {
      resume_effect(effect2);
      if (is_animated) {
        effect2.nodes?.a?.unfix();
        (to_animate ??= /* @__PURE__ */ new Set()).delete(effect2);
      }
    }
    if ((effect2.f & EFFECT_OFFSCREEN) !== 0) {
      effect2.f ^= EFFECT_OFFSCREEN;
      if (effect2 === current) {
        move(effect2, null, anchor);
      } else {
        var next2 = prev ? prev.next : current;
        if (effect2 === state2.effect.last) {
          state2.effect.last = effect2.prev;
        }
        if (effect2.prev) effect2.prev.next = effect2.next;
        if (effect2.next) effect2.next.prev = effect2.prev;
        link(state2, prev, effect2);
        link(state2, effect2, next2);
        move(effect2, next2, anchor);
        prev = effect2;
        matched = [];
        stashed = [];
        current = skip_to_branch(prev.next);
        continue;
      }
    }
    if (effect2 !== current) {
      if (seen2 !== void 0 && seen2.has(effect2)) {
        if (matched.length < stashed.length) {
          var start = stashed[0];
          var j;
          prev = start.prev;
          var a = matched[0];
          var b = matched[matched.length - 1];
          for (j = 0; j < matched.length; j += 1) {
            move(matched[j], start, anchor);
          }
          for (j = 0; j < stashed.length; j += 1) {
            seen2.delete(stashed[j]);
          }
          link(state2, a.prev, b.next);
          link(state2, prev, a);
          link(state2, b, start);
          current = start;
          prev = b;
          i -= 1;
          matched = [];
          stashed = [];
        } else {
          seen2.delete(effect2);
          move(effect2, current, anchor);
          link(state2, effect2.prev, effect2.next);
          link(state2, effect2, prev === null ? state2.effect.first : prev.next);
          link(state2, prev, effect2);
          prev = effect2;
        }
        continue;
      }
      matched = [];
      stashed = [];
      while (current !== null && current !== effect2) {
        (seen2 ??= /* @__PURE__ */ new Set()).add(current);
        stashed.push(current);
        current = skip_to_branch(current.next);
      }
      if (current === null) {
        continue;
      }
    }
    if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
      matched.push(effect2);
    }
    prev = effect2;
    current = skip_to_branch(effect2.next);
  }
  if (state2.outrogroups !== null) {
    for (const group of state2.outrogroups) {
      if (group.pending.size === 0) {
        destroy_effects(state2, array_from(group.done));
        state2.outrogroups?.delete(group);
      }
    }
    if (state2.outrogroups.size === 0) {
      state2.outrogroups = null;
    }
  }
  if (current !== null || seen2 !== void 0) {
    var to_destroy = [];
    if (seen2 !== void 0) {
      for (effect2 of seen2) {
        if ((effect2.f & INERT) === 0) {
          to_destroy.push(effect2);
        }
      }
    }
    while (current !== null) {
      if ((current.f & INERT) === 0 && current !== state2.fallback) {
        to_destroy.push(current);
      }
      current = skip_to_branch(current.next);
    }
    var destroy_length = to_destroy.length;
    if (destroy_length > 0) {
      var controlled_anchor = (flags2 & EACH_IS_CONTROLLED) !== 0 && length2 === 0 ? anchor : null;
      if (is_animated) {
        for (i = 0; i < destroy_length; i += 1) {
          to_destroy[i].nodes?.a?.measure();
        }
        for (i = 0; i < destroy_length; i += 1) {
          to_destroy[i].nodes?.a?.fix();
        }
      }
      pause_effects(state2, to_destroy, controlled_anchor);
    }
  }
  if (is_animated) {
    queue_micro_task(() => {
      if (to_animate === void 0) return;
      for (effect2 of to_animate) {
        effect2.nodes?.a?.apply();
      }
    });
  }
}
function create_item(items, anchor, value, key2, index2, render_fn, flags2, get_collection) {
  var v = (flags2 & EACH_ITEM_REACTIVE) !== 0 ? (flags2 & EACH_ITEM_IMMUTABLE) === 0 ? mutable_source(value, false, false) : source(value) : null;
  var i = (flags2 & EACH_INDEX_REACTIVE) !== 0 ? source(index2) : null;
  if (false_default && v) {
    v.trace = () => {
      get_collection()[i?.v ?? index2];
    };
  }
  return {
    v,
    i,
    e: branch(() => {
      render_fn(anchor, v ?? value, i ?? index2, get_collection);
      return () => {
        items.delete(key2);
      };
    })
  };
}
function move(effect2, next2, anchor) {
  if (!effect2.nodes) return;
  var node = effect2.nodes.start;
  var end = effect2.nodes.end;
  var dest = next2 && (next2.f & EFFECT_OFFSCREEN) === 0 ? (
    /** @type {EffectNodes} */
    next2.nodes.start
  ) : anchor;
  while (node !== null) {
    var next_node = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    dest.before(node);
    if (node === end) {
      return;
    }
    node = next_node;
  }
}
function link(state2, prev, next2) {
  if (prev === null) {
    state2.effect.first = next2;
  } else {
    prev.next = next2;
  }
  if (next2 === null) {
    state2.effect.last = prev;
  } else {
    next2.prev = prev;
  }
}
function validate_each_keys(array, key_fn) {
  const keys2 = /* @__PURE__ */ new Map();
  const length2 = array.length;
  for (let i = 0; i < length2; i++) {
    const key2 = key_fn(array[i], i);
    if (keys2.has(key2)) {
      const a = String(keys2.get(key2));
      const b = String(i);
      let k = String(key2);
      if (k.startsWith("[object ")) k = null;
      each_key_duplicate(a, b, k);
    }
    keys2.set(key2, i);
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function snippet(node, get_snippet, ...args) {
  var branches = new BranchManager(node);
  block(() => {
    const snippet2 = get_snippet() ?? null;
    if (false_default && snippet2 == null) {
      invalid_snippet();
    }
    branches.ensure(snippet2, snippet2 && ((anchor) => snippet2(anchor, ...args)));
  }, EFFECT_TRANSPARENT);
}

// node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js
function component(node, get_component, render_fn) {
  var hydration_start_node;
  if (hydrating) {
    hydration_start_node = hydrate_node;
    hydrate_next();
  }
  var branches = new BranchManager(node);
  block(() => {
    var component2 = get_component() ?? null;
    if (hydrating) {
      var data = read_hydration_instruction(
        /** @type {TemplateNode} */
        hydration_start_node
      );
      var server_had_component = data === HYDRATION_START;
      var client_has_component = component2 !== null;
      if (server_had_component !== client_has_component) {
        var anchor = skip_nodes();
        set_hydrate_node(anchor);
        branches.anchor = anchor;
        set_hydrating(false);
        branches.ensure(component2, component2 && ((target) => render_fn(target, component2)));
        set_hydrating(true);
        return;
      }
    }
    branches.ensure(component2, component2 && ((target) => render_fn(target, component2)));
  }, EFFECT_TRANSPARENT);
}

// node_modules/svelte/src/internal/client/dom/elements/attachments.js
function attach(node, get_fn) {
  var fn = void 0;
  var e;
  managed(() => {
    if (fn !== (fn = get_fn())) {
      if (e) {
        destroy_effect(e);
        e = null;
      }
      if (fn) {
        e = branch(() => {
          effect(() => (
            /** @type {(node: Element) => void} */
            fn(node)
          ));
        });
      }
    }
  });
}

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// node_modules/svelte/src/internal/shared/attributes.js
function clsx2(value) {
  if (typeof value === "object") {
    return clsx(value);
  } else {
    return value ?? "";
  }
}
var whitespace = [..." 	\n\r\f\xA0\v\uFEFF"];
function to_class(value, hash2, directives) {
  var classname = value == null ? "" : "" + value;
  if (hash2) {
    classname = classname ? classname + " " + hash2 : hash2;
  }
  if (directives) {
    for (var key2 of Object.keys(directives)) {
      if (directives[key2]) {
        classname = classname ? classname + " " + key2 : key2;
      } else if (classname.length) {
        var len = key2.length;
        var a = 0;
        while ((a = classname.indexOf(key2, a)) >= 0) {
          var b = a + len;
          if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
          } else {
            a = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}
function append_styles(styles, important = false) {
  var separator = important ? " !important;" : ";";
  var css = "";
  for (var key2 of Object.keys(styles)) {
    var value = styles[key2];
    if (value != null && value !== "") {
      css += " " + key2 + ": " + value + separator;
    }
  }
  return css;
}
function to_css_name(name) {
  if (name[0] !== "-" || name[1] !== "-") {
    return name.toLowerCase();
  }
  return name;
}
function to_style(value, styles) {
  if (styles) {
    var new_style = "";
    var normal_styles;
    var important_styles;
    if (Array.isArray(styles)) {
      normal_styles = styles[0];
      important_styles = styles[1];
    } else {
      normal_styles = styles;
    }
    if (value) {
      value = String(value).replaceAll(/\/\*.*?\*\//g, "").trim();
      var in_str = false;
      var in_apo = 0;
      var in_comment = false;
      var reserved_names = [];
      if (normal_styles) {
        reserved_names.push(...Object.keys(normal_styles).map(to_css_name));
      }
      if (important_styles) {
        reserved_names.push(...Object.keys(important_styles).map(to_css_name));
      }
      var start_index = 0;
      var name_index = -1;
      const len = value.length;
      for (var i = 0; i < len; i++) {
        var c = value[i];
        if (in_comment) {
          if (c === "/" && value[i - 1] === "*") {
            in_comment = false;
          }
        } else if (in_str) {
          if (in_str === c) {
            in_str = false;
          }
        } else if (c === "/" && value[i + 1] === "*") {
          in_comment = true;
        } else if (c === '"' || c === "'") {
          in_str = c;
        } else if (c === "(") {
          in_apo++;
        } else if (c === ")") {
          in_apo--;
        }
        if (!in_comment && in_str === false && in_apo === 0) {
          if (c === ":" && name_index === -1) {
            name_index = i;
          } else if (c === ";" || i === len - 1) {
            if (name_index !== -1) {
              var name = to_css_name(value.substring(start_index, name_index).trim());
              if (!reserved_names.includes(name)) {
                if (c !== ";") {
                  i++;
                }
                var property = value.substring(start_index, i).trim();
                new_style += " " + property + ";";
              }
            }
            start_index = i + 1;
            name_index = -1;
          }
        }
      }
    }
    if (normal_styles) {
      new_style += append_styles(normal_styles);
    }
    if (important_styles) {
      new_style += append_styles(important_styles, true);
    }
    new_style = new_style.trim();
    return new_style === "" ? null : new_style;
  }
  return value == null ? null : String(value);
}

// node_modules/svelte/src/internal/client/dom/elements/class.js
function set_class(dom, is_html, value, hash2, prev_classes, next_classes) {
  var prev = (
    /** @type {any} */
    dom[CLASS_CACHE]
  );
  if (hydrating || prev !== value || prev === void 0) {
    var next_class_name = to_class(value, hash2, next_classes);
    if (!hydrating || next_class_name !== dom.getAttribute("class")) {
      if (next_class_name == null) {
        dom.removeAttribute("class");
      } else if (is_html) {
        dom.className = next_class_name;
      } else {
        dom.setAttribute("class", next_class_name);
      }
    }
    dom[CLASS_CACHE] = value;
  } else if (next_classes && prev_classes !== next_classes) {
    for (var key2 in next_classes) {
      var is_present = !!next_classes[key2];
      if (prev_classes == null || is_present !== !!prev_classes[key2]) {
        dom.classList.toggle(key2, is_present);
      }
    }
  }
  return next_classes;
}

// node_modules/svelte/src/internal/client/dom/elements/style.js
function update_styles(dom, prev = {}, next2, priority) {
  for (var key2 in next2) {
    var value = next2[key2];
    if (prev[key2] !== value) {
      if (next2[key2] == null) {
        dom.style.removeProperty(key2);
      } else {
        dom.style.setProperty(key2, value, priority);
      }
    }
  }
}
function set_style(dom, value, prev_styles, next_styles) {
  var prev = (
    /** @type {any} */
    dom[STYLE_CACHE]
  );
  if (hydrating || prev !== value) {
    var next_style_attr = to_style(value, next_styles);
    if (!hydrating || next_style_attr !== dom.getAttribute("style")) {
      if (next_style_attr == null) {
        dom.removeAttribute("style");
      } else {
        dom.style.cssText = next_style_attr;
      }
    }
    dom[STYLE_CACHE] = value;
  } else if (next_styles) {
    if (Array.isArray(next_styles)) {
      update_styles(dom, prev_styles?.[0], next_styles[0]);
      update_styles(dom, prev_styles?.[1], next_styles[1], "important");
    } else {
      update_styles(dom, prev_styles, next_styles);
    }
  }
  return next_styles;
}

// node_modules/svelte/src/internal/client/dom/elements/attributes.js
var CLASS = Symbol("class");
var STYLE = Symbol("style");
var IS_CUSTOM_ELEMENT = Symbol("is custom element");
var IS_HTML = Symbol("is html");
var LINK_TAG = IS_XHTML ? "link" : "LINK";
function set_attribute2(element2, attribute, value, skip_warning) {
  var attributes = get_attributes(element2);
  if (hydrating) {
    attributes[attribute] = element2.getAttribute(attribute);
    if (attribute === "src" || attribute === "srcset" || attribute === "href" && element2.nodeName === LINK_TAG) {
      if (!skip_warning) {
        check_src_in_dev_hydration(element2, attribute, value ?? "");
      }
      return;
    }
  }
  if (attributes[attribute] === (attributes[attribute] = value)) return;
  if (attribute === "loading") {
    element2[LOADING_ATTR_SYMBOL] = value;
  }
  if (value == null) {
    element2.removeAttribute(attribute);
  } else if (typeof value !== "string" && get_setters(element2).has(attribute)) {
    element2[attribute] = value;
  } else {
    element2.setAttribute(attribute, value);
  }
}
function get_attributes(element2) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    element2[ATTRIBUTES_CACHE] ??= {
      [IS_CUSTOM_ELEMENT]: element2.nodeName.includes("-"),
      [IS_HTML]: element2.namespaceURI === NAMESPACE_HTML
    }
  );
}
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(element2) {
  var cache_key = element2.getAttribute("is") || element2.nodeName;
  var setters = setters_cache.get(cache_key);
  if (setters) return setters;
  setters_cache.set(cache_key, setters = /* @__PURE__ */ new Set());
  var descriptors;
  var proto = element2;
  var element_proto = Element.prototype;
  while (element_proto !== proto) {
    descriptors = get_descriptors(proto);
    for (var key2 in descriptors) {
      if (descriptors[key2].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      key2 !== "innerHTML" && key2 !== "textContent" && key2 !== "innerText") {
        setters.add(key2);
      }
    }
    proto = get_prototype_of(proto);
  }
  return setters;
}
function check_src_in_dev_hydration(element2, attribute, value) {
  if (!false_default) return;
  if (attribute === "srcset" && srcset_url_equal(element2, value)) return;
  if (src_url_equal(element2.getAttribute(attribute) ?? "", value)) return;
  hydration_attribute_changed(
    attribute,
    element2.outerHTML.replace(element2.innerHTML, element2.innerHTML && "..."),
    String(value)
  );
}
function src_url_equal(element_src, url) {
  if (element_src === url) return true;
  return new URL(element_src, document.baseURI).href === new URL(url, document.baseURI).href;
}
function split_srcset(srcset) {
  return srcset.split(",").map((src) => src.trim().split(" ").filter(Boolean));
}
function srcset_url_equal(element2, srcset) {
  var element_urls = split_srcset(element2.srcset);
  var urls = split_srcset(srcset);
  return urls.length === element_urls.length && urls.every(
    ([url, width], i) => width === element_urls[i][1] && // We need to test both ways because Vite will create an a full URL with
    // `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
    // relative URLs inside srcset are not automatically resolved to absolute URLs by
    // browsers (in contrast to img.src). This means both SSR and DOM code could
    // contain relative or absolute URLs.
    (src_url_equal(element_urls[i][0], url) || src_url_equal(url, element_urls[i][0]))
  );
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/size.js
var ResizeObserverSingleton = class _ResizeObserverSingleton {
  /** */
  #listeners = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #observer;
  /** @type {ResizeObserverOptions} */
  #options;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(options) {
    this.#options = options;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(element2, listener) {
    var listeners2 = this.#listeners.get(element2) || /* @__PURE__ */ new Set();
    listeners2.add(listener);
    this.#listeners.set(element2, listeners2);
    this.#getObserver().observe(element2, this.#options);
    return () => {
      var listeners3 = this.#listeners.get(element2);
      listeners3.delete(listener);
      if (listeners3.size === 0) {
        this.#listeners.delete(element2);
        this.#observer.unobserve(element2);
      }
    };
  }
  #getObserver() {
    return this.#observer ?? (this.#observer = new ResizeObserver(
      /** @param {any} entries */
      (entries2) => {
        for (var entry of entries2) {
          _ResizeObserverSingleton.entries.set(entry.target, entry);
          for (var listener of this.#listeners.get(entry.target) || []) {
            listener(entry);
          }
        }
      }
    ));
  }
};
var resize_observer_border_box = /* @__PURE__ */ new ResizeObserverSingleton({
  box: "border-box"
});
function bind_element_size(element2, type, set2) {
  var unsub = resize_observer_border_box.observe(element2, () => set2(element2[type]));
  effect(() => {
    untrack(() => set2(element2[type]));
    return unsub;
  });
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function is_bound_this(bound_value, element_or_component) {
  return bound_value === element_or_component || bound_value?.[STATE_SYMBOL] === element_or_component;
}
function bind_this(element_or_component = mark_as_component(), update2, get_value, get_parts) {
  var component_effect = (
    /** @type {ComponentContext} */
    component_context.r
  );
  var parent = (
    /** @type {Effect} */
    active_effect
  );
  effect(() => {
    var old_parts;
    var parts;
    render_effect(() => {
      old_parts = parts;
      parts = get_parts?.() || [];
      untrack(() => {
        if (!is_bound_this(get_value(...parts), element_or_component)) {
          update2(element_or_component, ...parts);
          if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
            update2(null, ...old_parts);
          }
        }
      });
    });
    return () => {
      let p = parent;
      while (p !== component_effect && p.parent !== null && p.parent.f & DESTROYING) {
        p = p.parent;
      }
      const teardown2 = () => {
        if (parts && is_bound_this(get_value(...parts), element_or_component)) {
          update2(null, ...parts);
        }
      };
      const original_teardown = p.teardown;
      p.teardown = () => {
        teardown2();
        original_teardown?.();
      };
    };
  });
  return element_or_component;
}

// node_modules/svelte/src/internal/client/reactivity/store.js
var is_store_binding = false;
var IS_UNMOUNTED = Symbol("unmounted");
function capture_store_binding(fn) {
  var previous_is_store_binding = is_store_binding;
  try {
    is_store_binding = false;
    return [fn(), is_store_binding];
  } finally {
    is_store_binding = previous_is_store_binding;
  }
}

// node_modules/svelte/src/internal/client/reactivity/props.js
var rest_props_handler = {
  get(target, key2) {
    if (target.exclude.has(key2)) return;
    return target.props[key2];
  },
  set(target, key2) {
    if (false_default) {
      props_rest_readonly(`${target.name}.${String(key2)}`);
    }
    return false;
  },
  getOwnPropertyDescriptor(target, key2) {
    if (target.exclude.has(key2)) return;
    if (key2 in target.props) {
      return {
        enumerable: true,
        configurable: true,
        value: target.props[key2]
      };
    }
  },
  has(target, key2) {
    if (target.exclude.has(key2)) return false;
    return key2 in target.props;
  },
  ownKeys(target) {
    return Reflect.ownKeys(target.props).filter((key2) => !target.exclude.has(key2));
  }
};
// @__NO_SIDE_EFFECTS__
function rest_props(props, exclude, name) {
  return new Proxy(false_default ? { props, exclude, name } : { props, exclude }, rest_props_handler);
}
function prop(props, key2, flags2, fallback2) {
  var runes = !legacy_mode_flag || (flags2 & PROPS_IS_RUNES) !== 0;
  var bindable = (flags2 & PROPS_IS_BINDABLE) !== 0;
  var lazy = (flags2 & PROPS_IS_LAZY_INITIAL) !== 0;
  var fallback_value = (
    /** @type {V} */
    fallback2
  );
  var fallback_dirty = true;
  var fallback_signal = (
    /** @type {Derived<V> | undefined} */
    void 0
  );
  var get_fallback = () => {
    if (lazy && runes) {
      fallback_signal ??= derived(
        /** @type {() => V} */
        fallback2
      );
      return get(fallback_signal);
    }
    if (fallback_dirty) {
      fallback_dirty = false;
      fallback_value = lazy ? untrack(
        /** @type {() => V} */
        fallback2
      ) : (
        /** @type {V} */
        fallback2
      );
    }
    return fallback_value;
  };
  let setter;
  if (bindable) {
    var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
    setter = get_descriptor(props, key2)?.set ?? (is_entry_props && key2 in props ? (v) => props[key2] = v : void 0);
  }
  var initial_value;
  var is_store_sub = false;
  if (bindable) {
    [initial_value, is_store_sub] = capture_store_binding(() => (
      /** @type {V} */
      props[key2]
    ));
  } else {
    initial_value = /** @type {V} */
    props[key2];
  }
  if (initial_value === void 0 && fallback2 !== void 0) {
    initial_value = get_fallback();
    if (setter) {
      if (runes) props_invalid_value(key2);
      setter(initial_value);
    }
  }
  var getter;
  if (runes) {
    getter = () => {
      var value = (
        /** @type {V} */
        props[key2]
      );
      if (value === void 0) return get_fallback();
      fallback_dirty = true;
      return value;
    };
  } else {
    getter = () => {
      var value = (
        /** @type {V} */
        props[key2]
      );
      if (value !== void 0) {
        fallback_value = /** @type {V} */
        void 0;
      }
      return value === void 0 ? fallback_value : value;
    };
  }
  if (runes && (flags2 & PROPS_IS_UPDATED) === 0) {
    return getter;
  }
  if (setter) {
    var legacy_parent = props.$$legacy;
    return (
      /** @type {() => V} */
      function(value, mutation) {
        if (arguments.length > 0) {
          if (!runes || !mutation || legacy_parent || is_store_sub) {
            setter(mutation ? getter() : value);
          }
          return value;
        }
        return getter();
      }
    );
  }
  var overridden = false;
  var d = ((flags2 & PROPS_IS_IMMUTABLE) !== 0 ? derived : derived_safe_equal)(() => {
    overridden = false;
    return getter();
  });
  if (false_default) {
    d.label = key2;
  }
  if (bindable) get(d);
  var parent_effect = (
    /** @type {Effect} */
    active_effect
  );
  return (
    /** @type {() => V} */
    function(value, mutation) {
      if (arguments.length > 0) {
        const new_value = mutation ? get(d) : runes && bindable ? proxy(value) : value;
        set(d, new_value);
        overridden = true;
        if (fallback_value !== void 0) {
          fallback_value = new_value;
        }
        return value;
      }
      if (is_destroying_effect && overridden || (parent_effect.f & DESTROYED) !== 0) {
        return d.v;
      }
      return get(d);
    }
  );
}

// node_modules/svelte/src/legacy/legacy-client.js
function createClassComponent(options) {
  return new Svelte4Component(options);
}
var Svelte4Component = class {
  /** @type {any} */
  #events;
  /** @type {Record<string, any>} */
  #instance;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options) {
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key2, value) => {
      var s = mutable_source(value, false, false);
      sources.set(key2, s);
      return s;
    };
    const props = new Proxy(
      { ...options.props || {}, $$events: {} },
      {
        get(target, prop2) {
          return get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
        },
        has(target, prop2) {
          if (prop2 === LEGACY_PROPS) return true;
          get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
          return Reflect.has(target, prop2);
        },
        set(target, prop2, value) {
          set(sources.get(prop2) ?? add_source(prop2, value), value);
          return Reflect.set(target, prop2, value);
        }
      }
    );
    this.#instance = (options.hydrate ? hydrate : mount)(options.component, {
      target: options.target,
      anchor: options.anchor,
      props,
      context: options.context,
      intro: options.intro ?? false,
      recover: options.recover,
      transformError: options.transformError
    });
    if (!async_mode_flag && (!options?.props?.$$host || options.sync === false)) {
      flushSync();
    }
    this.#events = props.$$events;
    for (const key2 of Object.keys(this.#instance)) {
      if (key2 === "$set" || key2 === "$destroy" || key2 === "$on") continue;
      define_property(this, key2, {
        get() {
          return this.#instance[key2];
        },
        /** @param {any} value */
        set(value) {
          this.#instance[key2] = value;
        },
        enumerable: true
      });
    }
    this.#instance.$set = /** @param {Record<string, any>} next */
    (next2) => {
      Object.assign(props, next2);
    };
    this.#instance.$destroy = () => {
      unmount(this.#instance);
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    this.#instance.$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event2, callback) {
    this.#events[event2] = this.#events[event2] || [];
    const cb = (...args) => callback.call(this, ...args);
    this.#events[event2].push(cb);
    return () => {
      this.#events[event2] = this.#events[event2].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    this.#instance.$destroy();
  }
};

// node_modules/svelte/src/internal/client/dom/elements/custom-element.js
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    /** The Svelte component constructor */
    $$ctor;
    /** Slots */
    $$s;
    /** @type {any} The Svelte component instance */
    $$c;
    /** Whether or not the custom element is connected */
    $$cn = false;
    /** @type {Record<string, any>} Component props data */
    $$d = {};
    /** `true` if currently in the process of reflecting component props back to attributes */
    $$r = false;
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $$p_d = {};
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    $$l = {};
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    $$l_u = /* @__PURE__ */ new Map();
    /** @type {any} The managed render effect for reflecting attributes */
    $$me;
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    $$shadowRoot = null;
    /**
     * @param {*} $$componentCtor
     * @param {*} $$slots
     * @param {ShadowRootInit | undefined} shadow_root_init
     */
    constructor($$componentCtor, $$slots, shadow_root_init) {
      super();
      this.$$ctor = $$componentCtor;
      this.$$s = $$slots;
      if (shadow_root_init) {
        this.$$shadowRoot = this.attachShadow(shadow_root_init);
      }
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    addEventListener(type, listener, options) {
      this.$$l[type] = this.$$l[type] || [];
      this.$$l[type].push(listener);
      if (this.$$c) {
        const unsub = this.$$c.$on(type, listener);
        this.$$l_u.set(listener, unsub);
      }
      super.addEventListener(type, listener, options);
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    removeEventListener(type, listener, options) {
      super.removeEventListener(type, listener, options);
      if (this.$$c) {
        const unsub = this.$$l_u.get(listener);
        if (unsub) {
          unsub();
          this.$$l_u.delete(listener);
        }
      }
    }
    async connectedCallback() {
      this.$$cn = true;
      if (!this.$$c) {
        let create_slot = function(name) {
          return (anchor) => {
            const slot2 = create_element("slot");
            if (name !== "default") slot2.name = name;
            append(anchor, slot2);
          };
        };
        await Promise.resolve();
        if (!this.$$cn || this.$$c) {
          return;
        }
        const $$slots = {};
        const existing_slots = get_custom_elements_slots(this);
        for (const name of this.$$s) {
          if (name in existing_slots) {
            if (name === "default" && !this.$$d.children) {
              this.$$d.children = create_slot(name);
              $$slots.default = true;
            } else {
              $$slots[name] = create_slot(name);
            }
          }
        }
        for (const attribute of this.attributes) {
          const name = this.$$g_p(attribute.name);
          if (!(name in this.$$d)) {
            this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
          }
        }
        for (const key2 in this.$$p_d) {
          if (!(key2 in this.$$d) && this[key2] !== void 0) {
            this.$$d[key2] = this[key2];
            delete this[key2];
          }
        }
        this.$$c = createClassComponent({
          component: this.$$ctor,
          target: this.$$shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots,
            $$host: this
          }
        });
        this.$$me = effect_root(() => {
          render_effect(() => {
            this.$$r = true;
            for (const key2 of object_keys(this.$$c)) {
              if (!this.$$p_d[key2]?.reflect) continue;
              this.$$d[key2] = this.$$c[key2];
              const attribute_value = get_custom_element_value(
                key2,
                this.$$d[key2],
                this.$$p_d,
                "toAttribute"
              );
              if (attribute_value == null) {
                this.removeAttribute(this.$$p_d[key2].attribute || key2);
              } else {
                this.setAttribute(this.$$p_d[key2].attribute || key2, attribute_value);
              }
            }
            this.$$r = false;
          });
        });
        for (const type in this.$$l) {
          for (const listener of this.$$l[type]) {
            const unsub = this.$$c.$on(type, listener);
            this.$$l_u.set(listener, unsub);
          }
        }
        this.$$l = {};
      }
    }
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
    /**
     * @param {string} attr
     * @param {string} _oldValue
     * @param {string} newValue
     */
    attributeChangedCallback(attr2, _oldValue, newValue) {
      if (this.$$r) return;
      attr2 = this.$$g_p(attr2);
      this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
      this.$$c?.$set({ [attr2]: this.$$d[attr2] });
    }
    disconnectedCallback() {
      this.$$cn = false;
      Promise.resolve().then(() => {
        if (!this.$$cn && this.$$c) {
          this.$$c.$destroy();
          this.$$me();
          this.$$c = void 0;
        }
      });
    }
    /**
     * @param {string} attribute_name
     */
    $$g_p(attribute_name) {
      return object_keys(this.$$p_d).find(
        (key2) => this.$$p_d[key2].attribute === attribute_name || !this.$$p_d[key2].attribute && key2.toLowerCase() === attribute_name
      ) || attribute_name;
    }
  };
}
function get_custom_element_value(prop2, value, props_definition, transform) {
  const type = props_definition[prop2]?.type;
  value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
  if (!transform || !props_definition[prop2]) {
    return value;
  } else if (transform === "toAttribute") {
    switch (type) {
      case "Object":
      case "Array":
        return value == null ? null : JSON.stringify(value);
      case "Boolean":
        return value ? "" : null;
      case "Number":
        return value == null ? null : value;
      default:
        return value;
    }
  } else {
    switch (type) {
      case "Object":
      case "Array":
        return value && JSON.parse(value);
      case "Boolean":
        return value;
      // conversion already handled above
      case "Number":
        return value != null ? +value : value;
      default:
        return value;
    }
  }
}
function get_custom_elements_slots(element2) {
  const result = {};
  element2.childNodes.forEach((node) => {
    result[
      /** @type {Element} node */
      node.slot || "default"
    ] = true;
  });
  return result;
}

// node_modules/svelte/src/index-client.js
if (false_default) {
  let throw_rune_error = function(rune) {
    if (!(rune in globalThis)) {
      let value;
      Object.defineProperty(globalThis, rune, {
        configurable: true,
        // eslint-disable-next-line getter-return
        get: () => {
          if (value !== void 0) {
            return value;
          }
          rune_outside_svelte(rune);
        },
        set: (v) => {
          value = v;
        }
      });
    }
  };
  throw_rune_error("$state");
  throw_rune_error("$effect");
  throw_rune_error("$derived");
  throw_rune_error("$inspect");
  throw_rune_error("$props");
  throw_rune_error("$bindable");
}
function getAbortSignal() {
  if (active_reaction === null) {
    get_abort_signal_outside_reaction();
  }
  return (active_reaction.ac ??= new AbortController()).signal;
}
function onMount(fn) {
  if (component_context === null) {
    lifecycle_outside_component("onMount");
  }
  if (legacy_mode_flag && component_context.l !== null) {
    init_update_callbacks(component_context).m.push(fn);
  } else {
    user_effect(() => {
      const cleanup = untrack(fn);
      if (typeof cleanup === "function") return (
        /** @type {() => void} */
        cleanup
      );
    });
  }
}
function init_update_callbacks(context) {
  var l = (
    /** @type {ComponentContextLegacy} */
    context.l
  );
  return l.u ??= { a: [], b: [], m: [] };
}

// node_modules/svelte/src/version.js
var PUBLIC_VERSION = "5";

// node_modules/svelte/src/internal/disclose-version.js
if (typeof window !== "undefined") {
  ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(PUBLIC_VERSION);
}

// node_modules/svelte/src/reactivity/map.js
var SvelteMap = class extends Map {
  /** @type {Map<K, Source<number>>} */
  #sources = /* @__PURE__ */ new Map();
  #version = state(0);
  #size = state(0);
  #update_version = update_version || -1;
  /**
   * @param {Iterable<readonly [K, V]> | null | undefined} [value]
   */
  constructor(value) {
    super();
    if (false_default) {
      value = new Map(value);
      tag(this.#version, "SvelteMap version");
      tag(this.#size, "SvelteMap.size");
    }
    if (value) {
      for (var [key2, v] of value) {
        super.set(key2, v);
      }
      this.#size.v = super.size;
    }
  }
  /**
   * If the source is being created inside the same reaction as the SvelteMap instance,
   * we use `state` so that it will not be a dependency of the reaction. Otherwise we
   * use `source` so it will be.
   *
   * @template T
   * @param {T} value
   * @returns {Source<T>}
   */
  #source(value) {
    return update_version === this.#update_version ? state(value) : source(value);
  }
  /** @param {K} key */
  has(key2) {
    var sources = this.#sources;
    var s = sources.get(key2);
    if (s === void 0) {
      if (super.has(key2)) {
        s = this.#source(0);
        if (false_default) {
          tag(s, `SvelteMap get(${label(key2)})`);
        }
        sources.set(key2, s);
      } else {
        get(this.#version);
        return false;
      }
    }
    get(s);
    return true;
  }
  /**
   * @param {(value: V, key: K, map: Map<K, V>) => void} callbackfn
   * @param {any} [this_arg]
   */
  forEach(callbackfn, this_arg) {
    this.#read_all();
    super.forEach(callbackfn, this_arg);
  }
  /** @param {K} key */
  get(key2) {
    var sources = this.#sources;
    var s = sources.get(key2);
    if (s === void 0) {
      if (super.has(key2)) {
        s = this.#source(0);
        if (false_default) {
          tag(s, `SvelteMap get(${label(key2)})`);
        }
        sources.set(key2, s);
      } else {
        get(this.#version);
        return void 0;
      }
    }
    get(s);
    return super.get(key2);
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  getOrInsert(key2, value) {
    if (!super.has(key2)) {
      this.set(key2, value);
    }
    return (
      /** @type {V} */
      this.get(key2)
    );
  }
  /**
   * @param {K} key
   * @param {(key: K) => V} callbackFn
   */
  getOrInsertComputed(key2, callbackFn) {
    if (!super.has(key2)) {
      this.set(key2, callbackFn(key2));
    }
    return (
      /** @type {V} */
      this.get(key2)
    );
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  set(key2, value) {
    var sources = this.#sources;
    var s = sources.get(key2);
    var prev_res = super.get(key2);
    var res = super.set(key2, value);
    var version = this.#version;
    if (s === void 0) {
      s = this.#source(0);
      if (false_default) {
        tag(s, `SvelteMap get(${label(key2)})`);
      }
      sources.set(key2, s);
      set(this.#size, super.size);
      increment(version);
    } else if (prev_res !== value) {
      increment(s);
      var v_reactions = version.reactions === null ? null : new Set(version.reactions);
      var needs_version_increase = v_reactions === null || !s.reactions?.every(
        (r2) => (
          /** @type {NonNullable<typeof v_reactions>} */
          v_reactions.has(r2)
        )
      );
      if (needs_version_increase) {
        increment(version);
      }
    }
    return res;
  }
  /** @param {K} key */
  delete(key2) {
    var sources = this.#sources;
    var s = sources.get(key2);
    var res = super.delete(key2);
    if (s !== void 0) {
      sources.delete(key2);
      set(s, -1);
    }
    if (res) {
      set(this.#size, super.size);
      increment(this.#version);
    }
    return res;
  }
  clear() {
    if (super.size === 0) {
      return;
    }
    super.clear();
    var sources = this.#sources;
    set(this.#size, 0);
    for (var s of sources.values()) {
      set(s, -1);
    }
    increment(this.#version);
    sources.clear();
  }
  #read_all() {
    get(this.#version);
    var sources = this.#sources;
    if (this.#size.v !== sources.size) {
      for (var key2 of super.keys()) {
        if (!sources.has(key2)) {
          var s = this.#source(0);
          if (false_default) {
            tag(s, `SvelteMap get(${label(key2)})`);
          }
          sources.set(key2, s);
        }
      }
    }
    for ([, s] of this.#sources) {
      get(s);
    }
  }
  keys() {
    get(this.#version);
    return super.keys();
  }
  values() {
    this.#read_all();
    return super.values();
  }
  entries() {
    this.#read_all();
    return super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    get(this.#size);
    return super.size;
  }
};

// node_modules/svelte/src/reactivity/url-search-params.js
var REPLACE = Symbol("replace");
var SvelteURLSearchParams = class extends URLSearchParams {
  #version = false_default ? tag(state(0), "SvelteURLSearchParams version") : state(0);
  #url = get_current_url();
  #updating = false;
  #update_url() {
    if (!this.#url || this.#updating) return;
    this.#updating = true;
    const search = super.toString();
    this.#url.search = search && `?${search}`;
    this.#updating = false;
  }
  /**
   * @param {URLSearchParams} params
   * @internal
   */
  [REPLACE](params) {
    if (this.#updating) return;
    if (params.toString() === super.toString()) return;
    this.#updating = true;
    for (const key2 of [...super.keys()]) {
      super.delete(key2);
    }
    for (const [key2, value] of params) {
      super.append(key2, value);
    }
    increment(this.#version);
    this.#updating = false;
  }
  /**
   * @param {string} name
   * @param {string} value
   * @returns {void}
   */
  append(name, value) {
    super.append(name, value);
    this.#update_url();
    increment(this.#version);
  }
  /**
   * @param {string} name
   * @param {string=} value
   * @returns {void}
   */
  delete(name, value) {
    var has_value = super.has(name, value);
    super.delete(name, value);
    if (has_value) {
      this.#update_url();
      increment(this.#version);
    }
  }
  /**
   * @param {string} name
   * @returns {string|null}
   */
  get(name) {
    get(this.#version);
    return super.get(name);
  }
  /**
   * @param {string} name
   * @returns {string[]}
   */
  getAll(name) {
    get(this.#version);
    return super.getAll(name);
  }
  /**
   * @param {string} name
   * @param {string=} value
   * @returns {boolean}
   */
  has(name, value) {
    get(this.#version);
    return super.has(name, value);
  }
  keys() {
    get(this.#version);
    return super.keys();
  }
  /**
   * @param {(value: string, key: string, parent: URLSearchParams) => void} callback
   * @param {any} [this_arg]
   * @returns {void}
   */
  forEach(callback, this_arg) {
    get(this.#version);
    super.forEach(callback, this_arg);
  }
  /**
   * @param {string} name
   * @param {string} value
   * @returns {void}
   */
  set(name, value) {
    var previous = super.getAll(name);
    super.set(name, value);
    var current = super.getAll(name);
    if (previous.length !== current.length || previous.some((value2, i) => value2 !== current[i])) {
      this.#update_url();
      increment(this.#version);
    }
  }
  sort() {
    super.sort();
    this.#update_url();
    increment(this.#version);
  }
  toString() {
    get(this.#version);
    return super.toString();
  }
  values() {
    get(this.#version);
    return super.values();
  }
  entries() {
    get(this.#version);
    return super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    get(this.#version);
    return super.size;
  }
};

// node_modules/svelte/src/reactivity/url.js
var current_url = null;
function get_current_url() {
  return current_url;
}

// node_modules/@event-calendar/core/dist/index.js
function keyEnter(fn, _this = void 0) {
  return function(e) {
    return e.key === "Enter" || e.key === " " && !e.preventDefault() ? fn.call(_this, e) : void 0;
  };
}
function contentFrom(content, snippet2) {
  if (snippet2) return null;
  return (el) => {
    if (typeof content == "string") el.innerText = content;
    else if (content?.domNodes) el.replaceChildren(...content.domNodes);
    else if (content?.html) el.innerHTML = content.html;
  };
}
function outsideEvent(type) {
  return (el) => {
    let listener = (jsEvent) => {
      if (el && !el.contains(jsEvent.target)) el.dispatchEvent(new CustomEvent(type + "outside", { detail: { jsEvent } }));
    };
    document.addEventListener(type, listener, true);
    return () => {
      document.removeEventListener(type, listener, true);
    };
  };
}
function resizeObserver(callback, widthOnly = false) {
  return (el) => {
    let width;
    let observer = new ResizeObserver((entries2) => {
      for (let entry of entries2) {
        if (widthOnly) {
          let { inlineSize } = entry.contentBoxSize?.[0] ?? { inlineSize: entry.contentRect.width };
          if (inlineSize === width) continue;
          width = inlineSize;
        }
        callback(el, entry);
      }
    });
    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  };
}
function intersectionObserver(callback, options) {
  return (el) => {
    let observer = new IntersectionObserver((entries2) => {
      for (let entry of entries2) callback(el, entry);
    }, options);
    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  };
}
function assign2(...args) {
  return Object.assign(...args);
}
function keys(object) {
  return Object.keys(object);
}
function entries(object) {
  return Object.entries(object);
}
function hasOwn(object, property) {
  return Object.hasOwn(object, property);
}
function floor(value) {
  return Math.floor(value);
}
function ceil(value) {
  return Math.ceil(value);
}
function min(...args) {
  return Math.min(...args);
}
function max(...args) {
  return Math.max(...args);
}
function symbol() {
  return Symbol("ec");
}
function length(array) {
  return array.length;
}
function empty(array) {
  return !length(array);
}
function tzOffset(date = /* @__PURE__ */ new Date()) {
  return -date.getTimezoneOffset();
}
function isArray(value) {
  return Array.isArray(value);
}
function isFunction(value) {
  return typeof value === "function";
}
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
function isDate(value) {
  return value instanceof Date;
}
function run3(fn) {
  return fn();
}
function runAll(fns) {
  fns.forEach(run3);
}
function noop2() {
}
var identity = (x) => x;
function isRtl() {
  return window.getComputedStyle(document.documentElement).direction === "rtl";
}
function undefinedOr(fn) {
  return (input) => input === void 0 ? void 0 : fn(input);
}
var uids = /* @__PURE__ */ new WeakMap();
var uidCounter = 1;
function uid2(obj) {
  let id = uids.get(obj);
  if (!id) {
    id = uidCounter++;
    uids.set(obj, id);
  }
  return id;
}
function createSource(input) {
  return {
    url: input.url?.replace(/&+$/, "") || "",
    method: input.method?.toUpperCase() || "GET",
    extraParams: input.extraParams ?? {}
  };
}
function createContent(option, arg, fallback2, snippet2) {
  if (snippet2) return {
    snippet: snippet2,
    arg: arg?.()
  };
  return { content: (isFunction(option) ? option(arg?.()) : option) ?? (isFunction(fallback2) ? fallback2() : fallback2) };
}
var DAY_IN_SECONDS = 86400;
function createDate(input = /* @__PURE__ */ new Date(), offset2 = void 0) {
  return isDate(input) ? _fromLocalDate(input, offset2) : _fromISOString(input, offset2);
}
function createDuration(input) {
  if (typeof input === "number") input = { seconds: input };
  else if (typeof input === "string") {
    let seconds = 0, exp = 2;
    for (let part of input.split(":", 3)) seconds += parseInt(part, 10) * Math.pow(60, exp--);
    input = { seconds };
  } else if (isDate(input)) input = {
    hours: input.getUTCHours(),
    minutes: input.getUTCMinutes(),
    seconds: input.getUTCSeconds()
  };
  let weeks = input.weeks || input.week || 0;
  return {
    years: input.years || input.year || 0,
    months: input.months || input.month || 0,
    days: weeks * 7 + (input.days || input.day || 0),
    seconds: (input.hours || input.hour || 0) * 60 * 60 + (input.minutes || input.minute || 0) * 60 + (input.seconds || input.second || 0),
    inWeeks: !!weeks
  };
}
function cloneDate(date) {
  let result = new Date(toTime(date));
  setOffset(result, getOffset(date));
  return result;
}
function addDuration(date, duration, x = 1) {
  date.setUTCFullYear(date.getUTCFullYear() + x * duration.years);
  let month = date.getUTCMonth() + x * duration.months;
  date.setUTCMonth(month);
  month %= 12;
  if (month < 0) month += 12;
  while (date.getUTCMonth() !== month) subtractDay(date);
  date.setUTCDate(date.getUTCDate() + x * duration.days);
  date.setUTCSeconds(date.getUTCSeconds() + x * duration.seconds);
  return date;
}
function subtractDuration(date, duration, x = 1) {
  return addDuration(date, duration, -x);
}
function addDay(date, x = 1) {
  date.setUTCDate(date.getUTCDate() + x);
  return date;
}
function subtractDay(date, x = 1) {
  return addDay(date, -x);
}
function setMidnight(date) {
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function toLocalDate(date) {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
}
function toISOString(date, len = 19) {
  return date.toISOString().substring(0, len);
}
function toTime(date) {
  return date.getTime();
}
function datesEqual(date1, ...dates2) {
  return dates2.every((date2) => toTime(date1) === toTime(date2));
}
function nextClosestDay(date, day) {
  let diff2 = day - date.getUTCDay();
  date.setUTCDate(date.getUTCDate() + (diff2 >= 0 ? diff2 : diff2 + 7));
  return date;
}
function prevClosestDay(date, day) {
  let diff2 = day - date.getUTCDay();
  date.setUTCDate(date.getUTCDate() + (diff2 <= 0 ? diff2 : diff2 - 7));
  return date;
}
function noTimePart(date) {
  return typeof date === "string" && date.length <= 10;
}
function copyTime(toDate, fromDate) {
  toDate.setUTCHours(fromDate.getUTCHours(), fromDate.getUTCMinutes(), fromDate.getUTCSeconds(), 0);
  return toDate;
}
function toSeconds(duration) {
  return duration.seconds;
}
function nextDate(date, duration, hiddenDays) {
  addDuration(date, duration);
  _skipHiddenDays(date, hiddenDays, addDay);
  return date;
}
function prevDate(date, duration, hiddenDays) {
  subtractDuration(date, duration);
  _skipHiddenDays(date, hiddenDays, subtractDay);
  return date;
}
function getWeekNumber(date, firstDay) {
  date = cloneDate(date);
  if (firstDay === 0) date.setUTCDate(date.getUTCDate() + 6 - date.getUTCDay());
  else date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  let yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil(((date - yearStart) / 1e3 / DAY_IN_SECONDS + 1) / 7);
}
function createWeekNumberContent(week, date, weekNumberContent, snippet2) {
  return createContent(weekNumberContent, () => ({
    date: toLocalDate(date),
    week
  }), () => "W" + String(week).padStart(2, "0"), snippet2);
}
function parseOffset(str, match = {}) {
  let parts = str.match(/(?:Z|([+-])(\d{2}):?(\d{2}))$/);
  if (parts) {
    assign2(match, parts);
    return parts[1] ? +(parts[1] + "1") * (+parts[2] * 60 + +parts[3]) : 0;
  }
}
function convertOffset(date, fromOffset, toOffset) {
  if (toOffset === "local") toOffset = tzOffset(/* @__PURE__ */ new Date(date.getTime() - fromOffset * 6e4));
  if (toOffset !== fromOffset) date.setUTCMinutes(date.getUTCMinutes() + toOffset - fromOffset);
  return setOffset(date, toOffset);
}
function resolveOffset(date, offset2) {
  return offset2 === "local" ? tzOffset(toLocalDate(date)) : offset2;
}
var offsetSymbol = Symbol("ec");
function setOffset(date, offset2) {
  date[offsetSymbol] = offset2;
  return date;
}
function getOffset(date) {
  return date[offsetSymbol];
}
function _fromLocalDate(date, offset2 = void 0) {
  return convertOffset(new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())), tzOffset(date), offset2 ?? "local");
}
function _fromISOString(str, offset2 = void 0) {
  let match = {};
  let inputOffset = parseOffset(str, match);
  if (inputOffset !== void 0) str = str.substring(0, match.index);
  let parts = str.match(/\d+/g);
  let result = new Date(Date.UTC(+parts[0], +parts[1] - 1, +parts[2], +parts[3] || 0, +parts[4] || 0, +parts[5] || 0));
  if (offset2 !== void 0 && inputOffset !== void 0) return convertOffset(result, inputOffset, offset2);
  return setOffset(result, inputOffset ?? resolveOffset(result, offset2));
}
function _skipHiddenDays(date, hiddenDays, dateFn) {
  if (hiddenDays.length && hiddenDays.length < 7) while (hiddenDays.includes(date.getUTCDay())) dateFn(date);
}
var payloadProp = symbol();
function setPayload(obj, payload) {
  obj[payloadProp] = payload;
}
function hasPayload(obj) {
  return !!obj?.[payloadProp];
}
function getPayload(obj) {
  return obj[payloadProp];
}
function createElement(tag2, className, content, attrs = []) {
  let el = document.createElement(tag2);
  el.className = className;
  if (typeof content == "string") el.innerText = content;
  else if (content.domNodes) el.replaceChildren(...content.domNodes);
  else if (content.html) el.innerHTML = content.html;
  for (let attr2 of attrs) el.setAttribute(...attr2);
  return el;
}
function rect(el) {
  return el.getBoundingClientRect();
}
function ancestor(el, up) {
  while (up--) el = el.parentElement;
  return el;
}
function height(el) {
  return rect(el).height;
}
function getElementWithPayload(x, y, root2 = document, processed = []) {
  processed.push(root2);
  for (let el of root2.elementsFromPoint(x, y)) {
    if (hasPayload(el)) return el;
    if (el.shadowRoot && !processed.includes(el.shadowRoot)) {
      let shadowEl = getElementWithPayload(x, y, el.shadowRoot, processed);
      if (shadowEl) return shadowEl;
    }
  }
  return null;
}
function listen2(node, event2, handler, options) {
  node.addEventListener(event2, handler, options);
  return () => node.removeEventListener(event2, handler, options);
}
function stopPropagation2(fn, _this = void 0) {
  return function(jsEvent) {
    jsEvent.stopPropagation();
    if (fn) fn.call(_this, jsEvent);
  };
}
function createView(view2, _viewTitle, _currentRange, _activeRange) {
  return {
    type: view2,
    title: _viewTitle,
    currentStart: _currentRange.start,
    currentEnd: _currentRange.end,
    activeStart: _activeRange.start,
    activeEnd: _activeRange.end,
    calendar: void 0
  };
}
function toViewWithLocalDates(view2) {
  view2 = assign2({}, view2);
  view2.currentStart = toLocalDate(view2.currentStart);
  view2.currentEnd = toLocalDate(view2.currentEnd);
  view2.activeStart = toLocalDate(view2.activeStart);
  view2.activeEnd = toLocalDate(view2.activeEnd);
  return view2;
}
var eventId = 1;
function createEvents(input, offset2 = void 0) {
  return input.map((event2) => {
    let result = {
      id: event2.id != null ? String(event2.id) : `{generated-${eventId++}}`,
      resourceIds: toArrayProp(event2, "resourceId").map(String),
      allDay: event2.allDay ?? (noTimePart(event2.start) && noTimePart(event2.end)),
      start: createDate(event2.start, offset2),
      end: createDate(event2.end, offset2),
      title: event2.title ?? "",
      editable: event2.editable,
      startEditable: event2.startEditable,
      durationEditable: event2.durationEditable,
      display: event2.display ?? "auto",
      layoutGroup: event2.layoutGroup?.toString(),
      extendedProps: event2.extendedProps ?? {},
      backgroundColor: event2.backgroundColor ?? event2.color,
      textColor: event2.textColor,
      classNames: toArrayProp(event2, "className"),
      styles: toArrayProp(event2, "style")
    };
    if (result.allDay) {
      setMidnight(result.start);
      let end = cloneDate(result.end);
      setMidnight(result.end);
      if (!datesEqual(result.end, end) || datesEqual(result.end, result.start)) addDay(result.end);
    }
    return result;
  });
}
function toArrayProp(input, propName) {
  let result = input[propName + "s"] ?? input[propName] ?? [];
  return isArray(result) ? result : [result];
}
function createEventSources(input) {
  return input.map((source2) => ({
    events: source2.events,
    ...createSource(source2)
  }));
}
function createEventTimeText(chunk, displayEventEnd, _intlEventTime) {
  return _intlEventTime.formatRange(chunk.start, displayEventEnd && chunk.event.display !== "pointer" && !chunk.zeroDuration ? chunk.end : null);
}
function createDefaultEventContent(chunk, timeText, theme) {
  let domNodes;
  switch (chunk.event.display) {
    case "background":
      domNodes = [];
      break;
    case "pointer":
      domNodes = chunk.event.allDay ? [] : [createTimeElement(timeText, chunk, theme)];
      break;
    default:
      domNodes = [...chunk.event.allDay ? [] : [createTimeElement(timeText, chunk, theme)], createElement("h4", theme.eventTitle, chunk.event.title)];
  }
  return { domNodes };
}
function createTimeElement(timeText, chunk, theme) {
  return createElement("time", theme.eventTime, timeText, [["datetime", toISOString(chunk.start)]]);
}
function createEventClasses(eventClassNames, event2, _view) {
  let result = event2.classNames;
  if (eventClassNames) {
    if (isFunction(eventClassNames)) eventClassNames = eventClassNames({
      event: toEventWithLocalDates(event2),
      view: toViewWithLocalDates(_view)
    });
    result = [...isArray(eventClassNames) ? eventClassNames : [eventClassNames], ...result];
  }
  return result;
}
function toEventWithLocalDates(event2) {
  return _cloneEvent(event2, toLocalDate);
}
function cloneEvent(event2) {
  return _cloneEvent(event2, cloneDate);
}
function _cloneEvent(event2, dateFn) {
  event2 = assign2({}, event2);
  event2.start = dateFn(event2.start);
  event2.end = dateFn(event2.end);
  return event2;
}
var repositionPass = 0;
function runReposition(refs, data) {
  refs.length = data.length;
  ++repositionPass;
  for (let ref of refs) ref?.reposition(repositionPass);
}
function eventIntersects(event2, start, end, resource = void 0) {
  return (!resource || event2.resourceIds.includes(resource.id)) && event2.start < end && event2.end > start;
}
function helperEvent(display) {
  return previewEvent(display) || ghostEvent(display) || pointerEvent(display);
}
function bgEvent(display) {
  return display === "background";
}
function previewEvent(display) {
  return display === "preview";
}
function ghostEvent(display) {
  return display === "ghost";
}
function pointerEvent(display) {
  return display === "pointer";
}
function createEventChunk(event2, start, end) {
  start = event2.start > start ? event2.start : start;
  end = event2.end < end ? event2.end : end;
  return {
    start,
    end,
    event: event2,
    zeroDuration: datesEqual(start, end)
  };
}
function createAllDayChunks(event2, days, withId = true) {
  let dates = [];
  let lastEnd;
  let gridColumn;
  let gridRow;
  let resource;
  for (let { gridColumn: column, gridRow: row, resource: dayResource, dayStart, dayEnd, disabled } of days) if (!disabled && eventIntersects(event2, dayStart, dayEnd, dayResource)) {
    dates.push(dayStart);
    lastEnd = dayEnd;
    if (!gridColumn) {
      gridColumn = column;
      gridRow = row;
      resource = dayResource;
    }
  }
  if (dates.length) {
    let chunk = createEventChunk(event2, dates[0], lastEnd);
    assign2(chunk, {
      gridColumn,
      gridRow,
      resource,
      dates
    });
    if (withId) assignChunkId(chunk);
    return [chunk];
  }
  return [];
}
function prepareAllDayChunks(chunks) {
  let prevChunks = {};
  let longChunks = {};
  for (let chunk of chunks) {
    let { gridColumn, gridRow } = chunk;
    for (let i = 1; i < chunk.dates.length; ++i) {
      let key3 = `${gridRow}_${gridColumn + i}`;
      if (longChunks[key3]) longChunks[key3].chunks.push(chunk);
      else longChunks[key3] = {
        sorted: false,
        chunks: [chunk]
      };
    }
    let key2 = `${gridRow}_${gridColumn}`;
    chunk.long = longChunks[key2];
    chunk.prev = prevChunks[key2];
    prevChunks[key2] = chunk;
  }
}
function repositionEvent$1(chunk, height2, top = 1, gap = 1) {
  if (chunk.prev) top = chunk.prev.bottom + gap;
  let bottom = top + height2;
  if (chunk.long) {
    let longChunks = chunk.long;
    if (!longChunks.sorted) {
      longChunks.chunks.sort((a, b) => a.top - b.top);
      longChunks.sorted = true;
    }
    for (let longChunk of longChunks.chunks) if (top < longChunk.bottom && bottom > longChunk.top) {
      let offset2 = longChunk.bottom - top + gap;
      top += offset2;
      bottom += offset2;
    }
  }
  assign2(chunk, {
    top,
    bottom
  });
  return top;
}
function assignChunkId(chunk) {
  let { event: event2, gridColumn, gridRow } = chunk;
  chunk.id = `${uid2(event2)}-${gridColumn}-${gridRow}`;
}
function intl(mainState, option) {
  return () => {
    let { options: { locale } } = mainState;
    let format = mainState.options[option];
    let intl2;
    untrack(() => {
      intl2 = isFunction(format) ? { format } : new Intl.DateTimeFormat(locale, format);
    });
    return { format: (date) => intl2.format(toLocalDate(date)) };
  };
}
function intlRange(mainState, option, timeOnly = false) {
  return () => {
    let { options: { locale } } = mainState;
    let format = mainState.options[option];
    let formatRange;
    untrack(() => {
      if (isFunction(format)) formatRange = (start, end) => format(toLocalDate(start), end && toLocalDate(end));
      else {
        let intl2 = new Intl.DateTimeFormat(locale, format);
        formatRange = (start, end) => {
          if (!end) return intl2.format(toLocalDate(start));
          if (timeOnly) end = copyTime(cloneDate(start), end);
          start = toLocalDate(start);
          end = toLocalDate(end);
          if (start <= end) return intl2.formatRange(start, end);
          else {
            let parts = intl2.formatRangeToParts(end, start);
            let result = "";
            let sources = ["startRange", "endRange"];
            let processed = [false, false];
            for (let part of parts) {
              let i = sources.indexOf(part.source);
              if (i >= 0) {
                if (!processed[i]) {
                  result += _getParts(sources[1 - i], parts);
                  processed[i] = true;
                }
              } else result += part.value;
            }
            return result;
          }
        };
      }
    });
    return { formatRange };
  };
}
function _getParts(source2, parts) {
  let result = "";
  for (let part of parts) if (part.source == source2) result += part.value;
  return result;
}
function btnTextDay(text2) {
  return btnText(text2, "day");
}
function btnTextWeek(text2) {
  return btnText(text2, "week");
}
function btnTextMonth(text2) {
  return btnText(text2, "month");
}
function btnTextYear(text2) {
  return btnText(text2, "year");
}
function btnText(text2, period) {
  return {
    ...text2,
    next: "Next " + period,
    prev: "Previous " + period
  };
}
function themeView(view2) {
  return (theme) => ({
    ...theme,
    view: view2
  });
}
function createDateRange(input) {
  let start, end;
  if (input) {
    ({ start, end } = input);
    if (start) start = setMidnight(createDate(start));
    if (end) end = setMidnight(createDate(end));
  }
  return {
    start,
    end
  };
}
function outsideRange(date, range) {
  return range.start && date < range.start || range.end && date > range.end;
}
function createResources(input) {
  let result = [];
  _createResources(input, 0, void 0, result);
  return result;
}
function _createResources(input, level, parent, flat) {
  let result = [];
  for (let item of input) {
    let resource = createResource(item);
    result.push(resource);
    flat.push(resource);
    let payload = {
      level,
      parent,
      children: []
    };
    setPayload(resource, payload);
    if (item.children) payload.children = _createResources(item.children, level + 1, resource, flat);
  }
  return result;
}
function createResource(input) {
  return {
    id: input.id != null ? String(input.id) : "",
    title: input.title ?? "",
    eventBackgroundColor: eventBackgroundColor(input),
    eventTextColor: eventTextColor(input),
    expanded: input.expanded,
    extendedProps: input.extendedProps ?? {}
  };
}
function eventBackgroundColor(resource) {
  return resource?.eventBackgroundColor;
}
function eventTextColor(resource) {
  return resource?.eventTextColor;
}
function findFirstResource(event2, resources) {
  return empty(event2.resourceIds) ? void 0 : resources.find((resource) => event2.resourceIds.includes(resource.id));
}
function createSlots(date, slotDuration, slotLabelPeriodicity2, slotTimeLimits2, intlSlotLabel) {
  let slots2 = [];
  date = cloneDate(date);
  let end = cloneDate(date);
  addDuration(date, slotTimeLimits2.min);
  addDuration(end, slotTimeLimits2.max);
  while (date < end) {
    slots2.push([toISOString(date), intlSlotLabel.format(date)]);
    addDuration(date, slotDuration, slotLabelPeriodicity2);
  }
  let span = floor((date - end) / 1e3 / toSeconds(slotDuration));
  if (span && span !== slotLabelPeriodicity2) slots2.at(-1)[2] = slotLabelPeriodicity2 - span;
  return slots2;
}
function createSlotTimeLimits(slotMinTime, slotMaxTime, flexibleSlotTimeLimits, viewDates2, filteredEvents2) {
  let min$1 = createDuration(slotMinTime);
  let max$1 = createDuration(slotMaxTime);
  if (flexibleSlotTimeLimits) {
    let minMin = createDuration(min(toSeconds(min$1), max(0, toSeconds(max$1) - DAY_IN_SECONDS)));
    let maxMax = createDuration(max(toSeconds(max$1), toSeconds(minMin) + DAY_IN_SECONDS));
    let filter = isFunction(flexibleSlotTimeLimits?.eventFilter) ? flexibleSlotTimeLimits.eventFilter : (event2) => !bgEvent(event2.display);
    loop: for (let date of viewDates2) {
      let start = addDuration(cloneDate(date), min$1);
      let end = addDuration(cloneDate(date), max$1);
      let minStart = addDuration(cloneDate(date), minMin);
      let maxEnd = addDuration(cloneDate(date), maxMax);
      for (let event2 of filteredEvents2) if (!event2.allDay && filter(event2) && event2.start < maxEnd && event2.end > minStart) {
        if (event2.start < start) {
          let seconds = max((event2.start - date) / 1e3, toSeconds(minMin));
          if (seconds < toSeconds(min$1)) min$1.seconds = seconds;
        }
        if (event2.end > end) {
          let seconds = min((event2.end - date) / 1e3, toSeconds(maxMax));
          if (seconds > toSeconds(max$1)) max$1.seconds = seconds;
        }
        if (toSeconds(min$1) === toSeconds(minMin) && toSeconds(max$1) === toSeconds(maxMax)) break loop;
      }
    }
  }
  return {
    min: min$1,
    max: max$1
  };
}
function arrayProxy(array) {
  let counter = 0;
  let version = state(proxy(counter));
  return proxy2(array, () => get(version), () => true, () => set(version, ++counter, true));
}
function objectProxy(object) {
  let counter = 0;
  let versions = proxy({});
  return proxy2(object, (prop2) => versions[prop2], (a, b) => a !== b, (prop2) => versions[prop2] = ++counter);
}
function proxy2(target, setDependency, hasEffect, invokeEffect) {
  return new Proxy(target, {
    get(target2, prop2, receiver) {
      if (hasOwn(target2, prop2)) setDependency(prop2);
      return Reflect.get(target2, prop2, receiver);
    },
    set(target2, prop2, value, receiver) {
      let has = hasEffect(target2[prop2], value);
      let result = Reflect.set(target2, prop2, value, receiver);
      if (has) invokeEffect(prop2);
      return result;
    }
  });
}
function createOptions(plugins) {
  let options = {
    buttonText: { today: "today" },
    customButtons: {},
    customScrollbars: false,
    date: /* @__PURE__ */ new Date(),
    dateIncrement: void 0,
    datesSet: void 0,
    dayCellContent: void 0,
    dayHeaderFormat: {
      weekday: "short",
      month: "numeric",
      day: "numeric"
    },
    dayHeaderAriaLabelFormat: { dateStyle: "full" },
    displayEventEnd: true,
    duration: { weeks: 1 },
    events: [],
    eventAllUpdated: void 0,
    eventBackgroundColor: void 0,
    eventClassNames: void 0,
    eventClick: void 0,
    eventColor: void 0,
    eventContent: void 0,
    eventDidMount: void 0,
    eventFilter: void 0,
    eventGap: 1,
    eventMouseEnter: void 0,
    eventMouseLeave: void 0,
    eventOrder: void 0,
    eventOrderStrict: false,
    eventSources: [],
    eventTextColor: void 0,
    eventTimeFormat: {
      hour: "numeric",
      minute: "2-digit"
    },
    filterEventsWithResources: false,
    firstDay: 0,
    headerToolbar: {
      start: "title",
      center: "",
      end: "today prev,next"
    },
    height: void 0,
    hiddenDays: [],
    highlightedDates: [],
    icons: {},
    lazyFetching: true,
    loading: void 0,
    locale: void 0,
    refetchResourcesOnNavigate: false,
    resources: [],
    selectable: false,
    theme: {
      active: "ec-active",
      bgEvent: "ec-bg-event",
      bgEvents: "ec-bg-events",
      body: "ec-body",
      button: "ec-button",
      buttonGroup: "ec-button-group",
      calendar: "ec",
      colHead: "ec-col-head",
      customScrollbars: "ec-custom-scrollbars",
      day: "ec-day",
      dayHead: "ec-day-head",
      disabled: "ec-disabled",
      endClipped: "ec-end-clipped",
      event: "ec-event",
      eventBody: "ec-event-body",
      eventTime: "ec-event-time",
      eventTitle: "ec-event-title",
      events: "ec-events",
      grid: "ec-grid",
      header: "ec-header",
      hidden: "ec-hidden",
      highlight: "ec-highlight",
      icon: "ec-icon",
      main: "ec-main",
      noBeb: "ec-no-beb",
      noIeb: "ec-no-ieb",
      startClipped: "ec-start-clipped",
      today: "ec-today",
      title: "ec-title",
      toolbar: "ec-toolbar",
      view: "",
      weekdays: [
        "ec-sun",
        "ec-mon",
        "ec-tue",
        "ec-wed",
        "ec-thu",
        "ec-fri",
        "ec-sat"
      ],
      weekNumber: "ec-week-number"
    },
    timeZone: "local",
    titleFormat: {
      year: "numeric",
      month: "short",
      day: "numeric"
    },
    validRange: void 0,
    view: void 0,
    viewDidMount: void 0,
    views: {}
  };
  for (let plugin of plugins) plugin.createOptions?.(options);
  return options;
}
function createParsers(plugins) {
  let parsers = {
    date: (input) => setMidnight(createDate(input)),
    dateIncrement: undefinedOr(createDuration),
    duration: createDuration,
    events: createEvents,
    eventSources: createEventSources,
    hiddenDays: (input) => [...new Set(input)],
    highlightedDates: (input) => input.map((item) => setMidnight(createDate(item))),
    resources: (input) => isArray(input) ? createResources(input) : isPlainObject(input) ? createSource(input) : input,
    validRange: createDateRange
  };
  for (let plugin of plugins) plugin.createParsers?.(parsers);
  return parsers;
}
var specialOptions = [
  "buttonText",
  "customButtons",
  "icons",
  "theme"
];
function optionsState(plugins, userOptions) {
  let defOptions = createOptions(plugins);
  let parsers = createParsers(plugins);
  defOptions = parseOptions(defOptions, parsers);
  userOptions = parseOptions(userOptions, parsers);
  let defViews = extractOption(defOptions, "views") ?? {};
  let userViews = extractOption(userOptions, "views") ?? {};
  let options = objectProxy({});
  assign2(options, defOptions);
  if (userOptions.view) options.view = userOptions.view;
  let setters = {};
  let viewOptions = {};
  let viewComponents = {};
  let views = /* @__PURE__ */ new Set([...keys(defViews), ...keys(userViews)]);
  for (let view2 of views) {
    let userViewOptions = userViews[view2] ?? {};
    let defOpts = mergeOpts(defOptions, defViews[view2] ?? defViews[userViewOptions.type] ?? {});
    let opts = mergeOpts(defOpts, userOptions, userViewOptions);
    let component2 = extractOption(opts, "component");
    delete opts.view;
    for (let key2 of keys(opts)) if (hasOwn(options, key2)) {
      setters[key2] ??= [];
      setters[key2].push(specialOptions.includes(key2) ? (value) => opts[key2] = isFunction(value) ? value(defOpts[key2]) : value : (value) => opts[key2] = value);
    } else delete opts[key2];
    viewOptions[view2] = opts;
    viewComponents[view2] = component2;
  }
  assign2(options, viewOptions[options.view]);
  return [
    options,
    function setOption(key2, value, parsed = true) {
      if (hasOwn(options, key2)) {
        if (!parsed) {
          if (key2 in parsers) value = parsers[key2](value);
          else if (isPlainObject(value)) value = { ...value };
          else if (isArray(value)) value = [...value];
        }
        setters[key2]?.forEach((set2) => set2(value));
        options[key2] = specialOptions.includes(key2) && isFunction(value) ? viewOptions[options.view][key2] : value;
      }
    },
    function setViewOptions(view2) {
      assign2(options, viewOptions[view2]);
      return viewComponents[view2];
    }
  ];
}
function parseOptions(opts, parsers) {
  let result = { ...opts };
  for (let key2 of keys(parsers)) if (key2 in result) result[key2] = parsers[key2](result[key2]);
  if (opts.views) {
    result.views = {};
    for (let view2 of keys(opts.views)) result.views[view2] = parseOptions(opts.views[view2], parsers);
  }
  return result;
}
function extractOption(options, name) {
  let extracted = options[name];
  delete options[name];
  return extracted;
}
function mergeOpts(...args) {
  let result = {};
  for (let opts of args) {
    let override = {};
    for (let key2 of specialOptions) if (isFunction(opts[key2])) override[key2] = opts[key2](result[key2]);
    result = {
      ...result,
      ...opts,
      ...override
    };
  }
  return result;
}
function diff(options, prevOptions) {
  let diff2 = [];
  for (let key2 of keys(options)) if (options[key2] !== prevOptions[key2]) diff2.push([key2, options[key2]]);
  return diff2;
}
function switchView(mainState) {
  return () => {
    let { options: { view: view2 } } = mainState;
    untrack(() => {
      let initComponent = mainState.setViewOptions(view2);
      mainState.extensions = {};
      mainState.features = [];
      mainState.viewComponent = initComponent(mainState);
    });
  };
}
function loadEvents(mainState, loadingInvoker) {
  return () => {
    let { activeRange: activeRange2, fetchedRange: { events: fetchedRange }, offset: offset2, viewDates: viewDates2, options: { events, eventSources, lazyFetching, timeZone } } = mainState;
    untrack(() => {
      load(eventSources.map((source2) => isFunction(source2.events) ? source2.events : source2), events, (input) => createEvents(input, offset2), (result) => mainState.events = arrayProxy(result), timeZone, activeRange2, fetchedRange, viewDates2, true, lazyFetching, loadingInvoker);
    });
  };
}
function loadResources(mainState, loadingInvoker) {
  return () => {
    let { activeRange: activeRange2, fetchedRange: { resources: fetchedRange }, viewDates: viewDates2, options: { lazyFetching, refetchResourcesOnNavigate, resources, timeZone } } = mainState;
    untrack(() => {
      load(isArray(resources) ? [] : [resources], resources, createResources, (result) => mainState.resources = arrayProxy(result), timeZone, activeRange2, fetchedRange, viewDates2, refetchResourcesOnNavigate, lazyFetching, loadingInvoker);
    });
  };
}
function load(sources, defaultResult, parseResult, applyResult, timeZone, activeRange2, fetchedRange, viewDates2, refetchOnNavigate, lazyFetching, loading) {
  if (empty(viewDates2)) return;
  if (empty(sources)) {
    applyResult(defaultResult);
    return;
  }
  if ((refetchOnNavigate || !fetchedRange.start) && (!lazyFetching || !fetchedRange.start || fetchedRange.start > activeRange2.start || fetchedRange.end < activeRange2.end || fetchedRange.timeZone !== timeZone)) {
    let result = [];
    let failure = (e) => loading.stop();
    let success = (data) => {
      result = result.concat(parseResult(data));
      applyResult(result);
      loading.stop();
    };
    let startStr = toISOString(activeRange2.start);
    let endStr = toISOString(activeRange2.end);
    for (let source2 of sources) {
      loading.start();
      if (isFunction(source2)) {
        let result2 = source2(refetchOnNavigate ? {
          start: toLocalDate(activeRange2.start),
          end: toLocalDate(activeRange2.end),
          startStr,
          endStr,
          timeZone
        } : {}, success, failure);
        if (result2 !== void 0) Promise.resolve(result2).then(success, failure);
      } else {
        let params = isFunction(source2.extraParams) ? source2.extraParams() : assign2({}, source2.extraParams);
        if (refetchOnNavigate) {
          params.start = startStr;
          params.end = endStr;
          if (timeZone !== "local") params.timeZone = timeZone;
        }
        params = new URLSearchParams(params);
        let url = source2.url, headers = {}, body;
        if (["GET", "HEAD"].includes(source2.method)) url += (url.includes("?") ? "&" : "?") + params;
        else {
          headers["content-type"] = "application/x-www-form-urlencoded;charset=UTF-8";
          body = String(params);
        }
        fetch(url, {
          method: source2.method,
          headers,
          body,
          signal: getAbortSignal(),
          credentials: "same-origin"
        }).then((response) => response.json()).then(success).catch(failure);
      }
    }
    assign2(fetchedRange, {
      ...activeRange2,
      timeZone
    });
  }
}
function createLoadingInvoker(mainState) {
  let counter = 0;
  function invoke(value) {
    let { options: { loading } } = mainState;
    if (isFunction(loading)) loading(value);
  }
  return {
    start: () => ++counter === 1 && invoke(true),
    stop: () => --counter === 0 && invoke(false)
  };
}
function setNowAndToday(mainState) {
  return () => {
    let { offset: offset2 } = mainState;
    let interval = setInterval(() => {
      let now = createDate(void 0, offset2);
      let today = setMidnight(cloneDate(now));
      mainState.now = now;
      if (!datesEqual(mainState.today, today)) mainState.today = today;
    }, 1e3);
    return () => clearInterval(interval);
  };
}
function handleTimeZoneChange(mainState) {
  return () => {
    let { offset: offset2, options } = mainState;
    untrack(() => {
      for (let event2 of mainState.events) if (!event2.allDay) for (let prop2 of ["start", "end"]) {
        let date = event2[prop2];
        let dateOffset2 = getOffset(date);
        if (dateOffset2 !== void 0) convertOffset(date, dateOffset2, offset2);
        else setOffset(date, resolveOffset(date, offset2));
      }
      let dateOffset = getOffset(options.date);
      if (dateOffset !== void 0) {
        let diff2 = createDate(void 0, offset2).getUTCDay() - createDate(void 0, dateOffset).getUTCDay();
        let date = addDay(cloneDate(options.date), diff2);
        mainState.setOption("date", date);
      }
      setOffset(options.date, resolveOffset(options.date, offset2));
    });
  };
}
function runDatesSet(mainState) {
  return () => {
    let { activeRange: activeRange2, options: { datesSet } } = mainState;
    untrack(() => {
      if (isFunction(datesSet)) datesSet({
        start: toLocalDate(activeRange2.start),
        end: toLocalDate(activeRange2.end),
        startStr: toISOString(activeRange2.start),
        endStr: toISOString(activeRange2.end),
        view: toViewWithLocalDates(mainState.view)
      });
    });
  };
}
function runEventAllUpdated(mainState) {
  let timer;
  return () => {
    let { filteredEvents: filteredEvents2, options: { eventAllUpdated } } = mainState;
    untrack(() => {
      if (isFunction(eventAllUpdated)) {
        if (!timer) timer = setTimeout(() => {
          timer = null;
          eventAllUpdated({ view: toViewWithLocalDates(mainState.view) });
        });
      }
    });
  };
}
function runViewDidMount(mainState) {
  return () => {
    let { options: { view: view2, viewDidMount } } = mainState;
    untrack(() => {
      if (isFunction(viewDidMount)) tick().then(() => viewDidMount({ view: toViewWithLocalDates(mainState.view) }));
    });
  };
}
function currentRange(mainState) {
  let prev;
  return () => {
    let { options: { date, duration, firstDay } } = mainState;
    let start, end;
    untrack(() => {
      start = cloneDate(date);
      if (duration.years) {
        start.setUTCMonth(0);
        start.setUTCDate(1);
      } else if (duration.months) start.setUTCDate(1);
      else if (duration.inWeeks) prevClosestDay(start, firstDay);
      end = addDuration(cloneDate(start), duration);
    });
    if (prev && datesEqual(prev.start, start) && datesEqual(prev.end, end)) return prev;
    return prev = {
      start,
      end
    };
  };
}
function activeRange(mainState) {
  let prev;
  return () => {
    let { currentRange: currentRange2, extensions: { activeRange: activeRange2 } } = mainState;
    let start, end;
    untrack(() => {
      start = cloneDate(currentRange2.start);
      end = cloneDate(currentRange2.end);
    });
    let result = activeRange2 ? activeRange2(start, end) : {
      start,
      end
    };
    if (prev && datesEqual(prev.start, result.start) && datesEqual(prev.end, result.end)) return prev;
    return prev = result;
  };
}
function filteredEvents(mainState) {
  return () => {
    let { events, options: { eventFilter, eventOrder, filterEventsWithResources, resources, view: view2 } } = mainState;
    let result = [...events];
    untrack(() => {
      if (isFunction(eventFilter)) {
        let events2 = events.map(toEventWithLocalDates);
        let view3 = toViewWithLocalDates(mainState.view);
        result = result.filter((event2, index2) => eventFilter({
          event: toEventWithLocalDates(event2),
          index: index2,
          events: events2,
          view: view3
        }));
      }
      if (filterEventsWithResources) result = result.filter((event2) => resources.some((resource) => event2.resourceIds.includes(resource.id)));
      if (isFunction(eventOrder)) result.sort((a, b) => eventOrder(toEventWithLocalDates(a), toEventWithLocalDates(b)));
      else result.sort((a, b) => a.start - b.start || b.allDay - a.allDay);
    });
    return result;
  };
}
function offset(mainState) {
  return () => {
    let { options: { timeZone } } = mainState;
    let offset2;
    untrack(() => {
      offset2 = timeZone === "UTC" ? 0 : parseOffset(timeZone) ?? "local";
    });
    return offset2;
  };
}
function viewDates(mainState) {
  return () => {
    let { options, activeRange: activeRange2 } = mainState;
    let { hiddenDays } = options;
    let dates = [];
    untrack(() => {
      let date = setMidnight(cloneDate(activeRange2.start));
      let end = setMidnight(cloneDate(activeRange2.end));
      while (date < end) {
        if (!hiddenDays.includes(date.getUTCDay())) dates.push(cloneDate(date));
        addDay(date);
      }
      if (!dates.length && hiddenDays.length && hiddenDays.length < 7) {
        while (hiddenDays.includes(date.getUTCDay())) addDay(date);
        tick().then(() => {
          mainState.setOption("date", date);
        });
      }
    });
    return dates;
  };
}
function viewTitle(mainState) {
  return () => {
    let { currentRange: currentRange2, intlTitle } = mainState;
    let title;
    untrack(() => {
      title = intlTitle.formatRange(currentRange2.start, subtractDay(cloneDate(currentRange2.end)));
    });
    return title;
  };
}
function view(mainState) {
  return () => {
    let { activeRange: activeRange2, currentRange: currentRange2, viewTitle: viewTitle2, options: { view: view2 } } = mainState;
    let viewObj;
    untrack(() => {
      viewObj = createView(view2, viewTitle2, currentRange2, activeRange2);
    });
    return viewObj;
  };
}
var State = class {
  #auxComponents;
  get auxComponents() {
    return get(this.#auxComponents);
  }
  set auxComponents(value) {
    set(this.#auxComponents, value, true);
  }
  #offset;
  get offset() {
    return get(this.#offset);
  }
  set offset(value) {
    set(this.#offset, value);
  }
  #currentRange;
  get currentRange() {
    return get(this.#currentRange);
  }
  set currentRange(value) {
    set(this.#currentRange, value);
  }
  #activeRange;
  get activeRange() {
    return get(this.#activeRange);
  }
  set activeRange(value) {
    set(this.#activeRange, value);
  }
  #fetchedRange;
  get fetchedRange() {
    return get(this.#fetchedRange);
  }
  set fetchedRange(value) {
    set(this.#fetchedRange, value, true);
  }
  #events;
  get events() {
    return get(this.#events);
  }
  set events(value) {
    set(this.#events, value);
  }
  #filteredEvents;
  get filteredEvents() {
    return get(this.#filteredEvents);
  }
  set filteredEvents(value) {
    set(this.#filteredEvents, value);
  }
  #mainEl;
  get mainEl() {
    return get(this.#mainEl);
  }
  set mainEl(value) {
    set(this.#mainEl, value, true);
  }
  #now;
  get now() {
    return get(this.#now);
  }
  set now(value) {
    set(this.#now, value, true);
  }
  #resources;
  get resources() {
    return get(this.#resources);
  }
  set resources(value) {
    set(this.#resources, value);
  }
  #scrollDate;
  get scrollDate() {
    return get(this.#scrollDate);
  }
  set scrollDate(value) {
    set(this.#scrollDate, value, true);
  }
  #today;
  get today() {
    return get(this.#today);
  }
  set today(value) {
    set(this.#today, value, true);
  }
  #intlEventTime;
  get intlEventTime() {
    return get(this.#intlEventTime);
  }
  set intlEventTime(value) {
    set(this.#intlEventTime, value);
  }
  #intlDayHeader;
  get intlDayHeader() {
    return get(this.#intlDayHeader);
  }
  set intlDayHeader(value) {
    set(this.#intlDayHeader, value);
  }
  #intlDayHeaderAL;
  get intlDayHeaderAL() {
    return get(this.#intlDayHeaderAL);
  }
  set intlDayHeaderAL(value) {
    set(this.#intlDayHeaderAL, value);
  }
  #intlTitle;
  get intlTitle() {
    return get(this.#intlTitle);
  }
  set intlTitle(value) {
    set(this.#intlTitle, value);
  }
  #viewDates;
  get viewDates() {
    return get(this.#viewDates);
  }
  set viewDates(value) {
    set(this.#viewDates, value);
  }
  #viewTitle;
  get viewTitle() {
    return get(this.#viewTitle);
  }
  set viewTitle(value) {
    set(this.#viewTitle, value);
  }
  #view;
  get view() {
    return get(this.#view);
  }
  set view(value) {
    set(this.#view, value);
  }
  #viewComponent;
  get viewComponent() {
    return get(this.#viewComponent);
  }
  set viewComponent(value) {
    set(this.#viewComponent, value, true);
  }
  #extensions;
  get extensions() {
    return get(this.#extensions);
  }
  set extensions(value) {
    set(this.#extensions, value, true);
  }
  #features;
  get features() {
    return get(this.#features);
  }
  set features(value) {
    set(this.#features, value, true);
  }
  #interaction;
  get interaction() {
    return get(this.#interaction);
  }
  set interaction(value) {
    set(this.#interaction, value, true);
  }
  #iClasses;
  get iClasses() {
    return get(this.#iClasses);
  }
  set iClasses(value) {
    set(this.#iClasses, value, true);
  }
  #iClass;
  get iClass() {
    return get(this.#iClass);
  }
  set iClass(value) {
    set(this.#iClass, value, true);
  }
  options;
  setOption;
  setViewOptions;
  constructor(plugins, options) {
    [this.options, this.setOption, this.setViewOptions] = optionsState(plugins, options);
    this.#auxComponents = state(proxy([]));
    this.#offset = user_derived(offset(this));
    this.#currentRange = user_derived(currentRange(this));
    this.#activeRange = user_derived(activeRange(this));
    this.#fetchedRange = state(proxy({
      events: {},
      resources: {}
    }));
    this.#events = state(arrayProxy(this.options.events));
    this.#filteredEvents = user_derived(filteredEvents(this));
    this.#mainEl = state();
    this.#now = state(proxy(createDate(void 0, this.offset)));
    this.#resources = state(arrayProxy(isArray(this.options.resources) ? this.options.resources : []));
    this.#scrollDate = state();
    this.#today = state(proxy(setMidnight(cloneDate(this.now))));
    this.#intlEventTime = user_derived(intlRange(this, "eventTimeFormat", true));
    this.#intlDayHeader = user_derived(intl(this, "dayHeaderFormat"));
    this.#intlDayHeaderAL = user_derived(intl(this, "dayHeaderAriaLabelFormat"));
    this.#intlTitle = user_derived(intlRange(this, "titleFormat"));
    this.#viewDates = user_derived(viewDates(this));
    this.#viewTitle = user_derived(viewTitle(this));
    this.#view = user_derived(view(this));
    this.#viewComponent = state();
    this.#extensions = state(proxy({}));
    this.#features = state(proxy([]));
    this.snippets = {};
    this.#interaction = state(proxy({}));
    this.iEvents = new SvelteMap();
    this.#iClasses = state(proxy(identity));
    this.#iClass = state();
    for (let plugin of plugins) plugin.initState?.(this);
    this.#initEffects();
  }
  #initEffects() {
    let loading = createLoadingInvoker(this);
    user_pre_effect(switchView(this));
    user_pre_effect(handleTimeZoneChange(this));
    user_pre_effect(setNowAndToday(this));
    user_effect(loadEvents(this, loading));
    user_effect(loadResources(this, loading));
    user_effect(runDatesSet(this));
    user_effect(runEventAllUpdated(this));
    user_effect(runViewDidMount(this));
  }
};
var root$21 = from_html(`<h2></h2>`);
var root_1$9 = from_html(`<button><i></i></button>`);
var root_2$5 = from_html(`<button> </button>`);
var root_3$1 = from_html(`<div><!></div>`);
var root_4$1 = from_html(`<button></button>`);
function Buttons($$anchor, $$props) {
  push($$props, true);
  let mainState = getContext("state");
  let currentRange2 = user_derived(() => mainState.currentRange), snippets = user_derived(() => mainState.snippets), today = user_derived(() => mainState.today), viewTitle2 = user_derived(() => mainState.viewTitle), viewDates2 = user_derived(() => mainState.viewDates), buttonText = user_derived(() => mainState.options.buttonText), customButtons = user_derived(() => mainState.options.customButtons), date = user_derived(() => mainState.options.date), dateIncrement = user_derived(() => mainState.options.dateIncrement), duration = user_derived(() => mainState.options.duration), hiddenDays = user_derived(() => mainState.options.hiddenDays), theme = user_derived(() => mainState.options.theme), validRange = user_derived(() => mainState.options.validRange), view2 = user_derived(() => mainState.options.view);
  let prevDisabled = state(false);
  let nextDisabled = state(false);
  let todayDisabled = state(false);
  let running = false;
  user_pre_effect(() => {
    get(viewDates2);
    get(validRange);
    $$props.buttons;
    untrack(() => {
      if (!running) {
        running = true;
        if ($$props.buttons.includes("prev")) {
          set(prevDisabled, false);
          if (get(validRange).start) set(prevDisabled, test(prev), true);
        }
        if ($$props.buttons.includes("next")) {
          set(nextDisabled, false);
          if (get(validRange).end) set(nextDisabled, test(next2), true);
        }
        if ($$props.buttons.includes("today")) {
          set(todayDisabled, get(today) >= get(currentRange2).start && get(today) < get(currentRange2).end, true);
          if (!get(todayDisabled) && (get(validRange).start || get(validRange).end)) set(todayDisabled, test(setToday), true);
        }
        tick().then(() => running = false);
      }
    });
  });
  function test(fn) {
    let currentDate = get(date);
    fn();
    let result = get(viewDates2).every((date2) => outsideRange(date2, get(validRange)));
    mainState.setOption("date", currentDate);
    return result;
  }
  function prev() {
    mainState.setOption("date", prevDate(cloneDate(get(date)), get(dateIncrement) ?? get(duration), get(hiddenDays)));
  }
  function next2() {
    mainState.setOption("date", nextDate(cloneDate(get(date)), get(dateIncrement) ?? get(duration), get(hiddenDays)));
  }
  function setToday() {
    mainState.setOption("date", cloneDate(get(today)));
  }
  function snippetName(button) {
    return "customButton" + button.charAt(0).toUpperCase() + button.slice(1);
  }
  var fragment = comment();
  var node = first_child(fragment);
  each(node, 17, () => $$props.buttons, index, ($$anchor2, button) => {
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    var consequent = ($$anchor3) => {
      var h2 = root$21();
      attach(h2, () => contentFrom(get(viewTitle2)));
      template_effect(() => set_class(h2, 1, get(theme).title));
      append($$anchor3, h2);
    };
    var consequent_1 = ($$anchor3) => {
      var button_1 = root_1$9();
      var i = only_child(button_1);
      template_effect(() => {
        set_class(button_1, 1, `${get(theme).button ?? ""} ec-${get(button) ?? ""}`);
        set_attribute2(button_1, "aria-label", get(buttonText).prev);
        set_attribute2(button_1, "title", get(buttonText).prev);
        button_1.disabled = get(prevDisabled);
        set_class(i, 1, `${get(theme).icon ?? ""} ec-${get(button) ?? ""}`);
      });
      delegated("click", button_1, prev);
      append($$anchor3, button_1);
    };
    var consequent_2 = ($$anchor3) => {
      var button_2 = root_1$9();
      var i_1 = only_child(button_2);
      template_effect(() => {
        set_class(button_2, 1, `${get(theme).button ?? ""} ec-${get(button) ?? ""}`);
        set_attribute2(button_2, "aria-label", get(buttonText).next);
        set_attribute2(button_2, "title", get(buttonText).next);
        button_2.disabled = get(nextDisabled);
        set_class(i_1, 1, `${get(theme).icon ?? ""} ec-${get(button) ?? ""}`);
      });
      delegated("click", button_2, next2);
      append($$anchor3, button_2);
    };
    var consequent_3 = ($$anchor3) => {
      var button_3 = root_2$5();
      var text2 = only_child(button_3, true);
      template_effect(() => {
        set_class(button_3, 1, `${get(theme).button ?? ""} ec-${get(button) ?? ""}`);
        button_3.disabled = get(todayDisabled);
        set_text(text2, get(buttonText)[get(button)]);
      });
      delegated("click", button_3, setToday);
      append($$anchor3, button_3);
    };
    var consequent_4 = ($$anchor3) => {
      const item = user_derived(() => createContent(get(customButtons)[get(button)]?.content, void 0, void 0, get(snippets)[snippetName(get(button))]));
      var div = root_3$1();
      var node_2 = child(div);
      snippet(node_2, () => get(item).snippet ?? noop);
      reset(div);
      attach(div, () => contentFrom(get(item).content, get(item).snippet));
      template_effect(() => set_class(div, 1, `ec-${get(button) ?? ""}`));
      append($$anchor3, div);
    };
    var d = user_derived(() => get(snippets)[snippetName(get(button))] || get(customButtons)[get(button)]?.content != null);
    var consequent_5 = ($$anchor3) => {
      var button_4 = root_4$1();
      attach(button_4, () => contentFrom(get(customButtons)[get(button)].text));
      template_effect(() => set_class(button_4, 1, clsx2([
        get(theme).button,
        `ec-${get(button)}`,
        get(customButtons)[get(button)].active && get(theme).active
      ])));
      delegated("click", button_4, function(...$$args) {
        get(customButtons)[get(button)].click?.apply(this, $$args);
      });
      append($$anchor3, button_4);
    };
    var alternate = ($$anchor3) => {
      var button_5 = root_2$5();
      var text_1 = only_child(button_5, true);
      template_effect(() => {
        set_class(button_5, 1, clsx2([
          get(theme).button,
          `ec-${get(button)}`,
          get(view2) === get(button) && get(theme).active
        ]));
        set_text(text_1, get(buttonText)[get(button)]);
      });
      delegated("click", button_5, () => mainState.setOption("view", get(button)));
      append($$anchor3, button_5);
    };
    if_block(node_1, ($$render) => {
      if (get(button) === "title") $$render(consequent);
      else if (get(button) === "prev") $$render(consequent_1, 1);
      else if (get(button) === "next") $$render(consequent_2, 2);
      else if (get(button) === "today") $$render(consequent_3, 3);
      else if (get(d)) $$render(consequent_4, 4);
      else if (get(customButtons)[get(button)]) $$render(consequent_5, 5);
      else $$render(alternate, -1);
    });
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
}
delegate(["click"]);
var root$20 = from_html(`<div><!></div>`);
var root_1$8 = from_html(`<div></div>`);
var root_2$4 = from_html(`<nav></nav>`);
function Toolbar($$anchor, $$props) {
  push($$props, true);
  let $$d = user_derived(() => getContext("state")), headerToolbar = user_derived(() => get($$d).options.headerToolbar), theme = user_derived(() => get($$d).options.theme);
  let sections = user_derived(() => {
    let sections2 = {};
    for (let key2 of [
      "start",
      "center",
      "end"
    ]) sections2[key2] = get(headerToolbar)[key2]?.split(" ").filter(Boolean).map((group) => group.split(",").filter(Boolean)) ?? [];
    return sections2;
  });
  var nav = root_2$4();
  each(nav, 21, () => keys(get(sections)), index, ($$anchor2, key2) => {
    var div = root_1$8();
    each(div, 21, () => get(sections)[get(key2)], index, ($$anchor3, buttons) => {
      var fragment = comment();
      var node = first_child(fragment);
      var consequent = ($$anchor4) => {
        var div_1 = root$20();
        Buttons(child(div_1), { get buttons() {
          return get(buttons);
        } });
        reset(div_1);
        template_effect(() => set_class(div_1, 1, get(theme).buttonGroup));
        append($$anchor4, div_1);
      };
      var alternate = ($$anchor4) => {
        Buttons($$anchor4, { get buttons() {
          return get(buttons);
        } });
      };
      if_block(node, ($$render) => {
        if (get(buttons).length > 1) $$render(consequent);
        else $$render(alternate, -1);
      });
      append($$anchor3, fragment);
    });
    reset(div);
    template_effect(() => set_class(div, 1, `ec-${get(key2) ?? ""}`));
    append($$anchor2, div);
  });
  reset(nav);
  template_effect(() => set_class(nav, 1, get(theme).toolbar));
  append($$anchor, nav);
  pop();
}
var rest_excludes = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "plugins",
  "options"
]);
var root$19 = from_html(`<div><!> <!> <!></div>`);
function Calendar($$anchor, $$props) {
  push($$props, true);
  let plugins = prop($$props, "plugins", 19, () => []), options = prop($$props, "options", 19, () => ({})), snippets = rest_props($$props, rest_excludes);
  let mainState = new State(plugins(), options());
  mainState.snippets = snippets;
  setContext("state", mainState);
  let auxComponents = user_derived(() => mainState.auxComponents), features = user_derived(() => mainState.features), events = user_derived(() => mainState.events), interaction = user_derived(() => mainState.interaction), iClass = user_derived(() => mainState.iClass), offset2 = user_derived(() => mainState.offset), view2 = user_derived(() => mainState.view), View2 = user_derived(() => mainState.viewComponent), date = user_derived(() => mainState.options.date), dateIncrement = user_derived(() => mainState.options.dateIncrement), duration = user_derived(() => mainState.options.duration), height2 = user_derived(() => mainState.options.height), hiddenDays = user_derived(() => mainState.options.hiddenDays), customScrollbars = user_derived(() => mainState.options.customScrollbars), theme = user_derived(() => mainState.options.theme);
  let prevOptions = { ...options() };
  user_pre_effect(() => {
    for (let [name, value] of diff(options(), prevOptions)) untrack(() => {
      setOption(name, value);
    });
    assign2(prevOptions, options());
  });
  function setOption(name, value) {
    mainState.setOption(name, value, false);
    return this;
  }
  function getOption(name) {
    let value = mainState.options[name];
    return isDate(value) ? toLocalDate(value) : value;
  }
  function refetchResources() {
    mainState.fetchedRange.resources = {};
    return this;
  }
  function refetchEvents() {
    mainState.fetchedRange.events = {};
    return this;
  }
  function getEvents() {
    return get(events).map(toEventWithLocalDates);
  }
  function getEventById(id) {
    id = String(id);
    for (let event2 of get(events)) if (event2.id === id) return toEventWithLocalDates(event2);
    return null;
  }
  function addEvent(event2) {
    event2 = createEvents([event2], get(offset2))[0];
    get(events).push(event2);
    return toEventWithLocalDates(event2);
  }
  function updateEvent(event2) {
    let id = String(event2.id);
    let idx = get(events).findIndex((event3) => event3.id === id);
    if (idx >= 0) {
      event2 = createEvents([event2], get(offset2))[0];
      get(events)[idx] = event2;
      return toEventWithLocalDates(event2);
    }
    return null;
  }
  function removeEventById(id) {
    id = String(id);
    let idx = get(events).findIndex((event2) => event2.id === id);
    if (idx >= 0) get(events).splice(idx, 1);
    return this;
  }
  function getView() {
    return toViewWithLocalDates(get(view2));
  }
  function unselect() {
    get(interaction).action?.unselect();
    return this;
  }
  function dateFromPoint(x, y) {
    let dayEl = getElementWithPayload(x, y);
    if (dayEl) {
      let info = getPayload(dayEl)(x, y);
      info.date = toLocalDate(info.date);
      return info;
    }
    return null;
  }
  function gotoDate(date2) {
    date2 = setMidnight(createDate(date2));
    mainState.setOption("date", cloneDate(date2));
    mainState.scrollDate = date2;
    return this;
  }
  function next2() {
    mainState.setOption("date", nextDate(cloneDate(get(date)), get(dateIncrement) ?? get(duration), get(hiddenDays)));
    return this;
  }
  function prev() {
    mainState.setOption("date", prevDate(cloneDate(get(date)), get(dateIncrement) ?? get(duration), get(hiddenDays)));
    return this;
  }
  var $$exports = {
    setOption,
    getOption,
    refetchResources,
    refetchEvents,
    getEvents,
    getEventById,
    addEvent,
    updateEvent,
    removeEventById,
    getView,
    unselect,
    dateFromPoint,
    gotoDate,
    next: next2,
    prev
  };
  var div = root$19();
  let styles;
  var node = child(div);
  Toolbar(node, {});
  var node_1 = sibling(node, 2);
  component(node_1, () => get(View2), ($$anchor2, View_12) => {
    View_12($$anchor2, {});
  });
  var node_2 = sibling(node_1, 2);
  each(node_2, 17, () => get(auxComponents), index, ($$anchor2, AuxComponent) => {
    var fragment = comment();
    var node_3 = first_child(fragment);
    component(node_3, () => get(AuxComponent), ($$anchor3, AuxComponent_1) => {
      AuxComponent_1($$anchor3, {});
    });
    append($$anchor2, fragment);
  });
  reset(div);
  template_effect(($0) => {
    set_class(div, 1, clsx2([
      get(theme).calendar,
      get(theme).view,
      get(iClass) && get(theme)[get(iClass)],
      get(customScrollbars) && get(theme).customScrollbars
    ]));
    set_attribute2(div, "role", $0);
    styles = set_style(div, "", styles, { height: get(height2) });
  }, [() => get(features).includes("list") ? "list" : "table"]);
  append($$anchor, div);
  return pop($$exports);
}
function createDROptions(options) {
  if (!("weekNumbers" in options)) assign2(options, {
    weekNumbers: false,
    weekNumberContent: void 0
  });
}
function colsCount(mainState) {
  return () => {
    let { viewDates: viewDates2, options: { duration, hiddenDays } } = mainState;
    let count;
    untrack(() => count = duration.months || duration.inWeeks ? 7 - hiddenDays.length : viewDates2.length);
    return count;
  };
}
function grid$3(mainState, viewState) {
  return () => {
    let { options: { highlightedDates, validRange }, viewDates: viewDates2 } = mainState;
    let { colsCount: colsCount2 } = viewState;
    let grid2 = [];
    untrack(() => {
      let days = [];
      let gridColumn = 1;
      let gridRow = 1;
      for (let date of viewDates2) {
        days.push({
          gridColumn,
          gridRow,
          resource: void 0,
          dayStart: date,
          dayEnd: addDay(cloneDate(date)),
          disabled: outsideRange(date, validRange),
          highlight: highlightedDates.some((d) => datesEqual(d, date))
        });
        if (gridColumn === colsCount2) {
          grid2.push(days);
          days = [];
          gridColumn = 0;
          ++gridRow;
        }
        ++gridColumn;
      }
    });
    return grid2;
  };
}
function eventChunks$2(mainState, viewState) {
  return () => {
    let { filteredEvents: filteredEvents2 } = mainState;
    let { grid: grid2 } = viewState;
    let chunks = [];
    let bgChunks = [];
    untrack(() => {
      for (let event2 of filteredEvents2) for (let days of grid2) if (bgEvent(event2.display)) {
        if (event2.allDay) bgChunks = bgChunks.concat(createAllDayChunks(event2, days));
      } else chunks = chunks.concat(createAllDayChunks(event2, days));
      prepareAllDayChunks(chunks);
    });
    return {
      chunks,
      bgChunks
    };
  };
}
function iEventChunks$2(mainState, viewState) {
  return () => {
    let { iEvents } = mainState;
    let { grid: grid2 } = viewState;
    let iChunks = [];
    for (let [, event2] of iEvents) {
      if (!event2) continue;
      untrack(() => {
        for (let days of grid2) iChunks = iChunks.concat(createAllDayChunks(event2, days, false));
      });
    }
    return iChunks;
  };
}
var ViewState$4 = class {
  #colsCount;
  get colsCount() {
    return get(this.#colsCount);
  }
  set colsCount(value) {
    set(this.#colsCount, value);
  }
  #grid;
  get grid() {
    return get(this.#grid);
  }
  set grid(value) {
    set(this.#grid, value);
  }
  #gridEl;
  get gridEl() {
    return get(this.#gridEl);
  }
  set gridEl(value) {
    set(this.#gridEl, value, true);
  }
  #chunks;
  get chunks() {
    return get(this.#chunks);
  }
  set chunks(value) {
    set(this.#chunks, value);
  }
  #bgChunks;
  get bgChunks() {
    return get(this.#bgChunks);
  }
  set bgChunks(value) {
    set(this.#bgChunks, value);
  }
  #iChunks;
  get iChunks() {
    return get(this.#iChunks);
  }
  set iChunks(value) {
    set(this.#iChunks, value);
  }
  #intlDayCell;
  get intlDayCell() {
    return get(this.#intlDayCell);
  }
  set intlDayCell(value) {
    set(this.#intlDayCell, value);
  }
  #intlDayPopover;
  get intlDayPopover() {
    return get(this.#intlDayPopover);
  }
  set intlDayPopover(value) {
    set(this.#intlDayPopover, value);
  }
  #popupDay;
  get popupDay() {
    return get(this.#popupDay);
  }
  set popupDay(value) {
    set(this.#popupDay, value, true);
  }
  constructor(mainState) {
    this.#colsCount = user_derived(colsCount(mainState));
    this.#grid = user_derived(grid$3(mainState, this));
    this.#gridEl = state();
    let $$d = user_derived(eventChunks$2(mainState, this)), chunks = user_derived(() => get($$d).chunks), bgChunks = user_derived(() => get($$d).bgChunks);
    this.#chunks = user_derived(() => get(chunks));
    this.#bgChunks = user_derived(() => get(bgChunks));
    this.#iChunks = user_derived(iEventChunks$2(mainState, this));
    this.hiddenChunks = new SvelteMap();
    this.#intlDayCell = user_derived(intl(mainState, "dayCellFormat"));
    this.#intlDayPopover = user_derived(intl(mainState, "dayPopoverFormat"));
    this.#popupDay = state(null);
  }
};
var root$18 = from_html(`<div><!></div>`);
function BaseDay($$anchor, $$props) {
  push($$props, true);
  let el = prop($$props, "el", 15), allDay = prop($$props, "allDay", 3, false), resource = prop($$props, "resource", 3, void 0), dateFromPoint = prop($$props, "dateFromPoint", 3, () => $$props.date), classes = prop($$props, "classes", 3, identity), disabled = prop($$props, "disabled", 3, false), highlight = prop($$props, "highlight", 3, false), role = prop($$props, "role", 3, "cell"), noIeb = prop($$props, "noIeb", 3, false), noBeb = prop($$props, "noBeb", 3, false), defaultContent = prop($$props, "defaultContent", 3, void 0);
  let $$d = user_derived(() => getContext("state")), today = user_derived(() => get($$d).today), snippets = user_derived(() => get($$d).snippets), action2 = user_derived(() => get($$d).interaction.action), dayCellContent = user_derived(() => get($$d).options.dayCellContent), theme = user_derived(() => get($$d).options.theme);
  let $$d_1 = user_derived(() => getContext("view-state")), snap2 = user_derived(() => get($$d_1).snap);
  let isToday = user_derived(() => datesEqual($$props.date, get(today)));
  let dayCell = user_derived(() => createContent(get(dayCellContent), () => ({
    allDay: allDay(),
    date: toLocalDate($$props.date),
    isToday: get(isToday),
    resource: resource()
  }), defaultContent(), get(snippets).dayCellContent));
  let classNames = user_derived(() => classes()([
    get(theme).day,
    get(theme).weekdays?.[$$props.date.getUTCDay()],
    get(isToday) && get(theme).today,
    highlight() && get(theme).highlight,
    disabled() && get(theme).disabled,
    noIeb() && get(theme).noIeb,
    noBeb() && get(theme).noBeb
  ]));
  onMount(() => {
    setPayload(el(), (x, y) => {
      return {
        allDay: allDay(),
        date: dateFromPoint()(x, y),
        resource: resource(),
        dayEl: el(),
        disabled: disabled()
      };
    });
  });
  let onpointerdown = user_derived(() => !disabled() && get(action2) ? (jsEvent) => get(action2).select(jsEvent, get(snap2)) : void 0);
  var div = root$18();
  var node = child(div);
  var consequent = ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.content, () => get(dayCell));
    append($$anchor2, fragment);
  };
  var alternate = ($$anchor2) => {
    var fragment_1 = comment();
    var node_2 = first_child(fragment_1);
    snippet(node_2, () => get(dayCell).snippet ?? noop, () => get(dayCell).arg);
    append($$anchor2, fragment_1);
  };
  if_block(node, ($$render) => {
    if ($$props.content) $$render(consequent);
    else $$render(alternate, -1);
  });
  reset(div);
  bind_this(div, ($$value) => el($$value), () => el());
  attach(div, () => $$props.content ? null : contentFrom(get(dayCell).content, get(dayCell).snippet));
  template_effect(() => {
    set_class(div, 1, clsx2(get(classNames)));
    set_attribute2(div, "role", role());
  });
  delegated("pointerdown", div, function(...$$args) {
    get(onpointerdown)?.apply(this, $$args);
  });
  append($$anchor, div);
  pop();
}
delegate(["pointerdown"]);
var root$17 = from_html(`<div><!></div>`);
var root_1$7 = from_html(`<article><!></article>`);
function BaseEvent($$anchor, $$props) {
  push($$props, true);
  let el = prop($$props, "el", 15), classes = prop($$props, "classes", 3, identity), styles = prop($$props, "styles", 3, identity);
  let $$d = user_derived(() => getContext("state")), intlEventTime = user_derived(() => get($$d).intlEventTime), resources = user_derived(() => get($$d).resources), snippets = user_derived(() => get($$d).snippets), view2 = user_derived(() => get($$d).view), displayEventEnd = user_derived(() => get($$d).options.displayEventEnd), eventBackgroundColor$1 = user_derived(() => get($$d).options.eventBackgroundColor), eventColor = user_derived(() => get($$d).options.eventColor), eventContent = user_derived(() => get($$d).options.eventContent), eventClick = user_derived(() => get($$d).options.eventClick), eventDidMount = user_derived(() => get($$d).options.eventDidMount), eventClassNames = user_derived(() => get($$d).options.eventClassNames), eventMouseEnter = user_derived(() => get($$d).options.eventMouseEnter), eventMouseLeave = user_derived(() => get($$d).options.eventMouseLeave), eventTextColor$1 = user_derived(() => get($$d).options.eventTextColor), theme = user_derived(() => get($$d).options.theme);
  let event2 = user_derived(() => $$props.chunk.event);
  let display = user_derived(() => $$props.chunk.event.display);
  let bgColor = user_derived(() => get(event2).backgroundColor ?? eventBackgroundColor($$props.chunk.resource ?? findFirstResource(get(event2), get(resources))) ?? get(eventBackgroundColor$1) ?? get(eventColor));
  let txtColor = user_derived(() => get(event2).textColor ?? eventTextColor($$props.chunk.resource ?? findFirstResource(get(event2), get(resources))) ?? get(eventTextColor$1));
  let style = user_derived(() => entries(styles()({
    "background-color": get(bgColor),
    "color": get(txtColor)
  })).map((entry) => `${entry[0]}:${entry[1]}`).concat(get(event2).styles).join(";"));
  let classNames = user_derived(() => {
    let classNames2 = [bgEvent(get(display)) ? get(theme).bgEvent : get(theme).event];
    if (get(event2).allDay) {
      if (!datesEqual(setMidnight(cloneDate($$props.chunk.start)), get(event2).start)) classNames2.push(get(theme).startClipped);
      let end1 = cloneDate($$props.chunk.end);
      let end2 = cloneDate(get(event2).end);
      end1.setUTCSeconds(end1.getUTCSeconds() - 1);
      end2.setUTCSeconds(end2.getUTCSeconds() - 1);
      if (!datesEqual(setMidnight(end1), setMidnight(end2))) classNames2.push(get(theme).endClipped);
    } else {
      if (!datesEqual($$props.chunk.start, get(event2).start)) classNames2.push(get(theme).startClipped);
      if (!datesEqual($$props.chunk.end, get(event2).end)) classNames2.push(get(theme).endClipped);
    }
    return classes()(classNames2.concat(createEventClasses(get(eventClassNames), get(event2), get(view2))));
  });
  let timeText = user_derived(() => createEventTimeText($$props.chunk, get(displayEventEnd), get(intlEventTime)));
  let content = user_derived(() => createContent(get(eventContent), () => ({
    event: toEventWithLocalDates(get(event2)),
    timeText: get(timeText),
    view: toViewWithLocalDates(get(view2))
  }), () => createDefaultEventContent($$props.chunk, get(timeText), get(theme)), get(snippets).eventContent));
  onMount(() => {
    if (isFunction(get(eventDidMount))) get(eventDidMount)({
      event: toEventWithLocalDates(get(event2)),
      timeText: get(timeText),
      el: el(),
      view: toViewWithLocalDates(get(view2))
    });
  });
  function createHandler(fn, display2) {
    return isFunction(fn) && !helperEvent(display2) ? (jsEvent) => fn({
      event: toEventWithLocalDates(get(event2)),
      el: el(),
      jsEvent,
      view: toViewWithLocalDates(get(view2))
    }) : void 0;
  }
  let onclick = user_derived(() => !bgEvent(get(display)) && createHandler(get(eventClick), get(display)) || void 0);
  let onkeydown = user_derived(() => get(onclick) && keyEnter(get(onclick)));
  let onmouseenter = user_derived(() => createHandler(get(eventMouseEnter), get(display)));
  let onmouseleave = user_derived(() => createHandler(get(eventMouseLeave), get(display)));
  var article = root_1$7();
  {
    const defaultBody = ($$anchor2) => {
      var div = root$17();
      var node = child(div);
      snippet(node, () => get(content).snippet ?? noop, () => get(content).arg);
      reset(div);
      attach(div, () => contentFrom(get(content).content, get(content).snippet));
      template_effect(() => set_class(div, 1, clsx2(get(theme).eventBody)));
      append($$anchor2, div);
    };
    var node_1 = child(article);
    var consequent = ($$anchor2) => {
      var fragment = comment();
      var node_2 = first_child(fragment);
      snippet(node_2, () => $$props.body, () => defaultBody, () => get(bgColor), () => get(txtColor));
      append($$anchor2, fragment);
    };
    var alternate = ($$anchor2) => {
      defaultBody($$anchor2);
    };
    if_block(node_1, ($$render) => {
      if ($$props.body) $$render(consequent);
      else $$render(alternate, -1);
    });
    reset(article);
    bind_this(article, ($$value) => el($$value), () => el());
  }
  template_effect(() => {
    set_class(article, 1, clsx2(get(classNames)));
    set_style(article, get(style));
    set_attribute2(article, "role", get(onclick) ? "button" : void 0);
    set_attribute2(article, "tabindex", get(onclick) ? 0 : void 0);
  });
  delegated("click", article, function(...$$args) {
    get(onclick)?.apply(this, $$args);
  });
  delegated("keydown", article, function(...$$args) {
    get(onkeydown)?.apply(this, $$args);
  });
  event("mouseenter", article, function(...$$args) {
    get(onmouseenter)?.apply(this, $$args);
  });
  event("mouseleave", article, function(...$$args) {
    get(onmouseleave)?.apply(this, $$args);
  });
  delegated("pointerdown", article, function(...$$args) {
    $$props.onpointerdown?.apply(this, $$args);
  });
  append($$anchor, article);
  pop();
}
delegate([
  "click",
  "keydown",
  "pointerdown"
]);
var root$16 = from_html(`<div><!></div>`);
function ColHead($$anchor, $$props) {
  push($$props, true);
  let weekday = prop($$props, "weekday", 3, true), colSpan = prop($$props, "colSpan", 3, 1), ariaHidden = prop($$props, "ariaHidden", 3, false), disabled = prop($$props, "disabled", 3, false), highlight = prop($$props, "highlight", 3, false), cssSpan = prop($$props, "cssSpan", 3, false);
  let $$d = user_derived(() => getContext("state")), today = user_derived(() => get($$d).today), theme = user_derived(() => get($$d).options.theme);
  var div = root$16();
  let styles;
  var node = child(div);
  snippet(node, () => $$props.children);
  reset(div);
  template_effect(($0) => {
    set_class(div, 1, $0);
    set_attribute2(div, "role", ariaHidden() ? null : "columnheader");
    set_attribute2(div, "aria-colspan", ariaHidden() || colSpan() <= 1 ? null : colSpan());
    set_attribute2(div, "aria-colindex", ariaHidden() ? null : $$props.colIndex);
    set_attribute2(div, "aria-hidden", ariaHidden() ? "true" : null);
    styles = set_style(div, "", styles, { "--ec-col-group-span": cssSpan() ? colSpan() : void 0 });
  }, [() => clsx2([
    $$props.className ?? get(theme).colHead,
    weekday() && get(theme).weekdays?.[$$props.date.getUTCDay()],
    weekday() && datesEqual($$props.date, get(today)) && get(theme).today,
    highlight() && get(theme).highlight,
    disabled() && get(theme).disabled
  ])]);
  append($$anchor, div);
  pop();
}
var root$15 = from_html(`<time></time>`);
function DayHeader($$anchor, $$props) {
  push($$props, true);
  let alPrefix = prop($$props, "alPrefix", 3, "");
  let $$d = user_derived(() => getContext("state")), intlDayHeader = user_derived(() => get($$d).intlDayHeader), intlDayHeaderAL = user_derived(() => get($$d).intlDayHeaderAL);
  var time = root$15();
  attach(time, () => contentFrom(get(intlDayHeader).format($$props.date)));
  template_effect(($0, $1) => {
    set_attribute2(time, "datetime", $0);
    set_attribute2(time, "aria-label", `${alPrefix() ?? ""}${$1 ?? ""}`);
  }, [() => toISOString($$props.date, 10), () => get(intlDayHeaderAL).format($$props.date)]);
  append($$anchor, time);
  pop();
}
function InteractableEvent($$anchor, $$props) {
  push($$props, true);
  let el = prop($$props, "el", 15);
  let $$d = user_derived(() => getContext("state")), iClasses = user_derived(() => get($$d).iClasses), action2 = user_derived(() => get($$d).interaction.action), Resizer2 = user_derived(() => get($$d).interaction.resizer);
  let $$d_1 = user_derived(() => getContext("view-state")), snap2 = user_derived(() => get($$d_1).snap);
  let event2 = user_derived(() => $$props.chunk.event);
  let display = user_derived(() => $$props.chunk.event.display);
  let classes = user_derived(() => (classNames) => get(iClasses)(classNames, get(event2)));
  function createDragHandler(event3) {
    return get(action2)?.draggable(event3) ? (jsEvent) => get(action2).drag(event3, jsEvent, $$props.forceDate, $$props.forceMargin, get(snap2)) : get(action2)?.noAction;
  }
  let onpointerdown = user_derived(() => !bgEvent(get(display)) && !helperEvent(get(display)) ? createDragHandler(get(event2)) : void 0);
  {
    const body = ($$anchor2, defaultBody = noop) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      var consequent = ($$anchor3) => {
        var fragment_2 = comment();
        var node_1 = first_child(fragment_2);
        component(node_1, () => get(Resizer2), ($$anchor4, Resizer_1) => {
          Resizer_1($$anchor4, {
            get chunk() {
              return $$props.chunk;
            },
            get axis() {
              return $$props.axis;
            },
            get forceDate() {
              return $$props.forceDate;
            },
            get forceMargin() {
              return $$props.forceMargin;
            },
            children: ($$anchor5, $$slotProps) => {
              var fragment_3 = comment();
              var node_2 = first_child(fragment_3);
              snippet(node_2, defaultBody);
              append($$anchor5, fragment_3);
            },
            $$slots: { default: true }
          });
        });
        append($$anchor3, fragment_2);
      };
      var alternate = ($$anchor3) => {
        var fragment_4 = comment();
        var node_3 = first_child(fragment_4);
        snippet(node_3, defaultBody);
        append($$anchor3, fragment_4);
      };
      if_block(node, ($$render) => {
        if (get(Resizer2)) $$render(consequent);
        else $$render(alternate, -1);
      });
      append($$anchor2, fragment_1);
    };
    BaseEvent($$anchor, {
      get chunk() {
        return $$props.chunk;
      },
      get classes() {
        return get(classes);
      },
      get styles() {
        return $$props.styles;
      },
      get onpointerdown() {
        return get(onpointerdown);
      },
      get el() {
        return el();
      },
      set el($$value) {
        el($$value);
      },
      body,
      $$slots: { body: true }
    });
  }
  pop();
}
var root$14 = from_html(`<span><!></span>`);
var root_1$6 = from_html(`<a role="button" tabindex="0" aria-haspopup="dialog"><!></a>`);
var root_2$3 = from_html(`<div><time><!></time> <!></div> <div><!></div>`, 1);
function Day$3($$anchor, $$props) {
  push($$props, true);
  let mainState = getContext("state");
  let viewState = getContext("view-state");
  user_derived(() => mainState.features);
  let snippets = user_derived(() => mainState.snippets), date = user_derived(() => mainState.options.date), firstDay = user_derived(() => mainState.options.firstDay), moreLinkContent = user_derived(() => mainState.options.moreLinkContent), theme = user_derived(() => mainState.options.theme), weekNumbers = user_derived(() => mainState.options.weekNumbers), weekNumberContent = user_derived(() => mainState.options.weekNumberContent);
  let hiddenChunks = user_derived(() => viewState.hiddenChunks), intlDayCell = user_derived(() => viewState.intlDayCell);
  let dayStart = user_derived(() => $$props.day.dayStart), disabled = user_derived(() => $$props.day.disabled), highlight = user_derived(() => $$props.day.highlight);
  let otherMonth = user_derived(() => get(dayStart).getUTCMonth() !== get(date).getUTCMonth());
  let classes = user_derived(() => (classNames) => [...classNames, get(otherMonth) && get(theme).otherMonth]);
  let showWeekNumber = user_derived(() => get(weekNumbers) && get(dayStart).getUTCDay() === (get(firstDay) ? 1 : 0));
  let weekNumber = user_derived(() => get(showWeekNumber) ? createWeekNumberContent(getWeekNumber(get(dayStart), get(firstDay)), get(dayStart), get(weekNumberContent), get(snippets).weekNumberContent) : {});
  let dayHiddenChunks = user_derived(() => get(hiddenChunks).get(toTime(get(dayStart))));
  let moreLink = user_derived(() => {
    if (!get(dayHiddenChunks)) return {};
    let num = get(dayHiddenChunks).length;
    let text2 = "+" + num + " more";
    return createContent(get(moreLinkContent), () => ({
      num,
      text: text2
    }), text2, get(snippets).moreLinkContent);
  });
  function showMore() {
    viewState.popupDay = $$props.day;
  }
  {
    const content = ($$anchor2, dayCell = noop) => {
      var fragment_1 = root_2$3();
      var div = first_child(fragment_1);
      var time = child(div);
      var node = child(time);
      snippet(node, () => dayCell().snippet ?? noop, () => dayCell().arg);
      reset(time);
      attach(time, () => contentFrom(dayCell().content, dayCell().snippet));
      var node_1 = sibling(time, 2);
      var consequent = ($$anchor3) => {
        var span = root$14();
        var node_2 = child(span);
        snippet(node_2, () => get(weekNumber).snippet ?? noop, () => get(weekNumber).arg);
        reset(span);
        attach(span, () => contentFrom(get(weekNumber).content, get(weekNumber).snippet));
        template_effect(() => set_class(span, 1, get(theme).weekNumber));
        append($$anchor3, span);
      };
      if_block(node_1, ($$render) => {
        if (get(showWeekNumber)) $$render(consequent);
      });
      reset(div);
      var div_1 = sibling(div, 2);
      var node_3 = child(div_1);
      var consequent_1 = ($$anchor3) => {
        var a = root_1$6();
        var event_handler = user_derived(() => stopPropagation2(showMore));
        var event_handler_1 = user_derived(() => keyEnter(showMore));
        var event_handler_2 = user_derived(stopPropagation2);
        var node_4 = child(a);
        snippet(node_4, () => get(moreLink).snippet ?? noop, () => get(moreLink).arg);
        reset(a);
        attach(a, () => contentFrom(get(moreLink).content, get(moreLink).snippet));
        delegated("click", a, function(...$$args) {
          get(event_handler)?.apply(this, $$args);
        });
        delegated("keydown", a, function(...$$args) {
          get(event_handler_1)?.apply(this, $$args);
        });
        delegated("pointerdown", a, function(...$$args) {
          get(event_handler_2)?.apply(this, $$args);
        });
        append($$anchor3, a);
      };
      if_block(node_3, ($$render) => {
        if (get(dayHiddenChunks)) $$render(consequent_1);
      });
      reset(div_1);
      template_effect(($0) => {
        set_class(div, 1, get(theme).dayHead);
        set_attribute2(time, "datetime", $0);
        set_class(div_1, 1, get(theme).dayFoot);
      }, [() => toISOString(get(dayStart), 10)]);
      append($$anchor2, fragment_1);
    };
    BaseDay($$anchor, {
      get date() {
        return get(dayStart);
      },
      allDay: true,
      get classes() {
        return get(classes);
      },
      get disabled() {
        return get(disabled);
      },
      get highlight() {
        return get(highlight);
      },
      get noIeb() {
        return $$props.noIeb;
      },
      get noBeb() {
        return $$props.noBeb;
      },
      defaultContent: () => get(intlDayCell).format(get(dayStart)),
      content,
      $$slots: { content: true }
    });
  }
  pop();
}
delegate([
  "click",
  "keydown",
  "pointerdown"
]);
function Event$3($$anchor, $$props) {
  push($$props, true);
  let inPopup = prop($$props, "inPopup", 3, false);
  let $$d = user_derived(() => getContext("state")), dayMaxEvents = user_derived(() => get($$d).options.dayMaxEvents), eventGap = user_derived(() => get($$d).options.eventGap);
  let $$d_1 = user_derived(() => getContext("view-state")), colsCount2 = user_derived(() => get($$d_1).colsCount), gridEl = user_derived(() => get($$d_1).gridEl), hiddenChunks = user_derived(() => get($$d_1).hiddenChunks), popupDay = user_derived(() => get($$d_1).popupDay);
  let el = state(void 0);
  let margin = state(1);
  let hidden = state(false);
  let event2 = user_derived(() => $$props.chunk.event);
  let display = user_derived(() => $$props.chunk.event.display);
  function getDayEl() {
    return get(gridEl).children.item(($$props.chunk.gridRow - 1) * get(colsCount2) + $$props.chunk.gridColumn - 1);
  }
  user_effect(() => {
    if (!inPopup() && (previewEvent(get(display)) || pointerEvent(get(display)))) set(margin, height(getDayEl().firstElementChild) || 1, true);
  });
  let styles = user_derived(() => (style) => {
    style["grid-column"] = `${$$props.chunk.gridColumn} / span ${$$props.chunk.dates.length}`;
    style["grid-row"] = $$props.chunk.gridRow;
    if (!bgEvent(get(display))) {
      let marginTop = inPopup() ? 1 : get(margin);
      if (get(event2)._margin) {
        let [_margin, _gridRow] = get(event2)._margin;
        if (_margin > marginTop && $$props.chunk.gridRow === _gridRow) marginTop = _margin;
      }
      style["margin-block-start"] = `${marginTop}px`;
    }
    if (get(hidden)) style["visibility"] = "hidden";
    return style;
  });
  function reposition() {
    set(margin, repositionEvent$1($$props.chunk, height(get(el)), height(getDayEl().firstElementChild) || 1, get(eventGap)), true);
  }
  function hide() {
    if (get(dayMaxEvents) === true) {
      let dayEl = getDayEl();
      let h = height(dayEl) - footHeight(dayEl);
      set(hidden, $$props.chunk.bottom > h);
      if (get(hidden)) for (let date of $$props.chunk.dates) {
        let key2 = toTime(date);
        if (get(hiddenChunks).has(key2)) {
          let chunks = get(hiddenChunks).get(key2);
          if (!chunks.includes($$props.chunk)) get(hiddenChunks).set(key2, [...chunks, $$props.chunk]);
        } else get(hiddenChunks).set(key2, [$$props.chunk]);
      }
    } else {
      set(hidden, false);
      if (get(hiddenChunks).size) get(hiddenChunks).clear();
    }
  }
  function footHeight(dayEl) {
    let h = 0;
    for (let i = 0; i < $$props.chunk.dates.length; ++i) {
      h = max(h, height(dayEl.lastElementChild));
      dayEl = dayEl.nextElementSibling;
      if (!dayEl) break;
    }
    return h;
  }
  var $$exports = {
    reposition,
    hide
  };
  {
    let $0 = user_derived(() => inPopup() && get(popupDay).dayStart);
    let $1 = user_derived(() => [get(margin), $$props.chunk.gridRow]);
    InteractableEvent($$anchor, {
      get chunk() {
        return $$props.chunk;
      },
      get styles() {
        return get(styles);
      },
      axis: "x",
      get forceDate() {
        return get($0);
      },
      get forceMargin() {
        return get($1);
      },
      get el() {
        return get(el);
      },
      set el($$value) {
        set(el, $$value, true);
      }
    });
  }
  return pop($$exports);
}
var root$13 = from_html(`<dialog closedby="closerequest"><header><time></time>  <a role="button" tabindex="0">&times;</a></header> <div></div></dialog>`);
function Popup($$anchor, $$props) {
  push($$props, true);
  let viewState = getContext("view-state");
  let $$d = user_derived(() => getContext("state")), interaction = user_derived(() => get($$d).interaction), buttonText = user_derived(() => get($$d).options.buttonText), theme = user_derived(() => get($$d).options.theme);
  let colsCount2 = user_derived(() => viewState.colsCount), chunks = user_derived(() => viewState.chunks), gridEl = user_derived(() => viewState.gridEl), intlDayPopover = user_derived(() => viewState.intlDayPopover), popupDay = user_derived(() => viewState.popupDay);
  let el = state(void 0);
  let style = state("");
  let gridColumn = user_derived(() => get(popupDay).gridColumn), gridRow = user_derived(() => get(popupDay).gridRow), dayStart = user_derived(() => get(popupDay).dayStart), dayEnd = user_derived(() => get(popupDay).dayEnd);
  let popupChunks = user_derived(() => {
    let result = [];
    for (let chunk of get(chunks)) if (chunk.gridRow === get(gridRow) && chunk.gridColumn <= get(gridColumn) && chunk.gridColumn + chunk.dates.length > get(gridColumn)) result.push(assign2({}, chunk, createEventChunk(chunk.event, get(dayStart), get(dayEnd))));
    result.sort((a, b) => a.top - b.top);
    return result;
  });
  onMount(() => {
    get(el).show();
  });
  user_effect(() => {
    if (get(popupChunks).length) untrack(position);
    else close();
  });
  function position() {
    let dayEl = get(gridEl).children.item((get(gridRow) - 1) * get(colsCount2) + get(gridColumn) - 1);
    let popupRect = rect(get(el));
    let dayRect = rect(dayEl);
    let gridRect = rect(get(gridEl));
    set(style, "");
    let left;
    if (popupRect.width >= gridRect.width) {
      left = gridRect.left - dayRect.left;
      let right = dayRect.right - gridRect.right;
      set(style, get(style) + `inset-inline-end:${right}px;`);
    } else {
      left = (dayRect.width - popupRect.width) / 2;
      if (dayRect.left + left < gridRect.left) left = gridRect.left - dayRect.left;
      else if (dayRect.left + left + popupRect.width > gridRect.right) left = gridRect.right - dayRect.left - popupRect.width;
    }
    set(style, get(style) + `inset-inline-start:${left}px;`);
    let top;
    if (popupRect.height >= gridRect.height) {
      top = gridRect.top - dayRect.top;
      set(style, get(style) + `block-size:${gridRect.height}px;`);
    } else {
      top = (dayRect.height - popupRect.height) / 2;
      if (dayRect.top + top < gridRect.top) top = gridRect.top - dayRect.top;
      else if (dayRect.top + top + popupRect.height > gridRect.bottom) top = gridRect.bottom - dayRect.top - popupRect.height;
    }
    set(style, get(style) + `inset-block-start:${top}px;`);
  }
  function close() {
    viewState.popupDay = null;
  }
  function handlePointerDownOutside() {
    close();
    get(interaction).action?.noClick();
  }
  var dialog = root$13();
  let styles;
  var header = child(dialog);
  var time = child(header);
  attach(time, () => contentFrom(get(intlDayPopover).format(get(dayStart))));
  var a_1 = sibling(time, 2);
  autofocus(a_1, true);
  var event_handler = user_derived(() => stopPropagation2(close));
  var event_handler_1 = user_derived(() => keyEnter(close));
  reset(header);
  var div = sibling(header, 2);
  each(div, 21, () => get(popupChunks), index, ($$anchor2, chunk) => {
    Event$3($$anchor2, {
      get chunk() {
        return get(chunk);
      },
      inPopup: true
    });
  });
  reset(div);
  reset(dialog);
  bind_this(dialog, ($$value) => set(el, $$value), () => get(el));
  attach(dialog, () => outsideEvent("pointerdown"));
  template_effect(($0) => {
    set_class(dialog, 1, get(theme).popup);
    styles = set_style(dialog, get(style), styles, { "grid-area": `${get(gridRow) + 1} / ${get(gridColumn)}` });
    set_class(header, 1, get(theme).dayHead);
    set_attribute2(time, "datetime", $0);
    set_attribute2(a_1, "aria-label", get(buttonText).close);
    set_class(div, 1, get(theme).events);
  }, [() => toISOString(get(dayStart), 10)]);
  event("pointerdownoutside", dialog, handlePointerDownOutside);
  event("close", dialog, close);
  delegated("click", a_1, function(...$$args) {
    get(event_handler)?.apply(this, $$args);
  });
  delegated("keydown", a_1, function(...$$args) {
    get(event_handler_1)?.apply(this, $$args);
  });
  append($$anchor, dialog);
  pop();
}
delegate(["click", "keydown"]);
var root$12 = from_html(`<div role="columnheader"><span></span></div>`);
var root_1$5 = from_html(`<section><header><div role="row"></div></header> <div><div></div> <div><!> <!> <!></div></div> <!></section>`);
function View$3($$anchor, $$props) {
  push($$props, true);
  let mainState = getContext("state");
  let viewState = new ViewState$4(mainState);
  setContext("view-state", viewState);
  let intlDayHeader = user_derived(() => mainState.intlDayHeader), intlDayHeaderAL = user_derived(() => mainState.intlDayHeaderAL), dayMaxEvents = user_derived(() => mainState.options.dayMaxEvents), eventGap = user_derived(() => mainState.options.eventGap), theme = user_derived(() => mainState.options.theme);
  let grid2 = user_derived(() => viewState.grid), chunks = user_derived(() => viewState.chunks), bgChunks = user_derived(() => viewState.bgChunks), iChunks = user_derived(() => viewState.iChunks), hiddenChunks = user_derived(() => viewState.hiddenChunks), popupDay = user_derived(() => viewState.popupDay);
  let refs = [];
  function reposition() {
    runReposition(refs, get(chunks));
    get(hiddenChunks).clear();
    tick().then(hide);
  }
  function hide() {
    get(hiddenChunks).size;
    refs.forEach((ref) => ref?.hide());
  }
  user_effect(() => {
    get(eventGap);
    reposition();
  });
  user_effect(hide);
  var fragment = comment();
  var node = first_child(fragment);
  var consequent_1 = ($$anchor2) => {
    var section = root_1$5();
    let styles;
    var header = child(section);
    var div = child(header);
    each(div, 21, () => get(grid2)[0], index, ($$anchor3, $$item, i) => {
      let dayStart = () => get($$item).dayStart;
      var div_1 = root$12();
      set_attribute2(div_1, "aria-colindex", 1 + i);
      var span = child(div_1);
      attach(span, () => contentFrom(get(intlDayHeader).format(dayStart())));
      reset(div_1);
      template_effect(($0, $1) => {
        set_class(div_1, 1, $0);
        set_attribute2(span, "aria-label", $1);
      }, [() => clsx2([get(theme).colHead, get(theme).weekdays?.[dayStart().getUTCDay()]]), () => get(intlDayHeaderAL).format(dayStart())]);
      append($$anchor3, div_1);
    });
    reset(div);
    reset(header);
    var div_2 = sibling(header, 2);
    var div_3 = child(div_2);
    each(div_3, 21, () => get(grid2), index, ($$anchor3, days, i) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      each(node_1, 17, () => get(days), index, ($$anchor4, day, j) => {
        {
          let $0 = user_derived(() => j + 1 === length(get(days)));
          let $1 = user_derived(() => i + 1 === length(get(grid2)));
          Day$3($$anchor4, {
            get day() {
              return get(day);
            },
            get noIeb() {
              return get($0);
            },
            get noBeb() {
              return get($1);
            }
          });
        }
      });
      append($$anchor3, fragment_1);
    });
    reset(div_3);
    bind_this(div_3, ($$value) => viewState.gridEl = $$value, () => viewState?.gridEl);
    var div_4 = sibling(div_3, 2);
    var node_2 = child(div_4);
    each(node_2, 19, () => get(chunks), (chunk) => chunk.id, ($$anchor3, chunk, i) => {
      bind_this(Event$3($$anchor3, { get chunk() {
        return get(chunk);
      } }), ($$value, i2) => refs[i2] = $$value, (i2) => refs?.[i2], () => [get(i)]);
    });
    var node_3 = sibling(node_2, 2);
    each(node_3, 17, () => get(bgChunks), (chunk) => chunk.id, ($$anchor3, chunk) => {
      Event$3($$anchor3, { get chunk() {
        return get(chunk);
      } });
    });
    var node_4 = sibling(node_3, 2);
    each(node_4, 17, () => get(iChunks), index, ($$anchor3, chunk) => {
      Event$3($$anchor3, { get chunk() {
        return get(chunk);
      } });
    });
    reset(div_4);
    reset(div_2);
    var node_5 = sibling(div_2, 2);
    var consequent = ($$anchor3) => {
      Popup($$anchor3, {});
    };
    if_block(node_5, ($$render) => {
      if (get(popupDay)) $$render(consequent);
    });
    reset(section);
    bind_this(section, ($$value) => mainState.mainEl = $$value, () => mainState?.mainEl);
    attach(section, () => resizeObserver(reposition));
    template_effect(($0, $1) => {
      set_class(section, 1, clsx2([get(theme).main, get(dayMaxEvents) === true && get(theme).uniform]));
      styles = set_style(section, "", styles, {
        "--ec-grid-cols": $0,
        "--ec-grid-rows": $1
      });
      set_class(header, 1, get(theme).header);
      set_class(div, 1, get(theme).grid);
      set_class(div_2, 1, get(theme).body);
      set_class(div_3, 1, get(theme).grid);
      set_class(div_4, 1, get(theme).events);
    }, [() => length(get(grid2)[0]), () => length(get(grid2))]);
    append($$anchor2, section);
  };
  var d = user_derived(() => !empty(get(grid2)) && !empty(get(grid2)[0]));
  if_block(node, ($$render) => {
    if (get(d)) $$render(consequent_1);
  });
  append($$anchor, fragment);
  pop();
}
var day_grid_default = { createOptions(options) {
  createDROptions(options);
  assign2(options, {
    dayMaxEvents: false,
    dayCellFormat: { day: "numeric" },
    dayPopoverFormat: {
      month: "long",
      day: "numeric",
      year: "numeric"
    },
    moreLinkContent: void 0,
    view: "dayGridMonth"
  });
  assign2(options.buttonText, {
    dayGridDay: "day",
    dayGridMonth: "month",
    dayGridWeek: "week",
    close: "Close"
  });
  assign2(options.theme, {
    uniform: "ec-uniform",
    dayFoot: "ec-day-foot",
    otherMonth: "ec-other-month",
    popup: "ec-popup"
  });
  assign2(options.views, {
    dayGridDay: {
      buttonText: btnTextDay,
      component: () => View$3,
      dayHeaderFormat: { weekday: "long" },
      displayEventEnd: false,
      duration: { days: 1 },
      theme: themeView("ec-day-grid ec-day-view")
    },
    dayGridWeek: {
      buttonText: btnTextWeek,
      component: () => View$3,
      displayEventEnd: false,
      theme: themeView("ec-day-grid ec-week-view")
    },
    dayGridMonth: {
      buttonText: btnTextMonth,
      component: initMonthViewComponent$1,
      dayHeaderFormat: { weekday: "short" },
      dayHeaderAriaLabelFormat: { weekday: "long" },
      displayEventEnd: false,
      duration: { months: 1 },
      theme: themeView("ec-day-grid ec-month-view"),
      titleFormat: {
        year: "numeric",
        month: "long"
      }
    }
  });
} };
function initMonthViewComponent$1(mainState) {
  mainState.features = ["dayNumber"];
  mainState.extensions.activeRange = (start, end) => {
    let { options: { firstDay } } = mainState;
    return {
      start: prevClosestDay(start, firstDay),
      end: nextClosestDay(end, firstDay)
    };
  };
  return View$3;
}
function eventDraggable(event2, $eventStartEditable, $editable) {
  return event2.startEditable ?? $eventStartEditable ?? event2.editable ?? $editable;
}
function eventResizable(event2, $eventDurationEditable, $editable) {
  return event2.durationEditable ?? $eventDurationEditable ?? event2.editable ?? $editable;
}
var busy = false;
function animate(fn) {
  if (!busy) {
    busy = true;
    window.requestAnimationFrame(() => {
      fn();
      busy = false;
    });
  }
}
function limit(value, minLimit, maxLimit) {
  return max(minLimit, min(maxLimit, value));
}
function setIClasses(mainState) {
  return () => {
    let { options: { editable, eventStartEditable, theme } } = mainState;
    mainState.iClasses = (classNames, event2) => {
      let { display } = event2;
      return [...classNames, helperEvent(display) ? [theme[display]] : !bgEvent(display) && eventDraggable(event2, eventStartEditable, editable) ? [theme.draggable] : []];
    };
  };
}
function handleScroll(mainState) {
  return () => {
    let { interaction, mainEl } = mainState;
    if (mainEl) return listen2(mainEl, "scroll", () => {
      interaction.action.handleScroll();
      interaction.pointer?.handleScroll();
    });
  };
}
var AuxState = class {
  constructor(mainState) {
    this.#setupEffects(mainState);
  }
  #setupEffects(mainState) {
    user_pre_effect(setIClasses(mainState));
    user_effect(handleScroll(mainState));
  }
};
function Action($$anchor, $$props) {
  push($$props, true);
  let mainState = getContext("state");
  let events = user_derived(() => mainState.events), iEvents = user_derived(() => mainState.iEvents), features = user_derived(() => mainState.features), view2 = user_derived(() => mainState.view), mainEl = user_derived(() => mainState.mainEl), dateClick = user_derived(() => mainState.options.dateClick), dragConstraint = user_derived(() => mainState.options.dragConstraint), dragScroll = user_derived(() => mainState.options.dragScroll), editable = user_derived(() => mainState.options.editable), eventStartEditable = user_derived(() => mainState.options.eventStartEditable), eventDragMinDistance = user_derived(() => mainState.options.eventDragMinDistance), eventDragStart = user_derived(() => mainState.options.eventDragStart), eventDragStop = user_derived(() => mainState.options.eventDragStop), eventDrop = user_derived(() => mainState.options.eventDrop), eventLongPressDelay = user_derived(() => mainState.options.eventLongPressDelay), eventResizeStart = user_derived(() => mainState.options.eventResizeStart), eventResizeStop = user_derived(() => mainState.options.eventResizeStop), eventResize = user_derived(() => mainState.options.eventResize), longPressDelay = user_derived(() => mainState.options.longPressDelay), resizeConstraint = user_derived(() => mainState.options.resizeConstraint), selectable = user_derived(() => mainState.options.selectable), selectFn = user_derived(() => mainState.options.select), selectBackgroundColor = user_derived(() => mainState.options.selectBackgroundColor), selectConstraint = user_derived(() => mainState.options.selectConstraint), selectLongPressDelay = user_derived(() => mainState.options.selectLongPressDelay), selectMinDistance = user_derived(() => mainState.options.selectMinDistance), unselectFn = user_derived(() => mainState.options.unselect), unselectAuto = user_derived(() => mainState.options.unselectAuto), unselectCancel = user_derived(() => mainState.options.unselectCancel), validRange = user_derived(() => mainState.options.validRange);
  const ACTION_DRAG = 1;
  const ACTION_RESIZE_END = 2;
  const ACTION_RESIZE_START = 3;
  const ACTION_SELECT = 4;
  const ACTION_CLICK = 5;
  const ACTION_NO_ACTION = 6;
  let action2;
  let interacting;
  let event2;
  let iEvent;
  let display;
  let date;
  let newDate;
  let resource;
  let newResource;
  let fromX;
  let fromY;
  let toX;
  let toY;
  let gridEl;
  let allDaySlot;
  let delta;
  let allDay;
  let iClass;
  let refused;
  let minResize;
  let selectStep;
  let selected;
  let noDateClick;
  let timer;
  let viewport;
  let margin;
  let snapDuration;
  let extraDuration;
  function draggable(event3) {
    return eventDraggable(event3, get(eventStartEditable), get(editable));
  }
  function drag(eventToDrag, jsEvent, forceDate, forceMargin, snap2) {
    if (!action2) {
      action2 = validJsEvent(jsEvent) ? ACTION_DRAG : ACTION_NO_ACTION;
      if (complexAction()) {
        event2 = eventToDrag;
        common(jsEvent, snap2);
        if (forceDate) date = forceDate;
        if (forceMargin) margin = forceMargin;
        iClass = "dragging";
        move2(jsEvent);
      }
    }
  }
  function resize(chunk, jsEvent, start, axis, forceDate, forceMargin, snap2) {
    if (!action2) {
      action2 = validJsEvent(jsEvent) ? start ? ACTION_RESIZE_START : ACTION_RESIZE_END : ACTION_NO_ACTION;
      if (complexAction()) {
        let { zeroDuration } = chunk;
        event2 = chunk.event;
        common(jsEvent, snap2);
        if (forceMargin) margin = forceMargin;
        iClass = axis === "x" ? "resizingX" : "resizingY";
        if (resizingStart()) {
          minResize = cloneDate(event2.end);
          if (allDay) {
            copyTime(minResize, event2.start);
            if (minResize >= event2.end) subtractDay(minResize);
          } else {
            subtractDuration(minResize, snapDuration);
            if (minResize < event2.start) minResize = event2.start;
          }
          date = allDay ? setMidnight(cloneDate(event2.start)) : event2.start;
        } else {
          minResize = cloneDate(event2.start);
          if (allDay) {
            copyTime(minResize, event2.end);
            if (minResize <= event2.start && !zeroDuration) addDay(minResize);
          } else {
            addDuration(minResize, snapDuration);
            if (minResize > event2.end) minResize = event2.end;
          }
          if (allDay) {
            date = setMidnight(cloneDate(event2.end));
            if (!zeroDuration && datesEqual(date, event2.end)) subtractDay(date);
          } else {
            date = event2.end;
            if (!zeroDuration) date = subtractDuration(cloneDate(date), snapDuration);
          }
          if (zeroDuration && !allDay) extraDuration = snapDuration;
        }
        if (forceDate) date = forceDate;
        move2(jsEvent);
      }
    }
  }
  function select(jsEvent, snap2) {
    if (!action2) {
      action2 = validJsEvent(jsEvent) ? get(selectable) && !get(features).includes("list") ? ACTION_SELECT : ACTION_CLICK : ACTION_NO_ACTION;
      if (complexAction()) {
        common(jsEvent, snap2);
        iClass = "selecting";
        selectStep = allDay ? createDuration({ day: 1 }) : snapDuration;
        event2 = {
          allDay,
          start: date,
          end: addDuration(cloneDate(date), selectStep),
          resourceIds: resource ? [resource.id] : []
        };
        move2(jsEvent);
      }
    }
  }
  function noAction() {
    if (!action2) action2 = ACTION_NO_ACTION;
  }
  function common(jsEvent, snap2) {
    window.getSelection().removeAllRanges();
    fromX = toX = jsEvent.clientX;
    fromY = toY = jsEvent.clientY;
    snapDuration = snap2?.duration;
    let dayEl = getElementWithPayload(toX, toY);
    ({ allDay, date, resource } = getPayload(dayEl)(toX, toY));
    allDaySlot = get(mainEl) !== ancestor(dayEl, 3);
    gridEl = ancestor(dayEl, 1);
    calcViewport();
    if (jsEvent.pointerType !== "mouse") timer = setTimeout(() => {
      if (action2) {
        interacting = true;
        move2(jsEvent);
      }
    }, (selecting() ? get(selectLongPressDelay) : get(eventLongPressDelay)) ?? get(longPressDelay));
  }
  function move2(jsEvent) {
    if (interacting || jsEvent && jsEvent.pointerType === "mouse" && distance() >= (selecting() ? get(selectMinDistance) : get(eventDragMinDistance))) {
      interacting = true;
      unselect(jsEvent);
      if (!iEvent) {
        if (selecting()) createIEventSelect();
        else createIEvent(jsEvent, resizing() ? get(eventResizeStart) : get(eventDragStart));
      }
      let payload = findPayload(findDayEl());
      if (payload) {
        let newAllDay;
        ({ allDay: newAllDay, date: newDate, resource: newResource } = payload);
        if (newAllDay === allDay) {
          let candidate = copyIEventData({}, iEvent);
          let constraintFn = get(resizeConstraint);
          delta = createDuration((newDate - date) / 1e3);
          if (resizingStart()) {
            candidate.start = addDuration(cloneDate(event2.start), delta);
            if (candidate.start > minResize) {
              candidate.start = minResize;
              delta = createDuration((minResize - event2.start) / 1e3);
            }
          } else {
            candidate.end = addDuration(cloneDate(event2.end), delta);
            if (extraDuration) addDuration(candidate.end, extraDuration);
            if (resizing()) {
              if (candidate.end < minResize) {
                candidate.end = minResize;
                delta = createDuration((minResize - event2.end) / 1e3);
              }
            } else if (selecting()) {
              if (candidate.end < event2.end) {
                candidate.start = subtractDuration(candidate.end, selectStep);
                candidate.end = event2.end;
              } else candidate.start = event2.start;
              constraintFn = get(selectConstraint);
            } else {
              candidate.start = addDuration(cloneDate(event2.start), delta);
              if (resource) {
                candidate.resourceIds = event2.resourceIds.filter((id) => id !== resource.id);
                candidate.resourceIds.push(newResource.id);
              }
              constraintFn = get(dragConstraint);
            }
          }
          refused = false;
          if (constraintFn !== void 0) {
            candidate = copyIEventData(cloneEvent(event2), candidate);
            refused = constraintFn(selecting() ? createSelectCallbackInfo(candidate, jsEvent) : createCallbackInfo(candidate, event2, jsEvent)) === false;
          }
          if (!refused) updateIEvent(candidate);
        }
      }
      mainState.iClass = refused ? "notAllowed" : iClass;
    }
    if (get(dragScroll)) {
      let thresholdY = 24;
      let thresholdX = 24;
      animate(() => {
        if (viewport) {
          if (!allDaySlot) {
            if (toY < viewport.top + thresholdY) get(mainEl).scrollTop += max(-8, (toY - viewport.top - thresholdY) / 3);
            if (toY > viewport.bottom - thresholdY) get(mainEl).scrollTop += min(8, (toY - viewport.bottom + thresholdY) / 3);
          }
          if (toX < viewport.left + thresholdX) get(mainEl).scrollLeft += max(-8, (toX - viewport.left - thresholdX) / 3);
          if (toX > viewport.right - thresholdX) get(mainEl).scrollLeft += min(8, (toX - viewport.right + thresholdX) / 3);
          if (toY < thresholdY) window.scrollBy(0, max(-8, (toY - thresholdY) / 3));
          if (toY > window.innerHeight - thresholdY) window.scrollBy(0, min(8, (toY - window.innerHeight + thresholdY) / 3));
        }
      });
    }
  }
  function handleScroll2() {
    if (complexAction()) {
      calcViewport();
      move2();
    }
  }
  function handlePointerMove(jsEvent) {
    if (complexAction() && jsEvent.isPrimary) {
      toX = jsEvent.clientX;
      toY = jsEvent.clientY;
      move2(jsEvent);
    }
  }
  function handlePointerUp(jsEvent) {
    if (selected && get(unselectAuto) && !(get(unselectCancel) && jsEvent.target.closest(get(unselectCancel)))) unselect(jsEvent);
    if (action2 && jsEvent.isPrimary) {
      if (interacting) {
        if (selecting()) {
          if (refused) destroyIEvent();
          else {
            selected = true;
            if (isFunction(get(selectFn))) {
              let info = createSelectCallbackInfo(iEvent, jsEvent);
              get(selectFn)(info);
            }
          }
        } else {
          event2.display = display;
          let callback = resizing() ? get(eventResizeStop) : get(eventDragStop);
          if (isFunction(callback)) callback({
            event: toEventWithLocalDates(event2),
            jsEvent,
            view: toViewWithLocalDates(get(view2))
          });
          let oldEvent = cloneEvent(event2);
          updateEvent(event2, refused ? oldEvent : iEvent);
          destroyIEvent();
          callback = resizing() ? get(eventResize) : get(eventDrop);
          if (!refused && isFunction(callback)) {
            let eventRef = event2;
            let info = createCallbackInfo(event2, oldEvent, jsEvent);
            callback(assign2(info, { revert() {
              updateEvent(eventRef, oldEvent);
            } }));
          }
        }
      } else if (clicking() || selecting()) {
        if (isFunction(get(dateClick)) && !noDateClick) {
          toX = jsEvent.clientX;
          toY = jsEvent.clientY;
          let dayEl = getElementWithPayload(toX, toY);
          if (dayEl) {
            let { allDay: allDay2, date: date2, resource: resource2 } = getPayload(dayEl)(toX, toY);
            get(dateClick)({
              allDay: allDay2,
              date: toLocalDate(date2),
              dateStr: toISOString(date2),
              dayEl,
              jsEvent,
              view: toViewWithLocalDates(get(view2)),
              resource: resource2
            });
          }
        }
      }
      handlePointerCancel();
    }
    noDateClick = false;
  }
  function handlePointerCancel() {
    interacting = refused = false;
    action2 = fromX = fromY = toX = toY = event2 = display = date = newDate = resource = newResource = delta = extraDuration = allDay = minResize = selectStep = margin = gridEl = viewport = snapDuration = void 0;
    mainState.iClass = void 0;
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  }
  function findDayEl() {
    return getElementWithPayload(limit(toX, viewport.left, viewport.right), limit(toY, viewport.top, viewport.bottom));
  }
  function findPayload(dayEl) {
    if (dayEl) {
      let payload = getPayload(dayEl)(toX, toY);
      if (payload.disabled) {
        if (!get(validRange).end || payload.date < get(validRange).end) return findPayload(dayEl.nextElementSibling);
        if (!get(validRange).start || payload.date > get(validRange).start) return findPayload(dayEl.previousElementSibling);
      } else {
        if ((selecting() || resizing()) && payload.resource && !iEvent.resourceIds.includes(payload.resource.id) && !get(features).includes("timeline")) {
          if (toX > fromX) return findPayload(dayEl.previousElementSibling);
          else return findPayload(dayEl.nextElementSibling);
        }
        return payload;
      }
    }
    return null;
  }
  function calcViewport() {
    let mainRect = rect(get(mainEl));
    let gridRect = rect(gridEl);
    let scaleX = mainRect.width / get(mainEl).offsetWidth;
    let scaleY = mainRect.height / get(mainEl).offsetHeight;
    let rtl = isRtl();
    viewport = {
      left: max(0, rtl ? mainRect.right - get(mainEl).clientWidth * scaleX : gridRect.left + get(mainEl).scrollLeft * scaleX),
      right: min(document.documentElement.clientWidth, rtl ? gridRect.right + get(mainEl).scrollLeft * scaleX : mainRect.left + get(mainEl).clientWidth * scaleX) - 2,
      top: max(0, gridRect.top + (!allDaySlot ? get(mainEl).scrollTop : 0) * scaleY),
      bottom: min(document.documentElement.clientHeight, !allDaySlot ? mainRect.top + get(mainEl).clientHeight * scaleY : gridRect.bottom) - 2
    };
  }
  function createIEvent(jsEvent, callback) {
    if (isFunction(callback)) callback({
      event: toEventWithLocalDates(event2),
      jsEvent,
      view: toViewWithLocalDates(get(view2))
    });
    display = event2.display;
    event2.display = "preview";
    iEvent = cloneEvent(event2);
    if (margin !== void 0) iEvent._margin = margin;
    if (extraDuration) addDuration(iEvent.end, extraDuration);
    event2.display = "ghost";
    get(events).length = get(events).length;
  }
  function createIEventSelect() {
    iEvent = {
      id: "{select}",
      allDay: event2.allDay,
      start: event2.start,
      title: "",
      display: "preview",
      extendedProps: {},
      backgroundColor: get(selectBackgroundColor),
      resourceIds: event2.resourceIds,
      classNames: [],
      styles: []
    };
  }
  function destroyIEvent() {
    iEvent = void 0;
    get(iEvents).delete("action");
  }
  function copyIEventData(target, source2) {
    target.start = source2.start;
    target.end = source2.end;
    target.resourceIds = source2.resourceIds;
    return { ...target };
  }
  function updateEvent(target, source2) {
    copyIEventData(target, source2);
    get(events).length = get(events).length;
  }
  function updateIEvent(source2) {
    iEvent = copyIEventData(iEvent, source2);
    get(iEvents).set("action", iEvent);
  }
  function createSelectCallbackInfo(event3, jsEvent) {
    let { start, end } = toEventWithLocalDates(event3);
    return {
      start,
      end,
      startStr: toISOString(event3.start),
      endStr: toISOString(event3.end),
      allDay,
      view: toViewWithLocalDates(get(view2)),
      resource,
      jsEvent
    };
  }
  function createCallbackInfo(event3, oldEvent, jsEvent) {
    let info;
    if (resizing()) info = resizingStart() ? {
      startDelta: delta,
      endDelta: createDuration(0)
    } : {
      startDelta: createDuration(0),
      endDelta: delta
    };
    else info = {
      delta,
      oldResource: resource !== newResource ? resource : void 0,
      newResource: resource !== newResource ? newResource : void 0
    };
    assign2(info, {
      event: toEventWithLocalDates(event3),
      oldEvent: toEventWithLocalDates(oldEvent),
      view: toViewWithLocalDates(get(view2)),
      jsEvent
    });
    return info;
  }
  function distance() {
    return Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
  }
  function resizing() {
    return action2 === ACTION_RESIZE_END || resizingStart();
  }
  function resizingStart() {
    return action2 === ACTION_RESIZE_START;
  }
  function clicking() {
    return action2 === ACTION_CLICK;
  }
  function selecting() {
    return action2 === ACTION_SELECT;
  }
  function complexAction() {
    return action2 && action2 < ACTION_CLICK;
  }
  function validJsEvent(jsEvent) {
    return jsEvent.isPrimary && (jsEvent.pointerType !== "mouse" || jsEvent.buttons & 1);
  }
  function unselect(jsEvent) {
    if (selected) {
      selected = false;
      destroyIEvent();
      if (isFunction(get(unselectFn))) get(unselectFn)({
        jsEvent,
        view: toViewWithLocalDates(get(view2))
      });
    }
  }
  user_pre_effect(() => {
    get(view2);
    unselect();
  });
  function noClick() {
    noDateClick = true;
  }
  function handleTouchStart(jsEvent) {
    if (complexAction()) {
      let target = jsEvent.target;
      let stops = [];
      let stop = () => runAll(stops);
      stops.push(listen2(target, "touchmove", createPreventDefaultHandler(() => interacting)));
      stops.push(listen2(target, "touchend", stop));
      stops.push(listen2(target, "touchcancel", stop));
    }
  }
  function createPreventDefaultHandler(condition) {
    return (jsEvent) => {
      if (condition()) jsEvent.preventDefault();
    };
  }
  onMount(() => listen2(window, "touchmove", noop2, { passive: false }));
  var $$exports = {
    draggable,
    drag,
    resize,
    select,
    noAction,
    handleScroll: handleScroll2,
    unselect,
    noClick
  };
  event("pointermove", $window, handlePointerMove);
  event("pointerup", $window, handlePointerUp);
  event("pointercancel", $window, handlePointerCancel);
  event("scroll", $window, handleScroll2);
  var event_handler = user_derived(() => createPreventDefaultHandler(complexAction));
  event("selectstart", $window, function(...$$args) {
    get(event_handler)?.apply(this, $$args);
  });
  var event_handler_1 = user_derived(() => createPreventDefaultHandler(() => timer));
  event("contextmenu", $window, function(...$$args) {
    get(event_handler_1)?.apply(this, $$args);
  });
  event("touchstart", $window, handleTouchStart, void 0, true);
  return pop($$exports);
}
function Pointer($$anchor, $$props) {
  push($$props, true);
  let $$d = user_derived(() => getContext("state")), iEvents = user_derived(() => get($$d).iEvents), slotDuration = user_derived(() => get($$d).options.slotDuration);
  let x = 0;
  let y = 0;
  let iEvent;
  function move2() {
    let dayEl = getElementWithPayload(x, y);
    if (dayEl && !get(iEvents).has("action")) {
      let { allDay, date, resource, disabled } = getPayload(dayEl)(x, y);
      if (!disabled) {
        if (!iEvent) createPointerEvent();
        iEvent.allDay = allDay;
        iEvent.start = date;
        iEvent.end = addDuration(cloneDate(date), get(slotDuration));
        iEvent.resourceIds = resource ? [resource.id] : [];
        get(iEvents).set("pointer", { ...iEvent });
        return;
      }
    }
    removePointerEvent();
  }
  function handleScroll2() {
    move2();
  }
  function handlePointerMove(jsEvent) {
    if (validEvent(jsEvent)) {
      x = jsEvent.clientX;
      y = jsEvent.clientY;
      move2();
    }
  }
  function createPointerEvent() {
    iEvent = {
      id: "{pointer}",
      title: "",
      display: "pointer",
      extendedProps: {},
      backgroundColor: "transparent",
      classNames: [],
      styles: []
    };
  }
  function removePointerEvent() {
    iEvent = void 0;
    get(iEvents).delete("pointer");
  }
  function validEvent(jsEvent) {
    return jsEvent.isPrimary && jsEvent.pointerType === "mouse";
  }
  var $$exports = { handleScroll: handleScroll2 };
  event("pointermove", $window, handlePointerMove);
  event("scroll", $window, handleScroll2);
  return pop($$exports);
}
var root$11 = from_html(`<div></div>`);
var root_1$4 = from_html(`<!> <!> <!>`, 1);
function Resizer($$anchor, $$props) {
  push($$props, true);
  let forceDate = prop($$props, "forceDate", 3, void 0), forceMargin = prop($$props, "forceMargin", 3, void 0);
  let $$d = user_derived(() => getContext("state")), action2 = user_derived(() => get($$d).interaction.action), editable = user_derived(() => get($$d).options.editable), eventDurationEditable = user_derived(() => get($$d).options.eventDurationEditable), eventResizableFromStart = user_derived(() => get($$d).options.eventResizableFromStart), theme = user_derived(() => get($$d).options.theme);
  let $$d_1 = user_derived(() => getContext("view-state")), snap2 = user_derived(() => get($$d_1).snap);
  let event2 = user_derived(() => $$props.chunk.event);
  let display = user_derived(() => $$props.chunk.event.display);
  let resizable = user_derived(() => !bgEvent(get(display)) && !helperEvent(get(display)) && eventResizable(get(event2), get(eventDurationEditable), get(editable)));
  function createResizeHandler(start) {
    return (jsEvent) => get(action2).resize($$props.chunk, jsEvent, start, $$props.axis, forceDate(), forceMargin(), get(snap2));
  }
  var fragment = root_1$4();
  var node = first_child(fragment);
  var consequent = ($$anchor2) => {
    var div = root$11();
    var event_handler = user_derived(() => createResizeHandler(true));
    template_effect(() => set_class(div, 1, `${get(theme).resizer ?? ""} ${get(theme).start ?? ""}`));
    delegated("pointerdown", div, function(...$$args) {
      get(event_handler)?.apply(this, $$args);
    });
    append($$anchor2, div);
  };
  if_block(node, ($$render) => {
    if (get(resizable) && get(eventResizableFromStart)) $$render(consequent);
  });
  var node_1 = sibling(node, 2);
  snippet(node_1, () => $$props.children);
  var node_2 = sibling(node_1, 2);
  var consequent_1 = ($$anchor2) => {
    var div_1 = root$11();
    var event_handler_1 = user_derived(() => createResizeHandler(false));
    template_effect(() => set_class(div_1, 1, get(theme).resizer));
    delegated("pointerdown", div_1, function(...$$args) {
      get(event_handler_1)?.apply(this, $$args);
    });
    append($$anchor2, div_1);
  };
  if_block(node_2, ($$render) => {
    if (get(resizable)) $$render(consequent_1);
  });
  append($$anchor, fragment);
  pop();
}
delegate(["pointerdown"]);
var root$10 = from_html(`<!> <!>`, 1);
function Auxiliary($$anchor, $$props) {
  push($$props, true);
  let mainState = getContext("state");
  new AuxState(mainState);
  let interaction = user_derived(() => mainState.interaction), pointer = user_derived(() => mainState.options.pointer);
  get(interaction).resizer = Resizer;
  var fragment = root$10();
  var node = first_child(fragment);
  bind_this(Action(node, {}), ($$value) => get(interaction).action = $$value, () => get(interaction)?.action);
  var node_1 = sibling(node, 2);
  var consequent = ($$anchor2) => {
    bind_this(Pointer($$anchor2, {}), ($$value) => get(interaction).pointer = $$value, () => get(interaction)?.pointer);
  };
  if_block(node_1, ($$render) => {
    if (get(pointer)) $$render(consequent);
  });
  append($$anchor, fragment);
  pop();
}
var interaction_default = {
  createOptions(options) {
    assign2(options, {
      dateClick: void 0,
      dragConstraint: void 0,
      dragScroll: true,
      editable: false,
      eventDragMinDistance: 5,
      eventDragStart: void 0,
      eventDragStop: void 0,
      eventDrop: void 0,
      eventDurationEditable: true,
      eventLongPressDelay: void 0,
      eventResizableFromStart: false,
      eventResizeStart: void 0,
      eventResizeStop: void 0,
      eventResize: void 0,
      eventStartEditable: true,
      longPressDelay: 1e3,
      pointer: false,
      resizeConstraint: void 0,
      select: void 0,
      selectBackgroundColor: void 0,
      selectConstraint: void 0,
      selectLongPressDelay: void 0,
      selectMinDistance: 5,
      snapDuration: void 0,
      unselect: void 0,
      unselectAuto: true,
      unselectCancel: ""
    });
    assign2(options.theme, {
      draggable: "ec-draggable",
      ghost: "ec-ghost",
      preview: "ec-preview",
      pointer: "ec-pointer",
      resizer: "ec-resizer",
      start: "ec-start",
      dragging: "ec-dragging",
      resizingY: "ec-resizing-y",
      resizingX: "ec-resizing-x",
      selecting: "ec-selecting",
      notAllowed: "ec-not-allowed"
    });
  },
  initState(mainState) {
    mainState.auxComponents.push(Auxiliary);
  }
};
var ViewState$3 = class {
  #intlListDay;
  get intlListDay() {
    return get(this.#intlListDay);
  }
  set intlListDay(value) {
    set(this.#intlListDay, value);
  }
  #intlListDaySide;
  get intlListDaySide() {
    return get(this.#intlListDaySide);
  }
  set intlListDaySide(value) {
    set(this.#intlListDaySide, value);
  }
  constructor(mainState) {
    this.#intlListDay = user_derived(intl(mainState, "listDayFormat"));
    this.#intlListDaySide = user_derived(intl(mainState, "listDaySideFormat"));
  }
};
var root$9 = from_html(`<div></div> <!>`, 1);
function Event$2($$anchor, $$props) {
  push($$props, true);
  let $$d = user_derived(() => getContext("state")), interaction = user_derived(() => get($$d).interaction), theme = user_derived(() => get($$d).options.theme);
  let styles = user_derived(() => (style) => {
    delete style["background-color"];
    delete style["color"];
    return style;
  });
  {
    const body = ($$anchor2, defaultBody = noop, bgColor = noop, txtColor = noop) => {
      var fragment_1 = root$9();
      var div = first_child(fragment_1);
      let styles_1;
      var node = sibling(div, 2);
      snippet(node, defaultBody);
      template_effect(() => {
        set_class(div, 1, get(theme).eventTag);
        styles_1 = set_style(div, "", styles_1, { "background-color": bgColor() });
      });
      append($$anchor2, fragment_1);
    };
    let $0 = user_derived(() => get(interaction).action?.noAction);
    BaseEvent($$anchor, {
      get chunk() {
        return $$props.chunk;
      },
      get styles() {
        return get(styles);
      },
      get onpointerdown() {
        return get($0);
      },
      body,
      $$slots: { body: true }
    });
  }
  pop();
}
var root$8 = from_html(`<h4><time><!></time> <time></time></h4> <!>`, 1);
function Day$2($$anchor, $$props) {
  push($$props, true);
  let $$d = user_derived(() => getContext("state")), filteredEvents2 = user_derived(() => get($$d).filteredEvents), highlightedDates = user_derived(() => get($$d).options.highlightedDates), theme = user_derived(() => get($$d).options.theme), validRange = user_derived(() => get($$d).options.validRange);
  let $$d_1 = user_derived(() => getContext("view-state")), intlListDay = user_derived(() => get($$d_1).intlListDay), intlListDaySide = user_derived(() => get($$d_1).intlListDaySide);
  let highlight = user_derived(() => get(highlightedDates).some((d) => datesEqual(d, $$props.date)));
  let disabled = user_derived(() => outsideRange($$props.date, get(validRange)));
  let datetime = user_derived(() => toISOString($$props.date, 10));
  let chunks = user_derived(() => {
    let chunks2 = [];
    if (!get(disabled)) {
      let start = $$props.date;
      let end = addDay(cloneDate($$props.date));
      for (let event2 of get(filteredEvents2)) if (!bgEvent(event2.display) && eventIntersects(event2, start, end)) {
        let chunk = createEventChunk(event2, start, end);
        chunks2.push(chunk);
      }
    }
    return chunks2;
  });
  var fragment = comment();
  var node = first_child(fragment);
  var consequent = ($$anchor2) => {
    {
      const content = ($$anchor3, dayCell = noop) => {
        var fragment_2 = root$8();
        var h4 = first_child(fragment_2);
        var time = child(h4);
        var node_1 = child(time);
        snippet(node_1, () => dayCell().snippet ?? noop, () => dayCell().arg);
        reset(time);
        attach(time, () => contentFrom(dayCell().content, dayCell().snippet));
        var time_1 = sibling(time, 2);
        attach(time_1, () => contentFrom(get(intlListDaySide).format($$props.date)));
        reset(h4);
        var node_2 = sibling(h4, 2);
        each(node_2, 17, () => get(chunks), (chunk) => chunk.event, ($$anchor4, chunk) => {
          Event$2($$anchor4, { get chunk() {
            return get(chunk);
          } });
        });
        template_effect(() => {
          set_class(h4, 1, get(theme).dayHead);
          set_attribute2(time, "datetime", get(datetime));
          set_class(time_1, 1, get(theme).daySide);
          set_attribute2(time_1, "datetime", get(datetime));
        });
        append($$anchor3, fragment_2);
      };
      BaseDay($$anchor2, {
        get date() {
          return $$props.date;
        },
        allDay: true,
        role: "listitem",
        get disabled() {
          return get(disabled);
        },
        get highlight() {
          return get(highlight);
        },
        defaultContent: () => get(intlListDay).format($$props.date),
        content,
        $$slots: { content: true }
      });
    }
  };
  if_block(node, ($$render) => {
    if (get(chunks).length) $$render(consequent);
  });
  append($$anchor, fragment);
  pop();
}
var root$7 = from_html(`<div><!></div>`);
var root_1$3 = from_html(`<section><!></section>`);
function View$2($$anchor, $$props) {
  push($$props, true);
  let mainState = getContext("state");
  let viewState = new ViewState$3(mainState);
  setContext("view-state", viewState);
  let filteredEvents2 = user_derived(() => mainState.filteredEvents), snippets = user_derived(() => mainState.snippets), view2 = user_derived(() => mainState.view), viewDates2 = user_derived(() => mainState.viewDates), noEventsClick = user_derived(() => mainState.options.noEventsClick), noEventsContent = user_derived(() => mainState.options.noEventsContent), theme = user_derived(() => mainState.options.theme);
  let noEvents = user_derived(() => {
    let noEvents2 = true;
    if (!empty(get(viewDates2))) {
      let start = get(viewDates2)[0];
      let end = addDay(cloneDate(get(viewDates2).at(-1)));
      for (let event2 of get(filteredEvents2)) if (!bgEvent(event2.display) && event2.start < end && event2.end > start) {
        noEvents2 = false;
        break;
      }
    }
    return noEvents2;
  });
  let content = user_derived(() => createContent(get(noEventsContent), void 0, void 0, get(snippets).noEventsContent));
  function onclick(jsEvent) {
    if (isFunction(get(noEventsClick))) get(noEventsClick)({
      jsEvent,
      view: toViewWithLocalDates(get(view2))
    });
  }
  var section = root_1$3();
  var node = child(section);
  var consequent = ($$anchor2) => {
    var div = root$7();
    var node_1 = child(div);
    snippet(node_1, () => get(content).snippet ?? noop, () => get(content).arg);
    reset(div);
    attach(div, () => contentFrom(get(content).content, get(content).snippet));
    template_effect(() => set_class(div, 1, get(theme).noEvents));
    delegated("click", div, onclick);
    append($$anchor2, div);
  };
  var alternate = ($$anchor2) => {
    var fragment = comment();
    var node_2 = first_child(fragment);
    each(node_2, 17, () => get(viewDates2), index, ($$anchor3, date) => {
      Day$2($$anchor3, { get date() {
        return get(date);
      } });
    });
    append($$anchor2, fragment);
  };
  if_block(node, ($$render) => {
    if (get(noEvents)) $$render(consequent);
    else $$render(alternate, -1);
  });
  reset(section);
  bind_this(section, ($$value) => mainState.mainEl = $$value, () => mainState?.mainEl);
  template_effect(() => set_class(section, 1, get(theme).main));
  append($$anchor, section);
  pop();
}
delegate(["click"]);
var list_default = { createOptions(options) {
  assign2(options, {
    listDayFormat: { weekday: "long" },
    listDaySideFormat: {
      year: "numeric",
      month: "long",
      day: "numeric"
    },
    noEventsClick: void 0,
    noEventsContent: "No events",
    view: "listWeek"
  });
  assign2(options.buttonText, {
    listDay: "day",
    listWeek: "week",
    listMonth: "month",
    listYear: "year"
  });
  assign2(options.theme, {
    daySide: "ec-day-side",
    eventTag: "ec-event-tag",
    noEvents: "ec-no-events"
  });
  assign2(options.views, {
    listDay: {
      buttonText: btnTextDay,
      component: initViewComponent$3,
      duration: { days: 1 },
      theme: themeView("ec-list ec-day-view"),
      titleFormat: {
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    },
    listWeek: {
      buttonText: btnTextWeek,
      component: initViewComponent$3,
      duration: { weeks: 1 },
      theme: themeView("ec-list ec-week-view")
    },
    listMonth: {
      buttonText: btnTextMonth,
      component: initViewComponent$3,
      duration: { months: 1 },
      theme: themeView("ec-list ec-month-view"),
      titleFormat: {
        year: "numeric",
        month: "long"
      }
    },
    listYear: {
      buttonText: btnTextYear,
      component: initViewComponent$3,
      duration: { years: 1 },
      theme: themeView("ec-list ec-year-view"),
      titleFormat: { year: "numeric" }
    }
  });
} };
function initViewComponent$3(mainState) {
  mainState.features = ["list"];
  return View$2;
}
function createChunks$1(event2, days, withId = true) {
  let chunks = [];
  for (let { gridColumn, gridRow, resource, start, end, disabled } of days) if (!disabled && eventIntersects(event2, start, end, resource)) {
    let chunk = createEventChunk(event2, start, end);
    assign2(chunk, {
      gridColumn,
      gridRow,
      resource,
      top: (chunk.start - start) / 1e3,
      height: (chunk.end - chunk.start) / 1e3,
      maxHeight: (end - chunk.start) / 1e3
    });
    if (withId) assignChunkId(chunk);
    chunks.push(chunk);
  }
  return chunks;
}
function groupChunks(chunks) {
  let groups = {};
  for (let chunk of chunks) {
    let { gridColumn } = chunk;
    let group = groups[gridColumn];
    let column = 0;
    if (group && chunk.start < group.end) {
      for (; column < group.columns.length; ++column) if (group.columns[column].at(-1).end <= chunk.start) break;
      if (chunk.end > group.end) group.end = chunk.end;
    } else group = {
      columns: [],
      end: chunk.end
    };
    if (group.columns.length < column + 1) group.columns.push([]);
    group.columns[column].push(chunk);
    groups[gridColumn] = group;
    chunk.group = group;
    chunk.groupColumn = column;
  }
}
function createAllDayContent(allDayContent, snippet2) {
  let text2 = "all-day";
  let allDay = createContent(allDayContent, () => ({ text: text2 }), { html: text2 }, snippet2);
  if (typeof allDay.content === "string") allDay.content = { html: allDay.content };
  return allDay;
}
function setExtensions(mainState) {
  mainState.extensions.activeRange = (start, end) => {
    let { options: { slotMaxTime } } = mainState;
    if (slotMaxTime.days || slotMaxTime.seconds > 86400) {
      addDuration(subtractDay(end), slotMaxTime);
      let start2 = subtractDay(cloneDate(end));
      if (start2 < start) start = start2;
    }
    return {
      start,
      end
    };
  };
}
function createTRROptions(options) {
  if (!("scrollTime" in options)) {
    assign2(options, {
      columnWidth: void 0,
      flexibleSlotTimeLimits: false,
      nowIndicator: false,
      scrollTime: "06:00:00",
      slotDuration: "00:30:00",
      slotHeight: 24,
      slotLabelInterval: void 0,
      slotLabelFormat: {
        hour: "numeric",
        minute: "2-digit"
      },
      slotMaxTime: "24:00:00",
      slotMinTime: "00:00:00",
      snapDuration: void 0
    });
    assign2(options.theme, {
      nowIndicator: "ec-now-indicator",
      sidebar: "ec-sidebar",
      slot: "ec-slot"
    });
  }
}
function createTROptions(options) {
  if (!("allDaySlot" in options)) {
    assign2(options, {
      allDayContent: void 0,
      allDaySlot: true,
      slotEventOverlap: true
    });
    assign2(options.theme, { allDay: "ec-all-day" });
  }
}
function createTRRParsers(parsers) {
  if (!("scrollTime" in parsers)) assign2(parsers, {
    scrollTime: createDuration,
    slotDuration: createDuration,
    slotLabelInterval: undefinedOr(createDuration),
    slotMaxTime: createDuration,
    slotMinTime: createDuration,
    snapDuration: undefinedOr(createDuration)
  });
}
function createRROptions(options) {
  if (!("resourceLabelContent" in options)) {
    options.filterResourcesWithEvents = false;
    options.resourceLabelContent = void 0;
    options.resourceLabelDidMount = void 0;
    options.theme.colGroup = "ec-col-group";
  }
}
function grid$2(mainState, viewState) {
  return () => {
    let { viewDates: viewDates2, options: { highlightedDates, validRange } } = mainState;
    let { slotTimeLimits: slotTimeLimits2 } = viewState;
    let days = [];
    untrack(() => {
      let gridColumn = 1;
      for (let date of viewDates2) {
        days.push({
          gridColumn,
          gridRow: 1,
          resource: void 0,
          start: addDuration(cloneDate(date), slotTimeLimits2.min),
          end: addDuration(cloneDate(date), slotTimeLimits2.max),
          dayStart: date,
          dayEnd: addDay(cloneDate(date)),
          disabled: outsideRange(date, validRange),
          highlight: highlightedDates.some((d) => datesEqual(d, date))
        });
        ++gridColumn;
      }
    });
    return [days];
  };
}
function eventChunks$1(mainState, viewState) {
  return () => {
    let { filteredEvents: filteredEvents2 } = mainState;
    let { grid: grid2 } = viewState;
    let chunks = [];
    let bgChunks = [];
    let allDayChunks = [];
    let allDayBgChunks = [];
    untrack(() => {
      for (let event2 of filteredEvents2) for (let days of grid2) if (bgEvent(event2.display)) {
        bgChunks = bgChunks.concat(createChunks$1(event2, days));
        if (event2.allDay) allDayBgChunks = allDayBgChunks.concat(createAllDayChunks(event2, days));
      } else if (event2.allDay) allDayChunks = allDayChunks.concat(createAllDayChunks(event2, days));
      else chunks = chunks.concat(createChunks$1(event2, days));
      groupChunks(chunks);
      prepareAllDayChunks(allDayChunks);
    });
    return {
      chunks,
      bgChunks,
      allDayChunks,
      allDayBgChunks
    };
  };
}
function iEventChunks$1(mainState, viewState) {
  return () => {
    let { iEvents } = mainState;
    let { grid: grid2 } = viewState;
    let iChunks = [];
    let allDayIChunks = [];
    for (let [, event2] of iEvents) {
      if (!event2) continue;
      untrack(() => {
        for (let days of grid2) if (event2.allDay) allDayIChunks = allDayIChunks.concat(createAllDayChunks(event2, days, false));
        else iChunks = iChunks.concat(createChunks$1(event2, days, false));
      });
    }
    return {
      iChunks,
      allDayIChunks
    };
  };
}
function slotTimeLimits(mainState) {
  return () => {
    let { filteredEvents: filteredEvents2, viewDates: viewDates2, options: { flexibleSlotTimeLimits, slotMinTime, slotMaxTime } } = mainState;
    let limits;
    untrack(() => {
      limits = createSlotTimeLimits(slotMinTime, slotMaxTime, flexibleSlotTimeLimits, viewDates2, filteredEvents2);
    });
    return limits;
  };
}
function slotLabelPeriodicity(mainState) {
  return () => {
    let { options: { slotDuration, slotLabelInterval } } = mainState;
    let periodicity;
    untrack(() => {
      periodicity = slotLabelInterval === void 0 ? toSeconds(slotDuration) < 3600 ? 2 : 1 : ceil(toSeconds(slotLabelInterval) / toSeconds(slotDuration)) || 1;
    });
    return periodicity;
  };
}
function slots(mainState, viewState) {
  return () => {
    let { offset: offset2, options: { slotDuration } } = mainState;
    let { intlSlotLabel, slotLabelPeriodicity: slotLabelPeriodicity2, slotTimeLimits: slotTimeLimits2 } = viewState;
    let slots2;
    untrack(() => {
      slots2 = createSlots(setMidnight(createDate(void 0, offset2)), slotDuration, slotLabelPeriodicity2, slotTimeLimits2, intlSlotLabel);
    });
    return slots2;
  };
}
function snap(mainState) {
  return () => {
    let { options: { slotDuration, snapDuration } } = mainState;
    snapDuration ??= slotDuration;
    return {
      duration: snapDuration,
      ratio: toSeconds(snapDuration) / toSeconds(slotDuration)
    };
  };
}
function TRRState() {
  return class {
    #intlSlotLabel;
    get intlSlotLabel() {
      return get(this.#intlSlotLabel);
    }
    set intlSlotLabel(value) {
      set(this.#intlSlotLabel, value);
    }
    #slotLabelPeriodicity;
    get slotLabelPeriodicity() {
      return get(this.#slotLabelPeriodicity);
    }
    set slotLabelPeriodicity(value) {
      set(this.#slotLabelPeriodicity, value);
    }
    #sidebarWidth;
    get sidebarWidth() {
      return get(this.#sidebarWidth);
    }
    set sidebarWidth(value) {
      set(this.#sidebarWidth, value, true);
    }
    #snap;
    get snap() {
      return get(this.#snap);
    }
    set snap(value) {
      set(this.#snap, value);
    }
    constructor(mainState) {
      this.#intlSlotLabel = user_derived(intl(mainState, "slotLabelFormat"));
      this.#slotLabelPeriodicity = user_derived(slotLabelPeriodicity(mainState));
      this.#sidebarWidth = state(0);
      this.#snap = user_derived(snap(mainState));
    }
  };
}
function TRState(Base) {
  return class extends Base {
    #slotTimeLimits;
    get slotTimeLimits() {
      return get(this.#slotTimeLimits);
    }
    set slotTimeLimits(value) {
      set(this.#slotTimeLimits, value);
    }
    #slots;
    get slots() {
      return get(this.#slots);
    }
    set slots(value) {
      set(this.#slots, value);
    }
    #chunks;
    get chunks() {
      return get(this.#chunks);
    }
    set chunks(value) {
      set(this.#chunks, value);
    }
    #bgChunks;
    get bgChunks() {
      return get(this.#bgChunks);
    }
    set bgChunks(value) {
      set(this.#bgChunks, value);
    }
    #allDayChunks;
    get allDayChunks() {
      return get(this.#allDayChunks);
    }
    set allDayChunks(value) {
      set(this.#allDayChunks, value);
    }
    #allDayBgChunks;
    get allDayBgChunks() {
      return get(this.#allDayBgChunks);
    }
    set allDayBgChunks(value) {
      set(this.#allDayBgChunks, value);
    }
    #iChunks;
    get iChunks() {
      return get(this.#iChunks);
    }
    set iChunks(value) {
      set(this.#iChunks, value);
    }
    #allDayIChunks;
    get allDayIChunks() {
      return get(this.#allDayIChunks);
    }
    set allDayIChunks(value) {
      set(this.#allDayIChunks, value);
    }
    constructor(mainState) {
      super(mainState);
      this.#slotTimeLimits = user_derived(slotTimeLimits(mainState));
      this.#slots = user_derived(slots(mainState, this));
      let $$d = user_derived(eventChunks$1(mainState, this)), chunks = user_derived(() => get($$d).chunks), bgChunks = user_derived(() => get($$d).bgChunks), allDayChunks = user_derived(() => get($$d).allDayChunks), allDayBgChunks = user_derived(() => get($$d).allDayBgChunks);
      this.#chunks = user_derived(() => get(chunks));
      this.#bgChunks = user_derived(() => get(bgChunks));
      this.#allDayChunks = user_derived(() => get(allDayChunks));
      this.#allDayBgChunks = user_derived(() => get(allDayBgChunks));
      let $$d_1 = user_derived(iEventChunks$1(mainState, this)), iChunks = user_derived(() => get($$d_1).iChunks), allDayIChunks = user_derived(() => get($$d_1).allDayIChunks);
      this.#iChunks = user_derived(() => get(iChunks));
      this.#allDayIChunks = user_derived(() => get(allDayIChunks));
    }
  };
}
var ViewState$2 = class extends TRState(TRRState()) {
  #grid;
  get grid() {
    return get(this.#grid);
  }
  set grid(value) {
    set(this.#grid, value);
  }
  constructor(mainState) {
    super(mainState);
    this.#grid = user_derived(grid$2(mainState, this));
  }
};
var placeholderResources;
function viewResources(mainState) {
  return () => {
    let { activeRange: activeRange2, filteredEvents: filteredEvents2, resources, options: { filterResourcesWithEvents }, extensions: { viewResources: viewResources2 } } = mainState;
    let result = viewResources2 ? viewResources2(resources) : resources;
    untrack(() => {
      if (filterResourcesWithEvents) result = resources.filter((resource) => filteredEvents2.some((event2) => !bgEvent(event2.display) && eventIntersects(event2, activeRange2.start, activeRange2.end, resource)));
      if (!result.length) result = placeholderResources ??= createResources([{}]);
    });
    return result;
  };
}
function grid$1(mainState, viewState) {
  return () => {
    let { viewDates: viewDates2, options: { datesAboveResources, highlightedDates, validRange } } = mainState;
    let { slotTimeLimits: slotTimeLimits2, viewResources: viewResources2 } = viewState;
    let grid2 = [];
    untrack(() => {
      let gridColumn = 1;
      let loop2 = [viewResources2, viewDates2];
      let keys2 = [uid2, toTime];
      if (datesAboveResources) {
        loop2.reverse();
        keys2.reverse();
      }
      for (let item0 of loop2[0]) {
        let days = [];
        let groupKey = keys2[0](item0);
        for (let item1 of loop2[1]) {
          let date = datesAboveResources ? item0 : item1;
          let resource = datesAboveResources ? item1 : item0;
          days.push({
            gridColumn,
            gridRow: 1,
            resource,
            key: keys2[1](item1),
            groupKey,
            start: addDuration(cloneDate(date), slotTimeLimits2.min),
            end: addDuration(cloneDate(date), slotTimeLimits2.max),
            dayStart: date,
            dayEnd: addDay(cloneDate(date)),
            disabled: outsideRange(date, validRange),
            highlight: highlightedDates.some((d) => datesEqual(d, date))
          });
          ++gridColumn;
        }
        grid2.push(days);
      }
    });
    return grid2;
  };
}
function RRState(Base) {
  return class extends Base {
    #viewResources;
    get viewResources() {
      return get(this.#viewResources);
    }
    set viewResources(value) {
      set(this.#viewResources, value);
    }
    constructor(mainState) {
      super(mainState);
      this.#viewResources = user_derived(viewResources(mainState));
    }
  };
}
var ViewState$1 = class extends RRState(TRState(TRRState())) {
  #grid;
  get grid() {
    return get(this.#grid);
  }
  set grid(value) {
    set(this.#grid, value);
  }
  constructor(mainState) {
    super(mainState);
    this.#grid = user_derived(grid$1(mainState, this));
  }
};
var root$6 = from_html(`<span><!></span>`);
function Label($$anchor, $$props) {
  push($$props, true);
  let date = prop($$props, "date", 3, void 0), setLabel = prop($$props, "setLabel", 3, void 0);
  let $$d = user_derived(() => getContext("state")), intlDayHeaderAL = user_derived(() => get($$d).intlDayHeaderAL), snippets = user_derived(() => get($$d).snippets), resourceLabelContent = user_derived(() => get($$d).options.resourceLabelContent), resourceLabelDidMount = user_derived(() => get($$d).options.resourceLabelDidMount);
  let el = state(void 0);
  let content = user_derived(() => createContent(get(resourceLabelContent), () => ({
    resource: $$props.resource,
    date: date() ? toLocalDate(date()) : void 0
  }), () => $$props.resource.title, get(snippets).resourceLabelContent));
  let ariaLabel = state(void 0);
  user_effect(() => {
    get(content);
    $$props.resource;
    date();
    untrack(() => {
      if (date()) tick().then(() => get(el) && set(ariaLabel, get(intlDayHeaderAL).format(date()) + ", " + get(el).innerText));
      else if (setLabel()) {
        set(ariaLabel, void 0);
        tick().then(() => get(el) && setLabel()(get(el).innerText));
      }
    });
  });
  onMount(() => {
    if (isFunction(get(resourceLabelDidMount))) get(resourceLabelDidMount)({
      resource: $$props.resource,
      date: date() ? toLocalDate(date()) : void 0,
      el: get(el)
    });
  });
  var span = root$6();
  var node = child(span);
  snippet(node, () => get(content).snippet ?? noop, () => get(content).arg);
  reset(span);
  bind_this(span, ($$value) => set(el, $$value), () => get(el));
  attach(span, () => contentFrom(get(content).content, get(content).snippet));
  template_effect(() => set_attribute2(span, "aria-label", get(ariaLabel)));
  append($$anchor, span);
  pop();
}
function Day$1($$anchor, $$props) {
  push($$props, true);
  let allDay = prop($$props, "allDay", 3, false);
  let $$d = user_derived(() => getContext("state")), slotHeight = user_derived(() => get($$d).options.slotHeight);
  let $$d_1 = user_derived(() => getContext("view-state")), snap2 = user_derived(() => get($$d_1).snap);
  let date = user_derived(() => $$props.day.dayStart), start = user_derived(() => $$props.day.start), resource = user_derived(() => $$props.day.resource), disabled = user_derived(() => $$props.day.disabled), highlight = user_derived(() => $$props.day.highlight);
  let el = state(void 0);
  function dateFromPoint(x, y) {
    if (allDay()) return get(date);
    else {
      let dayRect = rect(get(el));
      let scaleY = dayRect.height / get(el).offsetHeight;
      return addDuration(cloneDate(get(start)), get(snap2).duration, floor((y - dayRect.top) / (get(slotHeight) * get(snap2).ratio * scaleY)));
    }
  }
  BaseDay($$anchor, {
    get date() {
      return get(date);
    },
    get allDay() {
      return allDay();
    },
    get resource() {
      return get(resource);
    },
    dateFromPoint,
    get disabled() {
      return get(disabled);
    },
    get highlight() {
      return get(highlight);
    },
    get noIeb() {
      return $$props.noIeb;
    },
    get noBeb() {
      return $$props.noBeb;
    },
    get el() {
      return get(el);
    },
    set el($$value) {
      set(el, $$value, true);
    }
  });
  pop();
}
function Event$1($$anchor, $$props) {
  push($$props, true);
  let $$d = user_derived(() => getContext("state")), slotEventOverlap = user_derived(() => get($$d).options.slotEventOverlap), slotDuration = user_derived(() => get($$d).options.slotDuration), slotHeight = user_derived(() => get($$d).options.slotHeight);
  let styles = user_derived(() => (style) => {
    let step = toSeconds(get(slotDuration));
    let top = $$props.chunk.top / step * get(slotHeight);
    let height2 = $$props.chunk.height / step * get(slotHeight) || get(slotHeight);
    let maxHeight = $$props.chunk.maxHeight / step * get(slotHeight);
    style["grid-column"] = $$props.chunk.gridColumn;
    style["inset-block-start"] = `${top}px`;
    style["min-block-size"] = `${height2}px`;
    style["block-size"] = `${height2}px`;
    style["max-block-size"] = `${maxHeight}px`;
    let maxWidth = "100% - var(--ec-event-col-gap)";
    if ($$props.chunk.group) {
      let groupColumns = $$props.chunk.group.columns.length;
      style["z-index"] = `${$$props.chunk.groupColumn + 1}`;
      style["inset-inline-start"] = `calc((${maxWidth}) / ${groupColumns} * ${$$props.chunk.groupColumn})`;
      style["inline-size"] = `calc((${maxWidth}) / ${groupColumns} * ${get(slotEventOverlap) ? 0.5 * (1 + groupColumns - $$props.chunk.groupColumn) : 1})`;
    }
    return style;
  });
  InteractableEvent($$anchor, {
    get chunk() {
      return $$props.chunk;
    },
    get styles() {
      return get(styles);
    },
    axis: "y"
  });
  pop();
}
function AllDayEvent($$anchor, $$props) {
  push($$props, true);
  let $$d = user_derived(() => getContext("state")), eventGap = user_derived(() => get($$d).options.eventGap);
  let el = state(void 0);
  let margin = state(0);
  let event2 = user_derived(() => $$props.chunk.event);
  let styles = user_derived(() => (style) => {
    style["grid-column"] = `${$$props.chunk.gridColumn} / span ${$$props.chunk.dates.length}`;
    if (get(margin) || get(event2)._margin) style["margin-block-start"] = `${get(event2)._margin ?? get(margin)}px`;
    return style;
  });
  function reposition() {
    set(margin, repositionEvent$1($$props.chunk, height(get(el)), 1, get(eventGap)), true);
  }
  var $$exports = { reposition };
  InteractableEvent($$anchor, {
    get chunk() {
      return $$props.chunk;
    },
    get styles() {
      return get(styles);
    },
    axis: "x",
    get forceMargin() {
      return get(margin);
    },
    get el() {
      return get(el);
    },
    set el($$value) {
      set(el, $$value, true);
    }
  });
  return pop($$exports);
}
var root$5 = from_html(`<div></div>`);
function NowIndicator$1($$anchor, $$props) {
  push($$props, true);
  let span = prop($$props, "span", 3, 1);
  let $$d = user_derived(() => getContext("state")), mainEl = user_derived(() => get($$d).mainEl), now = user_derived(() => get($$d).now), today = user_derived(() => get($$d).today), slotDuration = user_derived(() => get($$d).options.slotDuration), slotHeight = user_derived(() => get($$d).options.slotHeight), theme = user_derived(() => get($$d).options.theme);
  let $$d_1 = user_derived(() => getContext("view-state")), sidebarWidth = user_derived(() => get($$d_1).sidebarWidth);
  let $$d_2 = user_derived(() => {
    for (let day of $$props.days) if (datesEqual(day.dayStart, get(today))) return day;
    return {};
  }), gridColumn = user_derived(() => get($$d_2).gridColumn), start = user_derived(() => get($$d_2).start), end = user_derived(() => get($$d_2).end);
  let top = user_derived(() => {
    if (get(now) < get(start) || get(now) > get(end)) return null;
    let step = toSeconds(get(slotDuration));
    return (get(now) - get(start)) / 1e3 / step * get(slotHeight);
  });
  let observerOptions = user_derived(() => ({
    root: get(mainEl),
    rootMargin: isRtl() ? `0px -${get(sidebarWidth) + 5.5}px 0px 0px` : `0px 0px 0px -${get(sidebarWidth) + 5.5}px`,
    threshold: 0
  }));
  function onIntersect(el, entry) {
    el.classList.toggle(get(theme).hidden, !entry.isIntersecting);
  }
  var fragment = comment();
  var node = first_child(fragment);
  var consequent = ($$anchor2) => {
    var div = root$5();
    let styles;
    attach(div, () => intersectionObserver(onIntersect, get(observerOptions)));
    template_effect(() => {
      set_class(div, 1, get(theme).nowIndicator);
      styles = set_style(div, "", styles, {
        "grid-column": `${get(gridColumn) + 1} / span ${span() ?? ""}`,
        "inset-block-start": `${get(top) ?? ""}px`
      });
    });
    append($$anchor2, div);
  };
  if_block(node, ($$render) => {
    if (get(gridColumn) && get(top) !== null) $$render(consequent);
  });
  append($$anchor, fragment);
  pop();
}
var root$4 = from_html(`<div><aside><!></aside> <div role="row"></div> <div><!> <!> <!></div></div>`);
var root_1$2 = from_html(`<div><time></time></div>`);
var root_2$2 = from_html(`<section><header><aside></aside> <div role="row"><!></div> <!></header> <div role="rowgroup"><aside aria-hidden="true"></aside> <div role="row"></div> <div><!> <!> <!></div></div> <!></section>`);
function View$1($$anchor, $$props) {
  push($$props, true);
  let viewState = prop($$props, "viewState", 7);
  let mainState = getContext("state");
  if (!viewState()) viewState(new ViewState$2(mainState));
  setContext("view-state", viewState());
  let mainEl = user_derived(() => mainState.mainEl), snippets = user_derived(() => mainState.snippets), viewDates2 = user_derived(() => mainState.viewDates), allDayContent = user_derived(() => mainState.options.allDayContent), allDaySlot = user_derived(() => mainState.options.allDaySlot), columnWidth = user_derived(() => mainState.options.columnWidth), eventGap = user_derived(() => mainState.options.eventGap), showNowIndicator = user_derived(() => mainState.options.nowIndicator), scrollTime = user_derived(() => mainState.options.scrollTime), slotHeight = user_derived(() => mainState.options.slotHeight), slotDuration = user_derived(() => mainState.options.slotDuration), theme = user_derived(() => mainState.options.theme);
  let allDayChunks = user_derived(() => viewState().allDayChunks), allDayBgChunks = user_derived(() => viewState().allDayBgChunks), allDayIChunks = user_derived(() => viewState().allDayIChunks), bgChunks = user_derived(() => viewState().bgChunks), chunks = user_derived(() => viewState().chunks), iChunks = user_derived(() => viewState().iChunks), grid2 = user_derived(() => viewState().grid), sidebarWidth = user_derived(() => viewState().sidebarWidth), slots2 = user_derived(() => viewState().slots), slotLabelPeriodicity2 = user_derived(() => viewState().slotLabelPeriodicity), slotTimeLimits2 = user_derived(() => viewState().slotTimeLimits);
  let headerHeight = state(0);
  let allDay = user_derived(() => createAllDayContent(get(allDayContent), get(snippets).allDayContent));
  user_effect(() => {
    get(scrollTime);
    if (!empty(get(viewDates2))) tick().then(scrollToTime);
  });
  function scrollToTime() {
    if (!get(mainEl)) return;
    get(mainEl).scrollTop = ((toSeconds(get(scrollTime)) - toSeconds(get(slotTimeLimits2).min)) / toSeconds(get(slotDuration)) - 0.5) * get(slotHeight);
  }
  let refs = [];
  function reposition() {
    runReposition(refs, get(allDayChunks));
  }
  user_effect(() => {
    get(eventGap);
    get(allDayChunks);
    tick().then(reposition);
  });
  var fragment = comment();
  var node = first_child(fragment);
  var consequent_4 = ($$anchor2) => {
    var section = root_2$2();
    let styles;
    var header_1 = child(section);
    var aside = child(header_1);
    var div = sibling(aside, 2);
    var node_1 = child(div);
    var consequent = ($$anchor3) => {
      var fragment_1 = comment();
      var node_2 = first_child(fragment_1);
      snippet(node_2, () => $$props.header);
      append($$anchor3, fragment_1);
    };
    var alternate = ($$anchor3) => {
      var fragment_2 = comment();
      var node_3 = first_child(fragment_2);
      each(node_3, 17, () => get(grid2)[0], index, ($$anchor4, $$item, i) => {
        let date = () => get($$item).dayStart;
        let disabled = () => get($$item).disabled;
        let highlight = () => get($$item).highlight;
        ColHead($$anchor4, {
          get date() {
            return date();
          },
          colIndex: 1 + i,
          get disabled() {
            return disabled();
          },
          get highlight() {
            return highlight();
          },
          children: ($$anchor5, $$slotProps) => {
            DayHeader($$anchor5, { get date() {
              return date();
            } });
          },
          $$slots: { default: true }
        });
      });
      append($$anchor3, fragment_2);
    };
    if_block(node_1, ($$render) => {
      if ($$props.header) $$render(consequent);
      else $$render(alternate, -1);
    });
    reset(div);
    var node_4 = sibling(div, 2);
    var consequent_1 = ($$anchor3) => {
      var div_1 = root$4();
      var aside_1 = child(div_1);
      var node_5 = child(aside_1);
      snippet(node_5, () => get(allDay).snippet ?? noop, () => get(allDay).arg);
      reset(aside_1);
      attach(aside_1, () => contentFrom(get(allDay).content, get(allDay).snippet));
      var div_2 = sibling(aside_1, 2);
      each(div_2, 21, () => get(grid2), index, ($$anchor4, days, i) => {
        var fragment_5 = comment();
        var node_6 = first_child(fragment_5);
        each(node_6, 17, () => get(days), index, ($$anchor5, day, j) => {
          {
            let $0 = user_derived(() => i + 1 === length(get(grid2)) && j + 1 === length(get(days)));
            Day$1($$anchor5, {
              get day() {
                return get(day);
              },
              allDay: true,
              get noIeb() {
                return get($0);
              }
            });
          }
        });
        append($$anchor4, fragment_5);
      });
      reset(div_2);
      var div_3 = sibling(div_2, 2);
      var node_7 = child(div_3);
      each(node_7, 19, () => get(allDayChunks), (chunk) => chunk.id, ($$anchor4, chunk, i) => {
        bind_this(AllDayEvent($$anchor4, { get chunk() {
          return get(chunk);
        } }), ($$value, i2) => refs[i2] = $$value, (i2) => refs?.[i2], () => [get(i)]);
      });
      var node_8 = sibling(node_7, 2);
      each(node_8, 17, () => get(allDayBgChunks), (chunk) => chunk.id, ($$anchor4, chunk) => {
        AllDayEvent($$anchor4, { get chunk() {
          return get(chunk);
        } });
      });
      var node_9 = sibling(node_8, 2);
      each(node_9, 17, () => get(allDayIChunks), index, ($$anchor4, chunk) => {
        AllDayEvent($$anchor4, { get chunk() {
          return get(chunk);
        } });
      });
      reset(div_3);
      reset(div_1);
      template_effect(() => {
        set_class(div_1, 1, get(theme).allDay);
        set_class(aside_1, 1, get(theme).sidebar);
        set_class(div_2, 1, get(theme).grid);
        set_class(div_3, 1, get(theme).events);
      });
      append($$anchor3, div_1);
    };
    if_block(node_4, ($$render) => {
      if (get(allDaySlot)) $$render(consequent_1);
    });
    reset(header_1);
    var div_4 = sibling(header_1, 2);
    var aside_2 = child(div_4);
    each(aside_2, 21, () => get(slots2), index, ($$anchor3, slot2, i) => {
      var div_5 = root_1$2();
      let styles_1;
      var time = child(div_5);
      attach(time, () => contentFrom(get(slot2)[1]));
      reset(div_5);
      template_effect(() => {
        set_class(div_5, 1, clsx2([get(theme).slot, !i && get(theme).hidden]));
        styles_1 = set_style(div_5, "", styles_1, { "--ec-slot-label-periodicity": get(slot2)[2] });
        set_attribute2(time, "datetime", get(slot2)[0]);
      });
      append($$anchor3, div_5);
    });
    reset(aside_2);
    var div_6 = sibling(aside_2, 2);
    each(div_6, 21, () => get(grid2), index, ($$anchor3, days, i) => {
      var fragment_10 = comment();
      var node_10 = first_child(fragment_10);
      each(node_10, 17, () => get(days), index, ($$anchor4, day, j) => {
        {
          let $0 = user_derived(() => i + 1 === length(get(grid2)) && j + 1 === length(get(days)));
          Day$1($$anchor4, {
            get day() {
              return get(day);
            },
            get noIeb() {
              return get($0);
            },
            noBeb: true
          });
        }
      });
      append($$anchor3, fragment_10);
    });
    reset(div_6);
    var div_7 = sibling(div_6, 2);
    var node_11 = child(div_7);
    each(node_11, 17, () => get(chunks), (chunk) => chunk.id, ($$anchor3, chunk) => {
      Event$1($$anchor3, { get chunk() {
        return get(chunk);
      } });
    });
    var node_12 = sibling(node_11, 2);
    each(node_12, 17, () => get(bgChunks), (chunk) => chunk.id, ($$anchor3, chunk) => {
      Event$1($$anchor3, { get chunk() {
        return get(chunk);
      } });
    });
    var node_13 = sibling(node_12, 2);
    each(node_13, 17, () => get(iChunks), index, ($$anchor3, chunk) => {
      Event$1($$anchor3, { get chunk() {
        return get(chunk);
      } });
    });
    reset(div_7);
    reset(div_4);
    var node_14 = sibling(div_4, 2);
    var consequent_3 = ($$anchor3) => {
      var fragment_15 = comment();
      var node_15 = first_child(fragment_15);
      var consequent_2 = ($$anchor4) => {
        var fragment_16 = comment();
        var node_16 = first_child(fragment_16);
        snippet(node_16, () => $$props.nowIndicator);
        append($$anchor4, fragment_16);
      };
      var alternate_1 = ($$anchor4) => {
        NowIndicator$1($$anchor4, { get days() {
          return get(grid2)[0];
        } });
      };
      if_block(node_15, ($$render) => {
        if ($$props.nowIndicator) $$render(consequent_2);
        else $$render(alternate_1, -1);
      });
      append($$anchor3, fragment_15);
    };
    if_block(node_14, ($$render) => {
      if (get(showNowIndicator)) $$render(consequent_3);
    });
    reset(section);
    bind_this(section, ($$value) => mainState.mainEl = $$value, () => mainState?.mainEl);
    attach(section, () => resizeObserver(reposition));
    template_effect(($0, $1) => {
      set_class(section, 1, get(theme).main);
      styles = set_style(section, "", styles, {
        "--ec-grid-cols": $0,
        "--ec-col-group-span": $1,
        "--ec-col-width": get(columnWidth) ?? "minmax(0, 1fr)",
        "--ec-slot-label-periodicity": get(slotLabelPeriodicity2),
        "--ec-slot-height": `${get(slotHeight) ?? ""}px`,
        "--ec-header-height": `${get(headerHeight) ?? ""}px`,
        "--ec-sidebar-width": `${get(sidebarWidth) ?? ""}px`
      });
      set_class(header_1, 1, get(theme).header);
      set_class(aside, 1, get(theme).sidebar);
      set_class(div, 1, get(theme).grid);
      set_class(div_4, 1, get(theme).body);
      set_class(aside_2, 1, get(theme).sidebar);
      set_class(div_6, 1, get(theme).grid);
      set_class(div_7, 1, get(theme).events);
    }, [() => length(get(grid2)) * length(get(grid2)[0]), () => length(get(grid2)[0])]);
    bind_element_size(aside, "offsetWidth", ($$value) => viewState().sidebarWidth = $$value);
    bind_element_size(header_1, "offsetHeight", ($$value) => set(headerHeight, $$value));
    append($$anchor2, section);
  };
  var d = user_derived(() => !empty(get(grid2)) && !empty(get(grid2)[0]));
  if_block(node, ($$render) => {
    if (get(d)) $$render(consequent_4);
  });
  append($$anchor, fragment);
  pop();
}
var root$3 = from_html(`<!> <!>`, 1);
function View_1($$anchor, $$props) {
  push($$props, true);
  let mainState = getContext("state");
  let viewState = new ViewState$1(mainState);
  let today = user_derived(() => mainState.today), mainEl = user_derived(() => mainState.mainEl), scrollDate = user_derived(() => mainState.scrollDate), viewDates2 = user_derived(() => mainState.viewDates), scrollTime = user_derived(() => mainState.options.scrollTime), datesAboveResources = user_derived(() => mainState.options.datesAboveResources), theme = user_derived(() => mainState.options.theme);
  let grid2 = user_derived(() => viewState.grid), sidebarWidth = user_derived(() => viewState.sidebarWidth);
  let resourceLabels = proxy([]);
  let scrolledTo;
  user_effect(() => {
    if (get(datesAboveResources)) {
      get(viewDates2);
      get(scrollTime);
      get(scrollDate);
      tick().then(scrollToTime);
    }
  });
  function scrollToTime() {
    if (!get(mainEl)) return;
    let target = get(scrollDate) && get(scrollDate) !== scrolledTo ? get(scrollDate) : get(today);
    scrolledTo = get(scrollDate);
    if (target >= get(viewDates2)[0] && target <= get(viewDates2).at(-1)) for (let days of get(grid2)) {
      let day = days[0];
      if (day.dayStart >= target) {
        get(mainEl).scrollLeft = (get(mainEl).scrollWidth - get(sidebarWidth)) / (length(get(grid2)) * length(days)) * (day.gridColumn - 1) * (isRtl() ? -1 : 1);
        break;
      }
    }
  }
  {
    const header = ($$anchor2) => {
      var fragment_1 = root$3();
      var node = first_child(fragment_1);
      each(node, 19, () => get(grid2), (days) => days[0].groupKey, ($$anchor3, days, i) => {
        const computed_const = user_derived(() => {
          const { dayStart: date, resource, disabled, highlight } = get(days)[0];
          return {
            date,
            resource,
            disabled,
            highlight
          };
        });
        {
          let $0 = user_derived(() => length(get(grid2)[0]) > 1 ? get(theme).colGroup : void 0);
          let $1 = user_derived(() => length(get(days)));
          let $2 = user_derived(() => 1 + get(i) * length(get(days)));
          let $3 = user_derived(() => get(datesAboveResources) && get(computed_const).disabled);
          let $4 = user_derived(() => get(datesAboveResources) && get(computed_const).highlight);
          ColHead($$anchor3, {
            get date() {
              return get(computed_const).date;
            },
            get className() {
              return get($0);
            },
            get weekday() {
              return get(datesAboveResources);
            },
            get colSpan() {
              return get($1);
            },
            get colIndex() {
              return get($2);
            },
            get disabled() {
              return get($3);
            },
            get highlight() {
              return get($4);
            },
            children: ($$anchor4, $$slotProps) => {
              var fragment_3 = comment();
              var node_1 = first_child(fragment_3);
              var consequent = ($$anchor5) => {
                DayHeader($$anchor5, { get date() {
                  return get(computed_const).date;
                } });
              };
              var alternate = ($$anchor5) => {
                Label($$anchor5, {
                  get resource() {
                    return get(computed_const).resource;
                  },
                  setLabel: (label2) => resourceLabels[get(i)] = label2 + ", "
                });
              };
              if_block(node_1, ($$render) => {
                if (get(datesAboveResources)) $$render(consequent);
                else $$render(alternate, -1);
              });
              append($$anchor4, fragment_3);
            },
            $$slots: { default: true }
          });
        }
      });
      var node_2 = sibling(node, 2);
      var consequent_2 = ($$anchor3) => {
        var fragment_6 = comment();
        var node_3 = first_child(fragment_6);
        each(node_3, 19, () => get(grid2), (days) => days[0].groupKey, ($$anchor4, days, i) => {
          var fragment_7 = comment();
          var node_4 = first_child(fragment_7);
          each(node_4, 19, () => get(days), (day) => day.key, ($$anchor5, day, j) => {
            const computed_const_1 = user_derived(() => {
              const { dayStart: date, resource, disabled, highlight } = get(day);
              return {
                date,
                resource,
                disabled,
                highlight
              };
            });
            {
              let $0 = user_derived(() => 1 + get(j) + get(i) * length(get(days)));
              ColHead($$anchor5, {
                get date() {
                  return get(computed_const_1).date;
                },
                get colIndex() {
                  return get($0);
                },
                get disabled() {
                  return get(computed_const_1).disabled;
                },
                get highlight() {
                  return get(computed_const_1).highlight;
                },
                children: ($$anchor6, $$slotProps) => {
                  var fragment_9 = comment();
                  var node_5 = first_child(fragment_9);
                  var consequent_1 = ($$anchor7) => {
                    Label($$anchor7, {
                      get resource() {
                        return get(computed_const_1).resource;
                      },
                      get date() {
                        return get(computed_const_1).date;
                      }
                    });
                  };
                  var alternate_1 = ($$anchor7) => {
                    DayHeader($$anchor7, {
                      get date() {
                        return get(computed_const_1).date;
                      },
                      get alPrefix() {
                        return resourceLabels[get(i)];
                      }
                    });
                  };
                  if_block(node_5, ($$render) => {
                    if (get(datesAboveResources)) $$render(consequent_1);
                    else $$render(alternate_1, -1);
                  });
                  append($$anchor6, fragment_9);
                },
                $$slots: { default: true }
              });
            }
          });
          append($$anchor4, fragment_7);
        });
        append($$anchor3, fragment_6);
      };
      var d = user_derived(() => length(get(grid2)[0]) > 1);
      if_block(node_2, ($$render) => {
        if (get(d)) $$render(consequent_2);
      });
      append($$anchor2, fragment_1);
    };
    const nowIndicator = ($$anchor2) => {
      var fragment_12 = comment();
      var node_6 = first_child(fragment_12);
      var consequent_3 = ($$anchor3) => {
        {
          let $0 = user_derived(() => get(grid2).flat());
          let $1 = user_derived(() => length(get(grid2)[0]));
          NowIndicator$1($$anchor3, {
            get days() {
              return get($0);
            },
            get span() {
              return get($1);
            }
          });
        }
      };
      var alternate_3 = ($$anchor3) => {
        var fragment_14 = comment();
        var node_7 = first_child(fragment_14);
        var consequent_4 = ($$anchor4) => {
          var fragment_15 = comment();
          var node_8 = first_child(fragment_15);
          each(node_8, 17, () => get(grid2), index, ($$anchor5, days) => {
            NowIndicator$1($$anchor5, { get days() {
              return get(days);
            } });
          });
          append($$anchor4, fragment_15);
        };
        var d_1 = user_derived(() => length(get(grid2)[0]) > 1);
        var alternate_2 = ($$anchor4) => {
          {
            let $0 = user_derived(() => get(grid2).flat());
            let $1 = user_derived(() => length(get(grid2)));
            NowIndicator$1($$anchor4, {
              get days() {
                return get($0);
              },
              get span() {
                return get($1);
              }
            });
          }
        };
        if_block(node_7, ($$render) => {
          if (get(d_1)) $$render(consequent_4);
          else $$render(alternate_2, -1);
        });
        append($$anchor3, fragment_14);
      };
      if_block(node_6, ($$render) => {
        if (get(datesAboveResources)) $$render(consequent_3);
        else $$render(alternate_3, -1);
      });
      append($$anchor2, fragment_12);
    };
    View$1($$anchor, {
      get viewState() {
        return viewState;
      },
      header,
      nowIndicator,
      $$slots: {
        header: true,
        nowIndicator: true
      }
    });
  }
  pop();
}
var resource_time_grid_default = {
  createOptions(options) {
    createTROptions(options);
    createTRROptions(options);
    createRROptions(options);
    assign2(options, {
      datesAboveResources: false,
      view: "resourceTimeGridWeek"
    });
    assign2(options.buttonText, {
      resourceTimeGridDay: "day",
      resourceTimeGridWeek: "week"
    });
    assign2(options.views, {
      resourceTimeGridDay: {
        buttonText: btnTextDay,
        component: initViewComponent$2,
        dayHeaderFormat: { weekday: "long" },
        duration: { days: 1 },
        theme: themeView("ec-resource ec-time-grid ec-day-view")
      },
      resourceTimeGridWeek: {
        buttonText: btnTextWeek,
        component: initViewComponent$2,
        duration: { weeks: 1 },
        theme: themeView("ec-resource ec-time-grid ec-week-view")
      }
    });
  },
  createParsers(parsers) {
    createTRRParsers(parsers);
  }
};
function initViewComponent$2(mainState) {
  setExtensions(mainState);
  return View_1;
}
function firstDayIndex(event2, days) {
  let low = 0;
  let high = days.length;
  while (low < high) {
    let mid = low + high >> 1;
    if (days[mid].dayEnd > event2.start) high = mid;
    else low = mid + 1;
  }
  while (low > 0 && days[low - 1].end > event2.start) --low;
  return low;
}
function createChunks(event2, days, monthView2, withId = true) {
  let dates = [];
  let firstStart;
  let lastEnd;
  let gridColumn;
  let gridRow;
  let resource;
  let left;
  let width = 0;
  for (let i = firstDayIndex(event2, days); i < days.length; ++i) {
    let { gridColumn: column, gridRow: row, resource: dayResource, dayStart, dayEnd, start, end, disabled } = days[i];
    if (dayStart >= event2.end) break;
    if (!disabled) {
      if (monthView2) {
        if (eventIntersects(event2, dayStart, dayEnd, dayResource)) {
          if (!dates.length) {
            firstStart = dayStart;
            gridColumn = column;
            gridRow = row;
            resource = dayResource;
          }
          dates.push(dayStart);
          lastEnd = dayEnd;
        }
      } else if (eventIntersects(event2, start, end, dayResource)) {
        if (!dates.length) {
          firstStart = start;
          gridColumn = column;
          gridRow = row;
          resource = dayResource;
          left = max(event2.start - start, 0) / 1e3;
        }
        dates.push(dayStart);
        lastEnd = end;
        width += (min(end, event2.end) - max(start, event2.start)) / 1e3;
      }
    }
  }
  if (dates.length) {
    let chunk = createEventChunk(event2, firstStart, lastEnd);
    assign2(chunk, {
      gridColumn,
      gridRow,
      resource,
      dates,
      left,
      width
    });
    if (withId) assignChunkId(chunk);
    return chunk;
  }
  return null;
}
function eventInRow(event2, days) {
  let resource = days[0]?.resource;
  return !resource || event2.resourceIds.includes(resource.id);
}
function prepareChunks(chunks, strict) {
  let dayChunks = {};
  for (let i = 0; i < chunks.length; ++i) {
    let chunk = chunks[i];
    let { gridColumn, gridRow } = chunk;
    chunk.order = i;
    let cells = [];
    for (let j = 0; j < chunk.dates.length; ++j) {
      let key2 = `${gridRow}_${gridColumn + j}`;
      let cell = dayChunks[key2] ??= {
        pass: 0,
        placed: [],
        chunks: []
      };
      cell.chunks.push(chunk);
      cells.push(cell);
    }
    chunk.cells = cells;
  }
  if (strict) {
    let layoutGroups = {};
    for (let chunk of chunks) {
      let { gridColumn, gridRow } = chunk;
      let seen2 = /* @__PURE__ */ new Set([chunk]);
      let rivals = [];
      for (let j = 0; j < chunk.dates.length; ++j) for (let other of dayChunks[`${gridRow}_${gridColumn + j}`].chunks) if (!seen2.has(other)) {
        seen2.add(other);
        rivals.push(other);
      }
      chunk.rivals = rivals;
      let { layoutGroup } = chunk.event;
      if (layoutGroup !== void 0) {
        chunk.mates = layoutGroups[`${gridRow}_${layoutGroup}`] ??= [];
        chunk.mates.push(chunk);
      }
    }
  }
}
function lineIsFree(chunk, line, height2, gap) {
  for (let other of chunk.rivals) if (other.order < chunk.order && "top" in other && line < other.bottom + gap && line + height2 + gap > other.top) return false;
  return true;
}
function placedIn(cell, pass) {
  if (cell.pass !== pass) {
    cell.pass = pass;
    cell.placed = [];
  }
  return cell.placed;
}
function repositionEvent(chunk, height2, monthView2, gap = 1, strict = false, pass = 0) {
  let top = 1;
  let bottom = top + height2;
  if (strict) {
    let anchor = chunk.mates?.[0];
    for (let { rivals } of anchor === chunk ? chunk.mates : [chunk]) for (let other of rivals) if (other.order < chunk.order && "top" in other && other.bottom + gap > top) top = other.bottom + gap;
    bottom = top + height2;
    if (anchor && anchor !== chunk) {
      let line = anchor.top;
      if (line > top && lineIsFree(chunk, line, height2, gap)) {
        top = line;
        bottom = top + height2;
      }
    }
  } else for (let other of placedIn(chunk.cells[0], pass)) {
    if (other.top >= bottom) break;
    if ((monthView2 || chunk.start < other.end && chunk.end > other.start) && top < other.bottom) {
      let offset2 = other.bottom - top + gap;
      top += offset2;
      bottom += offset2;
    }
  }
  assign2(chunk, {
    top,
    bottom
  });
  if (!strict) for (let cell of chunk.cells) {
    let placed = placedIn(cell, pass);
    let low = 0;
    let high = placed.length;
    while (low < high) {
      let mid = low + high >> 1;
      if (placed[mid].top <= top) low = mid + 1;
      else high = mid;
    }
    placed.splice(low, 0, chunk);
  }
  return top;
}
function getSlotTimeLimits(dayTimeLimits2, date) {
  return dayTimeLimits2[toTime(date)] ?? {
    min: createDuration(0),
    max: createDuration("24:00:00")
  };
}
function isExpanded(resource, initiallyExpanded) {
  return resource.expanded ?? initiallyExpanded;
}
function isHidden(resource, initiallyExpanded) {
  for (let parent = getPayload(resource).parent; parent; parent = getPayload(parent).parent) if (!isExpanded(parent, initiallyExpanded)) return true;
  return false;
}
function grid(mainState, viewState) {
  return () => {
    let { viewDates: viewDates2, options: { highlightedDates, validRange } } = mainState;
    let { dayTimeLimits: dayTimeLimits2, viewResources: viewResources2 } = viewState;
    let grid2 = [];
    untrack(() => {
      let gridRow = 1;
      for (let resource of viewResources2) {
        let days = [];
        let gridColumn = 1;
        for (let date of viewDates2) {
          let slotTimeLimits2 = dayTimeLimits2[toTime(date)];
          days.push({
            gridColumn,
            gridRow,
            resource,
            start: addDuration(cloneDate(date), slotTimeLimits2.min),
            end: addDuration(cloneDate(date), slotTimeLimits2.max),
            dayStart: date,
            dayEnd: addDay(cloneDate(date)),
            disabled: outsideRange(date, validRange),
            highlight: highlightedDates.some((d) => datesEqual(d, date))
          });
          ++gridColumn;
        }
        grid2.push(days);
        ++gridRow;
      }
    });
    return grid2;
  };
}
function oneMonth(duration) {
  return duration.months === 1 && !duration.years && !duration.days && !duration.seconds;
}
function oneWeek(duration) {
  return duration.inWeeks && duration.days === 7 && !duration.years && !duration.months && !duration.seconds;
}
function extraHeads(mainState, viewState) {
  return () => {
    let { features, options: { duration, firstDay, weekNumbers } } = mainState;
    let { grid: grid2 } = viewState;
    let months = [];
    let weeks = [];
    untrack(() => {
      let month;
      let week;
      if (!empty(grid2)) for (let { dayStart, gridColumn } of grid2[0]) {
        if (features.includes("month")) {
          if (month && month.date.getUTCMonth() === dayStart.getUTCMonth()) ++month.span;
          else {
            month = {
              date: dayStart,
              gridColumn,
              span: 1
            };
            months.push(month);
          }
        }
        if (weekNumbers) {
          let number = getWeekNumber(dayStart, firstDay);
          if (week && week.number === number) ++week.span;
          else {
            week = {
              number,
              date: dayStart,
              gridColumn,
              span: 1
            };
            weeks.push(week);
          }
        }
      }
      if (length(months) === 1 && oneMonth(duration)) months = [];
      if (length(weeks) === 1 && oneWeek(duration)) weeks = [];
    });
    return {
      months,
      weeks
    };
  };
}
function eventChunks(mainState, viewState) {
  return () => {
    let { filteredEvents: filteredEvents2, options: { eventOrderStrict } } = mainState;
    let { grid: grid2, monthView: monthView2 } = viewState;
    let chunks = [];
    let bgChunks = [];
    untrack(() => {
      for (let event2 of filteredEvents2) {
        let bg = bgEvent(event2.display);
        if (bg && monthView2 && !event2.allDay) continue;
        let target = bg ? bgChunks : chunks;
        for (let days of grid2) {
          if (!eventInRow(event2, days)) continue;
          let chunk = createChunks(event2, days, monthView2);
          if (chunk) target.push(chunk);
        }
      }
      prepareChunks(chunks, eventOrderStrict);
    });
    return {
      chunks,
      bgChunks
    };
  };
}
function iEventChunks(mainState, viewState) {
  return () => {
    let { iEvents } = mainState;
    let { grid: grid2, monthView: monthView2 } = viewState;
    let iChunks = [];
    for (let [, event2] of iEvents) {
      if (!event2) continue;
      untrack(() => {
        for (let days of grid2) {
          if (!eventInRow(event2, days)) continue;
          let chunk = createChunks(event2, days, monthView2, false);
          if (chunk) iChunks.push(chunk);
        }
      });
    }
    return iChunks;
  };
}
function dayTimeLimits(mainState) {
  return () => {
    let { filteredEvents: filteredEvents2, viewDates: viewDates2, options: { flexibleSlotTimeLimits, slotMinTime, slotMaxTime } } = mainState;
    let dayTimeLimits2 = {};
    untrack(() => {
      for (let date of viewDates2) dayTimeLimits2[toTime(date)] = createSlotTimeLimits(slotMinTime, slotMaxTime, flexibleSlotTimeLimits, [date], filteredEvents2);
    });
    return dayTimeLimits2;
  };
}
function daySlots(mainState, viewState) {
  return () => {
    let { viewDates: viewDates2, options: { slotDuration } } = mainState;
    let { dayTimeLimits: dayTimeLimits2, intlSlotLabel, slotLabelPeriodicity: slotLabelPeriodicity2 } = viewState;
    let slots2 = {};
    untrack(() => {
      for (let date of viewDates2) {
        let key2 = toTime(date);
        slots2[key2] = key2 in dayTimeLimits2 ? createSlots(date, slotDuration, slotLabelPeriodicity2, dayTimeLimits2[key2], intlSlotLabel) : [];
      }
    });
    return slots2;
  };
}
function nestedResources(mainState) {
  return () => {
    let { resources } = mainState;
    let nested;
    untrack(() => {
      nested = resources.some((resource) => getPayload(resource).children.length);
    });
    return nested;
  };
}
function monthView(mainState) {
  return () => {
    let { options: { slotDuration } } = mainState;
    let monthView2;
    untrack(() => {
      monthView2 = !toSeconds(slotDuration);
    });
    return monthView2;
  };
}
var ViewState = class extends RRState(TRRState()) {
  #dayTimeLimits;
  get dayTimeLimits() {
    return get(this.#dayTimeLimits);
  }
  set dayTimeLimits(value) {
    set(this.#dayTimeLimits, value);
  }
  #daySlots;
  get daySlots() {
    return get(this.#daySlots);
  }
  set daySlots(value) {
    set(this.#daySlots, value);
  }
  #grid;
  get grid() {
    return get(this.#grid);
  }
  set grid(value) {
    set(this.#grid, value);
  }
  #extraHeads;
  get extraHeads() {
    return get(this.#extraHeads);
  }
  set extraHeads(value) {
    set(this.#extraHeads, value);
  }
  #intlMonthHeader;
  get intlMonthHeader() {
    return get(this.#intlMonthHeader);
  }
  set intlMonthHeader(value) {
    set(this.#intlMonthHeader, value);
  }
  #monthView;
  get monthView() {
    return get(this.#monthView);
  }
  set monthView(value) {
    set(this.#monthView, value);
  }
  #chunks;
  get chunks() {
    return get(this.#chunks);
  }
  set chunks(value) {
    set(this.#chunks, value);
  }
  #bgChunks;
  get bgChunks() {
    return get(this.#bgChunks);
  }
  set bgChunks(value) {
    set(this.#bgChunks, value);
  }
  #iChunks;
  get iChunks() {
    return get(this.#iChunks);
  }
  set iChunks(value) {
    set(this.#iChunks, value);
  }
  #nestedResources;
  get nestedResources() {
    return get(this.#nestedResources);
  }
  set nestedResources(value) {
    set(this.#nestedResources, value);
  }
  constructor(mainState) {
    super(mainState);
    this.#dayTimeLimits = user_derived(dayTimeLimits(mainState));
    this.#daySlots = user_derived(daySlots(mainState, this));
    this.#grid = user_derived(grid(mainState, this));
    this.#extraHeads = user_derived(extraHeads(mainState, this));
    this.#intlMonthHeader = user_derived(intl(mainState, "monthHeaderFormat"));
    this.#monthView = user_derived(monthView(mainState));
    let $$d = user_derived(eventChunks(mainState, this)), chunks = user_derived(() => get($$d).chunks), bgChunks = user_derived(() => get($$d).bgChunks);
    this.#chunks = user_derived(() => get(chunks));
    this.#bgChunks = user_derived(() => get(bgChunks));
    this.#iChunks = user_derived(iEventChunks(mainState, this));
    this.#nestedResources = user_derived(nestedResources(mainState));
  }
};
function Day($$anchor, $$props) {
  push($$props, true);
  let $$d = user_derived(() => getContext("state")), slotWidth = user_derived(() => get($$d).options.slotWidth);
  let $$d_1 = user_derived(() => getContext("view-state")), monthView2 = user_derived(() => get($$d_1).monthView), snap2 = user_derived(() => get($$d_1).snap);
  let date = user_derived(() => $$props.day.dayStart), start = user_derived(() => $$props.day.start), resource = user_derived(() => $$props.day.resource), disabled = user_derived(() => $$props.day.disabled), highlight = user_derived(() => $$props.day.highlight);
  let el = state(void 0);
  function dateFromPoint(x, y) {
    if (get(monthView2)) return get(date);
    else {
      let dayRect = rect(get(el));
      let scaleX = dayRect.width / get(el).offsetWidth;
      return addDuration(cloneDate(get(start)), get(snap2).duration, floor((isRtl() ? dayRect.right - x : x - dayRect.left) / (get(slotWidth) * get(snap2).ratio * scaleX)));
    }
  }
  BaseDay($$anchor, {
    get allDay() {
      return get(monthView2);
    },
    get date() {
      return get(date);
    },
    get resource() {
      return get(resource);
    },
    dateFromPoint,
    get disabled() {
      return get(disabled);
    },
    get highlight() {
      return get(highlight);
    },
    get noIeb() {
      return $$props.noIeb;
    },
    get noBeb() {
      return $$props.noBeb;
    },
    get el() {
      return get(el);
    },
    set el($$value) {
      set(el, $$value, true);
    }
  });
  pop();
}
function Event2($$anchor, $$props) {
  push($$props, true);
  let $$d = user_derived(() => getContext("state")), eventGap = user_derived(() => get($$d).options.eventGap), eventOrderStrict = user_derived(() => get($$d).options.eventOrderStrict), slotDuration = user_derived(() => get($$d).options.slotDuration), slotWidth = user_derived(() => get($$d).options.slotWidth);
  let $$d_1 = user_derived(() => getContext("view-state")), monthView2 = user_derived(() => get($$d_1).monthView);
  let el = state(void 0);
  let margin = state(1);
  let event2 = user_derived(() => $$props.chunk.event);
  let styles = user_derived(() => (style) => {
    style["grid-column"] = `${$$props.chunk.gridColumn} / span ${$$props.chunk.dates.length}`;
    style["grid-row"] = $$props.chunk.gridRow;
    if (!get(monthView2)) {
      style["inset-inline-start"] = `${$$props.chunk.left / toSeconds(get(slotDuration)) * get(slotWidth)}px`;
      style["inline-size"] = `${$$props.chunk.width / toSeconds(get(slotDuration)) * get(slotWidth)}px`;
    }
    if (!bgEvent(get(event2).display)) {
      let marginTop = get(margin);
      if (get(event2)._margin) {
        let [_margin, _gridRow] = get(event2)._margin;
        if ($$props.chunk.gridRow === _gridRow) marginTop = _margin;
      }
      style["margin-block-start"] = `${marginTop}px`;
    }
    return style;
  });
  function reposition(pass) {
    set(margin, repositionEvent($$props.chunk, height(get(el)), get(monthView2), get(eventGap), get(eventOrderStrict), pass), true);
  }
  var $$exports = { reposition };
  {
    let $0 = user_derived(() => [get(margin), $$props.chunk.gridRow]);
    InteractableEvent($$anchor, {
      get chunk() {
        return $$props.chunk;
      },
      get styles() {
        return get(styles);
      },
      axis: "x",
      get forceMargin() {
        return get($0);
      },
      get el() {
        return get(el);
      },
      set el($$value) {
        set(el, $$value, true);
      }
    });
  }
  return pop($$exports);
}
var root$2 = from_html(`<span></span>`);
var root_1$1 = from_html(`<button></button>`);
var root_2$1 = from_html(`<!> <span><!></span>`, 1);
function Expander($$anchor, $$props) {
  push($$props, true);
  let resource = prop($$props, "resource", 7);
  let $$d = user_derived(() => getContext("state")), resources = user_derived(() => get($$d).resources), view2 = user_derived(() => get($$d).view), buttonText = user_derived(() => get($$d).options.buttonText), icons = user_derived(() => get($$d).options.icons), resourceExpand = user_derived(() => get($$d).options.resourceExpand), resourcesInitiallyExpanded = user_derived(() => get($$d).options.resourcesInitiallyExpanded), theme = user_derived(() => get($$d).options.theme);
  let payload = state({});
  let expanded = user_derived(() => isExpanded(resource(), get(resourcesInitiallyExpanded)));
  let title = user_derived(() => get(buttonText)[get(expanded) ? "collapse" : "expand"]);
  user_pre_effect(() => {
    set(payload, getPayload(resource()));
  });
  function onclick(jsEvent) {
    resource().expanded = set(expanded, !get(expanded));
    get(resources).length = get(resources).length;
    if (isFunction(get(resourceExpand))) get(resourceExpand)({
      resource: resource(),
      jsEvent,
      view: toViewWithLocalDates(get(view2))
    });
  }
  var fragment = root_2$1();
  var node = first_child(fragment);
  each(node, 17, () => Array(get(payload).level), index, ($$anchor2, level) => {
    var span = root$2();
    template_effect(() => set_class(span, 1, get(theme).expander));
    append($$anchor2, span);
  });
  var span_1 = sibling(node, 2);
  var node_1 = child(span_1);
  var consequent = ($$anchor2) => {
    var button = root_1$1();
    attach(button, () => contentFrom(get(icons)[get(expanded) ? "collapse" : "expand"]));
    template_effect(() => {
      set_class(button, 1, get(theme).button);
      set_attribute2(button, "aria-label", get(title));
      set_attribute2(button, "title", get(title));
    });
    delegated("click", button, onclick);
    append($$anchor2, button);
  };
  if_block(node_1, ($$render) => {
    if (get(payload).children?.length) $$render(consequent);
  });
  reset(span_1);
  template_effect(() => set_class(span_1, 1, get(theme).expander));
  append($$anchor, fragment);
  pop();
}
delegate(["click"]);
var root$1 = from_html(`<div></div>`);
function NowIndicator($$anchor, $$props) {
  push($$props, true);
  let $$d = user_derived(() => getContext("state")), mainEl = user_derived(() => get($$d).mainEl), now = user_derived(() => get($$d).now), today = user_derived(() => get($$d).today), slotDuration = user_derived(() => get($$d).options.slotDuration), slotWidth = user_derived(() => get($$d).options.slotWidth), theme = user_derived(() => get($$d).options.theme);
  let $$d_1 = user_derived(() => getContext("view-state")), grid2 = user_derived(() => get($$d_1).grid), sidebarWidth = user_derived(() => get($$d_1).sidebarWidth);
  let $$d_2 = user_derived(() => {
    for (let day of get(grid2)[0]) if (datesEqual(day.dayStart, get(today))) return day;
    return {};
  }), gridColumn = user_derived(() => get($$d_2).gridColumn), start = user_derived(() => get($$d_2).start), end = user_derived(() => get($$d_2).end);
  let left = user_derived(() => {
    if (get(now) < get(start) || get(now) > get(end)) return null;
    let step = toSeconds(get(slotDuration));
    return (get(now) - get(start)) / 1e3 / step * get(slotWidth);
  });
  let observerOptions = user_derived(() => ({
    root: get(mainEl),
    rootMargin: isRtl() ? `0px -${get(sidebarWidth) + 1}px 0px 0px` : `0px 0px 0px -${get(sidebarWidth) + 1}px`,
    threshold: 0
  }));
  function onIntersect(el, entry) {
    el.classList.toggle(get(theme).hidden, !entry.isIntersecting);
  }
  var fragment = comment();
  var node = first_child(fragment);
  var consequent = ($$anchor2) => {
    var div = root$1();
    let styles;
    attach(div, () => intersectionObserver(onIntersect, get(observerOptions)));
    template_effect(() => {
      set_class(div, 1, get(theme).nowIndicator);
      styles = set_style(div, "", styles, {
        "grid-column": get(gridColumn) + 1,
        "grid-row": `2 / span ${get(grid2).length ?? ""}`,
        "inset-inline-start": `${get(left) ?? ""}px`
      });
    });
    append($$anchor2, div);
  };
  if_block(node, ($$render) => {
    if (get(gridColumn) && get(left) !== null) $$render(consequent);
  });
  append($$anchor, fragment);
  pop();
}
var root = from_html(`<time></time>`);
var root_1 = from_html(`<span><!></span>`);
var root_2 = from_html(`<div><time></time></div>`);
var root_3 = from_html(`<div role="rowheader"><!> <!></div>`);
var root_4 = from_html(`<section><header><aside></aside> <div role="row"><!> <!> <!> <!></div></header> <div role="rowgroup"><aside></aside> <div role="row"></div> <div><!> <!> <!></div></div> <!></section>`);
function View($$anchor, $$props) {
  push($$props, true);
  let mainState = getContext("state");
  let viewState = new ViewState(mainState);
  setContext("view-state", viewState);
  let mainEl = user_derived(() => mainState.mainEl), scrollDate = user_derived(() => mainState.scrollDate), snippets = user_derived(() => mainState.snippets), today = user_derived(() => mainState.today), viewDates2 = user_derived(() => mainState.viewDates), columnWidth = user_derived(() => mainState.options.columnWidth), eventGap = user_derived(() => mainState.options.eventGap), nowIndicator = user_derived(() => mainState.options.nowIndicator), scrollTime = user_derived(() => mainState.options.scrollTime), slotDuration = user_derived(() => mainState.options.slotDuration), slotHeight = user_derived(() => mainState.options.slotHeight), slotWidth = user_derived(() => mainState.options.slotWidth), theme = user_derived(() => mainState.options.theme), weekNumberContent = user_derived(() => mainState.options.weekNumberContent);
  let chunks = user_derived(() => viewState.chunks), bgChunks = user_derived(() => viewState.bgChunks), iChunks = user_derived(() => viewState.iChunks), daySlots2 = user_derived(() => viewState.daySlots), dayTimeLimits2 = user_derived(() => viewState.dayTimeLimits), grid2 = user_derived(() => viewState.grid), extraHeads2 = user_derived(() => viewState.extraHeads), intlMonthHeader = user_derived(() => viewState.intlMonthHeader), monthView2 = user_derived(() => viewState.monthView), nestedResources2 = user_derived(() => viewState.nestedResources), sidebarWidth = user_derived(() => viewState.sidebarWidth), slotLabelPeriodicity2 = user_derived(() => viewState.slotLabelPeriodicity), viewResources2 = user_derived(() => viewState.viewResources);
  let headerHeight = state(0);
  let scrolledTo;
  user_effect(() => {
    get(scrollTime);
    get(scrollDate);
    if (!empty(get(viewDates2))) tick().then(scrollToTime);
  });
  function scrollToTime() {
    if (!get(mainEl)) return;
    let scrollLeft = 0;
    let target = get(scrollDate) && get(scrollDate) !== scrolledTo ? get(scrollDate) : get(today);
    scrolledTo = get(scrollDate);
    let targetOutOfView = target < get(viewDates2)[0] || target > get(viewDates2).at(-1);
    if (get(monthView2)) {
      if (!targetOutOfView) {
        let days = get(grid2)[0];
        for (let day of days) if (day.dayStart >= target) {
          get(mainEl).scrollLeft = (get(mainEl).scrollWidth - get(sidebarWidth)) / length(days) * (day.gridColumn - 1) * (isRtl() ? -1 : 1);
          break;
        }
      }
    } else {
      for (let date of get(viewDates2)) {
        let slotTimeLimits2 = getSlotTimeLimits(get(dayTimeLimits2), date);
        if (targetOutOfView || date >= target) {
          scrollLeft += max(min(toSeconds(get(scrollTime)), toSeconds(slotTimeLimits2.max)) - toSeconds(slotTimeLimits2.min), 0);
          break;
        } else scrollLeft += toSeconds(slotTimeLimits2.max) - toSeconds(slotTimeLimits2.min);
      }
      get(mainEl).scrollLeft = scrollLeft / toSeconds(get(slotDuration)) * get(slotWidth) * (isRtl() ? -1 : 1);
    }
  }
  let refs = [];
  function reposition() {
    runReposition(refs, get(chunks));
  }
  user_effect(() => {
    get(eventGap);
    get(chunks);
    tick().then(reposition);
  });
  var fragment = comment();
  var node = first_child(fragment);
  var consequent_3 = ($$anchor2) => {
    var section = root_4();
    let styles;
    var header = child(section);
    var aside = child(header);
    var div = sibling(aside, 2);
    var node_1 = child(div);
    each(node_1, 17, () => get(extraHeads2).months, index, ($$anchor3, $$item) => {
      let date = () => get($$item).date;
      let gridColumn = () => get($$item).gridColumn;
      let span = () => get($$item).span;
      ColHead($$anchor3, {
        get className() {
          return get(theme).colGroup;
        },
        get colIndex() {
          return gridColumn();
        },
        get colSpan() {
          return span();
        },
        cssSpan: true,
        weekday: false,
        children: ($$anchor4, $$slotProps) => {
          var time = root();
          attach(time, () => contentFrom(get(intlMonthHeader).format(date())));
          template_effect(($0) => set_attribute2(time, "datetime", $0), [() => toISOString(date(), 10)]);
          append($$anchor4, time);
        },
        $$slots: { default: true }
      });
    });
    var node_2 = sibling(node_1, 2);
    each(node_2, 17, () => get(extraHeads2).weeks, index, ($$anchor3, $$item) => {
      let number = () => get($$item).number;
      let date = () => get($$item).date;
      let gridColumn = () => get($$item).gridColumn;
      let span = () => get($$item).span;
      const weekNumber = user_derived(() => createWeekNumberContent(number(), date(), get(weekNumberContent), get(snippets).weekNumberContent));
      ColHead($$anchor3, {
        get className() {
          return get(theme).colGroup;
        },
        get colIndex() {
          return gridColumn();
        },
        get colSpan() {
          return span();
        },
        cssSpan: true,
        weekday: false,
        children: ($$anchor4, $$slotProps) => {
          var span_1 = root_1();
          var node_3 = child(span_1);
          snippet(node_3, () => get(weekNumber).snippet ?? noop, () => get(weekNumber).arg);
          reset(span_1);
          attach(span_1, () => contentFrom(get(weekNumber).content, get(weekNumber).snippet));
          template_effect(() => set_class(span_1, 1, get(theme).weekNumber));
          append($$anchor4, span_1);
        },
        $$slots: { default: true }
      });
    });
    var node_4 = sibling(node_2, 2);
    each(node_4, 17, () => get(grid2)[0], index, ($$anchor3, $$item, i) => {
      let date = () => get($$item).dayStart;
      let disabled = () => get($$item).disabled;
      let highlight = () => get($$item).highlight;
      ColHead($$anchor3, {
        get date() {
          return date();
        },
        colIndex: 1 + i,
        get disabled() {
          return disabled();
        },
        get highlight() {
          return highlight();
        },
        children: ($$anchor4, $$slotProps) => {
          DayHeader($$anchor4, { get date() {
            return date();
          } });
        },
        $$slots: { default: true }
      });
    });
    var node_5 = sibling(node_4, 2);
    var consequent = ($$anchor3) => {
      var fragment_5 = comment();
      var node_6 = first_child(fragment_5);
      each(node_6, 17, () => get(grid2)[0], index, ($$anchor4, $$item) => {
        let date = () => get($$item).dayStart;
        let disabled = () => get($$item).disabled;
        let highlight = () => get($$item).highlight;
        ColHead($$anchor4, {
          get date() {
            return date();
          },
          get className() {
            return get(theme).slots;
          },
          get disabled() {
            return disabled();
          },
          get highlight() {
            return highlight();
          },
          ariaHidden: true,
          children: ($$anchor5, $$slotProps) => {
            var fragment_7 = comment();
            var node_7 = first_child(fragment_7);
            each(node_7, 17, () => get(daySlots2)[toTime(date())], index, ($$anchor6, slot2) => {
              var div_1 = root_2();
              let styles_1;
              var time_1 = child(div_1);
              attach(time_1, () => contentFrom(get(slot2)[1]));
              reset(div_1);
              template_effect(() => {
                set_class(div_1, 1, get(theme).slot);
                styles_1 = set_style(div_1, "", styles_1, { "--ec-slot-label-periodicity": get(slot2)[2] });
                set_attribute2(time_1, "datetime", get(slot2)[0]);
              });
              append($$anchor6, div_1);
            });
            append($$anchor5, fragment_7);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor3, fragment_5);
    };
    if_block(node_5, ($$render) => {
      if (!get(monthView2)) $$render(consequent);
    });
    reset(div);
    reset(header);
    var div_2 = sibling(header, 2);
    var aside_1 = child(div_2);
    each(aside_1, 21, () => get(viewResources2), (resource) => uid2(resource), ($$anchor3, resource) => {
      var div_3 = root_3();
      var node_8 = child(div_3);
      var consequent_1 = ($$anchor4) => {
        Expander($$anchor4, { get resource() {
          return get(resource);
        } });
      };
      if_block(node_8, ($$render) => {
        if (get(nestedResources2)) $$render(consequent_1);
      });
      Label(sibling(node_8, 2), { get resource() {
        return get(resource);
      } });
      reset(div_3);
      template_effect(() => set_class(div_3, 1, get(theme).rowHead));
      append($$anchor3, div_3);
    });
    reset(aside_1);
    var div_4 = sibling(aside_1, 2);
    each(div_4, 21, () => get(grid2), index, ($$anchor3, days, i) => {
      var fragment_9 = comment();
      var node_10 = first_child(fragment_9);
      each(node_10, 17, () => get(days), index, ($$anchor4, day, j) => {
        {
          let $0 = user_derived(() => j + 1 === length(get(days)));
          let $1 = user_derived(() => i + 1 === length(get(grid2)));
          Day($$anchor4, {
            get day() {
              return get(day);
            },
            get noIeb() {
              return get($0);
            },
            get noBeb() {
              return get($1);
            }
          });
        }
      });
      append($$anchor3, fragment_9);
    });
    reset(div_4);
    var div_5 = sibling(div_4, 2);
    var node_11 = child(div_5);
    each(node_11, 19, () => get(chunks), (chunk) => chunk.id, ($$anchor3, chunk, i) => {
      bind_this(Event2($$anchor3, { get chunk() {
        return get(chunk);
      } }), ($$value, i2) => refs[i2] = $$value, (i2) => refs?.[i2], () => [get(i)]);
    });
    var node_12 = sibling(node_11, 2);
    each(node_12, 17, () => get(bgChunks), (chunk) => chunk.id, ($$anchor3, chunk) => {
      Event2($$anchor3, { get chunk() {
        return get(chunk);
      } });
    });
    var node_13 = sibling(node_12, 2);
    each(node_13, 17, () => get(iChunks), index, ($$anchor3, chunk) => {
      Event2($$anchor3, { get chunk() {
        return get(chunk);
      } });
    });
    reset(div_5);
    reset(div_2);
    var node_14 = sibling(div_2, 2);
    var consequent_2 = ($$anchor3) => {
      NowIndicator($$anchor3, {});
    };
    if_block(node_14, ($$render) => {
      if (get(nowIndicator) && !get(monthView2)) $$render(consequent_2);
    });
    reset(section);
    bind_this(section, ($$value) => mainState.mainEl = $$value, () => mainState?.mainEl);
    attach(section, () => resizeObserver(reposition, true));
    template_effect(($0, $1) => {
      set_class(section, 1, get(theme).main);
      styles = set_style(section, "", styles, {
        "--ec-grid-cols": $0,
        "--ec-grid-rows": $1,
        "--ec-col-width": get(monthView2) ? get(columnWidth) ?? "minmax(4em, 1fr)" : "min-content",
        "--ec-slot-label-periodicity": get(slotLabelPeriodicity2),
        "--ec-slot-height": `${get(slotHeight) ?? ""}px`,
        "--ec-slot-width": `${get(slotWidth) ?? ""}px`,
        "--ec-header-height": `${get(headerHeight) ?? ""}px`,
        "--ec-sidebar-width": `${get(sidebarWidth) ?? ""}px`
      });
      set_class(header, 1, get(theme).header);
      set_class(aside, 1, get(theme).sidebar);
      set_class(div, 1, get(theme).grid);
      set_class(div_2, 1, get(theme).body);
      set_class(aside_1, 1, get(theme).sidebar);
      set_class(div_4, 1, get(theme).grid);
      set_class(div_5, 1, get(theme).events);
    }, [() => length(get(grid2)[0]), () => `${length(get(grid2)) > 1 ? `repeat(${length(get(grid2)) - 1}, auto)` : ""} 1fr`]);
    bind_element_size(aside, "offsetWidth", ($$value) => viewState.sidebarWidth = $$value);
    bind_element_size(header, "offsetHeight", ($$value) => set(headerHeight, $$value));
    append($$anchor2, section);
  };
  var d = user_derived(() => !empty(get(grid2)) && !empty(get(grid2)[0]));
  if_block(node, ($$render) => {
    if (get(d)) $$render(consequent_3);
  });
  append($$anchor, fragment);
  pop();
}
var resource_timeline_default = {
  createOptions(options) {
    createTRROptions(options);
    createRROptions(options);
    createDROptions(options);
    assign2(options, {
      monthHeaderFormat: { month: "long" },
      resourceExpand: void 0,
      resourcesInitiallyExpanded: true,
      slotWidth: 32,
      view: "resourceTimelineWeek"
    });
    assign2(options.buttonText, {
      expand: "Expand",
      collapse: "Collapse",
      resourceTimelineDay: "day",
      resourceTimelineWeek: "week",
      resourceTimelineMonth: "month",
      resourceTimelineYear: "year"
    });
    assign2(options.icons, {
      collapse: { html: "&minus;" },
      expand: { html: "&plus;" }
    });
    assign2(options.theme, {
      expander: "ec-expander",
      rowHead: "ec-row-head",
      slots: "ec-slots"
    });
    assign2(options.views, {
      resourceTimelineDay: {
        buttonText: btnTextDay,
        component: initViewComponent$1,
        displayEventEnd: false,
        dayHeaderFormat: { weekday: "long" },
        duration: { days: 1 },
        theme: themeView("ec-resource ec-timeline ec-day-view"),
        titleFormat: {
          year: "numeric",
          month: "long",
          day: "numeric"
        }
      },
      resourceTimelineWeek: {
        buttonText: btnTextWeek,
        component: initViewComponent$1,
        displayEventEnd: false,
        duration: { weeks: 1 },
        theme: themeView("ec-resource ec-timeline ec-week-view")
      },
      resourceTimelineMonth: {
        buttonText: btnTextMonth,
        component: initMonthViewComponent,
        displayEventEnd: false,
        dayHeaderFormat: {
          weekday: "short",
          day: "numeric"
        },
        duration: { months: 1 },
        slotDuration: { days: 1 },
        theme: themeView("ec-resource ec-timeline ec-month-view"),
        titleFormat: {
          year: "numeric",
          month: "long"
        }
      },
      resourceTimelineYear: {
        buttonText: btnTextYear,
        component: initMonthViewComponent,
        displayEventEnd: false,
        dayHeaderFormat: {
          weekday: "short",
          day: "numeric"
        },
        duration: { years: 1 },
        slotDuration: { days: 1 },
        theme: themeView("ec-resource ec-timeline ec-year-view"),
        titleFormat: { year: "numeric" }
      }
    });
  },
  createParsers(parsers) {
    createTRRParsers(parsers);
  }
};
function initViewComponent$1(mainState) {
  setExtensions(mainState);
  return _initViewComponent(mainState);
}
function initMonthViewComponent(mainState) {
  return _initViewComponent(mainState, ["month"]);
}
function _initViewComponent(mainState, extraFeatures = []) {
  mainState.features = ["timeline", ...extraFeatures];
  mainState.extensions.viewResources = (resources) => {
    let { resourcesInitiallyExpanded } = mainState.options;
    return resources.filter((resource) => !isHidden(resource, resourcesInitiallyExpanded));
  };
  return View;
}
var time_grid_default = {
  createOptions(options) {
    createTRROptions(options);
    createTROptions(options);
    assign2(options.buttonText, {
      timeGridDay: "day",
      timeGridWeek: "week"
    });
    assign2(options, { view: "timeGridWeek" });
    assign2(options.views, {
      timeGridDay: {
        buttonText: btnTextDay,
        component: initViewComponent,
        dayHeaderFormat: { weekday: "long" },
        duration: { days: 1 },
        theme: themeView("ec-time-grid ec-day-view"),
        titleFormat: {
          year: "numeric",
          month: "long",
          day: "numeric"
        }
      },
      timeGridWeek: {
        buttonText: btnTextWeek,
        component: initViewComponent,
        duration: { weeks: 1 },
        theme: themeView("ec-time-grid ec-week-view")
      }
    });
  },
  createParsers(parsers) {
    createTRRParsers(parsers);
  }
};
function initViewComponent(mainState) {
  setExtensions(mainState);
  return View$1;
}
function createCalendar(target, plugins, options) {
  return mount(Calendar, {
    target,
    props: {
      plugins,
      options
    }
  });
}
function destroyCalendar(calendar) {
  return unmount(calendar);
}

// js/lib/core.js
var PLUGINS = [day_grid_default, interaction_default, list_default, resource_time_grid_default, resource_timeline_default, time_grid_default];
var CALLBACK_OPTIONS = [
  "dateClick",
  "datesSet",
  "dragConstraint",
  "eventAllUpdated",
  "eventClick",
  "eventDidMount",
  "eventDragStart",
  "eventDragStop",
  "eventDrop",
  "eventFilter",
  "eventMouseEnter",
  "eventMouseLeave",
  "eventOrder",
  "eventResize",
  "eventResizeStart",
  "eventResizeStop",
  "loading",
  "noEventsClick",
  "resizeConstraint",
  "resourceExpand",
  "resourceLabelDidMount",
  "select",
  "selectConstraint",
  "unselect",
  "viewDidMount"
];
var INTERNAL_OPTIONS = ["lv", "initialView", "plugins"];
function parseJSON(value, fallback2) {
  try {
    return value ? JSON.parse(value) : fallback2;
  } catch (_e) {
    return fallback2;
  }
}
function isPlainObject2(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function normalizeOptions(options, defaultView) {
  const source2 = isPlainObject2(options) ? options : {};
  const result = {};
  for (const [key2, value] of Object.entries(source2)) {
    if (!INTERNAL_OPTIONS.includes(key2)) result[key2] = value;
  }
  result.view = source2.view || source2.initialView || defaultView;
  if (isPlainObject2(result.headerToolbar)) {
    result.headerToolbar = normalizeToolbar(result.headerToolbar);
  }
  return result;
}
function normalizeToolbar(toolbar) {
  const { left, right, ...rest } = toolbar;
  if (left !== void 0 && rest.start === void 0) rest.start = left;
  if (right !== void 0 && rest.end === void 0) rest.end = right;
  return rest;
}
function normalizeEvents(events) {
  if (!Array.isArray(events)) return [];
  return events.flatMap((event2) => {
    if (!isPlainObject2(event2)) return [];
    if (event2.start === void 0 || event2.start === null || Number.isNaN(Date.parse(event2.start))) {
      console.warn("[calendar_component] Ignoring event with an invalid start date:", event2);
      return [];
    }
    return event2.end === void 0 || event2.end === null ? [{ ...event2, end: defaultEnd(event2) }] : [event2];
  });
}
var DATE_TIME = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?(?:\.\d+)?(Z|[+-]\d{2}:?\d{2})?$/;
function defaultEnd({ start, allDay }) {
  const match = typeof start === "string" && allDay !== true && start.match(DATE_TIME);
  if (!match) return start;
  const [, year, month, day, hours, minutes, seconds = "0", offset2 = ""] = match;
  const end = new Date(Date.UTC(+year, +month - 1, +day, +hours + 1, +minutes, +seconds));
  return end.toISOString().slice(0, 19) + offset2;
}
function resolveCallbacks(options, { allowInline = false } = {}) {
  const result = { ...options };
  for (const name of CALLBACK_OPTIONS) {
    if (!(name in result)) continue;
    const fn = resolveCallback(result[name], name, allowInline);
    if (fn) result[name] = fn;
    else delete result[name];
  }
  if (isPlainObject2(result.customButtons)) {
    result.customButtons = Object.fromEntries(
      Object.entries(result.customButtons).map(([name, button]) => {
        if (!isPlainObject2(button) || button.click === void 0) return [name, button];
        const click = resolveCallback(button.click, `customButtons.${name}.click`, allowInline);
        const { click: _click, ...rest } = button;
        return [name, click ? { ...rest, click } : rest];
      })
    );
  }
  return result;
}
function resolveCallback(callback, name, allowInline) {
  if (callback === void 0 || callback === null) return null;
  if (typeof callback === "function") return callback;
  if (typeof callback !== "string") {
    console.warn(`[calendar_component] Invalid ${name} callback:`, callback);
    return null;
  }
  if (/^[\w$.]+$/.test(callback)) return resolveGlobalFunction(callback, name);
  if (allowInline) return compileInlineCallback(callback, name);
  console.error(
    `[calendar_component] ${name} must be a global function reference (e.g. "MyApp.Calendar.${name}").`
  );
  return null;
}
function resolveGlobalFunction(path, name) {
  if (typeof window === "undefined") return null;
  let target = window;
  for (const part of path.split(".")) {
    if (part === "window") continue;
    if (!/^[a-zA-Z_$][\w$]*$/.test(part) || part === "__proto__" || part === "prototype" || part === "constructor") {
      console.warn(`[calendar_component] Invalid function reference "${path}" for ${name}`);
      return null;
    }
    target = target?.[part];
  }
  if (typeof target === "function") return target;
  console.warn(`[calendar_component] Global function "${path}" not found for ${name}`);
  return null;
}
var DANGEROUS_KEYWORDS = [
  "function",
  "eval",
  "settimeout",
  "setinterval",
  "constructor",
  "__proto__",
  "prototype",
  "import",
  "=>"
];
var MAX_INLINE_LENGTH = 200;
function compileInlineCallback(body, name) {
  const lower = body.toLowerCase();
  const keyword = DANGEROUS_KEYWORDS.find((k) => lower.includes(k));
  if (keyword) {
    console.error(`[calendar_component] SECURITY: "${keyword}" is not allowed in the ${name} callback body.`);
    return null;
  }
  if (body.length > MAX_INLINE_LENGTH) {
    console.error(
      `[calendar_component] SECURITY: ${name} callback body is longer than ${MAX_INLINE_LENGTH} characters. Use a global function reference.`
    );
    return null;
  }
  try {
    const fn = new Function("info", "dateInfo", body);
    return (info) => fn(info, info);
  } catch (e) {
    console.warn(`[calendar_component] Invalid ${name} callback body:`, e);
    return null;
  }
}

// js/static-calendar.js
var DEFAULT_VIEW = "dayGridMonth";
var SELECTOR = ".static-calendar";
function initStaticCalendar(element2) {
  if (element2._calendarInstance) return element2._calendarInstance;
  const options = normalizeOptions(parseJSON(element2.dataset.options, {}), DEFAULT_VIEW);
  const events = normalizeEvents(parseJSON(element2.dataset.events, []));
  const calendar = createCalendar(element2, PLUGINS, {
    ...resolveCallbacks(options, { allowInline: true }),
    events
  });
  element2._calendarInstance = calendar;
  return calendar;
}
function initStaticCalendars(root2 = document) {
  const instances = [];
  root2.querySelectorAll(SELECTOR).forEach((element2) => {
    if (element2._calendarInstance) return;
    try {
      instances.push(initStaticCalendar(element2));
    } catch (error) {
      console.error("[calendar_component] Failed to initialize calendar:", error, element2);
    }
  });
  return instances;
}
function getStaticCalendar(element2) {
  return element2?._calendarInstance || null;
}
function destroyStaticCalendar(element2) {
  if (!element2?._calendarInstance) return;
  destroyCalendar(element2._calendarInstance);
  element2._calendarInstance = null;
}
function updateStaticCalendarEvents(element2, events) {
  element2?._calendarInstance?.setOption("events", normalizeEvents(events));
}
if (typeof document !== "undefined") {
  const autoInit = () => initStaticCalendars();
  if (document.readyState === "complete") {
    queueMicrotask(autoInit);
  } else {
    document.addEventListener("DOMContentLoaded", autoInit, { once: true });
    window.addEventListener("load", autoInit, { once: true });
  }
}
var static_calendar_default = {
  initStaticCalendar,
  initStaticCalendars,
  getStaticCalendar,
  destroyStaticCalendar,
  updateStaticCalendarEvents
};
export {
  static_calendar_default as default,
  destroyStaticCalendar,
  getStaticCalendar,
  initStaticCalendar,
  initStaticCalendars,
  updateStaticCalendarEvents
};
/*! Bundled license information:

@event-calendar/core/dist/index.js:
  (*!
   * EventCalendar v5.17.2
   * https://github.com/vkurko/calendar
   *)
*/
