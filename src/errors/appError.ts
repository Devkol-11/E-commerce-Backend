// errors/AppError.ts
import { BaseError } from './baseError.js';

export class AppError extends BaseError {
  public statusCode: number;

  constructor(message: string, statusCode: number = 500, details?: any) {
    super(message, details);
    this.statusCode = statusCode;
  }
}
