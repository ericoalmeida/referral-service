import { AddReferralMethodRepositoryParams } from '@data/params/add-referral-method-repository.params'
import { AddReferralMethodRepository } from '@data/protocols/repositories/add-referral-method.repository'
import { CheckReferralMethodExistByCodeRepository } from '@data/protocols/repositories/check-referral-method-exist-by-code.repository'
import { CheckReferralMethodExistByUserIdRepository } from '@data/protocols/repositories/check-referral-method-exist-by-user-id.repository'

class ReferralMethodRepositoryStub implements
AddReferralMethodRepository, CheckReferralMethodExistByCodeRepository, CheckReferralMethodExistByUserIdRepository {
  async add (_params: AddReferralMethodRepositoryParams): Promise<void> {
    return await Promise.resolve()
  }

  async checkByCode (_code: string): Promise<boolean> {
    return Promise.resolve(false)
  }

  async checkByUserId (_user_id: string): Promise<boolean> {
    return Promise.resolve(false)
  }
}

export { ReferralMethodRepositoryStub }
