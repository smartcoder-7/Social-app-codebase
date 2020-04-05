import { Router, Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import parser from 'body-parser';
import compression from 'compression';
import { errorHandler } from './errorHandler';

export const handleCors = (app: Router | Application) =>
  app.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (app: Router | Application) => {
  app.use(parser.urlencoded({ extended: true }));
  app.use(parser.json());
};

export const handleCompression = (app: Router | Application) => {
  app.use(compression());
};

export const errorDelivery = async (
  err: Error,
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  await errorHandler.handleError(err);
  const isOperationalError = errorHandler.isTrustedError(err);
  if (!isOperationalError) {
    next(err);
  }
};
