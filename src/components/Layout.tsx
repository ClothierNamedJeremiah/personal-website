/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Router from 'next/router';
// import anime from 'animejs';

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

const Layout = ({ children }: Props) => {
  useEffect(() => {
    // const timeline = anime.timeline({});
    // timeline.add({
    //   targets: `.${styles.wrapper}`,
    //   opacity: 1,
    //   translateY: -150,
    //   easing: 'cubicBezier(.5, .05, .1, .3)',
    //   delay: 1800,
    //   duration: 900,
    // });
    // FIXME: this is broken
    // timeline.add({
    //   targets: `.${sideElementStyles.animated}`,
    //   opacity: 0.8,
    //   delay: 800,
    //   duration: 800,
    //   easing: 'easeInOutQuad',
    // });
  }, []);

  // TODO: accomplish the same positioning with `display: grid`
  return (
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
};

export default Layout;
