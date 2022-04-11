import { createStitches, CSS as StitchesCSS } from '@stitches/react';
import type * as Stitches from '@stitches/react';

const defaultDimensions = {
  0: '0',
  4: '0.25rem',
  8: '0.5rem',
  12: '0.75rem',
  16: '1rem',
  20: '1.25rem',
  24: '1.5rem',
  28: '1.75rem',
  32: '2rem',
  40: '2.5rem',
  48: '3rem',
  56: '3.5rem',
  64: '4rem',
  72: '4.5rem',
  80: '5rem',
  96: '6rem',
  112: '7rem',
  128: '8rem',
  256: '16rem',
  512: '24rem',
};

const { config, css, getCssText, globalCss, keyframes, styled, theme } =
  createStitches({
    theme: {
      colors: {
        gray1: '#fbfcfd',
        gray2: '#f8f9fa',
        gray3: '#f1f3f5',
        gray4: '#eceef0',
        gray5: '#e6e8eb',
        gray6: '#dfe3e6',
        gray7: '#d7dbdf',
        gray8: '#c1c8cd',
        gray9: '#889096',
        gray10: '#7e868c',
        gray11: '#687076',
        gray12: '#11181c',
      },
      space: { ...defaultDimensions },
      sizes: { ...defaultDimensions },
      fonts: {
        text: '"Inter"',
      },
      fontSizes: {
        14: '0.875rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        24: '1.5rem',
        28: '1.75rem',
        32: '2rem',
        40: '2.5rem',
        48: '3rem',
        56: '3.5rem',
        64: '4rem',
        72: '4.5rem',
        80: '5rem',
      },
      lineHeights: {
        14: '1rem',
        16: '1.25rem',
        18: '1.5rem',
        20: '1.5rem',
        24: '1.175rem',
        28: '2rem',
        32: '2.25rem',
        40: '2.75rem',
        48: '3.25rem',
        56: '3.75rem',
        64: '4.25rem',
        72: '4.75rem',
        80: '5.25rem',
      },
    },
    media: {
      bpSm: '(min-width: 640px)',
      bpMd: '(min-width: 768px)',
      bpLg: '(min-width: 1024px)',
      bpXl: '(min-width: 1280px)',
      bpXxl: '(min-width: 1536px)',
      motion: '(prefers-reduced-motion)',
      hover: '(any-hover: hover)',
      dark: '(prefers-color-scheme: dark)',
      light: '(prefers-color-scheme: light)',
    },
    utils: {
      px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
        WebkitUserSelect: value,
        MozUserSelect: value,
        MsUserSelect: value,
        userSelect: value,
      }),
      size: (value: Stitches.PropertyValue<'width'>) => ({
        width: value,
        height: value,
      }),
      appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
        WebkitAppearance: value,
        appearance: value,
      }),
    },
  });

export type CSS = StitchesCSS<typeof config>;
export type { VariantProps } from '@stitches/react';

export { config, css, getCssText, globalCss, keyframes, styled, theme };
