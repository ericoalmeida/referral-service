import { AddReferralMethodParams } from '@domain/params'

interface AddReferralMethodUseCase {
  add: (params: AddReferralMethodParams) => Promise<void>
}

export { AddReferralMethodUseCase }
