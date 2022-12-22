import { PrismaClient } from '@prisma/client'

import { DbAddReferralMethodUseCase } from '@data/use-cases/db-add-referral-method.usecase'
import { ReferralMethodManagement } from '@infra/referral-method-management'
import { AddReferralMethodPrismaRepository } from '@infra/repositories/prisma'
import { R4ndomStrAdapter } from '@main/adapters/r4ndom-str.adapter'
import { LoggerControllerDecorator } from '@main/decorators'
import { AddReferralMethodController } from '@presentation/controllers/add-referral-method.controller'
import { ControllerProtocol, EmptyResponseProtocol } from '@presentation/protocols'
import { AddReferralMethodRequestProtocol } from '@presentation/protocols/add-referral-method-request.protocol'

const addReferralMethodControllerFactory = (): ControllerProtocol<AddReferralMethodRequestProtocol, EmptyResponseProtocol> => {
  const dbClient = new PrismaClient()

  const r4ndomStrAdapter = new R4ndomStrAdapter()

  const repository = new AddReferralMethodPrismaRepository(dbClient)
  const referralMethodManagement = new ReferralMethodManagement(r4ndomStrAdapter)

  const useCase = new DbAddReferralMethodUseCase(referralMethodManagement, referralMethodManagement, repository)
  const controller = new AddReferralMethodController(useCase)

  return new LoggerControllerDecorator(controller)
}

export { addReferralMethodControllerFactory }
