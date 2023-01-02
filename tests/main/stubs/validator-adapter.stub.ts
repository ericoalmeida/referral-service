import { UserIdValidatorProtocol } from '@presentation/protocols/validators/user-id-validator.protocol'

class ValidatorAdapterStub implements UserIdValidatorProtocol {
  public isUserID (_id: string): boolean {
    return true
  }
}

export { ValidatorAdapterStub }
