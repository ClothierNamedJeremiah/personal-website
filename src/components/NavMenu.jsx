import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const NAV_LINKS = {
  home: '/',
  blog: '/blog',
  bookshelf: '/bookshelf',
  portfolio: '/portfolio',
};

function NavMenu(props) {
  const { setMenuOpen } = props;
  const router = useRouter();

  return (
    <div className="nav-menu">
      <div className="nav-menu-line" />
      <ul className="nav-menu-items fc-dark-purple">
        {Object.keys(NAV_LINKS).map((key) => (
          <li key={key} className="nav-menu-item">
            <Link href={NAV_LINKS[key]}>
              <a
                className={router.pathname === NAV_LINKS[key] ? 'nav-menu-link active' : 'nav-menu-link'}
                onClick={() => setMenuOpen(false)}
                role="navigation"
                href={NAV_LINKS[key]}
              >
                {key}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

NavMenu.propTypes = {
  setMenuOpen: PropTypes.func.isRequired,
};

export default NavMenu;
