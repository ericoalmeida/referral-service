import { AppErrorProtocol, ErrorCodeProtocol } from '@presentation/protocols'

export class AppError implements AppErrorProtocol {
  constructor (public readonly type: ErrorCodeProtocol) {}
}
