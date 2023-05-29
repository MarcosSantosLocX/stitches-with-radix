import * as RadixCheckbox from '@radix-ui/react-checkbox';

import { styled } from '@/styles/stitches.config'

export const TextArea = styled('textarea', {
  all: 'unset',
  border: '1px solid',
  borderColor: '$violet6',
  borderRadius: '$2',
  backgroundColor: 'white',
  fontSize: '$4',
  color: "$gray10",
  fontFamily: "$system",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "148%",
  letterSpacing: "-0.04em",
  padding: "$4",
  textAlign: 'left',
  wordWrap: 'break-word',
  "&:invalid": {
    borderColor: "$red10",
  }
});
