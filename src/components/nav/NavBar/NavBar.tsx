import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import anime from 'animejs';

import MenuIcon from 'components/nav/NavMenu/MenuIcon';
import NavMenu from 'components/nav/NavMenu';

import styles from './NavBar.module.css';

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

  const animate = () => {
    // const loader = anime.timeline({});
    // loader.add({
    //   targets: `.${styles.container}.${styles.animated}`,
    //   translateY: 80,
    //   delay: 100,
    //   duration: 400,
    //   easing: 'easeInOutQuad',
    // });
    // loader.add({
    //   targets: [`.${styles.logo}`, `.${styles.links} > li`],
    //   translateY: 80,
    //   delay: anime.stagger(100, { start: 300 }),
    // });
  };

  useEffect(() => {
    const wasMenuOpened = isMenuOpen;
    const navContainer = document.querySelector(`.${styles.container}`);
    if (!navContainer) {
      return;
    }

    // @ts-expect-error FIXME
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

  useEffect(() => {
    animate();
  }, []);

  return (
    <>
      <div className={`${styles.container} ${styles.animated}`}>
        <nav className="flex h-full flex-wrap items-center justify-between px-4 py-2">
          <span
            className={`${styles.logo} ${styles.logoLight} ${styles.animated}`}
          />
          {!isMenuOpen && (
            <ul className={`${styles.links} fc-dark-purple`}>
              {NAV_LINKS.map(({ href, displayText }) => (
                <li key={displayText}>
                  <Link
                    href={href}
                    className={
                      router.pathname === href
                        ? `${styles.link} ${styles.animated} ${styles.active}`
                        : `${styles.link} ${styles.animated}`
                    }
                  >
                    {displayText}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <MenuIcon isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
          {isMenuOpen && <NavMenu setMenuOpen={setMenuOpen} />}
        </nav>
      </div>
      {isMenuOpen && <div className={styles.backdrop} />}
    </>
  );
};

export default NavBar;
