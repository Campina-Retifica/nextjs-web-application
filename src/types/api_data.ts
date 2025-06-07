export type tServicos = {
  id: number;
  name: string;
  description: string;
  value: number;
};

export type tServicosPrestados = {
  id: number;
  serviceName: string;
  customerName: string;
  startDate: string;
  endDate: string;
  status: eStatusServicos;
  paid: boolean;
};

export type tCliente = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  document: string;
  email: string;
  telephone: string;
};

export enum eStatusServicos {
  PENDING = "pendente",
  IN_PROGRESS = "em andamento",
  COMPLETED = "concluído",
  CANCELED = "cancelado",
}
