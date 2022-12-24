import { AddReferralMethodRepositoryParams } from '@data/params/add-referral-method-repository.params'

interface AddReferralMethodRepository {
  add: (params: AddReferralMethodRepositoryParams) => Promise<void>
}

export { AddReferralMethodRepository }
