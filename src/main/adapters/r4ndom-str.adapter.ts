import { Generator, RandomStringGenerator } from 'r4ndm-str'

import { StringGeneratorProtocol } from '@data/protocols/string-generator.protocol'
import { environmentVariablesConfig } from '@main/configs/environment-variables.config'

class R4ndomStrAdapter implements StringGeneratorProtocol {
  private readonly randomStr: Generator

  constructor () {
    this.randomStr = new RandomStringGenerator({
      useSmallLetters: false,
      useSymbols: false,
      removeSimilarCharacters: true
    })
  }

  generate (): string {
    return this.randomStr.generate(
      environmentVariablesConfig.referralCodeSize
    )
  }
}

export { R4ndomStrAdapter }
