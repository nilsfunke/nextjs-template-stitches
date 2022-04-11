import { styled } from '@lib/stitches';
import { StyledIcon } from '../Icon';

const StyledButton = styled('button', {
  appearance: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: '0',
  outline: 'none',
  cursor: 'pointer',
  border: '0',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$gray9',
        color: '#FFFFFF',
      },
      secondary: {
        backgroundColor: 'transparent',
        color: '$textPrimary',
      },
    },
    size: {
      lg: {},
      md: {},
      sm: {},
    },
  },
});

const StyledTextButton = styled(StyledButton, {
  fontFamily: '$display',
  fontWeight: '$900',
  px: '$16',
  gap: '$8',

  variants: {
    size: {
      lg: {
        height: '$48',
        fontSize: '$18',
        lineHeight: '$18',

        [`& ${StyledIcon}`]: {
          size: '$24',
        },
      },
      md: {
        height: '$40',
        fontSize: '$16',
        lineHeight: '$16',

        [`& ${StyledIcon}`]: {
          size: '$16',
        },
      },
      sm: {
        height: '$32',
        fontSize: '$14',
        lineHeight: '$14',

        [`& ${StyledIcon}`]: {
          size: '$16',
        },
      },
    },
  },
  defaultVariant: {
    size: 'md',
  },
});

const StyledIconButton = styled(StyledButton, {
  variants: {
    size: {
      lg: {
        size: '$48',

        [`& ${StyledIcon}`]: {
          size: '$40',
        },
      },
      md: {
        size: '$40',

        [`& ${StyledIcon}`]: {
          size: '$32',
        },
      },
      sm: {
        size: '$32',

        [`& ${StyledIcon}`]: {
          size: '$24',
        },
      },
    },
  },
  defaultVariant: {
    size: 'md',
  },
});

export { StyledButton, StyledTextButton, StyledIconButton };
