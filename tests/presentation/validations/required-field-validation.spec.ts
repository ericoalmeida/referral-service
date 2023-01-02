import { faker } from '@faker-js/faker'

import { errorCodesConstants } from '@presentation/constants/error-codes.constants'

import { CommonDataBuilder } from '@tests/common/builders/common-data.builder'
import { RequiredFieldValidationFactory } from '@tests/presentation/factories/required-field-validation.factory'

describe('RequiredFieldValidation', () => {
  describe('#validate', () => {
    const fieldName = faker.random.word()

    it('Should return undefined when requestBody has required field', () => {
      const { sut } = new RequiredFieldValidationFactory(fieldName)

      const requestBody = new CommonDataBuilder<any>()
        .with(`${fieldName}`, faker.datatype.string())
        .build()

      const validationResult = sut.validate(requestBody)

      expect(validationResult).toBeUndefined()
    })

    it('Should return an error when requestBody has no required field', () => {
      const { sut } = new RequiredFieldValidationFactory(fieldName)

      const requestBody = new CommonDataBuilder<any>().build()
      const expectedError = errorCodesConstants.validations.missingRequiredField

      const validationResult = sut.validate(requestBody)

      expect(validationResult).toEqual(expectedError)
    })
  })
})
