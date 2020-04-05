import { Wrapper } from "../types/types";
import { Application, Router } from "express";
import { readFileSync } from "fs";
import chalk from 'chalk';

export const isDevEnvironment = (): boolean => process.env.NODE_ENV === 'development';
export const isTestEnvironment = (): boolean => process.env.NODE_ENV === 'test';
export const isStagingEnvironment = (): boolean => process.env.NODE_ENV === 'staging';
export const isProdEnviroment = (): boolean => process.env.NODE_ENV === 'production';

export const applyMiddleware = (
  middlewareWrappers: Wrapper[],
  app: Router | Application,
) => {
  for (const wrapper of middlewareWrappers) {
    wrapper(app);
  }
};

export function getGraphqlSchema() {
  const pathToSchema = './dist/src/gqlTypes/schema.graphql';
  return readFileSync(pathToSchema).toString();
}

export const consoleLog = (o: any) => console.info(`${chalk.yellow(`[${new Date().toISOString()}]`)} ${o}`);
export const startupLog = (o: any) => consoleLog(`${chalk.cyan('[Startup]')} ${o}`);
