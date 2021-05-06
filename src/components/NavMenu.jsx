import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import styles from '../scss/modules/NavMenu.module.scss';

const NAV_LINKS = {
  home: '/',
  blog: '/blog',
  // bookshelf: '/bookshelf',
  portfolio: '/portfolio',
};

function NavMenu(props) {
  const { setMenuOpen } = props;
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.separator} />
      <ul className={`${styles.links} fc-dark-purple`}>
        {Object.keys(NAV_LINKS).map((key) => (
          <li key={key} className={`${styles['link-wrapper']}`}>
            <Link href={NAV_LINKS[key]}>
              <a
                className={
                  router.pathname === NAV_LINKS[key]
                    ? `${styles.link} ${styles.active}`
                    : styles.link
                }
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
