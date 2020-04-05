import http from 'http';
import { logger } from './shared/logger';
import express, { Application } from 'express';
import Knex from 'knex';
import { Model } from 'objection';
import { errorHandler } from './shared/errorHandler';
import {
  handleBodyRequestParsing,
  handleCompression,
  handleCors,
  errorDelivery,
} from './shared/middleware';
import { apiRouter } from './apiRouter';
import { applyMiddleware } from './shared/utilities';
import { createApolloServer } from './gql/gqlServerInitializer';
import knexFile from '../knexfile';

const { PORT, NODE_ENV } = process.env;
const knex = Knex(knexFile[NODE_ENV || 'development']);

Model.knex(knex);

const app: Application = express();
app.set('port', PORT);

applyMiddleware(
  [handleCors, handleBodyRequestParsing, handleCompression],
  app,
);
app.use('/api', apiRouter);
app.use(errorDelivery);

process.on('uncaughtException', async (error: Error) => {
  await errorHandler.handleError(error);
  if (!errorHandler.isTrustedError(error)) {
    process.exit(1);
  }
});

const gqlServer = createApolloServer();
gqlServer.applyMiddleware({ app, path: "/gql" });

const server = http.createServer(app);
server.listen(PORT, () => {
  logger.info(`The server is running at ${PORT}`);
});

