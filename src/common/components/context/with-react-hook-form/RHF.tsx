import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading, Paragraph, Link } from "@/common/components/structure/Typography/Typography";
import { Button } from "@/common/components/structure/Button/Button";
import FieldFeedback from "@/common/components/form/FieldFeedback/FieldFeedback";
import { TextField } from "@/common/components/form/TextField/TextField";
import { TextArea }  from "@/common/components/form/TextArea/TextArea";
import { Select } from "@/common/components/form/Select/Select";
import { Checkbox } from '@/common/components/form/Checkbox/Checkbox';
import { RadioGroup } from '@/common/components/form/RadioGroup/RadioGroup';

import { formSchema } from "./validationSchema";
import type { FormFields } from "./validationSchema";

import * as S from "./RHF.styles";

const fruitsOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'grapes', label: 'Grapes' },
  { value: 'pineapple', label: 'Pineapple' }
]

const meatsOptions = [
  { value: 'beef', label: 'Beef' },
  { value: 'chicken', label: 'Chicken' },
  { value: 'lamb', label: 'Lamb' },
  { value: 'pork', label: 'Pork' }
]

export default function RHF() {
  const form = useForm<FormFields>({
    defaultValues: {
      termUsage: false,
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (formFields: FormFields) => {
    console.log(formFields);
  }

  return (
    <S.CardGroup>
      <S.Card>
        <Heading as="h2" size='lg'>Campos com react hook form</Heading>
        <br />
        <form onSubmit={form.handleSubmit(onSubmit)} style={{ display: 'contents' }}>
          <FieldFeedback error={form.formState.errors.title}>
            <TextField {...form.register('title')} placeholder="Titulo" />
          </FieldFeedback>          
          <FieldFeedback error={form.formState.errors.description}>
            <TextArea
              {...form.register('description')}
              placeholder="Descrição"
            />
          </FieldFeedback>          
          <FieldFeedback error={form.formState.errors.fruit}>
            <Controller
              name='fruit'
              control={form.control}
              render={({ field }) => (
                <Select
                  ariaLabel="Fruit"
                  placeholder="Selecione uma fruta"
                  options={fruitsOptions}
                  onValueChange={(value) => {
                    field.onChange({ target: { name: field.name, value } })
                  }}
                  {...field}
                />
              )}
            />
          </FieldFeedback>
          <FieldFeedback error={form.formState.errors.meat}>
          <Controller
              name='meat'
              control={form.control}
              render={({ field: { value, onChange, name } }) => (
                <RadioGroup
                  name={name}
                  value={value}
                  onValueChange={(value) => {
                    onChange({ target: { name, value } })
                  }}
                  options={meatsOptions}
                />
              )}
            />
          </FieldFeedback>
          <S.Flex>
            <Controller
              name='termUsage'
              control={form.control}
              render={({ field: { value, onChange, name } }) => (
                <Checkbox
                  name={name}
                  checked={value}
                  onCheckedChange={(value) => {
                    console.log({ name, value });
                    onChange({ target: { name, value } })
                  }}
                />
              )}
            />
            <Paragraph>Aceitar os <Link href='/'>termos de uso</Link></Paragraph>
          </S.Flex>
          <Button type="submit" color="violet" size="lg">
            Enviar formulário
          </Button>
        </form>
      </S.Card>
    </S.CardGroup>
  );
}
