import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './NavMenu.module.css';

const NAV_LINKS = {
  home: '/',
  blog: '/blog',
  portfolio: '/portfolio',
} as const;

type Props = {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavMenu(props: Props) {
  const { setMenuOpen } = props;
  const router = useRouter();

  const linkKeys = Object.keys(NAV_LINKS) as Array<keyof typeof NAV_LINKS>;

  return (
    <div className={styles.container} data-testid="navmenu">
      <div className={styles.separator} />
      <ul className={`${styles.links} fc-dark-purple`}>
        {linkKeys.map((key) => (
          <li key={key} className={`${styles['link-wrapper']}`}>
            <Link
              href={NAV_LINKS[key]}
              className={
                router.pathname === NAV_LINKS[key]
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
              onClick={() => setMenuOpen(false)}
            >
              {key}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavMenu;
