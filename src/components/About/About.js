import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import styles from "./About.module.css";
import { SweetsBar } from "../SweetsBar/SweetsBar";
import { sweetsInfoArray } from "../../sweetsInfoArray";
import { CTA } from "../CTA/CTA";

export const About = () => {
  return (
    <div className={styles.about}>
      <Container>
        <Row className="py-4 align-items-center justify-content-center text-center">
          <Col md={8}>
            <h1>Our Story</h1>
            <h5>
              Welcome to Basboosat Leeds, where the flavors of the Middle East
              come to life in the heart of Leeds. Founded by an Egyptian man
              with a passion for authentic desserts, our journey began with a
              simple yet profound love for the rich and diverse culinary
              heritage of the Middle East. Each bite is a celebration of
              culture, heritage, and the joy of sharing sweetness with the
              world. Join us on this delectable journey and indulge your senses
              in the essence of the Middle East, right here in Leeds.
            </h5>
          </Col>
        </Row>

        <Row className="py-4 align-items-center justify-content-start text-left">
          <Col md={6} className="">
            <h2>Our Mission</h2>
            <p>
              Dive into the rich flavors of the Middle East with Basboosat
              Leeds! We're all about sharing the joy of fantastic Middle Eastern
              sweets that blend tradition with a modern twist. Made with love
              and bursting with flavor, our desserts bring a piece of tradition
              to your table. Come join us in this delightful journey of tastes
              and make your moments a little sweeter!
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <Image
              fluid
              src="https://via.placeholder.com/600"
              alt="place holder"
            />
          </Col>
        </Row>

        <Row className="py-4 align-items-center flex-md-row-reverse">
          <Col md={6}>
            <h2>Our Values</h2>
            <p>
              At Basboosat Leeds, we're all about amazing desserts made with
              top-notch ingredients and loads of love. We get a kick out of
              getting creative and making treats that will make your taste buds
              do a happy dance. Plus, we're not just a company; we're a
              community. We love hanging out with our customers and being part
              of local events. So, when you take a bite of our desserts, know
              that it's not just a sweet treat—it's a piece of our passion and a
              sprinkle of our community spirit. Dig in and enjoy the goodness!
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <Image
              fluid
              src="https://via.placeholder.com/600"
              alt="place holder"
            />
          </Col>
        </Row>

        <Row className="py-4 align-items-center justify-content-center text-center">
          <Col md={6}>
            <h2>
              All of our customers love all of our products and rave about how
              fabulous we are to teh mates n that!
            </h2>
          </Col>
        </Row>

        <Row className="py-4 align-items-center justify-content-start text-left">
          <Col md={6} className="">
            <h2>Our Mission</h2>
            <p>
              Dive into the rich flavors of the Middle East with Basboosat
              Leeds! We're all about sharing the joy of fantastic Middle Eastern
              sweets that blend tradition with a modern twist. Made with love
              and bursting with flavor, our desserts bring a piece of tradition
              to your table. Come join us in this delightful journey of tastes
              and make your moments a little sweeter!
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <Image
              fluid
              src="https://via.placeholder.com/600"
              alt="place holder"
            />
          </Col>
        </Row>
      </Container>

      <SweetsBar anySweetsInfoArray={sweetsInfoArray}/>

      <CTA/>
    </div>
  );
};
