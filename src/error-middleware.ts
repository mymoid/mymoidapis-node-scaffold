import {UnauthorizedError} from 'express-jwt'
import {Request, Response, NextFunction} from 'express'

function errorMiddleware(
  error: Error | UnauthorizedError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (res.headersSent) {
    next(error)
  } else if (error instanceof UnauthorizedError) {
    res.status(401)
    res.json({code: error.code, message: error.message})
  } else {
    res.status(500)
    res.json({
      message: error.message,
      // we only add a `stack` property in non-production environments
      ...(process.env.NODE_ENV === 'production' ? null : {stack: error.stack}),
    })
  }
}

export default errorMiddleware
