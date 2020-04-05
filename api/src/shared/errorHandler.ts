import { AppError } from './httpErrors';
import { logger } from './logger';

class ErrorHandler {
  public async handleError(err: Error): Promise<any> {
    await logger.error(
      'Error message in error handling centralized comoponents',
      err,
    );
  }

  public isTrustedError(error: Error) {
    if (error instanceof AppError) {
      return error.isOperational;
    }
    return false;
  }
}
export const errorHandler = new ErrorHandler();
