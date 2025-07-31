import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Welcome</Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
