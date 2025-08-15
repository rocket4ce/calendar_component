var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __spreadValues = (a, b) => {
  for (var prop2 in b || (b = {}))
    if (__hasOwnProp.call(b, prop2))
      __defNormalProp(a, prop2, b[prop2]);
  if (__getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop2))
        __defNormalProp(a, prop2, b[prop2]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source2, exclude) => {
  var target = {};
  for (var prop2 in source2)
    if (__hasOwnProp.call(source2, prop2) && exclude.indexOf(prop2) < 0)
      target[prop2] = source2[prop2];
  if (source2 != null && __getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(source2)) {
      if (exclude.indexOf(prop2) < 0 && __propIsEnum.call(source2, prop2))
        target[prop2] = source2[prop2];
    }
  return target;
};
var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// js/calendar-hooks.js
import "phoenix_html";

// node_modules/esm-env/dev-fallback.js
var _a, _b;
var node_env = (_b = (_a = globalThis.process) == null ? void 0 : _a.env) == null ? void 0 : _b.NODE_ENV;
var dev_fallback_default = node_env && !node_env.toLowerCase().startsWith("prod");

// node_modules/svelte/src/internal/shared/utils.js
var is_array = Array.isArray;
var index_of = Array.prototype.indexOf;
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
function run(fn) {
  return fn();
}
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
function to_array(value, n) {
  if (Array.isArray(value)) {
    return value;
  }
  if (n === void 0 || !(Symbol.iterator in value)) {
    return Array.from(value);
  }
  const array = [];
  for (const element2 of value) {
    array.push(element2);
    if (array.length === n) break;
  }
  return array;
}

// node_modules/svelte/src/internal/client/constants.js
var DERIVED = 1 << 1;
var EFFECT = 1 << 2;
var RENDER_EFFECT = 1 << 3;
var BLOCK_EFFECT = 1 << 4;
var BRANCH_EFFECT = 1 << 5;
var ROOT_EFFECT = 1 << 6;
var BOUNDARY_EFFECT = 1 << 7;
var UNOWNED = 1 << 8;
var DISCONNECTED = 1 << 9;
var CLEAN = 1 << 10;
var DIRTY = 1 << 11;
var MAYBE_DIRTY = 1 << 12;
var INERT = 1 << 13;
var DESTROYED = 1 << 14;
var EFFECT_RAN = 1 << 15;
var EFFECT_TRANSPARENT = 1 << 16;
var INSPECT_EFFECT = 1 << 17;
var HEAD_EFFECT = 1 << 18;
var EFFECT_PRESERVED = 1 << 19;
var USER_EFFECT = 1 << 20;
var REACTION_IS_UPDATING = 1 << 21;
var ASYNC = 1 << 22;
var ERROR_VALUE = 1 << 23;
var STATE_SYMBOL = Symbol("$state");
var LEGACY_PROPS = Symbol("legacy props");
var LOADING_ATTR_SYMBOL = Symbol("");
var PROXY_PATH_SYMBOL = Symbol("proxy path");
var STALE_REACTION = new class StaleReactionError extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "StaleReactionError");
    __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

// node_modules/svelte/src/internal/shared/errors.js
function await_outside_boundary() {
  if (dev_fallback_default) {
    const error = new Error(`await_outside_boundary
Cannot await outside a \`<svelte:boundary>\` with a \`pending\` snippet
https://svelte.dev/e/await_outside_boundary`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/await_outside_boundary`);
  }
}
function lifecycle_outside_component(name) {
  if (dev_fallback_default) {
    const error = new Error(`lifecycle_outside_component
\`${name}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}

// node_modules/svelte/src/internal/client/errors.js
function async_derived_orphan() {
  if (dev_fallback_default) {
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
  if (dev_fallback_default) {
    const error = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/derived_references_self`);
  }
}
function effect_in_teardown(rune) {
  if (dev_fallback_default) {
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
  if (dev_fallback_default) {
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
  if (dev_fallback_default) {
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
  if (dev_fallback_default) {
    const error = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function flush_sync_in_effect() {
  if (dev_fallback_default) {
    const error = new Error(`flush_sync_in_effect
Cannot use \`flushSync\` inside an effect
https://svelte.dev/e/flush_sync_in_effect`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/flush_sync_in_effect`);
  }
}
function hydration_failed() {
  if (dev_fallback_default) {
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
  if (dev_fallback_default) {
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
  if (dev_fallback_default) {
    const error = new Error(`props_invalid_value
Cannot do \`bind:${key2}={undefined}\` when \`${key2}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/props_invalid_value`);
  }
}
function rune_outside_svelte(rune) {
  if (dev_fallback_default) {
    const error = new Error(`rune_outside_svelte
The \`${rune}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/rune_outside_svelte`);
  }
}
function set_context_after_init() {
  if (dev_fallback_default) {
    const error = new Error(`set_context_after_init
\`setContext\` must be called when a component first initializes, not in a subsequent effect or after an \`await\` expression
https://svelte.dev/e/set_context_after_init`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/set_context_after_init`);
  }
}
function state_descriptors_fixed() {
  if (dev_fallback_default) {
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
  if (dev_fallback_default) {
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
  if (dev_fallback_default) {
    const error = new Error(`state_unsafe_mutation
Updating state inside \`$derived(...)\`, \`$inspect(...)\` or a template expression is forbidden. If the value should not be reactive, declare it without \`$state\`
https://svelte.dev/e/state_unsafe_mutation`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}

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
var HYDRATION_END = "]";
var HYDRATION_ERROR = {};
var ELEMENT_PRESERVE_ATTRIBUTE_CASE = 1 << 1;
var UNINITIALIZED = Symbol();
var FILENAME = Symbol("filename");
var HMR = Symbol("hmr");
var NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";

// node_modules/svelte/src/internal/client/warnings.js
var bold = "font-weight: bold";
var normal = "font-weight: normal";
function await_reactivity_loss(name) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] await_reactivity_loss
%cDetected reactivity loss when reading \`${name}\`. This happens when state is read in an async function after an earlier \`await\`
https://svelte.dev/e/await_reactivity_loss`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/await_reactivity_loss`);
  }
}
function await_waterfall(name, location) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] await_waterfall
%cAn async derived, \`${name}\` (${location}) was not read immediately after it resolved. This often indicates an unnecessary waterfall, which can slow down your app
https://svelte.dev/e/await_waterfall`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/await_waterfall`);
  }
}
function hydration_attribute_changed(attribute, html2, value) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] hydration_attribute_changed
%cThe \`${attribute}\` attribute on \`${html2}\` changed its value between server and client renders. The client value, \`${value}\`, will be ignored in favour of the server value
https://svelte.dev/e/hydration_attribute_changed`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/hydration_attribute_changed`);
  }
}
function hydration_mismatch(location) {
  if (dev_fallback_default) {
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
  if (dev_fallback_default) {
    console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/lifecycle_double_unmount`);
  }
}
function state_proxy_equality_mismatch(operator) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/state_proxy_equality_mismatch`);
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
  return set_hydrate_node(
    /** @type {TemplateNode} */
    get_next_sibling(hydrate_node)
  );
}
function reset(node) {
  if (!hydrating) return;
  if (get_next_sibling(hydrate_node) !== null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  hydrate_node = node;
}
function remove_nodes() {
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
      } else if (data === HYDRATION_START || data === HYDRATION_START_ELSE) {
        depth += 1;
      }
    }
    var next2 = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    node.remove();
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

// node_modules/svelte/src/internal/flags/index.js
var async_mode_flag = false;
var legacy_mode_flag = false;
var tracing_mode_flag = false;
function enable_legacy_mode_flag() {
  legacy_mode_flag = true;
}

// node_modules/svelte/src/internal/client/dev/tracing.js
var tracing_expressions = null;
function get_stack(label2) {
  let error = Error();
  const stack2 = error.stack;
  if (!stack2) return null;
  const lines = stack2.split("\n");
  const new_lines = ["\n"];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line === "Error") {
      continue;
    }
    if (line.includes("validate_each_keys")) {
      return null;
    }
    if (line.includes("svelte/src/internal")) {
      continue;
    }
    new_lines.push(line);
  }
  if (new_lines.length === 1) {
    return null;
  }
  define_property(error, "stack", {
    value: new_lines.join("\n")
  });
  define_property(error, "name", {
    // 'Error' suffix is required for stack traces to be rendered properly
    value: `${label2}Error`
  });
  return (
    /** @type {Error & { stack: string }} */
    error
  );
}
function tag(source2, label2) {
  source2.label = label2;
  tag_proxy(source2.v, label2);
  return source2;
}
function tag_proxy(value, label2) {
  var _a3;
  (_a3 = value == null ? void 0 : value[PROXY_PATH_SYMBOL]) == null ? void 0 : _a3.call(value, label2);
  return value;
}
function label(value) {
  if (typeof value === "symbol") return `Symbol(${value.description})`;
  if (typeof value === "function") return "<function>";
  if (typeof value === "object" && value) return "<object>";
  return String(value);
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
  const context_map = get_or_init_context_map("getContext");
  const result = (
    /** @type {T} */
    context_map.get(key2)
  );
  return result;
}
function setContext(key2, context) {
  const context_map = get_or_init_context_map("setContext");
  if (async_mode_flag) {
    var flags2 = (
      /** @type {Effect} */
      active_effect.f
    );
    var valid = !active_reaction && (flags2 & BRANCH_EFFECT) !== 0 && (flags2 & EFFECT_RAN) === 0;
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
    c: null,
    e: null,
    s: props,
    x: null,
    l: legacy_mode_flag && !runes ? { s: null, u: null, $: [] } : null
  };
  if (dev_fallback_default) {
    component_context.function = fn;
    dev_current_component_function = fn;
  }
}
function pop(component2) {
  var _a3;
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
  component_context = context.p;
  if (dev_fallback_default) {
    dev_current_component_function = (_a3 = component_context == null ? void 0 : component_context.function) != null ? _a3 : null;
  }
  return component2 != null ? component2 : (
    /** @type {T} */
    {}
  );
}
function is_runes() {
  return !legacy_mode_flag || component_context !== null && component_context.l === null;
}
function get_or_init_context_map(name) {
  var _a3;
  if (component_context === null) {
    lifecycle_outside_component(name);
  }
  return (_a3 = component_context.c) != null ? _a3 : component_context.c = new Map(get_parent_context(component_context) || void 0);
}
function get_parent_context(component_context2) {
  let parent = component_context2.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}

// node_modules/svelte/src/internal/client/error-handling.js
var adjustments = /* @__PURE__ */ new WeakMap();
function handle_error(error) {
  var effect2 = active_effect;
  if (effect2 === null) {
    active_reaction.f |= ERROR_VALUE;
    return error;
  }
  if (dev_fallback_default && error instanceof Error && !adjustments.has(error)) {
    adjustments.set(error, get_adjustments(error, effect2));
  }
  if ((effect2.f & EFFECT_RAN) === 0) {
    if ((effect2.f & BOUNDARY_EFFECT) === 0) {
      if (!effect2.parent && error instanceof Error) {
        apply_adjustments(error);
      }
      throw error;
    }
    effect2.b.error(error);
  } else {
    invoke_error_boundary(error, effect2);
  }
}
function invoke_error_boundary(error, effect2) {
  while (effect2 !== null) {
    if ((effect2.f & BOUNDARY_EFFECT) !== 0) {
      try {
        effect2.b.error(error);
        return;
      } catch (e) {
        error = e;
      }
    }
    effect2 = effect2.parent;
  }
  if (error instanceof Error) {
    apply_adjustments(error);
  }
  throw error;
}
function get_adjustments(error, effect2) {
  var _a3, _b3, _c2;
  const message_descriptor = get_descriptor(error, "message");
  if (message_descriptor && !message_descriptor.configurable) return;
  var indent = is_firefox ? "  " : "	";
  var component_stack = `
${indent}in ${((_a3 = effect2.fn) == null ? void 0 : _a3.name) || "<unknown>"}`;
  var context = effect2.ctx;
  while (context !== null) {
    component_stack += `
${indent}in ${(_b3 = context.function) == null ? void 0 : _b3[FILENAME].split("/").pop()}`;
    context = context.p;
  }
  return {
    message: error.message + `
${component_stack}
`,
    stack: (_c2 = error.stack) == null ? void 0 : _c2.split("\n").filter((line) => !line.includes("svelte/src/internal")).join("\n")
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

// node_modules/svelte/src/internal/client/dom/task.js
var micro_tasks = [];
var idle_tasks = [];
function run_micro_tasks() {
  var tasks2 = micro_tasks;
  micro_tasks = [];
  run_all(tasks2);
}
function run_idle_tasks() {
  var tasks2 = idle_tasks;
  idle_tasks = [];
  run_all(tasks2);
}
function queue_micro_task(fn) {
  if (micro_tasks.length === 0) {
    queueMicrotask(run_micro_tasks);
  }
  micro_tasks.push(fn);
}
function flush_tasks() {
  if (micro_tasks.length > 0) {
    run_micro_tasks();
  }
  if (idle_tasks.length > 0) {
    run_idle_tasks();
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED | BOUNDARY_EFFECT;
function get_pending_boundary() {
  var boundary2 = (
    /** @type {Effect} */
    active_effect.b
  );
  while (boundary2 !== null && !boundary2.has_pending_snippet()) {
    boundary2 = boundary2.parent;
  }
  if (boundary2 === null) {
    await_outside_boundary();
  }
  return boundary2;
}

// node_modules/svelte/src/internal/client/reactivity/deriveds.js
var current_async_effect = null;
function set_from_async_derived(v) {
  current_async_effect = v;
}
var recent_async_deriveds = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function derived(fn) {
  var flags2 = DERIVED | DIRTY;
  var parent_derived = active_reaction !== null && (active_reaction.f & DERIVED) !== 0 ? (
    /** @type {Derived} */
    active_reaction
  ) : null;
  if (active_effect === null || parent_derived !== null && (parent_derived.f & UNOWNED) !== 0) {
    flags2 |= UNOWNED;
  } else {
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
    parent: parent_derived != null ? parent_derived : active_effect,
    ac: null
  };
  if (dev_fallback_default && tracing_mode_flag) {
    signal.created = get_stack("CreatedAt");
  }
  return signal;
}
// @__NO_SIDE_EFFECTS__
function async_derived(fn, location) {
  let parent = (
    /** @type {Effect | null} */
    active_effect
  );
  if (parent === null) {
    async_derived_orphan();
  }
  var boundary2 = (
    /** @type {Boundary} */
    parent.b
  );
  var promise = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  );
  var signal = source(
    /** @type {V} */
    UNINITIALIZED
  );
  var prev = null;
  var should_suspend = !active_reaction;
  async_effect(() => {
    var _a3;
    if (dev_fallback_default) current_async_effect = active_effect;
    try {
      var p = fn();
    } catch (error) {
      p = Promise.reject(error);
    }
    if (dev_fallback_default) current_async_effect = null;
    var r2 = () => p;
    promise = (_a3 = prev == null ? void 0 : prev.then(r2, r2)) != null ? _a3 : Promise.resolve(p);
    prev = promise;
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    var pending2 = boundary2.pending;
    if (should_suspend) {
      boundary2.update_pending_count(1);
      if (!pending2) batch.increment();
    }
    const handler = (value, error = void 0) => {
      prev = null;
      current_async_effect = null;
      if (!pending2) batch.activate();
      if (error) {
        if (error !== STALE_REACTION) {
          signal.f |= ERROR_VALUE;
          internal_set(signal, error);
        }
      } else {
        if ((signal.f & ERROR_VALUE) !== 0) {
          signal.f ^= ERROR_VALUE;
        }
        internal_set(signal, value);
        if (dev_fallback_default && location !== void 0) {
          recent_async_deriveds.add(signal);
          setTimeout(() => {
            if (recent_async_deriveds.has(signal)) {
              await_waterfall(
                /** @type {string} */
                signal.label,
                location
              );
              recent_async_deriveds.delete(signal);
            }
          });
        }
      }
      if (should_suspend) {
        boundary2.update_pending_count(-1);
        if (!pending2) batch.decrement();
      }
      unset_context();
    };
    promise.then(handler, (e) => handler(null, e || "unknown"));
    if (batch) {
      return () => {
        queueMicrotask(() => batch.neuter());
      };
    }
  });
  if (dev_fallback_default) {
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
  push_reaction_value(d);
  return d;
}
// @__NO_SIDE_EFFECTS__
function derived_safe_equal(fn) {
  const signal = /* @__PURE__ */ derived(fn);
  signal.equals = safe_equals;
  return signal;
}
function destroy_derived_effects(derived3) {
  var effects = derived3.effects;
  if (effects !== null) {
    derived3.effects = null;
    for (var i = 0; i < effects.length; i += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i]
      );
    }
  }
}
var stack = [];
function get_derived_parent_effect(derived3) {
  var parent = derived3.parent;
  while (parent !== null) {
    if ((parent.f & DERIVED) === 0) {
      return (
        /** @type {Effect} */
        parent
      );
    }
    parent = parent.parent;
  }
  return null;
}
function execute_derived(derived3) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(get_derived_parent_effect(derived3));
  if (dev_fallback_default) {
    let prev_inspect_effects = inspect_effects;
    set_inspect_effects(/* @__PURE__ */ new Set());
    try {
      if (stack.includes(derived3)) {
        derived_references_self();
      }
      stack.push(derived3);
      destroy_derived_effects(derived3);
      value = update_reaction(derived3);
    } finally {
      set_active_effect(prev_active_effect);
      set_inspect_effects(prev_inspect_effects);
      stack.pop();
    }
  } else {
    try {
      destroy_derived_effects(derived3);
      value = update_reaction(derived3);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived3) {
  var value = execute_derived(derived3);
  if (!derived3.equals(value)) {
    derived3.v = value;
    derived3.wv = increment_write_version();
  }
  if (is_destroying_effect) {
    return;
  }
  if (batch_deriveds !== null) {
    batch_deriveds.set(derived3, derived3.v);
  } else {
    var status = (skip_reaction || (derived3.f & UNOWNED) !== 0) && derived3.deps !== null ? MAYBE_DIRTY : CLEAN;
    set_signal_status(derived3, status);
  }
}

// node_modules/svelte/src/internal/client/reactivity/async.js
function flatten(sync, async2, fn) {
  const d = is_runes() ? derived : derived_safe_equal;
  if (async2.length === 0) {
    fn(sync.map(d));
    return;
  }
  var batch = current_batch;
  var parent = (
    /** @type {Effect} */
    active_effect
  );
  var restore = capture();
  var boundary2 = get_pending_boundary();
  Promise.all(async2.map((expression) => async_derived(expression))).then((result) => {
    batch == null ? void 0 : batch.activate();
    restore();
    try {
      fn([...sync.map(d), ...result]);
    } catch (error) {
      if ((parent.f & DESTROYED) === 0) {
        invoke_error_boundary(error, parent);
      }
    }
    batch == null ? void 0 : batch.deactivate();
    unset_context();
  }).catch((error) => {
    boundary2.error(error);
  });
}
function capture() {
  var previous_effect = active_effect;
  var previous_reaction = active_reaction;
  var previous_component_context = component_context;
  return function restore() {
    set_active_effect(previous_effect);
    set_active_reaction(previous_reaction);
    set_component_context(previous_component_context);
    if (dev_fallback_default) {
      set_from_async_derived(null);
    }
  };
}
function unset_context() {
  set_active_effect(null);
  set_active_reaction(null);
  set_component_context(null);
  if (dev_fallback_default) set_from_async_derived(null);
}

// node_modules/svelte/src/internal/client/reactivity/batch.js
var batches = /* @__PURE__ */ new Set();
var current_batch = null;
var previous_batch = null;
var batch_deriveds = null;
var effect_pending_updates = /* @__PURE__ */ new Set();
var tasks = [];
function dequeue() {
  const task2 = (
    /** @type {() => void} */
    tasks.shift()
  );
  if (tasks.length > 0) {
    queueMicrotask(dequeue);
  }
  task2();
}
var queued_root_effects = [];
var last_scheduled_effect = null;
var is_flushing = false;
var is_flushing_sync = false;
var _previous, _callbacks, _pending, _deferred, _neutered, _async_effects, _boundary_async_effects, _render_effects, _effects, _block_effects, _dirty_effects, _maybe_dirty_effects, _Batch_instances, traverse_effect_tree_fn, defer_effects_fn, commit_fn;
var _Batch = class _Batch {
  constructor() {
    __privateAdd(this, _Batch_instances);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    __publicField(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    __privateAdd(this, _previous, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    __privateAdd(this, _callbacks, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    __privateAdd(this, _pending, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    __privateAdd(this, _deferred, null);
    /**
     * True if an async effect inside this batch resolved and
     * its parent branch was already deleted
     */
    __privateAdd(this, _neutered, false);
    /**
     * Async effects (created inside `async_derived`) encountered during processing.
     * These run after the rest of the batch has updated, since they should
     * always have the latest values
     * @type {Effect[]}
     */
    __privateAdd(this, _async_effects, []);
    /**
     * The same as `#async_effects`, but for effects inside a newly-created
     * `<svelte:boundary>` — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    __privateAdd(this, _boundary_async_effects, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    __privateAdd(this, _render_effects, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    __privateAdd(this, _effects, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    __privateAdd(this, _block_effects, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    __privateAdd(this, _dirty_effects, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    __privateAdd(this, _maybe_dirty_effects, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    __publicField(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(root_effects) {
    var _a3;
    queued_root_effects = [];
    previous_batch = null;
    var current_values = null;
    if (batches.size > 1) {
      current_values = /* @__PURE__ */ new Map();
      batch_deriveds = /* @__PURE__ */ new Map();
      for (const [source2, current] of this.current) {
        current_values.set(source2, { v: source2.v, wv: source2.wv });
        source2.v = current;
      }
      for (const batch of batches) {
        if (batch === this) continue;
        for (const [source2, previous] of __privateGet(batch, _previous)) {
          if (!current_values.has(source2)) {
            current_values.set(source2, { v: source2.v, wv: source2.wv });
            source2.v = previous;
          }
        }
      }
    }
    for (const root2 of root_effects) {
      __privateMethod(this, _Batch_instances, traverse_effect_tree_fn).call(this, root2);
    }
    if (__privateGet(this, _async_effects).length === 0 && __privateGet(this, _pending) === 0) {
      __privateMethod(this, _Batch_instances, commit_fn).call(this);
      var render_effects = __privateGet(this, _render_effects);
      var effects = __privateGet(this, _effects);
      __privateSet(this, _render_effects, []);
      __privateSet(this, _effects, []);
      __privateSet(this, _block_effects, []);
      previous_batch = current_batch;
      current_batch = null;
      flush_queued_effects(render_effects);
      flush_queued_effects(effects);
      if (current_batch === null) {
        current_batch = this;
      } else {
        batches.delete(this);
      }
      (_a3 = __privateGet(this, _deferred)) == null ? void 0 : _a3.resolve();
    } else {
      __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, __privateGet(this, _render_effects));
      __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, __privateGet(this, _effects));
      __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, __privateGet(this, _block_effects));
    }
    if (current_values) {
      for (const [source2, { v, wv }] of current_values) {
        if (source2.wv <= wv) {
          source2.v = v;
        }
      }
      batch_deriveds = null;
    }
    for (const effect2 of __privateGet(this, _async_effects)) {
      update_effect(effect2);
    }
    for (const effect2 of __privateGet(this, _boundary_async_effects)) {
      update_effect(effect2);
    }
    __privateSet(this, _async_effects, []);
    __privateSet(this, _boundary_async_effects, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(source2, value) {
    if (!__privateGet(this, _previous).has(source2)) {
      __privateGet(this, _previous).set(source2, value);
    }
    this.current.set(source2, source2.v);
  }
  activate() {
    current_batch = this;
  }
  deactivate() {
    current_batch = null;
    previous_batch = null;
    for (const update2 of effect_pending_updates) {
      effect_pending_updates.delete(update2);
      update2();
      if (current_batch !== null) {
        break;
      }
    }
  }
  neuter() {
    __privateSet(this, _neutered, true);
  }
  flush() {
    if (queued_root_effects.length > 0) {
      flush_effects();
    } else {
      __privateMethod(this, _Batch_instances, commit_fn).call(this);
    }
    if (current_batch !== this) {
      return;
    }
    if (__privateGet(this, _pending) === 0) {
      batches.delete(this);
    }
    this.deactivate();
  }
  increment() {
    __privateSet(this, _pending, __privateGet(this, _pending) + 1);
  }
  decrement() {
    __privateSet(this, _pending, __privateGet(this, _pending) - 1);
    if (__privateGet(this, _pending) === 0) {
      for (const e of __privateGet(this, _dirty_effects)) {
        set_signal_status(e, DIRTY);
        schedule_effect(e);
      }
      for (const e of __privateGet(this, _maybe_dirty_effects)) {
        set_signal_status(e, MAYBE_DIRTY);
        schedule_effect(e);
      }
      __privateSet(this, _render_effects, []);
      __privateSet(this, _effects, []);
      this.flush();
    } else {
      this.deactivate();
    }
  }
  /** @param {() => void} fn */
  add_callback(fn) {
    __privateGet(this, _callbacks).add(fn);
  }
  settled() {
    var _a3;
    return ((_a3 = __privateGet(this, _deferred)) != null ? _a3 : __privateSet(this, _deferred, deferred())).promise;
  }
  static ensure() {
    if (current_batch === null) {
      const batch = current_batch = new _Batch();
      batches.add(current_batch);
      if (!is_flushing_sync) {
        _Batch.enqueue(() => {
          if (current_batch !== batch) {
            return;
          }
          batch.flush();
        });
      }
    }
    return current_batch;
  }
  /** @param {() => void} task */
  static enqueue(task2) {
    if (tasks.length === 0) {
      queueMicrotask(dequeue);
    }
    tasks.unshift(task2);
  }
};
_previous = new WeakMap();
_callbacks = new WeakMap();
_pending = new WeakMap();
_deferred = new WeakMap();
_neutered = new WeakMap();
_async_effects = new WeakMap();
_boundary_async_effects = new WeakMap();
_render_effects = new WeakMap();
_effects = new WeakMap();
_block_effects = new WeakMap();
_dirty_effects = new WeakMap();
_maybe_dirty_effects = new WeakMap();
_Batch_instances = new WeakSet();
/**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
traverse_effect_tree_fn = function(root2) {
  var _a3;
  root2.f ^= CLEAN;
  var effect2 = root2.first;
  while (effect2 !== null) {
    var flags2 = effect2.f;
    var is_branch = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
    var is_skippable_branch = is_branch && (flags2 & CLEAN) !== 0;
    var skip = is_skippable_branch || (flags2 & INERT) !== 0 || this.skipped_effects.has(effect2);
    if (!skip && effect2.fn !== null) {
      if (is_branch) {
        effect2.f ^= CLEAN;
      } else if ((flags2 & CLEAN) === 0) {
        if ((flags2 & EFFECT) !== 0) {
          __privateGet(this, _effects).push(effect2);
        } else if (async_mode_flag && (flags2 & RENDER_EFFECT) !== 0) {
          __privateGet(this, _render_effects).push(effect2);
        } else if ((flags2 & ASYNC) !== 0) {
          var effects = ((_a3 = effect2.b) == null ? void 0 : _a3.pending) ? __privateGet(this, _boundary_async_effects) : __privateGet(this, _async_effects);
          effects.push(effect2);
        } else if (is_dirty(effect2)) {
          if ((effect2.f & BLOCK_EFFECT) !== 0) __privateGet(this, _block_effects).push(effect2);
          update_effect(effect2);
        }
      }
      var child2 = effect2.first;
      if (child2 !== null) {
        effect2 = child2;
        continue;
      }
    }
    var parent = effect2.parent;
    effect2 = effect2.next;
    while (effect2 === null && parent !== null) {
      effect2 = parent.next;
      parent = parent.parent;
    }
  }
};
/**
 * @param {Effect[]} effects
 */
defer_effects_fn = function(effects) {
  for (const e of effects) {
    const target = (e.f & DIRTY) !== 0 ? __privateGet(this, _dirty_effects) : __privateGet(this, _maybe_dirty_effects);
    target.push(e);
    set_signal_status(e, CLEAN);
  }
  effects.length = 0;
};
/**
 * Append and remove branches to/from the DOM
 */
commit_fn = function() {
  if (!__privateGet(this, _neutered)) {
    for (const fn of __privateGet(this, _callbacks)) {
      fn();
    }
  }
  __privateGet(this, _callbacks).clear();
};
var Batch = _Batch;
function flushSync(fn) {
  if (async_mode_flag && active_effect !== null) {
    flush_sync_in_effect();
  }
  var was_flushing_sync = is_flushing_sync;
  is_flushing_sync = true;
  try {
    var result;
    if (fn) {
      flush_effects();
      result = fn();
    }
    while (true) {
      flush_tasks();
      if (queued_root_effects.length === 0) {
        current_batch == null ? void 0 : current_batch.flush();
        if (queued_root_effects.length === 0) {
          last_scheduled_effect = null;
          return (
            /** @type {T} */
            result
          );
        }
      }
      flush_effects();
    }
  } finally {
    is_flushing_sync = was_flushing_sync;
  }
}
function flush_effects() {
  var _a3;
  var was_updating_effect = is_updating_effect;
  is_flushing = true;
  try {
    var flush_count = 0;
    set_is_updating_effect(true);
    while (queued_root_effects.length > 0) {
      var batch = Batch.ensure();
      if (flush_count++ > 1e3) {
        if (dev_fallback_default) {
          var updates = /* @__PURE__ */ new Map();
          for (const source2 of batch.current.keys()) {
            for (const [stack2, update2] of (_a3 = source2.updated) != null ? _a3 : []) {
              var entry = updates.get(stack2);
              if (!entry) {
                entry = { error: update2.error, count: 0 };
                updates.set(stack2, entry);
              }
              entry.count += update2.count;
            }
          }
          for (const update2 of updates.values()) {
            console.error(update2.error);
          }
        }
        infinite_loop_guard();
      }
      batch.process(queued_root_effects);
      old_values.clear();
    }
  } finally {
    is_flushing = false;
    set_is_updating_effect(was_updating_effect);
    last_scheduled_effect = null;
  }
}
function infinite_loop_guard() {
  try {
    effect_update_depth_exceeded();
  } catch (error) {
    if (dev_fallback_default) {
      define_property(error, "stack", { value: "" });
    }
    invoke_error_boundary(error, last_scheduled_effect);
  }
}
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  var i = 0;
  while (i < length) {
    var effect2 = effects[i++];
    if ((effect2.f & (DESTROYED | INERT)) === 0 && is_dirty(effect2)) {
      var n = current_batch ? current_batch.current.size : 0;
      update_effect(effect2);
      if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
        if (effect2.teardown === null && effect2.ac === null) {
          unlink_effect(effect2);
        } else {
          effect2.fn = null;
        }
      }
      if (current_batch !== null && current_batch.current.size > n && (effect2.f & USER_EFFECT) !== 0) {
        break;
      }
    }
  }
  while (i < length) {
    schedule_effect(effects[i++]);
  }
}
function schedule_effect(signal) {
  var effect2 = last_scheduled_effect = signal;
  while (effect2.parent !== null) {
    effect2 = effect2.parent;
    var flags2 = effect2.f;
    if (is_flushing && effect2 === active_effect && (flags2 & BLOCK_EFFECT) !== 0) {
      return;
    }
    if ((flags2 & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
      if ((flags2 & CLEAN) === 0) return;
      effect2.f ^= CLEAN;
    }
  }
  queued_root_effects.push(effect2);
}

// node_modules/svelte/src/internal/client/reactivity/sources.js
var inspect_effects = /* @__PURE__ */ new Set();
var old_values = /* @__PURE__ */ new Map();
function set_inspect_effects(v) {
  inspect_effects = v;
}
var inspect_effects_deferred = false;
function set_inspect_effects_deferred() {
  inspect_effects_deferred = true;
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
  if (dev_fallback_default && tracing_mode_flag) {
    signal.created = stack2 != null ? stack2 : get_stack("CreatedAt");
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
  var _a3, _b3;
  const s = source(initial_value);
  if (!immutable) {
    s.equals = safe_equals;
  }
  if (legacy_mode_flag && trackable && component_context !== null && component_context.l !== null) {
    ((_b3 = (_a3 = component_context.l).s) != null ? _b3 : _a3.s = []).push(s);
  }
  return s;
}
function set(source2, value, should_proxy = false) {
  var _a3;
  if (active_reaction !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!untracking || (active_reaction.f & INSPECT_EFFECT) !== 0) && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | INSPECT_EFFECT)) !== 0 && !((_a3 = current_sources) == null ? void 0 : _a3.includes(source2))) {
    state_unsafe_mutation();
  }
  let new_value = should_proxy ? proxy(value) : value;
  if (dev_fallback_default) {
    tag_proxy(
      new_value,
      /** @type {string} */
      source2.label
    );
  }
  return internal_set(source2, new_value);
}
function internal_set(source2, value) {
  var _a3;
  if (!source2.equals(value)) {
    var old_value = source2.v;
    if (is_destroying_effect) {
      old_values.set(source2, value);
    } else {
      old_values.set(source2, old_value);
    }
    source2.v = value;
    var batch = Batch.ensure();
    batch.capture(source2, old_value);
    if (dev_fallback_default) {
      if (tracing_mode_flag || active_effect !== null) {
        const error = get_stack("UpdatedAt");
        if (error !== null) {
          (_a3 = source2.updated) != null ? _a3 : source2.updated = /* @__PURE__ */ new Map();
          let entry = source2.updated.get(error.stack);
          if (!entry) {
            entry = { error, count: 0 };
            source2.updated.set(error.stack, entry);
          }
          entry.count++;
        }
      }
      if (active_effect !== null) {
        source2.set_during_effect = true;
      }
    }
    if ((source2.f & DERIVED) !== 0) {
      if ((source2.f & DIRTY) !== 0) {
        execute_derived(
          /** @type {Derived} */
          source2
        );
      }
      set_signal_status(source2, (source2.f & UNOWNED) === 0 ? CLEAN : MAYBE_DIRTY);
    }
    source2.wv = increment_write_version();
    mark_reactions(source2, DIRTY);
    if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
    if (dev_fallback_default && inspect_effects.size > 0 && !inspect_effects_deferred) {
      flush_inspect_effects();
    }
  }
  return value;
}
function flush_inspect_effects() {
  inspect_effects_deferred = false;
  const inspects = Array.from(inspect_effects);
  for (const effect2 of inspects) {
    if ((effect2.f & CLEAN) !== 0) {
      set_signal_status(effect2, MAYBE_DIRTY);
    }
    if (is_dirty(effect2)) {
      update_effect(effect2);
    }
  }
  inspect_effects.clear();
}
function increment(source2) {
  set(source2, source2.v + 1);
}
function mark_reactions(signal, status) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var runes = is_runes();
  var length = reactions.length;
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags2 = reaction.f;
    if (!runes && reaction === active_effect) continue;
    if (dev_fallback_default && (flags2 & INSPECT_EFFECT) !== 0) {
      inspect_effects.add(reaction);
      continue;
    }
    var not_dirty = (flags2 & DIRTY) === 0;
    if (not_dirty) {
      set_signal_status(reaction, status);
    }
    if ((flags2 & DERIVED) !== 0) {
      mark_reactions(
        /** @type {Derived} */
        reaction,
        MAYBE_DIRTY
      );
    } else if (not_dirty) {
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}

// node_modules/svelte/src/internal/client/proxy.js
var regex_is_valid_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function proxy(value) {
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
    return value;
  }
  const prototype = get_prototype_of(value);
  if (prototype !== object_prototype && prototype !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = state(0);
  var stack2 = dev_fallback_default && tracing_mode_flag ? get_stack("CreatedAt") : null;
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
    if (dev_fallback_default) {
      value = /** @type {any} */
      inspectable_array(
        /** @type {any[]} */
        value
      );
    }
  }
  var path = "";
  function update_path(new_path) {
    path = new_path;
    tag(version, `${path} version`);
    for (const [prop2, source2] of sources) {
      tag(source2, get_label(path, prop2));
    }
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
          s = with_parent(() => {
            var s2 = state(descriptor.value, stack2);
            sources.set(prop2, s2);
            if (dev_fallback_default && typeof prop2 === "string") {
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
            if (dev_fallback_default) {
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
        var _a3;
        if (prop2 === STATE_SYMBOL) {
          return value;
        }
        if (dev_fallback_default && prop2 === PROXY_PATH_SYMBOL) {
          return update_path;
        }
        var s = sources.get(prop2);
        var exists = prop2 in target;
        if (s === void 0 && (!exists || ((_a3 = get_descriptor(target, prop2)) == null ? void 0 : _a3.writable))) {
          s = with_parent(() => {
            var p = proxy(exists ? target[prop2] : UNINITIALIZED);
            var s2 = state(p, stack2);
            if (dev_fallback_default) {
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
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor && "value" in descriptor) {
          var s = sources.get(prop2);
          if (s) descriptor.value = get(s);
        } else if (descriptor === void 0) {
          var source2 = sources.get(prop2);
          var value2 = source2 == null ? void 0 : source2.v;
          if (source2 !== void 0 && value2 !== UNINITIALIZED) {
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
        var _a3;
        if (prop2 === STATE_SYMBOL) {
          return true;
        }
        var s = sources.get(prop2);
        var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
        if (s !== void 0 || active_effect !== null && (!has || ((_a3 = get_descriptor(target, prop2)) == null ? void 0 : _a3.writable))) {
          if (s === void 0) {
            s = with_parent(() => {
              var p = has ? proxy(target[prop2]) : UNINITIALIZED;
              var s2 = state(p, stack2);
              if (dev_fallback_default) {
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
        var _a3;
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
              if (dev_fallback_default) {
                tag(other_s, get_label(path, i));
              }
            }
          }
        }
        if (s === void 0) {
          if (!has || ((_a3 = get_descriptor(target, prop2)) == null ? void 0 : _a3.writable)) {
            s = with_parent(() => state(void 0, stack2));
            set(s, proxy(value2));
            sources.set(prop2, s);
            if (dev_fallback_default) {
              tag(s, get_label(path, prop2));
            }
          }
        } else {
          has = s.v !== UNINITIALIZED;
          var p = with_parent(() => proxy(value2));
          set(s, p);
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor == null ? void 0 : descriptor.set) {
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
  var _a3;
  if (typeof prop2 === "symbol") return `${path}[Symbol(${(_a3 = prop2.description) != null ? _a3 : ""})]`;
  if (regex_is_valid_identifier.test(prop2)) return `${path}.${prop2}`;
  return /^\d+$/.test(prop2) ? `${path}[${prop2}]` : `${path}['${prop2}']`;
}
function get_proxied_value(value) {
  try {
    if (value !== null && typeof value === "object" && STATE_SYMBOL in value) {
      return value[STATE_SYMBOL];
    }
  } catch (e) {
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
        set_inspect_effects_deferred();
        var result = value.apply(this, args);
        flush_inspect_effects();
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
  const { indexOf, lastIndexOf, includes } = array_prototype2;
  array_prototype2.indexOf = function(item, from_index) {
    const index2 = indexOf.call(this, item, from_index);
    if (index2 === -1) {
      for (let i = from_index != null ? from_index : 0; i < this.length; i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.indexOf(...)");
          break;
        }
      }
    }
    return index2;
  };
  array_prototype2.lastIndexOf = function(item, from_index) {
    const index2 = lastIndexOf.call(this, item, from_index != null ? from_index : this.length - 1);
    if (index2 === -1) {
      for (let i = 0; i <= (from_index != null ? from_index : this.length - 1); i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.lastIndexOf(...)");
          break;
        }
      }
    }
    return index2;
  };
  array_prototype2.includes = function(item, from_index) {
    const has = includes.call(this, item, from_index);
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
    array_prototype2.includes = includes;
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
    element_prototype.__click = void 0;
    element_prototype.__className = void 0;
    element_prototype.__attributes = null;
    element_prototype.__style = void 0;
    element_prototype.__e = void 0;
  }
  if (is_extensible(text_prototype)) {
    text_prototype.__t = void 0;
  }
  if (dev_fallback_default) {
    element_prototype.__svelte_meta = null;
    init_array_prototype_warnings();
  }
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return first_child_getter.call(node);
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return next_sibling_getter.call(node);
}
function child(node, is_text) {
  if (!hydrating) {
    return /* @__PURE__ */ get_first_child(node);
  }
  var child2 = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ get_first_child(hydrate_node)
  );
  if (child2 === null) {
    child2 = hydrate_node.appendChild(create_text());
  } else if (is_text && child2.nodeType !== TEXT_NODE) {
    var text2 = create_text();
    child2 == null ? void 0 : child2.before(text2);
    set_hydrate_node(text2);
    return text2;
  }
  set_hydrate_node(child2);
  return child2;
}
function first_child(fragment, is_text) {
  var _a3, _b3;
  if (!hydrating) {
    var first = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ get_first_child(
        /** @type {Node} */
        fragment
      )
    );
    if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
    return first;
  }
  if (is_text && ((_a3 = hydrate_node) == null ? void 0 : _a3.nodeType) !== TEXT_NODE) {
    var text2 = create_text();
    (_b3 = hydrate_node) == null ? void 0 : _b3.before(text2);
    set_hydrate_node(text2);
    return text2;
  }
  return hydrate_node;
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
  if (is_text && (next_sibling == null ? void 0 : next_sibling.nodeType) !== TEXT_NODE) {
    var text2 = create_text();
    if (next_sibling === null) {
      last_sibling == null ? void 0 : last_sibling.after(text2);
    } else {
      next_sibling.before(text2);
    }
    set_hydrate_node(text2);
    return text2;
  }
  set_hydrate_node(next_sibling);
  return (
    /** @type {TemplateNode} */
    next_sibling
  );
}
function clear_text_content(node) {
  node.textContent = "";
}
function should_defer_append() {
  if (!async_mode_flag) return false;
  var flags2 = (
    /** @type {Effect} */
    active_effect.f
  );
  return (flags2 & EFFECT_RAN) !== 0;
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

// node_modules/svelte/src/internal/client/reactivity/effects.js
function validate_effect(rune) {
  if (active_effect === null && active_reaction === null) {
    effect_orphan(rune);
  }
  if (active_reaction !== null && (active_reaction.f & UNOWNED) !== 0 && active_effect === null) {
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
function create_effect(type, fn, sync, push2 = true) {
  var _a3;
  var parent = active_effect;
  if (dev_fallback_default) {
    while (parent !== null && (parent.f & INSPECT_EFFECT) !== 0) {
      parent = parent.parent;
    }
  }
  if (parent !== null && (parent.f & INERT) !== 0) {
    type |= INERT;
  }
  var effect2 = {
    ctx: component_context,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: type | DIRTY,
    first: null,
    fn,
    last: null,
    next: null,
    parent,
    b: parent && parent.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (dev_fallback_default) {
    effect2.component_function = dev_current_component_function;
  }
  if (sync) {
    try {
      update_effect(effect2);
      effect2.f |= EFFECT_RAN;
    } catch (e) {
      destroy_effect(effect2);
      throw e;
    }
  } else if (fn !== null) {
    schedule_effect(effect2);
  }
  var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & EFFECT_PRESERVED) === 0;
  if (!inert && push2) {
    if (parent !== null) {
      push_effect(effect2, parent);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0 && (type & ROOT_EFFECT) === 0) {
      var derived3 = (
        /** @type {Derived} */
        active_reaction
      );
      ((_a3 = derived3.effects) != null ? _a3 : derived3.effects = []).push(effect2);
    }
  }
  return effect2;
}
function teardown(fn) {
  const effect2 = create_effect(RENDER_EFFECT, null, false);
  set_signal_status(effect2, CLEAN);
  effect2.teardown = fn;
  return effect2;
}
function user_effect(fn) {
  var _a3;
  validate_effect("$effect");
  if (dev_fallback_default) {
    define_property(fn, "name", {
      value: "$effect"
    });
  }
  var flags2 = (
    /** @type {Effect} */
    active_effect.f
  );
  var defer = !active_reaction && (flags2 & BRANCH_EFFECT) !== 0 && (flags2 & EFFECT_RAN) === 0;
  if (defer) {
    var context = (
      /** @type {ComponentContext} */
      component_context
    );
    ((_a3 = context.e) != null ? _a3 : context.e = []).push(fn);
  } else {
    return create_user_effect(fn);
  }
}
function create_user_effect(fn) {
  return create_effect(EFFECT | USER_EFFECT, fn, false);
}
function user_pre_effect(fn) {
  validate_effect("$effect.pre");
  if (dev_fallback_default) {
    define_property(fn, "name", {
      value: "$effect.pre"
    });
  }
  return create_effect(RENDER_EFFECT | USER_EFFECT, fn, true);
}
function effect_root(fn) {
  Batch.ensure();
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
  return () => {
    destroy_effect(effect2);
  };
}
function component_root(fn) {
  Batch.ensure();
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
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
  return create_effect(EFFECT, fn, false);
}
function legacy_pre_effect(deps, fn) {
  var context = (
    /** @type {ComponentContextLegacy} */
    component_context
  );
  var token = { effect: null, ran: false, deps };
  context.l.$.push(token);
  token.effect = render_effect(() => {
    deps();
    if (token.ran) return;
    token.ran = true;
    untrack(fn);
  });
}
function legacy_pre_effect_reset() {
  var context = (
    /** @type {ComponentContextLegacy} */
    component_context
  );
  render_effect(() => {
    for (var token of context.l.$) {
      token.deps();
      var effect2 = token.effect;
      if ((effect2.f & CLEAN) !== 0) {
        set_signal_status(effect2, MAYBE_DIRTY);
      }
      if (is_dirty(effect2)) {
        update_effect(effect2);
      }
      token.ran = false;
    }
  });
}
function async_effect(fn) {
  return create_effect(ASYNC | EFFECT_PRESERVED, fn, true);
}
function render_effect(fn, flags2 = 0) {
  return create_effect(RENDER_EFFECT | flags2, fn, true);
}
function template_effect(fn, sync = [], async2 = []) {
  flatten(sync, async2, (values) => {
    create_effect(RENDER_EFFECT, () => fn(...values.map(get)), true);
  });
}
function block(fn, flags2 = 0) {
  var effect2 = create_effect(BLOCK_EFFECT | flags2, fn, true);
  if (dev_fallback_default) {
    effect2.dev_stack = dev_stack;
  }
  return effect2;
}
function branch(fn, push2 = true) {
  return create_effect(BRANCH_EFFECT, fn, true, push2);
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
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null && effect2.nodes_end !== null) {
    remove_effect_dom(
      effect2.nodes_start,
      /** @type {TemplateNode} */
      effect2.nodes_end
    );
    removed = true;
  }
  destroy_effect_children(effect2, remove_dom && !removed);
  remove_reactions(effect2, 0);
  set_signal_status(effect2, DESTROYED);
  var transitions = effect2.transitions;
  if (transitions !== null) {
    for (const transition2 of transitions) {
      transition2.stop();
    }
  }
  execute_effect_teardown(effect2);
  var parent = effect2.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect2);
  }
  if (dev_fallback_default) {
    effect2.component_function = null;
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = effect2.ac = null;
}
function remove_effect_dom(node, end) {
  while (node !== null) {
    var next2 = node === end ? null : (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
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
function pause_effect(effect2, callback) {
  var transitions = [];
  pause_children(effect2, transitions, true);
  run_out_transitions(transitions, () => {
    destroy_effect(effect2);
    if (callback) callback();
  });
}
function run_out_transitions(transitions, fn) {
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
  if (effect2.transitions !== null) {
    for (const transition2 of effect2.transitions) {
      if (transition2.is_global || local) {
        transitions.push(transition2);
      }
    }
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
    pause_children(child2, transitions, transparent ? local : false);
    child2 = sibling2;
  }
}
function resume_effect(effect2) {
  resume_children(effect2, true);
}
function resume_children(effect2, local) {
  if ((effect2.f & INERT) === 0) return;
  effect2.f ^= INERT;
  if ((effect2.f & CLEAN) === 0) {
    set_signal_status(effect2, DIRTY);
    schedule_effect(effect2);
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
    resume_children(child2, transparent ? local : false);
    child2 = sibling2;
  }
  if (effect2.transitions !== null) {
    for (const transition2 of effect2.transitions) {
      if (transition2.is_global || local) {
        transition2.in();
      }
    }
  }
}

// node_modules/svelte/src/internal/client/legacy.js
var captured_signals = null;

// node_modules/svelte/src/internal/client/runtime.js
var is_updating_effect = false;
function set_is_updating_effect(value) {
  is_updating_effect = value;
}
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
  if (active_reaction !== null && (!async_mode_flag || (active_reaction.f & DERIVED) !== 0)) {
    if (current_sources === null) {
      current_sources = [value];
    } else {
      current_sources.push(value);
    }
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
var skip_reaction = false;
function increment_write_version() {
  return ++write_version;
}
function is_dirty(reaction) {
  var _a3, _b3;
  var flags2 = reaction.f;
  if ((flags2 & DIRTY) !== 0) {
    return true;
  }
  if ((flags2 & MAYBE_DIRTY) !== 0) {
    var dependencies = reaction.deps;
    var is_unowned = (flags2 & UNOWNED) !== 0;
    if (dependencies !== null) {
      var i;
      var dependency;
      var is_disconnected = (flags2 & DISCONNECTED) !== 0;
      var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
      var length = dependencies.length;
      if ((is_disconnected || is_unowned_connected) && (active_effect === null || (active_effect.f & DESTROYED) === 0)) {
        var derived3 = (
          /** @type {Derived} */
          reaction
        );
        var parent = derived3.parent;
        for (i = 0; i < length; i++) {
          dependency = dependencies[i];
          if (is_disconnected || !((_a3 = dependency == null ? void 0 : dependency.reactions) == null ? void 0 : _a3.includes(derived3))) {
            ((_b3 = dependency.reactions) != null ? _b3 : dependency.reactions = []).push(derived3);
          }
        }
        if (is_disconnected) {
          derived3.f ^= DISCONNECTED;
        }
        if (is_unowned_connected && parent !== null && (parent.f & UNOWNED) === 0) {
          derived3.f ^= UNOWNED;
        }
      }
      for (i = 0; i < length; i++) {
        dependency = dependencies[i];
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
    }
    if (!is_unowned || active_effect !== null && !skip_reaction) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function schedule_possible_effect_self_invalidation(signal, effect2, root2 = true) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  if (!async_mode_flag && (current_sources == null ? void 0 : current_sources.includes(signal))) {
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
  var _a3, _b3;
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_skip_reaction = skip_reaction;
  var previous_sources = current_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var previous_update_version = update_version;
  var flags2 = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  skip_reaction = (flags2 & UNOWNED) !== 0 && (untracking || !is_updating_effect || active_reaction === null);
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
    var deps = reaction.deps;
    if (new_deps !== null) {
      var i;
      remove_reactions(reaction, skipped_deps);
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (!skip_reaction || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (flags2 & DERIVED) !== 0 && /** @type {import('#client').Derived} */
      reaction.reactions !== null) {
        for (i = skipped_deps; i < deps.length; i++) {
          ((_b3 = (_a3 = deps[i]).reactions) != null ? _b3 : _a3.reactions = []).push(reaction);
        }
      }
    } else if (deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (i = 0; i < /** @type {Source[]} */
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
    return handle_error(error);
  } finally {
    reaction.f ^= REACTION_IS_UPDATING;
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    skip_reaction = previous_skip_reaction;
    current_sources = previous_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
    update_version = previous_update_version;
  }
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
  (new_deps === null || !new_deps.includes(dependency))) {
    set_signal_status(dependency, MAYBE_DIRTY);
    if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
      dependency.f ^= DISCONNECTED;
    }
    destroy_derived_effects(
      /** @type {Derived} **/
      dependency
    );
    remove_reactions(
      /** @type {Derived} **/
      dependency,
      0
    );
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
  var _a3;
  var flags2 = effect2.f;
  if ((flags2 & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  var was_updating_effect = is_updating_effect;
  active_effect = effect2;
  is_updating_effect = true;
  if (dev_fallback_default) {
    var previous_component_fn = dev_current_component_function;
    set_dev_current_component_function(effect2.component_function);
    var previous_stack = (
      /** @type {any} */
      dev_stack
    );
    set_dev_stack((_a3 = effect2.dev_stack) != null ? _a3 : dev_stack);
  }
  try {
    if ((flags2 & BLOCK_EFFECT) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    execute_effect_teardown(effect2);
    var teardown2 = update_reaction(effect2);
    effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
    effect2.wv = write_version;
    if (dev_fallback_default && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && effect2.deps !== null) {
      for (var dep of effect2.deps) {
        if (dep.set_during_effect) {
          dep.wv = increment_write_version();
          dep.set_during_effect = false;
        }
      }
    }
  } finally {
    is_updating_effect = was_updating_effect;
    active_effect = previous_effect;
    if (dev_fallback_default) {
      set_dev_current_component_function(previous_component_fn);
      set_dev_stack(previous_stack);
    }
  }
}
function tick() {
  return __async(this, null, function* () {
    if (async_mode_flag) {
      return new Promise((f) => requestAnimationFrame(() => f()));
    }
    yield Promise.resolve();
    flushSync();
  });
}
function get(signal) {
  var _a3, _b3, _c2, _d;
  var flags2 = signal.f;
  var is_derived = (flags2 & DERIVED) !== 0;
  (_a3 = captured_signals) == null ? void 0 : _a3.add(signal);
  if (active_reaction !== null && !untracking) {
    var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;
    if (!destroyed && !(current_sources == null ? void 0 : current_sources.includes(signal))) {
      var deps = active_reaction.deps;
      if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
        if (signal.rv < read_version) {
          signal.rv = read_version;
          if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
            skipped_deps++;
          } else if (new_deps === null) {
            new_deps = [signal];
          } else if (!skip_reaction || !new_deps.includes(signal)) {
            new_deps.push(signal);
          }
        }
      } else {
        ((_b3 = active_reaction.deps) != null ? _b3 : active_reaction.deps = []).push(signal);
        var reactions = signal.reactions;
        if (reactions === null) {
          signal.reactions = [active_reaction];
        } else if (!reactions.includes(active_reaction)) {
          reactions.push(active_reaction);
        }
      }
    }
  } else if (is_derived && /** @type {Derived} */
  signal.deps === null && /** @type {Derived} */
  signal.effects === null) {
    var derived3 = (
      /** @type {Derived} */
      signal
    );
    var parent = derived3.parent;
    if (parent !== null && (parent.f & UNOWNED) === 0) {
      derived3.f ^= UNOWNED;
    }
  }
  if (dev_fallback_default) {
    if (current_async_effect) {
      var tracking = (current_async_effect.f & REACTION_IS_UPDATING) !== 0;
      var was_read = (_c2 = current_async_effect.deps) == null ? void 0 : _c2.includes(signal);
      if (!tracking && !untracking && !was_read) {
        await_reactivity_loss(
          /** @type {string} */
          signal.label
        );
        var trace2 = get_stack("TracedAt");
        if (trace2) console.warn(trace2);
      }
    }
    recent_async_deriveds.delete(signal);
    if (tracing_mode_flag && !untracking && tracing_expressions !== null && active_reaction !== null && tracing_expressions.reaction === active_reaction) {
      if (signal.trace) {
        signal.trace();
      } else {
        trace2 = get_stack("TracedAt");
        if (trace2) {
          var entry = tracing_expressions.entries.get(signal);
          if (entry === void 0) {
            entry = { traces: [] };
            tracing_expressions.entries.set(signal, entry);
          }
          var last = entry.traces[entry.traces.length - 1];
          if (trace2.stack !== (last == null ? void 0 : last.stack)) {
            entry.traces.push(trace2);
          }
        }
      }
    }
  }
  if (is_destroying_effect) {
    if (old_values.has(signal)) {
      return old_values.get(signal);
    }
    if (is_derived) {
      derived3 = /** @type {Derived} */
      signal;
      var value = derived3.v;
      if ((derived3.f & CLEAN) === 0 && derived3.reactions !== null || depends_on_old_values(derived3)) {
        value = execute_derived(derived3);
      }
      old_values.set(derived3, value);
      return value;
    }
  } else if (is_derived) {
    derived3 = /** @type {Derived} */
    signal;
    if ((_d = batch_deriveds) == null ? void 0 : _d.has(derived3)) {
      return batch_deriveds.get(derived3);
    }
    if (is_dirty(derived3)) {
      update_derived(derived3);
    }
  }
  if ((signal.f & ERROR_VALUE) !== 0) {
    throw signal.v;
  }
  return signal.v;
}
function depends_on_old_values(derived3) {
  if (derived3.v === UNINITIALIZED) return true;
  if (derived3.deps === null) return false;
  for (const dep of derived3.deps) {
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
var STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}
function deep_read_state(value) {
  if (typeof value !== "object" || !value || value instanceof EventTarget) {
    return;
  }
  if (STATE_SYMBOL in value) {
    deep_read(value);
  } else if (!Array.isArray(value)) {
    for (let key2 in value) {
      const prop2 = value[key2];
      if (typeof prop2 === "object" && prop2 && STATE_SYMBOL in prop2) {
        deep_read(prop2);
      }
    }
  }
}
function deep_read(value, visited = /* @__PURE__ */ new Set()) {
  if (typeof value === "object" && value !== null && // We don't want to traverse DOM elements
  !(value instanceof EventTarget) && !visited.has(value)) {
    visited.add(value);
    if (value instanceof Date) {
      value.getTime();
    }
    for (let key2 in value) {
      try {
        deep_read(value[key2], visited);
      } catch (e) {
      }
    }
    const proto = get_prototype_of(value);
    if (proto !== Object.prototype && proto !== Array.prototype && proto !== Map.prototype && proto !== Set.prototype && proto !== Date.prototype) {
      const descriptors = get_descriptors(proto);
      for (let key2 in descriptors) {
        const get3 = descriptors[key2].get;
        if (get3) {
          try {
            get3.call(value);
          } catch (e) {
          }
        }
      }
    }
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
  "hidden",
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
var all_registered_events = /* @__PURE__ */ new Set();
var root_event_handles = /* @__PURE__ */ new Set();
function create_event(event_name, dom, handler, options = {}) {
  function target_handler(event2) {
    if (!options.capture) {
      handle_event_propagation.call(dom, event2);
    }
    if (!event2.cancelBubble) {
      return without_reactive_context(() => {
        return handler == null ? void 0 : handler.call(this, event2);
      });
    }
  }
  if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") {
    queue_micro_task(() => {
      dom.addEventListener(event_name, target_handler, options);
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
      dom.removeEventListener(event_name, target_handler, options);
    });
  }
}
function delegate(events2) {
  for (var i = 0; i < events2.length; i++) {
    all_registered_events.add(events2[i]);
  }
  for (var fn of root_event_handles) {
    fn(events2);
  }
}
var last_propagated_event = null;
function handle_event_propagation(event2) {
  var _a3;
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event2.type;
  var path = ((_a3 = event2.composedPath) == null ? void 0 : _a3.call(event2)) || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event2.target
  );
  last_propagated_event = event2;
  var path_idx = 0;
  var handled_at = last_propagated_event === event2 && event2.__root;
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event2.__root = handler_element;
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
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated = current_target["__" + event_name];
        if (delegated != null && (!/** @type {any} */
        current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        event2.target === current_target)) {
          if (is_array(delegated)) {
            var [fn, ...data] = delegated;
            fn.apply(current_target, [event2, ...data]);
          } else {
            delegated.call(current_target, event2);
          }
        }
      } catch (error) {
        if (throw_error) {
          other_errors.push(error);
        } else {
          throw_error = error;
        }
      }
      if (event2.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
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
    event2.__root = handler_element;
    delete event2.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
var head_anchor;
function reset_head_anchor() {
  head_anchor = void 0;
}

// node_modules/svelte/src/internal/client/dom/reconciler.js
function create_fragment_from_html(html2) {
  var elem = document.createElement("template");
  elem.innerHTML = html2.replaceAll("<!>", "<!---->");
  return elem.content;
}

// node_modules/svelte/src/internal/client/dom/template.js
function assign_nodes(start, end) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if (effect2.nodes_start === null) {
    effect2.nodes_start = start;
    effect2.nodes_end = end;
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
      if (!is_fragment) node = /** @type {Node} */
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
    active_effect.nodes_end = hydrate_node;
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

// node_modules/svelte/src/internal/client/render.js
var should_intro = true;
function set_text(text2, value) {
  var _a3;
  var str = value == null ? "" : typeof value === "object" ? value + "" : value;
  if (str !== ((_a3 = text2.__t) != null ? _a3 : text2.__t = text2.nodeValue)) {
    text2.__t = str;
    text2.nodeValue = str + "";
  }
}
function mount(component2, options) {
  return _mount(component2, options);
}
function hydrate(component2, options) {
  var _a3;
  init_operations();
  options.intro = (_a3 = options.intro) != null ? _a3 : false;
  const target = options.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = (
      /** @type {TemplateNode} */
      get_first_child(target)
    );
    while (anchor && (anchor.nodeType !== COMMENT_NODE || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = /** @type {TemplateNode} */
      get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    hydrate_next();
    const instance = _mount(component2, __spreadProps(__spreadValues({}, options), { anchor }));
    if (hydrate_node === null || hydrate_node.nodeType !== COMMENT_NODE || /** @type {Comment} */
    hydrate_node.data !== HYDRATION_END) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
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
    reset_head_anchor();
  }
}
var document_listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events: events2, context, intro = true }) {
  init_operations();
  var registered_events = /* @__PURE__ */ new Set();
  var event_handle = (events3) => {
    for (var i = 0; i < events3.length; i++) {
      var event_name = events3[i];
      if (registered_events.has(event_name)) continue;
      registered_events.add(event_name);
      var passive2 = is_passive_event(event_name);
      target.addEventListener(event_name, handle_event_propagation, { passive: passive2 });
      var n = document_listeners.get(event_name);
      if (n === void 0) {
        document.addEventListener(event_name, handle_event_propagation, { passive: passive2 });
        document_listeners.set(event_name, 1);
      } else {
        document_listeners.set(event_name, n + 1);
      }
    }
  };
  event_handle(array_from(all_registered_events));
  root_event_handles.add(event_handle);
  var component2 = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor != null ? anchor : target.appendChild(create_text());
    branch(() => {
      if (context) {
        push({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        ctx.c = context;
      }
      if (events2) {
        props.$$events = events2;
      }
      if (hydrating) {
        assign_nodes(
          /** @type {TemplateNode} */
          anchor_node,
          null
        );
      }
      should_intro = intro;
      component2 = Component(anchor_node, props) || {};
      should_intro = true;
      if (hydrating) {
        active_effect.nodes_end = hydrate_node;
      }
      if (context) {
        pop();
      }
    });
    return () => {
      var _a3;
      for (var event_name of registered_events) {
        target.removeEventListener(event_name, handle_event_propagation);
        var n = (
          /** @type {number} */
          document_listeners.get(event_name)
        );
        if (--n === 0) {
          document.removeEventListener(event_name, handle_event_propagation);
          document_listeners.delete(event_name);
        } else {
          document_listeners.set(event_name, n);
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        (_a3 = anchor_node.parentNode) == null ? void 0 : _a3.removeChild(anchor_node);
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
  if (dev_fallback_default) {
    lifecycle_double_unmount();
  }
  return Promise.resolve();
}

// node_modules/svelte/src/internal/client/dom/blocks/if.js
function if_block(node, fn, elseif = false) {
  if (hydrating) {
    hydrate_next();
  }
  var anchor = node;
  var consequent_effect = null;
  var alternate_effect = null;
  var condition = UNINITIALIZED;
  var flags2 = elseif ? EFFECT_TRANSPARENT : 0;
  var has_branch = false;
  const set_branch = (fn2, flag = true) => {
    has_branch = true;
    update_branch(flag, fn2);
  };
  var offscreen_fragment = null;
  function commit() {
    if (offscreen_fragment !== null) {
      offscreen_fragment.lastChild.remove();
      anchor.before(offscreen_fragment);
      offscreen_fragment = null;
    }
    var active = condition ? consequent_effect : alternate_effect;
    var inactive = condition ? alternate_effect : consequent_effect;
    if (active) {
      resume_effect(active);
    }
    if (inactive) {
      pause_effect(inactive, () => {
        if (condition) {
          alternate_effect = null;
        } else {
          consequent_effect = null;
        }
      });
    }
  }
  const update_branch = (new_condition, fn2) => {
    if (condition === (condition = new_condition)) return;
    let mismatch = false;
    if (hydrating) {
      const is_else = read_hydration_instruction(anchor) === HYDRATION_START_ELSE;
      if (!!condition === is_else) {
        anchor = remove_nodes();
        set_hydrate_node(anchor);
        set_hydrating(false);
        mismatch = true;
      }
    }
    var defer = should_defer_append();
    var target = anchor;
    if (defer) {
      offscreen_fragment = document.createDocumentFragment();
      offscreen_fragment.append(target = create_text());
    }
    if (condition) {
      consequent_effect != null ? consequent_effect : consequent_effect = fn2 && branch(() => fn2(target));
    } else {
      alternate_effect != null ? alternate_effect : alternate_effect = fn2 && branch(() => fn2(target));
    }
    if (defer) {
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      var active = condition ? consequent_effect : alternate_effect;
      var inactive = condition ? alternate_effect : consequent_effect;
      if (active) batch.skipped_effects.delete(active);
      if (inactive) batch.skipped_effects.add(inactive);
      batch.add_callback(commit);
    } else {
      commit();
    }
    if (mismatch) {
      set_hydrating(true);
    }
  };
  block(() => {
    has_branch = false;
    fn(set_branch);
    if (!has_branch) {
      update_branch(null, null);
    }
  }, flags2);
  if (hydrating) {
    anchor = hydrate_node;
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/each.js
var current_each_item = null;
function index(_, i) {
  return i;
}
function pause_effects(state2, items, controlled_anchor) {
  var items_map = state2.items;
  var transitions = [];
  var length = items.length;
  for (var i = 0; i < length; i++) {
    pause_children(items[i].e, transitions, true);
  }
  var is_controlled = length > 0 && transitions.length === 0 && controlled_anchor !== null;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      /** @type {Element} */
      controlled_anchor.parentNode
    );
    clear_text_content(parent_node);
    parent_node.append(
      /** @type {Element} */
      controlled_anchor
    );
    items_map.clear();
    link(state2, items[0].prev, items[length - 1].next);
  }
  run_out_transitions(transitions, () => {
    for (var i2 = 0; i2 < length; i2++) {
      var item = items[i2];
      if (!is_controlled) {
        items_map.delete(item.k);
        link(state2, item.prev, item.next);
      }
      destroy_effect(item.e, !is_controlled);
    }
  });
}
function each(node, flags2, get_collection, get_key, render_fn, fallback_fn = null) {
  var anchor = node;
  var state2 = { flags: flags2, items: /* @__PURE__ */ new Map(), first: null };
  var is_controlled = (flags2 & EACH_IS_CONTROLLED) !== 0;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      node
    );
    anchor = hydrating ? set_hydrate_node(
      /** @type {Comment | Text} */
      get_first_child(parent_node)
    ) : parent_node.appendChild(create_text());
  }
  if (hydrating) {
    hydrate_next();
  }
  var fallback2 = null;
  var was_empty = false;
  var offscreen_items = /* @__PURE__ */ new Map();
  var each_array = derived_safe_equal(() => {
    var collection = get_collection();
    return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
  });
  var array;
  var each_effect;
  function commit() {
    reconcile(
      each_effect,
      array,
      state2,
      offscreen_items,
      anchor,
      render_fn,
      flags2,
      get_key,
      get_collection
    );
    if (fallback_fn !== null) {
      if (array.length === 0) {
        if (fallback2) {
          resume_effect(fallback2);
        } else {
          fallback2 = branch(() => fallback_fn(anchor));
        }
      } else if (fallback2 !== null) {
        pause_effect(fallback2, () => {
          fallback2 = null;
        });
      }
    }
  }
  block(() => {
    var _a3;
    each_effect != null ? each_effect : each_effect = /** @type {Effect} */
    active_effect;
    array = /** @type {V[]} */
    get(each_array);
    var length = array.length;
    if (was_empty && length === 0) {
      return;
    }
    was_empty = length === 0;
    let mismatch = false;
    if (hydrating) {
      var is_else = read_hydration_instruction(anchor) === HYDRATION_START_ELSE;
      if (is_else !== (length === 0)) {
        anchor = remove_nodes();
        set_hydrate_node(anchor);
        set_hydrating(false);
        mismatch = true;
      }
    }
    if (hydrating) {
      var prev = null;
      var item;
      for (var i = 0; i < length; i++) {
        if (hydrate_node.nodeType === COMMENT_NODE && /** @type {Comment} */
        hydrate_node.data === HYDRATION_END) {
          anchor = /** @type {Comment} */
          hydrate_node;
          mismatch = true;
          set_hydrating(false);
          break;
        }
        var value = array[i];
        var key2 = get_key(value, i);
        item = create_item(
          hydrate_node,
          state2,
          prev,
          null,
          value,
          key2,
          i,
          render_fn,
          flags2,
          get_collection
        );
        state2.items.set(key2, item);
        prev = item;
      }
      if (length > 0) {
        set_hydrate_node(remove_nodes());
      }
    }
    if (hydrating) {
      if (length === 0 && fallback_fn) {
        fallback2 = branch(() => fallback_fn(anchor));
      }
    } else {
      if (should_defer_append()) {
        var keys2 = /* @__PURE__ */ new Set();
        var batch = (
          /** @type {Batch} */
          current_batch
        );
        for (i = 0; i < length; i += 1) {
          value = array[i];
          key2 = get_key(value, i);
          var existing = (_a3 = state2.items.get(key2)) != null ? _a3 : offscreen_items.get(key2);
          if (existing) {
            if ((flags2 & (EACH_ITEM_REACTIVE | EACH_INDEX_REACTIVE)) !== 0) {
              update_item(existing, value, i, flags2);
            }
          } else {
            item = create_item(
              null,
              state2,
              null,
              null,
              value,
              key2,
              i,
              render_fn,
              flags2,
              get_collection,
              true
            );
            offscreen_items.set(key2, item);
          }
          keys2.add(key2);
        }
        for (const [key3, item2] of state2.items) {
          if (!keys2.has(key3)) {
            batch.skipped_effects.add(item2.e);
          }
        }
        batch.add_callback(commit);
      } else {
        commit();
      }
    }
    if (mismatch) {
      set_hydrating(true);
    }
    get(each_array);
  });
  if (hydrating) {
    anchor = hydrate_node;
  }
}
function reconcile(each_effect, array, state2, offscreen_items, anchor, render_fn, flags2, get_key, get_collection) {
  var _a3, _b3, _c2, _d;
  var is_animated = (flags2 & EACH_IS_ANIMATED) !== 0;
  var should_update = (flags2 & (EACH_ITEM_REACTIVE | EACH_INDEX_REACTIVE)) !== 0;
  var length = array.length;
  var items = state2.items;
  var first = state2.first;
  var current = first;
  var seen;
  var prev = null;
  var to_animate;
  var matched = [];
  var stashed = [];
  var value;
  var key2;
  var item;
  var i;
  if (is_animated) {
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key2 = get_key(value, i);
      item = items.get(key2);
      if (item !== void 0) {
        (_a3 = item.a) == null ? void 0 : _a3.measure();
        (to_animate != null ? to_animate : to_animate = /* @__PURE__ */ new Set()).add(item);
      }
    }
  }
  for (i = 0; i < length; i += 1) {
    value = array[i];
    key2 = get_key(value, i);
    item = items.get(key2);
    if (item === void 0) {
      var pending2 = offscreen_items.get(key2);
      if (pending2 !== void 0) {
        offscreen_items.delete(key2);
        items.set(key2, pending2);
        var next2 = prev ? prev.next : current;
        link(state2, prev, pending2);
        link(state2, pending2, next2);
        move(pending2, next2, anchor);
        prev = pending2;
      } else {
        var child_anchor = current ? (
          /** @type {TemplateNode} */
          current.e.nodes_start
        ) : anchor;
        prev = create_item(
          child_anchor,
          state2,
          prev,
          prev === null ? state2.first : prev.next,
          value,
          key2,
          i,
          render_fn,
          flags2,
          get_collection
        );
      }
      items.set(key2, prev);
      matched = [];
      stashed = [];
      current = prev.next;
      continue;
    }
    if (should_update) {
      update_item(item, value, i, flags2);
    }
    if ((item.e.f & INERT) !== 0) {
      resume_effect(item.e);
      if (is_animated) {
        (_b3 = item.a) == null ? void 0 : _b3.unfix();
        (to_animate != null ? to_animate : to_animate = /* @__PURE__ */ new Set()).delete(item);
      }
    }
    if (item !== current) {
      if (seen !== void 0 && seen.has(item)) {
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
            seen.delete(stashed[j]);
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
          seen.delete(item);
          move(item, current, anchor);
          link(state2, item.prev, item.next);
          link(state2, item, prev === null ? state2.first : prev.next);
          link(state2, prev, item);
          prev = item;
        }
        continue;
      }
      matched = [];
      stashed = [];
      while (current !== null && current.k !== key2) {
        if ((current.e.f & INERT) === 0) {
          (seen != null ? seen : seen = /* @__PURE__ */ new Set()).add(current);
        }
        stashed.push(current);
        current = current.next;
      }
      if (current === null) {
        continue;
      }
      item = current;
    }
    matched.push(item);
    prev = item;
    current = item.next;
  }
  if (current !== null || seen !== void 0) {
    var to_destroy = seen === void 0 ? [] : array_from(seen);
    while (current !== null) {
      if ((current.e.f & INERT) === 0) {
        to_destroy.push(current);
      }
      current = current.next;
    }
    var destroy_length = to_destroy.length;
    if (destroy_length > 0) {
      var controlled_anchor = (flags2 & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
      if (is_animated) {
        for (i = 0; i < destroy_length; i += 1) {
          (_c2 = to_destroy[i].a) == null ? void 0 : _c2.measure();
        }
        for (i = 0; i < destroy_length; i += 1) {
          (_d = to_destroy[i].a) == null ? void 0 : _d.fix();
        }
      }
      pause_effects(state2, to_destroy, controlled_anchor);
    }
  }
  if (is_animated) {
    queue_micro_task(() => {
      var _a4;
      if (to_animate === void 0) return;
      for (item of to_animate) {
        (_a4 = item.a) == null ? void 0 : _a4.apply();
      }
    });
  }
  each_effect.first = state2.first && state2.first.e;
  each_effect.last = prev && prev.e;
  for (var unused of offscreen_items.values()) {
    destroy_effect(unused.e);
  }
  offscreen_items.clear();
}
function update_item(item, value, index2, type) {
  if ((type & EACH_ITEM_REACTIVE) !== 0) {
    internal_set(item.v, value);
  }
  if ((type & EACH_INDEX_REACTIVE) !== 0) {
    internal_set(
      /** @type {Value<number>} */
      item.i,
      index2
    );
  } else {
    item.i = index2;
  }
}
function create_item(anchor, state2, prev, next2, value, key2, index2, render_fn, flags2, get_collection, deferred2) {
  var previous_each_item = current_each_item;
  var reactive = (flags2 & EACH_ITEM_REACTIVE) !== 0;
  var mutable = (flags2 & EACH_ITEM_IMMUTABLE) === 0;
  var v = reactive ? mutable ? mutable_source(value, false, false) : source(value) : value;
  var i = (flags2 & EACH_INDEX_REACTIVE) === 0 ? index2 : source(index2);
  if (dev_fallback_default && reactive) {
    v.trace = () => {
      var collection_index = typeof i === "number" ? index2 : i.v;
      get_collection()[collection_index];
    };
  }
  var item = {
    i,
    v,
    k: key2,
    a: null,
    // @ts-expect-error
    e: null,
    prev,
    next: next2
  };
  current_each_item = item;
  try {
    if (anchor === null) {
      var fragment = document.createDocumentFragment();
      fragment.append(anchor = create_text());
    }
    item.e = branch(() => render_fn(
      /** @type {Node} */
      anchor,
      v,
      i,
      get_collection
    ), hydrating);
    item.e.prev = prev && prev.e;
    item.e.next = next2 && next2.e;
    if (prev === null) {
      if (!deferred2) {
        state2.first = item;
      }
    } else {
      prev.next = item;
      prev.e.next = item.e;
    }
    if (next2 !== null) {
      next2.prev = item;
      next2.e.prev = item.e;
    }
    return item;
  } finally {
    current_each_item = previous_each_item;
  }
}
function move(item, next2, anchor) {
  var end = item.next ? (
    /** @type {TemplateNode} */
    item.next.e.nodes_start
  ) : anchor;
  var dest = next2 ? (
    /** @type {TemplateNode} */
    next2.e.nodes_start
  ) : anchor;
  var node = (
    /** @type {TemplateNode} */
    item.e.nodes_start
  );
  while (node !== null && node !== end) {
    var next_node = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    dest.before(node);
    node = next_node;
  }
}
function link(state2, prev, next2) {
  if (prev === null) {
    state2.first = next2;
  } else {
    prev.next = next2;
    prev.e.next = next2 && next2.e;
  }
  if (next2 !== null) {
    next2.prev = prev;
    next2.e.prev = prev && prev.e;
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function snippet(node, get_snippet, ...args) {
  var anchor = node;
  var snippet2 = noop;
  var snippet_effect;
  block(() => {
    if (snippet2 === (snippet2 = get_snippet())) return;
    if (snippet_effect) {
      destroy_effect(snippet_effect);
      snippet_effect = null;
    }
    if (dev_fallback_default && snippet2 == null) {
      invalid_snippet();
    }
    snippet_effect = branch(() => (
      /** @type {SnippetFn} */
      snippet2(anchor, ...args)
    ));
  }, EFFECT_TRANSPARENT);
  if (hydrating) {
    anchor = hydrate_node;
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js
function component(node, get_component, render_fn) {
  if (hydrating) {
    hydrate_next();
  }
  var anchor = node;
  var component2;
  var effect2;
  var offscreen_fragment = null;
  var pending_effect = null;
  function commit() {
    if (effect2) {
      pause_effect(effect2);
      effect2 = null;
    }
    if (offscreen_fragment) {
      offscreen_fragment.lastChild.remove();
      anchor.before(offscreen_fragment);
      offscreen_fragment = null;
    }
    effect2 = pending_effect;
    pending_effect = null;
  }
  block(() => {
    if (component2 === (component2 = get_component())) return;
    var defer = should_defer_append();
    if (component2) {
      var target = anchor;
      if (defer) {
        offscreen_fragment = document.createDocumentFragment();
        offscreen_fragment.append(target = create_text());
        if (effect2) {
          current_batch.skipped_effects.add(effect2);
        }
      }
      pending_effect = branch(() => render_fn(target, component2));
    }
    if (defer) {
      current_batch.add_callback(commit);
    } else {
      commit();
    }
  }, EFFECT_TRANSPARENT);
  if (hydrating) {
    anchor = hydrate_node;
  }
}

// node_modules/svelte/src/internal/client/dom/elements/actions.js
function action(dom, action2, get_value) {
  effect(() => {
    var payload = untrack(() => action2(dom, get_value == null ? void 0 : get_value()) || {});
    if (get_value && (payload == null ? void 0 : payload.update)) {
      var inited2 = false;
      var prev = (
        /** @type {any} */
        {}
      );
      render_effect(() => {
        var value = get_value();
        deep_read_state(value);
        if (inited2 && safe_not_equal(prev, value)) {
          prev = value;
          payload.update(value);
        }
      });
      inited2 = true;
    }
    if (payload == null ? void 0 : payload.destroy) {
      return () => (
        /** @type {Function} */
        payload.destroy()
      );
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
    return value != null ? value : "";
  }
}
var whitespace = [..." 	\n\r\f\xA0\v\uFEFF"];
function to_class(value, hash2, directives) {
  var classname = value == null ? "" : "" + value;
  if (hash2) {
    classname = classname ? classname + " " + hash2 : hash2;
  }
  if (directives) {
    for (var key2 in directives) {
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
  for (var key2 in styles) {
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
      value = String(value).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
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
  var prev = dom.__className;
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
    dom.__className = value;
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
  var prev = dom.__style;
  if (hydrating || prev !== value) {
    var next_style_attr = to_style(value, next_styles);
    if (!hydrating || next_style_attr !== dom.getAttribute("style")) {
      if (next_style_attr == null) {
        dom.removeAttribute("style");
      } else {
        dom.style.cssText = next_style_attr;
      }
    }
    dom.__style = value;
  } else if (next_styles) {
    if (Array.isArray(next_styles)) {
      update_styles(dom, prev_styles == null ? void 0 : prev_styles[0], next_styles[0]);
      update_styles(dom, prev_styles == null ? void 0 : prev_styles[1], next_styles[1], "important");
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
function set_attribute2(element2, attribute, value, skip_warning) {
  var attributes = get_attributes(element2);
  if (hydrating) {
    attributes[attribute] = element2.getAttribute(attribute);
    if (attribute === "src" || attribute === "srcset" || attribute === "href" && element2.nodeName === "LINK") {
      if (!skip_warning) {
        check_src_in_dev_hydration(element2, attribute, value != null ? value : "");
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
  } else if (typeof value !== "string" && get_setters(element2).includes(attribute)) {
    element2[attribute] = value;
  } else {
    element2.setAttribute(attribute, value);
  }
}
function get_attributes(element2) {
  var _a3;
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    (_a3 = element2.__attributes) != null ? _a3 : element2.__attributes = {
      [IS_CUSTOM_ELEMENT]: element2.nodeName.includes("-"),
      [IS_HTML]: element2.namespaceURI === NAMESPACE_HTML
    }
  );
}
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(element2) {
  var setters = setters_cache.get(element2.nodeName);
  if (setters) return setters;
  setters_cache.set(element2.nodeName, setters = []);
  var descriptors;
  var proto = element2;
  var element_proto = Element.prototype;
  while (element_proto !== proto) {
    descriptors = get_descriptors(proto);
    for (var key2 in descriptors) {
      if (descriptors[key2].set) {
        setters.push(key2);
      }
    }
    proto = get_prototype_of(proto);
  }
  return setters;
}
function check_src_in_dev_hydration(element2, attribute, value) {
  var _a3;
  if (!dev_fallback_default) return;
  if (attribute === "srcset" && srcset_url_equal(element2, value)) return;
  if (src_url_equal((_a3 = element2.getAttribute(attribute)) != null ? _a3 : "", value)) return;
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

// node_modules/svelte/src/internal/client/dom/elements/bindings/props.js
function bind_prop(props, prop2, value) {
  var desc = get_descriptor(props, prop2);
  if (desc && desc.set) {
    props[prop2] = value;
    teardown(() => {
      props[prop2] = null;
    });
  }
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function is_bound_this(bound_value, element_or_component) {
  return bound_value === element_or_component || (bound_value == null ? void 0 : bound_value[STATE_SYMBOL]) === element_or_component;
}
function bind_this(element_or_component = {}, update2, get_value, get_parts) {
  effect(() => {
    var old_parts;
    var parts;
    render_effect(() => {
      old_parts = parts;
      parts = (get_parts == null ? void 0 : get_parts()) || [];
      untrack(() => {
        if (element_or_component !== get_value(...parts)) {
          update2(element_or_component, ...parts);
          if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
            update2(null, ...old_parts);
          }
        }
      });
    });
    return () => {
      queue_micro_task(() => {
        if (parts && is_bound_this(get_value(...parts), element_or_component)) {
          update2(null, ...parts);
        }
      });
    };
  });
  return element_or_component;
}

// node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function init(immutable = false) {
  const context = (
    /** @type {ComponentContextLegacy} */
    component_context
  );
  const callbacks = context.l.u;
  if (!callbacks) return;
  let props = () => deep_read_state(context.s);
  if (immutable) {
    let version = 0;
    let prev = (
      /** @type {Record<string, any>} */
      {}
    );
    const d = derived(() => {
      let changed = false;
      const props2 = context.s;
      for (const key2 in props2) {
        if (props2[key2] !== prev[key2]) {
          prev[key2] = props2[key2];
          changed = true;
        }
      }
      if (changed) version++;
      return version;
    });
    props = () => get(d);
  }
  if (callbacks.b.length) {
    user_pre_effect(() => {
      observe_all(context, props);
      run_all(callbacks.b);
    });
  }
  user_effect(() => {
    const fns = untrack(() => callbacks.m.map(run));
    return () => {
      for (const fn of fns) {
        if (typeof fn === "function") {
          fn();
        }
      }
    };
  });
  if (callbacks.a.length) {
    user_effect(() => {
      observe_all(context, props);
      run_all(callbacks.a);
    });
  }
}
function observe_all(context, props) {
  if (context.l.s) {
    for (const signal of context.l.s) get(signal);
  }
  props();
}

// node_modules/svelte/src/store/utils.js
function subscribe_to_store(store, run3, invalidate) {
  if (store == null) {
    run3(void 0);
    if (invalidate) invalidate(void 0);
    return noop;
  }
  const unsub = untrack(
    () => store.subscribe(
      run3,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

// node_modules/svelte/src/store/shared/index.js
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set2(fn(
      /** @type {T} */
      value
    ));
  }
  function subscribe(run3, invalidate = noop) {
    const subscriber = [run3, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set2, update2) || noop;
    }
    run3(
      /** @type {T} */
      value
    );
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set: set2, update: update2, subscribe };
}
function derived2(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  if (!stores_array.every(Boolean)) {
    throw new Error("derived() expects stores as input, got a falsy value");
  }
  const auto = fn.length < 2;
  return readable(initial_value, (set2, update2) => {
    let started = false;
    const values = [];
    let pending2 = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending2) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set2, update2);
      if (auto) {
        set2(result);
      } else {
        cleanup = typeof result === "function" ? result : noop;
      }
    };
    const unsubscribers = stores_array.map(
      (store, i) => subscribe_to_store(
        store,
        (value) => {
          values[i] = value;
          pending2 &= ~(1 << i);
          if (started) {
            sync();
          }
        },
        () => {
          pending2 |= 1 << i;
        }
      )
    );
    started = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
      started = false;
    };
  });
}
function get2(store) {
  let value;
  subscribe_to_store(store, (_) => value = _)();
  return value;
}

// node_modules/svelte/src/internal/client/reactivity/store.js
var is_store_binding = false;
var IS_UNMOUNTED = Symbol();
function store_get(store, store_name, stores) {
  var _a3;
  const entry = (_a3 = stores[store_name]) != null ? _a3 : stores[store_name] = {
    store: null,
    source: mutable_source(void 0),
    unsubscribe: noop
  };
  if (dev_fallback_default) {
    entry.source.label = store_name;
  }
  if (entry.store !== store && !(IS_UNMOUNTED in stores)) {
    entry.unsubscribe();
    entry.store = store != null ? store : null;
    if (store == null) {
      entry.source.v = void 0;
      entry.unsubscribe = noop;
    } else {
      var is_synchronous_callback = true;
      entry.unsubscribe = subscribe_to_store(store, (v) => {
        if (is_synchronous_callback) {
          entry.source.v = v;
        } else {
          set(entry.source, v);
        }
      });
      is_synchronous_callback = false;
    }
  }
  if (store && IS_UNMOUNTED in stores) {
    return get2(store);
  }
  return get(entry.source);
}
function store_set(store, value) {
  store.set(value);
  return value;
}
function setup_stores() {
  const stores = {};
  function cleanup() {
    teardown(() => {
      for (var store_name in stores) {
        const ref = stores[store_name];
        ref.unsubscribe();
      }
      define_property(stores, IS_UNMOUNTED, {
        enumerable: false,
        value: true
      });
    });
  }
  return [stores, cleanup];
}
function store_mutate(store, expression, new_value) {
  store.set(new_value);
  return expression;
}
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
function prop(props, key2, flags2, fallback2) {
  var _a3, _b3;
  var runes = !legacy_mode_flag || (flags2 & PROPS_IS_RUNES) !== 0;
  var bindable = (flags2 & PROPS_IS_BINDABLE) !== 0;
  var lazy = (flags2 & PROPS_IS_LAZY_INITIAL) !== 0;
  var fallback_value = (
    /** @type {V} */
    fallback2
  );
  var fallback_dirty = true;
  var get_fallback = () => {
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
  var setter;
  if (bindable) {
    var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
    setter = (_b3 = (_a3 = get_descriptor(props, key2)) == null ? void 0 : _a3.set) != null ? _b3 : is_entry_props && key2 in props ? (v) => props[key2] = v : void 0;
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
  if (dev_fallback_default) {
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
var _events, _instance;
var Svelte4Component = class {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options) {
    /** @type {any} */
    __privateAdd(this, _events);
    /** @type {Record<string, any>} */
    __privateAdd(this, _instance);
    var _a3, _b3;
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key2, value) => {
      var s = mutable_source(value, false, false);
      sources.set(key2, s);
      return s;
    };
    const props = new Proxy(
      __spreadProps(__spreadValues({}, options.props || {}), { $$events: {} }),
      {
        get(target, prop2) {
          var _a4;
          return get((_a4 = sources.get(prop2)) != null ? _a4 : add_source(prop2, Reflect.get(target, prop2)));
        },
        has(target, prop2) {
          var _a4;
          if (prop2 === LEGACY_PROPS) return true;
          get((_a4 = sources.get(prop2)) != null ? _a4 : add_source(prop2, Reflect.get(target, prop2)));
          return Reflect.has(target, prop2);
        },
        set(target, prop2, value) {
          var _a4;
          set((_a4 = sources.get(prop2)) != null ? _a4 : add_source(prop2, value), value);
          return Reflect.set(target, prop2, value);
        }
      }
    );
    __privateSet(this, _instance, (options.hydrate ? hydrate : mount)(options.component, {
      target: options.target,
      anchor: options.anchor,
      props,
      context: options.context,
      intro: (_a3 = options.intro) != null ? _a3 : false,
      recover: options.recover
    }));
    if (!async_mode_flag && (!((_b3 = options == null ? void 0 : options.props) == null ? void 0 : _b3.$$host) || options.sync === false)) {
      flushSync();
    }
    __privateSet(this, _events, props.$$events);
    for (const key2 of Object.keys(__privateGet(this, _instance))) {
      if (key2 === "$set" || key2 === "$destroy" || key2 === "$on") continue;
      define_property(this, key2, {
        get() {
          return __privateGet(this, _instance)[key2];
        },
        /** @param {any} value */
        set(value) {
          __privateGet(this, _instance)[key2] = value;
        },
        enumerable: true
      });
    }
    __privateGet(this, _instance).$set = /** @param {Record<string, any>} next */
    (next2) => {
      Object.assign(props, next2);
    };
    __privateGet(this, _instance).$destroy = () => {
      unmount(__privateGet(this, _instance));
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    __privateGet(this, _instance).$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event2, callback) {
    __privateGet(this, _events)[event2] = __privateGet(this, _events)[event2] || [];
    const cb = (...args) => callback.call(this, ...args);
    __privateGet(this, _events)[event2].push(cb);
    return () => {
      __privateGet(this, _events)[event2] = __privateGet(this, _events)[event2].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    __privateGet(this, _instance).$destroy();
  }
};
_events = new WeakMap();
_instance = new WeakMap();

// node_modules/svelte/src/internal/client/dom/elements/custom-element.js
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    /**
     * @param {*} $$componentCtor
     * @param {*} $$slots
     * @param {*} use_shadow_dom
     */
    constructor($$componentCtor, $$slots, use_shadow_dom) {
      super();
      /** The Svelte component constructor */
      __publicField(this, "$$ctor");
      /** Slots */
      __publicField(this, "$$s");
      /** @type {any} The Svelte component instance */
      __publicField(this, "$$c");
      /** Whether or not the custom element is connected */
      __publicField(this, "$$cn", false);
      /** @type {Record<string, any>} Component props data */
      __publicField(this, "$$d", {});
      /** `true` if currently in the process of reflecting component props back to attributes */
      __publicField(this, "$$r", false);
      /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
      __publicField(this, "$$p_d", {});
      /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
      __publicField(this, "$$l", {});
      /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
      __publicField(this, "$$l_u", /* @__PURE__ */ new Map());
      /** @type {any} The managed render effect for reflecting attributes */
      __publicField(this, "$$me");
      this.$$ctor = $$componentCtor;
      this.$$s = $$slots;
      if (use_shadow_dom) {
        this.attachShadow({ mode: "open" });
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
    connectedCallback() {
      return __async(this, null, function* () {
        this.$$cn = true;
        if (!this.$$c) {
          let create_slot = function(name) {
            return (anchor) => {
              const slot2 = document.createElement("slot");
              if (name !== "default") slot2.name = name;
              append(anchor, slot2);
            };
          };
          yield Promise.resolve();
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
            target: this.shadowRoot || this,
            props: __spreadProps(__spreadValues({}, this.$$d), {
              $$slots,
              $$host: this
            })
          });
          this.$$me = effect_root(() => {
            render_effect(() => {
              var _a3;
              this.$$r = true;
              for (const key2 of object_keys(this.$$c)) {
                if (!((_a3 = this.$$p_d[key2]) == null ? void 0 : _a3.reflect)) continue;
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
      });
    }
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
    /**
     * @param {string} attr
     * @param {string} _oldValue
     * @param {string} newValue
     */
    attributeChangedCallback(attr2, _oldValue, newValue) {
      var _a3;
      if (this.$$r) return;
      attr2 = this.$$g_p(attr2);
      this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
      (_a3 = this.$$c) == null ? void 0 : _a3.$set({ [attr2]: this.$$d[attr2] });
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
  var _a3;
  const type = (_a3 = props_definition[prop2]) == null ? void 0 : _a3.type;
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
if (dev_fallback_default) {
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
  var _a3;
  var l = (
    /** @type {ComponentContextLegacy} */
    context.l
  );
  return (_a3 = l.u) != null ? _a3 : l.u = { a: [], b: [], m: [] };
}

// node_modules/svelte/src/version.js
var PUBLIC_VERSION = "5";

// node_modules/svelte/src/internal/disclose-version.js
var _a2, _b2, _c;
if (typeof window !== "undefined") {
  ((_c = (_b2 = (_a2 = window.__svelte) != null ? _a2 : window.__svelte = {}).v) != null ? _c : _b2.v = /* @__PURE__ */ new Set()).add(PUBLIC_VERSION);
}

// node_modules/svelte/src/internal/flags/legacy.js
enable_legacy_mode_flag();

// node_modules/svelte/src/reactivity/set.js
var read_methods = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"];
var set_like_methods = ["difference", "intersection", "symmetricDifference", "union"];
var inited = false;
var _sources, _version, _size, _update_version, _SvelteSet_instances, source_fn, init_fn;
var _SvelteSet = class _SvelteSet extends Set {
  /**
   * @param {Iterable<T> | null | undefined} [value]
   */
  constructor(value) {
    super();
    __privateAdd(this, _SvelteSet_instances);
    /** @type {Map<T, Source<boolean>>} */
    __privateAdd(this, _sources, /* @__PURE__ */ new Map());
    __privateAdd(this, _version, state(0));
    __privateAdd(this, _size, state(0));
    __privateAdd(this, _update_version, update_version || -1);
    if (dev_fallback_default) {
      value = new Set(value);
      tag(__privateGet(this, _version), "SvelteSet version");
      tag(__privateGet(this, _size), "SvelteSet.size");
    }
    if (value) {
      for (var element2 of value) {
        super.add(element2);
      }
      __privateGet(this, _size).v = super.size;
    }
    if (!inited) __privateMethod(this, _SvelteSet_instances, init_fn).call(this);
  }
  /** @param {T} value */
  has(value) {
    var has = super.has(value);
    var sources = __privateGet(this, _sources);
    var s = sources.get(value);
    if (s === void 0) {
      if (!has) {
        get(__privateGet(this, _version));
        return false;
      }
      s = __privateMethod(this, _SvelteSet_instances, source_fn).call(this, true);
      if (dev_fallback_default) {
        tag(s, `SvelteSet has(${label(value)})`);
      }
      sources.set(value, s);
    }
    get(s);
    return has;
  }
  /** @param {T} value */
  add(value) {
    if (!super.has(value)) {
      super.add(value);
      set(__privateGet(this, _size), super.size);
      increment(__privateGet(this, _version));
    }
    return this;
  }
  /** @param {T} value */
  delete(value) {
    var deleted = super.delete(value);
    var sources = __privateGet(this, _sources);
    var s = sources.get(value);
    if (s !== void 0) {
      sources.delete(value);
      set(s, false);
    }
    if (deleted) {
      set(__privateGet(this, _size), super.size);
      increment(__privateGet(this, _version));
    }
    return deleted;
  }
  clear() {
    if (super.size === 0) {
      return;
    }
    super.clear();
    var sources = __privateGet(this, _sources);
    for (var s of sources.values()) {
      set(s, false);
    }
    sources.clear();
    set(__privateGet(this, _size), 0);
    increment(__privateGet(this, _version));
  }
  keys() {
    return this.values();
  }
  values() {
    get(__privateGet(this, _version));
    return super.values();
  }
  entries() {
    get(__privateGet(this, _version));
    return super.entries();
  }
  [Symbol.iterator]() {
    return this.keys();
  }
  get size() {
    return get(__privateGet(this, _size));
  }
};
_sources = new WeakMap();
_version = new WeakMap();
_size = new WeakMap();
_update_version = new WeakMap();
_SvelteSet_instances = new WeakSet();
/**
 * If the source is being created inside the same reaction as the SvelteSet instance,
 * we use `state` so that it will not be a dependency of the reaction. Otherwise we
 * use `source` so it will be.
 *
 * @template T
 * @param {T} value
 * @returns {Source<T>}
 */
source_fn = function(value) {
  return update_version === __privateGet(this, _update_version) ? state(value) : source(value);
};
// We init as part of the first instance so that we can treeshake this class
init_fn = function() {
  inited = true;
  var proto = _SvelteSet.prototype;
  var set_proto = Set.prototype;
  for (const method of read_methods) {
    proto[method] = function(...v) {
      get(__privateGet(this, _version));
      return set_proto[method].apply(this, v);
    };
  }
  for (const method of set_like_methods) {
    proto[method] = function(...v) {
      get(__privateGet(this, _version));
      var set2 = (
        /** @type {Set<T>} */
        set_proto[method].apply(this, v)
      );
      return new _SvelteSet(set2);
    };
  }
};
var SvelteSet = _SvelteSet;

// node_modules/svelte/src/reactivity/url-search-params.js
var REPLACE = Symbol();
var _version2, _url, _updating, _SvelteURLSearchParams_instances, update_url_fn;
var SvelteURLSearchParams = class extends URLSearchParams {
  constructor() {
    super(...arguments);
    __privateAdd(this, _SvelteURLSearchParams_instances);
    __privateAdd(this, _version2, dev_fallback_default ? tag(state(0), "SvelteURLSearchParams version") : state(0));
    __privateAdd(this, _url, get_current_url());
    __privateAdd(this, _updating, false);
  }
  /**
   * @param {URLSearchParams} params
   * @internal
   */
  [REPLACE](params) {
    if (__privateGet(this, _updating)) return;
    __privateSet(this, _updating, true);
    for (const key2 of [...super.keys()]) {
      super.delete(key2);
    }
    for (const [key2, value] of params) {
      super.append(key2, value);
    }
    increment(__privateGet(this, _version2));
    __privateSet(this, _updating, false);
  }
  /**
   * @param {string} name
   * @param {string} value
   * @returns {void}
   */
  append(name, value) {
    super.append(name, value);
    __privateMethod(this, _SvelteURLSearchParams_instances, update_url_fn).call(this);
    increment(__privateGet(this, _version2));
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
      __privateMethod(this, _SvelteURLSearchParams_instances, update_url_fn).call(this);
      increment(__privateGet(this, _version2));
    }
  }
  /**
   * @param {string} name
   * @returns {string|null}
   */
  get(name) {
    get(__privateGet(this, _version2));
    return super.get(name);
  }
  /**
   * @param {string} name
   * @returns {string[]}
   */
  getAll(name) {
    get(__privateGet(this, _version2));
    return super.getAll(name);
  }
  /**
   * @param {string} name
   * @param {string=} value
   * @returns {boolean}
   */
  has(name, value) {
    get(__privateGet(this, _version2));
    return super.has(name, value);
  }
  keys() {
    get(__privateGet(this, _version2));
    return super.keys();
  }
  /**
   * @param {string} name
   * @param {string} value
   * @returns {void}
   */
  set(name, value) {
    var previous = super.getAll(name).join("");
    super.set(name, value);
    if (previous !== super.getAll(name).join("")) {
      __privateMethod(this, _SvelteURLSearchParams_instances, update_url_fn).call(this);
      increment(__privateGet(this, _version2));
    }
  }
  sort() {
    super.sort();
    __privateMethod(this, _SvelteURLSearchParams_instances, update_url_fn).call(this);
    increment(__privateGet(this, _version2));
  }
  toString() {
    get(__privateGet(this, _version2));
    return super.toString();
  }
  values() {
    get(__privateGet(this, _version2));
    return super.values();
  }
  entries() {
    get(__privateGet(this, _version2));
    return super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    get(__privateGet(this, _version2));
    return super.size;
  }
};
_version2 = new WeakMap();
_url = new WeakMap();
_updating = new WeakMap();
_SvelteURLSearchParams_instances = new WeakSet();
update_url_fn = function() {
  if (!__privateGet(this, _url) || __privateGet(this, _updating)) return;
  __privateSet(this, _updating, true);
  const search = this.toString();
  __privateGet(this, _url).search = search && `?${search}`;
  __privateSet(this, _updating, false);
};

// node_modules/svelte/src/reactivity/url.js
var current_url = null;
function get_current_url() {
  return current_url;
}

// node_modules/@event-calendar/core/dist/index.js
function keyEnter(fn) {
  return function(e) {
    return e.key === "Enter" || e.key === " " && !e.preventDefault() ? fn.call(this, e) : void 0;
  };
}
function setContent(node, content) {
  let actions = {
    update(content2) {
      if (typeof content2 == "string") {
        node.innerText = content2;
      } else if (content2 == null ? void 0 : content2.domNodes) {
        node.replaceChildren(...content2.domNodes);
      } else if (content2 == null ? void 0 : content2.html) {
        node.innerHTML = content2.html;
      }
    }
  };
  actions.update(content);
  return actions;
}
function outsideEvent(node, type) {
  const handlePointerDown = (jsEvent) => {
    if (node && !node.contains(jsEvent.target)) {
      node.dispatchEvent(
        new CustomEvent(type + "outside", { detail: { jsEvent } })
      );
    }
  };
  document.addEventListener(type, handlePointerDown, true);
  return {
    destroy() {
      document.removeEventListener(type, handlePointerDown, true);
    }
  };
}
function observeResize(node, callback) {
  let resizeObserver = new ResizeObserver((entries2) => {
    for (let entry of entries2) {
      callback(entry);
    }
  });
  resizeObserver.observe(node);
  return {
    destroy() {
      resizeObserver.unobserve(node);
    }
  };
}
var DAY_IN_SECONDS = 86400;
function createDate(input = void 0) {
  if (input !== void 0) {
    return input instanceof Date ? _fromLocalDate(input) : _fromISOString(input);
  }
  return _fromLocalDate(/* @__PURE__ */ new Date());
}
function createDuration(input) {
  if (typeof input === "number") {
    input = { seconds: input };
  } else if (typeof input === "string") {
    let seconds = 0, exp = 2;
    for (let part of input.split(":", 3)) {
      seconds += parseInt(part, 10) * Math.pow(60, exp--);
    }
    input = { seconds };
  } else if (input instanceof Date) {
    input = { hours: input.getUTCHours(), minutes: input.getUTCMinutes(), seconds: input.getUTCSeconds() };
  }
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
  return new Date(date.getTime());
}
function addDuration(date, duration, x = 1) {
  date.setUTCFullYear(date.getUTCFullYear() + x * duration.years);
  let month = date.getUTCMonth() + x * duration.months;
  date.setUTCMonth(month);
  month %= 12;
  if (month < 0) {
    month += 12;
  }
  while (date.getUTCMonth() !== month) {
    subtractDay(date);
  }
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
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
}
function toISOString(date, len = 19) {
  return date.toISOString().substring(0, len);
}
function datesEqual(date1, ...dates2) {
  return dates2.every((date2) => date1.getTime() === date2.getTime());
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
function nextDate(date, duration) {
  addDuration(date, duration);
  return date;
}
function prevDate(date, duration, hiddenDays) {
  subtractDuration(date, duration);
  if (hiddenDays.length && hiddenDays.length < 7) {
    while (hiddenDays.includes(date.getUTCDay())) {
      subtractDay(date);
    }
  }
  return date;
}
function getWeekNumber(date, firstDay) {
  date = cloneDate(date);
  if (firstDay == 0) {
    date.setUTCDate(date.getUTCDate() + 6 - date.getUTCDay());
  } else {
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  }
  let yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil(((date - yearStart) / 1e3 / DAY_IN_SECONDS + 1) / 7);
}
function _fromLocalDate(date) {
  return new Date(Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ));
}
function _fromISOString(str) {
  const parts = str.match(/\d+/g);
  return new Date(Date.UTC(
    Number(parts[0]),
    Number(parts[1]) - 1,
    Number(parts[2]),
    Number(parts[3] || 0),
    Number(parts[4] || 0),
    Number(parts[5] || 0)
  ));
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
function floor(value) {
  return Math.floor(value);
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
function isArray(value) {
  return Array.isArray(value);
}
function isFunction(value) {
  return typeof value === "function";
}
function run2(fn) {
  return fn();
}
function runAll(fns) {
  fns.forEach(run2);
}
function noop2() {
}
var identity = (x) => x;
function stopPropagation2(fn) {
  return function(event2) {
    event2.stopPropagation();
    if (fn) {
      fn.call(this, event2);
    }
  };
}
function debounce(fn, handle, queueStore) {
  queueStore.update((queue) => queue.set(handle, fn));
}
function flushDebounce(queue) {
  runAll(queue);
  queue.clear();
}
function task(fn, handle, tasks2) {
  handle != null ? handle : handle = fn;
  if (!tasks2.has(handle)) {
    tasks2.set(handle, setTimeout(() => {
      tasks2.delete(handle);
      fn();
    }));
  }
}
var payloadProp = symbol();
function setPayload(obj, payload) {
  obj[payloadProp] = payload;
}
function hasPayload(obj) {
  return !!(obj == null ? void 0 : obj[payloadProp]);
}
function getPayload(obj) {
  return obj[payloadProp];
}
function createElement(tag2, className, content, attrs = []) {
  let el = document.createElement(tag2);
  el.className = className;
  if (typeof content == "string") {
    el.innerText = content;
  } else if (content.domNodes) {
    el.replaceChildren(...content.domNodes);
  } else if (content.html) {
    el.innerHTML = content.html;
  }
  for (let attr2 of attrs) {
    el.setAttribute(...attr2);
  }
  return el;
}
function hasYScroll(el) {
  return el.scrollHeight > el.clientHeight;
}
function rect(el) {
  return el.getBoundingClientRect();
}
function ancestor(el, up) {
  while (up--) {
    el = el.parentElement;
  }
  return el;
}
function height(el) {
  return rect(el).height;
}
function getElementWithPayload(x, y, root2 = document, processed = []) {
  processed.push(root2);
  for (let el of root2.elementsFromPoint(x, y)) {
    if (hasPayload(el)) {
      return el;
    }
    if (el.shadowRoot && !processed.includes(el.shadowRoot)) {
      let shadowEl = getElementWithPayload(x, y, el.shadowRoot, processed);
      if (shadowEl) {
        return shadowEl;
      }
    }
  }
  return null;
}
function listen2(node, event2, handler, options) {
  node.addEventListener(event2, handler, options);
  return () => node.removeEventListener(event2, handler, options);
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
function listView(view2) {
  return view2.startsWith("list");
}
function timelineView(view2) {
  return view2.includes("Timeline");
}
var eventId = 1;
function createEvents(input) {
  return input.map((event2) => {
    var _a3, _b3, _c2, _d, _e;
    let result = {
      id: "id" in event2 ? String(event2.id) : `{generated-${eventId++}}`,
      resourceIds: toArrayProp(event2, "resourceId").map(String),
      allDay: (_a3 = event2.allDay) != null ? _a3 : noTimePart(event2.start) && noTimePart(event2.end),
      start: createDate(event2.start),
      end: createDate(event2.end),
      title: (_b3 = event2.title) != null ? _b3 : "",
      editable: event2.editable,
      startEditable: event2.startEditable,
      durationEditable: event2.durationEditable,
      display: (_c2 = event2.display) != null ? _c2 : "auto",
      extendedProps: (_d = event2.extendedProps) != null ? _d : {},
      backgroundColor: (_e = event2.backgroundColor) != null ? _e : event2.color,
      textColor: event2.textColor,
      classNames: toArrayProp(event2, "className"),
      styles: toArrayProp(event2, "style")
    };
    if (result.allDay) {
      setMidnight(result.start);
      let end = cloneDate(result.end);
      setMidnight(result.end);
      if (!datesEqual(result.end, end) || datesEqual(result.end, result.start)) {
        addDay(result.end);
      }
    }
    return result;
  });
}
function toArrayProp(input, propName) {
  var _a3, _b3;
  let result = (_b3 = (_a3 = input[propName + "s"]) != null ? _a3 : input[propName]) != null ? _b3 : [];
  return isArray(result) ? result : [result];
}
function createEventSources(input) {
  return input.map((source2) => ({
    events: source2.events,
    url: source2.url && source2.url.trimEnd("&") || "",
    method: source2.method && source2.method.toUpperCase() || "GET",
    extraParams: source2.extraParams || {}
  }));
}
function createEventChunk(event2, start, end) {
  let chunk = {
    start: event2.start > start ? event2.start : start,
    end: event2.end < end ? event2.end : end,
    event: event2
  };
  chunk.zeroDuration = datesEqual(chunk.start, chunk.end);
  return chunk;
}
function sortEventChunks(chunks) {
  chunks.sort((a, b) => a.start - b.start || b.event.allDay - a.event.allDay);
}
function createEventContent(chunk, displayEventEnd, eventContent, theme, _intlEventTime, _view) {
  let timeText = _intlEventTime.formatRange(
    chunk.start,
    displayEventEnd && chunk.event.display !== "pointer" && !chunk.zeroDuration ? copyTime(cloneDate(chunk.start), chunk.end) : chunk.start
  );
  let content;
  if (eventContent) {
    content = isFunction(eventContent) ? eventContent({
      event: toEventWithLocalDates(chunk.event),
      timeText,
      view: toViewWithLocalDates(_view)
    }) : eventContent;
  }
  if (content === void 0) {
    let domNodes;
    switch (chunk.event.display) {
      case "background":
        domNodes = [];
        break;
      case "pointer":
        domNodes = [createTimeElement(timeText, chunk, theme)];
        break;
      default:
        domNodes = [
          ...chunk.event.allDay ? [] : [createTimeElement(timeText, chunk, theme)],
          createElement("h4", theme.eventTitle, chunk.event.title)
        ];
    }
    content = { domNodes };
  }
  return [timeText, content];
}
function createTimeElement(timeText, chunk, theme) {
  return createElement(
    "time",
    theme.eventTime,
    timeText,
    [["datetime", toISOString(chunk.start)]]
  );
}
function createEventClasses(eventClassNames, event2, _view) {
  let result = event2.classNames;
  if (eventClassNames) {
    if (isFunction(eventClassNames)) {
      eventClassNames = eventClassNames({
        event: toEventWithLocalDates(event2),
        view: toViewWithLocalDates(_view)
      });
    }
    result = [
      ...isArray(eventClassNames) ? eventClassNames : [eventClassNames],
      ...result
    ];
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
function prepareEventChunks$1(chunks, hiddenDays) {
  let longChunks = {};
  if (chunks.length) {
    sortEventChunks(chunks);
    let prevChunk;
    for (let chunk of chunks) {
      let dates = [];
      let date = setMidnight(cloneDate(chunk.start));
      while (chunk.end > date) {
        if (!hiddenDays.includes(date.getUTCDay())) {
          dates.push(cloneDate(date));
          if (dates.length > 1) {
            let key2 = date.getTime();
            if (longChunks[key2]) {
              longChunks[key2].chunks.push(chunk);
            } else {
              longChunks[key2] = {
                sorted: false,
                chunks: [chunk]
              };
            }
          }
        }
        addDay(date);
      }
      if (dates.length) {
        chunk.date = dates[0];
        chunk.days = dates.length;
        chunk.dates = dates;
        if (chunk.start < dates[0]) {
          chunk.start = dates[0];
        }
        let maxEnd = addDay(cloneDate(dates.at(-1)));
        if (chunk.end > maxEnd) {
          chunk.end = maxEnd;
        }
      } else {
        chunk.date = setMidnight(cloneDate(chunk.start));
        chunk.days = 1;
        chunk.dates = [chunk.date];
      }
      if (prevChunk && datesEqual(prevChunk.date, chunk.date)) {
        chunk.prev = prevChunk;
      }
      prevChunk = chunk;
    }
  }
  return longChunks;
}
function repositionEvent$1(chunk, longChunks, height2) {
  chunk.top = 0;
  if (chunk.prev) {
    chunk.top = chunk.prev.bottom + 1;
  }
  chunk.bottom = chunk.top + height2;
  let margin = 1;
  let key2 = chunk.date.getTime();
  if (longChunks[key2]) {
    if (!longChunks[key2].sorted) {
      longChunks[key2].chunks.sort((a, b) => a.top - b.top);
      longChunks[key2].sorted = true;
    }
    for (let longChunk of longChunks[key2].chunks) {
      if (chunk.top < longChunk.bottom && chunk.bottom > longChunk.top) {
        let offset = longChunk.bottom - chunk.top + 1;
        margin += offset;
        chunk.top += offset;
        chunk.bottom += offset;
      }
    }
  }
  return margin;
}
function runReposition(refs, data) {
  var _a3;
  refs.length = data.length;
  let result = [];
  for (let ref of refs) {
    result.push((_a3 = ref == null ? void 0 : ref.reposition) == null ? void 0 : _a3.call(ref));
  }
  return result;
}
function eventIntersects(event2, start, end, resources) {
  if (event2.start < end && event2.end > start) {
    if (resources) {
      if (!isArray(resources)) {
        resources = [resources];
      }
      return resources.some((resource) => event2.resourceIds.includes(resource.id));
    }
    return true;
  }
  return false;
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
  return __spreadProps(__spreadValues({}, text2), {
    next: "Next " + period,
    prev: "Previous " + period
  });
}
function themeView(view2) {
  return (theme) => __spreadProps(__spreadValues({}, theme), { view: view2 });
}
function createDateRange(input) {
  let start, end;
  if (input) {
    ({ start, end } = input);
    if (start) {
      start = setMidnight(createDate(start));
    }
    if (end) {
      end = setMidnight(createDate(end));
    }
  }
  return { start, end };
}
function outsideRange(date, range) {
  return range.start && date < range.start || range.end && date > range.end;
}
function limitToRange(date, range) {
  if (range.start && date < range.start) {
    date = range.start;
  }
  if (range.end && date > range.end) {
    date = range.end;
  }
  return date;
}
function createResources(input) {
  let result = [];
  _createResources(input, 0, result);
  return result;
}
function _createResources(input, level, flat) {
  let result = [];
  for (let item of input) {
    let resource = createResource(item);
    result.push(resource);
    flat.push(resource);
    let payload = {
      level,
      children: [],
      expanded: true,
      hidden: false
    };
    setPayload(resource, payload);
    if (item.children) {
      payload.children = _createResources(item.children, level + 1, flat);
    }
  }
  return result;
}
function createResource(input) {
  var _a3;
  return {
    id: String(input.id),
    title: input.title || "",
    eventBackgroundColor: input.eventBackgroundColor,
    eventTextColor: input.eventTextColor,
    extendedProps: (_a3 = input.extendedProps) != null ? _a3 : {}
  };
}
function resourceBackgroundColor(event2, resources) {
  var _a3;
  return (_a3 = findResource(event2, resources)) == null ? void 0 : _a3.eventBackgroundColor;
}
function resourceTextColor(event2, resources) {
  var _a3;
  return (_a3 = findResource(event2, resources)) == null ? void 0 : _a3.eventTextColor;
}
function findResource(event2, resources) {
  return resources.find((resource) => event2.resourceIds.includes(resource.id));
}
function intl(locale, format) {
  return derived2([locale, format], ([$locale, $format]) => {
    let intl2 = isFunction($format) ? { format: $format } : new Intl.DateTimeFormat($locale, $format);
    return {
      format: (date) => intl2.format(toLocalDate(date))
    };
  });
}
function intlRange(locale, format) {
  return derived2([locale, format], ([$locale, $format]) => {
    let formatRange;
    if (isFunction($format)) {
      formatRange = $format;
    } else {
      let intl2 = new Intl.DateTimeFormat($locale, $format);
      formatRange = (start, end) => {
        if (start <= end) {
          return intl2.formatRange(start, end);
        } else {
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
            } else {
              result += part.value;
            }
          }
          return result;
        }
      };
    }
    return {
      formatRange: (start, end) => formatRange(toLocalDate(start), toLocalDate(end))
    };
  });
}
function _getParts(source2, parts) {
  let result = "";
  for (let part of parts) {
    if (part.source == source2) {
      result += part.value;
    }
  }
  return result;
}
function createTimes(date, $slotDuration, $slotLabelInterval, $_slotTimeLimits, $_intlSlotLabel) {
  date = cloneDate(date);
  let times2 = [];
  let end = cloneDate(date);
  addDuration(date, $_slotTimeLimits.min);
  addDuration(end, $_slotTimeLimits.max);
  if ($slotLabelInterval === void 0) {
    $slotLabelInterval = $slotDuration.seconds < 3600 ? createDuration($slotDuration.seconds * 2) : $slotDuration;
  }
  let label2 = cloneDate(date);
  while (date < end) {
    times2.push([
      toISOString(date),
      $_intlSlotLabel.format(date),
      date >= label2
    ]);
    while ($slotLabelInterval.seconds && date >= label2) {
      addDuration(label2, $slotLabelInterval);
    }
    addDuration(date, $slotDuration);
  }
  return times2;
}
function createSlotTimeLimits($slotMinTime, $slotMaxTime, $flexibleSlotTimeLimits, $_viewDates, $_filteredEvents) {
  let min$1 = createDuration($slotMinTime);
  let max$1 = createDuration($slotMaxTime);
  if ($flexibleSlotTimeLimits) {
    let minMin = createDuration(min(toSeconds(min$1), max(0, toSeconds(max$1) - DAY_IN_SECONDS)));
    let maxMax = createDuration(max(toSeconds(max$1), toSeconds(minMin) + DAY_IN_SECONDS));
    let filter = isFunction($flexibleSlotTimeLimits == null ? void 0 : $flexibleSlotTimeLimits.eventFilter) ? $flexibleSlotTimeLimits.eventFilter : (event2) => !bgEvent(event2.display);
    loop: for (let date of $_viewDates) {
      let start = addDuration(cloneDate(date), min$1);
      let end = addDuration(cloneDate(date), max$1);
      let minStart = addDuration(cloneDate(date), minMin);
      let maxEnd = addDuration(cloneDate(date), maxMax);
      for (let event2 of $_filteredEvents) {
        if (!event2.allDay && filter(event2) && event2.start < maxEnd && event2.end > minStart) {
          if (event2.start < start) {
            let seconds = max((event2.start - date) / 1e3, toSeconds(minMin));
            if (seconds < toSeconds(min$1)) {
              min$1.seconds = seconds;
            }
          }
          if (event2.end > end) {
            let seconds = min((event2.end - date) / 1e3, toSeconds(maxMax));
            if (seconds > toSeconds(max$1)) {
              max$1.seconds = seconds;
            }
          }
          if (toSeconds(min$1) === toSeconds(minMin) && toSeconds(max$1) === toSeconds(maxMax)) {
            break loop;
          }
        }
      }
    }
  }
  return { min: min$1, max: max$1 };
}
function createOptions(plugins) {
  var _a3;
  let options = {
    allDayContent: void 0,
    allDaySlot: true,
    buttonText: {
      today: "today"
    },
    customButtons: {},
    date: /* @__PURE__ */ new Date(),
    datesSet: void 0,
    dayHeaderFormat: {
      weekday: "short",
      month: "numeric",
      day: "numeric"
    },
    dayHeaderAriaLabelFormat: {
      dateStyle: "full"
    },
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
    // ec option
    eventMouseEnter: void 0,
    eventMouseLeave: void 0,
    eventSources: [],
    eventTextColor: void 0,
    eventTimeFormat: {
      hour: "numeric",
      minute: "2-digit"
    },
    filterEventsWithResources: false,
    filterResourcesWithEvents: false,
    firstDay: 0,
    flexibleSlotTimeLimits: false,
    // ec option
    headerToolbar: {
      start: "title",
      center: "",
      end: "today prev,next"
    },
    height: void 0,
    hiddenDays: [],
    highlightedDates: [],
    // ec option
    lazyFetching: true,
    loading: void 0,
    locale: void 0,
    nowIndicator: false,
    resourceLabelContent: void 0,
    resourceLabelDidMount: void 0,
    resources: [],
    selectable: false,
    scrollTime: "06:00:00",
    slotDuration: "00:30:00",
    slotEventOverlap: true,
    slotHeight: 24,
    // ec option
    slotLabelInterval: void 0,
    slotLabelFormat: {
      hour: "numeric",
      minute: "2-digit"
    },
    slotMaxTime: "24:00:00",
    slotMinTime: "00:00:00",
    slotWidth: 72,
    theme: {
      allDay: "ec-all-day",
      active: "ec-active",
      bgEvent: "ec-bg-event",
      bgEvents: "ec-bg-events",
      body: "ec-body",
      button: "ec-button",
      buttonGroup: "ec-button-group",
      calendar: "ec",
      content: "ec-content",
      day: "ec-day",
      dayHead: "ec-day-head",
      days: "ec-days",
      disabled: "ec-disabled",
      event: "ec-event",
      eventBody: "ec-event-body",
      eventTime: "ec-event-time",
      eventTitle: "ec-event-title",
      events: "ec-events",
      extra: "ec-extra",
      handle: "ec-handle",
      header: "ec-header",
      hiddenScroll: "ec-hidden-scroll",
      highlight: "ec-highlight",
      icon: "ec-icon",
      line: "ec-line",
      lines: "ec-lines",
      minor: "ec-minor",
      nowIndicator: "ec-now-indicator",
      otherMonth: "ec-other-month",
      resource: "ec-resource",
      sidebar: "ec-sidebar",
      sidebarTitle: "ec-sidebar-title",
      today: "ec-today",
      time: "ec-time",
      title: "ec-title",
      toolbar: "ec-toolbar",
      view: "",
      weekdays: ["ec-sun", "ec-mon", "ec-tue", "ec-wed", "ec-thu", "ec-fri", "ec-sat"],
      withScroll: "ec-with-scroll"
    },
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
  for (let plugin of plugins) {
    (_a3 = plugin.createOptions) == null ? void 0 : _a3.call(plugin, options);
  }
  return options;
}
function createParsers(plugins) {
  var _a3;
  let parsers = {
    date: (date) => setMidnight(createDate(date)),
    duration: createDuration,
    events: createEvents,
    eventSources: createEventSources,
    hiddenDays: (days2) => [...new Set(days2)],
    highlightedDates: (dates) => dates.map((date) => setMidnight(createDate(date))),
    resources: createResources,
    scrollTime: createDuration,
    slotDuration: createDuration,
    slotLabelInterval: (input) => input !== void 0 ? createDuration(input) : void 0,
    slotMaxTime: createDuration,
    slotMinTime: createDuration,
    validRange: createDateRange
  };
  for (let plugin of plugins) {
    (_a3 = plugin.createParsers) == null ? void 0 : _a3.call(plugin, parsers);
  }
  return parsers;
}
function diff(options, prevOptions) {
  let diff2 = [];
  for (let key2 of keys(options)) {
    if (options[key2] !== prevOptions[key2]) {
      diff2.push([key2, options[key2]]);
    }
  }
  return diff2;
}
function dayGrid(state2) {
  return derived2(state2.view, ($view) => $view == null ? void 0 : $view.startsWith("dayGrid"));
}
function activeRange(state2) {
  return derived2(
    [state2._currentRange, state2.firstDay, state2.slotMaxTime, state2._dayGrid],
    ([$_currentRange, $firstDay, $slotMaxTime, $_dayGrid]) => {
      let start = cloneDate($_currentRange.start);
      let end = cloneDate($_currentRange.end);
      if ($_dayGrid) {
        prevClosestDay(start, $firstDay);
        nextClosestDay(end, $firstDay);
      } else if ($slotMaxTime.days || $slotMaxTime.seconds > DAY_IN_SECONDS) {
        addDuration(subtractDay(end), $slotMaxTime);
        let start2 = subtractDay(cloneDate(end));
        if (start2 < start) {
          start = start2;
        }
      }
      return { start, end };
    }
  );
}
function currentRange(state2) {
  return derived2(
    [state2.date, state2.duration, state2.firstDay],
    ([$date, $duration, $firstDay]) => {
      let start = cloneDate($date), end;
      if ($duration.months) {
        start.setUTCDate(1);
      } else if ($duration.inWeeks) {
        prevClosestDay(start, $firstDay);
      }
      end = addDuration(cloneDate(start), $duration);
      return { start, end };
    }
  );
}
function viewDates(state2) {
  return derived2([state2._activeRange, state2.hiddenDays], ([$_activeRange, $hiddenDays]) => {
    let dates = [];
    let date = setMidnight(cloneDate($_activeRange.start));
    let end = setMidnight(cloneDate($_activeRange.end));
    while (date < end) {
      if (!$hiddenDays.includes(date.getUTCDay())) {
        dates.push(cloneDate(date));
      }
      addDay(date);
    }
    if (!dates.length && $hiddenDays.length && $hiddenDays.length < 7) {
      state2.date.update((date2) => {
        while ($hiddenDays.includes(date2.getUTCDay())) {
          addDay(date2);
        }
        return date2;
      });
      dates = get2(state2._viewDates);
    }
    return dates;
  });
}
function viewTitle(state2) {
  return derived2(
    [state2.date, state2._activeRange, state2._intlTitle, state2._dayGrid],
    ([$date, $_activeRange, $_intlTitle, $_dayGrid]) => {
      return $_dayGrid ? $_intlTitle.formatRange($date, $date) : $_intlTitle.formatRange($_activeRange.start, subtractDay(cloneDate($_activeRange.end)));
    }
  );
}
function view(state2) {
  return derived2([state2.view, state2._viewTitle, state2._currentRange, state2._activeRange], (args) => createView(...args));
}
function events(state2) {
  let _events2 = writable([]);
  let abortController;
  let fetching = 0;
  let debounceHandle = {};
  derived2(
    [state2.events, state2.eventSources, state2._activeRange, state2._fetchedRange, state2.lazyFetching, state2.loading],
    (values, set2) => debounce(() => {
      let [$events, $eventSources, $_activeRange, $_fetchedRange, $lazyFetching, $loading] = values;
      if (!$eventSources.length) {
        set2($events);
        return;
      }
      if (!$_fetchedRange.start || $_fetchedRange.start > $_activeRange.start || $_fetchedRange.end < $_activeRange.end || !$lazyFetching) {
        if (abortController) {
          abortController.abort();
        }
        abortController = new AbortController();
        if (isFunction($loading) && !fetching) {
          $loading(true);
        }
        let stopLoading = () => {
          if (--fetching === 0 && isFunction($loading)) {
            $loading(false);
          }
        };
        let events2 = [];
        let failure = (e) => stopLoading();
        let success = (data) => {
          events2 = events2.concat(createEvents(data));
          set2(events2);
          stopLoading();
        };
        let startStr = toISOString($_activeRange.start);
        let endStr = toISOString($_activeRange.end);
        for (let source2 of $eventSources) {
          if (isFunction(source2.events)) {
            let result = source2.events({
              start: toLocalDate($_activeRange.start),
              end: toLocalDate($_activeRange.end),
              startStr,
              endStr
            }, success, failure);
            if (result !== void 0) {
              Promise.resolve(result).then(success, failure);
            }
          } else {
            let params = isFunction(source2.extraParams) ? source2.extraParams() : assign2({}, source2.extraParams);
            params.start = startStr;
            params.end = endStr;
            params = new URLSearchParams(params);
            let url = source2.url, headers = {}, body;
            if (["GET", "HEAD"].includes(source2.method)) {
              url += (url.includes("?") ? "&" : "?") + params;
            } else {
              headers["content-type"] = "application/x-www-form-urlencoded;charset=UTF-8";
              body = String(params);
            }
            fetch(url, { method: source2.method, headers, body, signal: abortController.signal, credentials: "same-origin" }).then((response) => response.json()).then(success).catch(failure);
          }
          ++fetching;
        }
        $_fetchedRange.start = $_activeRange.start;
        $_fetchedRange.end = $_activeRange.end;
      }
    }, debounceHandle, state2._queue),
    []
  ).subscribe(_events2.set);
  return _events2;
}
function filteredEvents(state2) {
  let view2;
  state2._view.subscribe(($_view) => view2 = $_view);
  let debounceHandle = {};
  return derived2(
    [state2._events, state2.eventFilter],
    (values, set2) => debounce(() => {
      let [$_events, $eventFilter] = values;
      set2(
        isFunction($eventFilter) ? $_events.filter((event2, index2, events2) => $eventFilter({
          event: event2,
          index: index2,
          events: events2,
          view: view2
        })) : $_events
      );
    }, debounceHandle, state2._queue),
    []
  );
}
function now() {
  return readable(createDate(), (set2) => {
    let interval = setInterval(() => {
      set2(createDate());
    }, 1e3);
    return () => clearInterval(interval);
  });
}
function today(state2) {
  return derived2(state2._now, ($_now) => setMidnight(cloneDate($_now)));
}
var State = class {
  constructor(plugins, input) {
    var _a4, _b4, _c2;
    var _a3, _b3;
    plugins = plugins || [];
    let options = createOptions(plugins);
    let parsers = createParsers(plugins);
    options = parseOpts(options, parsers);
    input = parseOpts(input, parsers);
    for (let [option, value] of Object.entries(options)) {
      this[option] = writable(value);
    }
    this._queue = writable(/* @__PURE__ */ new Map());
    this._tasks = /* @__PURE__ */ new Map();
    this._auxiliary = writable([]);
    this._dayGrid = dayGrid(this);
    this._currentRange = currentRange(this);
    this._activeRange = activeRange(this);
    this._fetchedRange = writable({ start: void 0, end: void 0 });
    this._events = events(this);
    this._now = now();
    this._today = today(this);
    this._intlEventTime = intlRange(this.locale, this.eventTimeFormat);
    this._intlSlotLabel = intl(this.locale, this.slotLabelFormat);
    this._intlDayHeader = intl(this.locale, this.dayHeaderFormat);
    this._intlDayHeaderAL = intl(this.locale, this.dayHeaderAriaLabelFormat);
    this._intlTitle = intlRange(this.locale, this.titleFormat);
    this._bodyEl = writable(void 0);
    this._scrollable = writable(false);
    this._recheckScrollable = writable(false);
    this._viewTitle = viewTitle(this);
    this._viewDates = viewDates(this);
    this._view = view(this);
    this._viewComponent = writable(void 0);
    this._filteredEvents = filteredEvents(this);
    this._interaction = writable({});
    this._iEvents = writable([null, null]);
    this._iClasses = writable(identity);
    this._iClass = writable(void 0);
    this._set = (key2, value) => {
      if (validKey(key2, this)) {
        if (parsers[key2]) {
          value = parsers[key2](value);
        }
        this[key2].set(value);
      }
    };
    this._get = (key2) => validKey(key2, this) ? get2(this[key2]) : void 0;
    for (let plugin of plugins) {
      (_a3 = plugin.createStores) == null ? void 0 : _a3.call(plugin, this);
    }
    if (input.view) {
      this.view.set(input.view);
    }
    let views = /* @__PURE__ */ new Set([...keys(options.views), ...keys((_a4 = input.views) != null ? _a4 : {})]);
    for (let view2 of views) {
      let defOpts = mergeOpts(options, (_b4 = options.views[view2]) != null ? _b4 : {});
      let opts = mergeOpts(defOpts, input, (_c2 = (_b3 = input.views) == null ? void 0 : _b3[view2]) != null ? _c2 : {});
      let component2 = opts.component;
      filterOpts(opts, this);
      for (let key2 of keys(opts)) {
        let _d = this[key2], { set: set2, _set = set2 } = _d, rest = __objRest(_d, ["set", "_set"]);
        this[key2] = __spreadValues({
          // Set value in all views
          set: ["buttonText", "theme"].includes(key2) ? (value) => {
            if (isFunction(value)) {
              let result = value(defOpts[key2]);
              opts[key2] = result;
              set2(set2 === _set ? result : value);
            } else {
              opts[key2] = value;
              set2(value);
            }
          } : (value) => {
            opts[key2] = value;
            set2(value);
          },
          _set
        }, rest);
      }
      this.view.subscribe((newView) => {
        if (newView === view2) {
          this._viewComponent.set(component2);
          if (isFunction(opts.viewDidMount)) {
            tick().then(() => opts.viewDidMount({
              view: toViewWithLocalDates(get2(this._view))
            }));
          }
          for (let key2 of keys(opts)) {
            this[key2]._set(opts[key2]);
          }
        }
      });
    }
  }
};
function parseOpts(opts, parsers) {
  let result = __spreadValues({}, opts);
  for (let key2 of keys(parsers)) {
    if (key2 in result) {
      result[key2] = parsers[key2](result[key2]);
    }
  }
  if (opts.views) {
    result.views = {};
    for (let view2 of keys(opts.views)) {
      result.views[view2] = parseOpts(opts.views[view2], parsers);
    }
  }
  return result;
}
function mergeOpts(...args) {
  let result = {};
  for (let opts of args) {
    let override = {};
    for (let key2 of ["buttonText", "theme"]) {
      if (isFunction(opts[key2])) {
        override[key2] = opts[key2](result[key2]);
      }
    }
    result = __spreadValues(__spreadValues(__spreadValues({}, result), opts), override);
  }
  return result;
}
function filterOpts(opts, state2) {
  keys(opts).filter((key2) => !validKey(key2, state2) || key2 === "view").forEach((key2) => delete opts[key2]);
}
function validKey(key2, state2) {
  return state2.hasOwnProperty(key2) && key2[0] !== "_";
}
var root_2$7 = from_html(`<h2></h2>`);
var root_4$3 = from_html(`<button><i></i></button>`);
var root_6$1 = from_html(`<button><i></i></button>`);
var root_8$1 = from_html(`<button> </button>`);
var root_10$1 = from_html(`<button></button>`);
var root_12$1 = from_html(`<button> </button>`);
function Buttons($$anchor, $$props) {
  push($$props, false);
  const [$$stores, $$cleanup] = setup_stores();
  const $validRange = () => store_get(validRange, "$validRange", $$stores);
  const $date = () => store_get(date, "$date", $$stores);
  const $duration = () => store_get(duration, "$duration", $$stores);
  const $hiddenDays = () => store_get(hiddenDays, "$hiddenDays", $$stores);
  const $_currentRange = () => store_get(_currentRange, "$_currentRange", $$stores);
  const $_viewDates = () => store_get(_viewDates, "$_viewDates", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  const $_viewTitle = () => store_get(_viewTitle, "$_viewTitle", $$stores);
  const $buttonText = () => store_get(buttonText, "$buttonText", $$stores);
  const $customButtons = () => store_get(customButtons, "$customButtons", $$stores);
  const $view = () => store_get(view2, "$view", $$stores);
  let buttons = prop($$props, "buttons", 8);
  let {
    _currentRange,
    _viewTitle,
    _viewDates,
    buttonText,
    customButtons,
    date,
    duration,
    hiddenDays,
    theme,
    validRange,
    view: view2
  } = getContext("state");
  let today2 = setMidnight(createDate());
  let prevDisabled = mutable_source(), nextDisabled = mutable_source(), todayDisabled = mutable_source();
  let running = mutable_source(false);
  function isRunning() {
    return get(running);
  }
  function test() {
    return $_viewDates().every((date2) => outsideRange(date2, $validRange()));
  }
  function prev() {
    store_set(date, prevDate($date(), $duration(), $hiddenDays()));
  }
  function next2() {
    store_set(date, nextDate($date(), $duration()));
  }
  legacy_pre_effect(
    () => ($validRange(), $date(), $duration(), $hiddenDays(), get(todayDisabled), $_currentRange(), tick),
    () => {
      if (!isRunning()) {
        set(running, true);
        set(prevDisabled, false);
        set(nextDisabled, false);
        if ($validRange().start) {
          let currentDate = cloneDate($date());
          store_set(date, prevDate($date(), $duration(), $hiddenDays()));
          set(prevDisabled, test());
          store_set(date, currentDate);
        }
        if ($validRange().end) {
          let currentDate = cloneDate($date());
          store_set(date, nextDate($date(), $duration()));
          set(nextDisabled, test());
          store_set(date, currentDate);
        }
        set(todayDisabled, today2 >= $_currentRange().start && today2 < $_currentRange().end);
        if (!get(todayDisabled) && ($validRange().start || $validRange().end)) {
          let currentDate = cloneDate($date());
          store_set(date, cloneDate(today2));
          set(todayDisabled, test());
          store_set(date, currentDate);
        }
        tick().then(() => set(running, false));
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  each(node, 1, buttons, index, ($$anchor2, button) => {
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    {
      var consequent = ($$anchor3) => {
        var h2 = root_2$7();
        action(h2, ($$node, $$action_arg) => setContent == null ? void 0 : setContent($$node, $$action_arg), $_viewTitle);
        template_effect(() => set_class(h2, 1, ($theme(), untrack(() => $theme().title))));
        append($$anchor3, h2);
      };
      var alternate_4 = ($$anchor3) => {
        var fragment_2 = comment();
        var node_2 = first_child(fragment_2);
        {
          var consequent_1 = ($$anchor4) => {
            var button_1 = root_4$3();
            var i = child(button_1);
            reset(button_1);
            template_effect(() => {
              var _a3, _b3, _c2, _d;
              set_class(button_1, 1, `${(_a3 = ($theme(), untrack(() => $theme().button))) != null ? _a3 : ""} ec-${(_b3 = get(button)) != null ? _b3 : ""}`);
              set_attribute2(button_1, "aria-label", ($buttonText(), untrack(() => $buttonText().prev)));
              set_attribute2(button_1, "title", ($buttonText(), untrack(() => $buttonText().prev)));
              button_1.disabled = get(prevDisabled);
              set_class(i, 1, `${(_c2 = ($theme(), untrack(() => $theme().icon))) != null ? _c2 : ""} ec-${(_d = get(button)) != null ? _d : ""}`);
            });
            event("click", button_1, prev);
            append($$anchor4, button_1);
          };
          var alternate_3 = ($$anchor4) => {
            var fragment_3 = comment();
            var node_3 = first_child(fragment_3);
            {
              var consequent_2 = ($$anchor5) => {
                var button_2 = root_6$1();
                var i_1 = child(button_2);
                reset(button_2);
                template_effect(() => {
                  var _a3, _b3, _c2, _d;
                  set_class(button_2, 1, `${(_a3 = ($theme(), untrack(() => $theme().button))) != null ? _a3 : ""} ec-${(_b3 = get(button)) != null ? _b3 : ""}`);
                  set_attribute2(button_2, "aria-label", ($buttonText(), untrack(() => $buttonText().next)));
                  set_attribute2(button_2, "title", ($buttonText(), untrack(() => $buttonText().next)));
                  button_2.disabled = get(nextDisabled);
                  set_class(i_1, 1, `${(_c2 = ($theme(), untrack(() => $theme().icon))) != null ? _c2 : ""} ec-${(_d = get(button)) != null ? _d : ""}`);
                });
                event("click", button_2, next2);
                append($$anchor5, button_2);
              };
              var alternate_2 = ($$anchor5) => {
                var fragment_4 = comment();
                var node_4 = first_child(fragment_4);
                {
                  var consequent_3 = ($$anchor6) => {
                    var button_3 = root_8$1();
                    var text2 = child(button_3, true);
                    reset(button_3);
                    template_effect(() => {
                      var _a3, _b3;
                      set_class(button_3, 1, `${(_a3 = ($theme(), untrack(() => $theme().button))) != null ? _a3 : ""} ec-${(_b3 = get(button)) != null ? _b3 : ""}`);
                      button_3.disabled = get(todayDisabled);
                      set_text(text2, ($buttonText(), get(button), untrack(() => $buttonText()[get(button)])));
                    });
                    event("click", button_3, () => store_set(date, cloneDate(today2)));
                    append($$anchor6, button_3);
                  };
                  var alternate_1 = ($$anchor6) => {
                    var fragment_5 = comment();
                    var node_5 = first_child(fragment_5);
                    {
                      var consequent_4 = ($$anchor7) => {
                        var button_4 = root_10$1();
                        effect(() => event("click", button_4, function(...$$args) {
                          var _a3;
                          (_a3 = $customButtons()[get(button)].click) == null ? void 0 : _a3.apply(this, $$args);
                        }));
                        action(button_4, ($$node, $$action_arg) => setContent == null ? void 0 : setContent($$node, $$action_arg), () => $customButtons()[get(button)].text);
                        template_effect(() => {
                          var _a3, _b3, _c2;
                          return set_class(button_4, 1, `${(_a3 = ($theme(), untrack(() => $theme().button))) != null ? _a3 : ""} ec-${(_b3 = get(button)) != null ? _b3 : ""}${(_c2 = ($customButtons(), get(button), $theme(), untrack(() => $customButtons()[get(button)].active ? " " + $theme().active : ""))) != null ? _c2 : ""}`);
                        });
                        append($$anchor7, button_4);
                      };
                      var alternate = ($$anchor7) => {
                        var fragment_6 = comment();
                        var node_6 = first_child(fragment_6);
                        {
                          var consequent_5 = ($$anchor8) => {
                            var button_5 = root_12$1();
                            var text_1 = child(button_5, true);
                            reset(button_5);
                            template_effect(() => {
                              var _a3, _b3, _c2;
                              set_class(button_5, 1, `${(_a3 = ($theme(), untrack(() => $theme().button))) != null ? _a3 : ""}${(_b3 = ($view(), get(button), $theme(), untrack(() => $view() === get(button) ? " " + $theme().active : ""))) != null ? _b3 : ""} ec-${(_c2 = get(button)) != null ? _c2 : ""}`);
                              set_text(text_1, ($buttonText(), get(button), untrack(() => $buttonText()[get(button)])));
                            });
                            event("click", button_5, () => store_set(view2, get(button)));
                            append($$anchor8, button_5);
                          };
                          if_block(
                            node_6,
                            ($$render) => {
                              if (get(button) != "") $$render(consequent_5);
                            },
                            true
                          );
                        }
                        append($$anchor7, fragment_6);
                      };
                      if_block(
                        node_5,
                        ($$render) => {
                          if ($customButtons(), get(button), untrack(() => $customButtons()[get(button)])) $$render(consequent_4);
                          else $$render(alternate, false);
                        },
                        true
                      );
                    }
                    append($$anchor6, fragment_5);
                  };
                  if_block(
                    node_4,
                    ($$render) => {
                      if (get(button) == "today") $$render(consequent_3);
                      else $$render(alternate_1, false);
                    },
                    true
                  );
                }
                append($$anchor5, fragment_4);
              };
              if_block(
                node_3,
                ($$render) => {
                  if (get(button) == "next") $$render(consequent_2);
                  else $$render(alternate_2, false);
                },
                true
              );
            }
            append($$anchor4, fragment_3);
          };
          if_block(
            node_2,
            ($$render) => {
              if (get(button) == "prev") $$render(consequent_1);
              else $$render(alternate_3, false);
            },
            true
          );
        }
        append($$anchor3, fragment_2);
      };
      if_block(node_1, ($$render) => {
        if (get(button) == "title") $$render(consequent);
        else $$render(alternate_4, false);
      });
    }
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_3$5 = from_html(`<div><!></div>`);
var root_1$d = from_html(`<div></div>`);
var root$r = from_html(`<nav></nav>`);
function Toolbar($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $headerToolbar = () => store_get(headerToolbar, "$headerToolbar", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  let { headerToolbar, theme } = getContext("state");
  let sections = user_derived(() => {
    var _a4;
    var _a3;
    let sections2 = {};
    for (let key2 of ["start", "center", "end"]) {
      sections2[key2] = (_a4 = (_a3 = $headerToolbar()[key2]) == null ? void 0 : _a3.split(" ").map((group) => group.split(","))) != null ? _a4 : [];
    }
    return sections2;
  });
  var nav = root$r();
  each(nav, 21, () => keys(get(sections)), index, ($$anchor2, key2) => {
    var div = root_1$d();
    each(div, 21, () => get(sections)[get(key2)], index, ($$anchor3, buttons) => {
      var fragment = comment();
      var node = first_child(fragment);
      {
        var consequent = ($$anchor4) => {
          var div_1 = root_3$5();
          var node_1 = child(div_1);
          Buttons(node_1, {
            get buttons() {
              return get(buttons);
            }
          });
          reset(div_1);
          template_effect(() => set_class(div_1, 1, $theme().buttonGroup));
          append($$anchor4, div_1);
        };
        var alternate = ($$anchor4) => {
          Buttons($$anchor4, {
            get buttons() {
              return get(buttons);
            }
          });
        };
        if_block(node, ($$render) => {
          if (get(buttons).length > 1) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      append($$anchor3, fragment);
    });
    reset(div);
    template_effect(() => {
      var _a3;
      return set_class(div, 1, `ec-${(_a3 = get(key2)) != null ? _a3 : ""}`);
    });
    append($$anchor2, div);
  });
  reset(nav);
  template_effect(() => set_class(nav, 1, $theme().toolbar));
  append($$anchor, nav);
  pop();
  $$cleanup();
}
function Auxiliary$1($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $_activeRange = () => store_get(_activeRange, "$_activeRange", $$stores);
  const $datesSet = () => store_get(datesSet, "$datesSet", $$stores);
  const $_view = () => store_get(_view, "$_view", $$stores);
  const $_filteredEvents = () => store_get(_filteredEvents, "$_filteredEvents", $$stores);
  const $eventAllUpdated = () => store_get(eventAllUpdated, "$eventAllUpdated", $$stores);
  const $_queue = () => store_get(_queue, "$_queue", $$stores);
  const $_recheckScrollable = () => store_get(_recheckScrollable, "$_recheckScrollable", $$stores);
  const $_bodyEl = () => store_get(_bodyEl, "$_bodyEl", $$stores);
  const $_auxiliary = () => store_get(_auxiliary, "$_auxiliary", $$stores);
  let {
    datesSet,
    eventAllUpdated,
    _auxiliary,
    _activeRange,
    _filteredEvents,
    _scrollable,
    _bodyEl,
    _tasks,
    _recheckScrollable,
    _queue,
    _view
  } = getContext("state");
  user_effect(() => {
    $_activeRange();
    untrack(() => {
      if (isFunction($datesSet())) {
        $datesSet()({
          start: toLocalDate($_activeRange().start),
          end: toLocalDate($_activeRange().end),
          startStr: toISOString($_activeRange().start),
          endStr: toISOString($_activeRange().end),
          view: toViewWithLocalDates($_view())
        });
      }
    });
  });
  user_effect(() => {
    $_filteredEvents();
    untrack(() => {
      if (isFunction($eventAllUpdated())) {
        task(() => $eventAllUpdated()({ view: toViewWithLocalDates($_view()) }), "eau", _tasks);
      }
    });
  });
  user_effect(() => {
    $_queue();
    untrack(() => {
      flushDebounce($_queue());
    });
  });
  user_effect(() => {
    $_recheckScrollable();
    untrack(() => {
      if ($_bodyEl()) {
        store_set(_scrollable, hasYScroll($_bodyEl()));
      }
      store_set(_recheckScrollable, false);
    });
  });
  var fragment = comment();
  var node = first_child(fragment);
  each(node, 1, $_auxiliary, index, ($$anchor2, Component) => {
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    component(node_1, () => get(Component), ($$anchor3, Component_1) => {
      Component_1($$anchor3, {});
    });
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$q = from_html(`<div><!> <!></div> <!>`, 1);
function Calendar($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $_events = () => store_get(_events2, "$_events", $$stores);
  const $_interaction = () => store_get(_interaction, "$_interaction", $$stores);
  const $date = () => store_get(date, "$date", $$stores);
  const $duration = () => store_get(duration, "$duration", $$stores);
  const $hiddenDays = () => store_get(hiddenDays, "$hiddenDays", $$stores);
  const $_viewComponent = () => store_get(_viewComponent, "$_viewComponent", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  const $_scrollable = () => store_get(_scrollable, "$_scrollable", $$stores);
  const $_iClass = () => store_get(_iClass, "$_iClass", $$stores);
  const $height = () => store_get(height2, "$height", $$stores);
  const $view = () => store_get(view2, "$view", $$stores);
  let plugins = prop($$props, "plugins", 19, () => []), options = prop($$props, "options", 19, () => ({}));
  let state2 = new State(plugins(), options());
  setContext("state", state2);
  let {
    _viewComponent,
    _interaction,
    _iClass,
    _events: _events2,
    _scrollable,
    date,
    duration,
    hiddenDays,
    height: height2,
    theme,
    view: view2
  } = state2;
  let prevOptions = __spreadValues({}, options());
  user_effect(() => {
    for (let [name, value] of diff(options(), prevOptions)) {
      untrack(() => {
        setOption(name, value);
      });
    }
    assign2(prevOptions, options());
  });
  function setOption(name, value) {
    state2._set(name, value);
    return this;
  }
  function getOption(name) {
    let value = state2._get(name);
    return value instanceof Date ? toLocalDate(value) : value;
  }
  function refetchEvents() {
    state2._fetchedRange.set({ start: void 0, end: void 0 });
    return this;
  }
  function getEvents() {
    return $_events().map(toEventWithLocalDates);
  }
  function getEventById(id) {
    for (let event2 of $_events()) {
      if (event2.id == id) {
        return toEventWithLocalDates(event2);
      }
    }
    return null;
  }
  function addEvent(event2) {
    event2 = createEvents([event2])[0];
    $_events().push(event2);
    store_set(_events2, $_events());
    return toEventWithLocalDates(event2);
  }
  function updateEvent(event2) {
    let id = String(event2.id);
    let idx = $_events().findIndex((event22) => event22.id === id);
    if (idx >= 0) {
      event2 = createEvents([event2])[0];
      store_mutate(_events2, untrack($_events)[idx] = event2, untrack($_events));
      return toEventWithLocalDates(event2);
    }
    return null;
  }
  function removeEventById(id) {
    id = String(id);
    let idx = $_events().findIndex((event2) => event2.id === id);
    if (idx >= 0) {
      $_events().splice(idx, 1);
      store_set(_events2, $_events());
    }
    return this;
  }
  function getView() {
    return toViewWithLocalDates(get2(state2._view));
  }
  function unselect() {
    var _a3;
    (_a3 = $_interaction().action) == null ? void 0 : _a3.unselect();
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
  function next2() {
    store_set(date, nextDate($date(), $duration()));
    return this;
  }
  function prev() {
    store_set(date, prevDate($date(), $duration(), $hiddenDays()));
    return this;
  }
  let View2 = user_derived($_viewComponent);
  var fragment = root$q();
  var div = first_child(fragment);
  let styles;
  var node = child(div);
  Toolbar(node, {});
  var node_1 = sibling(node, 2);
  component(node_1, () => get(View2), ($$anchor2, View_1) => {
    View_1($$anchor2, {});
  });
  reset(div);
  var node_2 = sibling(div, 2);
  Auxiliary$1(node_2, {});
  template_effect(
    ($0, $1) => {
      var _a3, _b3;
      set_class(div, 1, `${(_a3 = $theme().calendar) != null ? _a3 : ""} ${(_b3 = $theme().view) != null ? _b3 : ""}${$_scrollable() ? " " + $theme().withScroll : ""}${$_iClass() ? " " + $theme()[$_iClass()] : ""}`);
      set_attribute2(div, "role", $0);
      styles = set_style(div, "", styles, $1);
    },
    [
      () => listView($view()) ? "list" : "table",
      () => ({ height: $height() })
    ]
  );
  append($$anchor, fragment);
  var $$pop = pop({
    setOption,
    getOption,
    refetchEvents,
    getEvents,
    getEventById,
    addEvent,
    updateEvent,
    removeEventById,
    getView,
    unselect,
    dateFromPoint,
    next: next2,
    prev
  });
  $$cleanup();
  return $$pop;
}
function days(state2) {
  return derived2([state2.date, state2.firstDay, state2.hiddenDays], ([$date, $firstDay, $hiddenDays]) => {
    let days2 = [];
    let day = cloneDate($date);
    let max2 = 7;
    while (day.getUTCDay() !== $firstDay && max2) {
      subtractDay(day);
      --max2;
    }
    for (let i = 0; i < 7; ++i) {
      if (!$hiddenDays.includes(day.getUTCDay())) {
        days2.push(cloneDate(day));
      }
      addDay(day);
    }
    return days2;
  });
}
var root_1$c = from_html(`<div role="columnheader"><span></span></div>`);
var root$p = from_html(`<div><div role="row"></div> <div></div></div>`);
function Header$1($$anchor, $$props) {
  push($$props, false);
  const [$$stores, $$cleanup] = setup_stores();
  const $theme = () => store_get(theme, "$theme", $$stores);
  const $_days = () => store_get(_days, "$_days", $$stores);
  const $_intlDayHeaderAL = () => store_get(_intlDayHeaderAL, "$_intlDayHeaderAL", $$stores);
  const $_intlDayHeader = () => store_get(_intlDayHeader, "$_intlDayHeader", $$stores);
  let { theme, _intlDayHeader, _intlDayHeaderAL, _days } = getContext("state");
  init();
  var div = root$p();
  var div_1 = child(div);
  each(div_1, 5, $_days, index, ($$anchor2, day) => {
    var div_2 = root_1$c();
    var span = child(div_2);
    action(span, ($$node, $$action_arg) => setContent == null ? void 0 : setContent($$node, $$action_arg), () => $_intlDayHeader().format(get(day)));
    reset(div_2);
    template_effect(
      ($0, $1) => {
        var _a3;
        set_class(div_2, 1, `${(_a3 = $theme().day) != null ? _a3 : ""} ${$0 != null ? $0 : ""}`);
        set_attribute2(span, "aria-label", $1);
      },
      [
        () => {
          var _a3;
          return (_a3 = $theme().weekdays) == null ? void 0 : _a3[get(day).getUTCDay()];
        },
        () => $_intlDayHeaderAL().format(get(day))
      ]
    );
    append($$anchor2, div_2);
  });
  reset(div_1);
  var div_3 = sibling(div_1, 2);
  reset(div);
  template_effect(() => {
    set_class(div, 1, $theme().header);
    set_class(div_1, 1, $theme().days);
    set_class(div_3, 1, $theme().hiddenScroll);
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_1$b = from_html(`<div></div>`);
var root$o = from_html(`<article><!></article>`);
function BaseEvent($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $resources = () => store_get(resources, "$resources", $$stores);
  const $eventBackgroundColor = () => store_get(eventBackgroundColor, "$eventBackgroundColor", $$stores);
  const $eventColor = () => store_get(eventColor, "$eventColor", $$stores);
  const $eventTextColor = () => store_get(eventTextColor, "$eventTextColor", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  const $eventClassNames = () => store_get(eventClassNames, "$eventClassNames", $$stores);
  const $_view = () => store_get(_view, "$_view", $$stores);
  const $displayEventEnd = () => store_get(displayEventEnd, "$displayEventEnd", $$stores);
  const $eventContent = () => store_get(eventContent, "$eventContent", $$stores);
  const $_intlEventTime = () => store_get(_intlEventTime, "$_intlEventTime", $$stores);
  const $eventDidMount = () => store_get(eventDidMount, "$eventDidMount", $$stores);
  const $eventClick = () => store_get(eventClick, "$eventClick", $$stores);
  const $eventMouseEnter = () => store_get(eventMouseEnter, "$eventMouseEnter", $$stores);
  const $eventMouseLeave = () => store_get(eventMouseLeave, "$eventMouseLeave", $$stores);
  let el = prop($$props, "el", 15), classes = prop($$props, "classes", 3, identity), styles = prop($$props, "styles", 3, identity);
  let {
    displayEventEnd,
    eventBackgroundColor,
    eventColor,
    eventContent,
    eventClick,
    eventDidMount,
    eventClassNames,
    eventMouseEnter,
    eventMouseLeave,
    eventTextColor,
    resources,
    theme,
    _view,
    _intlEventTime
  } = getContext("state");
  let event2 = user_derived(() => $$props.chunk.event);
  let display = user_derived(() => $$props.chunk.event.display);
  let bgColor = user_derived(() => {
    var _a3, _b3, _c2;
    return (_c2 = (_b3 = (_a3 = get(event2).backgroundColor) != null ? _a3 : resourceBackgroundColor(get(event2), $resources())) != null ? _b3 : $eventBackgroundColor()) != null ? _c2 : $eventColor();
  });
  let txtColor = user_derived(() => {
    var _a3, _b3;
    return (_b3 = (_a3 = get(event2).textColor) != null ? _a3 : resourceTextColor(get(event2), $resources())) != null ? _b3 : $eventTextColor();
  });
  let style = user_derived(() => entries(styles()({ "background-color": get(bgColor), "color": get(txtColor) })).map((entry) => `${entry[0]}:${entry[1]}`).concat(get(event2).styles).join(";"));
  let classNames = user_derived(() => classes()([
    bgEvent(get(display)) ? $theme().bgEvent : $theme().event,
    ...createEventClasses($eventClassNames(), get(event2), $_view())
  ]).join(" "));
  let $$d = user_derived(() => createEventContent($$props.chunk, $displayEventEnd(), $eventContent(), $theme(), $_intlEventTime(), $_view())), $$array = user_derived(() => to_array(get($$d), 2)), timeText = user_derived(() => get($$array)[0]), content = user_derived(() => get($$array)[1]);
  onMount(() => {
    if (isFunction($eventDidMount())) {
      $eventDidMount()({
        event: toEventWithLocalDates(get(event2)),
        timeText: get(timeText),
        el: el(),
        view: toViewWithLocalDates($_view())
      });
    }
  });
  function createHandler(fn, display2) {
    return !helperEvent(display2) && isFunction(fn) ? (jsEvent) => fn({
      event: toEventWithLocalDates(get(event2)),
      el: el(),
      jsEvent,
      view: toViewWithLocalDates($_view())
    }) : void 0;
  }
  let onclick2 = user_derived(() => !bgEvent(get(display)) && createHandler($eventClick(), get(display)) || void 0);
  let onkeydown = user_derived(() => get(onclick2) && keyEnter(get(onclick2)));
  let onmouseenter = user_derived(() => createHandler($eventMouseEnter(), get(display)));
  let onmouseleave = user_derived(() => createHandler($eventMouseLeave(), get(display)));
  var article = root$o();
  article.__click = function(...$$args) {
    var _a3;
    (_a3 = get(onclick2)) == null ? void 0 : _a3.apply(this, $$args);
  };
  article.__keydown = function(...$$args) {
    var _a3;
    (_a3 = get(onkeydown)) == null ? void 0 : _a3.apply(this, $$args);
  };
  article.__pointerdown = function(...$$args) {
    var _a3;
    (_a3 = $$props.onpointerdown) == null ? void 0 : _a3.apply(this, $$args);
  };
  {
    const defaultBody = ($$anchor2) => {
      var div = root_1$b();
      action(div, ($$node, $$action_arg) => setContent == null ? void 0 : setContent($$node, $$action_arg), () => get(content));
      template_effect(() => set_class(div, 1, clsx2($theme().eventBody)));
      append($$anchor2, div);
    };
    var node = child(article);
    {
      var consequent = ($$anchor2) => {
        var fragment = comment();
        var node_1 = first_child(fragment);
        snippet(node_1, () => $$props.body, () => defaultBody, () => get(bgColor), () => get(txtColor));
        append($$anchor2, fragment);
      };
      var alternate = ($$anchor2) => {
        defaultBody($$anchor2);
      };
      if_block(node, ($$render) => {
        if ($$props.body) $$render(consequent);
        else $$render(alternate, false);
      });
    }
    reset(article);
    bind_this(article, ($$value) => el($$value), () => el());
  }
  template_effect(() => {
    set_class(article, 1, clsx2(get(classNames)));
    set_style(article, get(style));
    set_attribute2(article, "role", get(onclick2) ? "button" : void 0);
    set_attribute2(article, "tabindex", get(onclick2) ? 0 : void 0);
  });
  event("mouseenter", article, function(...$$args) {
    var _a3;
    (_a3 = get(onmouseenter)) == null ? void 0 : _a3.apply(this, $$args);
  });
  event("mouseleave", article, function(...$$args) {
    var _a3;
    (_a3 = get(onmouseleave)) == null ? void 0 : _a3.apply(this, $$args);
  });
  append($$anchor, article);
  pop();
  $$cleanup();
}
delegate(["click", "keydown", "pointerdown"]);
function InteractableEvent($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $_iClasses = () => store_get(_iClasses, "$_iClasses", $$stores);
  const $_interaction = () => store_get(_interaction, "$_interaction", $$stores);
  let el = prop($$props, "el", 15);
  let { _interaction, _iClasses } = getContext("state");
  let event2 = user_derived(() => $$props.chunk.event);
  let display = user_derived(() => $$props.chunk.event.display);
  let classes = user_derived(() => (classNames) => $_iClasses()(classNames, get(event2)));
  function createDragHandler(event22) {
    var _a3, _b3;
    return ((_a3 = $_interaction().action) == null ? void 0 : _a3.draggable(event22)) ? (jsEvent) => {
      var _a22, _b22;
      return $_interaction().action.drag(event22, jsEvent, (_a22 = $$props.forceDate) == null ? void 0 : _a22.call($$props), (_b22 = $$props.forceMargin) == null ? void 0 : _b22.call($$props));
    } : (_b3 = $_interaction().action) == null ? void 0 : _b3.noAction;
  }
  let onpointerdown = user_derived(() => !bgEvent(get(display)) && !helperEvent(get(display)) ? createDragHandler(get(event2)) : void 0);
  let Resizer2 = user_derived(() => $_interaction().resizer);
  {
    const body = ($$anchor2, defaultBody = noop) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      {
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
          else $$render(alternate, false);
        });
      }
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
  $$cleanup();
}
function Event$4($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $dayMaxEvents = () => store_get(dayMaxEvents, "$dayMaxEvents", $$stores);
  const $_hiddenEvents = () => store_get(_hiddenEvents, "$_hiddenEvents", $$stores);
  const $_popupDate = () => store_get(_popupDate, "$_popupDate", $$stores);
  let longChunks = prop($$props, "longChunks", 19, () => ({})), inPopup = prop($$props, "inPopup", 3, false), dates = prop($$props, "dates", 19, () => []);
  let { dayMaxEvents, _hiddenEvents, _popupDate } = getContext("state");
  let el = state(void 0);
  let margin = state(1);
  let hidden = state(false);
  let event2 = user_derived(() => $$props.chunk.event);
  let display = user_derived(() => $$props.chunk.event.display);
  let styles = user_derived(() => (style) => {
    if (bgEvent(get(display))) {
      style["width"] = `calc(${$$props.chunk.days * 100}% + ${$$props.chunk.days - 1}px)`;
    } else {
      let marginTop = get(margin);
      if (get(event2)._margin) {
        let [_margin, _dates] = get(event2)._margin;
        if ($$props.chunk.date >= _dates[0] && $$props.chunk.date <= _dates.at(-1)) {
          marginTop = _margin;
        }
      }
      style["width"] = `calc(${$$props.chunk.days * 100}% + ${($$props.chunk.days - 1) * 7}px)`;
      style["margin-top"] = `${marginTop}px`;
    }
    if (get(hidden)) {
      style["visibility"] = "hidden";
    }
    return style;
  });
  function reposition() {
    set(margin, repositionEvent$1($$props.chunk, longChunks(), height(get(el))), true);
    if ($dayMaxEvents() === true) {
      hide();
    } else {
      set(hidden, false);
    }
  }
  function hide() {
    let dayEl = ancestor(get(el), 2);
    let h = height(dayEl) - height(dayEl.firstElementChild) - footHeight(dayEl);
    set(hidden, $$props.chunk.bottom > h);
    let update2 = false;
    for (let date of $$props.chunk.dates) {
      let hiddenEvents = $_hiddenEvents()[date.getTime()];
      if (hiddenEvents) {
        let size = hiddenEvents.size;
        if (get(hidden)) {
          hiddenEvents.add($$props.chunk.event);
        } else {
          hiddenEvents.delete($$props.chunk.event);
        }
        if (size !== hiddenEvents.size) {
          update2 = true;
        }
      }
    }
    if (update2) {
      store_set(_hiddenEvents, $_hiddenEvents());
    }
  }
  function footHeight(dayEl) {
    let h = 0;
    for (let i = 0; i < $$props.chunk.days; ++i) {
      h = max(h, height(dayEl.lastElementChild));
      dayEl = dayEl.nextElementSibling;
      if (!dayEl) {
        break;
      }
    }
    return h;
  }
  InteractableEvent($$anchor, {
    get chunk() {
      return $$props.chunk;
    },
    get styles() {
      return get(styles);
    },
    axis: "x",
    forceDate: () => inPopup() ? $_popupDate() : void 0,
    forceMargin: () => [
      rect(get(el)).top - rect(ancestor(get(el), 1)).top,
      dates()
    ],
    get el() {
      return get(el);
    },
    set el($$value) {
      set(el, $$value, true);
    }
  });
  var $$pop = pop({ reposition });
  $$cleanup();
  return $$pop;
}
var root$n = from_html(`<div><div><time></time> <a role="button" tabindex="0">&times;</a></div> <div></div></div>`);
function Popup($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $_popupChunks = () => store_get(_popupChunks, "$_popupChunks", $$stores);
  const $_popupDate = () => store_get(_popupDate, "$_popupDate", $$stores);
  const $_interaction = () => store_get(_interaction, "$_interaction", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  const $_intlDayPopover = () => store_get(_intlDayPopover, "$_intlDayPopover", $$stores);
  const $buttonText = () => store_get(buttonText, "$buttonText", $$stores);
  let {
    buttonText,
    theme,
    _interaction,
    _intlDayPopover,
    _popupDate,
    _popupChunks
  } = getContext("state");
  let el = state(void 0);
  let style = state("");
  function position() {
    let dayEl = ancestor(get(el), 1);
    let bodyEl = ancestor(dayEl, 3);
    let popupRect = rect(get(el));
    let dayRect = rect(dayEl);
    let bodyRect = rect(bodyEl);
    set(style, "");
    let left;
    if (popupRect.width >= bodyRect.width) {
      left = bodyRect.left - dayRect.left;
      let right = dayRect.right - bodyRect.right;
      set(style, get(style) + `right:${right}px;`);
    } else {
      left = (dayRect.width - popupRect.width) / 2;
      if (dayRect.left + left < bodyRect.left) {
        left = bodyRect.left - dayRect.left;
      } else if (dayRect.left + left + popupRect.width > bodyRect.right) {
        left = bodyRect.right - dayRect.left - popupRect.width;
      }
    }
    set(style, get(style) + `left:${left}px;`);
    let top;
    if (popupRect.height >= bodyRect.height) {
      top = bodyRect.top - dayRect.top;
      let bottom = dayRect.bottom - bodyRect.bottom;
      set(style, get(style) + `bottom:${bottom}px;`);
    } else {
      top = (dayRect.height - popupRect.height) / 2;
      if (dayRect.top + top < bodyRect.top) {
        top = bodyRect.top - dayRect.top;
      } else if (dayRect.top + top + popupRect.height > bodyRect.bottom) {
        top = bodyRect.bottom - dayRect.top - popupRect.height;
      }
    }
    set(style, get(style) + `top:${top}px;`);
  }
  user_effect(() => {
    $_popupChunks();
    tick().then(reposition);
  });
  function reposition() {
    if ($_popupChunks().length) {
      position();
    } else {
      close();
    }
  }
  function close() {
    store_set(_popupDate, null);
    store_set(_popupChunks, []);
  }
  function handlePointerDownOutside() {
    var _a3;
    close();
    (_a3 = $_interaction().action) == null ? void 0 : _a3.noClick();
  }
  var div = root$n();
  var event_handler = user_derived(stopPropagation2);
  div.__pointerdown = function(...$$args) {
    var _a3;
    (_a3 = get(event_handler)) == null ? void 0 : _a3.apply(this, $$args);
  };
  var div_1 = child(div);
  var time = child(div_1);
  action(time, ($$node, $$action_arg) => setContent == null ? void 0 : setContent($$node, $$action_arg), () => $_intlDayPopover().format($_popupDate()));
  var a = sibling(time, 2);
  var event_handler_1 = user_derived(() => stopPropagation2(close));
  a.__click = function(...$$args) {
    var _a3;
    (_a3 = get(event_handler_1)) == null ? void 0 : _a3.apply(this, $$args);
  };
  var event_handler_2 = user_derived(() => keyEnter(close));
  a.__keydown = function(...$$args) {
    var _a3;
    (_a3 = get(event_handler_2)) == null ? void 0 : _a3.apply(this, $$args);
  };
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  each(div_2, 5, $_popupChunks, (chunk) => chunk.event, ($$anchor2, chunk) => {
    Event$4($$anchor2, {
      get chunk() {
        return get(chunk);
      },
      inPopup: true
    });
  });
  reset(div_2);
  reset(div);
  bind_this(div, ($$value) => set(el, $$value), () => get(el));
  action(div, ($$node, $$action_arg) => outsideEvent == null ? void 0 : outsideEvent($$node, $$action_arg), () => "pointerdown");
  template_effect(
    ($0) => {
      set_class(div, 1, $theme().popup);
      set_style(div, get(style));
      set_class(div_1, 1, $theme().dayHead);
      set_attribute2(time, "datetime", $0);
      set_attribute2(a, "aria-label", $buttonText().close);
      set_class(div_2, 1, $theme().events);
    },
    [() => toISOString($_popupDate(), 10)]
  );
  event("pointerdownoutside", div, handlePointerDownOutside);
  append($$anchor, div);
  pop();
  $$cleanup();
}
delegate(["pointerdown", "click", "keydown"]);
var root_1$a = from_html(`<span></span>`);
var root_5$1 = from_html(`<div><!></div>`);
var root_6 = from_html(`<div><!></div>`);
var root_4$2 = from_html(`<!> <!>`, 1);
var root_10 = from_html(`<a role="button" tabindex="0" aria-haspopup="true"></a>`);
var root$m = from_html(`<div role="cell"><div><time></time> <!></div> <div><!></div> <!> <div><!></div> <!> <div><!></div></div>`);
function Day$4($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $_hiddenEvents = () => store_get(_hiddenEvents, "$_hiddenEvents", $$stores);
  const $_today = () => store_get(_today, "$_today", $$stores);
  const $currentDate = () => store_get(currentDate, "$currentDate", $$stores);
  const $highlightedDates = () => store_get(highlightedDates, "$highlightedDates", $$stores);
  const $validRange = () => store_get(validRange, "$validRange", $$stores);
  const $moreLinkContent = () => store_get(moreLinkContent, "$moreLinkContent", $$stores);
  const $_popupDate = () => store_get(_popupDate, "$_popupDate", $$stores);
  const $weekNumbers = () => store_get(weekNumbers, "$weekNumbers", $$stores);
  const $firstDay = () => store_get(firstDay, "$firstDay", $$stores);
  const $weekNumberContent = () => store_get(weekNumberContent, "$weekNumberContent", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  const $_interaction = () => store_get(_interaction, "$_interaction", $$stores);
  const $_intlDayCell = () => store_get(_intlDayCell, "$_intlDayCell", $$stores);
  let iChunks = prop($$props, "iChunks", 19, () => []);
  let {
    date: currentDate,
    dayMaxEvents,
    highlightedDates,
    firstDay,
    moreLinkContent,
    theme,
    validRange,
    weekNumbers,
    weekNumberContent,
    _hiddenEvents,
    _intlDayCell,
    _popupDate,
    _popupChunks,
    _today,
    _interaction
  } = getContext("state");
  let el = state(void 0);
  let hiddenEvents = new SvelteSet();
  user_pre_effect(() => {
    store_mutate(_hiddenEvents, untrack($_hiddenEvents)[$$props.date.getTime()] = untrack(() => hiddenEvents), untrack($_hiddenEvents));
  });
  let refs = [];
  let isToday = user_derived(() => datesEqual($$props.date, $_today()));
  let otherMonth = user_derived(() => $$props.date.getUTCMonth() !== $currentDate().getUTCMonth());
  let highlight = user_derived(() => $highlightedDates().some((d) => datesEqual(d, $$props.date)));
  let disabled = user_derived(() => outsideRange($$props.date, $validRange()));
  let dayBgChunks = user_derived(() => !get(disabled) ? $$props.bgChunks.filter((bgChunk) => datesEqual(bgChunk.date, $$props.date)) : []);
  let dayChunks = user_derived(() => {
    let dayChunks2 = [];
    if (!get(disabled)) {
      for (let chunk of $$props.chunks) {
        if (datesEqual(chunk.date, $$props.date)) {
          dayChunks2.push(chunk);
        }
      }
    }
    return dayChunks2;
  });
  user_pre_effect(() => {
    get(dayChunks);
    hiddenEvents.clear();
  });
  let moreLink = user_derived(() => {
    let moreLink2 = "";
    if (!get(disabled) && hiddenEvents.size) {
      let text2 = "+" + hiddenEvents.size + " more";
      if ($moreLinkContent()) {
        moreLink2 = isFunction($moreLinkContent()) ? $moreLinkContent()({ num: hiddenEvents.size, text: text2 }) : $moreLinkContent();
      } else {
        moreLink2 = text2;
      }
    }
    return moreLink2;
  });
  onMount(() => {
    setPayload(get(el), () => ({
      allDay: true,
      date: $$props.date,
      resource: void 0,
      dayEl: get(el),
      disabled: get(disabled)
    }));
  });
  function showMore() {
    store_set(_popupDate, $$props.date);
  }
  let showPopup = user_derived(() => $_popupDate() && datesEqual($$props.date, $_popupDate()));
  user_pre_effect(() => {
    get(dayChunks);
    $$props.longChunks;
    if (get(showPopup)) {
      tick().then(setPopupChunks);
    }
  });
  function setPopupChunks() {
    var _a3;
    let nextDay = addDay(cloneDate($$props.date));
    let chunks = get(dayChunks).concat(((_a3 = $$props.longChunks[$$props.date.getTime()]) == null ? void 0 : _a3.chunks) || []);
    store_set(_popupChunks, chunks.map((chunk) => assign2({}, chunk, createEventChunk(chunk.event, $$props.date, nextDay), { days: 1, dates: [$$props.date] })).sort((a, b) => a.top - b.top));
  }
  let showWeekNumber = user_derived(() => $weekNumbers() && $$props.date.getUTCDay() == ($firstDay() ? 1 : 0));
  let weekNumber = user_derived(() => {
    let weekNumber2;
    if (get(showWeekNumber)) {
      let week = getWeekNumber($$props.date, $firstDay());
      if ($weekNumberContent()) {
        weekNumber2 = isFunction($weekNumberContent()) ? $weekNumberContent()({ date: toLocalDate($$props.date), week }) : $weekNumberContent();
      } else {
        weekNumber2 = "W" + String(week).padStart(2, "0");
      }
    }
    return weekNumber2;
  });
  function reposition() {
    if (!get(disabled)) {
      runReposition(refs, get(dayChunks));
    }
  }
  var div = root$m();
  div.__pointerdown = function(...$$args) {
    var _a3, _b3;
    (_b3 = (_a3 = $_interaction().action) == null ? void 0 : _a3.select) == null ? void 0 : _b3.apply(this, $$args);
  };
  var div_1 = child(div);
  var time = child(div_1);
  action(time, ($$node, $$action_arg) => setContent == null ? void 0 : setContent($$node, $$action_arg), () => $_intlDayCell().format($$props.date));
  var node = sibling(time, 2);
  {
    var consequent = ($$anchor2) => {
      var span = root_1$a();
      action(span, ($$node, $$action_arg) => setContent == null ? void 0 : setContent($$node, $$action_arg), () => get(weekNumber));
      template_effect(() => set_class(span, 1, $theme().weekNumber));
      append($$anchor2, span);
    };
    if_block(node, ($$render) => {
      if (get(showWeekNumber)) $$render(consequent);
    });
  }
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var node_1 = child(div_2);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment = comment();
      var node_2 = first_child(fragment);
      each(node_2, 17, () => get(dayBgChunks), (chunk) => chunk.event, ($$anchor3, chunk) => {
        Event$4($$anchor3, {
          get chunk() {
            return get(chunk);
          }
        });
      });
      append($$anchor2, fragment);
    };
    if_block(node_1, ($$render) => {
      if (!get(disabled)) $$render(consequent_1);
    });
  }
  reset(div_2);
  var node_3 = sibling(div_2, 2);
  {
    var consequent_4 = ($$anchor2) => {
      var fragment_2 = root_4$2();
      var node_4 = first_child(fragment_2);
      {
        var consequent_2 = ($$anchor3) => {
          var div_3 = root_5$1();
          var node_5 = child(div_3);
          Event$4(node_5, {
            get chunk() {
              return iChunks()[2];
            }
          });
          reset(div_3);
          template_effect(() => set_class(div_3, 1, $theme().events));
          append($$anchor3, div_3);
        };
        if_block(node_4, ($$render) => {
          if (iChunks()[2] && datesEqual(iChunks()[2].date, $$props.date)) $$render(consequent_2);
        });
      }
      var node_6 = sibling(node_4, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var div_4 = root_6();
          var node_7 = child(div_4);
          Event$4(node_7, {
            get chunk() {
              return iChunks()[0];
            }
          });
          reset(div_4);
          template_effect(() => {
            var _a3, _b3;
            return set_class(div_4, 1, `${(_a3 = $theme().events) != null ? _a3 : ""} ${(_b3 = $theme().preview) != null ? _b3 : ""}`);
          });
          append($$anchor3, div_4);
        };
        if_block(node_6, ($$render) => {
          if (iChunks()[0] && datesEqual(iChunks()[0].date, $$props.date)) $$render(consequent_3);
        });
      }
      append($$anchor2, fragment_2);
    };
    if_block(node_3, ($$render) => {
      if (!get(disabled)) $$render(consequent_4);
    });
  }
  var div_5 = sibling(node_3, 2);
  var node_8 = child(div_5);
  {
    var consequent_5 = ($$anchor2) => {
      var fragment_3 = comment();
      var node_9 = first_child(fragment_3);
      each(node_9, 19, () => get(dayChunks), (chunk) => chunk.event, ($$anchor3, chunk, i) => {
        bind_this(
          Event$4($$anchor3, {
            get chunk() {
              return get(chunk);
            },
            get longChunks() {
              return $$props.longChunks;
            },
            get dates() {
              return $$props.dates;
            }
          }),
          ($$value, i2) => refs[i2] = $$value,
          (i2) => refs == null ? void 0 : refs[i2],
          () => [get(i)]
        );
      });
      append($$anchor2, fragment_3);
    };
    if_block(node_8, ($$render) => {
      if (!get(disabled)) $$render(consequent_5);
    });
  }
  reset(div_5);
  var node_10 = sibling(div_5, 2);
  {
    var consequent_6 = ($$anchor2) => {
      Popup($$anchor2, {});
    };
    if_block(node_10, ($$render) => {
      if (get(showPopup)) $$render(consequent_6);
    });
  }
  var div_6 = sibling(node_10, 2);
  var node_11 = child(div_6);
  {
    var consequent_7 = ($$anchor2) => {
      var a_1 = root_10();
      var event_handler = user_derived(() => stopPropagation2(showMore));
      a_1.__click = function(...$$args) {
        var _a3;
        (_a3 = get(event_handler)) == null ? void 0 : _a3.apply(this, $$args);
      };
      var event_handler_1 = user_derived(() => keyEnter(showMore));
      a_1.__keydown = function(...$$args) {
        var _a3;
        (_a3 = get(event_handler_1)) == null ? void 0 : _a3.apply(this, $$args);
      };
      var event_handler_2 = user_derived(stopPropagation2);
      a_1.__pointerdown = function(...$$args) {
        var _a3;
        (_a3 = get(event_handler_2)) == null ? void 0 : _a3.apply(this, $$args);
      };
      action(a_1, ($$node, $$action_arg) => setContent == null ? void 0 : setContent($$node, $$action_arg), () => get(moreLink));
      append($$anchor2, a_1);
    };
    if_block(node_11, ($$render) => {
      if (!get(disabled) && hiddenEvents.size) $$render(consequent_7);
    });
  }
  reset(div_6);
  reset(div);
  bind_this(div, ($$value) => set(el, $$value), () => get(el));
  template_effect(
    ($0, $1) => {
      var _a3;
      set_class(div, 1, `${(_a3 = $theme().day) != null ? _a3 : ""} ${$0 != null ? $0 : ""}${get(isToday) ? " " + $theme().today : ""}${get(otherMonth) ? " " + $theme().otherMonth : ""}${get(highlight) ? " " + $theme().highlight : ""}${get(disabled) ? " " + $theme().disabled : ""}`);
      set_class(div_1, 1, $theme().dayHead);
      set_attribute2(time, "datetime", $1);
      set_class(div_2, 1, $theme().bgEvents);
      set_class(div_5, 1, $theme().events);
      set_class(div_6, 1, $theme().dayFoot);
    },
    [
      () => {
        var _a3;
        return (_a3 = $theme().weekdays) == null ? void 0 : _a3[$$props.date.getUTCDay()];
      },
      () => toISOString($$props.date, 10)
    ]
  );
  append($$anchor, div);
  var $$pop = pop({ reposition });
  $$cleanup();
  return $$pop;
}
delegate(["pointerdown", "click", "keydown"]);
var root$l = from_html(`<div role="row"></div>`);
function Week$1($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $validRange = () => store_get(validRange, "$validRange", $$stores);
  const $_filteredEvents = () => store_get(_filteredEvents, "$_filteredEvents", $$stores);
  const $filterEventsWithResources = () => store_get(filterEventsWithResources, "$filterEventsWithResources", $$stores);
  const $resources = () => store_get(resources, "$resources", $$stores);
  const $hiddenDays = () => store_get(hiddenDays, "$hiddenDays", $$stores);
  const $_iEvents = () => store_get(_iEvents, "$_iEvents", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  let {
    _filteredEvents,
    _iEvents,
    resources,
    filterEventsWithResources,
    hiddenDays,
    theme,
    validRange
  } = getContext("state");
  let refs = [];
  let start = user_derived(() => limitToRange($$props.dates[0], $validRange()));
  let end = user_derived(() => addDay(cloneDate(limitToRange($$props.dates.at(-1), $validRange()))));
  let $$d = user_derived(() => {
    let chunks2 = [];
    let bgChunks2 = [];
    for (let event2 of $_filteredEvents()) {
      if (eventIntersects(event2, get(start), get(end), $filterEventsWithResources() ? $resources() : void 0)) {
        let chunk = createEventChunk(event2, get(start), get(end));
        if (bgEvent(event2.display)) {
          if (event2.allDay) {
            bgChunks2.push(chunk);
          }
        } else {
          chunks2.push(chunk);
        }
      }
    }
    prepareEventChunks$1(bgChunks2, $hiddenDays());
    let longChunks2 = prepareEventChunks$1(chunks2, $hiddenDays());
    return [chunks2, bgChunks2, longChunks2];
  }), $$array = user_derived(() => to_array(get($$d), 3)), chunks = user_derived(() => get($$array)[0]), bgChunks = user_derived(() => get($$array)[1]), longChunks = user_derived(() => get($$array)[2]);
  let iChunks = user_derived(() => $_iEvents().map((event2) => {
    let chunk;
    if (event2 && eventIntersects(event2, get(start), get(end))) {
      chunk = createEventChunk(event2, get(start), get(end));
      prepareEventChunks$1([chunk], $hiddenDays());
    } else {
      chunk = null;
    }
    return chunk;
  }));
  function reposition() {
    runReposition(refs, $$props.dates);
  }
  var div = root$l();
  each(div, 21, () => $$props.dates, index, ($$anchor2, date, i) => {
    bind_this(
      Day$4($$anchor2, {
        get date() {
          return get(date);
        },
        get chunks() {
          return get(chunks);
        },
        get bgChunks() {
          return get(bgChunks);
        },
        get longChunks() {
          return get(longChunks);
        },
        get iChunks() {
          return get(iChunks);
        },
        get dates() {
          return $$props.dates;
        }
      }),
      ($$value, i2) => refs[i2] = $$value,
      (i2) => refs == null ? void 0 : refs[i2],
      () => [i]
    );
  });
  reset(div);
  template_effect(() => set_class(div, 1, $theme().days));
  append($$anchor, div);
  var $$pop = pop({ reposition });
  $$cleanup();
  return $$pop;
}
var root$k = from_html(`<div><div></div></div>`);
function Body$3($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $hiddenDays = () => store_get(hiddenDays, "$hiddenDays", $$stores);
  const $_viewDates = () => store_get(_viewDates, "$_viewDates", $$stores);
  const $dayMaxEvents = () => store_get(dayMaxEvents, "$dayMaxEvents", $$stores);
  const $_hiddenEvents = () => store_get(_hiddenEvents, "$_hiddenEvents", $$stores);
  const $_filteredEvents = () => store_get(_filteredEvents, "$_filteredEvents", $$stores);
  const $_bodyEl = () => store_get(_bodyEl, "$_bodyEl", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  let {
    _bodyEl,
    _viewDates,
    _filteredEvents,
    _hiddenEvents,
    _recheckScrollable,
    dayMaxEvents,
    hiddenDays,
    theme
  } = getContext("state");
  let refs = [];
  let days2 = user_derived(() => 7 - $hiddenDays().length);
  let weeks = user_derived(() => {
    let weeks2 = [];
    for (let i = 0; i < $_viewDates().length / get(days2); ++i) {
      let dates = [];
      for (let j = 0; j < get(days2); ++j) {
        dates.push($_viewDates()[i * get(days2) + j]);
      }
      weeks2.push(dates);
    }
    return weeks2;
  });
  user_pre_effect(() => {
    get(weeks);
    $dayMaxEvents();
    store_set(_hiddenEvents, {});
  });
  function reposition() {
    runReposition(refs, get(weeks));
  }
  user_effect(() => {
    $_filteredEvents();
    $_hiddenEvents();
    $dayMaxEvents();
    untrack(reposition);
  });
  var div = root$k();
  event("resize", $window, reposition);
  var div_1 = child(div);
  each(div_1, 21, () => get(weeks), index, ($$anchor2, dates, i) => {
    bind_this(
      Week$1($$anchor2, {
        get dates() {
          return get(dates);
        }
      }),
      ($$value, i2) => refs[i2] = $$value,
      (i2) => refs == null ? void 0 : refs[i2],
      () => [i]
    );
  });
  reset(div_1);
  reset(div);
  bind_this(div, ($$value) => store_set(_bodyEl, $$value), () => $_bodyEl());
  action(div, ($$node, $$action_arg) => observeResize == null ? void 0 : observeResize($$node, $$action_arg), () => () => store_set(_recheckScrollable, true));
  template_effect(() => {
    var _a3;
    set_class(div, 1, `${(_a3 = $theme().body) != null ? _a3 : ""}${$dayMaxEvents() === true ? " " + $theme().uniform : ""}`);
    set_class(div_1, 1, $theme().content);
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$j = from_html(`<!> <!>`, 1);
function View$4($$anchor) {
  var fragment = root$j();
  var node = first_child(fragment);
  Header$1(node, {});
  var node_1 = sibling(node, 2);
  Body$3(node_1, {});
  append($$anchor, fragment);
}
var index$4 = {
  createOptions(options) {
    options.dayMaxEvents = false;
    options.dayCellFormat = { day: "numeric" };
    options.dayPopoverFormat = { month: "long", day: "numeric", year: "numeric" };
    options.moreLinkContent = void 0;
    options.weekNumbers = false;
    options.weekNumberContent = void 0;
    options.buttonText.dayGridMonth = "month";
    options.buttonText.close = "Close";
    options.theme.uniform = "ec-uniform";
    options.theme.dayFoot = "ec-day-foot";
    options.theme.popup = "ec-popup";
    options.theme.weekNumber = "ec-week-number";
    options.view = "dayGridMonth";
    options.views.dayGridMonth = {
      buttonText: btnTextMonth,
      component: View$4,
      dayHeaderFormat: { weekday: "short" },
      dayHeaderAriaLabelFormat: { weekday: "long" },
      displayEventEnd: false,
      duration: { months: 1 },
      theme: themeView("ec-day-grid ec-month-view"),
      titleFormat: { year: "numeric", month: "long" }
    };
  },
  createStores(state2) {
    state2._days = days(state2);
    state2._intlDayCell = intl(state2.locale, state2.dayCellFormat);
    state2._intlDayPopover = intl(state2.locale, state2.dayPopoverFormat);
    state2._hiddenEvents = writable({});
    state2._popupDate = writable(null);
    state2._popupChunks = writable([]);
  }
};
function eventDraggable(event2, $eventStartEditable, $editable) {
  var _a3, _b3, _c2;
  return (_c2 = (_b3 = (_a3 = event2.startEditable) != null ? _a3 : $eventStartEditable) != null ? _b3 : event2.editable) != null ? _c2 : $editable;
}
function eventResizable(event2, $eventDurationEditable, $editable) {
  var _a3, _b3, _c2;
  return (_c2 = (_b3 = (_a3 = event2.durationEditable) != null ? _a3 : $eventDurationEditable) != null ? _b3 : event2.editable) != null ? _c2 : $editable;
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
function Action($$anchor, $$props) {
  push($$props, false);
  const [$$stores, $$cleanup] = setup_stores();
  const $eventStartEditable = () => store_get(eventStartEditable, "$eventStartEditable", $$stores);
  const $editable = () => store_get(editable, "$editable", $$stores);
  const $slotDuration = () => store_get(slotDuration, "$slotDuration", $$stores);
  const $selectable = () => store_get(selectable, "$selectable", $$stores);
  const $view = () => store_get(view2, "$view", $$stores);
  const $_bodyEl = () => store_get(_bodyEl, "$_bodyEl", $$stores);
  const $datesAboveResources = () => store_get(datesAboveResources, "$datesAboveResources", $$stores);
  const $selectLongPressDelay = () => store_get(selectLongPressDelay, "$selectLongPressDelay", $$stores);
  const $eventLongPressDelay = () => store_get(eventLongPressDelay, "$eventLongPressDelay", $$stores);
  const $longPressDelay = () => store_get(longPressDelay, "$longPressDelay", $$stores);
  const $selectMinDistance = () => store_get(selectMinDistance, "$selectMinDistance", $$stores);
  const $eventDragMinDistance = () => store_get(eventDragMinDistance, "$eventDragMinDistance", $$stores);
  const $_iEvents = () => store_get(_iEvents, "$_iEvents", $$stores);
  const $eventResizeStart = () => store_get(eventResizeStart, "$eventResizeStart", $$stores);
  const $eventDragStart = () => store_get(eventDragStart, "$eventDragStart", $$stores);
  const $resizeConstraint = () => store_get(resizeConstraint, "$resizeConstraint", $$stores);
  const $selectConstraint = () => store_get(selectConstraint, "$selectConstraint", $$stores);
  const $dragConstraint = () => store_get(dragConstraint, "$dragConstraint", $$stores);
  const $dragScroll = () => store_get(dragScroll, "$dragScroll", $$stores);
  const $slotHeight = () => store_get(slotHeight, "$slotHeight", $$stores);
  const $slotWidth = () => store_get(slotWidth, "$slotWidth", $$stores);
  const $unselectAuto = () => store_get(unselectAuto, "$unselectAuto", $$stores);
  const $unselectCancel = () => store_get(unselectCancel, "$unselectCancel", $$stores);
  const $selectFn = () => store_get(selectFn, "$selectFn", $$stores);
  const $eventResizeStop = () => store_get(eventResizeStop, "$eventResizeStop", $$stores);
  const $eventDragStop = () => store_get(eventDragStop, "$eventDragStop", $$stores);
  const $_view = () => store_get(_view, "$_view", $$stores);
  const $eventResize = () => store_get(eventResize, "$eventResize", $$stores);
  const $eventDrop = () => store_get(eventDrop, "$eventDrop", $$stores);
  const $dateClick = () => store_get(dateClick, "$dateClick", $$stores);
  const $validRange = () => store_get(validRange, "$validRange", $$stores);
  const $_dayGrid = () => store_get(_dayGrid, "$_dayGrid", $$stores);
  const $_events = () => store_get(_events2, "$_events", $$stores);
  const $selectBackgroundColor = () => store_get(selectBackgroundColor, "$selectBackgroundColor", $$stores);
  const $unselectFn = () => store_get(unselectFn, "$unselectFn", $$stores);
  let {
    _iEvents,
    _iClass,
    _events: _events2,
    _view,
    _dayGrid,
    _bodyEl,
    datesAboveResources,
    dateClick,
    dragConstraint,
    dragScroll,
    editable,
    eventStartEditable,
    eventDragMinDistance,
    eventDragStart,
    eventDragStop,
    eventDrop,
    eventLongPressDelay,
    eventResizeStart,
    eventResizeStop,
    eventResize,
    longPressDelay,
    resizeConstraint,
    selectable,
    select: selectFn,
    selectBackgroundColor,
    selectConstraint,
    selectLongPressDelay,
    selectMinDistance,
    slotDuration,
    slotHeight,
    slotWidth,
    unselect: unselectFn,
    unselectAuto,
    unselectCancel,
    validRange,
    view: view2
  } = getContext("state");
  const ACTION_DRAG = 1;
  const ACTION_RESIZE_END = 2;
  const ACTION_RESIZE_START = 3;
  const ACTION_SELECT = 4;
  const ACTION_CLICK = 5;
  const ACTION_NO_ACTION = 6;
  let action2;
  let interacting;
  let event2;
  let display;
  let date, newDate;
  let resource, newResource;
  let fromX, fromY;
  let toX, toY;
  let bodyEl, bodyRect, clipEl, clipRect;
  let delta;
  let allDay;
  let iClass;
  let minResize;
  let selectStep;
  let selected;
  let noDateClick;
  let timer = mutable_source();
  let viewport;
  let margin;
  let extraDuration;
  function draggable(event22) {
    return eventDraggable(event22, $eventStartEditable(), $editable());
  }
  function drag(eventToDrag, jsEvent, forceDate, forceMargin) {
    if (!action2) {
      action2 = validJsEvent(jsEvent) ? ACTION_DRAG : ACTION_NO_ACTION;
      if (complexAction()) {
        event2 = eventToDrag;
        common(jsEvent);
        if (forceDate) {
          date = forceDate;
        }
        if (forceMargin) {
          margin = forceMargin;
        }
        iClass = "dragging";
        move2(jsEvent);
      }
    }
  }
  function resize(eventToResize, jsEvent, start, axis, forceDate, forceMargin, zeroDuration) {
    if (!action2) {
      action2 = validJsEvent(jsEvent) ? start ? ACTION_RESIZE_START : ACTION_RESIZE_END : ACTION_NO_ACTION;
      if (complexAction()) {
        event2 = eventToResize;
        common(jsEvent);
        if (forceDate) {
          date = forceDate;
        }
        if (forceMargin) {
          margin = forceMargin;
        }
        iClass = axis === "x" ? "resizingX" : "resizingY";
        if (resizingStart()) {
          minResize = cloneDate(event2.end);
          if (allDay) {
            copyTime(minResize, event2.start);
            if (minResize >= event2.end) {
              subtractDay(minResize);
            }
          } else {
            subtractDuration(minResize, $slotDuration());
            if (minResize < event2.start) {
              minResize = event2.start;
            }
            date = event2.start;
          }
        } else {
          minResize = cloneDate(event2.start);
          if (allDay) {
            copyTime(minResize, event2.end);
            if (minResize <= event2.start && !zeroDuration) {
              addDay(minResize);
            }
          } else {
            addDuration(minResize, $slotDuration());
            if (minResize > event2.end) {
              minResize = event2.end;
            }
            date = event2.end;
            if (!zeroDuration) {
              date = subtractDuration(cloneDate(date), $slotDuration());
            }
          }
          if (zeroDuration && !allDay) {
            extraDuration = $slotDuration();
          }
        }
        move2(jsEvent);
      }
    }
  }
  function select(jsEvent) {
    if (!action2) {
      action2 = validJsEvent(jsEvent) ? $selectable() && !listView($view()) ? ACTION_SELECT : ACTION_CLICK : ACTION_NO_ACTION;
      if (complexAction()) {
        common(jsEvent);
        iClass = "selecting";
        selectStep = allDay ? createDuration({ day: 1 }) : $slotDuration();
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
    if (!action2) {
      action2 = ACTION_NO_ACTION;
    }
  }
  function common(jsEvent) {
    var _a3;
    window.getSelection().removeAllRanges();
    fromX = toX = jsEvent.clientX;
    fromY = toY = jsEvent.clientY;
    let dayEl = getElementWithPayload(toX, toY);
    ({ allDay, date, resource } = getPayload(dayEl)(toX, toY));
    if (timelineView($view())) {
      bodyEl = clipEl = $_bodyEl();
    } else {
      bodyEl = ancestor(dayEl, resource ? 4 : 3);
      clipEl = ancestor(dayEl, resource && (dragging() || $datesAboveResources()) ? 2 : 1);
    }
    calcViewport();
    if (jsEvent.pointerType !== "mouse") {
      set(timer, setTimeout(
        () => {
          if (action2) {
            interacting = true;
            move2(jsEvent);
          }
        },
        (_a3 = selecting() ? $selectLongPressDelay() : $eventLongPressDelay()) != null ? _a3 : $longPressDelay()
      ));
    }
  }
  function move2(jsEvent) {
    if (interacting || jsEvent && jsEvent.pointerType === "mouse" && distance() >= (selecting() ? $selectMinDistance() : $eventDragMinDistance())) {
      interacting = true;
      unselect(jsEvent);
      store_set(_iClass, iClass);
      if (!$_iEvents()[0]) {
        if (selecting()) {
          createIEventSelect();
        } else {
          createIEvent(jsEvent, resizing() ? $eventResizeStart() : $eventDragStart());
        }
      }
      let payload = findPayload(findDayEl());
      if (payload) {
        let newAllDay;
        ({ allDay: newAllDay, date: newDate, resource: newResource } = payload);
        if (newAllDay === allDay) {
          let candidate = copyIEventData({}, $_iEvents()[0]);
          let constraintFn = $resizeConstraint();
          delta = createDuration((newDate - date) / 1e3);
          if (resizingStart()) {
            candidate.start = addDuration(cloneDate(event2.start), delta);
            if (candidate.start > minResize) {
              candidate.start = minResize;
              delta = createDuration((minResize - event2.start) / 1e3);
            }
          } else {
            candidate.end = addDuration(cloneDate(event2.end), delta);
            if (extraDuration) {
              addDuration(candidate.end, extraDuration);
            }
            if (resizing()) {
              if (candidate.end < minResize) {
                candidate.end = minResize;
                delta = createDuration((minResize - event2.end) / 1e3);
              }
            } else if (selecting()) {
              if (candidate.end < event2.end) {
                candidate.start = subtractDuration(candidate.end, selectStep);
                candidate.end = event2.end;
              } else {
                candidate.start = event2.start;
              }
              constraintFn = $selectConstraint();
            } else {
              candidate.start = addDuration(cloneDate(event2.start), delta);
              if (resource) {
                candidate.resourceIds = event2.resourceIds.filter((id) => id !== resource.id);
                candidate.resourceIds.push(newResource.id);
              }
              constraintFn = $dragConstraint();
            }
          }
          do {
            if (constraintFn !== void 0) {
              candidate = copyIEventData(cloneEvent(event2), candidate);
              let result = constraintFn(selecting() ? createSelectCallbackInfo(candidate, jsEvent) : createCallbackInfo(candidate, event2, jsEvent));
              if (result === false) {
                store_mutate(_iEvents, untrack($_iEvents)[0] = copyIEventData($_iEvents()[0], event2), untrack($_iEvents));
                break;
              }
            }
            store_mutate(_iEvents, untrack($_iEvents)[0] = copyIEventData($_iEvents()[0], candidate), untrack($_iEvents));
          } while (0);
        }
      }
    }
    if ($dragScroll()) {
      let thresholdY = $slotHeight() * 2;
      let thresholdX = $slotWidth();
      animate(() => {
        if (bodyEl) {
          if (toY < thresholdY) {
            window.scrollBy(0, max(-10, (toY - thresholdY) / 3));
          }
          if (toY < bodyRect.top + thresholdY) {
            bodyEl.scrollTop += max(-10, (toY - bodyRect.top - thresholdY) / 3);
          }
          if (toY > window.innerHeight - thresholdY) {
            window.scrollBy(0, min(10, (toY - window.innerHeight + thresholdY) / 3));
          }
          if (toY > bodyRect.bottom - thresholdY) {
            bodyEl.scrollTop += min(10, (toY - bodyRect.bottom + thresholdY) / 3);
          }
          if (timelineView($view())) {
            if (toX < bodyRect.left + thresholdX) {
              bodyEl.scrollLeft += max(-10, (toX - bodyRect.left - thresholdX) / 3);
            }
            if (toX > bodyRect.right - thresholdX) {
              bodyEl.scrollLeft += min(10, (toX - bodyRect.right + thresholdX) / 3);
            }
          }
        }
      });
    }
  }
  function handleScroll() {
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
    if (selected && $unselectAuto() && !($unselectCancel() && jsEvent.target.closest($unselectCancel()))) {
      unselect(jsEvent);
    }
    if (action2 && jsEvent.isPrimary) {
      if (interacting) {
        if (selecting()) {
          selected = true;
          if (isFunction($selectFn())) {
            let info = createSelectCallbackInfo($_iEvents()[0], jsEvent);
            $selectFn()(info);
          }
        } else {
          event2.display = display;
          let callback = resizing() ? $eventResizeStop() : $eventDragStop();
          if (isFunction(callback)) {
            callback({
              event: toEventWithLocalDates(event2),
              jsEvent,
              view: toViewWithLocalDates($_view())
            });
          }
          let oldEvent = cloneEvent(event2);
          updateEvent(event2, $_iEvents()[0]);
          destroyIEvent();
          callback = resizing() ? $eventResize() : $eventDrop();
          if (isFunction(callback)) {
            let eventRef = event2;
            let info = createCallbackInfo(event2, oldEvent, jsEvent);
            callback(assign2(info, {
              revert() {
                updateEvent(eventRef, oldEvent);
              }
            }));
          }
        }
      } else {
        if (clicking() || selecting()) {
          if (isFunction($dateClick()) && !noDateClick) {
            toX = jsEvent.clientX;
            toY = jsEvent.clientY;
            let dayEl = getElementWithPayload(toX, toY);
            if (dayEl) {
              let { allDay: allDay2, date: date2, resource: resource2 } = getPayload(dayEl)(toX, toY);
              $dateClick()({
                allDay: allDay2,
                date: toLocalDate(date2),
                dateStr: toISOString(date2),
                dayEl,
                jsEvent,
                view: toViewWithLocalDates($_view()),
                resource: resource2
              });
            }
          }
        }
      }
      interacting = false;
      action2 = fromX = fromY = toX = toY = event2 = display = date = newDate = resource = newResource = delta = extraDuration = allDay = store_set(_iClass, minResize = selectStep = margin = void 0);
      bodyEl = clipEl = bodyRect = clipRect = void 0;
      if (get(timer)) {
        clearTimeout(get(timer));
        set(timer, void 0);
      }
    }
    noDateClick = false;
  }
  function findDayEl() {
    return getElementWithPayload(limit(toX, viewport[0], viewport[1]), limit(toY, viewport[2], viewport[3]));
  }
  function findPayload(dayEl) {
    if (dayEl) {
      let payload = getPayload(dayEl)(toX, toY);
      if (payload.disabled) {
        if (!$validRange().end || payload.date < $validRange().end) {
          return findPayload(dayEl.nextElementSibling);
        }
        if (!$validRange().start || payload.date > $validRange().start) {
          return findPayload(dayEl.previousElementSibling);
        }
      } else {
        return payload;
      }
    }
    return null;
  }
  function calcViewport() {
    bodyRect = rect(bodyEl);
    clipRect = rect(clipEl);
    viewport = [
      max(0, clipRect.left + (timelineView($view()) ? 1 : $_dayGrid() ? 0 : 8)),
      // left
      min(document.documentElement.clientWidth, clipRect.left + clipEl.clientWidth) - 2,
      // right
      max(0, bodyRect.top),
      // top
      min(document.documentElement.clientHeight, bodyRect.top + bodyEl.clientHeight) - 2
      // bottom
    ];
  }
  function createIEvent(jsEvent, callback) {
    if (isFunction(callback)) {
      callback({
        event: toEventWithLocalDates(event2),
        jsEvent,
        view: toViewWithLocalDates($_view())
      });
    }
    display = event2.display;
    event2.display = "preview";
    store_mutate(_iEvents, untrack($_iEvents)[0] = cloneEvent(event2), untrack($_iEvents));
    if (margin !== void 0) {
      store_mutate(_iEvents, untrack($_iEvents)[0]._margin = margin, untrack($_iEvents));
    }
    if (extraDuration) {
      addDuration($_iEvents()[0].end, extraDuration);
    }
    event2.display = "ghost";
    store_set(_events2, $_events());
  }
  function createIEventSelect() {
    store_mutate(
      _iEvents,
      untrack($_iEvents)[0] = {
        id: "{select}",
        allDay: event2.allDay,
        start: event2.start,
        title: "",
        display: "preview",
        extendedProps: {},
        backgroundColor: $selectBackgroundColor(),
        resourceIds: event2.resourceIds,
        classNames: [],
        styles: []
      },
      untrack($_iEvents)
    );
  }
  function destroyIEvent() {
    store_mutate(_iEvents, untrack($_iEvents)[0] = null, untrack($_iEvents));
  }
  function copyIEventData(target, source2) {
    target.start = source2.start;
    target.end = source2.end;
    target.resourceIds = source2.resourceIds;
    return target;
  }
  function updateEvent(target, source2) {
    copyIEventData(target, source2);
    store_set(_events2, $_events());
  }
  function createSelectCallbackInfo(event22, jsEvent) {
    let { start, end } = toEventWithLocalDates(event22);
    return {
      start,
      end,
      startStr: toISOString(event22.start),
      endStr: toISOString(event22.end),
      allDay,
      view: toViewWithLocalDates($_view()),
      resource,
      jsEvent
    };
  }
  function createCallbackInfo(event22, oldEvent, jsEvent) {
    let info;
    if (resizing()) {
      info = resizingStart() ? { startDelta: delta, endDelta: createDuration(0) } : { startDelta: createDuration(0), endDelta: delta };
    } else {
      info = {
        delta,
        oldResource: resource !== newResource ? resource : void 0,
        newResource: resource !== newResource ? newResource : void 0
      };
    }
    assign2(info, {
      event: toEventWithLocalDates(event22),
      oldEvent: toEventWithLocalDates(oldEvent),
      view: toViewWithLocalDates($_view()),
      jsEvent
    });
    return info;
  }
  function distance() {
    return Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
  }
  function dragging() {
    return action2 === ACTION_DRAG;
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
      if (isFunction($unselectFn())) {
        $unselectFn()({ jsEvent, view: toViewWithLocalDates($_view()) });
      }
    }
  }
  function noClick() {
    noDateClick = true;
  }
  _view.subscribe(unselect);
  function handleTouchStart(jsEvent) {
    if (complexAction()) {
      let target = jsEvent.target;
      let stops = [];
      let stop = () => runAll(stops);
      stops.push(listen2(window, "touchmove", noop2, { passive: false }));
      stops.push(listen2(target, "touchmove", createPreventDefaultHandler(() => interacting)));
      stops.push(listen2(target, "touchend", stop));
      stops.push(listen2(target, "touchcancel", stop));
    }
  }
  function createPreventDefaultHandler(condition) {
    return (jsEvent) => {
      if (condition()) {
        jsEvent.preventDefault();
      }
    };
  }
  init();
  event("pointermove", $window, handlePointerMove);
  event("pointerup", $window, handlePointerUp);
  event("pointercancel", $window, handlePointerUp);
  event("scroll", $window, handleScroll);
  var event_handler = user_derived(() => createPreventDefaultHandler(complexAction));
  event("selectstart", $window, function(...$$args) {
    var _a3;
    (_a3 = get(event_handler)) == null ? void 0 : _a3.apply(this, $$args);
  });
  var event_handler_1 = user_derived(() => createPreventDefaultHandler(() => get(timer)));
  event("contextmenu", $window, function(...$$args) {
    var _a3;
    (_a3 = get(event_handler_1)) == null ? void 0 : _a3.apply(this, $$args);
  });
  event("touchstart", $window, handleTouchStart, void 0, true);
  bind_prop($$props, "draggable", draggable);
  bind_prop($$props, "drag", drag);
  bind_prop($$props, "resize", resize);
  bind_prop($$props, "select", select);
  bind_prop($$props, "noAction", noAction);
  bind_prop($$props, "handleScroll", handleScroll);
  bind_prop($$props, "unselect", unselect);
  bind_prop($$props, "noClick", noClick);
  var $$pop = pop({
    draggable,
    drag,
    resize,
    select,
    noAction,
    handleScroll,
    unselect,
    noClick
  });
  $$cleanup();
  return $$pop;
}
function Pointer($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $_iEvents = () => store_get(_iEvents, "$_iEvents", $$stores);
  const $slotDuration = () => store_get(slotDuration, "$slotDuration", $$stores);
  let { _iEvents, slotDuration } = getContext("state");
  let x = 0, y = 0;
  user_effect(() => {
    if ($_iEvents()[0]) {
      removePointerEvent();
    }
  });
  function move2() {
    let dayEl = getElementWithPayload(x, y);
    if (dayEl) {
      let { allDay, date, resource, disabled } = getPayload(dayEl)(x, y);
      if (!disabled) {
        let idx = allDay ? 2 : 1;
        if (!$_iEvents()[idx]) {
          createPointerEvent(idx);
        }
        store_mutate(_iEvents, untrack($_iEvents)[idx].start = date, untrack($_iEvents));
        store_mutate(_iEvents, untrack($_iEvents)[idx].end = addDuration(cloneDate(date), $slotDuration()), untrack($_iEvents));
        store_mutate(_iEvents, untrack($_iEvents)[idx].resourceIds = resource ? [resource.id] : [], untrack($_iEvents));
        return;
      }
    }
    removePointerEvent();
  }
  function handleScroll() {
    move2();
  }
  function handlePointerMove(jsEvent) {
    if (validEvent(jsEvent)) {
      x = jsEvent.clientX;
      y = jsEvent.clientY;
      move2();
    }
  }
  function createPointerEvent(idx) {
    store_mutate(
      _iEvents,
      untrack($_iEvents)[idx] = {
        id: "{pointer}",
        title: "",
        display: "pointer",
        extendedProps: {},
        backgroundColor: "transparent",
        classNames: [],
        styles: []
      },
      untrack($_iEvents)
    );
  }
  function removePointerEvent() {
    if ($_iEvents()[1]) {
      store_mutate(_iEvents, untrack($_iEvents)[1] = null, untrack($_iEvents));
    }
    if ($_iEvents()[2]) {
      store_mutate(_iEvents, untrack($_iEvents)[2] = null, untrack($_iEvents));
    }
  }
  function validEvent(jsEvent) {
    return jsEvent.isPrimary && jsEvent.pointerType === "mouse";
  }
  event("pointermove", $window, handlePointerMove);
  event("scroll", $window, handleScroll);
  var $$pop = pop({ handleScroll });
  $$cleanup();
  return $$pop;
}
var root_1$9 = from_html(`<div></div>`);
var root_2$6 = from_html(`<div></div>`);
var root$i = from_html(`<!> <!> <!>`, 1);
function Resizer($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $eventDurationEditable = () => store_get(eventDurationEditable, "$eventDurationEditable", $$stores);
  const $editable = () => store_get(editable, "$editable", $$stores);
  const $_interaction = () => store_get(_interaction, "$_interaction", $$stores);
  const $eventResizableFromStart = () => store_get(eventResizableFromStart, "$eventResizableFromStart", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  let forceDate = prop($$props, "forceDate", 3, void 0), forceMargin = prop($$props, "forceMargin", 3, void 0);
  let {
    theme,
    eventDurationEditable,
    eventResizableFromStart,
    editable,
    _interaction
  } = getContext("state");
  let event2 = user_derived(() => $$props.chunk.event);
  let display = user_derived(() => $$props.chunk.event.display);
  let resizable = user_derived(() => !bgEvent(get(display)) && !helperEvent(get(display)) && eventResizable(get(event2), $eventDurationEditable(), $editable()));
  function createResizeHandler(start) {
    return (jsEvent) => {
      var _a3, _b3;
      return $_interaction().action.resize(get(event2), jsEvent, start, $$props.axis, (_a3 = forceDate()) == null ? void 0 : _a3(), (_b3 = forceMargin()) == null ? void 0 : _b3(), $$props.chunk.zeroDuration);
    };
  }
  var fragment = root$i();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$9();
      var event_handler = user_derived(() => createResizeHandler(true));
      div.__pointerdown = function(...$$args) {
        var _a3;
        (_a3 = get(event_handler)) == null ? void 0 : _a3.apply(this, $$args);
      };
      template_effect(() => {
        var _a3, _b3;
        return set_class(div, 1, `${(_a3 = $theme().resizer) != null ? _a3 : ""} ${(_b3 = $theme().start) != null ? _b3 : ""}`);
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(resizable) && $eventResizableFromStart()) $$render(consequent);
    });
  }
  var node_1 = sibling(node, 2);
  snippet(node_1, () => $$props.children);
  var node_2 = sibling(node_1, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var div_1 = root_2$6();
      var event_handler_1 = user_derived(() => createResizeHandler(false));
      div_1.__pointerdown = function(...$$args) {
        var _a3;
        (_a3 = get(event_handler_1)) == null ? void 0 : _a3.apply(this, $$args);
      };
      template_effect(() => set_class(div_1, 1, $theme().resizer));
      append($$anchor2, div_1);
    };
    if_block(node_2, ($$render) => {
      if (get(resizable)) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
delegate(["pointerdown"]);
var root$h = from_html(`<!> <!>`, 1);
function Auxiliary($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $_interaction = () => store_get(_interaction, "$_interaction", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  const $eventStartEditable = () => store_get(eventStartEditable, "$eventStartEditable", $$stores);
  const $editable = () => store_get(editable, "$editable", $$stores);
  const $_bodyEl = () => store_get(_bodyEl, "$_bodyEl", $$stores);
  const $pointer = () => store_get(pointer, "$pointer", $$stores);
  let {
    theme,
    editable,
    eventStartEditable,
    pointer,
    _bodyEl,
    _interaction,
    _iClasses
  } = getContext("state");
  store_mutate(_interaction, untrack($_interaction).resizer = Resizer, untrack($_interaction));
  user_effect(() => {
    $theme();
    $eventStartEditable();
    $editable();
    store_set(_iClasses, (classNames, event2) => {
      let { display } = event2;
      return [
        ...classNames,
        helperEvent(display) ? [$theme()[display]] : !bgEvent(display) && eventDraggable(event2, $eventStartEditable(), $editable()) ? [$theme().draggable] : []
      ];
    });
  });
  user_effect(() => {
    if ($_bodyEl()) {
      return listen2($_bodyEl(), "scroll", bodyScrollHandler);
    }
  });
  function bodyScrollHandler() {
    var _a3;
    for (let component2 of Object.values($_interaction())) {
      (_a3 = component2 == null ? void 0 : component2.handleScroll) == null ? void 0 : _a3.call(component2);
    }
  }
  var fragment = root$h();
  var node = first_child(fragment);
  bind_this(Action(node, {}), ($$value) => store_mutate(_interaction, untrack($_interaction).action = $$value, untrack($_interaction)), () => {
    var _a3;
    return (_a3 = $_interaction()) == null ? void 0 : _a3.action;
  });
  var node_1 = sibling(node, 2);
  {
    var consequent = ($$anchor2) => {
      bind_this(Pointer($$anchor2, {}), ($$value) => store_mutate(_interaction, untrack($_interaction).pointer = $$value, untrack($_interaction)), () => {
        var _a3;
        return (_a3 = $_interaction()) == null ? void 0 : _a3.pointer;
      });
    };
    if_block(node_1, ($$render) => {
      if ($pointer()) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var index$3 = {
  createOptions(options) {
    options.dateClick = void 0;
    options.dragConstraint = void 0;
    options.dragScroll = true;
    options.editable = false;
    options.eventDragMinDistance = 5;
    options.eventDragStart = void 0;
    options.eventDragStop = void 0;
    options.eventDrop = void 0;
    options.eventDurationEditable = true;
    options.eventLongPressDelay = void 0;
    options.eventResizableFromStart = false;
    options.eventResizeStart = void 0;
    options.eventResizeStop = void 0;
    options.eventResize = void 0;
    options.eventStartEditable = true;
    options.longPressDelay = 1e3;
    options.pointer = false;
    options.resizeConstraint = void 0;
    options.select = void 0;
    options.selectBackgroundColor = void 0;
    options.selectConstraint = void 0;
    options.selectLongPressDelay = void 0;
    options.selectMinDistance = 5;
    options.unselect = void 0;
    options.unselectAuto = true;
    options.unselectCancel = "";
    options.theme.draggable = "ec-draggable";
    options.theme.ghost = "ec-ghost";
    options.theme.preview = "ec-preview";
    options.theme.pointer = "ec-pointer";
    options.theme.resizer = "ec-resizer";
    options.theme.start = "ec-start";
    options.theme.dragging = "ec-dragging";
    options.theme.resizingY = "ec-resizing-y";
    options.theme.resizingX = "ec-resizing-x";
    options.theme.selecting = "ec-selecting";
  },
  createStores(state2) {
    state2._auxiliary.update(($_auxiliary) => [...$_auxiliary, Auxiliary]);
  }
};
var root_1$8 = from_html(`<div></div> <!>`, 1);
function Event$3($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $_interaction = () => store_get(_interaction, "$_interaction", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  let { theme, _interaction } = getContext("state");
  let styles = user_derived(() => (style) => {
    delete style["background-color"];
    delete style["color"];
    return style;
  });
  {
    const body = ($$anchor2, defaultBody = noop, bgColor = noop, txtColor = noop) => {
      var fragment_1 = root_1$8();
      var div = first_child(fragment_1);
      let styles_1;
      var node = sibling(div, 2);
      snippet(node, defaultBody);
      template_effect(
        ($02) => {
          set_class(div, 1, $theme().eventTag);
          styles_1 = set_style(div, "", styles_1, $02);
        },
        [() => ({ "background-color": bgColor() })]
      );
      append($$anchor2, fragment_1);
    };
    let $0 = user_derived(() => {
      var _a3;
      return (_a3 = $_interaction().action) == null ? void 0 : _a3.noAction;
    });
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
  $$cleanup();
}
var root_1$7 = from_html(`<div role="listitem"><h4><time></time> <time></time></h4> <!></div>`);
function Day$3($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $_today = () => store_get(_today, "$_today", $$stores);
  const $highlightedDates = () => store_get(highlightedDates, "$highlightedDates", $$stores);
  const $validRange = () => store_get(validRange, "$validRange", $$stores);
  const $_filteredEvents = () => store_get(_filteredEvents, "$_filteredEvents", $$stores);
  const $filterEventsWithResources = () => store_get(filterEventsWithResources, "$filterEventsWithResources", $$stores);
  const $resources = () => store_get(resources, "$resources", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  const $_interaction = () => store_get(_interaction, "$_interaction", $$stores);
  const $_intlListDay = () => store_get(_intlListDay, "$_intlListDay", $$stores);
  const $_intlListDaySide = () => store_get(_intlListDaySide, "$_intlListDaySide", $$stores);
  let {
    _filteredEvents,
    _interaction,
    _intlListDay,
    _intlListDaySide,
    _today,
    resources,
    filterEventsWithResources,
    highlightedDates,
    theme,
    validRange
  } = getContext("state");
  let el = state(void 0);
  let isToday = user_derived(() => datesEqual($$props.date, $_today()));
  let highlight = user_derived(() => $highlightedDates().some((d) => datesEqual(d, $$props.date)));
  let disabled = user_derived(() => outsideRange($$props.date, $validRange()));
  let datetime = user_derived(() => toISOString($$props.date, 10));
  let chunks = user_derived(() => {
    let chunks2 = [];
    if (!get(disabled)) {
      let start = $$props.date;
      let end = addDay(cloneDate($$props.date));
      for (let event2 of $_filteredEvents()) {
        if (!bgEvent(event2.display) && eventIntersects(event2, start, end, $filterEventsWithResources() ? $resources() : void 0)) {
          let chunk = createEventChunk(event2, start, end);
          chunks2.push(chunk);
        }
      }
      sortEventChunks(chunks2);
    }
    return chunks2;
  });
  user_effect(() => {
    if (get(el)) {
      setPayload(get(el), () => ({
        allDay: true,
        date: $$props.date,
        resource: void 0,
        dayEl: get(el),
        disabled: get(disabled)
      }));
    }
  });
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$7();
      div.__pointerdown = function(...$$args) {
        var _a3, _b3;
        (_b3 = (_a3 = $_interaction().action) == null ? void 0 : _a3.select) == null ? void 0 : _b3.apply(this, $$args);
      };
      var h4 = child(div);
      var time = child(h4);
      action(time, ($$node, $$action_arg) => setContent == null ? void 0 : setContent($$node, $$action_arg), () => $_intlListDay().format($$props.date));
      var time_1 = sibling(time, 2);
      action(time_1, ($$node, $$action_arg) => setContent == null ? void 0 : setContent($$node, $$action_arg), () => $_intlListDaySide().format($$props.date));
      reset(h4);
      var node_1 = sibling(h4, 2);
      each(node_1, 17, () => get(chunks), (chunk) => chunk.event, ($$anchor3, chunk) => {
        Event$3($$anchor3, {
          get chunk() {
            return get(chunk);
          }
        });
      });
      reset(div);
      bind_this(div, ($$value) => set(el, $$value), () => get(el));
      template_effect(
        ($0) => {
          var _a3;
          set_class(div, 1, `${(_a3 = $theme().day) != null ? _a3 : ""} ${$0 != null ? $0 : ""}${get(isToday) ? " " + $theme().today : ""}${get(highlight) ? " " + $theme().highlight : ""}`);
          set_class(h4, 1, $theme().dayHead);
          set_attribute2(time, "datetime", get(datetime));
          set_class(time_1, 1, $theme().daySide);
          set_attribute2(time_1, "datetime", get(datetime));
        },
        [() => {
          var _a3;
          return (_a3 = $theme().weekdays) == null ? void 0 : _a3[$$props.date.getUTCDay()];
        }]
      );
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(chunks).length) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
delegate(["pointerdown"]);
function onclick$1(jsEvent, $noEventsClick, noEventsClick, $_view, _view) {
  if (isFunction($noEventsClick())) {
    $noEventsClick()({ jsEvent, view: toViewWithLocalDates($_view()) });
  }
}
var root_1$6 = from_html(`<div></div>`);
var root$g = from_html(`<div><div><!></div></div>`);
function Body$2($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $_viewDates = () => store_get(_viewDates, "$_viewDates", $$stores);
  const $_filteredEvents = () => store_get(_filteredEvents, "$_filteredEvents", $$stores);
  const $noEventsContent = () => store_get(noEventsContent, "$noEventsContent", $$stores);
  const $noEventsClick = () => store_get(noEventsClick, "$noEventsClick", $$stores);
  const $_view = () => store_get(_view, "$_view", $$stores);
  const $_bodyEl = () => store_get(_bodyEl, "$_bodyEl", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  let {
    _bodyEl,
    _filteredEvents,
    _view,
    _viewDates,
    noEventsClick,
    noEventsContent,
    theme
  } = getContext("state");
  let noEvents = user_derived(() => {
    let noEvents2 = true;
    if ($_viewDates().length) {
      let start = $_viewDates()[0];
      let end = addDay(cloneDate($_viewDates().at(-1)));
      for (let event2 of $_filteredEvents()) {
        if (!bgEvent(event2.display) && event2.start < end && event2.end > start) {
          noEvents2 = false;
          break;
        }
      }
    }
    return noEvents2;
  });
  let content = user_derived(() => isFunction($noEventsContent()) ? $noEventsContent()() : $noEventsContent());
  var div = root$g();
  var div_1 = child(div);
  var node = child(div_1);
  {
    var consequent = ($$anchor2) => {
      var div_2 = root_1$6();
      div_2.__click = [onclick$1, $noEventsClick, noEventsClick, $_view, _view];
      action(div_2, ($$node, $$action_arg) => setContent == null ? void 0 : setContent($$node, $$action_arg), () => get(content));
      template_effect(() => set_class(div_2, 1, $theme().noEvents));
      append($$anchor2, div_2);
    };
    var alternate = ($$anchor2) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      each(node_1, 1, $_viewDates, index, ($$anchor3, date) => {
        Day$3($$anchor3, {
          get date() {
            return get(date);
          }
        });
      });
      append($$anchor2, fragment);
    };
    if_block(node, ($$render) => {
      if (get(noEvents)) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(div_1);
  reset(div);
  bind_this(div, ($$value) => store_set(_bodyEl, $$value), () => $_bodyEl());
  template_effect(() => {
    set_class(div, 1, $theme().body);
    set_class(div_1, 1, $theme().content);
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
delegate(["click"]);
function View$3($$anchor) {
  Body$2($$anchor, {});
}
var index$2 = {
  createOptions(options) {
    options.buttonText.listDay = "list";
    options.buttonText.listWeek = "list";
    options.buttonText.listMonth = "list";
    options.buttonText.listYear = "list";
    options.listDayFormat = { weekday: "long" };
    options.listDaySideFormat = { year: "numeric", month: "long", day: "numeric" };
    options.noEventsClick = void 0;
    options.noEventsContent = "No events";
    options.theme.daySide = "ec-day-side";
    options.theme.eventTag = "ec-event-tag";
    options.theme.noEvents = "ec-no-events";
    options.view = "listWeek";
    options.views.listDay = {
      buttonText: btnTextDay,
      component: View$3,
      duration: { days: 1 },
      theme: themeView("ec-list ec-day-view")
    };
    options.views.listWeek = {
      buttonText: btnTextWeek,
      component: View$3,
      duration: { weeks: 1 },
      theme: themeView("ec-list ec-week-view")
    };
    options.views.listMonth = {
      buttonText: btnTextMonth,
      component: View$3,
      duration: { months: 1 },
      theme: themeView("ec-list ec-month-view")
    };
    options.views.listYear = {
      buttonText: btnTextYear,
      component: View$3,
      duration: { years: 1 },
      theme: themeView("ec-list ec-year-view")
    };
  },
  createStores(state2) {
    state2._intlListDay = intl(state2.locale, state2.listDayFormat);
    state2._intlListDaySide = intl(state2.locale, state2.listDaySideFormat);
  }
};
function times(state2) {
  return derived2(
    [state2.slotDuration, state2.slotLabelInterval, state2._slotTimeLimits, state2._intlSlotLabel],
    (args) => createTimes(setMidnight(createDate()), ...args)
  );
}
function slotTimeLimits(state2) {
  return derived2(
    [state2.slotMinTime, state2.slotMaxTime, state2.flexibleSlotTimeLimits, state2._viewDates, state2._filteredEvents],
    (args) => createSlotTimeLimits(...args)
  );
}
function groupEventChunks(chunks) {
  if (!chunks.length) {
    return;
  }
  sortEventChunks(chunks);
  let group = {
    columns: [],
    end: chunks[0].end
  };
  for (let chunk of chunks) {
    let c = 0;
    if (chunk.start < group.end) {
      for (; c < group.columns.length; ++c) {
        if (group.columns[c].at(-1).end <= chunk.start) {
          break;
        }
      }
      if (chunk.end > group.end) {
        group.end = chunk.end;
      }
    } else {
      group = {
        columns: [],
        end: chunk.end
      };
    }
    if (group.columns.length < c + 1) {
      group.columns.push([]);
    }
    group.columns[c].push(chunk);
    chunk.group = group;
    chunk.column = c;
  }
}
function createAllDayContent(allDayContent) {
  let text2 = "all-day";
  let content;
  if (allDayContent) {
    content = isFunction(allDayContent) ? allDayContent({ text: text2 }) : allDayContent;
    if (typeof content === "string") {
      content = { html: content };
    }
  } else {
    content = {
      html: text2
    };
  }
  return content;
}
var root_1$5 = from_html(`<time></time>`);
var root$f = from_html(`<div><div></div> <!></div> <div role="row"><div><!></div> <!></div>`, 1);
function Section($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $allDayContent = () => store_get(allDayContent, "$allDayContent", $$stores);
  const $slotLabelInterval = () => store_get(slotLabelInterval, "$slotLabelInterval", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  const $_times = () => store_get(_times, "$_times", $$stores);
  let { allDayContent, slotLabelInterval, theme, _times } = getContext("state");
  let allDayText = user_derived(() => createAllDayContent($allDayContent()));
  let showAllTimes = user_derived(() => $slotLabelInterval() && $slotLabelInterval().seconds <= 0);
  var fragment = root$f();
  var div = first_child(fragment);
  var div_1 = child(div);
  action(div_1, ($$node, $$action_arg) => setContent == null ? void 0 : setContent($$node, $$action_arg), () => get(allDayText));
  var node = sibling(div_1, 2);
  each(node, 1, $_times, index, ($$anchor2, time, i) => {
    var time_1 = root_1$5();
    action(time_1, ($$node, $$action_arg) => setContent == null ? void 0 : setContent($$node, $$action_arg), () => get(time)[1]);
    template_effect(() => {
      var _a3;
      set_class(time_1, 1, `${(_a3 = $theme().time) != null ? _a3 : ""}${(i || get(showAllTimes)) && get(time)[2] ? "" : " " + $theme().minor}`);
      set_attribute2(time_1, "datetime", get(time)[0]);
    });
    append($$anchor2, time_1);
  });
  reset(div);
  var div_2 = sibling(div, 2);
  var div_3 = child(div_2);
  var node_1 = child(div_3);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_2 = first_child(fragment_1);
      snippet(node_2, () => $$props.lines);
      append($$anchor2, fragment_1);
    };
    if_block(node_1, ($$render) => {
      if ($$props.lines) $$render(consequent);
    });
  }
  reset(div_3);
  var node_3 = sibling(div_3, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment_2 = comment();
      var node_4 = first_child(fragment_2);
      snippet(node_4, () => $$props.children);
      append($$anchor2, fragment_2);
    };
    if_block(node_3, ($$render) => {
      if ($$props.children) $$render(consequent_1);
    });
  }
  reset(div_2);
  template_effect(() => {
    set_class(div, 1, $theme().sidebar);
    set_class(div_1, 1, $theme().sidebarTitle);
    set_class(div_2, 1, $theme().days);
    set_class(div_3, 1, $theme().lines);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2$5 = from_html(`<div></div>`);
var root$e = from_html(`<div><div><!></div></div>`);
function Body$1($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $_viewDates = () => store_get(_viewDates, "$_viewDates", $$stores);
  const $scrollTime = () => store_get(scrollTime, "$scrollTime", $$stores);
  const $_slotTimeLimits = () => store_get(_slotTimeLimits, "$_slotTimeLimits", $$stores);
  const $slotDuration = () => store_get(slotDuration, "$slotDuration", $$stores);
  const $slotHeight = () => store_get(slotHeight, "$slotHeight", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  const $_times = () => store_get(_times, "$_times", $$stores);
  let {
    _bodyEl,
    _viewDates,
    _slotTimeLimits,
    _times,
    _recheckScrollable,
    scrollTime,
    slotDuration,
    slotHeight,
    theme
  } = getContext("state");
  let el = state(void 0);
  user_effect(() => {
    store_set(_bodyEl, get(el));
  });
  user_effect(() => {
    $_viewDates();
    $scrollTime();
    untrack(scrollToTime);
  });
  function scrollToTime() {
    get(el).scrollTop = (($scrollTime().seconds - $_slotTimeLimits().min.seconds) / $slotDuration().seconds - 0.5) * $slotHeight();
  }
  var div = root$e();
  var div_1 = child(div);
  var node = child(div_1);
  {
    const lines = ($$anchor2) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      each(node_1, 1, $_times, index, ($$anchor3, time) => {
        var div_2 = root_2$5();
        template_effect(() => {
          var _a3;
          return set_class(div_2, 1, `${(_a3 = $theme().line) != null ? _a3 : ""}${get(time)[2] ? "" : " " + $theme().minor}`);
        });
        append($$anchor3, div_2);
      });
      append($$anchor2, fragment);
    };
    Section(node, {
      get children() {
        return $$props.children;
      },
      lines,
      $$slots: { lines: true }
    });
  }
  reset(div_1);
  reset(div);
  bind_this(div, ($$value) => set(el, $$value), () => get(el));
  action(div, ($$node, $$action_arg) => observeResize == null ? void 0 : observeResize($$node, $$action_arg), () => () => store_set(_recheckScrollable, true));
  template_effect(() => {
    set_class(div, 1, $theme().body);
    set_class(div_1, 1, $theme().content);
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
function Event$2($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $slotDuration = () => store_get(slotDuration, "$slotDuration", $$stores);
  const $_slotTimeLimits = () => store_get(_slotTimeLimits, "$_slotTimeLimits", $$stores);
  const $slotHeight = () => store_get(slotHeight, "$slotHeight", $$stores);
  const $slotEventOverlap = () => store_get(slotEventOverlap, "$slotEventOverlap", $$stores);
  let { slotEventOverlap, slotDuration, slotHeight, _slotTimeLimits } = getContext("state");
  let display = user_derived(() => $$props.chunk.event.display);
  let styles = user_derived(() => (style) => {
    let step = $slotDuration().seconds;
    let offset = $_slotTimeLimits().min.seconds;
    let start = ($$props.chunk.start - $$props.date) / 1e3;
    let end = ($$props.chunk.end - $$props.date) / 1e3;
    let top = (start - offset) / step * $slotHeight();
    let height2 = (end - start) / step * $slotHeight() || $slotHeight();
    let maxHeight = ($_slotTimeLimits().max.seconds - start) / step * $slotHeight();
    style["top"] = `${top}px`;
    style["min-height"] = `${height2}px`;
    style["height"] = `${height2}px`;
    style["max-height"] = `${maxHeight}px`;
    if (!bgEvent(get(display)) && !helperEvent(get(display)) || ghostEvent(get(display))) {
      style["z-index"] = `${$$props.chunk.column + 1}`;
      style["left"] = `${100 / $$props.chunk.group.columns.length * $$props.chunk.column}%`;
      style["width"] = `${100 / $$props.chunk.group.columns.length * ($slotEventOverlap() ? 0.5 * (1 + $$props.chunk.group.columns.length - $$props.chunk.column) : 1)}%`;
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
  $$cleanup();
}
var root$d = from_html(`<div></div>`);
function NowIndicator$1($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $_now = () => store_get(_now, "$_now", $$stores);
  const $_today = () => store_get(_today, "$_today", $$stores);
  const $slotDuration = () => store_get(slotDuration, "$slotDuration", $$stores);
  const $_slotTimeLimits = () => store_get(_slotTimeLimits, "$_slotTimeLimits", $$stores);
  const $slotHeight = () => store_get(slotHeight, "$slotHeight", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  let {
    slotDuration,
    slotHeight,
    theme,
    _now,
    _today,
    _slotTimeLimits
  } = getContext("state");
  let start = user_derived(() => ($_now() - $_today()) / 1e3);
  let top = user_derived(() => {
    let step = $slotDuration().seconds;
    let offset = $_slotTimeLimits().min.seconds;
    return (get(start) - offset) / step * $slotHeight();
  });
  var div = root$d();
  template_effect(() => {
    var _a3;
    set_class(div, 1, $theme().nowIndicator);
    set_style(div, `top:${(_a3 = get(top)) != null ? _a3 : ""}px`);
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_3$4 = from_html(`<!> <!> <!>`, 1);
var root$c = from_html(`<div role="cell"><div><!></div> <div><!></div> <div><!></div></div>`);
function Day$2($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $_today = () => store_get(_today, "$_today", $$stores);
  const $highlightedDates = () => store_get(highlightedDates, "$highlightedDates", $$stores);
  const $validRange = () => store_get(validRange, "$validRange", $$stores);
  const $_slotTimeLimits = () => store_get(_slotTimeLimits, "$_slotTimeLimits", $$stores);
  const $filterEventsWithResources = () => store_get(filterEventsWithResources, "$filterEventsWithResources", $$stores);
  const $resources = () => store_get(resources, "$resources", $$stores);
  const $_filteredEvents = () => store_get(_filteredEvents, "$_filteredEvents", $$stores);
  const $_iEvents = () => store_get(_iEvents, "$_iEvents", $$stores);
  const $slotDuration = () => store_get(slotDuration, "$slotDuration", $$stores);
  const $slotHeight = () => store_get(slotHeight, "$slotHeight", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  const $_interaction = () => store_get(_interaction, "$_interaction", $$stores);
  const $nowIndicator = () => store_get(nowIndicator, "$nowIndicator", $$stores);
  let resource = prop($$props, "resource", 3, void 0);
  let {
    _filteredEvents,
    _iEvents,
    highlightedDates,
    nowIndicator,
    slotDuration,
    slotHeight,
    filterEventsWithResources,
    theme,
    resources,
    validRange,
    _interaction,
    _today,
    _slotTimeLimits
  } = getContext("state");
  let el = state(void 0);
  let isToday = user_derived(() => datesEqual($$props.date, $_today()));
  let highlight = user_derived(() => $highlightedDates().some((d) => datesEqual(d, $$props.date)));
  let disabled = user_derived(() => outsideRange($$props.date, $validRange()));
  let start = user_derived(() => addDuration(cloneDate($$props.date), $_slotTimeLimits().min));
  let end = user_derived(() => addDuration(cloneDate($$props.date), $_slotTimeLimits().max));
  let resourceFilter = user_derived(() => {
    var _a3;
    return (_a3 = resource()) != null ? _a3 : $filterEventsWithResources() ? $resources() : void 0;
  });
  let $$d = user_derived(() => {
    if (get(disabled)) {
      return [[], []];
    }
    let chunks2 = [];
    let bgChunks2 = [];
    for (let event2 of $_filteredEvents()) {
      if ((!event2.allDay || bgEvent(event2.display)) && eventIntersects(event2, get(start), get(end), get(resourceFilter))) {
        let chunk = createEventChunk(event2, get(start), get(end));
        switch (event2.display) {
          case "background":
            bgChunks2.push(chunk);
            break;
          default:
            chunks2.push(chunk);
        }
      }
    }
    groupEventChunks(chunks2);
    return [chunks2, bgChunks2];
  }), $$array = user_derived(() => to_array(get($$d), 2)), chunks = user_derived(() => get($$array)[0]), bgChunks = user_derived(() => get($$array)[1]);
  let iChunks = user_derived(() => {
    if (get(disabled)) {
      return [];
    }
    return $_iEvents().map((event2) => event2 && eventIntersects(event2, get(start), get(end), resource()) ? createEventChunk(event2, get(start), get(end)) : null);
  });
  function dateFromPoint(x, y) {
    y -= rect(get(el)).top;
    return {
      allDay: false,
      date: addDuration(addDuration(cloneDate($$props.date), $_slotTimeLimits().min), $slotDuration(), floor(y / $slotHeight())),
      resource: resource(),
      dayEl: get(el),
      disabled: get(disabled)
    };
  }
  onMount(() => {
    setPayload(get(el), dateFromPoint);
  });
  var div = root$c();
  div.__pointerdown = function(...$$args) {
    var _a3, _b3;
    (_b3 = !get(disabled) ? (_a3 = $_interaction().action) == null ? void 0 : _a3.select : void 0) == null ? void 0 : _b3.apply(this, $$args);
  };
  var div_1 = child(div);
  var node = child(div_1);
  {
    var consequent = ($$anchor2) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      each(node_1, 17, () => get(bgChunks), (chunk) => chunk.event, ($$anchor3, chunk) => {
        Event$2($$anchor3, {
          get date() {
            return $$props.date;
          },
          get chunk() {
            return get(chunk);
          }
        });
      });
      append($$anchor2, fragment);
    };
    if_block(node, ($$render) => {
      if (!get(disabled)) $$render(consequent);
    });
  }
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var node_2 = child(div_2);
  {
    var consequent_3 = ($$anchor2) => {
      var fragment_2 = root_3$4();
      var node_3 = first_child(fragment_2);
      {
        var consequent_1 = ($$anchor3) => {
          Event$2($$anchor3, {
            get date() {
              return $$props.date;
            },
            get chunk() {
              return get(iChunks)[1];
            }
          });
        };
        if_block(node_3, ($$render) => {
          if (get(iChunks)[1]) $$render(consequent_1);
        });
      }
      var node_4 = sibling(node_3, 2);
      each(node_4, 17, () => get(chunks), (chunk) => chunk.event, ($$anchor3, chunk) => {
        Event$2($$anchor3, {
          get date() {
            return $$props.date;
          },
          get chunk() {
            return get(chunk);
          }
        });
      });
      var node_5 = sibling(node_4, 2);
      {
        var consequent_2 = ($$anchor3) => {
          Event$2($$anchor3, {
            get date() {
              return $$props.date;
            },
            get chunk() {
              return get(iChunks)[0];
            }
          });
        };
        if_block(node_5, ($$render) => {
          if (get(iChunks)[0] && !get(iChunks)[0].event.allDay) $$render(consequent_2);
        });
      }
      append($$anchor2, fragment_2);
    };
    if_block(node_2, ($$render) => {
      if (!get(disabled)) $$render(consequent_3);
    });
  }
  reset(div_2);
  var div_3 = sibling(div_2, 2);
  var node_6 = child(div_3);
  {
    var consequent_4 = ($$anchor2) => {
      NowIndicator$1($$anchor2, {});
    };
    if_block(node_6, ($$render) => {
      if ($nowIndicator() && get(isToday) && !get(disabled)) $$render(consequent_4);
    });
  }
  reset(div_3);
  reset(div);
  bind_this(div, ($$value) => set(el, $$value), () => get(el));
  template_effect(
    ($0) => {
      var _a3;
      set_class(div, 1, `${(_a3 = $theme().day) != null ? _a3 : ""} ${$0 != null ? $0 : ""}${get(isToday) ? " " + $theme().today : ""}${get(highlight) ? " " + $theme().highlight : ""}${get(disabled) ? " " + $theme().disabled : ""}`);
      set_class(div_1, 1, $theme().bgEvents);
      set_class(div_2, 1, $theme().events);
      set_class(div_3, 1, $theme().extra);
    },
    [() => {
      var _a3;
      return (_a3 = $theme().weekdays) == null ? void 0 : _a3[$$props.date.getUTCDay()];
    }]
  );
  append($$anchor, div);
  pop();
  $$cleanup();
}
delegate(["pointerdown"]);
function Event$1($$anchor, $$props) {
  push($$props, true);
  let longChunks = prop($$props, "longChunks", 19, () => ({}));
  let el = state(void 0);
  let margin = state(1);
  let event2 = user_derived(() => $$props.chunk.event);
  let display = user_derived(() => $$props.chunk.event.display);
  let styles = user_derived(() => (style) => {
    var _a3;
    if (bgEvent(get(display))) {
      style["width"] = `calc(${$$props.chunk.days * 100}% + ${$$props.chunk.days - 1}px)`;
    } else {
      style["width"] = `calc(${$$props.chunk.days * 100}% + ${($$props.chunk.days - 1) * 7}px)`;
      style["margin-top"] = `${(_a3 = get(event2)._margin) != null ? _a3 : get(margin)}px`;
    }
    return style;
  });
  function reposition() {
    if (!get(el)) {
      return;
    }
    set(margin, repositionEvent$1($$props.chunk, longChunks(), height(get(el))), true);
  }
  InteractableEvent($$anchor, {
    get chunk() {
      return $$props.chunk;
    },
    get styles() {
      return get(styles);
    },
    axis: "x",
    forceMargin: () => rect(get(el)).top - rect(ancestor(get(el), 1)).top,
    get el() {
      return get(el);
    },
    set el($$value) {
      set(el, $$value, true);
    }
  });
  return pop({ reposition });
}
var root_3$3 = from_html(`<div><!></div>`);
var root$b = from_html(`<div role="cell"><div><!></div> <!> <div><!></div></div>`);
function Day$1($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $_today = () => store_get(_today, "$_today", $$stores);
  const $highlightedDates = () => store_get(highlightedDates, "$highlightedDates", $$stores);
  const $validRange = () => store_get(validRange, "$validRange", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  const $_interaction = () => store_get(_interaction, "$_interaction", $$stores);
  let iChunks = prop($$props, "iChunks", 19, () => []), resource = prop($$props, "resource", 3, void 0);
  let { highlightedDates, theme, validRange, _interaction, _today } = getContext("state");
  let el = state(void 0);
  let refs = [];
  let dayChunks = user_derived(() => $$props.chunks.filter((chunk) => datesEqual(chunk.date, $$props.date)));
  let dayBgChunks = user_derived(() => $$props.bgChunks.filter((bgChunk) => datesEqual(bgChunk.date, $$props.date)));
  let isToday = user_derived(() => datesEqual($$props.date, $_today()));
  let highlight = user_derived(() => $highlightedDates().some((d) => datesEqual(d, $$props.date)));
  let disabled = user_derived(() => outsideRange($$props.date, $validRange()));
  onMount(() => {
    setPayload(get(el), () => ({
      allDay: true,
      date: $$props.date,
      resource: resource(),
      dayEl: get(el),
      disabled: get(disabled)
    }));
  });
  function reposition() {
    if (!get(disabled)) {
      runReposition(refs, get(dayChunks));
    }
  }
  var div = root$b();
  div.__pointerdown = function(...$$args) {
    var _a3, _b3;
    (_b3 = !get(disabled) ? (_a3 = $_interaction().action) == null ? void 0 : _a3.select : void 0) == null ? void 0 : _b3.apply(this, $$args);
  };
  var div_1 = child(div);
  var node = child(div_1);
  {
    var consequent = ($$anchor2) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      each(node_1, 17, () => get(dayBgChunks), (chunk) => chunk.event, ($$anchor3, chunk) => {
        Event$1($$anchor3, {
          get chunk() {
            return get(chunk);
          }
        });
      });
      append($$anchor2, fragment);
    };
    if_block(node, ($$render) => {
      if (!get(disabled)) $$render(consequent);
    });
  }
  reset(div_1);
  var node_2 = sibling(div_1, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var div_2 = root_3$3();
      var node_3 = child(div_2);
      Event$1(node_3, {
        get chunk() {
          return iChunks()[0];
        }
      });
      reset(div_2);
      template_effect(() => {
        var _a3, _b3;
        return set_class(div_2, 1, `${(_a3 = $theme().events) != null ? _a3 : ""} ${(_b3 = $theme().preview) != null ? _b3 : ""}`);
      });
      append($$anchor2, div_2);
    };
    if_block(node_2, ($$render) => {
      if (iChunks()[0] && datesEqual(iChunks()[0].date, $$props.date) && !get(disabled)) $$render(consequent_1);
    });
  }
  var div_3 = sibling(node_2, 2);
  var node_4 = child(div_3);
  {
    var consequent_2 = ($$anchor2) => {
      var fragment_2 = comment();
      var node_5 = first_child(fragment_2);
      each(node_5, 19, () => get(dayChunks), (chunk) => chunk.event, ($$anchor3, chunk, i) => {
        bind_this(
          Event$1($$anchor3, {
            get chunk() {
              return get(chunk);
            },
            get longChunks() {
              return $$props.longChunks;
            }
          }),
          ($$value, i2) => refs[i2] = $$value,
          (i2) => refs == null ? void 0 : refs[i2],
          () => [get(i)]
        );
      });
      append($$anchor2, fragment_2);
    };
    if_block(node_4, ($$render) => {
      if (!get(disabled)) $$render(consequent_2);
    });
  }
  reset(div_3);
  reset(div);
  bind_this(div, ($$value) => set(el, $$value), () => get(el));
  template_effect(
    ($0) => {
      var _a3;
      set_class(div, 1, `${(_a3 = $theme().day) != null ? _a3 : ""} ${$0 != null ? $0 : ""}${get(isToday) ? " " + $theme().today : ""}${get(highlight) ? " " + $theme().highlight : ""}${get(disabled) ? " " + $theme().disabled : ""}`);
      set_class(div_1, 1, $theme().bgEvents);
      set_class(div_3, 1, $theme().events);
    },
    [() => {
      var _a3;
      return (_a3 = $theme().weekdays) == null ? void 0 : _a3[$$props.date.getUTCDay()];
    }]
  );
  append($$anchor, div);
  var $$pop = pop({ reposition });
  $$cleanup();
  return $$pop;
}
delegate(["pointerdown"]);
function Week($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $validRange = () => store_get(validRange, "$validRange", $$stores);
  const $filterEventsWithResources = () => store_get(filterEventsWithResources, "$filterEventsWithResources", $$stores);
  const $resources = () => store_get(resources, "$resources", $$stores);
  const $_filteredEvents = () => store_get(_filteredEvents, "$_filteredEvents", $$stores);
  const $hiddenDays = () => store_get(hiddenDays, "$hiddenDays", $$stores);
  const $_iEvents = () => store_get(_iEvents, "$_iEvents", $$stores);
  let resource = prop($$props, "resource", 3, void 0);
  let {
    _filteredEvents,
    _iEvents,
    hiddenDays,
    resources,
    filterEventsWithResources,
    validRange
  } = getContext("state");
  let refs = [];
  let start = user_derived(() => limitToRange($$props.dates[0], $validRange()));
  let end = user_derived(() => addDay(cloneDate(limitToRange($$props.dates.at(-1), $validRange()))));
  let resourceFilter = user_derived(() => {
    var _a3;
    return (_a3 = resource()) != null ? _a3 : $filterEventsWithResources() ? $resources() : void 0;
  });
  let $$d = user_derived(() => {
    let chunks2 = [];
    let bgChunks2 = [];
    for (let event2 of $_filteredEvents()) {
      if (event2.allDay && eventIntersects(event2, get(start), get(end), get(resourceFilter))) {
        let chunk = createEventChunk(event2, get(start), get(end));
        if (bgEvent(event2.display)) {
          bgChunks2.push(chunk);
        } else {
          chunks2.push(chunk);
        }
      }
    }
    prepareEventChunks$1(bgChunks2, $hiddenDays());
    let longChunks2 = prepareEventChunks$1(chunks2, $hiddenDays());
    return [chunks2, bgChunks2, longChunks2];
  }), $$array = user_derived(() => to_array(get($$d), 3)), chunks = user_derived(() => get($$array)[0]), bgChunks = user_derived(() => get($$array)[1]), longChunks = user_derived(() => get($$array)[2]);
  function reposition() {
    runReposition(refs, $$props.dates);
  }
  user_effect(() => {
    get(chunks);
    untrack(reposition);
  });
  let iChunks = user_derived(() => $_iEvents().map((event2) => {
    let chunk;
    if (event2 && event2.allDay && eventIntersects(event2, get(start), get(end), resource())) {
      chunk = createEventChunk(event2, get(start), get(end));
      prepareEventChunks$1([chunk], $hiddenDays());
    } else {
      chunk = null;
    }
    return chunk;
  }));
  var fragment = comment();
  event("resize", $window, reposition);
  var node = first_child(fragment);
  each(node, 17, () => $$props.dates, index, ($$anchor2, date, i) => {
    bind_this(
      Day$1($$anchor2, {
        get date() {
          return get(date);
        },
        get chunks() {
          return get(chunks);
        },
        get bgChunks() {
          return get(bgChunks);
        },
        get longChunks() {
          return get(longChunks);
        },
        get iChunks() {
          return get(iChunks);
        },
        get resource() {
          return resource();
        }
      }),
      ($$value, i2) => refs[i2] = $$value,
      (i2) => refs == null ? void 0 : refs[i2],
      () => [i]
    );
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2$4 = from_html(`<div role="columnheader"><time></time></div>`);
var root_3$2 = from_html(`<div><div><!> <div></div></div></div>`);
var root$a = from_html(`<div><!> <div></div></div> <!> <!>`, 1);
function View$2($$anchor, $$props) {
  push($$props, false);
  const [$$stores, $$cleanup] = setup_stores();
  const $theme = () => store_get(theme, "$theme", $$stores);
  const $_viewDates = () => store_get(_viewDates, "$_viewDates", $$stores);
  const $_today = () => store_get(_today, "$_today", $$stores);
  const $_intlDayHeaderAL = () => store_get(_intlDayHeaderAL, "$_intlDayHeaderAL", $$stores);
  const $_intlDayHeader = () => store_get(_intlDayHeader, "$_intlDayHeader", $$stores);
  const $allDaySlot = () => store_get(allDaySlot, "$allDaySlot", $$stores);
  let {
    _viewDates,
    _intlDayHeader,
    _intlDayHeaderAL,
    _today,
    allDaySlot,
    theme
  } = getContext("state");
  init();
  var fragment = root$a();
  var div = first_child(fragment);
  var node = child(div);
  Section(node, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      each(node_1, 1, $_viewDates, index, ($$anchor3, date) => {
        var div_1 = root_2$4();
        var time = child(div_1);
        action(time, ($$node, $$action_arg) => setContent == null ? void 0 : setContent($$node, $$action_arg), () => $_intlDayHeader().format(get(date)));
        reset(div_1);
        template_effect(
          ($0, $1, $2, $3) => {
            var _a3;
            set_class(div_1, 1, `${(_a3 = $theme().day) != null ? _a3 : ""} ${$0 != null ? $0 : ""}${$1 != null ? $1 : ""}`);
            set_attribute2(time, "datetime", $2);
            set_attribute2(time, "aria-label", $3);
          },
          [
            () => {
              var _a3;
              return (_a3 = $theme().weekdays) == null ? void 0 : _a3[get(date).getUTCDay()];
            },
            () => datesEqual(get(date), $_today()) ? " " + $theme().today : "",
            () => toISOString(get(date), 10),
            () => $_intlDayHeaderAL().format(get(date))
          ]
        );
        append($$anchor3, div_1);
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var div_2 = sibling(node, 2);
  reset(div);
  var node_2 = sibling(div, 2);
  {
    var consequent = ($$anchor2) => {
      var div_3 = root_3$2();
      var div_4 = child(div_3);
      var node_3 = child(div_4);
      Section(node_3, {
        children: ($$anchor3, $$slotProps) => {
          Week($$anchor3, {
            get dates() {
              return $_viewDates();
            }
          });
        },
        $$slots: { default: true }
      });
      var div_5 = sibling(node_3, 2);
      reset(div_4);
      reset(div_3);
      template_effect(() => {
        set_class(div_3, 1, $theme().allDay);
        set_class(div_4, 1, $theme().content);
        set_class(div_5, 1, $theme().hiddenScroll);
      });
      append($$anchor2, div_3);
    };
    if_block(node_2, ($$render) => {
      if ($allDaySlot()) $$render(consequent);
    });
  }
  var node_4 = sibling(node_2, 2);
  Body$1(node_4, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_3 = comment();
      var node_5 = first_child(fragment_3);
      each(node_5, 1, $_viewDates, index, ($$anchor3, date) => {
        Day$2($$anchor3, {
          get date() {
            return get(date);
          }
        });
      });
      append($$anchor2, fragment_3);
    },
    $$slots: { default: true }
  });
  template_effect(() => {
    set_class(div, 1, $theme().header);
    set_class(div_2, 1, $theme().hiddenScroll);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var TimeGrid = {
  createOptions(options) {
    options.buttonText.timeGridDay = "day";
    options.buttonText.timeGridWeek = "week";
    options.view = "timeGridWeek";
    options.views.timeGridDay = {
      buttonText: btnTextDay,
      component: View$2,
      dayHeaderFormat: { weekday: "long" },
      duration: { days: 1 },
      theme: themeView("ec-time-grid ec-day-view"),
      titleFormat: { year: "numeric", month: "long", day: "numeric" }
    };
    options.views.timeGridWeek = {
      buttonText: btnTextWeek,
      component: View$2,
      duration: { weeks: 1 },
      theme: themeView("ec-time-grid ec-week-view")
    };
  },
  createStores(state2) {
    state2._slotTimeLimits = slotTimeLimits(state2);
    state2._times = times(state2);
  }
};
var root$9 = from_html(`<span></span>`);
var root_3$1 = from_html(`<div><time></time></div>`);
var root_4$1 = from_html(`<div><!></div>`);
var root_7 = from_html(`<div role="columnheader"><!></div>`);
var root_8 = from_html(`<div role="columnheader"><time></time></div>`);
var root_5 = from_html(`<div></div>`);
var root_2$3 = from_html(`<div><!> <!></div>`);
var root_12 = from_html(`<div></div>`);
var root_15 = from_html(`<div><!></div>`);
var root_9 = from_html(`<div><div><!> <div></div></div></div>`);
var root_17 = from_html(`<div></div>`);
var root$8 = from_html(`<div><!> <div></div></div> <!> <!>`, 1);
var root$7 = from_html(`<span></span>`);
var root_1$4 = from_html(`<span></span>`);
var root_2$2 = from_html(`<button><!></button>`);
var root$6 = from_html(`<!> <span><!></span>`, 1);
delegate(["click"]);
var root_1$3 = from_html(`<div role="rowheader"><!> <!></div>`);
var root$5 = from_html(`<div><div></div> <div></div></div>`);
var root_3 = from_html(`<div role="columnheader"><time></time></div>`);
var root_2$1 = from_html(`<div><time></time></div> <div></div>`, 1);
var root_4 = from_html(`<div role="columnheader"><time></time></div>`);
var root_1$2 = from_html(`<div><!></div>`);
var root$4 = from_html(`<div><div role="row"></div> <div></div></div>`);
var root_1$1 = from_html(`<!> <!> <!> <!>`, 1);
var root$3 = from_html(`<div role="cell"><div><!></div></div>`);
delegate(["pointerdown"]);
var root$2 = from_html(`<div role="row"></div>`);
var root_2 = from_html(`<div></div>`);
var root$1 = from_html(`<div><div><div></div> <!></div></div>`);
var root_1 = from_html(`<div></div>`);
var root = from_html(`<div><!> <div><!> <!> <!></div></div>`);
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

// js/calendar-hooks.js
function parseJSON(value, fallback2) {
  try {
    return value ? JSON.parse(value) : fallback2;
  } catch (_e) {
    return fallback2;
  }
}
function pluginsForView(view2) {
  const set2 = /* @__PURE__ */ new Set([index$3]);
  if (typeof view2 === "string") {
    if (view2.startsWith("timeGrid")) set2.add(TimeGrid);
    if (view2.startsWith("dayGrid")) set2.add(index$4);
    if (view2.startsWith("list")) set2.add(index$2);
  }
  if (set2.size === 1) set2.add(TimeGrid);
  return Array.from(set2);
}
var LiveCalendar = {
  mounted() {
    const events2 = parseJSON(this.el.dataset.events, []);
    const options = parseJSON(this.el.dataset.options, {});
    const view2 = options.view || "timeGridWeek";
    const plugins = pluginsForView(view2);
    const lv = options.lv || {};
    const onEventClickName = lv.onEventClick || "event_clicked";
    const onDateClickName = lv.onDateClick || "date_clicked";
    const onMonthChangeName = lv.onMonthChange || "month_changed";
    const userEventClick = typeof options.eventClick === "function" ? options.eventClick : null;
    const userDateClick = typeof options.dateClick === "function" ? options.dateClick : null;
    const userDatesSet = typeof options.datesSet === "function" ? options.datesSet : null;
    const _a3 = options, { lv: _lv } = _a3, baseOptions = __objRest(_a3, ["lv"]);
    const merged = __spreadValues({
      view: view2,
      events: events2,
      // Compose user handlers with LiveView pushes
      eventClick: (arg) => {
        var _a4;
        try {
          userEventClick == null ? void 0 : userEventClick(arg);
        } catch (_e) {
        }
        const payload = { id: (_a4 = arg == null ? void 0 : arg.event) == null ? void 0 : _a4.id, event: safeEvent(arg == null ? void 0 : arg.event) };
        this.pushEvent(onEventClickName, payload);
      },
      dateClick: (arg) => {
        var _a4, _b3;
        try {
          userDateClick == null ? void 0 : userDateClick(arg);
        } catch (_e) {
        }
        const payload = { date: ((_b3 = (_a4 = arg == null ? void 0 : arg.date) == null ? void 0 : _a4.toISOString) == null ? void 0 : _b3.call(_a4)) || (arg == null ? void 0 : arg.date) || null };
        this.pushEvent(onDateClickName, payload);
      },
      datesSet: (arg) => {
        var _a4, _b3, _c2;
        try {
          userDatesSet == null ? void 0 : userDatesSet(arg);
        } catch (_e) {
        }
        const start = toISODate(arg == null ? void 0 : arg.start);
        const month = ((_a4 = arg == null ? void 0 : arg.start) == null ? void 0 : _a4.getMonth) ? arg.start.getMonth() + 1 : null;
        const year = ((_c2 = (_b3 = arg == null ? void 0 : arg.start) == null ? void 0 : _b3.getFullYear) == null ? void 0 : _c2.call(_b3)) || null;
        this.pushEvent(onMonthChangeName, { month, year, start });
      }
    }, baseOptions);
    this._ec = createCalendar(this.el, plugins, merged);
  },
  updated() {
    if (!this._ec) return;
    const events2 = parseJSON(this.el.dataset.events, []);
    const options = parseJSON(this.el.dataset.options, {});
    try {
      this._ec.setOption("events", events2);
      for (const [k, v] of Object.entries(options || {})) {
        if (k === "events") continue;
        if (k === "lv") continue;
        this._ec.setOption(k, v);
      }
    } catch (_e) {
    }
  },
  destroyed() {
    if (this._ec) {
      try {
        destroyCalendar(this._ec);
      } catch (_e) {
      }
      this._ec = null;
    }
  }
};
function toISODate(d) {
  var _a3;
  try {
    return ((_a3 = d == null ? void 0 : d.toISOString) == null ? void 0 : _a3.call(d)) || null;
  } catch (_e) {
    return null;
  }
}
function safeEvent(ev) {
  if (!ev) return null;
  const { id, title, start, end, allDay } = ev;
  return { id, title, start, end, allDay };
}
var Hooks = { LiveCalendar };
if (typeof window !== "undefined") {
  window.LiveCalendarHooks = Hooks;
}
var calendar_hooks_default = Hooks;

// js/main.js
var main_default = calendar_hooks_default;
export {
  main_default as default
};
/*! Bundled license information:

@event-calendar/core/dist/index.js:
  (*!
   * EventCalendar v4.5.1
   * https://github.com/vkurko/calendar
   *)
*/
