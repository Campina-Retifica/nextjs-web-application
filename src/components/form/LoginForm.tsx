"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import Error from "@/components/helpers/Error";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, TLoginSchema } from "@/types/payloadSchemas";
import { authUser } from "@/services/auth/auth";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLoginSchema>({ resolver: zodResolver(loginSchema) });
  const [error, setError] = useState<string>("");
  const router = useRouter();
  return (
    <form
      className="flex flex-col poppins w-[100%] md:w-[90%] mb-4"
      onSubmit={handleSubmit(async (data) => {
        setError("");
        const success = await authUser(data);
        if (success) {
          return router.push("/");
        }
        setError("Credenciais Inválidas");
        reset();
      })}
    >
      <div className="flex flex-col mb-1">
        <label htmlFor="username" className="flex flex-col">
          Nome
          <input
            {...register("username")}
            type="text"
            id="username"
            name="username"
            className="text-zinc-700 duration-200 bg-zinc-100 p-2 rounded outline-none border border-zinc-400 hover:border-zinc-950"
            autoComplete="off"
          />
        </label>
        <Error error={errors.username && errors.username.message} />
      </div>

      <div className="flex flex-col mb-1">
        <label htmlFor="password" className="flex flex-col">
          Senha
          <input
            {...register("password")}
            type="password"
            id="password"
            name="password"
            className="text-zinc-700 duration-200 bg-zinc-100 p-2 rounded outline-none border border-zinc-400 hover:border-zinc-950"
          />
        </label>
        <Error error={errors.password && errors.password.message} />
      </div>
      <Button disabled={isSubmitting} className="cursor-pointer mt-1 rounded">
        {!isSubmitting ? "Entrar" : "Carregando..."}
      </Button>
      <Error error={error && error} />
    </form>
  );
};

export default LoginForm;
