import { AddReferralMethodRepository } from '@data/protocols/repositories/add-referral-method.repository'
import { AddReferralMethodPrismaRepository } from '@infra/repositories/prisma/add-referral-method-prisma.repository'

import { dbClientMock } from '@tests/common/mocks/prisma-client.mock'

export class AddReferralMethodPrismaRepositoryFactory {
  public get sut (): AddReferralMethodRepository {
    return new AddReferralMethodPrismaRepository(dbClientMock)
  }
}