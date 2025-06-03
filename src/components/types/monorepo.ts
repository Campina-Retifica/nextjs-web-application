export type tServicoPrestado = {
  id_servico: string;
  id_cliente: string;
  data_inicio: string;
  data_fim: string;
  status: "pendente" | "concluido" | "em_andamento";
  pago: boolean;
};

export type tCliente = {
  id: string;
  primeiro_nome: string;
  nome_do_meio: string;
  ultimo_nome: string;
  documento: string;
  email: string;
  telefone: string;
  id_endereco: string;
  status: "ativo" | "inativo";
};

export type tServico = {
  id: string;
  nome: string;
  descricao: string;
  valor: number;
  status: string;
};

export type tEndereco = {
  id: string;
  id_cliente: string;
  rua: string;
  numero: number;
  bairro: string;
  complemento: string;
  cidade: string;
  estado: string;
};
