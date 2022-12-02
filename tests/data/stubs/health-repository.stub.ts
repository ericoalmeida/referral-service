import { HealthRepository } from '@data/protocols/repositories'

export class HealthRepositoryStub implements HealthRepository {
  private readonly healthCheckSuccessful = true

  public async check (): Promise<boolean> {
    return await Promise.resolve(this.healthCheckSuccessful)
  };
}
