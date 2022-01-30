import { Router } from 'express';

import { UsersController } from '../controllers/UsersController';
import { createUserValidator, updateUserValidator } from '../middlewares/validators';

export const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/', createUserValidator, usersController.create);
usersRouter.get('/', usersController.read);
usersRouter.get('/:id', usersController.get);
usersRouter.patch('/:id', updateUserValidator, usersController.update);
usersRouter.delete('/:id', usersController.delete);
