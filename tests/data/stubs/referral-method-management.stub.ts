import { faker } from '@faker-js/faker'

import { CreateReferralCodeProtocol } from '@data/protocols/create-referral-code.protocol'
import { CreateReferralLinkProtocol } from '@data/protocols/create-referral-link.protocol'
import { environmentsConfig } from '@main/configs/environments.config'

class ReferralMethodManagementStub implements CreateReferralCodeProtocol, CreateReferralLinkProtocol {
  createLink (): string {
    return faker.internet.url()
  }

  createCode (): string {
    return faker.datatype.string(environmentsConfig.referralCodeSize)
  }
}

export { ReferralMethodManagementStub }
