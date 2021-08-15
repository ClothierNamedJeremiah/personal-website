import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import MenuIcon from 'components/shared/MenuIcon';
import NavMenu from 'components/NavMenu';

import styles from './NavBar.module.scss';

export const NAV_LINKS = [
  {
    href: '/',
    displayText: 'home',
  },
  {
    href: '/blog',
    displayText: 'blog',
  },
  {
    href: '/portfolio',
    displayText: 'portfolio',
  },
];

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const wasMenuOpened = isMenuOpen;
    const navContainer = document.querySelector(`.${styles.container}`);

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
      navContainer.addEventListener(
        'transitionend',
        () => {
          style.height = 'auto';
        },
        { once: true },
      );
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
      <div className={styles.container}>
        <nav className={styles.nav}>
          <span className="mi-logo mi-logo-light" />
          {!isMenuOpen && (
            <ul className={`${styles.links} fc-dark-purple`}>
              {NAV_LINKS.map(({ href, displayText }) => (
                <li key={displayText}>
                  <Link href={href}>
                    <a
                      className={
                        router.pathname === href
                          ? `${styles.link} ${styles.active}`
                          : styles.link
                      }
                      href={href}
                    >
                      {displayText}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <MenuIcon isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        </nav>
        {isMenuOpen && (
          <NavMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        )}
      </div>
      {isMenuOpen && <div className={styles.backdrop} />}
    </>
  );
};

export default NavBar;
