import {
  checkContainsSimilarCharacters,
  checkContainsSmallLetters,
  checkContainsSymbols,
  checkExactlyLength,
  Generator,
  RandomStringGenerator
} from 'r4ndm-str'

import { StringGeneratorProtocol } from '@data/protocols/string-generator.protocol'
import { environmentVariablesConfig } from '@main/configs/environment-variables.config'
import { ReferralCodeValidatorProtocol } from '@presentation/protocols/validators/referral-code-validator.protocol'

class R4ndomStrAdapter implements StringGeneratorProtocol, ReferralCodeValidatorProtocol {
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

  isReferralCode (code: string): boolean {
    const { referralCodeSize } = environmentVariablesConfig

    const hasValidLength = checkExactlyLength(referralCodeSize, code)
    const hasNoSmallLetters = !checkContainsSmallLetters(code)
    const hasNoSymbols = !checkContainsSymbols(code)
    const hasNoSimilarCharacters = !checkContainsSimilarCharacters(code)

    return hasValidLength && hasNoSmallLetters && hasNoSymbols && hasNoSimilarCharacters
  }
}

export { R4ndomStrAdapter }
