import { VariantProps } from '@lib/stitches';

import { StyledButton } from './Button.styles';

type ButtonSize = VariantProps<typeof StyledButton>['size'];
type ButtonVariant = VariantProps<typeof StyledButton>['variant'];

type ButtonProps = {
  size: ButtonSize;
  variant: ButtonVariant;
};

export type { ButtonSize, ButtonProps, ButtonVariant };
