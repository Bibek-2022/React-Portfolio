import "./App.css";

function App() {
  return (
    <div>
      <div className="wrapper">
        {/* <!-- ========= navbar=========== --> */}
        <div className="top-nave" id="top-nav">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src="./assets/Bibek Shrestha.png" alt="" width="100px" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#skills"
                    >
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">
                      Project
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact" tabindex="-1">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <!-- ============hero=========== --> */}
          <div className="hero">
            <div className="container">
              <div className="row mt-5 py-3">
                <div className="col-md-6 order-md-2 text-center">
                  <img
                    src={require("./assets/bibek.jpg")}
                    alt="computer"
                    width="80%"
                    className="ml-auto"
                  />
                </div>
                <div className="col-md-6 pt-5">
                  <h4>Hi I am Bibek Shrestha 😎</h4>
                  <h1>Software Developer</h1>
                  <p className="pt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo inventore laborum ab labore. Necessitatibus?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============skill section======== --> */}

        <section className="skills container mt-5 yp-5 text-center" id="skills">
          <div className="sec-title fs-1 fw-bolder text-center m-auto">
            Skills
          </div>
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
        {/* <!-- ============Projects======== --> */}
        <section className="project py-5" id="projects">
          <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
            Project
          </div>
          <div className="proj-content">
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={require("./assets/coffee5.jpg")}
                    alt=""
                    width="80%"
                    className="img-fluid rounded-2"
                  />
                </div>
                <div className="col-md-6  mt-5 mt-md-0">
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
                </div>
              </div>
              <div className="row mt-5 py-5">
                <div className="col-md-6 order-md-2">
                  <img
                    src="./assets/coffee5.jpg"
                    alt=""
                    width="80%"
                    className="img-fluid rounded-2"
                  />
                </div>
                <div className="col-md-6  mt-5 mt-md-0">
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
                </div>
              </div>
              <div className="row mt-5 py-5">
                <div className="col-md-6">
                  <img
                    src={require("./assets/coffee5.jpg")}
                    alt=""
                    width="80%"
                    className="img-fluid rounded-2"
                  />
                </div>
                <div className="col-md-6  mt-5 mt-md-0">
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
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ============about me======== --> */}
        <section className="container" id="about">
          <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
            About&nbsp;Me
          </div>
          <div className="about-content">
            <div className="row mt-5">
              <div className="col-md-4 text-center mb-3">
                <img
                  src="./assets/coffee5.jpg"
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

        {/* <!-- ============contact======== --> */}

        <section className="cc  mt-4" id="contact">
          <div className="contact-icon rounded py-5 container">
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
          </div>
        </section>
        {/* <!-- ============Footer======== --> */}
        <footer className=" text-center py-5 mt-5 bg-dark text-light">
          Made by Bibek Shrestha 😎 and ofCourse it &copy; copyright protected
          <div className="up">
            <a href="#top-nav">
              <i className="fas fa-arrow-up"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
