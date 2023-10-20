import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from "/Users/youssefkawook/Desktop/Software Development/Projects/bakery-website/src/logo.png";

export const MyNavbar = () => {
  return (<>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
        Basboosat Leeds
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='larger-text' href="/Home">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Menu">Menu</Nav.Link>
          <Nav.Link href="/Delivery">Delivery</Nav.Link>
          <Nav.Link href="/FAQ">FAQ</Nav.Link>
          <Nav.Link href="/Contact">Contact</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>


  </>
  );
};
