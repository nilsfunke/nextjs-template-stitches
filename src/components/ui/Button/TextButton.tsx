import React from 'react';

import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@types';

import { ButtonProps } from './Button.types';
import { StyledTextButton } from './Button.styles';

type Props = {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} & ButtonProps;

type TextButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

type TextButtonComponent = <C extends React.ElementType = 'button'>(
  props: TextButtonProps<C>
) => JSX.Element | null;

const TextButtonInner = <C extends React.ElementType>(
  props: TextButtonProps<C>,
  ref?: PolymorphicRef<C>
) => {
  const { children, startIcon, endIcon, ...otherProps } = props;

  return (
    <StyledTextButton ref={ref} {...otherProps}>
      {startIcon}
      {children}
      {endIcon}
    </StyledTextButton>
  );
};
TextButtonInner.displayName = 'TextButton';

const TextButton: TextButtonComponent = React.forwardRef(TextButtonInner);

export type { TextButtonProps };
export { TextButton };
