import { DbAddReferralMethodUseCase } from '@data/use-cases/db-add-referral-method.usecase'
import { AddReferralMethodUseCase } from '@domain/use-cases/add-referral-method.usecase'

import { AddReferralMethodRepositoryStub } from '@tests/data/stubs/add-referral-method-repository.stub'
import { CodeCreatorStub } from '@tests/data/stubs/code-creator.stub'
import { DeeplinkCreatorStub } from '@tests/data/stubs/deeplink-creator.stub'

export class DbAddReferralMethodUseCaseFactory {
  public repository = new AddReferralMethodRepositoryStub()

  public codeCreator = new CodeCreatorStub()

  public deeplinkCreator = new DeeplinkCreatorStub()

  public get sut (): AddReferralMethodUseCase {
    return new DbAddReferralMethodUseCase(
      this.codeCreator,
      this.deeplinkCreator,
      this.repository
    )
  }
}
