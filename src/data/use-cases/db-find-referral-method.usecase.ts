import { FindReferralMethodRepository } from '@data/protocols/repositories/find-referral-method.repository'
import { ReferralMethodModel } from '@domain/models/referral-method.model'
import { FindReferralMethodUseCase } from '@domain/use-cases/find-referral-method.usecase'

class DbFindReferralMethodUseCase implements FindReferralMethodUseCase {
  constructor (private readonly repository: FindReferralMethodRepository) {}

  public async findByUserId (user_id: string): Promise<ReferralMethodModel | null> {
    return this.repository.findByUserId(user_id)
  }
}

export { DbFindReferralMethodUseCase }
