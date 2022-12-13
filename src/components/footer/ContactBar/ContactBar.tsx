import React from 'react';
import clsx from 'clsx';

import SideFooter from 'components/footer/SideFooter';

const ContactBar = () => (
  <SideFooter id="contact-bar" side="right">
    <a
      className={clsx(
        'tracking-widest',
        'focus-indicator p-0.5 transition-transform duration-300 ',
        'hover:-translate-y-1 hover:text-yellow-500',
        'focus-visible:text-yellow-500',
      )}
      href="mailto:clothiernamedjeremiah@gmail.com"
      target="_blank"
      rel="noreferrer"
    >
      clothiernamedjeremiah@gmail.com
    </a>
  </SideFooter>
);

export default ContactBar;
