import { CodeCreatorProtocol } from '@data/protocols/code-creator.protocol'
import { DeeplinkCreatorProtocol } from '@data/protocols/deeplink-creator.protocol'
import { AddReferralMethodRepository } from '@data/protocols/repositories/add-referral-method.repository'
import { CheckReferralMethodExistByCodeRepository } from '@data/protocols/repositories/check-referral-method-exist-by-code.repository'
import { CheckReferralMethodExistByUserIdRepository } from '@data/protocols/repositories/check-referral-method-exist-by-user-id.repository'
import { AddReferralMethodParams } from '@domain/params/add-referral-method.params'
import { AddReferralMethodUseCase } from '@domain/use-cases/add-referral-method.usecase'

type ReferralMethodRepository =
AddReferralMethodRepository &
CheckReferralMethodExistByCodeRepository &
CheckReferralMethodExistByUserIdRepository

class DbAddReferralMethodUseCase implements AddReferralMethodUseCase {
  constructor (
    private readonly referralCode: CodeCreatorProtocol,
    private readonly referralLink: DeeplinkCreatorProtocol,
    private readonly repository: ReferralMethodRepository
  ) {}

  async add (params: AddReferralMethodParams): Promise<void> {
    const { user_id } = params

    let { code, link } = params

    if (!code) {
      code = this.referralCode.create()
      link = this.referralLink.create(code)
    }

    if (!link) {
      link = this.referralLink.create(code)
    }

    const userHasReferralMethod = await this.repository.checkByUserId(user_id)

    if (userHasReferralMethod) { return }

    const referralMethodExist = await this.repository.checkByCode(code)

    if (referralMethodExist) {
      code = this.referralCode.create()
      link = this.referralLink.create(code)
    }

    await this.repository.add({ user_id, code, link })
  }
}

export { DbAddReferralMethodUseCase }
