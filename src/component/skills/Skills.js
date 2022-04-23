import React from "react";

export const Skills = () => {
  return (
    <section className="skills container mt-5 yp-5 text-center" id="skills">
      <div className="sec-title fs-1 fw-bolder text-center m-auto">Skills</div>
      <div className="sec-content fs-1 mt-5 d-flex justify-content-between flex-wrap mb-5">
        <span className="d-flex flex-column text-danger">
          <i className="fab fa-html5"></i>Html
        </span>
        <span className="d-flex flex-column text-primary">
          <i className="fab fa-css3-alt"></i>CSS
        </span>
        <span className="d-flex flex-column text-warning">
          <i className="fab fa-js"></i>JS
        </span>
      </div>
    </section>
  );
};
