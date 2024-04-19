import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import styles from './NavMenu.module.css';

const NAV_LINKS = {
  home: '/',
  blog: '/blog',
  portfolio: '/portfolio',
} as const;

type Props = {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

function NavMenu(props: Props) {
  const { setMenuOpen, open } = props;
  const router = useRouter();

  const linkKeys = Object.keys(NAV_LINKS) as Array<keyof typeof NAV_LINKS>;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="min-[481px]:hidden flex-shrink-0 basis-full overflow-y-hidden transition-all"
      data-testid="navmenu"
      ref={ref}
      style={open ? { height: ref.current?.scrollHeight } : { height: '0px' }}
    >
      <ul className={`${styles.links} fc-dark-purple`}>
        {linkKeys.map((key) => (
          <li key={key} className={`${styles['link-wrapper']}`}>
            <Link
              href={NAV_LINKS[key]}
              className={
                router.pathname === NAV_LINKS[key] ? `${styles.link} ${styles.active}` : styles.link
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
