import React, { useEffect } from 'react';

import { Box } from '@components/ui';
import { CookiesAcceptedState } from '@utils';

type CookieBannerProps = {
  onCookiesAccepted?: (cookiesAcceptedState: CookiesAcceptedState) => void;
};

const CookieBanner: React.FC<CookieBannerProps> = ({ onCookiesAccepted }) => {
  useEffect(() => {
    setTimeout(() => onCookiesAccepted?.('accepted'), 5000);
  });

  return (
    <Box
      css={{
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '$cookie-banner',
      }}
    >
      Hello CookieBanner!
    </Box>
  );
};

export type { CookieBannerProps };
export { CookieBanner };
