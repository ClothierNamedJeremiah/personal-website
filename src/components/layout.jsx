import React, { useEffect } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import anime from 'animejs';

import ContactBar from 'components/ContactBar';
import SocialBar from 'components/SocialBar';
import NavBar from 'components/NavBar';

import styles from 'scss/modules/SideElement.module.scss';

Router.events.on('routeChangeComplete', (url) => {
  window.analytics.page(url);
});

// eslint-disable-next-line no-unused-vars
const Layout = ({ children }) => {
  useEffect(() => {
    const timeline = anime.timeline({});

    timeline.add({
      targets: '.layout-wrapper',
      opacity: 1,
      translateY: -150,
      easing: 'cubicBezier(.5, .05, .1, .3)',
      delay: 1800,
      duration: 900,
    });

    timeline.add({
      targets: `.${styles.container}.${styles.animated}`,
      opacity: 0.8,
      delay: 800,
      duration: 800,
      easing: 'easeInOutQuad',
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="layout-wrapper">{children}</div>
      <SocialBar />
      <ContactBar />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
