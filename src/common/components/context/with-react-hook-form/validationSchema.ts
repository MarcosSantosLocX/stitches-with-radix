import * as z from 'zod';

export const formSchema = z.object({
  title: z
    .string({
      required_error: 'Campo obrigatório'
    })
    .min(5, {
      message: 'O titulo deve conter no mínimo 5 letras'
    }),
  description: z
    .string({
      required_error: 'Campo obrigatório'
    })
    .min(10, {
      message: 'A Descrição deve conter no mínimo 10 letras'
    }),
  fruit: z.string({
    required_error: 'Campo obrigatório'
  }),
  meat: z.string({
    required_error: 'Campo obrigatório'
  }),
  termUsage: z.boolean(),
});

export type FormFields = z.infer<typeof formSchema>;