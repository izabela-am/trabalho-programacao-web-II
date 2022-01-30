import { Request, Response } from 'express';
import { v4 } from 'uuid';

import { ICreateBody, IPatchBody, IUsers } from './interfaces';
import { database } from '../database';

export class UsersController {
  create(request: Request<any, any, ICreateBody>, response: Response): Response {
    const { nome, email, endereco } = request.body;

    const user: IUsers = {
      id: v4(),
      nome,
      email,
      endereco
    };

    database.push(user);

    return response.status(200).json(user);
  }

  read(request: Request, response: Response): Response {
    const users = database;

    return response.status(200).json(users);
  }

  get(request: Request, response: Response): Response {
    const { id } = request.params;

    const user = database.find(user => user.id === id);

    if (!user) {
      throw new Error(`Nenhum usuário cadastrado com o id [${id}]`);
    }

    return response.status(200).json(user);
  }

  update(request: Request<any, any, IPatchBody>, response: Response): Response {
    const { id } = request.params;

    const { nome, email, endereco } = request.body;

    const user = database.find(user => user.id === id);
    const index = database.findIndex(user => user.id === id);

    if (!user) {
      throw new Error('Erro! Usuário não encontrado!');
    }

    const data = {
      nome: nome || user.nome,
      email: email || user.email,
      endereco: endereco || user.endereco
    };

    database[index] = Object.assign(user, data);

    return response.status(200).json(user);
  }

  delete(request: Request, response: Response): Response {
    const { id } = request.params;

    const user = database.find(user => user.id === id);
    const index = database.findIndex(user => user.id === id);

    if (!user) {
      throw new Error('Erro! Usuário não encontrado!');
    }

    database.splice(index, 1);

    return response.status(200).json();
  }
}