import { keyframes } from '@stitches/react'
import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  width: 'auto',
  textAlign: 'left',
  display: 'grid',
  gridTemplateRows: 'auto 16px',
  rowGap: '$1'
})

const hidden = keyframes({
  from: { 
    opacity: 1,
  },
  to:   { 
    opacity: 0,
  }
})

const show = keyframes({
  from: { 
    opacity: 0,
  },
  to:   { 
    opacity: 1,
  }
})

export const Message = styled('span', {
  color: '$red10',
  fontFamily: '$system',
  fontSize: '$3',
  marginLeft: '$1',
  animationDuration: '500ms',
  variants: {
    animation: {
      actived: {
        animationName: `${show}`,
      },
      disabled: {
        animationName: `${hidden}`,
      }
    },    
  }
})
