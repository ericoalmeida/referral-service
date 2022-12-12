import { AddReferralMethodRepository } from '@data/protocols/repositories/add-referral-method.repository'
import { AddReferralMethodParams } from '@domain/params'
import { PrismaDBClient } from '@infra/repositories/prisma'

class AddReferralMethodPrismaRepository implements AddReferralMethodRepository {
  constructor (private readonly dbClient: PrismaDBClient) {}

  async add (params: AddReferralMethodParams): Promise<void> {
    await this.dbClient.referralMethods.create({
      data: params
    })
  }
}

export { AddReferralMethodPrismaRepository }
