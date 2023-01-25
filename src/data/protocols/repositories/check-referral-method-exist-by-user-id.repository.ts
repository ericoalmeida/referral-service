interface CheckReferralMethodExistByUserIdRepository {
  checkByUserId: (user_id: string) => Promise<boolean>
}

export { CheckReferralMethodExistByUserIdRepository }
