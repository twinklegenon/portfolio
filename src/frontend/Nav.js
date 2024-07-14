import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = ({ onScroll }) => {
  return (
    <div className="navigation-buttons">
      <NavLink to="/" onClick={() => onScroll('about')}>About Me</NavLink>
      <NavLink to="/" onClick={() => onScroll('resume')}>Resume</NavLink>
      <NavLink to="/" onClick={() => onScroll('projects')}>Projects</NavLink>
      <NavLink to="/" onClick={() => onScroll('contact')}>Contact</NavLink>
    </div>
  );
}

export default Nav;
