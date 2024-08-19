interface UnidadeEleitoral {
  id: number | null;
  sigla: string;
  nome: string;
  regiao: string | null;
  cargos: any | null;
  diretorios: any | null;
  codigo: string;
  capital: boolean;
  estado: string;
}

interface Cargo {
  codigo: number;
  sigla: string | null;
  nome: string;
  codSuperior: number;
  titular: boolean;
  contagem: number;
}

interface Partido {
  numero: number;
  sigla: string;
  nome: string | null;
  sqPrestadorConta: any | null;
}

interface Eleicao {
  id: number;
  siglaUF: string | null;
  localidadeSgUe: string | null;
  ano: number;
  codigo: string | null;
  nomeEleicao: string | null;
  tipoEleicao: string | null;
  turno: any | null;
  tipoAbrangencia: any | null;
  dataEleicao: any | null;
  codSituacaoEleicao: any | null;
  descricaoSituacaoEleicao: any | null;
  descricaoEleicao: string;
}

export interface Candidato {
  id: number;
  nomeUrna: string;
  numero: number;
  idCandidatoSuperior: any | null;
  nomeCompleto: string;
  descricaoSexo: string | null;
  dataDeNascimento: any | null;
  tituloEleitor: string;
  cpf: string | null;
  descricaoEstadoCivil: string | null;
  descricaoCorRaca: string | null;
  descricaoSituacao: string;
  nacionalidade: string | null;
  grauInstrucao: string | null;
  ocupacao: string | null;
  gastoCampanha1T: number | null;
  gastoCampanha2T: number | null;
  sgUfNascimento: string | null;
  nomeMunicipioNascimento: string | null;
  localCandidatura: string | null;
  ufCandidatura: string;
  ufSuperiorCandidatura: any | null;
  codigoSituacaoCandidatoSuperior: number;
  dataUltimaAtualizacao: any | null;
  fotoUrl: string | null;
  fotoUrlPublicavel: boolean;
  fotoDataUltimaAtualizacao: any | null;
  descricaoTotalizacao: string;
  nomeColigacao: string;
  composicaoColigacao: any | null;
  descricaoTipoDrap: any | null;
  numeroProcessoDrap: any | null;
  numeroProcessoDrapEncrypt: any | null;
  numeroProcesso: any | null;
  numeroProcessoEncrypt: any | null;
  numeroProcessoPrestContas: any | null;
  numeroProcessoPrestContasEncrypt: any | null;
  numeroProtocolo: any | null;
  cargo: Cargo;
  bens: any | null;
  totalDeBens: any | null;
  vices: any | null;
  partido: Partido;
  eleicao: Eleicao;
  emails: any | null;
  sites: any | null;
  arquivos: any | null;
  eleicoesAnteriores: any | null;
  substituto: any | null;
  motivos: any | null;
  motivoSituacao: any | null;
  codigoSituacaoCandidato: any | null;
  descricaoSituacaoCandidato: any | null;
  isCandidatoInapto: any | null;
  codigoSituacaoPartido: any | null;
  descricaoSituacaoPartido: any | null;
  isCandFechado: any | null;
  infoComplementar: any | null;
  cdSituacaoCassacao: any | null;
  cdSituacaoDiploma: any | null;
  legenda: any | null;
  descricaoNaturalidade: string;
  st_SUBSTITUIDO: any | null;
  candidatoApto: boolean;
  st_MOTIVO_FICHA_LIMPA: any | null;
  st_MOTIVO_ABUSO_PODER: any | null;
  st_REELEICAO: boolean;
  st_DIVULGA_ARQUIVOS: any | null;
  cnpjcampanha: any | null;
  gastoCampanha: number;
  st_MOTIVO_COMPRA_VOTO: any | null;
  st_MOTIVO_CONDUTA_VEDADA: any | null;
  st_MOTIVO_GASTO_ILICITO: any | null;
  ds_MOTIVO_OUTROS: any | null;
  st_MOTIVO_AUSENCIA_REQUISITO: any | null;
  st_MOTIVO_IND_PARTIDO: any | null;
  st_DIVULGA: any | null;
  st_DIVULGA_BENS: any | null;
}

interface DadosEleitorais {
  unidadeEleitoral: UnidadeEleitoral;
  cargo: Cargo;
  candidatos: Candidato[];
}
