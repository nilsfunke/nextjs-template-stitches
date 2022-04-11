import { generateSizes, styled } from '@lib/stitches';

const Spacer = styled('div', {
  variants: {
    axis: {
      vertical: {},
      horizontal: {},
    },
    size: {
      ...generateSizes('size'),
    },
  },
  compoundVariants: [
    {
      axis: 'vertical',
      css: {
        width: '100%',
      },
    },
    {
      axis: 'horizontal',
      css: {
        height: '100%',
      },
    },
  ],
});

export { Spacer };
