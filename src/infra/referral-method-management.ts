import { faker } from '@faker-js/faker'

import { CreateReferralCodeProtocol } from '@data/protocols/create-referral-code.protocol'
import { CreateReferralLinkProtocol } from '@data/protocols/create-referral-link.protocol'
import { StringGeneratorProtocol } from '@data/protocols/string-generator.protocol'

class ReferralMethodManagement implements CreateReferralCodeProtocol, CreateReferralLinkProtocol {
  constructor (private readonly stringGenerator: StringGeneratorProtocol) {}

  public createLink (): string {
    return faker.internet.url()
  }

  public createCode (): string {
    const codeSize = 8
    return this.stringGenerator.generate(codeSize)
  };
}

export { ReferralMethodManagement }
