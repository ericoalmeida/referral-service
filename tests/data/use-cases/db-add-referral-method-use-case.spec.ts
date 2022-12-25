
import { faker } from '@faker-js/faker'

import { AddReferralMethodRepositoryParams } from '@data/params/add-referral-method-repository.params'
import { environmentsConfig } from '@main/configs/environments.config'
import { CommonDataBuilder } from '@tests/common/builders/common-data.builder'
import { DbAddReferralMethodUseCaseFactory } from '@tests/data/factories/db-add-referral-method-usecase.factory'

describe('DbAddReferralMethodUseCase', () => {
  describe('#add', () => {
    const expectedCallTimes = 1

    const referralMethodData = new CommonDataBuilder<AddReferralMethodRepositoryParams>()
      .with('user_id', faker.datatype.uuid())
      .with('code', faker.datatype.string(environmentsConfig.referralCodeSize))
      .with('link', faker.internet.url())
      .build()

    it('Should call repository with correct values created', async () => {
      const { sut, repository, referralMethodManagement } = new DbAddReferralMethodUseCaseFactory()

      const repositorySpy = jest.spyOn(repository, 'add')

      jest.spyOn(referralMethodManagement, 'createCode').mockReturnValueOnce(referralMethodData.code)
      jest.spyOn(referralMethodManagement, 'createLink').mockReturnValueOnce(referralMethodData.link)

      await sut.add({ user_id: referralMethodData.user_id })

      expect(repositorySpy).toHaveBeenCalledTimes(expectedCallTimes)
      expect(repositorySpy).toHaveBeenCalledWith(referralMethodData)
    })

    it('Should call repository with correct values informed', async () => {
      const { sut, repository } = new DbAddReferralMethodUseCaseFactory()

      const repositorySpy = jest.spyOn(repository, 'add')

      await sut.add(referralMethodData)

      expect(repositorySpy).toHaveBeenCalledTimes(expectedCallTimes)
      expect(repositorySpy).toHaveBeenCalledWith(referralMethodData)
    })

    it('Should throws when repository throw', async () => {
      const { sut, repository, referralMethodManagement } = new DbAddReferralMethodUseCaseFactory()

      const repositoryError = new Error()

      const repositorySpy = jest.spyOn(repository, 'add')
      repositorySpy.mockImplementationOnce(() => {
        throw repositoryError
      })

      jest.spyOn(referralMethodManagement, 'createCode').mockReturnValueOnce(referralMethodData.code)
      jest.spyOn(referralMethodManagement, 'createLink').mockReturnValueOnce(referralMethodData.link)

      try {
        await sut.add({ user_id: referralMethodData.user_id })
      } catch (error) {
        expect(repositorySpy).toHaveBeenCalledTimes(expectedCallTimes)
        expect(repositorySpy).toHaveBeenCalledWith(referralMethodData)
        expect(error).toBe(repositoryError)
      }
    })
  })
})
