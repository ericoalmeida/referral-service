import { Express } from 'express'

import { applicationEndpointsConstants } from '@main/constants/application-endpoints.constants'
import { healthRoute } from '@main/routes/health.route'
import { referralMethodRoute } from '@main/routes/referral-method.route'

export const setupRoutes = (app: Express): void => {
  app.use(applicationEndpointsConstants.endpointsPrefix, healthRoute)
  app.use(applicationEndpointsConstants.endpointsPrefix, referralMethodRoute)
}
