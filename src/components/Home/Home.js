import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Home.module.css";
import { CardDeck, Card } from "react-bootstrap";

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
                    href="#features"
                  >
                    Learn More
                  </Button>
                </Col>

                <Col md={4}>
                  <Button
                    className="btn btn-primary btn-lg mb-2"
                    variant="primary"
                    href="#features"
                  >
                    Learn More
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

      <section className={styles["sweets-section"]}>
        <Container className="py-4">
          <Row className="d-flex align-items-center justify-content-center">
            <h1>The Sweets</h1>
          </Row>
          <Row>
            <Col md={4}>
              <Card >
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  alt="Card Image"
                />
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>This is the content of Card 1.</Card.Text>
                  <Button
                    className="btn btn-primary btn-lg mb-2"
                    variant="primary"
                    href="#features"
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  alt="Card Image"
                />
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>This is the content of Card 2.</Card.Text>
                  <Button
                    className="btn btn-primary btn-lg mb-2"
                    variant="primary"
                    href="#features"
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  alt="Card Image"
                />
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>This is the content of Card 3.</Card.Text>
                  <Button
                    className="btn btn-primary btn-lg mb-2"
                    variant="primary"
                    href="#features"
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles["CTA-section"]}>
        <Container className="py-4">
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={8}>
              <h2>Indulge in the Rich Flavors of the Middle East!</h2>
            </Col>
          </Row>

          <Row>
            <h3>
              Explore our delectable collection of authentic Middle Eastern
              cakes and pastries. Order now and experience the sweet essence of
              the Middle East delivered right to your doorstep
            </h3>
          </Row>
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={3}>
              <Button
                className="btn btn-primary btn-lg mb-2"
                variant="primary"
                href="#features"
              >
                Learn More
              </Button>
            </Col>

            <Col md={3}>
              <Button
                className="btn btn-primary btn-lg mb-2"
                variant="primary"
                href="#features"
              >

                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>


      <section>

      </section>
    </div>
  );
};
