/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';

import * as React from 'react';
import Head from 'next/head';

import Layout from 'components/Layout';
import Loader from 'components/Loader';

import '../index.css';

type Props = {
  Component: React.ElementType;
  pageProps: { [key: string]: unknown };
};

/**
 * The 'App' component is the top-level component which will be common across all the different
 * pages. You can use this 'App' component to keep state when navigating between pages.
 *
 * In Next.js, you can add global CSS files by importing them from 'pages/_app.js'. You cannot
 * import global CSS anywhere else.
 */
export default function App({ Component, pageProps }: Props) {
  const [isLoading, setIsLoading] = useState(() => {
    if (process.env.NODE_ENV !== 'production') {
      return false;
    }
    return true;
  });

  return (
    <>
      <Head>
        <title>Jeremiah Clothier</title>

        {/* metadata */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#F9DC78" />

        {/* Google Supported <meta> tags */}
        <meta
          name="description"
          content="A personal website by Jeremiah Clothier! Explore research blogs, innovative projects, and delicious recipes."
        />
        <meta
          name="google-site-verification"
          content="LYDuVYZ4BpWMq8zVCcEkvJ6Y2tOWwW6cq9F5-4sSOjs"
        />

        {/* icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
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
