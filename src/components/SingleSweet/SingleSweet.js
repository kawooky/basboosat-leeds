import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./SingleSweet.module.css";
import { sweetsInfoArray } from "../../sweetsInfoArray";
import { useParams } from "react-router-dom";
import { CTA } from "../CTA/CTA";
import { SweetsBar } from "../SweetsBar/SweetsBar";

export const SingleSweet = () => {
  const { sweetName } = useParams();
  const sweetsInfoArrayDeepCopy = JSON.parse(JSON.stringify(sweetsInfoArray));

  delete sweetsInfoArrayDeepCopy[sweetName];

  const selectedSweetInfo = sweetsInfoArray[sweetName];

  return (
    <div className={styles["single-sweet"]}>
      <Container className={styles["single-sweet-main-container"]}>
        <Row className="py-4">
          <Col md={6}>
            <Carousel showArrows={true} showThumbs={true} showStatus={false}>
              {selectedSweetInfo.imageArray.map((image, index) => {
                return (
                  <div key={index}>
                    <img src={image} alt={index} />
                  </div>
                );
              })}
            </Carousel>
          </Col>
          <Col md={6}>
            <h1>{selectedSweetInfo.name}</h1>
            <h3>{selectedSweetInfo.description}</h3>
            <p>Ingredients: {selectedSweetInfo.ingredients}</p>
            <h3>{selectedSweetInfo.price}</h3>
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

      <SweetsBar
        headerText="Other Sweets"
        anySweetsInfoArray={sweetsInfoArrayDeepCopy}
      />

      <CTA />
    </div>
  );
};
