import { Express } from 'express'
import request from 'supertest'

import { AddReferralMethodRepositoryParams } from '@data/params/add-referral-method-repository.params'
import { setupApp } from '@main/configs/setup-app.config'
import { serverEndpointsConstants } from '@main/constants/server-endpoints.constants'
import { dbClientFactory } from '@main/factories/db-client.factory'
import { httpStatusCodeConstants } from '@presentation/constants/http-status-code.constants'
import { ReferralMethodDataBuilder } from '@tests/data/builders/referral-method-data.builder'

let app: Express

describe('AddReferralMethod Route', () => {
  let referralMethodData: AddReferralMethodRepositoryParams

  beforeAll(() => {
    app = setupApp()
  })

  beforeEach(() => {
    referralMethodData = new ReferralMethodDataBuilder().build()
  })

  afterEach(async () => {
    const { user_id } = referralMethodData

    const dbClient = dbClientFactory()
    await dbClient.referralMethods.delete({
      where: { user_id }
    })
  })

  describe('#POST /api/referral-method', () => {
    it('Should return success when send only user id', async () => {
      const { successful } = httpStatusCodeConstants
      const { endpointsPrefix, referralMethod } = serverEndpointsConstants

      const addReferralMethodURI = `${endpointsPrefix}${referralMethod.add}`

      const { user_id } = referralMethodData

      await request(app)
        .post(addReferralMethodURI)
        .send({ user_id })
        .expect(successful.created)
    })

    it('Should return success when send all properties', async () => {
      const { successful } = httpStatusCodeConstants
      const { endpointsPrefix, referralMethod } = serverEndpointsConstants

      const addReferralMethodURI = `${endpointsPrefix}${referralMethod.add}`

      await request(app)
        .post(addReferralMethodURI)
        .send(referralMethodData)
        .expect(successful.created)
    })
  })
})
