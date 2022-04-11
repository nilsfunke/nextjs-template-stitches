import React from 'react';

import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@types';

import { ButtonProps } from './Button.types';
import { StyledIconButton } from './Button.styles';

type Props = {
  icon: React.ReactNode;
} & ButtonProps;

type IconButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

type IconButtonComponent = <C extends React.ElementType = 'button'>(
  props: IconButtonProps<C>
) => JSX.Element | null;

const IconButtonInner = <C extends React.ElementType>(
  props: IconButtonProps<C>,
  ref?: PolymorphicRef<C>
) => {
  const { icon, ...otherProps } = props;

  return (
    <StyledIconButton ref={ref} {...otherProps}>
      {icon}
    </StyledIconButton>
  );
};
IconButtonInner.displayName = 'IconButton';

const IconButton: IconButtonComponent = React.forwardRef(IconButtonInner);

export type { IconButtonProps };
export { IconButton };
