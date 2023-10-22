import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "/Users/youssefkawook/Desktop/Software Development/Projects/bakery-website/src/images/Basboosat Leeds-logos_black.png";
import styles from './MyNavbar.module.css'

export const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-4">
      <Navbar.Brand href='/Home'>
        <img
          src={logo}
          width="200"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink className='nav-link larger-text' to="/Home" >
            Home
          </NavLink>
          <NavLink className='nav-link' to="/About" >
            About
          </NavLink>
          <NavLink className='nav-link' to="/Menu" >
            Menu
          </NavLink>
          <NavLink className='nav-link' to="/Delivery" >
            Delivery
          </NavLink>
          <NavLink className='nav-link' to="/FAQ" >
            FAQ
          </NavLink>
          <NavLink className='nav-link' to="/Contact" >
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
