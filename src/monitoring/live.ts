import express from 'express';

// this can usually stay as it is
export const getLiveness: express.RequestHandler = async (
  req: express.Request,
  res: express.Response
) => {
  res.sendStatus(200);
};
