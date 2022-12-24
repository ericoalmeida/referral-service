import { Router } from 'express'

import { expressRouteAdapter } from '@main/adapters/express-route.adapter'
import { serverEndpointsConstants } from '@main/constants/server-endpoints.constants'
import { addReferralMethodControllerFactory } from '@main/factories/controllers/add-referral-method-controller.factory'

const referralMethodRoute = Router()

referralMethodRoute.post(
  serverEndpointsConstants.referralMethod.add,
  expressRouteAdapter(addReferralMethodControllerFactory())
)

export { referralMethodRoute }
