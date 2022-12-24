import { AddReferralMethodRepositoryParams } from '@data/params/add-referral-method-repository.params'
import { AddReferralMethodRepository } from '@data/protocols/repositories/add-referral-method.repository'
import { FindReferralMethodRepository } from '@data/protocols/repositories/find-referral-method.repository'
import { ReferralMethodModel } from '@domain/models/referral-method.model'
import { PrismaDBClient } from '@infra/repositories/prisma/prisma-db-client.type'

class ReferralMethodPrismaRepository implements AddReferralMethodRepository, FindReferralMethodRepository {
  constructor (private readonly dbClient: PrismaDBClient) {}

  public async add (params: AddReferralMethodRepositoryParams): Promise<void> {
    await this.dbClient.referralMethods.create({
      data: params
    })
  }

  public async findByUserId (user_id: string): Promise<ReferralMethodModel | null> {
    return this.dbClient.referralMethods.findFirst({
      where: { user_id },
      select: { code: true, link: true }
    })
  }
}

export { ReferralMethodPrismaRepository }
