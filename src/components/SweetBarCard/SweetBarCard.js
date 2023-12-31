import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import styles from "./SweetBarCard.module.css";
import { Link } from "react-router-dom";

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

        <Link to={`/Menu/${name}`}>
          <Button
            className={`btn btn-primary btn-lg ${styles.buttons}`}
            variant="primary"
          >
            View
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
