import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Home.module.css";
import { CardDeck, Card } from "react-bootstrap";
import { CTA } from "../CTA/CTA";
import { SweetsBar } from "../SweetsBar/SweetsBar";
import { sweetsInfoArray } from "../../sweetsInfoArray";
import { Link } from "react-router-dom";
import bakingVideo from "../../Media/baking-cookies-video.mp4";

export const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <Container fluid className={styles["hero-info-container"]}>
          <video className={styles["background-video"]} autoPlay loop muted>
            <source src={bakingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Row className={styles["hero-info-container-row"]}>
            <Col md={6} className="text-center">
              <h1>
                Freshly Baked Middle Eastern Sweets delivered to your door.
              </h1>
              <h5>
                We are committed to baking delicious home made treats at an
                affordable price.
              </h5>
              <Row className={styles["hero-buttons-row"]}>
                <Col>
                  <Link to="/Menu">
                    <Button
                      className={`m-4 btn btn-primary btn-lg ${styles.buttons}`}
                      variant="primary"
                      href="/Menu"
                    >
                      Menu
                    </Button>
                  </Link>

                  <Link to="/Contact">
                    <Button
                      className={`m-4 btn btn-primary btn-lg ${styles.buttons}`}
                      variant="primary"
                      href="/Contact"
                    >
                      Contact
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.delivery}>
        <Container>
          <Row className="d-flex py-4 align-items-center justify-content-center">
            <Col md={9} className="text-center">
              <h2>FREE DELIVERY to all address within Leeds!</h2>
            </Col>
            <Col
              md={3}
              className="d-flex align-items-center justify-content-center"
            >
              <Link to="/Delivery">
                <Button
                  className={`btn btn-primary btn-lg ${styles.buttons}`}
                  variant="primary"
                >
                  Delivery
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <SweetsBar
        headerText={"The Sweets"}
        anySweetsInfoArray={sweetsInfoArray}
      />

      <CTA />

      <section></section>
    </div>
  );
};
