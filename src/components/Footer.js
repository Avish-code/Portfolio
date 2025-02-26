import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Aavish Ved. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/Avish-code" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/avish-ved-26a51818b/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:avishved82@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
