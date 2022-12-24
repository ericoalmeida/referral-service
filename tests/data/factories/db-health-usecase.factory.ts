import { DbHealthUseCase } from '@data/use-cases/db-health.usecase'
import { HealthUseCase } from '@domain/use-cases/health.usecase'

import { HealthRepositoryStub } from '@tests/data/stubs/health-repository.stub'

export class DbHealthUseCaseFactory {
  public healthRepository = new HealthRepositoryStub()

  public get sut (): HealthUseCase {
    return new DbHealthUseCase(this.healthRepository)
  }
}
