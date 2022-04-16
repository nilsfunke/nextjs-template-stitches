import { generateSizes, styled } from '@lib/stitches';

const StyledIcon = styled('svg', {
  stroke: 'none',

  variants: {
    variant: {
      default: { fill: 'currentColor' },
    },
    size: {
      ...generateSizes('size'),
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 16,
  },
});

export { StyledIcon };
