import { ReferralMethodManagement } from '@infra/referral-method-management'

import { StringGeneratorStub } from '@tests/infra/stubs/string-generator.stub'

class ReferralMethodManagementFactory {
  public stringGeneratorStub = new StringGeneratorStub()

  public get sut (): ReferralMethodManagement {
    return new ReferralMethodManagement(this.stringGeneratorStub)
  }
}

export { ReferralMethodManagementFactory }
