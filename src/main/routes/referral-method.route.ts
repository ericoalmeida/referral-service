import { Router } from 'express'

import { expressRouteAdapter } from '@main/adapters/express-route.adapter'
import { applicationEndpointsConstants } from '@main/constants/application-endpoints.constants'
import { addReferralMethodControllerFactory } from '@main/factories/controllers/add-referral-method-controller.factory'
import { findReferralMethodControllerFactory } from '@main/factories/controllers/find-referral-method-controller.factory'

const referralMethodRoute = Router()

const { referralMethod } = applicationEndpointsConstants

referralMethodRoute.post(
  referralMethod.add,
  expressRouteAdapter(addReferralMethodControllerFactory())
)
referralMethodRoute.get(
  referralMethod.find,
  expressRouteAdapter(findReferralMethodControllerFactory())
)

export { referralMethodRoute }
