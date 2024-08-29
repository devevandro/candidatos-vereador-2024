import { Candidates } from "@/models/candidates";
import { Candidato } from "@/models/datas";

export const DataMapper = (data: Candidato): Candidates => {
  return {
    id: data?.id,
    nome: data?.nomeCompleto,
    nomeUrna: data?.nomeUrna,
    numero: data?.numero,
    nomeColigacao: data?.nomeColigacao,
    dataDeNascimento: data?.dataDeNascimento,
    reeleicao: data?.st_REELEICAO,
  };
};
