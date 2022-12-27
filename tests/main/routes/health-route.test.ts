import { Express } from 'express'
import request from 'supertest'

import { setupApp } from '@main/configs/setup-app.config'
import { applicationEndpointsConstants } from '@main/constants/application-endpoints.constants'
import { httpStatusCodeConstants } from '@presentation/constants/http-status-code.constants'

let app: Express

describe('HealthCheck Route', () => {
  beforeAll(() => {
    app = setupApp()
  })

  describe('#GET /api/health', () => {
    it('Should return success', async () => {
      const { successful } = httpStatusCodeConstants
      const { endpointsPrefix, healthCheck } = applicationEndpointsConstants

      const checkURI = `${endpointsPrefix}${healthCheck}`

      await request(app)
        .get(checkURI)
        .send()
        .expect(successful.noContent)
    })
  })
})
