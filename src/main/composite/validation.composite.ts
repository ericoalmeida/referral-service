import { ErrorCodeProtocol } from '@presentation/protocols/error-code.protocol'
import { ValidationProtocol } from '@presentation/protocols/validations/validation.protocol'

class ValidationComposite implements ValidationProtocol {
  constructor (private readonly validations: ValidationProtocol[]) {}

  validate (payload: any): ErrorCodeProtocol | undefined {
    for (const validation of this.validations) {
      const error = validation.validate(payload)

      if (error) {
        return error
      }
    }
  }
}

export { ValidationComposite }
