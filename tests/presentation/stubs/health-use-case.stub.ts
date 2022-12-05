import { HealthUseCase } from '@domain/use-cases'

export class HealthUseCaseStub implements HealthUseCase {
  private readonly healthCheckSuccessful = true

  public async check (): Promise<boolean> {
    return await Promise.resolve(this.healthCheckSuccessful)
  }
}
