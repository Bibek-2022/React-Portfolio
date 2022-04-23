import React from "react";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row mt-5 py-3">
          <div className="col-md-6 order-md-2 text-center">
            <img
              src={require("../assets/bibek.jpg")}
              alt="computer"
              width="80%"
              className="ml-auto"
            />
          </div>
          <div className="col-md-6 pt-5">
            <h4>Hi I am Bibek Shrestha 😎</h4>
            <h1>Software Developer</h1>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              inventore laborum ab labore. Necessitatibus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
