import { AddReferralMethodParams } from '@domain/params/add-referral-method.params'

interface AddReferralMethodUseCase {
  add: (params: AddReferralMethodParams) => Promise<void>
}

export { AddReferralMethodUseCase }
