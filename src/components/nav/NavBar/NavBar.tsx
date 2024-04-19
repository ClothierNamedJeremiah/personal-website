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
      {isMenuOpen && (<div className="inset-0 fixed bg-black bg-opacity-90 z-10" />)}
      <nav className="flex flex-wrap items-center bg-[var(--frost-white)] px-4 py-2 z-10 relative" aria-label="Main">
        <span className={`${styles.logo} ${styles.logoLight} flex-1`} />
        <div className="flex-1 max-[480px]:hidden">
          <ul className="fc-dark-purple justify-end flex list-none gap-2 text-xl tracking-wide">
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
        
        <div className="min-[481px]:hidden flex-1 flex justify-end ml-auto">
          <MenuIcon isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        </div>
        <NavMenu setMenuOpen={setMenuOpen} open={isMenuOpen} />
      </nav>
    </div>
  );
};

export default NavBar;
