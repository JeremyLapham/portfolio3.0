import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function MobileNavbar() {
  return (
    <Navbar fixed='top' collapseOnSelect expand="xl" className="bg-body-tertiary d-sm-block d-md-block d-lg-block d-xl-none" >
      <Container>
        <Navbar.Brand href="#introduction">Intro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
