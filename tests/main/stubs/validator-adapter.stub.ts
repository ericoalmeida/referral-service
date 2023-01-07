import { ReferralCodeValidatorProtocol } from '@presentation/protocols/validators/referral-code-validator.protocol'
import { UserIdValidatorProtocol } from '@presentation/protocols/validators/user-id-validator.protocol'

class ValidatorAdapterStub implements UserIdValidatorProtocol, ReferralCodeValidatorProtocol {
  public isUserID (_id: string): boolean {
    return true
  }

  isReferralCode (_code: string): boolean {
    return true
  }
}

export { ValidatorAdapterStub }
