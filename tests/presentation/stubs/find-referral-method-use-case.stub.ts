import { ReferralMethodModel } from '@domain/models/referral-method.model'
import { FindReferralMethodUseCase } from '@domain/use-cases/find-referral-method.usecase'

class FindReferralMethodUseCaseStub implements FindReferralMethodUseCase {
  public async findByUserId (_user_id: string): Promise<ReferralMethodModel | null> {
    return Promise.resolve(null)
  }
}

export { FindReferralMethodUseCaseStub }
