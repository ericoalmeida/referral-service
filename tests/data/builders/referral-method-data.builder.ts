import { faker } from '@faker-js/faker'

import { AddReferralMethodParams } from '@domain/params'

import { Data, DataBuilder } from '@tests/common/builders/data.builder'

interface ReferralMethodData extends Data, AddReferralMethodParams {}

class ReferralMethodDataBuilder extends DataBuilder<AddReferralMethodParams> {
  protected data: ReferralMethodData = {
    user_id: faker.datatype.uuid(),
    code: faker.datatype.string(8),
    link: faker.internet.url()
  }

  public build (): AddReferralMethodParams {
    return this.data
  }
}

export { ReferralMethodDataBuilder }
