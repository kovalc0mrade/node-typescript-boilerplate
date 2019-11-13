import { NextFunction, Request, Response } from 'express';
import HttpStatus from 'http-status-codes';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // @ts-ignore
  res.status(error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR);
  res.json({
    message: error.message || 'Internal error',
  });
};
