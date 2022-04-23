import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MainLayout } from "../layout/MainLayout";
export const Hero = () => {
  return (
    <div className="hero main-page" id="top-nav">
      <Container>
        <Row className="row mt-5 py-3">
          <Col md="6" className="order-md-2 text-center">
            <img
              src={require("../assets/image1.png")}
              alt="computer"
              width="80%"
              className="ml-auto"
            />
          </Col>
          <Col md="6" className="pt-5">
            <h4>Hi I am Bibek Shrestha 😎</h4>
            <h1>Software Developer</h1>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              inventore laborum ab labore. Necessitatibus?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
