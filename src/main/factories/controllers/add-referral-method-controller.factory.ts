
import { DbAddReferralMethodUseCase } from '@data/use-cases/db-add-referral-method.usecase'
import { ReferralMethodManagement } from '@infra/referral-method-management'
import { ReferralMethodPrismaRepository } from '@infra/repositories/prisma/referral-method-prisma.repository'
import { R4ndomStrAdapter } from '@main/adapters/r4ndom-str.adapter'
import { LoggerControllerDecorator } from '@main/decorators/logger-controller.decorator'
import { dbClientFactory } from '@main/factories/db-client.factory'
import { addReferralMethodValidationsFactory } from '@main/factories/validations/add-referral-method-validations.factory'
import { AddReferralMethodController } from '@presentation/controllers/add-referral-method.controller'
import { AddReferralMethodRequestProtocol } from '@presentation/protocols/add-referral-method-request.protocol'
import { ControllerProtocol } from '@presentation/protocols/controller.protocol'
import { EmptyResponseProtocol } from '@presentation/protocols/empty-response.protocol'

const addReferralMethodControllerFactory = (): ControllerProtocol<AddReferralMethodRequestProtocol, EmptyResponseProtocol> => {
  const dbClient = dbClientFactory()

  const r4ndomStrAdapter = new R4ndomStrAdapter()

  const repository = new ReferralMethodPrismaRepository(dbClient)
  const referralMethodManagement = new ReferralMethodManagement(r4ndomStrAdapter)

  const useCase = new DbAddReferralMethodUseCase(referralMethodManagement, referralMethodManagement, repository)

  const validations = addReferralMethodValidationsFactory()
  const controller = new AddReferralMethodController(useCase, validations)

  return new LoggerControllerDecorator(controller)
}

export { addReferralMethodControllerFactory }
