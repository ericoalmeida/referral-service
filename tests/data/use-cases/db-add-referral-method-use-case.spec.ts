
import { faker } from '@faker-js/faker'

import { AddReferralMethodRepositoryParams } from '@data/params/add-referral-method-repository.params'
import { environmentVariablesConfig } from '@main/configs/environment-variables.config'
import { CommonDataBuilder } from '@tests/common/builders/common-data.builder'
import { DbAddReferralMethodUseCaseFactory } from '@tests/data/factories/db-add-referral-method-usecase.factory'

describe('DbAddReferralMethodUseCase', () => {
  describe('#add', () => {
    const expectedCallTimes = 1

    const referralMethodData = new CommonDataBuilder<AddReferralMethodRepositoryParams>()
      .with('user_id', faker.datatype.uuid())
      .with('code', faker.datatype.string(environmentVariablesConfig.referralCodeSize))
      .with('link', faker.internet.url())
      .build()

    it('Should call repository with correct values created', async () => {
      const { sut, repository, codeCreator, deeplinkCreator } = new DbAddReferralMethodUseCaseFactory()

      const repositorySpy = jest.spyOn(repository, 'add')

      jest.spyOn(codeCreator, 'create').mockReturnValueOnce(referralMethodData.code)
      jest.spyOn(deeplinkCreator, 'create').mockReturnValueOnce(referralMethodData.link)

      await sut.add({ user_id: referralMethodData.user_id })

      expect(repositorySpy).toHaveBeenCalledTimes(expectedCallTimes)
      expect(repositorySpy).toHaveBeenCalledWith(referralMethodData)
    })

    it('Should call repository with partial correct values created', async () => {
      const { sut, repository, codeCreator, deeplinkCreator } = new DbAddReferralMethodUseCaseFactory()

      const repositorySpy = jest.spyOn(repository, 'add')

      jest.spyOn(codeCreator, 'create').mockReturnValueOnce(referralMethodData.code)
      jest.spyOn(deeplinkCreator, 'create').mockReturnValueOnce(referralMethodData.link)

      await sut.add({ user_id: referralMethodData.user_id, code: referralMethodData.code })

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
      const { sut, repository, codeCreator, deeplinkCreator } = new DbAddReferralMethodUseCaseFactory()

      const repositoryError = new Error()

      const repositorySpy = jest.spyOn(repository, 'add')
      repositorySpy.mockImplementationOnce(() => {
        throw repositoryError
      })

      jest.spyOn(codeCreator, 'create').mockReturnValueOnce(referralMethodData.code)
      jest.spyOn(deeplinkCreator, 'create').mockReturnValueOnce(referralMethodData.link)

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
