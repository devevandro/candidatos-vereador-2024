import { DataMapper } from "@/mappers";
import { Candidates } from "@/models/candidates";
import { Candidato } from "@/models/datas";
import { convertAge } from "@/utils";
import axios from "axios";

export const getCandidates = async (): Promise<Candidates[]> => {
  const { data } = await axios.get(
    `https://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2024/75256/2045202024/13/candidatos`
  );

  const values = data?.candidatos;
  return await Promise.all(
    values?.map(async (value: Candidato) => {
      const tst = await getCandidateBirthday(value?.id);
      return DataMapper({
        ...value,
        dataDeNascimento: convertAge(tst),
      });
    })
  );
};

export const getCandidateBirthday = async (idCandidate: number): Promise<string> => {
  const { data } = await axios.get(
    `https://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2024/75256/2045202024/candidato/${idCandidate}`
  );

  return data?.dataDeNascimento;
};
