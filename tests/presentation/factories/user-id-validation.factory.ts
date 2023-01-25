
import { UserIdValidation } from '@presentation/validation/user-id.validation'

import { ValidatorAdapterStub } from '@tests/main/stubs/validator-adapter.stub'

class UserIdValidationFactory {
  constructor (private readonly fieldName: string) {}

  public validatorAdapterStub = new ValidatorAdapterStub()

  public get sut (): UserIdValidation {
    return new UserIdValidation(this.fieldName, this.validatorAdapterStub)
  }
}

export { UserIdValidationFactory }
