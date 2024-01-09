import NavBar from "./components/navBar/NavBar";
import About from "./components/about/About";
import Tech from "./components/tech/Tech";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Tech/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
