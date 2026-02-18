import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      {/* Left Section */}
      <div className="footer-left">
        <p>📞 <a href="tel:+918948856498">8948856498</a></p>
        <p>📧 <a href="mailto:tanishajaiswal757@gmail.com">tanishajaiswal757@gmail.com</a></p>
      </div>

      {/* Center Section */}
      <div className="footer-center">
        <p>&copy; 2025 Tanisha Jaiswal. All rights reserved.</p>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <a href="https://www.linkedin.com/in/tanishaa7" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a href="https://github.com/tanishajaiswal7" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} /> GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;
