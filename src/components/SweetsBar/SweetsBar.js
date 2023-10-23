import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./SweetsBar.module.css";
import { SweetBarCard } from "../SweetBarCard/SweetBarCard";

export const SweetsBar = ({ headerText, anySweetsInfoArray }) => {
  const sweetKeysArray = Object.keys(anySweetsInfoArray);

  return (
    <section className={styles["sweets-bar"]}>
      <Container className="py-4">
        <Row className="d-flex align-items-center justify-content-center text-center">
          <h1>{headerText}</h1>
        </Row>

        <Row className="d-flex align-items-center justify-content-center pt-2">
          {sweetKeysArray.map((sweetKey, index) => {
            return (
              <Col md={4} key={index}>
                <SweetBarCard
                  name={anySweetsInfoArray[sweetKey].name}
                  description={anySweetsInfoArray[sweetKey].description}
                  image={anySweetsInfoArray[sweetKey].imageArray[0]}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
