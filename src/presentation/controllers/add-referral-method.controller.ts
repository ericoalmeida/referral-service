import { AddReferralMethodUseCase } from '@domain/use-cases/add-referral-method.usecase'
import { errorCodesConstants } from '@presentation/constants/error-codes.constants'
import { httpCreated } from '@presentation/helpers/http-created.helper'
import { httpInternalServerError } from '@presentation/helpers/http-internal-server-error.helper'
import { loggerError } from '@presentation/helpers/logger-error.helper'
import { AddReferralMethodRequestProtocol } from '@presentation/protocols/add-referral-method-request.protocol'
import { ControllerProtocol } from '@presentation/protocols/controller.protocol'
import { EmptyResponseProtocol } from '@presentation/protocols/empty-response.protocol'
import { HttpResponseProtocol } from '@presentation/protocols/http-response.protocol'

class AddReferralMethodController
implements ControllerProtocol<AddReferralMethodRequestProtocol, EmptyResponseProtocol> {
  constructor (private readonly useCase: AddReferralMethodUseCase) { }

  public async handle (
    request: AddReferralMethodRequestProtocol
  ): Promise<HttpResponseProtocol<EmptyResponseProtocol>> {
    try {
      const { user_id, code, link } = request

      await this.useCase.add({ user_id, code, link })

      return httpCreated<EmptyResponseProtocol>({})
    } catch (error) {
      loggerError('Check health fails', { error })

      return httpInternalServerError(errorCodesConstants.referralMethod.creationFailure)
    }
  }
}

export { AddReferralMethodController }
