import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Education from "./components/Education/education";
import Hero from "./components/HeroSection/hero";
import Navbar from "./components/NavBar/navbar";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";
import Work from "./components/Work/work";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Education/>
      <Work/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
