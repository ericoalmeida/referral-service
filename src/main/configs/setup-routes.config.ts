import { Express } from 'express'

import { serverEndpointsConstants } from '@main/constants'
import { healthRoute } from '@main/routes'

export const setupRoutes = (app: Express): void => {
  app.use(serverEndpointsConstants.endpointsPrefix, healthRoute)
}
