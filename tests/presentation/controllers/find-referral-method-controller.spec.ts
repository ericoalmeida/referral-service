import { faker } from '@faker-js/faker'

import { ReferralMethodModel } from '@domain/models/referral-method.model'
import { errorCodesConstants } from '@presentation/constants/error-codes.constants'
import { httpNotFound } from '@presentation/helpers/http-not-found.helper'
import { FindReferralMethodRequestProtocol } from '@presentation/protocols/find-referral-method-request.protocol'

import { httpInternalServerError } from '@presentation/helpers/http-internal-server-error.helper'
import { httpOk } from '@presentation/helpers/http-ok.helper'
import { CommonDataBuilder } from '@tests/common/builders/common-data.builder'
import { FindReferralMethodControllerFactory } from '@tests/presentation/factories/find-referral-method-controller.factory'

describe('FindReferralMethodController', () => {
  describe('#handle', () => {
    const expectedUseCaseCallTimes = 1

    it('Should return notFoundHttpError when referral method is not found', async () => {
      const { sut, useCase } = new FindReferralMethodControllerFactory()

      const useCaseSpy = jest.spyOn(useCase, 'findByUserId')

      const requestData = new CommonDataBuilder<FindReferralMethodRequestProtocol>()
        .with('user_id', faker.datatype.uuid())
        .build()

      const expectedResponse = httpNotFound(errorCodesConstants.referralMethod.notFound)

      const response = await sut.handle(requestData)

      expect(response).toEqual(expectedResponse)
      expect(useCaseSpy).toHaveBeenCalledTimes(expectedUseCaseCallTimes)
      expect(useCaseSpy).toHaveBeenCalledWith(requestData.user_id)
    })

    it('Should return okHttpSuccess with referral method when it is found', async () => {
      const { sut, useCase } = new FindReferralMethodControllerFactory()

      const referralMethodData = new CommonDataBuilder<ReferralMethodModel>()
        .with('code', faker.datatype.string(8))
        .build()

      const useCaseSpy = jest.spyOn(useCase, 'findByUserId')
      useCaseSpy.mockResolvedValueOnce(referralMethodData)

      const requestData = new CommonDataBuilder<FindReferralMethodRequestProtocol>()
        .with('user_id', faker.datatype.uuid())
        .build()

      const expectedResponse = httpOk(referralMethodData)

      const response = await sut.handle(requestData)

      expect(response).toEqual(expectedResponse)
      expect(useCaseSpy).toHaveBeenCalledTimes(expectedUseCaseCallTimes)
      expect(useCaseSpy).toHaveBeenCalledWith(requestData.user_id)
    })

    it('Should return httpInternalServerError when useCase throws', async () => {
      const { sut, useCase } = new FindReferralMethodControllerFactory()

      const useCaseSpy = jest.spyOn(useCase, 'findByUserId')
      useCaseSpy.mockRejectedValueOnce(new Error())

      const requestData = new CommonDataBuilder<FindReferralMethodRequestProtocol>()
        .with('user_id', faker.datatype.uuid())
        .build()

      const expectedResponse = httpInternalServerError(errorCodesConstants.referralMethod.searchFailure)

      const response = await sut.handle(requestData)

      expect(response).toEqual(expectedResponse)
      expect(useCaseSpy).toHaveBeenCalledTimes(expectedUseCaseCallTimes)
      expect(useCaseSpy).toHaveBeenCalledWith(requestData.user_id)
    })
  })
})
