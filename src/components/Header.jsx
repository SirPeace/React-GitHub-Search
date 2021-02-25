import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand as="span">Github Search</Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink to="/" exact>
          <Nav.Link as="span">Search</Nav.Link>
        </NavLink>
        <NavLink to="/about">
          <Nav.Link as="span">About</Nav.Link>
        </NavLink>
      </Nav>
    </Navbar>
  );
}
