import { faker } from '@faker-js/faker'
import { ReferralMethods } from '@prisma/client'

import { AddReferralMethodRepositoryParams } from '@data/params/add-referral-method-repository.params'

import { environmentVariablesConfig } from '@main/configs/environment-variables.config'
import { CommonDataBuilder } from '@tests/common/builders/common-data.builder'
import { dbClientMock } from '@tests/common/mocks/prisma-client.mock'
import { ReferralMethodPrismaRepositoryFactory } from '@tests/infra/factories/referral-method-prisma-repository.factory'

describe('AddReferralMethodPrismaRepository', () => {
  describe('#add', () => {
    it('Should add a new referral method', async () => {
      const { sut } = new ReferralMethodPrismaRepositoryFactory()

      const referralMethodData = new CommonDataBuilder<AddReferralMethodRepositoryParams>()
        .with('user_id', faker.datatype.uuid())
        .with('code', faker.datatype.string(environmentVariablesConfig.referralCodeSize))
        .with('link', faker.internet.url())
        .build()

      await expect(sut.add(referralMethodData)).resolves.toBeUndefined()
    })
  })

  describe('#findByUserId', () => {
    it('Should return null when user has no referral method', async () => {
      const { sut } = new ReferralMethodPrismaRepositoryFactory()

      dbClientMock.referralMethods.findFirst.mockResolvedValueOnce(null)

      const userId = faker.datatype.uuid()

      await expect(sut.findByUserId(userId)).resolves.toBeNull()
    })

    it('Should return referral method when user has it', async () => {
      const { sut } = new ReferralMethodPrismaRepositoryFactory()

      const referralMethodDbRecordMock = new CommonDataBuilder<ReferralMethods>()
        .with('id', faker.datatype.uuid())
        .with('user_id', faker.datatype.uuid())
        .with('code', faker.datatype.string(environmentVariablesConfig.referralCodeSize))
        .with('link', faker.internet.url())
        .with('created_at', new Date())
        .with('updated_at', new Date())
        .build()

      dbClientMock.referralMethods.findFirst.mockResolvedValueOnce(referralMethodDbRecordMock)

      const { user_id } = referralMethodDbRecordMock

      await expect(sut.findByUserId(user_id)).resolves.toEqual(referralMethodDbRecordMock)
    })
  })
})
