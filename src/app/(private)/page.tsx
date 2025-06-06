import { ServicesFilter } from "@/components/servicos/teste";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const servicosPrestadosPage = () => {
  return (
    <main className="w-full px-10 py-[2rem] flex flex-col rounded-2xl bg-zinc-50 poppins overflow-y-scroll">
      <div className="flex justify-between items-center w-full pb-4 border-b border-b-neutral-900/50">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-zinc-900">
            Nossos Serviços prestados
          </h1>
          <p className="text-zinc-900/80 mb-4">
            Encontre os serviços prestados pela <strong>retífica</strong>. Use o
            filtro abaixo para refinar sua busca.
          </p>
          {/* <p className="text-slate-600 mb-4">
            Encontre os serviços prestados ideal para sua necessidade. Use o filtro
            abaixo para refinar sua busca.
          </p> */}
        </div>
        <Button className="max-w-[200px] hover:text-zinc-900 bg-neutral-900 p-0 cursor-pointer hover:bg-zinc-900/30">
          Novo serviço <Plus width={16} height={16} />
        </Button>
      </div>
      <ServicesFilter />
    </main>
  );
};

export default servicosPrestadosPage;
