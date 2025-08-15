Conveniences for testing function components as well as LiveViews and
LiveComponents.

## Testing function components

There are two mechanisms for testing function components. Imagine the following
component:

    def greet(assigns) do
      ~H"""
      <div>Hello, {@name}!</div>
      """
    end

You can test it by using render_component/3, passing the function reference to
the component as first argument:

    import Phoenix.LiveViewTest

    test "greets" do
      assert render_component(&MyComponents.greet/1, name: "Mary") ==
               "<div>Hello, Mary!</div>"
    end

However, for complex components, often the simplest way to test them is by
using the ~H sigil itself:

    import Phoenix.Component
    import Phoenix.LiveViewTest

    test "greets" do
      assigns = %{}
      assert rendered_to_string(~H"""
             <MyComponents.greet name="Mary" />
             """) ==
               "<div>Hello, Mary!</div>"
    end

The difference is that we use rendered_to_string/1 to convert the rendered
template to a string for testing.

## Testing LiveViews and LiveComponents

In LiveComponents and LiveView tests, we interact with views via process
communication in substitution of a browser. Like a browser, our test process
receives messages about the rendered updates from the view which can be
asserted against to test the life-cycle and behavior of LiveViews and their
children.

### Testing LiveViews

The life-cycle of a LiveView as outlined in the Phoenix.LiveView docs details
how a view starts as a stateless HTML render in a disconnected socket state.
Once the browser receives the HTML, it connects to the server and a new
LiveView process is started, remounted in a connected socket state, and the
view continues statefully. The LiveView test functions support testing both
disconnected and connected mounts separately, for example:

    import Plug.Conn
    import Phoenix.ConnTest
    import Phoenix.LiveViewTest
    @endpoint MyEndpoint

    test "disconnected and connected mount", %{conn: conn} do
      conn = get(conn, "/my-path")
      assert html_response(conn, 200) =~ "<h1>My Disconnected View</h1>"

      {:ok, view, html} = live(conn)
    end

    test "redirected mount", %{conn: conn} do
      assert {:error, {:redirect, %{to: "/somewhere"}}} = live(conn, "my-path")
    end

Here, we start by using the familiar Phoenix.ConnTest function, get/2 to test
the regular HTTP GET request which invokes mount with a disconnected socket.
Next, live/1 is called with our sent connection to mount the view in a
connected state, which starts our stateful LiveView process.

In general, it's often more convenient to test the mounting of a view in a
single step, provided you don't need the result of the stateless HTTP render.
This is done with a single call to live/2, which performs the get step for us:

    test "connected mount", %{conn: conn} do
      {:ok, _view, html} = live(conn, "/my-path")
      assert html =~ "<h1>My Connected View</h1>"
    end

### Testing Events

The browser can send a variety of events to a LiveView via phx- bindings, which
are sent to the handle_event/3 callback. To test events sent by the browser and
assert on the rendered side effect of the event, use the render_* functions:

  • render_click/1 - sends a phx-click event and value, returning the
    rendered result of the handle_event/3 callback.
  • render_focus/2 - sends a phx-focus event and value, returning the
    rendered result of the handle_event/3 callback.
  • render_blur/1 - sends a phx-blur event and value, returning the
    rendered result of the handle_event/3 callback.
  • render_submit/1 - sends a form phx-submit event and value, returning
    the rendered result of the handle_event/3 callback.
  • render_change/1 - sends a form phx-change event and value, returning
    the rendered result of the handle_event/3 callback.
  • render_keydown/1 - sends a form phx-keydown event and value, returning
    the rendered result of the handle_event/3 callback.
  • render_keyup/1 - sends a form phx-keyup event and value, returning the
    rendered result of the handle_event/3 callback.
  • render_hook/3 - sends a hook event and value, returning the rendered
    result of the handle_event/3 callback.

For example:

    {:ok, view, _html} = live(conn, "/thermo")

    assert view
           |> element("button#inc")
           |> render_click() =~ "The temperature is: 31℉"

In the example above, we are looking for a particular element on the page and
triggering its phx-click event. LiveView takes care of making sure the element
has a phx-click and automatically sends its values to the server.

You can also bypass the element lookup and directly trigger the LiveView event
in most functions:

    assert render_click(view, :inc, %{}) =~ "The temperature is: 31℉"

The element style is preferred as much as possible, as it helps LiveView
perform validations and ensure the events in the HTML actually matches the
event names on the server.

### Testing regular messages

LiveViews are GenServer's under the hood, and can send and receive messages
just like any other server. To test the side effects of sending or receiving
messages, simply message the view and use the render function to test the
result:

    send(view.pid, {:set_temp, 50})
    assert render(view) =~ "The temperature is: 50℉"

### Testing LiveComponents

LiveComponents can be tested in two ways. One way is to use the same
render_component/2 function as function components. This will mount the
LiveComponent and render it once, without testing any of its events:

    assert render_component(MyComponent, id: 123, user: %User{}) =~
             "some markup in component"

However, if you want to test how components are mounted by a LiveView and
interact with DOM events, you must use the regular live/2 macro to build the
LiveView with the component and then scope events by passing the view and a DOM
selector in a list:

    {:ok, view, html} = live(conn, "/users")
    html = view |> element("#user-13 a", "Delete") |> render_click()
    refute html =~ "user-13"
    refute view |> element("#user-13") |> has_element?()

In the example above, LiveView will lookup for an element with ID=user-13 and
retrieve its phx-target. If phx-target points to a component, that will be the
component used, otherwise it will fallback to the view.