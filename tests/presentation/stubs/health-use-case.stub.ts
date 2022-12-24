import { HealthUseCase } from '@domain/use-cases/health.usecase'

export class HealthUseCaseStub implements HealthUseCase {
  private readonly healthCheckSuccessful = true

  public async check (): Promise<boolean> {
    return await Promise.resolve(this.healthCheckSuccessful)
  }
}
