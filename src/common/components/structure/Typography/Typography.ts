import { styled } from "@/styles/stitches.config";

export const Heading = styled('h1', {
  fontFamily: '$system',
  color: '$gray10',
  variants: {
    size: {
      sm: {
        fontSize: '$3'
      },
      md: {
        fontSize: '$4'
      },
      lg: {
        fontSize: '$5'
      },
      xLg: {
        fontSize: '$6'
      },
    }
  },
  defaultVariants: {
    size: 'xLg'
  }
})

export const Paragraph = styled('p', {
  fontFamily: '$system',
  color: '$gray10',
  variants: {
    size: {
      md: {
        fontSize: '$4'
      },
      lg: {
        fontSize: '$5'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})


export const Label = styled('label', {
  fontFamily: '$system',
  color: '$gray10',
  lineHeight: 1,
  variants: {
    size: {
      md: {
        fontSize: '$4'
      },
      lg: {
        fontSize: '$5'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$violet9',
  '&:hover': {
    textDecoration: 'underline',
  }
})