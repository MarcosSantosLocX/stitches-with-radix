import * as RadixCheckbox from '@radix-ui/react-checkbox';

import { styled } from '@/styles/stitches.config'

export const TextArea = styled('textarea', {
  all: 'unset',
  border: '1px solid',
  borderColor: '$violet6',
  borderRadius: '$2',
  backgroundColor: 'white',
  textIndent: '16px',
  fontSize: '$4',
  color: "$gray10",
  fontFamily: "$system",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "148%",
  letterSpacing: "-0.04em",
  paddingY: "$4",
  textAlign: 'left',
  
  "&:invalid": {
    borderColor: "$red10",
  }
});
