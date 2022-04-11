import React from 'react';
import { LazyMotion } from 'framer-motion';

const loadFeatures = () =>
  import('./framerMotionFeatures').then((module) => module.domAnimation);

type FramerMotionProviderPops = {};

const FramerMotionProvider: React.FC<
  React.PropsWithChildren<FramerMotionProviderPops>
> = ({ children }) => {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
};

export { FramerMotionProvider };
