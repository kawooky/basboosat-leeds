import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../../Media/logo-white.png";
import { NavLink } from "react-router-dom";
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container className={styles['footer-container']}>
        <Row className={styles['footer-row']}>
          <Col md={3} className={styles["footer-col"]}>
            <h5>Links</h5>
            <NavLink to='/Home' className="nav-link">
              <p>Home</p>
            </NavLink>
            <NavLink to='/About' className="nav-link">
              <p >About</p>
            </NavLink>
            <NavLink to='/Menu' className="nav-link">
              <p >Menu</p>
            </NavLink>
            <NavLink to='/Delivery' className="nav-link">
              <p  >Delivery</p>
            </NavLink>
            <NavLink to='/FAQ' className="nav-link">
              <p  >FAQ</p>
            </NavLink>
            <NavLink to='/Contact' className="nav-link">
              <p  >Contact</p>
            </NavLink>
          </Col>
          <Col md={3} className={styles["footer-col"]}>
            <h5>Contact</h5>
            <p className='p-0 m-0'>+447803555789</p>
            <p>kawooky@gmail.com</p>
          </Col>
          <Col md={3} className={styles["footer-col"]}>
            <h5>Other details</h5>
            <p>Founded in 2023</p>
            <p>Single employee company</p>
          </Col>
          <Col md={3} className={styles["logo-col"]}>
          <img
            src={logo}
            width= {'100%'}
            height={'auto'}
            alt="Logo"
          />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

