import { Router } from 'express'

import { expressRouteAdapter } from '@main/adapters/express-route.adapter'
import { serverEndpointsConstants } from '@main/constants'
import { healthControllerFactory } from '@main/factories/controllers'

const healthRoute = Router()

healthRoute.get(serverEndpointsConstants.healthCheck, expressRouteAdapter(healthControllerFactory()))

export { healthRoute }
