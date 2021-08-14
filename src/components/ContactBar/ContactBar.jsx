import React from 'react';

import SideElement from '../shared/SideElement';

import styles from './ContactBar.module.scss';

const ContactBar = () => (
  <SideElement side="right">
    <a
      className={styles.link}
      href="mailto:clothiernamedjeremiah@gmail.com"
      target="_blank"
      rel="noreferrer"
    >
      clothiernamedjeremiah@gmail.com
    </a>
  </SideElement>
);

export default ContactBar;
