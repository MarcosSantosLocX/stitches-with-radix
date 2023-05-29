import * as React from 'react'
import { InfoCircledIcon } from '@radix-ui/react-icons'

import { Heading, Paragraph } from "@/common/components/structure/Typography/Typography";
import { Tooltip } from "@/common/components/structure/Tooltip/Tooltip";

import * as S from './Playground.styles';

export default function Selects() {
  return (
    <S.CardGroup>
      <S.Card>
        <Heading as="h2" size="lg">Tooltip</Heading>
        <br />
        <Tooltip text='Great job!'>
          <Paragraph>
            <InfoCircledIcon/> <br />
            Hover me
          </Paragraph>
        </Tooltip>
      </S.Card>
    </S.CardGroup>
  );
}
