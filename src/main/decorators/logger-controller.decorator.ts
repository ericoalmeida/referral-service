import { loggerError } from '@presentation/helpers/logger-error.helper'
import { loggerInfo } from '@presentation/helpers/logger-info.helper'
import { ControllerProtocol, HttpResponseProtocol } from '@presentation/protocols'

class LoggerControllerDecorator implements ControllerProtocol<any, any> {
  constructor (
    private readonly controller: ControllerProtocol<any, any>
  ) {}

  async handle (request: any): Promise<HttpResponseProtocol<any>> {
    loggerInfo('Starting request', { httpRequest: request })

    const httpResponse = await this.controller.handle(request)

    if (httpResponse.statusCode === 500) {
      loggerError('Request fails', { httpResponse })
    }

    loggerInfo('Ending request', { httpResponse })

    return httpResponse
  }
}

export { LoggerControllerDecorator }
