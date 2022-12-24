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

  private propertyIsInvalid (property?: string): boolean {
    return !property
  }

  async add (params: AddReferralMethodParams): Promise<void> {
    let { code, link } = params
    const { user_id } = params

    if (this.propertyIsInvalid(code)) {
      code = this.referralCode.createCode()
    }

    if (this.propertyIsInvalid(link)) {
      link = this.referralLink.createLink()
    }

    await this.addReferralMethodRepository.add({
      user_id,
      code: code as string,
      link: link as string
    })
  }
}

export { DbAddReferralMethodUseCase }
