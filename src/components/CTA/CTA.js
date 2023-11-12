import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./CTA.module.css";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className={styles["CTA"]}>
      <Container className="py-4 text-center">
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={12}>
            <h2>Indulge in the Rich Flavors of the Middle East!</h2>
          </Col>
        </Row>

        <Row>
          <h5>
            Elevate your dessert experience with our rich and moist delicacy.
            Order now for a taste of authentic Middle Eastern sweetness
            delivered to your doorstep. Satisfy your cravings and treat yourself
            to the perfect blend of tradition and flavor. Shop now and savor the
            sweetness!
          </h5>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <Link to="/Menu">
              <Button
                className={`mx-4 btn btn-primary btn-lg ${styles.buttons}`}
                variant="primary"
              >
                Menu
              </Button>
            </Link>
            <Link to="/Contact">
              <Button
                className={`mx-4 btn btn-primary btn-lg ${styles.buttons}`}
                variant="primary"
              >
                Contact
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
