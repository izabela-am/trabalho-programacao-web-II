export interface IUsers {
  id: string;
  nome: string;
  email: string;
  endereco: string;
}

export interface IPatchBody {
  nome?: string;
  email?: string;
  endereco?: string;
}

export interface ICreateBody {
  nome: string;
  email: string;
  endereco: string;
}