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

export enum eStatusServicos {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

export type tCliente = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  document: string;
  email: string;
  telephone: string;
};
