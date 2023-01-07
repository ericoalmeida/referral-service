import { ErrorCodeProtocol } from '@presentation/protocols/error-code.protocol'

interface ValidationProtocol {
  validate: (payload: any) => ErrorCodeProtocol | undefined
}

export { ValidationProtocol }
