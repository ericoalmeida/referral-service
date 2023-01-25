interface CheckReferralMethodExistByCodeRepository {
  checkByCode: (code: string) => Promise<boolean>
}

export { CheckReferralMethodExistByCodeRepository }
