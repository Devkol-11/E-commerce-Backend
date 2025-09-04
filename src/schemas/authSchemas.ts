import Joi from 'joi';

//  Sign Up Schema
export const signUpSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// Sign In Schema
export const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// Forgot Password Schema
export const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

// Reset Password Schema

export const resetPasswordSchema = Joi.object({
  token: Joi.string().required(),
  newPassword: Joi.string().min(6).required(),
  confirmPassword: Joi.any()
    .equal(Joi.ref('newPassword'))
    .required()
    .messages({ 'any.only': 'Passwords do not match' }),
});
