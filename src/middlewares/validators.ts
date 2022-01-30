import { Joi, celebrate } from "celebrate";

export const createUserValidator = celebrate({
  body: Joi.object().keys({
    nome: Joi.string().required(),
    email: Joi.string().required().email(),
    endereco: Joi.string().required(),
  })
});

export const updateUserValidator = celebrate({
  body: Joi.object().keys({
    nome: Joi.string(),
    email: Joi.string().email(),
    endereco: Joi.string(),
  })
});