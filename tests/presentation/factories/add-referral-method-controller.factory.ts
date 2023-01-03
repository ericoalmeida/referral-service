import { AddReferralMethodController } from '@presentation/controllers/add-referral-method.controller'

import { AddReferralMethodUseCaseStub } from '@tests/presentation/stubs/add-referral-method-use-case.stub'
import { ValidationStub } from '@tests/presentation/stubs/validation.stub'

class AddReferralMethodControllerFactory {
  public useCase = new AddReferralMethodUseCaseStub()

  public validation = new ValidationStub()

  public get sut (): AddReferralMethodController {
    return new AddReferralMethodController(this.useCase, this.validation)
  }
}

export { AddReferralMethodControllerFactory }
