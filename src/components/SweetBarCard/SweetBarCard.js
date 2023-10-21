import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import styles from "./SweetBarCard.module.css";




export const SweetBarCard = ({name, description, image}) => {
    return (
        <div className={styles['sweet-bar-card']}>
            <Card>
              <Card.Img
                variant="top"
                src={image}
                alt="Card Image"
              />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button
                  className="btn btn-primary btn-lg mb-2"
                  variant="primary"
                  href={`/Menu/${name}`}
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
        </div>
    )}