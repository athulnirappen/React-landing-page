import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const NavbarComponent = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-info">
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold text-white">
            Jadoo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features" className=" fw-bold text-white">
                Destination
              </Nav.Link>
              <Nav.Link href="#pricing" className=" fw-bold text-white">
                Hotels
              </Nav.Link>

              <Nav.Link href="#pricing" className="fw-bold text-white">
                Bookings
              </Nav.Link>
              <Nav.Link href="#pricing" className="fw-bold text-white">
                Login
              </Nav.Link>
              <Nav.Link href="#pricing" className=" fw-bold text-white ">
                Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent