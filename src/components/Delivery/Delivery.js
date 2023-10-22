import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Delivery.module.css";
import mapOfLeedsImage from "../../images/map-of-leeds.jpg";;

export const Delivery = () => {
  return (
    <div className={styles.delivery}>
      <Container className={styles["delivery-main-container"]}>
        <Row className="py-4" styles={styles["hero-info-container-row"]}>
          <Col md={6}>
            <img
              src={mapOfLeedsImage}
              class="img-fluid"
              alt="Map of Leeds"
            ></img>
          </Col>
          <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
            <h1>Delivery</h1>
            <p>We are delighted to offer delivery services free of charge to any address within Leeds, ensuring that our sweets can reach you wherever you are in the city. Additionally, we may also have the capacity to arrange deliveries beyond Leeds. If you have any specific questions about our delivery services or if there are further details you'd like to know, please do not hesitate to reach out to us.</p>
            <Button
              className="btn btn-primary btn-lg mb-2"
              variant="primary"
              href="/Contact"
            >
              Contact
            </Button>
          </Col>
        </Row>
      </Container>

    </div>
  );
};