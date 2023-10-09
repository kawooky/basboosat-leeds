import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "/Users/youssefkawook/Desktop/Software Development/Projects/bakery-website/src/logo.png";
import { MyNavbar } from "../Navbar/MyNavbar";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>

        <section className={styles.hero}>
        <MyNavbar />
          <Container className={styles['hero-info-container']}>
            <Row className="h-100" >
                
              <Col md={6} >
                <h1>Freshly Baked Middle Eastern Sweets delivered to your door.</h1>
                <p>Explore our amazing features and services.</p>
                <Button variant="primary" href="#features">
                  Learn More
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="features" className="features">
          <Container>{/* Features content */}</Container>
        </section>

        <section id="pricing" className="pricing">
          <Container>{/* Pricing content */}</Container>
        </section>

        <section id="contact" className="contact">
          <Container>{/* Contact form and information */}</Container>
        </section>

        <footer className="footer">
          <Container>
            <p>&copy; 2023 My Website. All rights reserved.</p>
          </Container>
        </footer>
      </div>
  );
};
