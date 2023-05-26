import { styled } from '@/styles/stitches.config';
import * as Select from '@radix-ui/react-select';

export const SelectTrigger = styled(Select.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid',
  borderColor: '$violet6',
  borderRadius: '$2',
  padding: '0 15px',
  lineHeight: 1,
  height: '$10',
  gap: 5,
  backgroundColor: 'white',
  fontSize: '$4',
  fontFamily: '$system',
  color: '$violet11',
  '&:hover': { backgroundColor: '$mauve3' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-placeholder]': { color: '$violet9' },
});

export const SelectIcon = styled(Select.SelectIcon, {
  color: '$violet11',
});

export const SelectContent = styled(Select.Content, {
  fontSize: '$4',
  fontFamily: '$system',
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

export const SelectViewport = styled(Select.Viewport, {
  padding: 5,
});

export const SelectSeparator = styled(Select.Separator, {
  height: 1,
  backgroundColor: '$violet6',
  margin: 5,
});

export const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: '$violet11',
  cursor: 'default',
};

export const SelectScrollUpButton = styled(Select.ScrollUpButton, scrollButtonStyles);

export const SelectScrollDownButton = styled(Select.ScrollDownButton, scrollButtonStyles);
