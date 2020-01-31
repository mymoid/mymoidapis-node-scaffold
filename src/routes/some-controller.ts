import {Request, Response, NextFunction} from 'express'

async function action(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response> {
  return res.status(200).json({message: `some message`})
}

export {action}
