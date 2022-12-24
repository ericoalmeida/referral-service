import { HttpResponseProtocol } from '@presentation/protocols/http-response.protocol'

export interface ControllerProtocol<T, U> {
  handle: (request: T) => Promise<HttpResponseProtocol<U>>
}
