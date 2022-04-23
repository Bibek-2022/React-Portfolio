import React from "react";
import coffee from "../../assets/coffee5.jpg";
import { Container, Row, Col } from "react-bootstrap";
export const Project = () => {
  return (
    <section className="project py-5" id="projects">
      <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
        Project
      </div>
      <div className="proj-content">
        <Container className="mt-5">
          <Row className="row">
            <Col md="6">
              <img
                src={coffee}
                alt=""
                width="80%"
                className="img-fluid rounded-2"
              />
            </Col>
            <Col md="6" className="mt-5 mt-md-0">
              <h2>My Portfolio</h2>
              <div className="links fs-3">
                <a href="github">
                  <i className="fab fa-github"></i>
                </a>
                <a href="linked">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="linked">
                  <i className="fab fa-chrome"></i>
                </a>
              </div>
              <div className="mt-3">
                <h6>Tech: HTML CSS JS</h6>
              </div>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam repudiandae libero soluta fugit, ut culpa.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam repudiandae libero soluta fugit, ut culpa.
              </p>
            </Col>
          </Row>
          <Row className="row mt-5 py-5">
            <Col md="6" className="order-md-2">
              <img
                src={coffee}
                alt=""
                width="80%"
                className="img-fluid rounded-2"
              />
            </Col>
            <Col md="6" className="mt-5 mt-md-0">
              <h2>My Portfolio</h2>
              <div className="links fs-3">
                <a href="github">
                  <i className="fab fa-github"></i>
                </a>
                <a href="linked">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="linked">
                  <i className="fab fa-chrome"></i>
                </a>
              </div>
              <div className="mt-3">
                <h6>Tech: HTML CSS JS</h6>
              </div>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam repudiandae libero soluta fugit, ut culpa.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam repudiandae libero soluta fugit, ut culpa.
              </p>
            </Col>
          </Row>
          <Row className="mt-5 py-5">
            <Col md="6">
              <img
                src={coffee}
                alt=""
                width="80%"
                className="img-fluid rounded-2"
              />
            </Col>
            <Col className="mt-5 mt-md-0">
              <h2>My Portfolio</h2>
              <div className="links fs-3 ">
                <a href="github">
                  <i className="fab fa-github"></i>
                </a>
                <a href="linked">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="linked">
                  <i className="fab fa-chrome"></i>
                </a>
              </div>
              <div className="mt-3">
                <h6>Tech: HTML CSS JS</h6>
              </div>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam repudiandae libero soluta fugit, ut culpa.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam repudiandae libero soluta fugit, ut culpa.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
