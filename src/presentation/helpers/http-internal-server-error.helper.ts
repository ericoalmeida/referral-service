import { httpStatusCodeConstants } from '@presentation/constants/http-status-code.constants'
import { AppError } from '@presentation/error/app.error'
import { ErrorCodeProtocol } from '@presentation/protocols/error-code.protocol'
import { HttpResponseProtocol } from '@presentation/protocols/http-response.protocol'

export const httpInternalServerError = (error: ErrorCodeProtocol): HttpResponseProtocol<any> => ({
  status_code: httpStatusCodeConstants.serverError.internalServerError,
  body: { error: new AppError(error) }
})
