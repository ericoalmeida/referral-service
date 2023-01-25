import { DbAddReferralMethodUseCase } from '@data/use-cases/db-add-referral-method.usecase'
import { AddReferralMethodUseCase } from '@domain/use-cases/add-referral-method.usecase'

import { CodeCreatorStub } from '@tests/data/stubs/code-creator.stub'
import { DeeplinkCreatorStub } from '@tests/data/stubs/deeplink-creator.stub'
import { ReferralMethodRepositoryStub } from '@tests/data/stubs/referral-method-repository.stub'

export class DbAddReferralMethodUseCaseFactory {
  public repository = new ReferralMethodRepositoryStub()

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
