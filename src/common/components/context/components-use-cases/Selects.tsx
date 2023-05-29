import * as React from 'react'

import { Select } from "@/common/components/form/Select/Select";
import { SelectGroup } from "@/common/components/form/SelectGroup/SelectGroup";
import { Checkbox } from "@/common/components/form/Checkbox/Checkbox";
import { Heading } from "@/common/components/structure/Typography/Typography";

import * as S from './Playground.styles';

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

export default function Selects() {
  return (
    <S.Card>
      <Heading as="h2" size="lg">Campos de seleção</Heading>
      
      <br />
      <Select ariaLabel="Fruit"  placeholder="Select a fruit..." options={fruitsOptions} />

      <br />
      <SelectGroup ariaLabel="Meal" placeholder="Select your favorite meal..." options={mealOptions} />
      
      <br />
      <Checkbox />
    </S.Card>
  );
}
