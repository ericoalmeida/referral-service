import { faker } from '@faker-js/faker'

import { AddReferralMethodRepositoryParams } from '@data/params/add-referral-method-repository.params'

import { Data, DataBuilder } from '@tests/common/builders/data.builder'

interface ReferralMethodData extends Data, AddReferralMethodRepositoryParams {}

class ReferralMethodDataBuilder extends DataBuilder<AddReferralMethodRepositoryParams> {
  protected data: ReferralMethodData = {
    user_id: faker.datatype.uuid(),
    code: faker.datatype.string(8),
    link: faker.internet.url()
  }

  public build (): AddReferralMethodRepositoryParams {
    return this.data
  }
}

export { ReferralMethodDataBuilder }
