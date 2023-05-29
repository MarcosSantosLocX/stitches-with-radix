import * as React from 'react'
import { InfoCircledIcon } from '@radix-ui/react-icons'

import { Heading, Paragraph } from "@/common/components/structure/Typography/Typography";
import { Tooltip } from "@/common/components/structure/Tooltip/Tooltip";
import { RadioGroup } from "@/common/components/form/RadioGroup/RadioGroup";

import * as S from './Playground.styles';

const meatsOptions = [
  { value: 'beef', label: 'Beef' },
  { value: 'chicken', label: 'Chicken' },
  { value: 'lamb', label: 'Lamb' },
  { value: 'pork', label: 'Pork' }
]

export default function Radios() {
  return (
    <S.CardGroup>
      <S.Card>
        <Heading as="h2" size="lg">RadioGroup</Heading>
        <br />
        <RadioGroup defaultValue='beef' onValueChange={(e) => console.log(e)} options={meatsOptions} />
      </S.Card>
    </S.CardGroup>
  );
}
