import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import HighlightIcon from "@mui/icons-material/Highlight";

function navbar() {
  return (
    <Navbar bg="#f5ba13" expand="lg" className="navbarcustom">
      <Container>
        <Navbar.Brand href="#home" className="navbarbrandcustom">
          <HighlightIcon />
          Keynotes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center" >
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/notes">Notes</Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="ms-auto">
          <Nav className="justify-content-end" >
            <Nav.Item>
              <Nav.Link href="/signin">
                <Button variant="light" className="me-0">
                  SignUp
                </Button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">
                <Button variant="light" className="me-0">
                  Login
                </Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
