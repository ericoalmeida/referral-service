import { HealthRepository } from '@data/protocols/repositories/health.repository'

export class HealthRepositoryStub implements HealthRepository {
  private readonly healthCheckSuccessful = true

  public async check (): Promise<boolean> {
    return await Promise.resolve(this.healthCheckSuccessful)
  };
}
