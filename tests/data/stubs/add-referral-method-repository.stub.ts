import { AddReferralMethodRepository } from '@data/protocols/repositories/add-referral-method.repository'
import { AddReferralMethodParams } from '@domain/params'

class AddReferralMethodRepositoryStub implements AddReferralMethodRepository {
  async add (_params: AddReferralMethodParams): Promise<void> {
    return await Promise.resolve()
  }
}

export { AddReferralMethodRepositoryStub }
