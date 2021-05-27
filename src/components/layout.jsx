import React from 'react';
import Head from 'next/head';

import ContactBar from './ContactBar';
import SocialBar from './SocialBar';
import NavBar from './NavBar';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Jeremiah Clothier</title>

      {/* metadata */}
      <meta charSet="utf-8" />
      <meta name="description" content="Jeremiah Clothier's personal website and porfolio" />
      <meta name="theme-color" content="#F9DC78" />
      <meta name="keywords" content="Jeremiah Clothier, Software Engineer, Software, Developer, Personal Website" />
      <meta name="author" content="Jeremiah Clothier" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Jeremiah Clothier" />
      <meta property="og:description" content="Jeremiah Clothier's personal website and porfolio" />
      <meta property="og:site_name" content="Personal Website" />

      {/* icons */}
      <link rel="icon" href="/favicon-32x32.png" />
      <link rel="shortcut icon" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" href="/favicon-32x32.png" />

      {/* CDN Content */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
    </Head>
    <NavBar />
    <div className="layout-wrapper">
      {children}
    </div>
    <SocialBar />
    <ContactBar />
  </>
);

export default Layout;
