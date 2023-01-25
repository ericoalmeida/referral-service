import express, { Express } from 'express'

import { setupApiDocs } from '@main/configs/setup-api-docs.config'
import { setupMiddlewares } from '@main/configs/setup-middlewares.config'
import { setupRoutes } from '@main/configs/setup-routes.config'

const setupApp = (): Express => {
  const app = express()

  setupApiDocs(app)
  setupMiddlewares(app)
  setupRoutes(app)

  return app
}

export { setupApp }
