import { ReferralMethodPrismaRepository } from '@infra/repositories/prisma/referral-method-prisma.repository'

import { dbClientMock } from '@tests/common/mocks/prisma-client.mock'

class ReferralMethodPrismaRepositoryFactory {
  public get sut (): ReferralMethodPrismaRepository {
    return new ReferralMethodPrismaRepository(dbClientMock)
  }
}

export { ReferralMethodPrismaRepositoryFactory }
