import express, { Router } from 'express';
import { isDevEnvironment } from './shared/utilities';

const apiRouter: Router = express.Router();

apiRouter.get('/', (_req, res) => {
  res.json({ text: `Hello, world.  Env: ${process.env.NODE_ENV}.  Is dev?: ${isDevEnvironment() ? 'yes' : 'no'}` });
});

export { apiRouter };
