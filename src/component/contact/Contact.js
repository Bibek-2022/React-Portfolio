import React from "react";
import { Container } from "react-bootstrap";
import { MainLayout } from "../../layout/MainLayout";

export const Contact = () => {
  return (
    <MainLayout>
      <section className="cc  mt-4" id="contact">
        <Container className="contact-icon rounded py-5">
          <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
            Contact&nbsp;Me
          </div>

          <div className="icons mt-4">
            <a href="" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
};
