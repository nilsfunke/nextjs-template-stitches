import { generateSpace, styled } from '@lib/stitches';

const Grid = styled('div', {
  display: 'grid',
  height: 'inherit',

  $$gridLayout: 'repeat(4, 1fr)',
  '@bpMd': {
    $$gridLayout: 'repeat(8, 1fr)',
  },
  '@bpLg': {
    $$gridLayout: 'repeat(12, 1fr)',
  },

  variants: {
    align: {
      start: {
        alignItems: 'start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    flow: {
      row: {
        gridAutoFlow: 'row',
      },
      column: {
        gridAutoFlow: 'column',
      },
      dense: {
        gridAutoFlow: 'dense',
      },
      rowDense: {
        gridAutoFlow: 'row dense',
      },
      columnDense: {
        gridAutoFlow: 'column dense',
      },
    },
    columns: {
      default: {
        gridTemplateColumns: '$$gridLayout',
      },
      1: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      5: {
        gridTemplateColumns: 'repeat(5, 1fr)',
      },
      6: {
        gridTemplateColumns: 'repeat(6, 1fr)',
      },
      7: {
        gridTemplateColumns: 'repeat(7, 1fr)',
      },
      8: {
        gridTemplateColumns: 'repeat(8, 1fr)',
      },
      9: {
        gridTemplateColumns: 'repeat(9, 1fr)',
      },
      10: {
        gridTemplateColumns: 'repeat(10, 1fr)',
      },
      11: {
        gridTemplateColumns: 'repeat(11, 1fr)',
      },
      12: {
        gridTemplateColumns: 'repeat(12, 1fr)',
      },
    },
    gap: {
      ...generateSpace('gap'),
    },
    gapX: {
      ...generateSpace('columnGap'),
    },
    gapY: {
      ...generateSpace('rowGap'),
    },
  },
  compoundVariants: [
    {
      columns: 'default',
      css: {
        gap: '$24',
      },
    },
  ],
  defaultVariants: {
    columns: 'default',
    align: 'stretch',
    justify: 'initial',
  },
});

export { Grid };
