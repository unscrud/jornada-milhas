import { UnidadeFederativa } from './unidade-federativa'

export interface usuario {
  nome: string,
  nascimento: string,
  cpf: string,
  telefone: string,
  email: string,
  senha: string,
  genero: string,
  cidade: string,
  estado: UnidadeFederativa
}
