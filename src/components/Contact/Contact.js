import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import styles from "./Contact.module.css";
import contactUsImage from "../../Media/contact-us-image.jpg";
import { AiOutlinePhone } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <Container fluid className="p-0 m-0">
        <Image fluid src={contactUsImage} alt="contact us image" />
      </Container>

      <Container fluid className="text-center">
        <Row>
          <Col md={6} className={`py-5 ${styles["phone-col"]}`}>
            <h3>Preferred Method</h3>
            <h4 >
              +447803555789
            </h4>
          </Col>
          <Col md={6} className={`py-5 ${styles["email-col"]}`}>
            <h3>Alternatively</h3>
            <h4>
              kawooky@gmail.com
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
