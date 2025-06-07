import { ServicesFilter } from "@/components/servicosPrestados/ComponenteFiltragem";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const servicosPrestadosPage = () => {
  return (
    <main className="w-full px-10 py-[2rem] flex flex-col rounded-2xl bg-zinc-50 poppins overflow-y-scroll">
      <div className="flex flex-col md:flex-row justify-between md:items-center w-full pb-4 border-b border-b-neutral-900/50 gap-6">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-zinc-900">
            Nossos Serviços prestados
          </h1>
          <p className="text-zinc-900/80 mb-4">
            Encontre os serviços prestados pela <strong>retífica</strong>. Use o
            filtro abaixo para refinar sua busca.
          </p>
        </div>
        <Button className="max-w-[200px] hover:text-zinc-900 bg-neutral-900 p-0 cursor-pointer hover:bg-zinc-900/30">
          <p className="">Prestar novo serviço </p>
          <Plus width={16} height={16} />
        </Button>
      </div>
      <ServicesFilter />
    </main>
  );
};

export default servicosPrestadosPage;
