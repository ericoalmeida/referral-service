import { DbFindReferralMethodUseCase } from '@data/use-cases/db-find-referral-method.usecase'
import { ReferralMethodPrismaRepository } from '@infra/repositories/prisma/referral-method-prisma.repository'
import { LoggerControllerDecorator } from '@main/decorators/logger-controller.decorator'
import { dbClientFactory } from '@main/factories/db-client.factory'
import { FindReferralMethodController } from '@presentation/controllers/find-referral-method.controller'
import { ControllerProtocol } from '@presentation/protocols/controller.protocol'
import { FindReferralMethodRequestProtocol } from '@presentation/protocols/find-referral-method-request.protocol'
import { FindReferralMethodResponseProtocol } from '@presentation/protocols/find-referral-method-response.protocol'
import { findReferralMethodValidationsFactory } from '../validations/find-referral-method-validations.factory'

const findReferralMethodControllerFactory = (): ControllerProtocol<FindReferralMethodRequestProtocol, FindReferralMethodResponseProtocol> => {
  const dbClient = dbClientFactory()

  const repository = new ReferralMethodPrismaRepository(dbClient)
  const useCase = new DbFindReferralMethodUseCase(repository)

  const validations = findReferralMethodValidationsFactory()
  const controller = new FindReferralMethodController(useCase, validations)

  return new LoggerControllerDecorator(controller)
}

export { findReferralMethodControllerFactory }
