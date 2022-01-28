import React, { useEffect } from 'react';
import Router from 'next/router';
import anime from 'animejs';

import ContactBar from 'components/ContactBar';
import SocialBar from 'components/SocialBar';
import NavBar from 'components/NavBar';

// eslint-disable-next-line import/no-named-default
import { default as sideElementStyles } from 'components/shared/SideElement.module.css';
import styles from './Layout.module.css';

Router.events.on('routeChangeComplete', (url) => {
  window.analytics.page(url);
});

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  useEffect(() => {
    const timeline = anime.timeline({});

    timeline.add({
      targets: `.${styles.wrapper}`,
      opacity: 1,
      translateY: -150,
      easing: 'cubicBezier(.5, .05, .1, .3)',
      delay: 1800,
      duration: 900,
    });

    timeline.add({
      targets: `.${sideElementStyles.container}.${sideElementStyles.animated}`,
      opacity: 0.8,
      delay: 800,
      duration: 800,
      easing: 'easeInOutQuad',
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.wrapper}>{children}</div>
      <SocialBar />
      <ContactBar />
    </>
  );
};

export default Layout;
