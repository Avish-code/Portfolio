import React from 'react';

import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Aavish Ved</h1>
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#blog">Blogs</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
