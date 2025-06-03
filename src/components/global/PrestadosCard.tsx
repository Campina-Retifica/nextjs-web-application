import { Badge } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { tServicoPrestado } from "../types/monorepo";

const PrestadosCard = ({ service }: { service: tServicoPrestado }) => {
  return (
    <Card
      key={
        service.data_inicio +
        service.id_servico +
        service.id_cliente +
        service.data_fim
      }
      className="hover:shadow-lg transition-shadow duration-300"
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">Not Yet</CardTitle>
          {service.status && (
            <Badge
              className={`rounded-full p-1 ${
                service.status === "pendente" && "bg-red-500 hover:bg-red-600"
              } ${
                service.status === "em_andamento" &&
                "bg-yellow-500 hover:bg-yellow-600"
              } ${
                service.status === "concluido" &&
                "bg-green-500 hover:bg-green-600"
              }`}
            >
              {service.status}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-500">Preço:</span>
            <span className="font-semibold text-green-600">R$ 1200</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-500">
              Início: {service.data_inicio}
            </span>
            <span className="text-sm text-slate-500">
              Fim: {service.data_inicio}
            </span>
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
  );
};

export default PrestadosCard;
