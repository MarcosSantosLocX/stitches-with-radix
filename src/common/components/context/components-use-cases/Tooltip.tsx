import * as React from 'react'

import { Heading } from "@/common/components/structure/Typography/Typography";
import { Tooltip } from "@/common/components/structure/Tooltip/Tooltip";

import * as S from './styles';

export default function Selects() {
  return (
    <S.CardGroup>
      <S.Card>
        <Heading as="h2">Tooltip</Heading>
        <br />
        <Tooltip />
      </S.Card>
    </S.CardGroup>
  );
}
