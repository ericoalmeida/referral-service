import { PrismaClient } from '@prisma/client'

import { DbHealthUseCase } from '@data/use-cases/db-health.usecase'
import { HealthPrismaRepository } from '@infra/repositories/prisma/health-prisma.repository'
import { LoggerControllerDecorator } from '@main/decorators/logger-controller.decorator'
import { HealthController } from '@presentation/controllers/health.controller'
import { ControllerProtocol } from '@presentation/protocols/controller.protocol'
import { HealthRequestProtocol } from '@presentation/protocols/health-request.protocol'
import { HealthResponseProtocol } from '@presentation/protocols/health-response.protocol'

const healthControllerFactory = (): ControllerProtocol<HealthRequestProtocol, HealthResponseProtocol> => {
  const dbClient = new PrismaClient()
  const repository = new HealthPrismaRepository(dbClient)
  const useCase = new DbHealthUseCase(repository)
  const healthController = new HealthController(useCase)

  return new LoggerControllerDecorator(healthController)
}

export { healthControllerFactory }
