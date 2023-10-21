import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Home.module.css";
import { CardDeck, Card } from "react-bootstrap";
import { CTA } from "../CTA/CTA";
import { SweetsBar } from "../SweetsBar/SweetsBar";
import { sweetsInfoArray } from "../../sweetsInfoArray";

export const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <Container className={styles["hero-info-container"]}>
          <Row className={styles["hero-info-container-row"]}>
            <Col md={6}>
              <h1>
                Freshly Baked Middle Eastern Sweets delivered to your door.
              </h1>
              <p>
                We are committed to baking delicious home made treats at an
                affordable price.
              </p>
              <Row className="d-flex align-items-center justify-content-center">
                <Col md={4}>
                  <Button
                    className="btn btn-primary btn-lg mb-2"
                    variant="primary"
                    href="/Menu"
                  >
                    Menu
                  </Button>
                </Col>

                <Col md={4}>
                  <Button
                    className="btn btn-primary btn-lg mb-2"
                    variant="primary"
                    href="/Contact"
                  >
                    Contact
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.delivery}>
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={9}>
              <h2>FREE DELIVERY to all address within Leeds!</h2>
            </Col>
            <Col md={3}>
              <Button
                className="btn btn-primary btn-lg "
                variant="primary"
                href="#features"
              >
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <SweetsBar headerText={'The Sweets'} anySweetsInfoArray={sweetsInfoArray} />

      <CTA />

      <section></section>
    </div>
  );
};
