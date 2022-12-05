import { DbHealthUseCase } from '@data/use-cases/db-health.usecase'
import { HealthUseCase } from '@domain/use-cases'

import { HealthRepositoryStub } from '@tests/data/stubs'

export class DbHealthUseCaseFactory {
  public healthRepository = new HealthRepositoryStub()

  public get sut (): HealthUseCase {
    return new DbHealthUseCase(this.healthRepository)
  }
}
