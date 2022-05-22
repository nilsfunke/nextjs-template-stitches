import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*': {
    padding: '0',
    margin: '0',
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: '$primary',
    fontSize: '$16',
    color: '$typeface-primary',
    backgroundColor: '$background-primary',
  },
});

export { globalStyles };
