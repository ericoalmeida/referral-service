import { ReferralMethodModel } from '@domain/models/referral-method.model'

interface FindReferralMethodUseCase {
  findByUserId: (user_id: string) => Promise<ReferralMethodModel | null>
}

export { FindReferralMethodUseCase }
