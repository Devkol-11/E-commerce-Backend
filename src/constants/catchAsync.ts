import { Request, Response, NextFunction } from 'express';

export const catchAsyncWithNext = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch((error) => {
      // Pass error to Express error handling middleware
      next(error);
    });
  };
};
