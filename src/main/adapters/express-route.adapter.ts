import { Request, Response } from 'express'

import { ControllerProtocol } from '@presentation/protocols'

const buildRequestData = (request: Request): any => {
  const bodyData = request.body !== undefined ? request.body : {}
  const paramsData = request.params !== undefined ? request.params : {}
  const queryData = request.query !== undefined ? request.query : {}

  return { ...bodyData, ...paramsData, ...queryData }
}

const expressRouteAdapter = (controller: ControllerProtocol<any, any>) => {
  return async (request: Request, response: Response): Promise<Response<any, Record<any, any>>> => {
    const requestData = buildRequestData(request)

    const httpResponse = await controller.handle(requestData)

    return response
      .status(httpResponse.statusCode)
      .json(httpResponse.body)
  }
}

export { expressRouteAdapter }
