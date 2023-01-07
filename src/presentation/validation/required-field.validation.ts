import { errorCodesConstants } from '@presentation/constants/error-codes.constants'
import { loggerError } from '@presentation/helpers/logger-error.helper'
import { ErrorCodeProtocol } from '@presentation/protocols/error-code.protocol'
import { ValidationProtocol } from '@presentation/protocols/validations/validation.protocol'

class RequiredFieldValidation implements ValidationProtocol {
  constructor (private readonly fieldName: string) {}

  validate (payload: any): ErrorCodeProtocol | undefined {
    const fieldValue = payload[this.fieldName]

    if (!fieldValue) {
      const error = errorCodesConstants.validations.missingRequiredField

      loggerError('Validation error', {
        [this.fieldName]: fieldValue,
        error
      })

      return error
    }
  }
}

export { RequiredFieldValidation }
