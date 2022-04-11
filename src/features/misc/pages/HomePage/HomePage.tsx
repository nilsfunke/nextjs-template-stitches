import React from 'react';

import { Heading } from '@components/ui';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Heading>Hello Home!</Heading>
    </>
  );
};

export type { HomePageProps };
export { HomePage };
