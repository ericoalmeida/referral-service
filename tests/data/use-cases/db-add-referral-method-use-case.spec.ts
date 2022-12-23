
import { ReferralMethodDataBuilder } from '@tests/data/builders'
import { DbAddReferralMethodUseCaseFactory } from '@tests/data/factories'

describe('DbAddReferralMethodUseCase', () => {
  describe('#add', () => {
    const expectedCallTimes = 1

    it('Should call repository with correct values', async () => {
      const { sut, repository, referralMethodManagement } = new DbAddReferralMethodUseCaseFactory()

      const repositorySpy = jest.spyOn(repository, 'add')

      const referralMethodData = new ReferralMethodDataBuilder().build()

      jest.spyOn(referralMethodManagement, 'createCode').mockReturnValueOnce(referralMethodData.code)
      jest.spyOn(referralMethodManagement, 'createLink').mockReturnValueOnce(referralMethodData.link)

      await sut.add({ user_id: referralMethodData.user_id })

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

      const referralMethodData = new ReferralMethodDataBuilder().build()

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
