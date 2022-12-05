import { httpStatusCodeConstants } from '@presentation/constants'
import { HttpResponseProtocol } from '@presentation/protocols'

export const httpCreated = <T>(data: T): HttpResponseProtocol<T> => ({
  statusCode: httpStatusCodeConstants.successful.created,
  body: { data }
})
