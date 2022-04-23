import "./App.css";
import { About } from "./component/about/About";
import { Contact } from "./component/contact/Contact";
import { Footer } from "./component/footer/Footer";
import { Hero } from "./component/Hero";
import { Project } from "./component/project/Project";
import { Skills } from "./component/skills/Skills";
import { TopNav } from "./component/TopNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./layout/HomePage";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          {/* <div className="top-nave" id="top-nav"> */}
          {/* <TopNav />
            <Hero /> */}
          {/* </div> */}

          {/* <Skills /> */}
          {/* <Project />
          <About />
          <Contact />
          <Footer /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
