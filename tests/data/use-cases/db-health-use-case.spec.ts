import { DbHealthUseCaseFactory } from '@tests/data/factories/db-health-usecase.factory'

describe('DbHealthUseCase', () => {
  describe('#check', () => {
    it('Should return true as result from health check', async () => {
      const { sut } = new DbHealthUseCaseFactory()

      const result = await sut.check()

      expect(result).toBeTruthy()
    })

    it('Should throw when HealthRepository throws', async () => {
      const { sut, healthRepository } = new DbHealthUseCaseFactory()

      const checkError = new Error('Health check fails')

      jest.spyOn(healthRepository, 'check')
        .mockImplementationOnce(async () => {
          throw checkError
        })

      try {
        await sut.check()
      } catch (error) {
        expect(error).toBe(checkError)
      }
    })
  })
})
