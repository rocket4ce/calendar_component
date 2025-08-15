Define reusable function components with HEEx templates.

A function component is any function that receives an assigns map as an
argument and returns a rendered struct built with the ~H sigil (sigil_H/2):

    defmodule MyComponent do
      # In Phoenix apps, the line is typically: use MyAppWeb, :html
      use Phoenix.Component

      def greet(assigns) do
        ~H"""
        <p>Hello, {@name}!</p>
        """
      end
    end

This function uses the ~H sigil to return a rendered template. ~H stands for
HEEx (HTML + EEx). HEEx is a template language for writing HTML mixed with
Elixir interpolation. We can write Elixir code inside {...} for HTML-aware
interpolation inside tag attributes and the body. We can also interpolate
arbitrary HEEx blocks using <%= ... %> We use @name to access the key name
defined inside assigns.

When invoked within a ~H sigil or HEEx template file:

    <MyComponent.greet name="Jane" />

The following HTML is rendered:

    <p>Hello, Jane!</p>

If the function component is defined locally, or its module is imported, then
the caller can invoke the function directly without specifying the module:

    <.greet name="Jane" />

For dynamic values, you can interpolate Elixir expressions into a function
component:

    <.greet name={@user.name} />

Function components can also accept blocks of HEEx content (more on this
later):

    <.card>
      <p>This is the body of my card!</p>
    </.card>

In this module we will learn how to build rich and composable components to use
in our applications.

## Attributes

Phoenix.Component provides the attr/3 macro to declare what attributes the
proceeding function component expects to receive when invoked:

    attr :name, :string, required: true

    def greet(assigns) do
      ~H"""
      <p>Hello, {@name}!</p>
      """
    end

By calling attr/3, it is now clear that greet/1 requires a string attribute
called name present in its assigns map to properly render. Failing to do so
will result in a compilation warning:

    <MyComponent.greet />
      <!-- warning: missing required attribute "name" for component MyAppWeb.MyComponent.greet/1
               lib/app_web/my_component.ex:15 -->

Attributes can provide default values that are automatically merged into the
assigns map:

    attr :name, :string, default: "Bob"

Now you can invoke the function component without providing a value for name:

    <.greet />

Rendering the following HTML:

    <p>Hello, Bob!</p>

Accessing an attribute which is required and does not have a default value will
fail. You must explicitly declare default: nil or assign a value
programmatically with the assign_new/3 function.

Multiple attributes can be declared for the same function component:

    attr :name, :string, required: true
    attr :age, :integer, required: true

    def celebrate(assigns) do
      ~H"""
      <p>
        Happy birthday {@name}!
        You are {@age} years old.
      </p>
      """
    end

Allowing the caller to pass multiple values:

    <.celebrate name={"Genevieve"} age={34} />

Rendering the following HTML:

    <p>
      Happy birthday Genevieve!
      You are 34 years old.
    </p>

Multiple function components can be defined in the same module, with different
attributes. In the following example, <Components.greet/> requires a name, but
does not require a title, and <Components.heading> requires a title, but does
not require a name.

    defmodule Components do
      # In Phoenix apps, the line is typically: use MyAppWeb, :html
      use Phoenix.Component

      attr :title, :string, required: true

      def heading(assigns) do
        ~H"""
        <h1>{@title}</h1>
        """
      end

      attr :name, :string, required: true

      def greet(assigns) do
        ~H"""
        <p>Hello {@name}</p>
        """
      end
    end

With the attr/3 macro you have the core ingredients to create reusable function
components. But what if you need your function components to support dynamic
attributes, such as common HTML attributes to mix into a component's container?

## Global attributes

Global attributes are a set of attributes that a function component can accept
when it declares an attribute of type :global. By default, the set of
attributes accepted are those attributes common to all standard HTML tags. See
Global attributes
(https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) for a
complete list of attributes.

Once a global attribute is declared, any number of attributes in the set can be
passed by the caller without having to modify the function component itself.

Below is an example of a function component that accepts a dynamic number of
global attributes:

    attr :message, :string, required: true
    attr :rest, :global

    def notification(assigns) do
      ~H"""
      <span {@rest}>{@message}</span>
      """
    end

The caller can pass multiple global attributes (such as phx-* bindings or the
class attribute):

    <.notification message="You've got mail!" class="bg-green-200" phx-click="close" />

Rendering the following HTML:

    <span class="bg-green-200" phx-click="close">You've got mail!</span>

Note that the function component did not have to explicitly declare a class or
phx-click attribute in order to render.

Global attributes can define defaults which are merged with attributes provided
by the caller. For example, you may declare a default class if the caller does
not provide one:

    attr :rest, :global, default: %{class: "bg-blue-200"}

Now you can call the function component without a class attribute:

    <.notification message="You've got mail!" phx-click="close" />

Rendering the following HTML:

    <span class="bg-blue-200" phx-click="close">You've got mail!</span>

Note that the global attribute cannot be provided directly and doing so will
emit a warning. In other words, this is invalid:

    <.notification message="You've got mail!" rest={%{"phx-click" => "close"}} />

### Included globals

You may also specify which attributes are included in addition to the known
globals with the :include option. For example to support the form attribute on
a button component:

    # <.button form="my-form"/>
    attr :rest, :global, include: ~w(form)
    slot :inner_block
    def button(assigns) do
      ~H"""
      <button {@rest}>{render_slot(@inner_block)}</button>
      """
    end

The :include option is useful to apply global additions on a case-by-case
basis, but sometimes you want to extend existing components with new global
attributes, such as Alpine.js' x- prefixes, which we'll outline next.

### Custom global attribute prefixes

You can extend the set of global attributes by providing a list of attribute
prefixes to use Phoenix.Component. Like the default attributes common to all
HTML elements, any number of attributes that start with a global prefix will be
accepted by function components invoked by the current module. By default, the
following prefixes are supported: phx-, aria-, and data-. For example, to
support the x- prefix used by Alpine.js (https://alpinejs.dev/), you can pass
the :global_prefixes option to use Phoenix.Component:

    use Phoenix.Component, global_prefixes: ~w(x-)

In your Phoenix application, this is typically done in your lib/my_app_web.ex
file, inside the def html definition:

    def html do
      quote do
        use Phoenix.Component, global_prefixes: ~w(x-)
        # ...
      end
    end

Now all function components invoked by this module will accept any number of
attributes prefixed with x-, in addition to the default global prefixes.

You can learn more about attributes by reading the documentation for attr/3.

## Slots

In addition to attributes, function components can accept blocks of HEEx
content, referred to as slots. Slots enable further customization of the
rendered HTML, as the caller can pass the function component HEEx content they
want the component to render. Phoenix.Component provides the slot/3 macro used
to declare slots for function components:

    slot :inner_block, required: true

    def button(assigns) do
      ~H"""
      <button>
        {render_slot(@inner_block)}
      </button>
      """
    end

The expression render_slot(@inner_block) renders the HEEx content. You can
invoke this function component like so:

    <.button>
      This renders <strong>inside</strong> the button!
    </.button>

Which renders the following HTML:

    <button>
      This renders <strong>inside</strong> the button!
    </button>

Like the attr/3 macro, using the slot/3 macro will provide compile-time
validations. For example, invoking button/1 without a slot of HEEx content will
result in a compilation warning being emitted:

    <.button />
      <!-- warning: missing required slot "inner_block" for component MyAppWeb.MyComponent.button/1
               lib/app_web/my_component.ex:15 -->

### The default slot

The example above uses the default slot, accessible as an assign named
@inner_block, to render HEEx content via the render_slot/1 function.

If the values rendered in the slot need to be dynamic, you can pass a second
value back to the HEEx content by calling render_slot/2:

    slot :inner_block, required: true

    attr :entries, :list, default: []

    def unordered_list(assigns) do
      ~H"""
      <ul>
        <li :for={entry <- @entries}>{render_slot(@inner_block, entry)}</li>
      </ul>
      """
    end

When invoking the function component, you can use the special attribute :let to
take the value that the function component passes back and bind it to a
variable:

    <.unordered_list :let={fruit} entries={~w(apples bananas cherries)}>
      I like <b>{fruit}</b>!
    </.unordered_list>

Rendering the following HTML:

    <ul>
      <li>I like <b>apples</b>!</li>
      <li>I like <b>bananas</b>!</li>
      <li>I like <b>cherries</b>!</li>
    </ul>

Now the separation of concerns is maintained: the caller can specify multiple
values in a list attribute without having to specify the HEEx content that
surrounds and separates them.

### Named slots

In addition to the default slot, function components can accept multiple, named
slots of HEEx content. For example, imagine you want to create a modal that has
a header, body, and footer:

    slot :header
    slot :inner_block, required: true
    slot :footer, required: true

    def modal(assigns) do
      ~H"""
      <div class="modal">
        <div class="modal-header">
          {render_slot(@header) || "Modal"}
        </div>
        <div class="modal-body">
          {render_slot(@inner_block)}
        </div>
        <div class="modal-footer">
          {render_slot(@footer)}
        </div>
      </div>
      """
    end

You can invoke this function component using the named slot HEEx syntax:

    <.modal>
      This is the body, everything not in a named slot is rendered in the default slot.
      <:footer>
        This is the bottom of the modal.
      </:footer>
    </.modal>

Rendering the following HTML:

    <div class="modal">
      <div class="modal-header">
        Modal.
      </div>
      <div class="modal-body">
        This is the body, everything not in a named slot is rendered in the default slot.
      </div>
      <div class="modal-footer">
        This is the bottom of the modal.
      </div>
    </div>

As shown in the example above, render_slot/1 returns nil when an optional slot
is declared and none is given. This can be used to attach default behaviour.

### Slot attributes

Unlike the default slot, it is possible to pass a named slot multiple pieces of
HEEx content. Named slots can also accept attributes, defined by passing a
block to the slot/3 macro. If multiple pieces of content are passed,
render_slot/2 will merge and render all the values.

Below is a table component illustrating multiple named slots with attributes:

    slot :column, doc: "Columns with column labels" do
      attr :label, :string, required: true, doc: "Column label"
    end

    attr :rows, :list, default: []

    def table(assigns) do
      ~H"""
      <table>
        <tr>
          <th :for={col <- @column}>{col.label}</th>
        </tr>
        <tr :for={row <- @rows}>
          <td :for={col <- @column}>{render_slot(col, row)}</td>
        </tr>
      </table>
      """
    end

You can invoke this function component like so:

    <.table rows={[%{name: "Jane", age: "34"}, %{name: "Bob", age: "51"}]}>
      <:column :let={user} label="Name">
        {user.name}
      </:column>
      <:column :let={user} label="Age">
        {user.age}
      </:column>
    </.table>

Rendering the following HTML:

    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Jane</td>
        <td>34</td>
      </tr>
      <tr>
        <td>Bob</td>
        <td>51</td>
      </tr>
    </table>

You can learn more about slots and the slot/3 macro in its documentation
(slot/3).

## Embedding external template files

The embed_templates/1 macro can be used to embed .html.heex files as function
components. The directory path is based on the current module (__DIR__), and a
wildcard pattern may be used to select all files within a directory tree. For
example, imagine a directory listing:

    ├── components.ex
    ├── cards
    │   ├── pricing_card.html.heex
    │   └── features_card.html.heex

Then you can embed the page templates in your components.ex module and call
them like any other function component:

    defmodule MyAppWeb.Components do
      use Phoenix.Component

      embed_templates "cards/*"

      def landing_hero(assigns) do
        ~H"""
        <.pricing_card />
        <.features_card />
        """
      end
    end

See embed_templates/1 for more information, including declarative assigns
support for embedded templates.

## Debug information

HEEx templates support adding annotations and locations to the rendered page,
which are special HTML comments and attributes that help you identify where
markup in your HTML document is rendered within your function component tree.

For example, imagine the following HEEx template:

    <.header>
      <.button>Click</.button>
    </.header>

By turning on debug_heex_annotations, the HTML document would receive the
following comments when debug annotations are enabled:

    <!-- @caller lib/app_web/home_live.ex:20 -->
    <!-- <AppWeb.CoreComponents.header> lib/app_web/core_components.ex:123 -->
    <header class="p-5">
      <!-- @caller lib/app_web/home_live.ex:48 -->
      <!-- <AppWeb.CoreComponents.button> lib/app_web/core_components.ex:456 -->
      <button class="px-2 bg-indigo-500 text-white">Click</button>
      <!-- </AppWeb.CoreComponents.button> -->
    </header>
    <!-- </AppWeb.CoreComponents.header> -->

Similarly, you can also turn on :debug_attributes, which adds a data-phx-loc
attribute with the line of where each HTML tag is defined (as well as
data-phx-pid to the LiveView container):

    <header data-phx-loc="125" class="p-5">
      <button data-phx-loc="458" class="px-2 bg-indigo-500 text-white">Click</button>
    </header>

These features work on any ~H or .html.heex template. They can be enabled
globally with the following configuration in your config/dev.exs file:

    config :phoenix_live_view,
      debug_heex_annotations: true,
      debug_attributes: true

Changing this configuration will require mix clean and a full recompile.

## Dynamic Component Rendering

Sometimes you might need to decide at runtime which component to render.
Because function components are just regular functions, we can leverage
Elixir's apply/3 function to dynamically call a module and/or function passed
in as an assign.

For example, using the following function component definition:

    attr :module, :atom, required: true
    attr :function, :atom, required: true
    # any shared attributes
    attr :shared, :string, required: true

    # any shared slots
    slot :named_slot, required: true
    slot :inner_block, required: true

    def dynamic_component(assigns) do
      {mod, assigns} = Map.pop(assigns, :module)
      {func, assigns} = Map.pop(assigns, :function)

      apply(mod, func, [assigns])
    end

Then you can use the dynamic_component function like so:

    <.dynamic_component
      module={MyAppWeb.MyModule}
      function={:my_function}
      shared="Yay Elixir!"
    >
      <p>Howdy from the inner block!</p>
      <:named_slot>
        <p>Howdy from the named slot!</p>
      </:named_slot>
    </.dynamic_component>

This will call the MyAppWeb.MyModule.my_function/1 function passing in the
remaining assigns.

    defmodule MyAppWeb.MyModule do
      attr :shared, :string, required: true

      slot :named_slot, required: true
      slot :inner_block, required: true

      def my_function(assigns) do
        ~H"""
        <p>Dynamic component with shared assigns: {@shared}</p>
        {render_slot(@inner_block)}
        {render_slot(@named_slot)}
        """
      end
    end

Resulting in the following HTML:

    <p>Dynamic component with shared assigns: Yay Elixir!</p>
    <p>Howdy from the inner block!</p>
    <p>Howdy from the named slot!</p>

Note that to get the most out of Phoenix.Component's compile-time validations,
it is beneficial to define such a dynamic_component for a specific set of
components sharing the same API, instead of defining it for the general case.
In this example, we defined our dynamic_component to expect an assign called
shared, as well as two slots that all components we want to use with it must
implement. The called my_function component's attribute and slot definitions
cannot be validated through the apply call.
A special HEEx :type that extracts any JavaScript code from a co-located
<script> tag at compile time.

Note: To use ColocatedJS, you need to run Phoenix 1.8+.

Colocated JavaScript is a more generalized version of
Phoenix.LiveView.ColocatedHook. In fact, colocated hooks are built on top of
ColocatedJS.

You can use ColocatedJS to define any JavaScript code (Web Components, global
event listeners, etc.) that do not necessarily need the functionalities of
hooks, for example:

    <script :type={Phoenix.LiveView.ColocatedJS} name="MyWebComponent">
      export default class MyWebComponent extends HTMLElement {
        connectedCallback() {
          this.innerHTML = "Hello, world!";
        }
      }
    </script>

Then, in your app.js file, you could import it like this:

    import colocated from "phoenix-colocated/my_app";
    customElements.define("my-web-component", colocated.MyWebComponent);

In this example, you don't actually need to have special code for the web
component inside your app.js file, since you could also directly call
customElements.define inside the colocated JavaScript. However, this example
shows how you can access the exported values inside your bundle.

> #### A note on dependencies and umbrella projects {: .info}
>
> For each application that uses colocated JavaScript, a separate directory is
> created inside the phoenix-colocated folder. This allows to have clear
> separation between hooks and code of dependencies, but also applications
> inside umbrella projects.
>
> While dependencies would typically still bundle their own hooks and colocated
> JavaScript into a separate file before publishing, simple hooks or code
> snippets that do not require access to third-party libraries can also be
> directly imported into your own bundle. If a library requires this, it should
> be stated in its documentation.

## Internals

While compiling the template, colocated JavaScript is extracted into a special
folder inside the Mix.Project.build_path(), called phoenix-colocated. This is
customizable, as we'll see below, but it is important that it is a directory
that is not tracked by version control, because the components are the source
of truth for the code. Also, the directory is shared between applications (this
also applies to applications in umbrella projects), so it should typically also
be a shared directory not specific to a single application.

The colocated JS directory follows this structure:

    _build/$MIX_ENV/phoenix-colocated/
    _build/$MIX_ENV/phoenix-colocated/my_app/
    _build/$MIX_ENV/phoenix-colocated/my_app/index.js
    _build/$MIX_ENV/phoenix-colocated/my_app/MyAppWeb.DemoLive/line_HASH.js
    _build/$MIX_ENV/phoenix-colocated/my_dependency/MyDependency.Module/line_HASH.js
    ...

Each application has its own folder. Inside, each module also gets its own
folder, which allows us to track and clean up outdated code.

To use colocated JS from your app.js, your bundler needs to be configured to
resolve the phoenix-colocated folder. For new Phoenix applications, this
configuration is already included in the esbuild configuration inside
config.exs:

    config :esbuild,
      ...
      my_app: [
        args:
          ~w(js/app.js --bundle --target=es2022 --outdir=../priv/static/assets/js --external:/fonts/* --external:/images/* --alias:@=.),
        cd: Path.expand("../assets", __DIR__),
        env: %{
          "NODE_PATH" => [Path.expand("../deps", __DIR__), Mix.Project.build_path()]
        }
      ]

The important part here is the NODE_PATH environment variable, which tells
esbuild to also look for packages inside the deps folder, as well as the
Mix.Project.build_path(), which resolves to _build/$MIX_ENV. If you use a
different bundler, you'll need to configure it accordingly. If it is not
possible to configure the NODE_PATH, you can also change the folder to which
LiveView writes colocated JavaScript by setting the :target_directory option in
your config.exs:

    config :phoenix_live_view, :colocated_js,
      target_directory: Path.expand("../assets/node_modules/phoenix-colocated", __DIR__)

An alternative approach could be to symlink the phoenix-colocated folder into
your node_modules folder.

> #### Tip {: .info}
>
> If you remove or modify the contents of the :target_directory folder, you can
> use mix clean --all and mix compile to regenerate all colocated JavaScript.

> #### Warning! {: .warning}
>
> LiveView assumes full ownership over the configured :target_directory. When
> compiling, it will delete any files and folders inside the :target_directory,
> that it does not associate with a colocated JavaScript module or manifest.

### Imports in colocated JS

The colocated JS files are fully handled by your bundler. For Phoenix apps,
this is typically esbuild. Because colocated JS is extracted to a folder
outside the regular assets folder, special care is necessary when you need to
import other files inside the colocated JS:

    import { someFunction } from "some-dependency";
    import somethingElse from "@/vendor/vendored-file";

While dependencies from node_modules should work out of the box, you cannot
simply refer to your assets/vendor folder using a relative path. Instead, your
bundler needs to be configured to handle an alias like @ to resolve to your
local assets folder. This is configured by default in the esbuild configuration
for new Phoenix 1.8 applications using esbuild's alias option
(https://esbuild.github.io/api/#alias), as can be seen in the config snippet
above (--alias=@=.).

## Options

Colocated JavaScript can be configured through the attributes of the <script>
tag. The supported attributes are:

  • name - The name under which the default export of the script is
    available when importing the manifest. If omitted, the file will be
    imported for side effects only.
  • key - A custom key to use for the export. This is used by
    Phoenix.LiveView.ColocatedHook to export all hooks under the named hooks
    export (export { ... as hooks }). For example, you could set this to
    web_components for each colocated script that defines a web component and
    then import all of them as import { web_components } from
    "phoenix-colocated/my_app". Defaults to :default, which means the export
    will be available under the manifest's default export. This needs to be a
    valid JavaScript identifier. When given, a name is required as well.
  • extension - a custom extension to use when writing the extracted file.
    The default is js.
  • manifest - a custom manifest file to use instead of the default
    index.js. For example, web_components.ts. If you change the manifest, you
    will need to change the path of your JavaScript imports accordingly.

    A special HEEx :type that extracts hooks
(js-interop.md#client-hooks-via-phx-hook) from a co-located <script> tag at
compile time.

Note: To use ColocatedHook, you need to run Phoenix 1.8+.

## Introduction

Colocated hooks are defined as with :type={Phoenix.LiveView.ColocatedHook}:

    defmodule MyAppWeb.DemoLive do
      use MyAppWeb, :live_view

      def mount(_params, _session, socket) do
        {:ok, socket}
      end

      def render(assigns) do
        ~H"""
        <input type="text" name="user[phone_number]" id="user-phone-number" phx-hook=".PhoneNumber" />
        <script :type={Phoenix.LiveView.ColocatedHook} name=".PhoneNumber">
          export default {
            mounted() {
              this.el.addEventListener("input", e => {
                let match = this.el.value.replace(/\D/g, "").match(/^(\d{3})(\d{3})(\d{4})$/)
                if(match) {
                  this.el.value = `${match[1]}-${match[2]}-${match[3]}`
                }
              })
            }
          }
        </script>
        """
      end
    end

You can read more about the internals of colocated hooks in the documentation
for colocated JS (Phoenix.LiveView.ColocatedJS#internals). A brief summary: at
compile time, the hook's code is extracted into a special folder, typically in
your _build directory. Each hook is also imported into a special manifest file.
The manifest file provides a named export
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
which allows it to be imported by any JavaScript bundler that supports ES
modules
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules):

    import {hooks} from "phoenix-colocated/my_app"

    console.log(hooks);
    /*
    {
      "MyAppWeb.DemoLive.PhoneNumber": {...},
      ...
    }
    */

> #### Compilation order {: .info}
>
> Colocated hooks are only written when the corresponding component is
> compiled. Therefore, whenever you need to access a colocated hook, you need
> to ensure mix compile runs first. This automatically happens in development.
>
> If you have a custom mix alias, instead of release: ["assets.deploy",
> "release"] do release: ["compile", "assets.deploy", "release"] to ensure that
> all colocated hooks are extracted before esbuild or any other bundler runs.

## Options

Colocated hooks are configured through the attributes of the <script> tag. The
supported attributes are:

  • name - The name of the hook. This is required and must start with a
    dot, for example: name=".myhook". The same name must be used when referring
    to this hook in the phx-hook attribute of another HTML element.
  • runtime - If present, the hook is not extracted, but instead registered
    at runtime. You should only use this option if you know that you need it.
    It comes with some limitations:
    1. The content is not processed by any bundler, therefore it must
       only use features supported by the targeted browsers.
    2. You need to take special care about any Content Security Policies
       (https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) that may
       be in place. See the section on runtime hooks below for more details.


## Runtime hooks

Runtime hooks are a special kind of colocated hook that are not removed from
the DOM when rendering the component. Instead, the hook's code is executed
directly in the browser with no bundler involved.

One example where this can be useful is when you are creating a custom page for
a library like Phoenix.LiveDashboard. The live dashboard already bundles its
hooks, therefore there is no way to add new hooks to the bundle when the live
dashboard is used inside your application.

Because of this, runtime hooks must also use a slightly different syntax. While
in normal colocated hooks you'd write an export default statement, runtime
hooks must evaluate to the hook itself:

    <script :type={Phoenix.LiveView.ColocatedHook} name=".MyHook" runtime>
      {
        mounted() {
          ...
        }
      }
    </script>

This is because the hook's code is wrapped by LiveView into something like
this:

    window["phx_hook_HASH"] = function() {
      return {
        mounted() {
          ...
        }
      }
    }

Still, even for runtime hooks, the hook's name needs to start with a dot and is
automatically prefixed with the module name to avoid conflicts with other
hooks.

When using runtime hooks, it is important to think about any limitations that
content security policies may impose. If CSP is involved, the only way to use
runtime hooks is by using CSP nonces:

    <script :type={Phoenix.LiveView.ColocatedHook} name=".MyHook" runtime nonce={@script_csp_nonce}>
      function() {
        return ...;
      }
    </script>

This is assuming that the @script_csp_nonce assign contains the nonce value
that is also sent in the Content-Security-Policy header.
