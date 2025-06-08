"use client";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, Users, Clock, DollarSign } from "lucide-react";
import PrestadosCard from "../global/PrestadosCard";
import { tServicosPrestados } from "@/types/api_data";
import { getProvidedServices } from "@/services/services/retificaServices";
import Link from "next/link";

const filterOptions = [
  {
    value: "all",
    label: "Todos os Serviços",
    icon: <Users className="w-4 h-4" />,
  },
  {
    value: "COMPLETED",
    label: "Concluídos",
    icon: <Users className="w-4 h-4" />,
  },
  {
    value: "CANCELED",
    label: "Cancelados",
    icon: <Users className="w-4 h-4" />,
  },
  {
    value: "PENDING",
    label: "Pendentes",
    icon: <DollarSign className="w-4 h-4" />,
  },
  {
    value: "IN_PROGRESS",
    label: "Em andamento",
    icon: <Clock className="w-4 h-4" />,
  },
];

export function ServicesFilter() {
  const [size, setSize] = useState(5);
  const [servicosPrestados, setServicosPrestados] =
    useState<tServicosPrestados[]>();

  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredServices = servicosPrestados?.filter((service) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "PENDING") return service.status === "PENDING";
    if (selectedFilter === "IN_PROGRESS")
      return service.status === "IN_PROGRESS";
    if (selectedFilter === "COMPLETED") return service.status === "COMPLETED";
    if (selectedFilter === "CANCELED") return service.status === "CANCELED";
  });
  const selectedOption = filterOptions.find(
    (option) => option.value === selectedFilter
  );

  useEffect(() => {
    const handleGetServices = async () => {
      const servicos: tServicosPrestados[] = await getProvidedServices(size);
      setServicosPrestados(servicos);
    };
    handleGetServices();
  }, [size]);
  return (
    <div className="max-w-full p-0">
      <div className="my-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-slate-500" />
            <span className="font-medium">Filtrar por:</span>
          </div>
          <Select value={selectedFilter} onValueChange={setSelectedFilter}>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Selecione uma categoria">
                <div className="flex items-center gap-2">
                  {selectedOption?.icon}
                  <span>{selectedOption?.label}</span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {filterOptions.length > 0 &&
                filterOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center gap-2">
                      {option.icon}
                      <span>{option.label}</span>
                    </div>
                  </SelectItem>
                ))}
              {filterOptions.length === 0 && (
                <p>Nenhum serviço prestado foi cadastrado até então.</p>
              )}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <span>Mostrando</span>
          <Badge variant="secondary">
            {filteredServices ? filteredServices.length : 0}
          </Badge>
          <span>
            {filteredServices && filteredServices.length === 1
              ? "serviço"
              : "serviços"}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices &&
          filteredServices.length > 0 &&
          filteredServices.map((service) => (
            <PrestadosCard key={service.id} service={service} />
          ))}

        {(!filteredServices || filteredServices.length === 0) && (
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
      {filteredServices && filteredServices.length > 0 && (
        <div className="mt-8 flex items-center justify-center w-full">
          {filteredServices &&
          filteredServices.length > 0 &&
          size === filteredServices.length ? (
            <Button
              className="shadow-transparent bg-transparent hover:bg-transparent hover:text-text-zinc-900 hover:scale-105 cursor-pointer text-zinc-900 underline"
              onClick={() => setSize((size) => (size += 5))}
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
