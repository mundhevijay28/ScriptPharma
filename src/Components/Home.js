import React from "react";
import { scroller } from "react-scroll";
import "./Home.css";

const Home = () => {
  const scrollToServices = () => {
    scroller.scrollTo("services", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="home-content">
      <h1 className="company-name">ScriptPharma</h1>
      <p className="tagline">
        ScriptPharma offers a range of academic writing services, including
        pharmacy project writing, thesis drafting, and more.
      </p>
      <button className="discover-button" onClick={scrollToServices}>
        Discover Our Services
      </button>
    </div>
  );
};

export default Home;
