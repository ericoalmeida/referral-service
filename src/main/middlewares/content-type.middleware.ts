import { NextFunction, Request, Response } from 'express'

const contentTypeMiddleware = (request: Request, response: Response, next: NextFunction): void => {
  response.type('json')

  next()
}

export { contentTypeMiddleware }
