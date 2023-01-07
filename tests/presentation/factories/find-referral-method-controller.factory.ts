import { FindReferralMethodController } from '@presentation/controllers/find-referral-method.controller'

import { FindReferralMethodUseCaseStub } from '@tests/presentation/stubs/find-referral-method-use-case.stub'
import { ValidationStub } from '@tests/presentation/stubs/validation.stub'

class FindReferralMethodControllerFactory {
  public useCase = new FindReferralMethodUseCaseStub()

  public validation = new ValidationStub()

  public get sut (): FindReferralMethodController {
    return new FindReferralMethodController(this.useCase, this.validation)
  }
}

export { FindReferralMethodControllerFactory }
