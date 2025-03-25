import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>< Link to="/">Aavish Ved</Link></h1>
      <ul>
        <li><Link to="/aboutme"> About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
