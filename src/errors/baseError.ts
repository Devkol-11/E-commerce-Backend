// errors/BaseError.ts
export abstract class BaseError extends Error {
  public abstract statusCode: number;
  public isOperational: boolean;
  public details?: any;

  constructor(message: string, details?: any) {
    super(message);
    this.name = this.constructor.name;
    this.isOperational = true;
    this.details = details;

    // Capture stack trace (excluding constructor call)
    Error.captureStackTrace(this, this.constructor);
  }

  public toJSON() {
    return {
      name: this.name,
      message: this.message,
      statusCode: this.statusCode,
      details: this.details,
      ...(process.env.NODE_ENV === 'development' && { stack: this.stack }),
    };
  }
}
