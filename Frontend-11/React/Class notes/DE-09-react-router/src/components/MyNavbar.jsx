import React from "react";
import {
  Navbar,
  Container,
  Nav,
  
} from "react-bootstrap";
import logo from "../img/logo.png";
import {Link,NavLink} from "react-router-dom"


//!!! Bir NavLink bağlantıyı etkin olarak vurgulamak istediğinizde kullanılır. Bu nedenle, bir sayfaya yapılan her yönlendirmede bağlantı, active ClassName ini alır (renk değiştirir vs). Link, vurgulama gerektirmeyen bağlantılar içindir. Ve a tag i dış bağlantılar içindir.

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              className="nav-link"
              style={({ isActive }) => ({ color: isActive && "red" })}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              style={({ isActive }) => ({ color: isActive && "red" })}
              to="/teacher"
            >
              Teacher
            </NavLink>
            <NavLink
              className="nav-link"
              style={({ isActive }) => ({ color: isActive && "red" })}
              to="/courses"
            >
              Courses
            </NavLink>
            <NavLink
              className="nav-link"
              style={({ isActive }) => ({ color: isActive && "red" })}
              to="/contact"
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
