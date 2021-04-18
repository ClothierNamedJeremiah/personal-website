import React from 'react';

import SideElement from './shared/SideElement';

const Contactbar = () => (
  <SideElement side="right">
    <a
      className="contact-bar"
      href="mailto:clothiernamedjeremiah@gmail.com"
      target="_blank"
      rel="noreferrer"
    >
      clothiernamedjeremiah@gmail.com
    </a>
  </SideElement>
);

export default Contactbar;
