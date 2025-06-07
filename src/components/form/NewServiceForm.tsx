import React from "react";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newServiceSchema, TNewServiceSchema } from "@/types/payloadSchemas";
import { postNewService } from "@/services/services/retificaServices";

const NewServiceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TNewServiceSchema>({ resolver: zodResolver(newServiceSchema) });

  const onSubmit = async (data: TNewServiceSchema) => {
    await postNewService(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
      <div className="space-y-1 flex flex-col">
        <label htmlFor="name" className="text-sm font-medium">
          Nome
        </label>
        <input
          id="name"
          {...register("name")}
          className="text-zinc-700 duration-200 bg-zinc-100 py-1 px-2 rounded outline-none border border-zinc-200 hover:border-zinc-950"
          autoComplete="off"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-1 flex flex-col">
        <label htmlFor="description" className="text-sm font-medium">
          Descrição
        </label>
        <input
          type="text"
          id="description"
          {...register("description")}
          className="text-zinc-700 duration-200 bg-zinc-100 py-1 px-2 rounded outline-none border border-zinc-200 hover:border-zinc-950"
          autoComplete="off"
        />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div className="space-y-1 flex flex-col mb-4">
        <label htmlFor="value" className="text-sm font-medium">
          Valor
        </label>
        <input
          id="value"
          type="number"
          step="0.1"
          {...register("value")}
          className="text-zinc-700 duration-200 bg-zinc-100 py-1 px-2 rounded outline-none border border-zinc-200 hover:border-zinc-950"
          autoComplete="off"
        />
        {errors.value && (
          <p className="text-sm text-red-500">{errors.value.message}</p>
        )}
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline" className="cursor-pointer">
            Cancelar
          </Button>
        </DialogClose>
        <Button
          type="submit"
          className="hover:bg-zinc-700 cursor-pointer hover:text-zinc-100 transition"
        >
          Salvar
        </Button>
      </DialogFooter>
    </form>
  );
};

export default NewServiceForm;
