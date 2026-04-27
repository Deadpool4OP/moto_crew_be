import type { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';
import httpStatus from 'http-status';
import { ApiError } from '../utils/ApiError.js';

export const validate = (schema: z.ZodTypeAny) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('Validating request body:', JSON.stringify(req.body, null, 2));
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = error.issues.map((details) => `${details.path.join('.')}: ${details.message}`).join(', ');
        console.error('Validation Error:', errorMessage);
        return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
      }
      return next(error);
    }
  };
};
