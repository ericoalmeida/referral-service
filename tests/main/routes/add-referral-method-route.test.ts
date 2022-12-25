import { faker } from '@faker-js/faker'
import { Express } from 'express'
import request from 'supertest'

import { environmentsConfig } from '@main/configs/environments.config'
import { setupApp } from '@main/configs/setup-app.config'
import { serverEndpointsConstants } from '@main/constants/server-endpoints.constants'
import { dbClientFactory } from '@main/factories/db-client.factory'
import { httpStatusCodeConstants } from '@presentation/constants/http-status-code.constants'
import { AddReferralMethodRequestProtocol } from '@presentation/protocols/add-referral-method-request.protocol'

import { CommonDataBuilder } from '@tests/common/builders/common-data.builder'

let app: Express

describe('AddReferralMethod Route', () => {
  let requestData: AddReferralMethodRequestProtocol

  beforeAll(() => {
    app = setupApp()
  })

  beforeEach(() => {
    requestData = new CommonDataBuilder<AddReferralMethodRequestProtocol>()
      .with('user_id', faker.datatype.uuid())
      .with('code', faker.datatype.string(environmentsConfig.referralCodeSize))
      .with('link', faker.internet.url())
      .build()
  })

  afterEach(async () => {
    const { user_id } = requestData

    const dbClient = dbClientFactory()
    await dbClient.referralMethods.delete({
      where: { user_id }
    })
  })

  describe('#POST /api/referral-method', () => {
    it('Should return success when send only user id', async () => {
      const { successful } = httpStatusCodeConstants
      const { endpointsPrefix, referralMethod } = serverEndpointsConstants

      const addURI = `${endpointsPrefix}${referralMethod.add}`

      const { user_id } = requestData

      await request(app)
        .post(addURI)
        .send({ user_id })
        .expect(successful.created)
    })

    it('Should return success when send all properties', async () => {
      const { successful } = httpStatusCodeConstants
      const { endpointsPrefix, referralMethod } = serverEndpointsConstants

      const addURI = `${endpointsPrefix}${referralMethod.add}`

      await request(app)
        .post(addURI)
        .send(requestData)
        .expect(successful.created)
    })
  })
})
