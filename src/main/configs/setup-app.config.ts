import express, { Express } from 'express'

import { setupRoutes } from '@main/configs/setup-routes.config'

const setupApp = (): Express => {
  const app = express()

  setupRoutes(app)

  return app
}

export { setupApp }
