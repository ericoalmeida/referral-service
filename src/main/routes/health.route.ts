import { Router } from 'express'

import { serverEndpointsConstants } from '@main/constants'

const healthRoute = Router()

healthRoute.get(serverEndpointsConstants.healthCheck, (request, response) => {
  return response.json({})
})

export {
  healthRoute
}
