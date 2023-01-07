import { ErrorCodeProtocol } from '@presentation/protocols/error-code.protocol'
import { ValidationProtocol } from '@presentation/protocols/validations/validation.protocol'

class ValidationStub implements ValidationProtocol {
  validate (_payload: any): ErrorCodeProtocol | undefined {
    return undefined
  }
}

export { ValidationStub }
