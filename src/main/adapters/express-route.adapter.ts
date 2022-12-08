import { Request, Response } from 'express'

import { ControllerProtocol } from '@presentation/protocols'

const expressRouteAdapter = (controller: ControllerProtocol<any, any>) => {
  return async (request: Request, response: Response): Promise<Response<any, Record<any, any>>> => {
    const requestData = {
      ...(request.body || {}),
      ...(request.params || {}),
      ...(request.query || {})
    }

    const httpResponse = await controller.handle(requestData)

    return response
      .status(httpResponse.statusCode)
      .json(httpResponse.body)
  }
}

export { expressRouteAdapter }
