import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import styles from "./SweetBarCard.module.css";

export const SweetBarCard = ({ name, description, image }) => {
  return (
    <Card className={styles["sweet-bar-card"]}>
      <Card.Img
        src={image}
        className="card-img-top mx-auto d-block rounded-circle"
        alt="Card Image"
        style={{ width: "200px", height: "auto" }}
      />
      <Card.Body className="text-center">
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          className="btn btn-primary btn-lg mb-2"
          variant="primary"
          href={`/Menu/${name}`}
        >
          View
        </Button>
      </Card.Body>
    </Card>
  );
};