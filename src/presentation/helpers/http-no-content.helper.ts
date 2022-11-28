import { httpStatusCodeConstants } from '@presentation/constants'
import { HttpResponseProtocol } from '@presentation/protocols'

export const httpNoContent = (): HttpResponseProtocol<any> => ({
  statusCode: httpStatusCodeConstants.successful.noContent
})
