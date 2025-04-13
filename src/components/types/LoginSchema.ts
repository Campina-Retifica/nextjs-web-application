import { z } from "zod";

export const loginSchema = z.object({
  nome: z.string().nonempty("O campo nome é obrigatório!").trim().toLowerCase(),
  senha: z
    .string()
    .nonempty("O campo senha é obrigatório!")
    .min(4, "Sua senha deve conter no mínimo 4 caracteres!"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
