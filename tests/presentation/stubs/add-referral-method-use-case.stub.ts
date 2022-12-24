import { AddReferralMethodParams } from '@domain/params/add-referral-method.params'
import { AddReferralMethodUseCase } from '@domain/use-cases/add-referral-method.usecase'

class AddReferralMethodUseCaseStub implements AddReferralMethodUseCase {
  public async add (params: AddReferralMethodParams): Promise<void> {
    return Promise.resolve()
  }
}

export { AddReferralMethodUseCaseStub }
