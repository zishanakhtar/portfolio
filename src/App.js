import About from "./components/About/about";
import Education from "./components/Education/education";
import Hero from "./components/HeroSection/hero";
import Navbar from "./components/NavBar/navbar";
import Projects from "./components/Projects/projects";
import Work from "./components/Work/work";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Work/>
      <Projects/>
    </div>
  );
}

export default App;
