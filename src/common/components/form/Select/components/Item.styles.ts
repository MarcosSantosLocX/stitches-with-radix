import { styled } from '@/styles/stitches.config';
import * as Select from '@radix-ui/react-select';

export const SelectItem = styled(Select.Item, {
  fontSize: '$4',
  fontFamily: '$system',
  lineHeight: 1,
  color: '$violet11',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$mauve8',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$violet9',
    color: '$violet1',
  },
});

export const SelectLabel = styled(Select.Label, {
  padding: '0 25px',
  fontSize: '$3',
  lineHeight: '25px',
  color: '$mauve11',
});

export const SelectItemIndicator = styled(Select.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});
