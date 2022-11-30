import { httpStatusCodeConstants } from '@presentation/constants'

import { HealthControllerFactory } from '@tests/presentation/factories/health-controller.factory'

describe('HealthController', () => {
  describe('#handle', () => {
    it('Should return successful response with status code 204/no-content', async () => {
      const { sut } = new HealthControllerFactory()

      const response = await sut.handle({})

      expect(response.statusCode).toBe(httpStatusCodeConstants.successful.noContent)
    })
  })
})
