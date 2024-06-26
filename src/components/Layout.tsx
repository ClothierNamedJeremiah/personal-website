import * as React from 'react';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

import ContactBar from 'components/footer/ContactBar';
import SocialLinksFooter from 'components/footer/SocialLinksFooter';
import NavBar from 'components/nav/NavBar';
import SkipLink from 'components/SkipLink';

const Layout = ({ children }: React.PropsWithChildren) => (
  <div className="grid h-full grid-rows-[var(--height-nav),_1fr]">
    <SkipLink />
    <NavBar />
    <main id="main-content" className="flex h-full justify-center">
      <div className="m-4 max-w-[1240px]">{children}</div>
    </main>
    <SocialLinksFooter />
    <ContactBar />
    <GoogleAnalytics gaId="G-WSMZE1XVKY" />
    <GoogleTagManager gtmId="GTM-NMFT8F6J" />
  </div>
);

export default Layout;
