import type * as Stitches from '@stitches/react';

const utils = {
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
  userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
    WebkitUserSelect: value,
    MozUserSelect: value,
    MsUserSelect: value,
    userSelect: value,
  }),
  size: (value: Stitches.PropertyValue<'width'>) => ({
    width: value,
    height: value,
  }),
  text: (value: Stitches.PropertyValue<'fontSize'>) => ({
    fontSize: value,
    lineHeight: value,
  }),
  appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
    WebkitAppearance: value,
    appearance: value,
  }),
};

export { utils };
