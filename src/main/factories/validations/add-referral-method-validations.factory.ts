import { ValidatorAdapter } from '@main/adapters/validator.adapter'
import { ValidationComposite } from '@main/composite/validation.composite'
import { ValidationProtocol } from '@presentation/protocols/validations/validation.protocol'
import { RequiredFieldValidation } from '@presentation/validation/required-field.validation'
import { UserIdValidation } from '@presentation/validation/user-id.validation'

const addReferralMethodValidationsFactory = (): ValidationProtocol => {
  const validations: ValidationProtocol[] = []

  const requiredFields = ['user_id']

  for (const requiredField of requiredFields) {
    validations.push(new RequiredFieldValidation(requiredField))
  }

  const validator = new ValidatorAdapter()

  const userIdFieldName = 'user_id'
  validations.push(new UserIdValidation(userIdFieldName, validator))

  return new ValidationComposite(validations)
}

export { addReferralMethodValidationsFactory }
