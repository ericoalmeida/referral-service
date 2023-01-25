import { faker } from '@faker-js/faker'

import { errorCodesConstants } from '@presentation/constants/error-codes.constants'

import { CommonDataBuilder } from '@tests/common/builders/common-data.builder'
import { UserIdValidationFactory } from '@tests/presentation/factories/user-id-validation.factory'

describe('UserIdValidation', () => {
  describe('#validate', () => {
    it('Should return undefined when requestBody has a valid user id', () => {
      const fieldName = faker.random.word()

      const { sut } = new UserIdValidationFactory(fieldName)

      const requestBody = new CommonDataBuilder()
        .with(`${fieldName}`, faker.datatype.uuid())
        .build()

      const validationResult = sut.validate(requestBody)

      expect(validationResult).toBeUndefined()
    })

    it('Should return error when requestBody has an invalid user id', () => {
      const fieldName = faker.random.word()

      const { sut, validatorAdapterStub } = new UserIdValidationFactory(fieldName)

      const validatorAdapterStubSpy = jest.spyOn(validatorAdapterStub, 'isUserID')
      validatorAdapterStubSpy.mockReturnValue(false)

      const requestBody = new CommonDataBuilder()
        .with(`${fieldName}`, faker.random.word())
        .build()
      const expectedError = errorCodesConstants.validations.invalidRequiredField

      const validationResult = sut.validate(requestBody)

      expect(validationResult).toEqual(expectedError)
    })
  })
})
