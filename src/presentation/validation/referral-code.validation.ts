import { errorCodesConstants } from '@presentation/constants/error-codes.constants'
import { loggerError } from '@presentation/helpers/logger-error.helper'
import { ErrorCodeProtocol } from '@presentation/protocols/error-code.protocol'
import { ValidationProtocol } from '@presentation/protocols/validations/validation.protocol'
import { ReferralCodeValidatorProtocol } from '@presentation/protocols/validators/referral-code-validator.protocol'

class ReferralCodeValidation implements ValidationProtocol {
  constructor (
    private readonly fieldName: string,
    private readonly validator: ReferralCodeValidatorProtocol
  ) {}

  validate (payload: any): ErrorCodeProtocol | undefined {
    const fieldValue = payload[this.fieldName]

    if (fieldValue) {
      if (!this.validator.isReferralCode(fieldValue)) {
        const error = errorCodesConstants.validations.invalidRequiredField

        loggerError('Validation error', {
          [this.fieldName]: fieldValue,
          error
        })

        return error
      }
    }
  }
}

export { ReferralCodeValidation }
