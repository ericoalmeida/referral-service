import { FindReferralMethodController } from '@presentation/controllers/find-referral-method.controller'

import { FindReferralMethodUseCaseStub } from '@tests/presentation/stubs/find-referral-method-use-case.stub'

class FindReferralMethodControllerFactory {
  public useCase = new FindReferralMethodUseCaseStub()

  public get sut (): FindReferralMethodController {
    return new FindReferralMethodController(this.useCase)
  }
}

export { FindReferralMethodControllerFactory }
