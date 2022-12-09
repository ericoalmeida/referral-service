import { PrismaClient } from '@prisma/client'

import { DbHealthUseCase } from '@data/use-cases/db-health.usecase'
import { HealthPrismaRepository } from '@infra/repositories/prisma'
import { LoggerControllerDecorator } from '@main/decorators'
import { HealthController } from '@presentation/controllers'
import { ControllerProtocol, HealthRequestProtocol, HealthResponseProtocol } from '@presentation/protocols'

const healthControllerFactory = (): ControllerProtocol<HealthRequestProtocol, HealthResponseProtocol> => {
  const dbClient = new PrismaClient()
  const repository = new HealthPrismaRepository(dbClient)
  const useCase = new DbHealthUseCase(repository)
  const healthController = new HealthController(useCase)

  return new LoggerControllerDecorator(healthController)
}

export { healthControllerFactory }
