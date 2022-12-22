import { CreateReferralCodeProtocol } from '@data/protocols/create-referral-code.protocol'
import { CreateReferralLinkProtocol } from '@data/protocols/create-referral-link.protocol'
import { AddReferralMethodRepository } from '@data/protocols/repositories/add-referral-method.repository'
import { AddReferralMethodParams } from '@domain/params/add-referral-method.params'
import { AddReferralMethodUseCase } from '@domain/use-cases/add-referral-method.usecase'

class DbAddReferralMethodUseCase implements AddReferralMethodUseCase {
  constructor (
    private readonly referralCode: CreateReferralCodeProtocol,
    private readonly referralLink: CreateReferralLinkProtocol,
    private readonly addReferralMethodRepository: AddReferralMethodRepository
  ) {}

  async add (params: AddReferralMethodParams): Promise<void> {
    const { user_id } = params

    const code = this.referralCode.createCode()
    const link = this.referralLink.createLink()

    await this.addReferralMethodRepository.add({ user_id, code, link })
  }
}

export { DbAddReferralMethodUseCase }
