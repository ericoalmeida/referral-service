import { faker } from '@faker-js/faker'

import { errorCodesConstants } from '@presentation/constants/error-codes.constants'
import { httpStatusCodeConstants } from '@presentation/constants/http-status-code.constants'
import { httpInternalServerError } from '@presentation/helpers/http-internal-server-error.helper'

import { AddReferralMethodControllerFactory } from '@tests/presentation/factories/add-referral-method-controller.factory'

describe('AddReferralMethodController', () => {
  describe('#handle', () => {
    const expectedUseCaseCallTimes = 1

    it('Should return successful response with status code 201/created', async () => {
      const { sut, useCase } = new AddReferralMethodControllerFactory()

      const useCaseSpy = jest.spyOn(useCase, 'add')

      const user_id = faker.datatype.uuid()
      const response = await sut.handle({ user_id })

      const { successful } = httpStatusCodeConstants

      expect(useCaseSpy).toHaveBeenCalledTimes(expectedUseCaseCallTimes)
      expect(useCaseSpy).toHaveBeenCalledWith({ user_id })
      expect(response.status_code).toBe(successful.created)
    })

    it('Should return failure response with status code 500/internal server error', async () => {
      const { sut, useCase } = new AddReferralMethodControllerFactory()

      const useCaseSpy = jest.spyOn(useCase, 'add').mockRejectedValueOnce(new Error())

      const user_id = faker.datatype.uuid()

      const response = await sut.handle({ user_id })

      const { serverError } = httpStatusCodeConstants
      const { referralMethod } = errorCodesConstants

      expect(useCaseSpy).toHaveBeenCalledTimes(expectedUseCaseCallTimes)
      expect(useCaseSpy).toHaveBeenCalledWith({ user_id })
      expect(response.status_code).toBe(serverError.internalServerError)
      expect(response).toEqual(httpInternalServerError(referralMethod.creationFailure))
    })
  })
})
