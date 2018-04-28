import React, {Component} from "react";
import { Link } from "react-router-dom";
// import { Menu, Container, Image } from "semantic-ui-react";
import "./Nav.css";
import logo from "./logo.png"
import 'font-awesome/css/font-awesome.min.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Nav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };
  }

  toggleNavbar = e => {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    })

  }



  render() {
    const {isExpanded} = this.state;
    return (
      <div id="navbar">
      <nav>
        <div 
        onClick={(e) => this.toggleNavbar(e)}
        className={`toggle ${isExpanded ? "is-expanded" : ""}`}>
          <i className="fas fa-bars">
          </i>
        </div>
        <ul>
          <li id="logoBox">
            <Link to="/"> 
            <img src={logo} id="logo"></img>
            </Link>
          </li>
  
            <li
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "active"
                  : ""
              }
            >
              <Link to="/">Home</Link>
            </li>
            <li className={window.location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">About</Link>
            </li>
            <li className={window.location.pathname === "/services" ? "active" : ""}>
              <Link to="/services">Services</Link>
            </li>
            <li className={window.location.pathname === "/blog" ? "active" : ""}>
              <Link to="/blog">Blog</Link>
            </li>
            <li className={window.location.pathname === "/faqs" ? "active" : ""}>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li className={window.location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="login">
              <Link to="/login">Log In</Link>
            </li>

        </ul>
      </nav>
    </div>

    )
  }

};

export default Nav;