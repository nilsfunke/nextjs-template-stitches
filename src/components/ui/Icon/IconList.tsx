import { AccessibleIcon } from '@radix-ui/react-accessible-icon';

import { IconProps } from './Icon.types';
import { StyledIcon } from './Icon.styles';

const ArrowUpRightIcon = (props: IconProps) => (
  <AccessibleIcon label="Arrow up right">
    <StyledIcon
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      role="img"
      {...props}
    >
      <title>Arrow up right</title>
      <desc>An arrow that show to the upper right</desc>
      <path d="M17.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,17,6H7A1,1,0,0,0,7,8h7.59l-8.3,8.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L16,9.41V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17.92,6.62Z" />
    </StyledIcon>
  </AccessibleIcon>
);

export { ArrowUpRightIcon };
