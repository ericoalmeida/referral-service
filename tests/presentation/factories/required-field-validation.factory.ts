
import { RequiredFieldValidation } from '@presentation/validation/required-field.validation'

class RequiredFieldValidationFactory {
  constructor (private readonly fieldName: string) {}

  public get sut (): RequiredFieldValidation {
    return new RequiredFieldValidation(this.fieldName)
  }
}

export { RequiredFieldValidationFactory }
