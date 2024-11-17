import React from "react";
import { Element } from "react-scroll";
import "./App.css";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import Services from "./Components/services";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <Element name="home" className="section">
        <Home />
      </Element>

      {/* Services Section */}
      <Element name="services" className="section">
        <Services />
      </Element>

      {/* About Section */}
      <Element name="about" className="section">
        <About />
      </Element>

      {/* Footer/Contact Section */}
      <Element name="contact" className="section">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
