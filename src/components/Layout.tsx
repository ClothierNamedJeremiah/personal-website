import * as React from 'react';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

import ContactBar from 'components/footer/ContactBar';
import SocialLinksFooter from 'components/footer/SocialLinksFooter';
import NavBar from 'components/nav/NavBar';
import SkipLink from 'components/SkipLink';

import styles from './Layout.module.css';

type Props = {
  children: React.ReactNode;
};

// FIXME: can be accomplished with grid layout
const Layout = ({ children }: Props) => (
  <div className={styles.container}>
    <SkipLink />
    <NavBar />
    <main id="main-content" className="scroll-m-20">
      <div className="mx-auto max-w-[1240px]">{children}</div>
    </main>
    <SocialLinksFooter />
    <ContactBar />
    <GoogleAnalytics gaId="G-WSMZE1XVKY" />
    <GoogleTagManager gtmId="GTM-NMFT8F6J" />
  </div>
);

export default Layout;
