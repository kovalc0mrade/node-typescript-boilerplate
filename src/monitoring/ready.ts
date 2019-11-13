import express from 'express';

const areDependenciesReady = async () => true;

// here we need to add a proper check whether dependencies are ready
export const getReadiness: express.RequestHandler = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const isReady = await areDependenciesReady();
    res.sendStatus(isReady ? 200 : 503);
  } catch (error) {
    next(error);
  }
};
