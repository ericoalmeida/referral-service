
import { ReferralMethodDataBuilder } from '@tests/data/builders'
import { DbAddReferralMethodUseCaseFactory } from '@tests/data/factories'

describe('DbAddReferralMethodUseCase', () => {
  describe('#add', () => {
    const expectedCallTimes = 1

    it('Should call repository with correct values', async () => {
      const { sut, repository } = new DbAddReferralMethodUseCaseFactory()

      const repositorySpy = jest.spyOn(repository, 'add')

      const referralMethodData = new ReferralMethodDataBuilder().build()
      await sut.add(referralMethodData)

      expect(repositorySpy).toHaveBeenCalledTimes(expectedCallTimes)
      expect(repositorySpy).toHaveBeenCalledWith(referralMethodData)
    })

    it('Should throws when repository throw', async () => {
      const { sut, repository } = new DbAddReferralMethodUseCaseFactory()

      const repositoryError = new Error()

      const repositorySpy = jest.spyOn(repository, 'add')
      repositorySpy.mockImplementationOnce(() => {
        throw repositoryError
      })

      const referralMethodData = new ReferralMethodDataBuilder().build()

      try {
        await sut.add(referralMethodData)
      } catch (error) {
        expect(repositorySpy).toHaveBeenCalledTimes(expectedCallTimes)
        expect(repositorySpy).toHaveBeenCalledWith(referralMethodData)
        expect(error).toBe(repositoryError)
      }
    })
  })
})
