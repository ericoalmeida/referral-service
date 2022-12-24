import { Router } from 'express'

import { expressRouteAdapter } from '@main/adapters/express-route.adapter'
import { serverEndpointsConstants } from '@main/constants/server-endpoints.constants'
import { healthControllerFactory } from '@main/factories/controllers/health-controller.factory'

const healthRoute = Router()

healthRoute.get(serverEndpointsConstants.healthCheck, expressRouteAdapter(healthControllerFactory()))

export { healthRoute }
