import { PrismaClient } from '@prisma/client'

import { DbHealthUseCase } from '@data/use-cases/db-health.usecase'
import { HealthPrismaRepository } from '@infra/repositories/prisma'
import { HealthController } from '@presentation/controllers'
import { ControllerProtocol, HealthRequestProtocol, HealthResponseProtocol } from '@presentation/protocols'

class HealthControllerFactory {
  private readonly dbClient = new PrismaClient()

  private readonly repository = new HealthPrismaRepository(this.dbClient)

  private readonly useCase = new DbHealthUseCase(this.repository)

  public get controller (): ControllerProtocol<HealthRequestProtocol, HealthResponseProtocol> {
    return new HealthController(this.useCase)
  }
}

export { HealthControllerFactory }
