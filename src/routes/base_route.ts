import { RequestHandler } from 'express';
import Joi from '@hapi/joi';
import HTTPStatusCodes from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

const validator = Joi.object({});

export const baseRoute: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { error } = validator.validate(req.body);
  if (error) {
    return next(error);
  }

  res.status(HTTPStatusCodes.OK).json({ root: 'Hello world' });
};
