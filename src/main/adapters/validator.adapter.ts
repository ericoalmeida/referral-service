import validator from 'validator'

import { UserIdValidatorProtocol } from '@presentation/protocols/validators/user-id-validator.protocol'

export class ValidatorAdapter implements UserIdValidatorProtocol {
  public isUserID (id: string): boolean {
    return validator.isUUID(id)
  }
}
