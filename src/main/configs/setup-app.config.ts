import express, { Express } from 'express'

import { setupMiddlewares } from '@main/configs/setup-middlewares.config'
import { setupRoutes } from '@main/configs/setup-routes.config'

const setupApp = (): Express => {
  const app = express()

  setupMiddlewares(app)
  setupRoutes(app)

  return app
}

export { setupApp }
