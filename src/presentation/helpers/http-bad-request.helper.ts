import { httpStatusCodeConstants } from '@presentation/constants'
import { AppError } from '@presentation/error/app.error'
import { ErrorCodeProtocol, HttpResponseProtocol } from '@presentation/protocols'

export const httpBadRequest = (error: ErrorCodeProtocol): HttpResponseProtocol<any> => ({
  statusCode: httpStatusCodeConstants.clientError.badRequest,
  body: { error: new AppError(error) }
})
