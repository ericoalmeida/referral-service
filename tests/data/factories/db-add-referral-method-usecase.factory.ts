import { DbAddReferralMethodUseCase } from '@data/use-cases/db-add-referral-method.usecase'
import { AddReferralMethodUseCase } from '@domain/use-cases/add-referral-method.usecase'

import { AddReferralMethodRepositoryStub } from '@tests/data/stubs/add-referral-method-repository.stub'
import { ReferralMethodManagementStub } from '@tests/data/stubs/referral-method-management.stub'

export class DbAddReferralMethodUseCaseFactory {
  public repository = new AddReferralMethodRepositoryStub()

  public referralMethodManagement = new ReferralMethodManagementStub()

  public get sut (): AddReferralMethodUseCase {
    return new DbAddReferralMethodUseCase(
      this.referralMethodManagement,
      this.referralMethodManagement,
      this.repository
    )
  }
}
