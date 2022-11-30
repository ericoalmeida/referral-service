import { HealthController } from '@presentation/controllers'
import {
  ControllerProtocol,
  HealthRequestProtocol,
  HealthResponseProtocol
} from '@presentation/protocols'

class HealthControllerFactory {
  public get sut (): ControllerProtocol<HealthRequestProtocol, HealthResponseProtocol> {
    return new HealthController()
  }
}

export { HealthControllerFactory }
