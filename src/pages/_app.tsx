import type { AppProps } from 'next/app';
import Head from 'next/head';

import { globalStyles } from '@lib/stitches';
import { DefaultSeo, FramerMotionProvider } from '@components/common';
import { PageLayout } from '@components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <FramerMotionProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <DefaultSeo />

      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </FramerMotionProvider>
  );
}

export default MyApp;
