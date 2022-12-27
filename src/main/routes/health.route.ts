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
 *         description: no content
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AppError'
 */
healthRoute.get(healthCheck, expressRouteAdapter(healthControllerFactory()))

export { healthRoute }
