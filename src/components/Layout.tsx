import * as React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

import ContactBar from 'components/footer/ContactBar';
import SocialLinksFooter from 'components/footer/SocialLinksFooter';
import NavBar from 'components/nav/NavBar';
import SkipLink from 'components/SkipLink';

const Layout = ({ children }: React.PropsWithChildren) => (
  <div className="grid grid-rows-[var(--height-nav),_1fr] h-full">
    <SkipLink />
    <NavBar />
    <main id="main-content" className="flex h-full justify-center">
      <div className="m-4 max-w-[1240px]">{children}</div>
    </main>
    <SocialLinksFooter />
    <ContactBar />
    <GoogleAnalytics gaId="G-WSMZE1XVKY" />
  </div>
);

export default Layout;
