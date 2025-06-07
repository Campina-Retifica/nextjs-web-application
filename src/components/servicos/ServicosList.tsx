import { Filter } from "lucide-react";
import { tServicos } from "@/types/api_data";
import ServicosCard from "../global/ServicosCard";
import { Badge } from "../ui/badge";
import Link from "next/link";

type Props = {
  servicos: tServicos[];
};

export function ServicosList({ servicos }: Props) {
  return (
    <div className="max-w-full p-0">
      <div className="flex items-center gap-2 text-sm text-slate-600 my-6">
        <span>Mostrando</span>
        <Badge variant="secondary">{servicos ? servicos.length : 0}</Badge>
        <span>
          {servicos && servicos.length === 1 ? "serviço" : "serviços"}
        </span>
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
    </div>
  );
}
