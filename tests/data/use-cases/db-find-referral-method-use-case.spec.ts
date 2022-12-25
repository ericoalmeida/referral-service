import { ReferralMethodModel } from '@domain/models/referral-method.model'
import { faker } from '@faker-js/faker'
import { environmentsConfig } from '@main/configs/environments.config'
import { CommonDataBuilder } from '@tests/common/builders/common-data.builder'

import { DbFindReferralMethodUseCaseFactory } from '@tests/data/factories/db-find-referral-method-usecase.factory'

describe('DbFindReferralMethodUseCase', () => {
  describe('#findByUserId', () => {
    const expectedRepositoryCallTimes = 1

    it('Should return null when referral method was not found', async () => {
      const { sut, repository } = new DbFindReferralMethodUseCaseFactory()

      const repositorySpy = jest.spyOn(repository, 'findByUserId')
      repositorySpy.mockResolvedValueOnce(null)

      const user_id = faker.datatype.uuid()

      const record = await sut.findByUserId(user_id)

      expect(record).toBeNull()
      expect(repositorySpy).toHaveBeenCalledTimes(expectedRepositoryCallTimes)
      expect(repositorySpy).toHaveBeenCalledWith(user_id)
    })

    it('Should return referral method when it was found', async () => {
      const { sut, repository } = new DbFindReferralMethodUseCaseFactory()

      const referralMethodModelData = new CommonDataBuilder<ReferralMethodModel>()
        .with('code', faker.datatype.string(environmentsConfig.referralCodeSize))
        .with('link', faker.internet.url())
        .build()

      const repositorySpy = jest.spyOn(repository, 'findByUserId')
      repositorySpy.mockResolvedValueOnce(referralMethodModelData)

      const user_id = faker.datatype.uuid()

      const record = await sut.findByUserId(user_id)

      expect(record).toBe(referralMethodModelData)
      expect(repositorySpy).toHaveBeenCalledTimes(expectedRepositoryCallTimes)
      expect(repositorySpy).toHaveBeenCalledWith(user_id)
    })

    it('Should throws when repository throw', async () => {
      const { sut, repository } = new DbFindReferralMethodUseCaseFactory()

      const expectedError = new Error()

      const repositorySpy = jest.spyOn(repository, 'findByUserId')
      repositorySpy.mockRejectedValueOnce(expectedError)

      const user_id = faker.datatype.uuid()

      try {
        await sut.findByUserId(user_id)
      } catch (error) {
        expect(error).toBe(expectedError)
        expect(repositorySpy).toHaveBeenCalledTimes(expectedRepositoryCallTimes)
        expect(repositorySpy).toHaveBeenCalledWith(user_id)
      }
    })
  })
})
