
import { DbHealthUseCase } from '@data/use-cases/db-health.usecase'
import { HealthPrismaRepository } from '@infra/repositories/prisma/health-prisma.repository'
import { LoggerControllerDecorator } from '@main/decorators/logger-controller.decorator'
import { dbClientFactory } from '@main/factories/db-client.factory'
import { HealthController } from '@presentation/controllers/health.controller'
import { ControllerProtocol } from '@presentation/protocols/controller.protocol'
import { EmptyRequestProtocol } from '@presentation/protocols/empty-request.protocol'
import { EmptyResponseProtocol } from '@presentation/protocols/empty-response.protocol'

const healthControllerFactory = (): ControllerProtocol<EmptyRequestProtocol, EmptyResponseProtocol> => {
  const dbClient = dbClientFactory()

  const repository = new HealthPrismaRepository(dbClient)
  const useCase = new DbHealthUseCase(repository)
  const healthController = new HealthController(useCase)

  return new LoggerControllerDecorator(healthController)
}

export { healthControllerFactory }
