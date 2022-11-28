import { errorCodesConstants } from '@presentation/constants'
import { httpInternalServerError, httpNoContent } from '@presentation/helpers'
import {
  ControllerProtocol,
  HealthRequestProtocol,
  HealthResponseProtocol,
  HttpResponseProtocol
} from '@presentation/protocols'

export class HealthController
implements ControllerProtocol<HealthRequestProtocol, HealthResponseProtocol> {
  async handle (
    request: HealthRequestProtocol
  ): Promise<HttpResponseProtocol<HealthResponseProtocol>> {
    try {
      return httpNoContent()
    } catch (error) {
      return httpInternalServerError(errorCodesConstants.healthCheckFailure)
    }
  }
}
