import { faker } from '@faker-js/faker'

import { CreateReferralCodeProtocol } from '@data/protocols/create-referral-code.protocol'
import { CreateReferralLinkProtocol } from '@data/protocols/create-referral-link.protocol'

class ReferralMethodManagementStub implements CreateReferralCodeProtocol, CreateReferralLinkProtocol {
  createLink (): string {
    return faker.internet.url()
  }

  createCode (): string {
    return faker.datatype.string(8)
  }
}

export { ReferralMethodManagementStub }
