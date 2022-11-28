/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'

import { expressRouteAdapter } from '@main/adapters/express-route.adapter'
import { serverEndpointsConstants } from '@main/constants'
import { HealthController } from '@presentation/controllers'

const healthRoute = Router()

healthRoute.get(serverEndpointsConstants.healthCheck, expressRouteAdapter(new HealthController()))

export { healthRoute }
