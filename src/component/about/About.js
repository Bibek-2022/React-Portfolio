import React from "react";
import { MainLayout } from "../../layout/MainLayout";

export const About = () => {
  return (
    <MainLayout>
      <section className="container" id="about">
        <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
          About&nbsp;Me
        </div>
        <div className="about-content">
          <div className="row mt-5">
            <div className="col-md-4 text-center mb-3">
              <img
                src="../../assets/coffee5.jpg"
                alt=""
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-md-7">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                consequatur, placeat magni enim, debitis voluptate et velit,
                vitae accusantium quo error deserunt molestiae inventore
                eveniet?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                ipsum veniam dolore voluptatem modi expedita vitae dolores
                sapiente! Adipisci rem facilis quidem incidunt ipsa commodi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
