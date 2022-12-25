import { FindReferralMethodUseCase } from '@domain/use-cases/find-referral-method.usecase'
import { errorCodesConstants } from '@presentation/constants/error-codes.constants'
import { httpInternalServerError } from '@presentation/helpers/http-internal-server-error.helper'
import { httpNotFound } from '@presentation/helpers/http-not-found.helper'
import { httpOk } from '@presentation/helpers/http-ok.helper'
import { ControllerProtocol } from '@presentation/protocols/controller.protocol'
import { FindReferralMethodRequestProtocol } from '@presentation/protocols/find-referral-method-request.protocol'
import { FindReferralMethodResponseProtocol } from '@presentation/protocols/find-referral-method-response.protocol'
import { HttpResponseProtocol } from '@presentation/protocols/http-response.protocol'

class FindReferralMethodController
implements ControllerProtocol<FindReferralMethodRequestProtocol, FindReferralMethodResponseProtocol> {
  constructor (private readonly useCase: FindReferralMethodUseCase) {}

  public async handle (
    request: FindReferralMethodRequestProtocol
  ): Promise<HttpResponseProtocol<FindReferralMethodResponseProtocol>> {
    try {
      const { user_id } = request

      const record = await this.useCase.findByUserId(user_id)

      if (!record) {
        return httpNotFound(errorCodesConstants.referralMethod.notFound)
      }

      return httpOk(record)
    } catch (error) {
      return httpInternalServerError(errorCodesConstants.referralMethod.searchFailure)
    }
  }
}

export { FindReferralMethodController }
