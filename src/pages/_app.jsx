/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Layout from 'components/layout';
import Loader from 'components/Loader';

import 'scss/styles.scss';

/**
 * The 'App' component is the top-level component which will be common across all the different
 * pages. You can use this 'App' component to keep state when navigating between pages.
 *
 * In Next.js, you can add global CSS files by importing them from 'pages/_app.js'. You cannot
 * import global CSS anywhere else.
 */
export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Head>
        <title>Jeremiah Clothier</title>

        {/* metadata */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Jeremiah Clothier's personal website and portfolio"
        />
        <meta name="theme-color" content="#F9DC78" />
        <meta
          name="keywords"
          content="Jeremiah Clothier, Software Engineer, Software, Developer, Personal Website"
        />
        <meta name="author" content="Jeremiah Clothier" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jeremiah Clothier" />
        <meta
          property="og:description"
          content="Jeremiah Clothier's personal website and portfolio"
        />
        <meta property="og:site_name" content="Personal Website" />

        {/* icons */}
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/favicon-32x32.png" />

        {/* CDN Content */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {isLoading ? (
        <Loader onLoadingFinished={() => setIsLoading(false)} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
};
