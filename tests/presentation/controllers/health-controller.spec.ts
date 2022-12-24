import { errorCodesConstants } from '@presentation/constants/error-codes.constants'
import { httpStatusCodeConstants } from '@presentation/constants/http-status-code.constants'
import { httpInternalServerError } from '@presentation/helpers/http-internal-server-error.helper'

import { HealthControllerFactory } from '@tests/presentation/factories/health-controller.factory'

describe('HealthController', () => {
  describe('#handle', () => {
    const expectedUseCaseCallTimes = 1

    it('Should return successful response with status code 204/no-content', async () => {
      const { sut, useCase } = new HealthControllerFactory()

      const useCaseSpy = jest.spyOn(useCase, 'check')

      const response = await sut.handle({})

      expect(useCaseSpy).toHaveBeenCalledTimes(expectedUseCaseCallTimes)
      expect(response.statusCode).toBe(httpStatusCodeConstants.successful.noContent)
    })

    it('Should return failure response with status code 500/internal-server-error', async () => {
      const { sut, useCase } = new HealthControllerFactory()

      const useCaseSpy = jest.spyOn(useCase, 'check').mockRejectedValue(new Error())

      const response = await sut.handle({})

      const { serverError } = httpStatusCodeConstants
      const { healthCheckFailure } = errorCodesConstants

      expect(useCaseSpy).toHaveBeenCalledTimes(expectedUseCaseCallTimes)
      expect(response.statusCode).toBe(serverError.internalServerError)
      expect(response).toEqual(httpInternalServerError(healthCheckFailure))
    })
  })
})
