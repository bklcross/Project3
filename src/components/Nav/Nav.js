import React from "react";
import { Link } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props => (

  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <Link className="navbar-brand" to="/">
            THERAPY
          </Link>
        </Menu.Item>

          <Menu.Item
            className={
              window.location.pathname === "/" || window.location.pathname === "/home"
                ? "active"
                : ""
            }
          >
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item className={window.location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item className={window.location.pathname === "/services" ? "active" : ""}>
            <Link to="/services">Services</Link>
          </Menu.Item>
          <Menu.Item className={window.location.pathname === "/blog" ? "active" : ""}>
            <Link to="/blog">Blog</Link>
          </Menu.Item>
          <Menu.Item className={window.location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">Contact</Link>
          </Menu.Item>
          <Menu.Item className={window.location.pathname === "/login" ? "active" : ""}>
            <Link to="/login">Log In</Link>
          </Menu.Item>

      </Container>
    </Menu>
  </div>
  
);

export default Nav;
