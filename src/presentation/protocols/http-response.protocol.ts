export interface HttpResponseProtocol<T = any> {
  statusCode: number
  body: {
    data?: T
    error?: any
  }
}
