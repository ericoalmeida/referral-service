import { ReferralCodeValidation } from '@presentation/validation/referral-code.validation'
import { ValidatorAdapterStub } from '@tests/main/stubs/validator-adapter.stub'

class ReferralCodeValidationFactory {
  constructor (private readonly fieldName: string) {}

  public validatorAdapter = new ValidatorAdapterStub()

  public get sut (): ReferralCodeValidation {
    return new ReferralCodeValidation(this.fieldName, this.validatorAdapter)
  }
}

export { ReferralCodeValidationFactory }
