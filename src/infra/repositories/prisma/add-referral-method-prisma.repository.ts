import { AddReferralMethodRepositoryParams } from '@data/params/add-referral-method-repository.params'
import { AddReferralMethodRepository } from '@data/protocols/repositories/add-referral-method.repository'
import { PrismaDBClient } from '@infra/repositories/prisma/prisma-db-client.type'

class AddReferralMethodPrismaRepository implements AddReferralMethodRepository {
  constructor (private readonly dbClient: PrismaDBClient) {}

  async add (params: AddReferralMethodRepositoryParams): Promise<void> {
    await this.dbClient.referralMethods.create({
      data: params
    })
  }
}

export { AddReferralMethodPrismaRepository }
