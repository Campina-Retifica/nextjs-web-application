import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { tServicos } from "@/types/api_data";

const ServicosCard = ({ service }: { service: tServicos }) => {
  return (
    <Card
      key={service.id}
      className="hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
    >
      <CardHeader>
        <div className="flex flex-col items-start justify-between">
          <CardTitle className="text-lg">{service.name}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <p className="text-sm text-green-500">
            R$ <span className="text-zinc-900 text-2xl">{service.value}</span>
          </p>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1" size="sm">
            Prestar serviço
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicosCard;
