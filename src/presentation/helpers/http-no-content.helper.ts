import { httpStatusCodeConstants } from '@presentation/constants/http-status-code.constants'
import { HttpResponseProtocol } from '@presentation/protocols/http-response.protocol'

export const httpNoContent = (): HttpResponseProtocol<any> => ({
  statusCode: httpStatusCodeConstants.successful.noContent
})
