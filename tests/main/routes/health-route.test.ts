import { Express } from 'express'
import request from 'supertest'

import { setupApp } from '@main/configs'
import { serverEndpointsConstants } from '@main/constants'
import { httpStatusCodeConstants } from '@presentation/constants'

let app: Express

describe('HealthCheck Route', () => {
  beforeAll(() => {
    app = setupApp()
  })

  describe('#GET /api/health', () => {
    it('Should return success', async () => {
      const { successful } = httpStatusCodeConstants
      const { endpointsPrefix, healthCheck } = serverEndpointsConstants

      const healthCheckURI = `${endpointsPrefix}${healthCheck}`

      await request(app)
        .get(healthCheckURI)
        .send()
        .expect(successful.noContent)
    })
  })
})
