Provides commands for executing JavaScript utility operations on the client.

JS commands support a variety of utility operations for common client-side
needs, such as adding or removing CSS classes, setting or removing tag
attributes, showing or hiding content, and transitioning in and out with
animations. While these operations can be accomplished via client-side hooks,
JS commands are DOM-patch aware, so operations applied by the JS APIs will
stick to elements across patches from the server.

In addition to purely client-side utilities, the JS commands include a rich
push API, for extending the default phx- binding pushes with options to
customize targets, loading states, and additional payload values.

If you need to trigger these commands via JavaScript, see JavaScript
interoperability (js-interop.md#js-commands).

## Client Utility Commands

The following utilities are included:

  • add_class - Add classes to elements, with optional transitions
  • remove_class - Remove classes from elements, with optional transitions
  • toggle_class - Sets or removes classes from elements, with optional
    transitions
  • set_attribute - Set an attribute on elements
  • remove_attribute - Remove an attribute from elements
  • toggle_attribute - Sets or removes element attribute based on attribute
    presence.
  • ignore_attributes - Marks attributes as ignored, skipping them when
    patching the DOM.
  • show - Show elements, with optional transitions
  • hide - Hide elements, with optional transitions
  • toggle - Shows or hides elements based on visibility, with optional
    transitions
  • transition - Apply a temporary transition to elements for animations
  • dispatch - Dispatch a DOM event to elements

For example, the following modal component can be shown or hidden on the client
without a trip to the server:

    alias Phoenix.LiveView.JS

    def hide_modal(js \\ %JS{}) do
      js
      |> JS.hide(transition: "fade-out", to: "#modal")
      |> JS.hide(transition: "fade-out-scale", to: "#modal-content")
    end

    def modal(assigns) do
      ~H"""
      <div id="modal" class="phx-modal" phx-remove={hide_modal()}>
        <div
          id="modal-content"
          class="phx-modal-content"
          phx-click-away={hide_modal()}
          phx-window-keydown={hide_modal()}
          phx-key="escape"
        >
          <button class="phx-modal-close" phx-click={hide_modal()}>✖</button>
          <p>{@text}</p>
        </div>
      </div>
      """
    end

## Enhanced push events

The push/1 command allows you to extend the built-in pushed event handling when
a phx- event is pushed to the server. For example, you may wish to target a
specific component, specify additional payload values to include with the
event, apply loading states to external elements, etc. For example, given this
basic phx-click event:

    <button phx-click="inc">+</button>

Imagine you need to target your current component, and apply a loading state to
the parent container while the client awaits the server acknowledgement:

    alias Phoenix.LiveView.JS

    ~H"""
    <button phx-click={JS.push("inc", loading: ".thermo", target: @myself)}>+</button>
    """

Push commands also compose with all other utilities. For example, to add a
class when pushing:

    <button phx-click={
      JS.push("inc", loading: ".thermo", target: @myself)
      |> JS.add_class("warmer", to: ".thermo")
    }>+</button>

Any phx-value-* attributes will also be included in the payload, their values
will be overwritten by values given directly to push/1. Any phx-target
attribute will also be used, and overwritten.

    <button
      phx-click={JS.push("inc", value: %{limit: 40})}
      phx-value-room="bedroom"
      phx-value-limit="this value will be 40"
      phx-target={@myself}
    >+</button>

## DOM Selectors

The client utility commands in this module all take an optional DOM selector
using the :to option.

This can be a string for a regular DOM selector such as:

    JS.add_class("warmer", to: ".thermo")
    JS.hide(to: "#modal")
    JS.show(to: "body a:nth-child(2)")

It is also possible to provide scopes to the DOM selector. The following scopes
are available:

  • {:inner, "selector"} To target an element within the interacted
    element.
  • {:closest, "selector"} To target the closest element from the
    interacted element upwards.
    For example, if building a dropdown component, the button could use the
    :inner scope:

        <div phx-click={JS.show(to: {:inner, ".menu"})}>
        <div>Open me</div>
        <div class="menu hidden" phx-click-away={JS.hide()}>
         I'm in the dropdown menu
        </div>
        </div>


## Custom JS events with `JS.dispatch/1` and `window.addEventListener`

dispatch/1 can be used to dispatch custom JavaScript events to elements. For
example, you can use JS.dispatch("click", to: "#foo"), to dispatch a click
event to an element.

This also means you can augment your elements with custom events, by using
JavaScript's window.addEventListener and invoking them with dispatch/1. For
example, imagine you want to provide a copy-to-clipboard functionality in your
application. You can add a custom event for it:

    window.addEventListener("my_app:clipcopy", (event) => {
      if ("clipboard" in navigator) {
        const text = event.target.textContent;
        navigator.clipboard.writeText(text);
      } else {
        alert("Sorry, your browser does not support clipboard copy.");
      }
    });

Now you can have a button like this:

    <button phx-click={JS.dispatch("my_app:clipcopy", to: "#element-with-text-to-copy")}>
      Copy content
    </button>

The combination of dispatch/1 with window.addEventListener is a powerful
mechanism to increase the amount of actions you can trigger client-side from
your LiveView code.

You can also use window.addEventListener to listen to events pushed from the
server. You can learn more in our JS interoperability guide (js-interop.md).

## Composing JS commands

All the functions in this module optionally accept an existing %JS{} struct as
the first argument, allowing you to chain multiple commands, like pushing an
event to the server and optimistically hiding a modal:

    <div id="modal" class="modal">
      My Modal
    </div>

    <button phx-click={JS.push("modal-closed") |> JS.remove_class("show", to: "#modal", transition: "fade-out")}>
      hide modal
    </button>

Note that the commands themselves are executed on the client in the order they
are composed and the client does not wait for a confirmation before executing
the next command. If you chain JS.push(...) |> JS.hide(...), since hide is a
fully client-side command, it hides immediately after pushing the event, not
waiting for the server to respond.

JS commands interacting with the server are documented as such. If you chain
multiple commands that interact with the server, those are also guaranteed to
be executed in the order they are composed, since a LiveView can only handle
one event at a time. Therefore, if you do something like

    JS.push("my-event") |> JS.patch("/my-path?foo=bar")

it is guaranteed that the event will be pushed first and the patch will only be
handled after the first event was handled by the LiveView.