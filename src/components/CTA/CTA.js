import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./CTA.module.css";




export const CTA = () => {
    return (
        <section className={styles["CTA"]}>
        <Container className="py-4">
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={8}>
              <h2>Indulge in the Rich Flavors of the Middle East!</h2>
            </Col>
          </Row>

          <Row>
            <h4>
              Explore our delectable collection of authentic Middle Eastern
              cakes and pastries. Order now and experience the sweet essence of
              the Middle East delivered right to your doorstep
            </h4>
          </Row>
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={3}>
              <Button
                className="btn btn-primary btn-lg mb-2"
                variant="primary"
                href="#features"
              >
                Menu
              </Button>
            </Col>

            <Col md={3}>
              <Button
                className="btn btn-primary btn-lg mb-2"
                variant="primary"
                href="#features"
              >

                Contact
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    )}