import "./App.css";
import { About } from "./component/about/About";
import { Contact } from "./component/contact/Contact";
import { Footer } from "./component/footer/Footer";
import { Hero } from "./component/Hero";
import { Project } from "./component/project/Project";
import { Skills } from "./component/skills/Skills";
import { TopNav } from "./component/TopNav";

function App() {
  return (
    <div>
      <div className="wrapper">
        {/* <!-- ========= navbar=========== --> */}
        <div className="top-nave" id="top-nav">
          <TopNav />
          {/* <!-- ============hero=========== --> */}
          <Hero />
        </div>
        {/* <!-- ============skill section======== --> */}
        <Skills />
        {/* <!-- ============Projects======== --> */}
        <Project />
        {/* <!-- ============about me======== --> */}
        <About />

        {/* <!-- ============contact======== --> */}

        <Contact />
        {/* <!-- ============Footer======== --> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
