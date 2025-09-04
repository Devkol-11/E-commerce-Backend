import { Request, Response, NextFunction } from 'express';

class AuthController {
  constructor(private userService: any) {}

  public async SignUp(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {}
  public async SignIn(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {}
  public async SignOut(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {}
  public async forgotPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {}
  public async resetPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {}
}
