"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import Error from "@/components/helpers/Error";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, TLoginSchema } from "../types/LoginSchema";

const LoginForm = () => {
  const {
    register,
    reset,
    resetField,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLoginSchema>({ resolver: zodResolver(loginSchema) });
  return (
    <form
      className="flex flex-col bodoni w-[100%] md:w-[90%] mb-8"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        reset();
        resetField("nome");
        resetField("senha");
      })}
    >
      <div className="flex flex-col mb-1">
        <label htmlFor="nome" className="flex flex-col">
          Nome
          <input
            {...register("nome")}
            type="text"
            id="nome"
            name="nome"
            className="text-zinc-700 duration-200 bg-zinc-200 p-2 rounded outline-none border border-zinc-400 hover:border-zinc-950"
            autoComplete="off"
          />
        </label>
        <Error error={errors.nome && errors.nome.message} />
      </div>

      <div className="flex flex-col mb-1">
        <label htmlFor="senha" className="flex flex-col">
          Senha
          <input
            {...register("senha")}
            type="password"
            id="senha"
            name="senha"
            className="text-zinc-700 duration-200 bg-zinc-200 p-2 rounded outline-none border border-zinc-400 hover:border-zinc-950"
          />
        </label>
        <Error error={errors.senha && errors.senha.message} />
      </div>
      <Button disabled={isSubmitting} className="cursor-pointer mt-1 rounded">
        {!isSubmitting ? "Entrar" : "Carregando..."}
      </Button>
    </form>
  );
};

export default LoginForm;
