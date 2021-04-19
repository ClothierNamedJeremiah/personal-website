import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

function NavMenu(props) {
  const { setMenuOpen } = props;

  const links = {
    home: '/',
    blog: '/blog',
    bookshelf: '/bookshelf',
    portfolio: '/portfolio',
  };

  return (
    <div className="nav-menu">
      <div className="nav-menu-line" />
      <ul className="nav-menu-items fc-dark-purple">
        {Object.keys(links).map((key) => (
          <li key={key} className="nav-menu-item">
            <Link href={links[key]}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="nav-menu-link" onClick={() => setMenuOpen(false)}>
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
