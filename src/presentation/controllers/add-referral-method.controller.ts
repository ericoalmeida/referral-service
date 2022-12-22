import { AddReferralMethodUseCase } from '@domain/use-cases'
import { errorCodesConstants } from '@presentation/constants'
import { httpCreated, httpInternalServerError } from '@presentation/helpers'
import { loggerError } from '@presentation/helpers/logger-error.helper'
import { ControllerProtocol, HttpResponseProtocol } from '@presentation/protocols'
import { AddReferralMethodRequestProtocol } from '@presentation/protocols/add-referral-method-request.protocol'
import { EmptyResponseProtocol } from '@presentation/protocols/empty-response.protocol'

class AddReferralMethodController
implements ControllerProtocol<AddReferralMethodRequestProtocol, EmptyResponseProtocol> {
  constructor (private readonly useCase: AddReferralMethodUseCase) { }

  public async handle (
    request: AddReferralMethodRequestProtocol
  ): Promise<HttpResponseProtocol<EmptyResponseProtocol>> {
    try {
      const { user_id } = request

      await this.useCase.add({ user_id })

      return httpCreated<EmptyResponseProtocol>({})
    } catch (error) {
      loggerError('Check health fails', { error })

      return httpInternalServerError(errorCodesConstants.referralMethod.creationFailure)
    }
  }
}

export { AddReferralMethodController }
