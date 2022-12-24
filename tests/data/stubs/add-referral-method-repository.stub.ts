import { AddReferralMethodRepositoryParams } from '@data/params/add-referral-method-repository.params'
import { AddReferralMethodRepository } from '@data/protocols/repositories/add-referral-method.repository'

class AddReferralMethodRepositoryStub implements AddReferralMethodRepository {
  async add (_params: AddReferralMethodRepositoryParams): Promise<void> {
    return await Promise.resolve()
  }
}

export { AddReferralMethodRepositoryStub }
