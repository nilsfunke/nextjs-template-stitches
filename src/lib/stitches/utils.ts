import { CSS } from './stitches.config';

import { fontSizes, sizes, space, typeFaceColors } from './tokens';

type Space = {
  0: CSS;
  4: CSS;
  8: CSS;
  12: CSS;
  16: CSS;
  20: CSS;
  24: CSS;
  28: CSS;
  32: CSS;
  40: CSS;
  48: CSS;
  56: CSS;
  64: CSS;
  72: CSS;
  80: CSS;
  96: CSS;
  112: CSS;
  128: CSS;
  256: CSS;
  512: CSS;
};
function generateSpace(cssProp: string): Space {
  const keys = Object.keys(space);

  const variants = {} as any;
  for (let key of keys) {
    let variant = {} as any;
    variant[cssProp] = `$${key}`;

    variants[key] = variant;
  }

  return variants as Space;
}

type Sizes = {
  0: CSS;
  4: CSS;
  8: CSS;
  12: CSS;
  16: CSS;
  20: CSS;
  24: CSS;
  28: CSS;
  32: CSS;
  40: CSS;
  48: CSS;
  56: CSS;
  64: CSS;
  72: CSS;
  80: CSS;
  96: CSS;
  112: CSS;
  128: CSS;
  256: CSS;
  512: CSS;
};
function generateSizes(cssProp: string): Sizes {
  const keys = Object.keys(sizes);

  const variants = {} as any;
  for (let key of keys) {
    let variant = {} as any;
    variant[cssProp] = `$${key}`;

    variants[key] = variant;
  }

  return variants as Sizes;
}

type Text = {
  14: CSS;
  16: CSS;
  18: CSS;
  20: CSS;
  24: CSS;
  28: CSS;
  32: CSS;
  40: CSS;
  48: CSS;
  56: CSS;
  64: CSS;
  72: CSS;
};
const generateText = (): Text => {
  const variants = {} as Text;
  for (let key of Object.keys(fontSizes)) {
    let variant = {} as any;
    variant['text'] = `$${key}`;

    (variants as any)[key] = variant;
  }

  return variants as Text;
};

type TextVariants = {
  'typeface-primary': CSS;
  'typeface-secondary': CSS;
};
const generateTextVariants = (): TextVariants => {
  const variants = {} as TextVariants;
  for (let key of Object.keys(typeFaceColors)) {
    let variant = {} as any;
    variant['color'] = `$${key}`;

    (variants as any)[key] = variant;
  }

  return variants as TextVariants;
};

export { generateSpace, generateSizes, generateText, generateTextVariants };
