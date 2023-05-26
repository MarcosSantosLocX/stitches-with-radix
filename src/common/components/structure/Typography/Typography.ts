import { styled } from "@/styles/stitches.config";

export const Heading = styled('h1', {
  fontFamily: '$system',
  color: '$gray10',
})

export const Paragraph = styled('p', {
  fontFamily: '$system',
  color: '$gray10',
})

export const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$purple600',
  '&:hover': {
    textDecoration: 'underline',
  }
})