import * as React from 'react'

import FieldFeedback from "@/common/components/form/FieldFeedback/FieldFeedback";
import { TextField } from "@/common/components/form/TextField/TextField";
import { TextArea }  from "@/common/components/form/TextArea/TextArea";
import { Select } from "@/common/components/form/Select/Select";
import { SelectGroup } from "@/common/components/form/SelectGroup/SelectGroup";
import { Checkbox } from "@/common/components/form/Checkbox/Checkbox";
import { Button } from "@/common/components/structure/Button/Button";
import { Tooltip } from "@/common/components/structure/Tooltip/Tooltip";
import { Heading } from "@/common/components/structure/Typography/Typography";

import * as S from "./home.styles";

const fruitsOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'grapes', label: 'Grapes' },
  { value: 'pineapple', label: 'Pineapple' }
]

const vegetablesOptions = [
  { value: 'aubergine', label: 'Aubergine' },
  { value: 'broccoli', label: 'Broccoli' },
  { value: 'carrot', label: 'Carrot', disabled: true },
  { value: 'courgette', label: 'Courgette' },
  { value: 'leek', label: 'Leek' }
]

const meatsOptions = [
  { value: 'beef', label: 'Beef' },
  { value: 'chicken', label: 'Chicken' },
  { value: 'lamb', label: 'Lamb' },
  { value: 'pork', label: 'Pork' }
]

const mealOptions = [
  { label: 'Fruits', value: 'fruits', options: fruitsOptions },
  { label: 'Vegetables', value: 'vegetables', options: vegetablesOptions },
  { label: 'Meats', value: 'meats', options: meatsOptions },
]

export default function Home() {
  const [showError, setShowError] = React.useState(false);

  const handleToggleError = () => {
    setShowError(!showError)
  }

  const error = showError 
    ? { message: "This field is required" }
    : undefined;

  return (
    <S.Container size="2">
      <S.CardGroup>
        <S.Card>
          <Heading as="h2">Campos de entrada</Heading>
          <br />
          <FieldFeedback error={error}>
            <TextField key="1" placeholder="Description" />
          </FieldFeedback>
          <FieldFeedback error={{ message: "This field is required" }}>
            <TextArea key="2" placeholder="Description" />
          </FieldFeedback>
        </S.Card>

        <S.Card>
          <Heading as="h2">Botões</Heading>
          <S.GroupButton>
            <Button type="button" color="violet" onClick={handleToggleError}>
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

        <S.Card>
          <Heading as="h2">Tooltip</Heading>
          <br />
          <Tooltip />
        </S.Card>

        <S.Card>
          <Heading as="h2">Campos de seleção</Heading>
          
          <br />
          <Select ariaLabel="Fruit"  placeholder="Select a fruit..." options={fruitsOptions} />

          <br />
          <SelectGroup ariaLabel="Meal" placeholder="Select your favorite meal..." options={mealOptions} />
          
          <br />
          <Checkbox />
        </S.Card>
      </S.CardGroup>
    </S.Container>
  );
}
