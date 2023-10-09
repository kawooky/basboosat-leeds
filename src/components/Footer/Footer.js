import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={3} className={styles["footer-col"]}>
            <h5>Links</h5>
            <p>Content for the first column goes here.</p>
          </Col>
          <Col md={3} className={styles["footer-col"]}>
            <h5>Contact</h5>
            <p>Content for the second column goes here.</p>
          </Col>
          <Col md={3} className={styles["footer-col"]}>
            <h5>Other details</h5>
            <p>Content for the third column goes here.</p>
          </Col>
          <Col md={3} className={styles["footer-col"]}>
            image
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

