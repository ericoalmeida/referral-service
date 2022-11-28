import { httpStatusCodeConstants } from '@presentation/constants'
import { AppError } from '@presentation/error/app.error'
import { ErrorCodeProtocol, HttpResponseProtocol } from '@presentation/protocols'

export const httpInternalServerError = (error: ErrorCodeProtocol): HttpResponseProtocol<any> => ({
  statusCode: httpStatusCodeConstants.serverError.internalServerError,
  body: { error: new AppError(error) }
})
