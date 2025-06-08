import React from "react";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  newProvidedServiceSchema,
  TNewProvidedServiceSchema,
} from "@/types/payloadSchemas";
import { postNewProvidedService } from "@/services/services/retificaServices";

const NewProvidedServiceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TNewProvidedServiceSchema>({
    resolver: zodResolver(newProvidedServiceSchema),
  });

  const onSubmit = async (data: TNewProvidedServiceSchema) => {
    await postNewProvidedService(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
      <div className="space-y-1 flex flex-col">
        <label htmlFor="serviceId" className="text-sm font-medium">
          ID do Serviço
        </label>
        <input
          id="serviceId"
          type="number"
          {...register("serviceId")}
          className="text-zinc-700 bg-zinc-100 py-1 px-2 rounded border border-zinc-200 outline-none hover:border-zinc-950"
        />
        {errors.serviceId && (
          <p className="text-sm text-red-500">{errors.serviceId.message}</p>
        )}
      </div>

      <div className="space-y-1 flex flex-col">
        <label htmlFor="customerId" className="text-sm font-medium">
          ID do Cliente
        </label>
        <input
          id="customerId"
          type="number"
          {...register("customerId")}
          className="text-zinc-700 bg-zinc-100 py-1 px-2 rounded border border-zinc-200 outline-none hover:border-zinc-950"
        />
        {errors.customerId && (
          <p className="text-sm text-red-500">{errors.customerId.message}</p>
        )}
      </div>

      <div className="space-y-1 flex flex-col">
        <label htmlFor="startDate" className="text-sm font-medium">
          Início do serviço
        </label>
        <input
          id="startDate"
          type="datetime-local"
          {...register("startDate")}
          className="text-zinc-700 bg-zinc-100 py-1 px-2 rounded border border-zinc-200 outline-none hover:border-zinc-950"
        />
        {errors.startDate && (
          <p className="text-sm text-red-500">{errors.startDate.message}</p>
        )}
      </div>

      <div className="space-y-1 flex flex-col mb-4">
        <label htmlFor="endDate" className="text-sm font-medium">
          Fim do serviço
        </label>
        <input
          id="endDate"
          type="datetime-local"
          {...register("endDate")}
          className="text-zinc-700 bg-zinc-100 py-1 px-2 rounded border border-zinc-200 outline-none hover:border-zinc-950"
        />
        {errors.endDate && (
          <p className="text-sm text-red-500">{errors.endDate.message}</p>
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

export default NewProvidedServiceForm;
