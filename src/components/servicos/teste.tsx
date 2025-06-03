"use client";
import { useState } from "react";
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
import { tServicoPrestado } from "../types/monorepo";
import PrestadosCard from "../global/PrestadosCard";

const filterOptions = [
  {
    value: "all",
    label: "Todos os Serviços",
    icon: <Users className="w-4 h-4" />,
  },
  {
    value: "concluido",
    label: "Concluídos",
    icon: <Users className="w-4 h-4" />,
  },
  {
    value: "pendente",
    label: "Pendentes",
    icon: <DollarSign className="w-4 h-4" />,
  },
  {
    value: "em_andamento",
    label: "Em andamento",
    icon: <Clock className="w-4 h-4" />,
  },
];

const services: tServicoPrestado[] = [
  {
    id_servico: "srv001",
    id_cliente: "cli001",
    data_inicio: "2025-06-01",
    data_fim: "2025-06-02",
    status: "pendente",
    pago: false,
  },
  {
    id_servico: "srv002",
    id_cliente: "cli002",
    data_inicio: "2025-05-28",
    data_fim: "2025-05-29",
    status: "concluido",
    pago: true,
  },
  {
    id_servico: "srv003",
    id_cliente: "cli003",
    data_inicio: "2025-05-25",
    data_fim: "2025-05-27",
    status: "em_andamento",
    pago: false,
  },
  {
    id_servico: "srv004",
    id_cliente: "cli004",
    data_inicio: "2025-06-01",
    data_fim: "2025-06-01",
    status: "pendente",
    pago: false,
  },
  {
    id_servico: "srv005",
    id_cliente: "cli005",
    data_inicio: "2025-05-20",
    data_fim: "2025-05-21",
    status: "concluido",
    pago: true,
  },
  {
    id_servico: "srv006",
    id_cliente: "cli006",
    data_inicio: "2025-05-22",
    data_fim: "2025-05-23",
    status: "pendente",
    pago: false,
  },
  {
    id_servico: "srv007",
    id_cliente: "cli007",
    data_inicio: "2025-05-24",
    data_fim: "2025-05-25",
    status: "em_andamento",
    pago: false,
  },
  {
    id_servico: "srv008",
    id_cliente: "cli008",
    data_inicio: "2025-05-26",
    data_fim: "2025-05-27",
    status: "concluido",
    pago: true,
  },
  {
    id_servico: "srv009",
    id_cliente: "cli009",
    data_inicio: "2025-05-28",
    data_fim: "2025-05-29",
    status: "pendente",
    pago: false,
  },
  {
    id_servico: "srv010",
    id_cliente: "cli010",
    data_inicio: "2025-05-30",
    data_fim: "2025-05-30",
    status: "pendente",
    pago: false,
  },
  {
    id_servico: "srv011",
    id_cliente: "cli011",
    data_inicio: "2025-05-21",
    data_fim: "2025-05-22",
    status: "concluido",
    pago: true,
  },
  {
    id_servico: "srv012",
    id_cliente: "cli012",
    data_inicio: "2025-05-23",
    data_fim: "2025-05-24",
    status: "em_andamento",
    pago: false,
  },
  {
    id_servico: "srv013",
    id_cliente: "cli013",
    data_inicio: "2025-05-25",
    data_fim: "2025-05-26",
    status: "pendente",
    pago: false,
  },
  {
    id_servico: "srv014",
    id_cliente: "cli014",
    data_inicio: "2025-05-27",
    data_fim: "2025-05-28",
    status: "concluido",
    pago: true,
  },
  {
    id_servico: "srv015",
    id_cliente: "cli015",
    data_inicio: "2025-05-29",
    data_fim: "2025-05-30",
    status: "pendente",
    pago: false,
  },
  {
    id_servico: "srv016",
    id_cliente: "cli016",
    data_inicio: "2025-05-31",
    data_fim: "2025-06-01",
    status: "em_andamento",
    pago: false,
  },
  {
    id_servico: "srv017",
    id_cliente: "cli017",
    data_inicio: "2025-06-01",
    data_fim: "2025-06-01",
    status: "pendente",
    pago: false,
  },
  {
    id_servico: "srv018",
    id_cliente: "cli018",
    data_inicio: "2025-06-02",
    data_fim: "2025-06-03",
    status: "concluido",
    pago: true,
  },
  {
    id_servico: "srv019",
    id_cliente: "cli019",
    data_inicio: "2025-06-03",
    data_fim: "2025-06-04",
    status: "em_andamento",
    pago: false,
  },
  {
    id_servico: "srv020",
    id_cliente: "cli020",
    data_inicio: "2025-06-05",
    data_fim: "2025-06-06",
    status: "pendente",
    pago: false,
  },
];

export function ServicesFilter() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredServices = services.filter((service) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "pendente") return service.status === "pendente";
    if (selectedFilter === "em_andamento")
      return service.status === "em_andamento";
    if (selectedFilter === "concluido") return service.status === "concluido";
  });

  const selectedOption = filterOptions.find(
    (option) => option.value === selectedFilter
  );

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
              {filterOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <div className="flex items-center gap-2">
                    {option.icon}
                    <span>{option.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span>Mostrando</span>
          <Badge variant="secondary">{filteredServices.length}</Badge>
          <span>
            {filteredServices.length === 1 ? "serviço" : "serviços"}
            {selectedFilter !== "all" && ` em "${selectedOption?.label}"`}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <PrestadosCard
            key={
              service.data_inicio +
              service.id_cliente +
              service.id_servico +
              service.status +
              service.data_fim
            }
            service={service}
          />
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 mb-4">
            <Filter className="w-16 h-16 mx-auto mb-4" />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Nenhum serviço encontrado
          </h3>
          <p className="text-slate-600 mb-4">
            Não encontramos serviços para o filtro selecionado. Tente uma
            categoria diferente.
          </p>
          <Button onClick={() => setSelectedFilter("all")} variant="outline">
            Ver Todos os Serviços
          </Button>
        </div>
      )}
    </div>
  );
}
