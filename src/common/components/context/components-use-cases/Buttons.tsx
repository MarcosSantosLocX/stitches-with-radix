import * as React from 'react'

import { Heading } from "@/common/components/structure/Typography/Typography";
import { Button } from '@/common/components/structure/Button/Button';

import * as S from './Playground.styles';

export default function Selects() {
  return (
    <S.Card>
      <Heading as="h2" size="lg">Botões</Heading>
      <br />
      <S.GroupButton>
        <Button type="button" color="violet">
          Medium
        </Button>
        <Button type="button" color="violet" size="lg">
          Large
        </Button>
        <Button
          type="button"
          color={{ "@initial": "violet", "@desktop": "gray" }}
          size="xLg"
        >
          Extra Large
        </Button>
      </S.GroupButton>
      <S.GroupButton>
        <Button type="button" color="violet" outlined>
          Medium
        </Button>
        <Button type="button" color="violet" size="lg" outlined>
          Large
        </Button>
        <Button
          type="button"
          color={{ "@initial": "violet", "@desktop": "gray" }}
          size="xLg"
          outlined
        >
          Extra Large
        </Button>
      </S.GroupButton>
  </S.Card>
  );
}
