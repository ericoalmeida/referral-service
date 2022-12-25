import { httpStatusCodeConstants } from '@presentation/constants/http-status-code.constants'
import { HttpResponseProtocol } from '@presentation/protocols/http-response.protocol'

export const httpOk = <T>(data: T): HttpResponseProtocol<T> => ({
  status_code: httpStatusCodeConstants.successful.ok,
  body: { data }
})
