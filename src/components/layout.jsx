import React from 'react';
import Head from 'next/head';

import Navbar from './navbar/Navbar';

const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Jeremiah Clothier</title>

      <link rel="icon" href="/favicon-32x32.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
    </Head>
    <Navbar />
    {children}
  </>
);

export default Layout;
