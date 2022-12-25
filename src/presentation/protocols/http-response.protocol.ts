export interface HttpResponseProtocol<T> {
  status_code: number
  body?: {
    data?: T
    error?: any
  }
}
