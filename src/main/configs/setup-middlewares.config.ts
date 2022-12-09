import { Express } from 'express'

import { bodyParserMiddleware, corsMiddleware } from '@main/middlewares'

export const setupMiddlewares = (app: Express): void => {
  app.use(bodyParserMiddleware)
  app.use(corsMiddleware)
}
