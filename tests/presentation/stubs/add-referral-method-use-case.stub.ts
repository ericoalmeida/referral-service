import { AddReferralMethodParams } from '@domain/params'
import { AddReferralMethodUseCase } from '@domain/use-cases'

class AddReferralMethodUseCaseStub implements AddReferralMethodUseCase {
  public async add (params: AddReferralMethodParams): Promise<void> {
    return Promise.resolve()
  }
}

export { AddReferralMethodUseCaseStub }
