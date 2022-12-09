import { Express } from 'express'

import { corsMiddleware } from '@main/middlewares'

export const setupMiddlewares = (app: Express): void => {
  app.use(corsMiddleware)
}
