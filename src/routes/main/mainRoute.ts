import { RequestHandler } from 'express';
import Joi from '@hapi/joi';
import HTTPStatusCodes from 'http-status-codes';

const validator = Joi.object({});

export const mainRoute: RequestHandler = async (req, res, next) => {
  const { error, value } = validator.validate(req.body);
  if (error) {
    return next(error);
  }

  res.status(HTTPStatusCodes.OK).json({root: "Hello world"});
};
