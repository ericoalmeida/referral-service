import { Generator, RandomStringGenerator } from 'r4ndm-str'

import { StringGeneratorProtocol } from '@data/protocols/string-generator.protocol'

class R4ndomStrAdapter implements StringGeneratorProtocol {
  private readonly randomStr: Generator

  constructor () {
    this.randomStr = new RandomStringGenerator({
      useSmallLetters: false,
      useSymbols: false,
      removeSimilarCharacters: true
    })
  }

  generate (size: number): string {
    return this.randomStr.generate(size)
  }
}

export { R4ndomStrAdapter }