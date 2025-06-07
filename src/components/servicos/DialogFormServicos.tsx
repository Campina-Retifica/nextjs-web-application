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
import NewServiceForm from "../form/NewServiceForm";
import { Plus } from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";

export function DialogFormServicos() {
  return (
    <Dialog>
      <DialogTrigger asChild className="poppins">
        <Button variant="default">
          <p>Novo serviço</p>
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
            Cadastrar novo serviço
          </DialogTitle>
          <DialogDescription className="text-zinc-900/60 text-[1rem] ml-[2px]">
            Preencha os campos abaixo para cadastrar o novo serviço.
          </DialogDescription>
        </DialogHeader>
        <NewServiceForm />
      </DialogContent>
    </Dialog>
  );
}
