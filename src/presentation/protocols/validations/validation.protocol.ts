import { ErrorCodeProtocol } from '../error-code.protocol'

interface ValidationProtocol {
  validate: (payload: any) => ErrorCodeProtocol | undefined
}

export { ValidationProtocol }
