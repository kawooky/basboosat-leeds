import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Collapse,
  Card,
  Accordion,
} from "react-bootstrap";
import styles from "./FAQ.module.css";
import { FAQarray } from "./FAQarray";
import { CTA } from "../CTA/CTA";

export const FAQ = () => {
  return (
    <div>
        <Container>
            <Row className="py-4">
            <h1>Frequently Asked Questions</h1>
            </Row>
        <Accordion className='pb-4' defaultActiveKey="0">
            {FAQarray.map((faq, index) => {
            return (<Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>
                {faq.answer}
            </Accordion.Body>
            </Accordion.Item>)
            })}

        </Accordion>
        </Container>

        <CTA/>

    </div>


  );
};

