import { HealthController } from '@presentation/controllers'

import { HealthUseCaseStub } from '@tests/presentation/stubs'

class HealthControllerFactory {
  public useCase = new HealthUseCaseStub()

  public get sut (): HealthController {
    return new HealthController(this.useCase)
  }
}

export { HealthControllerFactory }
