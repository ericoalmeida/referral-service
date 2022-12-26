import { faker } from '@faker-js/faker'
import { Express } from 'express'
import request from 'supertest'

import { AddReferralMethodRepositoryParams } from '@data/params/add-referral-method-repository.params'
import { environmentsConfig } from '@main/configs/environments.config'
import { setupApp } from '@main/configs/setup-app.config'
import { applicationEndpointsConstants } from '@main/constants/application-endpoints.constants'
import { dbClientFactory } from '@main/factories/db-client.factory'
import { httpStatusCodeConstants } from '@presentation/constants/http-status-code.constants'
import { FindReferralMethodRequestProtocol } from '@presentation/protocols/find-referral-method-request.protocol'
import { CommonDataBuilder } from '@tests/common/builders/common-data.builder'

let app: Express

describe('FindReferralMethod Route', () => {
  let requestData: FindReferralMethodRequestProtocol

  const dbClient = dbClientFactory()

  beforeAll(() => {
    app = setupApp()
  })

  beforeEach(async () => {
    requestData = new CommonDataBuilder<FindReferralMethodRequestProtocol>()
      .with('user_id', faker.datatype.uuid())
      .build()

    const referralMethodData = new CommonDataBuilder<AddReferralMethodRepositoryParams>()
      .with('user_id', requestData.user_id)
      .with('code', faker.datatype.string(environmentsConfig.referralCodeSize))
      .with('link', faker.internet.url())
      .build()

    await dbClient.referralMethods.create({
      data: referralMethodData
    })
  })

  afterEach(async () => {
    await dbClient.referralMethods.delete({
      where: { user_id: requestData.user_id }
    })
  })

  describe('GET /api/referral-method/:user_id', () => {
    it('Should return success when finds referral method by user id', async () => {
      const { successful } = httpStatusCodeConstants
      const { referralMethod, endpointsPrefix } = applicationEndpointsConstants

      const findURI = (`${endpointsPrefix}${referralMethod.find}`)
        .replace(':user_id', requestData.user_id)

      await request(app)
        .get(findURI)
        .send(requestData)
        .expect(successful.ok)
    })
  })
})
