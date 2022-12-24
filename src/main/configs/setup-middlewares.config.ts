import { Express } from 'express'

import { bodyParserMiddleware } from '@main/middlewares/body-parses.middleware'
import { contentTypeMiddleware } from '@main/middlewares/content-type.middleware'
import { corsMiddleware } from '@main/middlewares/cors.middleware'

export const setupMiddlewares = (app: Express): void => {
  app.use(bodyParserMiddleware)
  app.use(contentTypeMiddleware)
  app.use(corsMiddleware)
}
