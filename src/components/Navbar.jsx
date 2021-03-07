import React, { useEffect } from 'react';

import Logo from './Logo';
import '../styles/navbar.less';

const Navbar = () => {
  return (
    <nav className="nav">
      <Logo />
    </nav>
  );
}

export default Navbar;
