import { DbAddReferralMethodUseCase } from '@data/use-cases/db-add-referral-method.usecase'
import { AddReferralMethodUseCase } from '@domain/use-cases'
import { AddReferralMethodRepositoryStub } from '@tests/data/stubs'

export class DbAddReferralMethodUseCaseFactory {
  public repository = new AddReferralMethodRepositoryStub()

  public get sut (): AddReferralMethodUseCase {
    return new DbAddReferralMethodUseCase(this.repository)
  }
}
