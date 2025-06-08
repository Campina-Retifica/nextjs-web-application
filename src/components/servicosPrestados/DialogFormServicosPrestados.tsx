"use client";

import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import NewProvidedServiceForm from "../form/NewServicoPrestadoForm";
import { Plus } from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";

export function DialogFormServicosPrestados() {
  return (
    <Dialog>
      <DialogTrigger asChild className="poppins">
        <Button variant="default">
          <p>Novo serviço Prestado</p>
          <Plus width={16} height={16} />
        </Button>
      </DialogTrigger>

      <DialogContent
        aria-describedby={
          "Formulário para a criação de um novo serviço da retífica"
        }
        className="poppins"
      >
        <DialogHeader className="gap-1">
          <DialogTitle className="text-zinc-900 text-2xl font-bold">
            Cadastrar novo serviço prestado
          </DialogTitle>
          <DialogDescription className="text-zinc-900/60 text-[1rem] ml-[2px]">
            Preencha todos os campos abaixo para conseguir efetuar a criação.
          </DialogDescription>
        </DialogHeader>
        <NewProvidedServiceForm />
      </DialogContent>
    </Dialog>
  );
}
