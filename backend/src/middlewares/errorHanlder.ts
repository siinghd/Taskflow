import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger/logger';

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error({
    message: err.message || 'Internal server error. Errore interno del server',
    meta: {
      stack: err.stack || '',
      status: err.status || 500,
      method: 'errorHandler',
    },
  });
  return res.status(err.status).json({
    status: err.status,
    success: false,
    message: err.message,
  });
};

export = errorHandler;
