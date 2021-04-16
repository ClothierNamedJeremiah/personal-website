import React from 'react';
import Head from 'next/head';

import Welcome from '../components/Welcome';

function HomePage() {
  return (
    <>
      <Head>
        <title>Jeremiah Clothier</title>
      </Head>
      <div className="home-wrapper">
        <Welcome />
      </div>
    </>
  );
}

export default HomePage;
