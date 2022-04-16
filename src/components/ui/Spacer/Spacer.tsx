import { generateSizes, styled } from '@lib/stitches';

const Spacer = styled('div', {
  width: '100%',
  height: '100%',

  variants: {
    x: {
      ...generateSizes('width'),
    },
    y: {
      ...generateSizes('height'),
    },
  },
});

export { Spacer };
