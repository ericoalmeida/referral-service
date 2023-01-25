import { faker } from '@faker-js/faker'
import { errorCodesConstants } from '@presentation/constants/error-codes.constants'
import { CommonDataBuilder } from '@tests/common/builders/common-data.builder'

import { ReferralCodeValidationFactory } from '@tests/presentation/factories/referral-code-validation.factory'

describe('ReferralCodeValidation', () => {
  describe('#validate', () => {
    const { validations } = errorCodesConstants

    const fieldName = faker.random.word()
    const expectedValidatorCallTimes = 1
    const expectedValidationError = validations.invalidRequiredField

    it('Should return undefined when requestBody has a valid code', () => {
      const { sut, validatorAdapter } = new ReferralCodeValidationFactory(fieldName)

      const requestBody = new CommonDataBuilder<any>()
        .with(`${fieldName}`, 'K554EDDX')
        .build()

      const validatorAdapterSpy = jest.spyOn(validatorAdapter, 'isReferralCode')

      const validationResult = sut.validate(requestBody)

      expect(validationResult).toBeUndefined()
      expect(validatorAdapterSpy).toHaveBeenCalledTimes(expectedValidatorCallTimes)
      expect(validatorAdapterSpy).toHaveBeenCalledWith(requestBody[fieldName])
    })

    it('Should return error when requestBody has an invalid code', () => {
      const { sut, validatorAdapter } = new ReferralCodeValidationFactory(fieldName)

      const requestBody = new CommonDataBuilder<any>()
        .with(`${fieldName}`, 'K554E')
        .build()

      const validatorAdapterSpy = jest.spyOn(validatorAdapter, 'isReferralCode')
      validatorAdapterSpy.mockReturnValueOnce(false)

      const validationResult = sut.validate(requestBody)

      expect(validationResult).toEqual(expectedValidationError)
      expect(validatorAdapterSpy).toHaveBeenCalledTimes(expectedValidatorCallTimes)
      expect(validatorAdapterSpy).toHaveBeenCalledWith(requestBody[fieldName])
    })
  })
})
