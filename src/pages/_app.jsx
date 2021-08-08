import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Layout from '../components/layout';

import '../scss/styles.scss';

/**
 * The 'App' component is the top-level component which will be common across all the different
 * pages. You can use this 'App' component to keep state when navigating between pages.
 *
 * In Next.js, you can add global CSS files by importing them from 'pages/_app.js'. You cannot
 * import global CSS anywhere else.
 */
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
};
