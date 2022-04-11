import { CSS, space } from './stitches.config';

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
  const keys = Object.keys(space);

  const variants = {} as any;
  for (let key of keys) {
    let variant = {} as any;
    variant[cssProp] = `$${key}`;

    variants[key] = variant;
  }

  return variants as Sizes;
}

export { generateSpace, generateSizes };
