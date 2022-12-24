import { DbFindReferralMethodUseCase } from '@data/use-cases/db-find-referral-method.usecase'

import { FindReferralMethodRepositoryStub } from '@tests/data/stubs/find-referral-method-repository.stub'

class DbFindReferralMethodUseCaseFactory {
  public repository = new FindReferralMethodRepositoryStub()

  public get sut (): DbFindReferralMethodUseCase {
    return new DbFindReferralMethodUseCase(this.repository)
  }
}

export { DbFindReferralMethodUseCaseFactory }
