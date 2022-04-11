import { styled } from '@lib/stitches';

const Heading = styled('span', {
  display: 'block',
  textRendering: 'optimizeLegibility',
  letterSpacing: '0.2px',

  variants: {
    font: {
      default: {
        fontFamily: 'inherit',
      },
      primary: {
        fontFamily: '$gray12',
      },
    },
    size: {
      14: {
        fontSize: '$14',
        lineHeight: '$14',
      },
      16: {
        fontSize: '$16',
        lineHeight: '$16',
      },
      18: {
        fontSize: '$18',
        lineHeight: '$18',
      },
      20: {
        fontSize: '$20',
        lineHeight: '$20',
      },
      24: {
        fontSize: '$24',
        lineHeight: '$24',
      },
      28: {
        fontSize: '$28',
        lineHeight: '$28',
      },
      32: {
        fontSize: '$32',
        lineHeight: '$32',
      },
      40: {
        fontSize: '$40',
        lineHeight: '$40',
      },
      48: {
        fontSize: '$48',
        lineHeight: '$48',
      },
      56: {
        fontSize: '$56',
        lineHeight: '$56',
      },
      64: {
        fontSize: '$64',
        lineHeight: '$64',
      },
      72: {
        fontSize: '$72',
        lineHeight: '$72',
      },
      80: {
        fontSize: '$80',
        lineHeight: '$80',
      },
    },
    weight: {
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
      primary: {
        color: '$textPrimary',
      },
      secondary: {
        color: '$textSecondary',
      },
    },
  },
  defaultVariants: {
    size: '32',
    weight: 'bold',
    variant: 'default',
    font: 'default',
  },
});

export { Heading };
