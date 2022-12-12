import { AddReferralMethodParams } from '@domain/params'

interface AddReferralMethodRepository {
  add: (params: AddReferralMethodParams) => Promise<void>
}

export { AddReferralMethodRepository }
