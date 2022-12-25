import { loggerError } from '@presentation/helpers/logger-error.helper'
import { loggerInfo } from '@presentation/helpers/logger-info.helper'
import { ControllerProtocol } from '@presentation/protocols/controller.protocol'
import { HttpResponseProtocol } from '@presentation/protocols/http-response.protocol'

class LoggerControllerDecorator implements ControllerProtocol<any, any> {
  constructor (
    private readonly controller: ControllerProtocol<any, any>
  ) {}

  async handle (request: any): Promise<HttpResponseProtocol<any>> {
    loggerInfo('Starting request', { http_request: JSON.stringify(request) })

    const httpResponse = await this.controller.handle(request)

    if (httpResponse.statusCode === 500) {
      loggerError('Request fails', { http_response: JSON.stringify(httpResponse) })
    }

    loggerInfo('Ending request', { http_response: JSON.stringify(httpResponse) })

    return httpResponse
  }
}

export { LoggerControllerDecorator }
