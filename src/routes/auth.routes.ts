import { Router } from 'express';
import { validate } from '../middlewares/validateSchema.js';
import * as authController from '../controllers/auth.controller.js';
import {
  forgotPasswordSchema,
  resetPasswordSchema,
  signInSchema,
  signUpSchema,
} from '../schemas/authSchemas.js';
const authRouter = Router();

authRouter.post('/signUp', validate(signUpSchema), authController.signUp);
authRouter.post('/signIn', validate(signInSchema), authController.signIn);
authRouter.post(
  '/forgot-password',
  validate(forgotPasswordSchema),
  authController.forgot_Password
);
authRouter.post(
  '/reset-password',
  validate(resetPasswordSchema),
  authController.reset_Password
);
authRouter.post('/signOut', authController.signOut);
export default authRouter;
