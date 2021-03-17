import React from 'react';

import Contactbar from './Contactbar';
import Socialbar from './Socialbar';

import '../../styles/footer.less';

function Footer() {
  return (
    <footer className="footer">
      <Socialbar />
      <Contactbar />
    </footer>
  );
}

export default Footer;
