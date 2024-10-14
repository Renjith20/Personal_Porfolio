import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Aboutme from "./components/about/Aboutme";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Skills from "./components/skills/Skills";
const App = () => {
  return (
  <div>
    <Cursor />
    <section id="Home">
      <Navbar />
      <Hero />
    </section>
     {/* <section id="Services">
      <Parallax type="services"/>
    </section> */}
    <section id="About Me">
      <Aboutme />
    </section>
    {/* <section id="Skills">
      <Skills />
    </section> */}
      <Projects/>
    <section id="Contact">
      <Contact />
    </section> 
  </div>
)};

export default App;
