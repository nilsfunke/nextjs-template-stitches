import { styled } from '@lib/stitches';

const Container = styled('div', {
  flexShrink: 0,
  mx: 'auto',
  px: '$32',
  width: '100%',

  $$maxWidth: 'unset',
  '@bpSm': {
    $$maxWidth: '640px',
  },
  '@bpMd': {
    $$maxWidth: '768px',
  },
  '@bpLg': {
    $$maxWidth: '1024px',
  },
  '@bpXl': {
    $$maxWidth: '1280px',
  },
  '@bpXxl': {
    $$maxWidth: '1536px',
  },

  variants: {
    layout: {
      default: {
        maxWidth: '$$maxWidth',
      },
      fullPage: {
        maxWidth: 'unset',
      },
    },
  },

  defaultVariants: {
    layout: 'default',
  },
});

export { Container };
