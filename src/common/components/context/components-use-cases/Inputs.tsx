import * as React from 'react'

import { TextArea } from "@/common/components/form/TextArea/TextArea";
import { TextField } from "@/common/components/form/TextField/TextField";
import { Heading } from "@/common/components/structure/Typography/Typography";

import * as S from './styles';

export default function Inputs() {
  return (
    <S.Card>
      <Heading as="h2">Campos de entrada</Heading>
      <br />
      <TextField key="1" placeholder="Description" />
      <br />
      <TextArea key="2" placeholder="Description" />
    </S.Card>
  );
}