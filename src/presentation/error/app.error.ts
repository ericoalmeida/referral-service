import { AppErrorProtocol } from '@presentation/protocols/app-error-protocol'
import { ErrorCodeProtocol } from '@presentation/protocols/error-code.protocol'

export class AppError implements AppErrorProtocol {
  constructor (public readonly type: ErrorCodeProtocol) {}
}
