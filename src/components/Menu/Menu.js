import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import styles from "./Menu.module.css";
import { SweetsBar } from "../SweetsBar/SweetsBar";
import { CTA } from "../CTA/CTA";
import { sweetsInfoArray } from "../../sweetsInfoArray";
import menuImage from "../../Media/menu-image.jpg";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <section className={styles.hero}>
        <Container fluid className={styles["hero-container"]}>
        <img className={styles['menu-image']} src={menuImage} alt="contact us image" />
        <Container>
          <Row className={styles.header}>
            <Col md={6} className="text-center">
              <h1>Refined simplicity.</h1>
            </Col>
          </Row>

        </Container>
        </Container>
      </section>

      <SweetsBar anySweetsInfoArray={sweetsInfoArray} />

      <CTA />
    </div>
  );
};
