import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*': {
    padding: '0',
    margin: '0',
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: '$text',
    fontSize: '$16',
    color: '$gray12',
    backgroundColor: '$gray1',
  },
});

export { globalStyles };
