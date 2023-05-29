import * as React from 'react';
import type { FieldError } from 'react-hook-form';

import * as S from './FieldFeedback.styles';

type FieldFeedbackProps = {
  children: React.ReactNode;
  error?: FieldError;
}

const FieldFeedback = ({ children, error }: FieldFeedbackProps) => {
  const animationActive = error !== undefined;

  return (
    <S.Container>
      {children}
      <S.Message animation={animationActive ? 'actived' : 'disabled'}>
        {error?.message}
      </S.Message>
    </S.Container>
  );
}

export default FieldFeedback;