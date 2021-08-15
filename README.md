Anchor tag(<a></a>) in Navbar.js can be used for router but they will send request to server to fetch index.js every time we click on them.

To resolve this, we use Link and NavLink from react-router-dom. It prevents call to server and just navigate to component.

Difference between Link and NavLink is that NavLink add "active" class to current router, which is useful to add styles.