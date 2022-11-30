import { HealthRepository } from '@data/protocols/repositories'
import { HealthUseCase } from '@domain/use-cases'

class DbHealthUseCase implements HealthUseCase {
  constructor (private readonly repository: HealthRepository) {}

  public async check (): Promise<boolean> {
    return await this.repository.check()
  }
}

export { DbHealthUseCase }
