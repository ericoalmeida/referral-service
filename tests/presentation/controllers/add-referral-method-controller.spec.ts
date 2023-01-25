import { faker } from '@faker-js/faker'

import { errorCodesConstants } from '@presentation/constants/error-codes.constants'
import { httpStatusCodeConstants } from '@presentation/constants/http-status-code.constants'
import { httpBadRequest } from '@presentation/helpers/http-bad-request.helper'
import { httpInternalServerError } from '@presentation/helpers/http-internal-server-error.helper'

import { AddReferralMethodControllerFactory } from '@tests/presentation/factories/add-referral-method-controller.factory'

describe('AddReferralMethodController', () => {
  describe('#handle', () => {
    const expectedUseCaseCallTimes = 1
    const expectedValidationCallTimes = 1
    const user_id = faker.datatype.uuid()

    const { serverError, successful } = httpStatusCodeConstants
    const { referralMethod, validations } = errorCodesConstants

    it('Should return successful response with status code 201/created', async () => {
      const { sut, useCase } = new AddReferralMethodControllerFactory()

      const useCaseSpy = jest.spyOn(useCase, 'add')

      const response = await sut.handle({ user_id })

      expect(useCaseSpy).toHaveBeenCalledTimes(expectedUseCaseCallTimes)
      expect(useCaseSpy).toHaveBeenCalledWith({ user_id })
      expect(response.status_code).toBe(successful.created)
    })

    it('Should return failure response with status code 500/internal server error', async () => {
      const { sut, useCase } = new AddReferralMethodControllerFactory()

      const useCaseSpy = jest.spyOn(useCase, 'add').mockRejectedValueOnce(new Error())

      const response = await sut.handle({ user_id })

      expect(useCaseSpy).toHaveBeenCalledTimes(expectedUseCaseCallTimes)
      expect(useCaseSpy).toHaveBeenCalledWith({ user_id })
      expect(response.status_code).toBe(serverError.internalServerError)
      expect(response).toEqual(httpInternalServerError(referralMethod.creationFailure))
    })

    it('Should return failure response with status code 400/bad request when receive an invalid required field', async () => {
      const { sut, validation } = new AddReferralMethodControllerFactory()

      const validationSpy = jest.spyOn(validation, 'validate')
      validationSpy.mockReturnValueOnce(validations.invalidRequiredField)

      const request = { user_id }
      const response = await sut.handle(request)

      expect(validationSpy).toHaveBeenCalledTimes(expectedValidationCallTimes)
      expect(validationSpy).toHaveBeenCalledWith(request)
      expect(response).toEqual(httpBadRequest(validations.invalidRequiredField))
    })

    it('Should return failure response with status code 400/bad request when missing required field', async () => {
      const { sut, validation } = new AddReferralMethodControllerFactory()

      const validationSpy = jest.spyOn(validation, 'validate')
      validationSpy.mockReturnValueOnce(validations.missingRequiredField)

      const request = { user_id }
      const response = await sut.handle(request)

      expect(validationSpy).toHaveBeenCalledTimes(expectedValidationCallTimes)
      expect(validationSpy).toHaveBeenCalledWith(request)
      expect(response).toEqual(httpBadRequest(validations.missingRequiredField))
    })
  })
})
