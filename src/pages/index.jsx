import React from 'react';
import Head from 'next/head';

import Welcome from '../components/Welcome';

function HomePage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title>Jeremiah Clothier</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="home-wrapper">
        <Welcome />
      </div>
    </>
  );
}

export default HomePage;
