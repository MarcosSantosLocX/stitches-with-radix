import * as React from 'react';

import * as S from './TextArea.styles';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  cols = 50,
  rows = 5,
  ...props
}, forwardRef) => {
  return (
    <S.TextArea
      {...props}
      cols={cols}
      rows={rows}
      autoComplete="off"
      ref={forwardRef}
    />
  );
})

TextArea.displayName = 'TextArea';
