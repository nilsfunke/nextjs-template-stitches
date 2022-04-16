import React from 'react';

import { Heading, Text } from '@components/ui';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Heading>Hello Home!</Heading>

      <Text size="20">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit vero
        sapiente cupiditate repellat facere distinctio explicabo laudantium
        incidunt totam deserunt. Ipsum facilis culpa itaque sapiente vel quod
        quae doloribus. Voluptate?
      </Text>
    </>
  );
};

export type { HomePageProps };
export { HomePage };
