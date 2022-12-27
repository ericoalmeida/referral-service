import { faker } from '@faker-js/faker'

import { StringGeneratorProtocol } from '@data/protocols/string-generator.protocol'
import { environmentVariablesConfig } from '@main/configs/environment-variables.config'

class StringGeneratorStub implements StringGeneratorProtocol {
  generate (): string {
    return faker.datatype.string(
      environmentVariablesConfig.referralCodeSize
    )
  };
}

export { StringGeneratorStub }
