import React from 'react';

import Contactbar from './Contactbar';
import Socialbar from './Socialbar';

function Footer() {
  return (
    <footer className="footer">
      <Socialbar />
      <Contactbar />
    </footer>
  );
}

export default Footer;
