import { errorCodesConstants } from '@presentation/constants/error-codes.constants'
import { loggerError } from '@presentation/helpers/logger-error.helper'
import { ErrorCodeProtocol } from '@presentation/protocols/error-code.protocol'
import { ValidationProtocol } from '@presentation/protocols/validations/validation.protocol'
import { UserIdValidatorProtocol } from '@presentation/protocols/validators/user-id-validator.protocol'

class UserIdValidation implements ValidationProtocol {
  constructor (
    private readonly fieldName: string,
    private readonly validator: UserIdValidatorProtocol
  ) {}

  validate (payload: any): ErrorCodeProtocol | undefined {
    const fieldValue = payload[this.fieldName]

    if (!this.validator.isUserID(fieldValue)) {
      const error = errorCodesConstants.validations.invalidRequiredField

      loggerError('Validation error', {
        [this.fieldName]: fieldValue,
        error
      })

      return error
    }
  }
}

export { UserIdValidation }
