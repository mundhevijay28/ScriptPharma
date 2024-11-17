import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';
import logo from "./logo.png";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="Logo">
        <img src={logo} alt="logo" style={{ width: '220px', height: 'auto' }} />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navbar Links */}
      <ul className={`Nav-links ${isMobile ? 'nav-links-mobile active' : ''}`}>
        <li>
          <Link 
            to="home" 
            smooth={true} 
            duration={500}
            onClick={() => setIsMobile(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="services" 
            smooth={true} 
            duration={500}
            onClick={() => setIsMobile(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link 
            to="about" 
            smooth={true} 
            duration={500}
            onClick={() => setIsMobile(false)}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500}
            onClick={() => setIsMobile(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
