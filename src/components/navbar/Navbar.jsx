/* eslint-disable */
import React, { useEffect } from 'react';

import Logo from './Logo';
import MenuIcon from './MenuIcon';

import '../../styles/navbar.less';

const Navbar = () => {
  return (
    <nav className="nav">
      <Logo />
      <ul className="nav-items">
        <li className="nav-item">
          <a href="/" className="nav-link active">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/blog" className="nav-link">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="/bookshelf" className="nav-link">
            Bookshelf
          </a>
        </li>
        <li className="nav-item">
          <a href="/projects" className="nav-link">
            Projects
          </a>
        </li>
      </ul>
      <MenuIcon />
    </nav>
  );
}

export default Navbar;
