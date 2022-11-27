export interface HttpResponseProtocol<T> {
  statusCode: number
  body?: {
    data?: T
    error?: any
  }
}
