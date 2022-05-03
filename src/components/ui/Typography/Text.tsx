import { generateText, generateTextVariants, styled } from '@lib/stitches';

const Text = styled('span', {
  display: 'block',
  fontFamily: '$primary',
  textRendering: 'optimizeLegibility',

  variants: {
    size: {
      ...generateText(),
    },
    variant: {
      default: {
        color: 'currentColor',
      },
      ...generateTextVariants(),
    },
    weight: {
      regular: {
        fontWeight: '$regular',
      },
      semiBold: {
        fontWeight: '$semiBold',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
    align: {
      default: {
        textAlign: 'inherit',
      },
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
  },
  defaultVariants: {
    size: '16',
    variant: 'default',
    align: 'default',
    weight: 'regular',
  },
});

export { Text };
