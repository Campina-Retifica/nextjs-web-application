import { Badge, Pencil } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { eStatusServicos, tServicosPrestados } from "@/types/api_data";

const PrestadosCard = ({ service }: { service: tServicosPrestados }) => {
  return (
    <Card
      key={service.id}
      className="hover:shadow-lg transition-shadow duration-300"
    >
      <CardHeader>
        <div className="flex items-start justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <CardTitle className="text-lg">{service.serviceName}</CardTitle>
            {service.status && (
              <Badge
                className={`rounded-full p-1 ${
                  service.status === eStatusServicos.PENDING &&
                  "bg-red-500 hover:bg-red-600"
                } ${
                  service.status === eStatusServicos.IN_PROGRESS &&
                  "bg-yellow-500 hover:bg-yellow-600"
                } ${
                  service.status === eStatusServicos.COMPLETED &&
                  "bg-green-500 hover:bg-green-600"
                }
              ${
                service.status === eStatusServicos.CANCELED &&
                "bg-gray-500 hover:bg-gray-600"
              }
              `}
              >
                {service.status}
              </Badge>
            )}
          </div>
          <CardDescription>
            Para: <span className="text-zinc-900">{service.customerName}</span>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-500">
              Início: {`${service.startDate.split("T")[0]}`}
            </span>
            <span className="text-sm text-slate-500">
              Fim: {`${service.endDate.split("T")[0]}`}
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 cursor-pointer" size="sm">
            Concluir
          </Button>
          <Button variant="outline" size="sm" className="cursor-pointer">
            <Pencil width={12} height={12} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrestadosCard;
