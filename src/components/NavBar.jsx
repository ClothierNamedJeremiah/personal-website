import React, { useState } from 'react';
import Link from 'next/link';

import MenuIcon from './shared/MenuIcon';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <span className="mi-logo mi-logo-light" />
      <ul className="nav-items fc-dark-purple">
        <li className="nav-item">
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav-link">
              Home
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/blog">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav-link">
              Blog
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/bookshelf">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav-link">
              Bookshelf
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/portfolio">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav-link">
              Portfolio
            </a>
          </Link>
        </li>
      </ul>
      <MenuIcon isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
};

export default NavBar;