import { faker } from '@faker-js/faker'

import { StringGeneratorProtocol } from '@data/protocols/string-generator.protocol'

class StringGeneratorStub implements StringGeneratorProtocol {
  generate (size: number): string {
    return faker.datatype.string(size)
  };
}

export { StringGeneratorStub }
