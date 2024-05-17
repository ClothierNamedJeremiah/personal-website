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
        <meta name="description" content="Jeremiah Clothier's personal website and portfolio" />
        <meta name="theme-color" content="#F9DC78" />
        <meta
          name="keywords"
          content="Jeremiah Clothier, Software Engineer, Software, Developer, Personal Website"
        />
        <meta name="author" content="Jeremiah Clothier" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jeremiah Clothier" key="title" />
        <meta
          property="og:description"
          content="Jeremiah Clothier's personal website and portfolio"
        />
        <meta property="og:site_name" content="Personal Website" />

        {/* Google SEO */}
        <meta
          name="google-site-verification"
          content="XUnNAvD7jaSkhxg4uVwY0MuUF74vCbiKBRQhw_eqBK8"
        />

        {/* icons */}
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/favicon-32x32.png" />
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
