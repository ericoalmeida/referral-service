import { R4ndomStrAdapter } from '@main/adapters/r4ndom-str.adapter'
import { ValidatorAdapter } from '@main/adapters/validator.adapter'
import { ValidationComposite } from '@main/composite/validation.composite'
import { ValidationProtocol } from '@presentation/protocols/validations/validation.protocol'
import { ReferralCodeValidation } from '@presentation/validation/referral-code.validation'
import { RequiredFieldValidation } from '@presentation/validation/required-field.validation'
import { UserIdValidation } from '@presentation/validation/user-id.validation'

const addReferralMethodValidationsFactory = (): ValidationProtocol => {
  const validations: ValidationProtocol[] = []

  const requiredFields = ['user_id']

  for (const requiredField of requiredFields) {
    validations.push(new RequiredFieldValidation(requiredField))
  }

  const validator = new ValidatorAdapter()
  const r4ndmStr = new R4ndomStrAdapter()

  const userIdFieldName = 'user_id'
  validations.push(new UserIdValidation(userIdFieldName, validator))

  const referralCodeFieldName = 'code'
  validations.push(new ReferralCodeValidation(referralCodeFieldName, r4ndmStr))

  return new ValidationComposite(validations)
}

export { addReferralMethodValidationsFactory }
