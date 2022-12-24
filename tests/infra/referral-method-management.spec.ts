import { ReferralMethodManagementFactory } from './factories/referral-method-management.factory'

describe('ReferralMethodManagement', () => {
  describe('#createCode', () => {
    const expectedReferralCodeSize = 8
    const expectedGenerateCallTimes = 1

    it('Should create a valid referral code with correctly size', () => {
      const { sut, stringGeneratorStub } = new ReferralMethodManagementFactory()

      const stringGeneratorSpy = jest.spyOn(stringGeneratorStub, 'generate')

      const referralCode = sut.createCode()

      expect(referralCode.length).toBe(expectedReferralCodeSize)
      expect(stringGeneratorSpy).toHaveBeenCalledTimes(expectedGenerateCallTimes)
      expect(stringGeneratorSpy).toHaveBeenCalledWith(expectedReferralCodeSize)
    })

    it('Should throws when generator throw', () => {
      const { sut, stringGeneratorStub } = new ReferralMethodManagementFactory()

      const mockedError = new Error()

      const stringGeneratorSpy = jest.spyOn(stringGeneratorStub, 'generate')
      stringGeneratorSpy.mockImplementationOnce(() => {
        throw mockedError
      })

      try {
        sut.createCode()
      } catch (error) {
        expect(stringGeneratorSpy).toHaveBeenCalledTimes(expectedGenerateCallTimes)
        expect(stringGeneratorSpy).toHaveBeenCalledWith(expectedReferralCodeSize)
        expect(error).toBe(mockedError)
      }
    })
  })
})
