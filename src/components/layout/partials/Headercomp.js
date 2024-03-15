import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../../images/logo.png";
function Headercomp() {
  return (
    <div>
      <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" width="50px" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/dashboard">Tikets</Nav.Link>
            <Nav.Link href="/dashboard">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Headercomp;
