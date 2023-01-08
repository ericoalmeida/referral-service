import { DeeplinkCreatorProtocol } from '@data/protocols/deeplink-creator.protocol'

class AppsflyerDeeplinkCreator implements DeeplinkCreatorProtocol {
  create (code: string): string {
    return `http://app/${code}`
  }
}

export { AppsflyerDeeplinkCreator }
