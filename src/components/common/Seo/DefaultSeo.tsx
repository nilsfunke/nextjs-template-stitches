import React from 'react';
import { DefaultSeo as NextDefaultSeo } from 'next-seo';

import { seoConfig } from 'src/config';

type DefaultSeo = {
  title?: string;
};

const DefaultSeo: React.FC<DefaultSeo> = ({ title }) => (
  <>
    <NextDefaultSeo
      title={title || seoConfig.title}
      description={seoConfig.description}
      canonical={seoConfig.url}
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: seoConfig.url,
        title: seoConfig.title,
        description: seoConfig.description,
      }}
    />
  </>
);

export { DefaultSeo };
