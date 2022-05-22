import React from 'react';

import { Container, Flex, Heading, Spacer, Text } from '@components/ui';
import { styled } from '@lib/stitches';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Flex direction="column" justify="center">
            <Heading as="h1" size="32" variant="typeface-primary">
              NextJS Template
            </Heading>

            <Spacer y="16" />

            <Text size="18" variant="typeface-secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              vero sapiente cupiditate repellat facere distinctio explicabo
              laudantium incidunt totam deserunt. Ipsum facilis culpa itaque
              sapiente vel quod quae doloribus. Voluptate?
            </Text>
          </Flex>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled('div', {
  height: '100vh',
  with: '100%',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
});

export type { HomePageProps };
export { HomePage };
