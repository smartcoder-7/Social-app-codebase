import { HttpStatusCode } from "./httpStatusCode";

export class AppError extends Error {
  public readonly name: string;
  public readonly httpCode: HttpStatusCode;
  public readonly isOperational: boolean;

  constructor(
    name: string,
    httpCode: HttpStatusCode,
    description: string,
    isOperational: boolean,
  ) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

// commonly used http errors
export class HTTP400Error extends AppError {
  constructor(description = 'BAD_REQUEST') {
    super('HTTP400Error', HttpStatusCode.BAD_REQUEST, description, true);
  }
}

export class HTTP401Error extends AppError {
  constructor(description = 'UNAUTHOURIZED') {
    super('HTTP401Error', HttpStatusCode.UNAUTHORIZED, description, true);
  }
}

export class HTTP403Error extends AppError {
  constructor(description = 'FORBIDDEN') {
    super('HTTP403Error', HttpStatusCode.FORBIDDEN, description, true);
  }
}

export class HTTP404Error extends AppError {
  constructor(description = 'NOT FOUND') {
    super('HTTP404Error', HttpStatusCode.NOT_FOUND, description, true);
  }
}
