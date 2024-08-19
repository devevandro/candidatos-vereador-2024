import { Candidatos } from "@/models/candidates";
import { Candidato } from "@/models/datas";

export const DataMapper = (data: Candidato): Candidatos => {
  return {
    id: data.id,
    nome: data.nomeCompleto,
    nomeUrna: data.nomeUrna,
    numero: data.numero,
  };
};
