import { errorCodesConstants, httpStatusCodeConstants } from '@presentation/constants'
import { httpInternalServerError } from '@presentation/helpers'

import { HealthControllerFactory } from '@tests/presentation/factories'

describe('HealthController', () => {
  describe('#handle', () => {
    it('Should return successful response with status code 204/no-content', async () => {
      const { sut } = new HealthControllerFactory()

      const response = await sut.handle({})

      expect(response.statusCode).toBe(httpStatusCodeConstants.successful.noContent)
    })

    it('Should return failure response with status code 500/internal-server-error', async () => {
      const { sut, health } = new HealthControllerFactory()

      jest.spyOn(health, 'check').mockImplementationOnce(async () => {
        throw new Error()
      })

      const response = await sut.handle({})

      expect(response.statusCode).toBe(httpStatusCodeConstants.serverError.internalServerError)
      expect(response).toEqual(httpInternalServerError(errorCodesConstants.healthCheckFailure))
    })
  })
})
