import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

import { styled } from '@/styles/stitches.config'

export const RadioGroupRoot = styled(RadioGroup.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const RadioGroupItem = styled(RadioGroup.Item, {
  all: 'unset',
  backgroundColor: 'white',
  border: '1px solid',
  borderColor: '$violet6',
  borderRadius: '$circle',
  '&:hover': {
    backgroundColor: '$violet3'
  },
  '&:focus': {
    boxShadow: `0 0 0 2px black`
  },
  variants: {
    size: {
      md: {
        width: '$7',
        height: '$7',
      },
      lg: {
        width: '$8',
        height: '$8',
      },
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

export const RadioGroupIndicator = styled(RadioGroup.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: '$3',
    height: '$3',
    borderRadius: '50%',
    backgroundColor: '$violet11',
  },
});

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4'
});
