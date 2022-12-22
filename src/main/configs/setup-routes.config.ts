import { Express } from 'express'

import { serverEndpointsConstants } from '@main/constants'
import { healthRoute } from '@main/routes'
import { referralMethodRoute } from '@main/routes/referral-method.route'

export const setupRoutes = (app: Express): void => {
  app.use(serverEndpointsConstants.endpointsPrefix, healthRoute)
  app.use(serverEndpointsConstants.endpointsPrefix, referralMethodRoute)
}
