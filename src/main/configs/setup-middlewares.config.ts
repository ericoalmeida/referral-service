import { Express } from 'express'

import { bodyParserMiddleware, contentTypeMiddleware, corsMiddleware } from '@main/middlewares'

export const setupMiddlewares = (app: Express): void => {
  app.use(bodyParserMiddleware)
  app.use(contentTypeMiddleware)
  app.use(corsMiddleware)
}
