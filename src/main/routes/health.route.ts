import { Router } from 'express'

import { expressRouteAdapter } from '@main/adapters/express-route.adapter'
import { applicationEndpointsConstants } from '@main/constants/application-endpoints.constants'
import { healthControllerFactory } from '@main/factories/controllers/health-controller.factory'

const healthRoute = Router()

const { healthCheck } = applicationEndpointsConstants

/**
 * @swagger
 * /api/health:
 *   get:
 *     tags:
 *       - Health
 *     summary: Server health check!
 *     description: Check application is ready!
 *     responses:
 *       204:
 *         description: Application is ready.
 *       500:
 *         description: Applications is not ready
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  error:
 *                     type: object
 *                     properties:
 *                        type:
 *                          type: object
 *                          properties:
 *                            code:
 *                              type: string
 *                              example: HC0001
 *                            message:
 *                              type: string
 *                              example: Health check failed
 */
healthRoute.get(healthCheck, expressRouteAdapter(healthControllerFactory()))

export { healthRoute }
