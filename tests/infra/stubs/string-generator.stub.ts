import { faker } from '@faker-js/faker'

import { StringGeneratorProtocol } from '@data/protocols/string-generator.protocol'
import { environmentsConfig } from '@main/configs/environments.config'

class StringGeneratorStub implements StringGeneratorProtocol {
  generate (): string {
    return faker.datatype.string(
      environmentsConfig.referralCodeSize
    )
  };
}

export { StringGeneratorStub }
