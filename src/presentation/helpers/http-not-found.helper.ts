import { httpStatusCodeConstants } from '@presentation/constants/http-status-code.constants'
import { AppError } from '@presentation/error/app.error'
import { ErrorCodeProtocol } from '@presentation/protocols/error-code.protocol'
import { HttpResponseProtocol } from '@presentation/protocols/http-response.protocol'

export const httpNotFound = (error: ErrorCodeProtocol): HttpResponseProtocol<any> => ({
  statusCode: httpStatusCodeConstants.clientError.notFound,
  body: { error: new AppError(error) }
})
