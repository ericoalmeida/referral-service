import { httpStatusCodeConstants } from '@presentation/constants'
import { HttpResponseProtocol } from '@presentation/protocols'

export const httpOk = <T>(data: T): HttpResponseProtocol<T> => ({
  statusCode: httpStatusCodeConstants.successful.ok,
  body: { data }
})
