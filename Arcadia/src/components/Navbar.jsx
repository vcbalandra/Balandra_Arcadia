import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Wrapper>
      <nav className="navbar">
        <a href="/" className="logoLink">
          <div className="logo">
            <Logo />
          </div>
        </a>

        <div className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile' : ''}`}>
  <li>
    <Link to="/company" className="nav-item">Who We Are</Link>
  </li>
  <li>
    <Link to="/events-collaboration" className="nav-item">Events</Link>
  </li>
  <li>
    <Link to="/publications" className="nav-item">Publications</Link>
  </li>
  <li>
    <Link to="/initiatives" className="nav-item">Initiatives</Link>
  </li>
  <li>
    <Link to="/contact" className="nav-item">Work With Us</Link>
  </li>
</ul>
      </nav>
    </Wrapper>
  );
};

export default Navbar;