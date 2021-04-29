import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import MenuIcon from './shared/MenuIcon';
import NavMenu from './NavMenu';

const NAV_LINKS = {
  home: '/',
  blog: '/blog',
  bookshelf: '/bookshelf',
  portfolio: '/portfolio',
};

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const wasMenuOpened = isMenuOpen;
    const navContainer = document.querySelector('.nav-container');

    const { scrollHeight, style } = navContainer;

    /**
     * If the menu was opened, set the container height to be scrollHeight. Afterwards,
     * set the height to auto (in case the window is resized).
     *
     * If the menu was closed:
     * 1) turn the height transition off
     * 2) Change the container height from 'auto' -> scrollHeight
     * 3) Change the container height from scrollHeight -> nav.clientHeight
     */
    if (wasMenuOpened) {
      style.height = `${scrollHeight}px`;
      navContainer.addEventListener('transitionend', () => {
        style.height = 'auto';
      }, { once: true });
    } else {
      const temp = style.transition;
      style.transition = '';

      requestAnimationFrame(() => {
        style.height = `${scrollHeight}px`;
        style.transition = temp;

        // As soon as the previous style changes have taken effect, have the element transition
        // to height: 0, so we are not transitioning out of height: 'auto'
        requestAnimationFrame(() => {
          style.height = null;
        });
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className="nav-container">
        <nav className="nav">
          <span className="mi-logo mi-logo-light" />
          <ul className="nav-items fc-dark-purple">
            {Object.keys(NAV_LINKS).map((key) => (
              <li key={key} className="nav-item">
                <Link href={NAV_LINKS[key]}>
                  <a
                    className={router.pathname === NAV_LINKS[key] ? 'nav-link active' : 'nav-link'}
                    role="navigation"
                    href={NAV_LINKS[key]}
                  >
                    {key}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <MenuIcon isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        </nav>
        <NavMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </div>
      {isMenuOpen && (
        <div className="backdrop" />
      )}
    </>
  );
};

export default NavBar;
