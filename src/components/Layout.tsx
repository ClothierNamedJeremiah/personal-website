import React from 'react';
import Router from 'next/router';

import ContactBar from 'components/footer/ContactBar';
import SocialLinksFooter from 'components/footer/SocialLinksFooter';
import NavBar from 'components/nav/NavBar';
import SkipLink from 'components/SkipLink';

import styles from './Layout.module.css';

Router.events.on('routeChangeComplete', (url) => {
  window.analytics.page(url);
});

type Props = {
  children: React.ReactNode;
};

// FIXME: can be accomplished with grid layout
const Layout = ({ children }: Props) => (
  <div className={styles.container}>
    <SkipLink />
    <NavBar />
    <main id="main-content" className="scroll-m-20 overflow-auto">
      <div className="mx-auto max-w-[1240px]">{children}</div>
    </main>
    <SocialLinksFooter />
    <ContactBar />
  </div>
);

export default Layout;
