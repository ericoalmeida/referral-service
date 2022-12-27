import { Router } from 'express'

import { expressRouteAdapter } from '@main/adapters/express-route.adapter'
import { applicationEndpointsConstants } from '@main/constants/application-endpoints.constants'
import { addReferralMethodControllerFactory } from '@main/factories/controllers/add-referral-method-controller.factory'
import { findReferralMethodControllerFactory } from '@main/factories/controllers/find-referral-method-controller.factory'

const referralMethodRoute = Router()

const { referralMethod } = applicationEndpointsConstants

/**
 * @swagger
 * /api/referral-method:
 *   post:
 *     tags:
 *       - Referral Method
 *     summary: Creates a referral method
 *     description: Creates a referral method
 *     requestBody:
 *      description: Creates a referral method properties
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#components/schemas/AddReferralMethod/Params'
 *      required: true
 *     responses:
 *       204:
 *         description: Application is ready
 *         content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/AddReferralMethod/Response'
 *       500:
 *         description: Applications is not ready
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AppError'
 */
referralMethodRoute.post(
  referralMethod.add,
  expressRouteAdapter(addReferralMethodControllerFactory())
)

/**
 * @swagger
 * /api/referral-method/{user_id}:
 *   get:
 *     tags:
 *       - Referral Method
 *     summary: Finds a referral method by user ID
 *     description: Finds a referral method by user ID
 *     parameters:
 *      - name: user_id
 *        in: path
 *        description: ID of user
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/FindReferralMethod/Response'
 *       404:
 *         description: Referral method not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AppError'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AppError'
 */
referralMethodRoute.get(
  referralMethod.find,
  expressRouteAdapter(findReferralMethodControllerFactory())
)

export { referralMethodRoute }
