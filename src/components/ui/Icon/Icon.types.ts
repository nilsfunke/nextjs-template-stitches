import { VariantProps } from '@lib/stitches';

import { StyledIcon } from './Icon.styles';

type IconSize = VariantProps<typeof StyledIcon>['size'];
type IconVariant = VariantProps<typeof StyledIcon>['variant'];

type IconProps = {
  size?: IconSize;
  variant?: IconVariant;
};

export type { IconSize, IconVariant, IconProps };
