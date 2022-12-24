import { HealthController } from '@presentation/controllers/health.controller'

import { HealthUseCaseStub } from '@tests/presentation/stubs/health-use-case.stub'

class HealthControllerFactory {
  public useCase = new HealthUseCaseStub()

  public get sut (): HealthController {
    return new HealthController(this.useCase)
  }
}

export { HealthControllerFactory }
