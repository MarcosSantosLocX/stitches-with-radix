import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  background: '$gray4',
  border: '2px dashed',
  borderColor: '$violet8',
  borderRadius: '$3',
  marginY: '$10',
  marginX: 'auto',
  padding: '$5',
  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
})
