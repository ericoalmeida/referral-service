import { ReferralMethodModel } from '@domain/models/referral-method.model'

interface FindReferralMethodRepository {
  findByUserId: (user_id: string) => Promise<ReferralMethodModel | null>
}

export { FindReferralMethodRepository }
