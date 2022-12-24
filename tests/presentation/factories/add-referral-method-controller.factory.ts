import { AddReferralMethodController } from '@presentation/controllers/add-referral-method.controller'

import { AddReferralMethodUseCaseStub } from '@tests/presentation/stubs/add-referral-method-use-case.stub'

class AddReferralMethodControllerFactory {
  public useCase = new AddReferralMethodUseCaseStub()

  public get sut (): AddReferralMethodController {
    return new AddReferralMethodController(this.useCase)
  }
}

export { AddReferralMethodControllerFactory }
