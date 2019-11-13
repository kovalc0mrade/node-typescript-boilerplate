import { NextFunction, Request, Response } from 'express';
import HttpStatus from 'http-status-codes';

export const pageNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new Error('Page Not Found');
  // @ts-ignore
  error.statusCode = HttpStatus.NOT_FOUND;
  next(error);
};
