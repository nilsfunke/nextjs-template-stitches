import { generateText, styled } from '@lib/stitches';

const Heading = styled('span', {
  display: 'block',
  fontFamily: '$primary',
  textRendering: 'optimizeLegibility',

  variants: {
    size: {
      ...generateText(),
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
    variant: {
      default: {
        color: 'currentColor',
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
    size: '32',
    weight: 'black',
    variant: 'default',
    align: 'default',
  },
});

export { Heading };
