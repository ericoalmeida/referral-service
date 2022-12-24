import { HealthRepository } from '@data/protocols/repositories/health.repository'
import { HealthUseCase } from '@domain/use-cases/health.usecase'

class DbHealthUseCase implements HealthUseCase {
  constructor (private readonly repository: HealthRepository) {}

  public async check (): Promise<boolean> {
    return await this.repository.check()
  }
}

export { DbHealthUseCase }
