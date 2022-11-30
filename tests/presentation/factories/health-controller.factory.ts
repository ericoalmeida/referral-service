import { HealthController } from '@presentation/controllers'
import {
  ControllerProtocol,
  HealthRequestProtocol,
  HealthResponseProtocol
} from '@presentation/protocols'

import { HealthUseCaseStub } from '@tests/presentation/stubs'

class HealthControllerFactory {
  public health = new HealthUseCaseStub()

  public get sut (): ControllerProtocol<HealthRequestProtocol, HealthResponseProtocol> {
    return new HealthController(this.health)
  }
}

export { HealthControllerFactory }
