import React, { useState } from 'react';
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
          <a href="/company" className="nav-item">
             Who We Are
            </a>
          </li>
          <li>
          <a href="/events-collaboration" className="nav-item">
              Events
            </a>
          </li>
          <li>
            <a href="/publications" className="nav-item">
              Publications
            </a>
          </li>
          <li>
            <a href="/initiatives" className="nav-item">
              Initiatives
            </a>
          </li>
          <li>
          <a href="/contact" className="nav-item">
             Work With Us
            </a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Navbar;