import { styled } from '@lib/stitches';

const StyledIcon = styled('svg', {
  stroke: 'none',

  variants: {
    variant: {
      default: { fill: 'currentColor' },
      primary: {
        fill: '$gray12',
      },
      secondary: {
        fill: '$gray11',
      },
    },
    size: {
      12: {
        size: '$12',
      },
      16: {
        size: '$16',
      },
      20: {
        size: '$20',
      },
      24: {
        size: '$24',
      },
      32: {
        size: '$32',
      },
      40: {
        size: '$40',
      },
      48: {
        size: '$48',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 16,
  },
});

export { StyledIcon };
