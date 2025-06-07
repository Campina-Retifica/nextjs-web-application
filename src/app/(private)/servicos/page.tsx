import { DialogFormServicos } from "@/components/servicos/DialogFormServicos";
import { ServicosList } from "@/components/servicos/ServicosList";
import { getServices } from "@/services/services/retificaServices";
import { tServicos } from "@/types/api_data";

const ServicosPage = async () => {
  const servicos: tServicos[] = await getServices(10);

  return (
    <main className="w-full px-10 py-[2rem] flex flex-col rounded-2xl bg-zinc-50 poppins overflow-y-scroll">
      <div className="flex flex-col md:flex-row justify-between md:items-center w-full pb-4 border-b border-b-neutral-900/50 gap-6">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-zinc-900">
            Nossos Serviços
          </h1>
          <p className="text-zinc-900/80 mb-4">
            Encontre os serviços prestados pela <strong>retífica</strong>. Use o
            filtro abaixo para refinar sua busca.
          </p>
        </div>
        <DialogFormServicos />
      </div>
      <ServicosList servicos={servicos} />
    </main>
  );
};

export default ServicosPage;
