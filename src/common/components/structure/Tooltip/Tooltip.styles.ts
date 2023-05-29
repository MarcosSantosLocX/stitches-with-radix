import { keyframes } from '@stitches/react'

import { css } from '@/styles/stitches.config'

import { Button } from '@/common/components/structure/Button/Button';

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  }
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  }
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  }
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  }
}) 

export const trigger = css({
  width: 'max-content'
});

export const content = css({
  borderRadius: "4px",
  padding: "10px 15px",
  fontSize: "15px",
  fontFamily: "$system",
  lineHeight: 1,
  color: "$violet11",
  backgroundColor: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  userSelect: "none",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  "&[data-state='delayed-open'][data-side='top']": {
    animationName: slideDownAndFade,
  },
  "&[data-state='delayed-open'][data-side='right']": {
    animationName: slideLeftAndFade,
  },
  "&[data-state='delayed-open'][data-side='bottom']": {
    animationName: slideUpAndFade,
  },
  "&[data-state='delayed-open'][data-side='left']": {
    animationName: slideRightAndFade,
  },
});

export const contentArrow = css({
  fill: 'white'
});
