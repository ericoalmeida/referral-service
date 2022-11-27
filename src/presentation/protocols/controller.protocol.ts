import { HttpResponseProtocol } from '@presentation/protocols'

export interface ControllerProtocol<T, U> {
  handle: (request: T) => Promise<HttpResponseProtocol<U>>
}
