import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import {
  getCookiesAcceptedCookie,
  CookiesAcceptedState,
  setCookiesAcceptedCookie,
} from '@utils';

import { CookieBannerProps } from '../CookieBanner';

const CookieBanner = dynamic(
  () =>
    import('../CookieBanner').then((module) => module.CookieBanner) as Promise<
      React.FC<CookieBannerProps>
    >
);

const PageLayout: React.FC = ({ children }) => {
  const [cookiesAcceptedState, setCookiesAcceptedState] =
    useState<CookiesAcceptedState | null>(null);

  useEffect(() => {
    const cookiesAcceptedCookie = getCookiesAcceptedCookie();
    setCookiesAcceptedState(cookiesAcceptedCookie);
  }, []);

  useEffect(() => {
    if (cookiesAcceptedState !== null && cookiesAcceptedState !== 'notset') {
      setCookiesAcceptedCookie(cookiesAcceptedState);
    }

    if (cookiesAcceptedState === 'accepted') {
      import('@lib/tracking').then((module) => module.initializeGtm());
    }
  }, [cookiesAcceptedState]);

  return (
    <>
      <main>{children}</main>

      {cookiesAcceptedState === 'notset' && (
        <CookieBanner onCookiesAccepted={setCookiesAcceptedState} />
      )}
    </>
  );
};

export { PageLayout };
