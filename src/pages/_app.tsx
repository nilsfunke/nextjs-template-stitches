import type { AppProps } from 'next/app';

import { globalStyles } from '@lib/stitches';
import { FramerMotionProvider } from '@components/common';
import { PageLayout } from '@components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <FramerMotionProvider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </FramerMotionProvider>
  );
}

export default MyApp;
