import React from 'react';
import { NextSeo } from 'next-seo';

import { seoConfig } from 'src/config';

type SeoProps = {
  title?: string;
  description?: string;
};

const Seo: React.FC<SeoProps> = ({ title, description }) => {
  const { title: configTitle, description: configDescription } = seoConfig;

  const seo = {
    title: `${title} - ${configTitle}` || configTitle,
    description: description || configDescription,
  };

  return (
    <>
      <NextSeo title={seo.title} description={seo.description} />
    </>
  );
};

export { Seo };
