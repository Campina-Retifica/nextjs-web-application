"use client";
import { Filter, RefreshCcw } from "lucide-react";
import { tServicos } from "@/types/api_data";
import ServicosCard from "../global/ServicosCard";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { getServices } from "@/services/services/retificaServices";
import React from "react";
import { Button } from "../ui/button";

export function ServicosList() {
  const [size, setSize] = React.useState(6);
  const [servicos, setServicos] = React.useState<tServicos[]>();

  React.useEffect(() => {
    const handleGetServices = async () => {
      const servicos: tServicos[] = await getServices(size);
      setServicos(servicos);
    };
    handleGetServices();
  }, [size]);
  return (
    <div className="max-w-full p-0 flex flex-col">
      <div className="flex items-center justify-between gap-2 text-sm text-slate-600 my-6">
        <div className="flex items-center gap-2">
          <span>Mostrando</span>
          <Badge variant="secondary">{servicos ? servicos.length : 0}</Badge>
          <span>
            {servicos && servicos.length === 1 ? "serviço" : "serviços"}
          </span>
        </div>
        {servicos && (
          <Button
            className="group cursor-pointer"
            onClick={() => {
              if (size > servicos.length || size === servicos.length)
                setSize((size) => size + 1);
              else setSize((size) => size + 6);
            }}
          >
            <RefreshCcw
              className="group group-hover:rotate-180 transition duration-600"
              width={12}
              height={12}
            />
          </Button>
        )}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicos &&
          servicos.length > 0 &&
          servicos.map((service) => (
            <ServicosCard key={service.id} service={service} />
          ))}

        {(!servicos || servicos.length === 0) && (
          <div className="text-center py-12 mx-auto col-end-3">
            <div className="text-slate-400 mb-4">
              <Filter className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Nenhum serviço encontrado.
            </h3>
            <p>
              Se estiver enfrentando problemas, fale com o suporte clicando
              {`  `}
              <Link
                href={"https://encurtador.com.br/wvvX9"}
                className="underline"
              >
                aqui.
              </Link>
            </p>
          </div>
        )}
      </div>
      {servicos && servicos.length > 0 && (
        <div className="mt-8 flex items-center justify-center w-full">
          {servicos && servicos.length > 0 && size === servicos.length ? (
            <Button
              className="shadow-transparent bg-transparent hover:bg-transparent hover:text-text-zinc-900 hover:scale-105 cursor-pointer text-zinc-900 underline"
              onClick={() => setSize((size) => (size += 6))}
            >
              Buscar mais Serviços
            </Button>
          ) : (
            <p className="text-zinc-900 ">Não há mais nenhum serviço.</p>
          )}
        </div>
      )}
    </div>
  );
}
