import React, { useState } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <h2 className="name">Tanisha Jaiswal</h2>
      </div>

      {/* Nav Items */}
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About Me</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#services" onClick={closeMenu}>Skills</a></li>
        <li><a href="#resume" onClick={closeMenu}>Resume</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      {/* Hamburger Menu */}
      <div className='hamburger' onClick={toggleMenu}>
        <FaBars />
      </div>
    </div>
  );
};

export default Navbar;
