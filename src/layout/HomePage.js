import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "../component/footer/Footer";
import { Hero } from "../component/Hero";
import { TopNav } from "../component/TopNav";

export const HomePage = () => {
  return (
    <div className="hero top-nave" id="top-nav">
      <TopNav />
      <Hero />
      <Footer />
    </div>
  );
};
