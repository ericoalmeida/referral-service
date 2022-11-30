import { HealthUseCase } from '@domain/use-cases'
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
  constructor (private readonly health: HealthUseCase) {}

  public async handle (
    request: HealthRequestProtocol
  ): Promise<HttpResponseProtocol<HealthResponseProtocol>> {
    try {
      await this.health.check()

      return httpNoContent()
    } catch (error) {
      return httpInternalServerError(errorCodesConstants.healthCheckFailure)
    }
  }
}
