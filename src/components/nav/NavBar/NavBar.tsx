import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

  return (
    <div>
      {isMenuOpen && <div className="fixed inset-0 z-10 bg-black/50" />}
      <nav
        className="relative z-10 flex flex-wrap items-center bg-[var(--frost-white)] px-4 py-2"
        aria-label="Main"
      >
        <span className={`${styles.logo} ${styles.logoLight} flex-1`} />
        <div className="flex-1 max-[480px]:hidden">
          <ul className="fc-dark-purple flex list-none justify-end gap-2 text-xl tracking-wide">
            {NAV_LINKS.map(({ href, displayText }) => (
              <li key={displayText}>
                <Link
                  href={href}
                  className={
                    router.pathname === href ? `${styles.link} ${styles.active}` : `${styles.link}`
                  }
                  aria-current={router.pathname === href ? 'page' : undefined}
                >
                  {displayText}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ml-auto flex flex-1 justify-end min-[481px]:hidden">
          <MenuIcon isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        </div>
        <NavMenu setMenuOpen={setMenuOpen} open={isMenuOpen} />
      </nav>
    </div>
  );
};

export default NavBar;
