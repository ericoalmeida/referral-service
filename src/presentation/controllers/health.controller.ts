import { HealthUseCase } from '@domain/use-cases/health.usecase'
import { errorCodesConstants } from '@presentation/constants/error-codes.constants'
import { httpInternalServerError } from '@presentation/helpers/http-internal-server-error.helper'
import { httpNoContent } from '@presentation/helpers/http-no-content.helper'
import { loggerError } from '@presentation/helpers/logger-error.helper'
import { ControllerProtocol } from '@presentation/protocols/controller.protocol'
import { HealthRequestProtocol } from '@presentation/protocols/health-request.protocol'
import { HealthResponseProtocol } from '@presentation/protocols/health-response.protocol'
import { HttpResponseProtocol } from '@presentation/protocols/http-response.protocol'

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
      loggerError('Check health fails', { error })

      return httpInternalServerError(errorCodesConstants.healthCheckFailure)
    }
  }
}
