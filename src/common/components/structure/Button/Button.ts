import { styled } from '@/styles/stitches.config'

export const Button = styled('button', {
  height: 'fit-content',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  transitionProperty: 'background, color',
  transitionDuration: '400ms',
  variants: {
    color: {
      violet: {
        backgroundColor: '$violet10',
        '&:hover': {
          backgroundColor: '$violet8',
        },
      },
      gray: {
        backgroundColor: '$gray12',
        '&:hover': {
          backgroundColor: '$gray10',
        },
      },
    },
    size: {
      md: {
        paddingX: '$3',
        paddingY: '$2',
        fontSize: '$3',
        borderRadius: '$2',
      },
      lg: {
        paddingX: '$4',
        paddingY: '$3',
        fontSize: '$4',
        borderRadius: '$2',
      },
      xLg: {
        paddingX: '$5',
        paddingY: '$4',
        fontSize: '$5',
        borderRadius: '$2',
      }
    },
    outlined: {
      true: {},
    },
  },
  compoundVariants: [
    {
      color: 'violet',
      outlined: true,
      css: {
        border: '1px solid',
        borderColor: '$violet10',
        color: '$violet10',
        background: 'white',
        '&:hover': {
          color: '$violet8',
        },
      },
    },
    {
      color: 'gray',
      outlined: true,
      css: {
        border: '1px solid',
        borderColor: '$gray12',
        color: '$gray12',
        background: 'white',
        '&:hover': {
          color: '$gray10',
        },
      },
    },
  ],
  defaultVariants: {
    size: 'md'
  }
});
