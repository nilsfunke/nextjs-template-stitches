import { createStitches, CSS as StitchesCSS } from '@stitches/react';

import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  media,
  sizes,
  space,
  transitions,
  utils,
  zIndices,
} from './tokens';

const { config, css, getCssText, globalCss, keyframes, styled, theme } =
  createStitches({
    theme: {
      colors: { ...colors },
      space: { ...space },
      sizes: { ...sizes },
      fonts: { ...fonts },
      fontSizes: { ...fontSizes },
      fontWeights: { ...fontWeights },
      lineHeights: { ...lineHeights },
      zIndices: { ...zIndices },
      transitions: { ...transitions },
    },
    media: {
      ...media,
    },
    utils: {
      ...utils,
    },
  });

export type CSS = StitchesCSS<typeof config>;
export type { VariantProps } from '@stitches/react';

export { config, css, getCssText, globalCss, keyframes, styled, theme };
