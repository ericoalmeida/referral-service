import { ReferralMethodDataBuilder } from '@tests/data/builders/referral-method-data.builder'
import { AddReferralMethodPrismaRepositoryFactory } from '@tests/infra/factories/add-referral-method-prisma-repository.factory'

describe('AddReferralMethodPrismaRepository', () => {
  describe('#add', () => {
    it('Should add a new referral method', async () => {
      const { sut } = new AddReferralMethodPrismaRepositoryFactory()

      const referralMethodData = new ReferralMethodDataBuilder().build()

      await expect(sut.add(referralMethodData)).resolves.toBeUndefined()
    })
  })
})
