import { AddReferralMethodRepository } from '@data/protocols/repositories/add-referral-method.repository'
import { AddReferralMethodParams } from '@domain/params'
import { AddReferralMethodUseCase } from '@domain/use-cases'

class DbAddReferralMethodUseCase implements AddReferralMethodUseCase {
  constructor (private readonly repository: AddReferralMethodRepository) {}

  async add (params: AddReferralMethodParams): Promise<void> {
    await this.repository.add(params)
  }
}

export { DbAddReferralMethodUseCase }
