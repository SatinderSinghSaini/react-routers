Anchor tag(<a></a>) in Navbar.js can be used for router but they will send request to server to fetch index.js every time we click on them.

To resolve this, we use Link and NavLink from "react-router-dom". It prevents call to server and just navigate to component.

Difference between Link and NavLink is that NavLink add "active" class to current router, which is useful to add styles.

In Routes tag, use component property to navigate to destination component,  We will receive props in
destination component as  "react-router-dom "adds default properties.

In order to receive props in NavBar.js we have to wrap it with higher order component.
"withRouter" provided by "react-router-dom" is used for the same.

Higher Order Component(HOC) is used to wrap a component ,adds extra functionality and returns a supercharged version of component.