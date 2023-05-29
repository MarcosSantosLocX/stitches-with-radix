import * as React from 'react'

import Playground from '@/common/components/context/components-use-cases/Playground';
import RHF from '@/common/components/context/with-react-hook-form/RHF';

import * as S from "./examples.styles";

export default function Home() {
  return (
    <>
      <S.Container size="2">
        <RHF />
      </S.Container>
      <S.Container size="2">
        <Playground />
      </S.Container>
    </>
  );
}
