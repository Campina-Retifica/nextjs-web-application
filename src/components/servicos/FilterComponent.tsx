"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, Users, Clock, DollarSign, Star } from "lucide-react";

// Tipos de filtro disponíveis
const filterOptions = [
  {
    value: "all",
    label: "Todos os Serviços",
    icon: <Users className="w-4 h-4" />,
  },
  {
    value: "individual",
    label: "Pessoa Física",
    icon: <Users className="w-4 h-4" />,
  },
  {
    value: "business",
    label: "Pessoa Jurídica",
    icon: <DollarSign className="w-4 h-4" />,
  },
  {
    value: "urgent",
    label: "Casos Urgentes",
    icon: <Clock className="w-4 h-4" />,
  },
];

// Dados dos serviços (exemplo)
const services = [
  {
    id: 1,
    title: "Divórcio Consensual",
    category: "individual",
    description: "Processo de divórcio amigável entre as partes",
    price: "R$ 2.500",
    duration: "30-45 dias",
    urgent: false,
    rating: 4.9,
  },
  {
    id: 2,
    title: "Constituição de Empresa",
    category: "business",
    description: "Abertura e regularização de pessoa jurídica",
    price: "R$ 1.800",
    duration: "15-20 dias",
    urgent: false,
    rating: 4.8,
  },
  {
    id: 3,
    title: "Habeas Corpus",
    category: "urgent",
    description: "Defesa em casos de prisão ilegal ou abuso de autoridade",
    price: "R$ 5.000",
    duration: "24-48 horas",
    urgent: true,
    rating: 4.9,
  },
  {
    id: 4,
    title: "Contrato de Compra e Venda",
    category: "individual",
    description: "Elaboração e revisão de contratos imobiliários",
    price: "R$ 800",
    duration: "5-7 dias",
    urgent: false,
    rating: 4.7,
  },
  {
    id: 5,
    title: "Compliance Empresarial",
    category: "business",
    description: "Adequação às normas e regulamentações",
    price: "R$ 8.000",
    duration: "60-90 dias",
    urgent: false,
    rating: 4.8,
  },
  {
    id: 6,
    title: "Mandado de Segurança",
    category: "urgent",
    description: "Proteção contra atos ilegais de autoridade pública",
    price: "R$ 3.500",
    duration: "48-72 horas",
    urgent: true,
    rating: 4.9,
  },
  {
    id: 7,
    title: "Inventário",
    category: "individual",
    description: "Partilha de bens em casos de herança",
    price: "R$ 4.500",
    duration: "90-120 dias",
    urgent: false,
    rating: 4.6,
  },
  {
    id: 8,
    title: "Recuperação Judicial",
    category: "business",
    description: "Reestruturação de dívidas empresariais",
    price: "R$ 15.000",
    duration: "180-365 dias",
    urgent: false,
    rating: 4.7,
  },
];

export function ServicesFilter() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Filtrar serviços baseado na seleção
  const filteredServices = services.filter((service) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "urgent") return service.urgent;
    return service.category === selectedFilter;
  });

  const selectedOption = filterOptions.find(
    (option) => option.value === selectedFilter
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header com filtro */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Nossos Serviços Jurídicos</h1>
        <p className="text-slate-600 mb-6">
          Encontre o serviço jurídico ideal para sua necessidade. Use o filtro
          abaixo para refinar sua busca.
        </p>

        {/* Select Filter */}
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

        {/* Contador de resultados */}
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span>Mostrando</span>
          <Badge variant="secondary">{filteredServices.length}</Badge>
          <span>
            {filteredServices.length === 1 ? "serviço" : "serviços"}
            {selectedFilter !== "all" && ` em "${selectedOption?.label}"`}
          </span>
        </div>
      </div>

      {/* Grid de serviços */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Card
            key={service.id}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{service.title}</CardTitle>
                {service.urgent && (
                  <Badge className="bg-red-500 hover:bg-red-600">Urgente</Badge>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{service.rating}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4 text-sm">
                {service.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Preço:</span>
                  <span className="font-semibold text-green-600">
                    {service.price}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Prazo:</span>
                  <span className="font-medium">{service.duration}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1" size="sm">
                  Solicitar
                </Button>
                <Button variant="outline" size="sm">
                  Saiba Mais
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mensagem quando não há resultados */}
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
