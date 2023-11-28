import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-black Header">
      <Container>
        <h1>SHOP</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler navbar-toggler-white menu-btn" color="white"/>        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="nav-link text-white">Home</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link text-white">Contact</Nav.Link>
          <Nav.Link as={Link} to="/aboutus" className="nav-link text-white">About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

