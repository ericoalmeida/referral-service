import { faker } from '@faker-js/faker'

import { DeeplinkCreatorProtocol } from '@data/protocols/deeplink-creator.protocol'

class DeeplinkCreatorStub implements DeeplinkCreatorProtocol {
  create (_code: string): string {
    return faker.internet.url()
  };
}

export { DeeplinkCreatorStub }
