import { z } from "zod";

const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;

export const loginSchema = z.object({
  username: z
    .string()
    .nonempty("O campo nome é obrigatório!")
    .trim()
    .toLowerCase(),
  password: z
    .string()
    .nonempty("O campo senha é obrigatório!")
    .min(4, "Sua senha deve conter no mínimo 4 caracteres!"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;

export const newServiceSchema = z.object({
  name: z.string().nonempty("O campo nome é obrigatório!").trim().toLowerCase(),
  description: z
    .string()
    .nonempty("O campo descrição é obrigatório!")
    .min(10, "Sua descrição deve conter no mínimo 10 caracteres!"),
  value: z.coerce.number().nonnegative("O valor não pode ser negativo."),
});

export type TNewServiceSchema = z.infer<typeof newServiceSchema>;

export const newProvidedServiceSchema = z.object({
  serviceId: z.coerce.number().nonnegative("O valor não pode ser negativo."),
  customerId: z.coerce.number().nonnegative("O valor não pode ser negativo."),
  startDate: z.string().regex(isoDateRegex, {
    message: "Data inicial deve estar no formato YYYY-MM-DDTHH:mm",
  }),
  endDate: z.string().regex(isoDateRegex, {
    message: "Data final deve estar no formato YYYY-MM-DDTHH:mm",
  }),
});

export type TNewProvidedServiceSchema = z.infer<
  typeof newProvidedServiceSchema
>;
