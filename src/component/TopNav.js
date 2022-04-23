import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import BibekShrestha from "../assets/BibekShrestha.png";

export const TopNav = () => {
  return (
    // <div>
    //   <nav className="navbar navbar-expand-lg navbar-light">
    //     <div className="container">
    //       <a className="navbar-brand" href="#">
    //         <img src="./assets/Bibek Shrestha.png" alt="" width="100px" />
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav ms-auto">
    //           <li className="nav-item">
    //             <a
    //               className="nav-link active"
    //               aria-current="page"
    //               href="#skills"
    //             >
    //               Skills
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#projects">
    //               Project
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#about">
    //               About Me
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#contact" tabindex="-1">
    //               Contact
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={BibekShrestha} alt="" width="100px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Project</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
