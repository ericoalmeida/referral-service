import { CodeCreatorProtocol } from '@data/protocols/code-creator.protocol'
import { StringGeneratorProtocol } from '@data/protocols/string-generator.protocol'

class ReferralCodeCreator implements CodeCreatorProtocol {
  constructor (private readonly stringGenerator: StringGeneratorProtocol) {}

  create (): string {
    return this.stringGenerator.generate()
  }
}

export { ReferralCodeCreator }
