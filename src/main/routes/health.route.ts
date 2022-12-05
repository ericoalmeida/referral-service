/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'

import { expressRouteAdapter } from '@main/adapters/express-route.adapter'
import { serverEndpointsConstants } from '@main/constants'
import { HealthControllerFactory } from '@main/factories/controllers'

const healthRoute = Router()

healthRoute.get(serverEndpointsConstants.healthCheck, expressRouteAdapter(new HealthControllerFactory().controller))

export { healthRoute }
