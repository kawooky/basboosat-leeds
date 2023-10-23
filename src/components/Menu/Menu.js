import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import styles from "./Menu.module.css";
import { SweetsBar } from "../SweetsBar/SweetsBar";
import { CTA } from "../CTA/CTA";
import { sweetsInfoArray } from "../../sweetsInfoArray";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <section className={styles.main}>
        <Container className={styles["main-container"]}>
          <Row className="d-flex align-items-center justify-content-center  h-100">
            <Col md={6} className="text-center">
              <h1>Refined simplicity.</h1>
            </Col>
          </Row>
        </Container>
      </section>

      <SweetsBar anySweetsInfoArray={sweetsInfoArray}/>

      <CTA/>
    </div>
  );
};
