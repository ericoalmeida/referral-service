import { faker } from '@faker-js/faker'
import { Express } from 'express'
import request from 'supertest'

import { R4ndomStrAdapter } from '@main/adapters/r4ndom-str.adapter'
import { setupApp } from '@main/configs/setup-app.config'
import { applicationEndpointsConstants } from '@main/constants/application-endpoints.constants'
import { dbClientFactory } from '@main/factories/db-client.factory'
import { httpStatusCodeConstants } from '@presentation/constants/http-status-code.constants'
import { AddReferralMethodRequestProtocol } from '@presentation/protocols/add-referral-method-request.protocol'

import { PrismaDBClient } from '@infra/repositories/prisma/prisma-db-client.type'
import { CommonDataBuilder } from '@tests/common/builders/common-data.builder'

let app: Express

describe('AddReferralMethod Route', () => {
  let requestData: AddReferralMethodRequestProtocol
  let dbClient: PrismaDBClient

  beforeAll(() => {
    app = setupApp()
  })

  beforeEach(() => {
    const code = new R4ndomStrAdapter().generate()

    requestData = new CommonDataBuilder<AddReferralMethodRequestProtocol>()
      .with('user_id', faker.datatype.uuid())
      .with('code', code)
      .with('link', faker.internet.url())
      .build()
  })

  afterEach(async () => {
    const { user_id } = requestData

    dbClient = dbClientFactory()
    await dbClient.referralMethods.delete({
      where: { user_id }
    })
  })

  describe('#POST /api/referral-method', () => {
    it('Should return success when send only user id', async () => {
      const { successful } = httpStatusCodeConstants
      const { endpointsPrefix, referralMethod } = applicationEndpointsConstants

      const addURI = `${endpointsPrefix}${referralMethod.add}`

      const { user_id } = requestData

      await request(app)
        .post(addURI)
        .send({ user_id })
        .expect(successful.created)
    })

    it('Should return success when send all properties', async () => {
      const { successful } = httpStatusCodeConstants
      const { endpointsPrefix, referralMethod } = applicationEndpointsConstants

      const addURI = `${endpointsPrefix}${referralMethod.add}`

      await request(app)
        .post(addURI)
        .send(requestData)
        .expect(successful.created)
    })

    it('Should return success when send referral method that already exists', async () => {
      const { successful } = httpStatusCodeConstants
      const { endpointsPrefix, referralMethod } = applicationEndpointsConstants

      const addURI = `${endpointsPrefix}${referralMethod.add}`

      await dbClient.referralMethods.create({
        data: {
          user_id: requestData.user_id,
          code: String(requestData.code),
          link: String(requestData.link)
        }
      })

      await request(app)
        .post(addURI)
        .send(requestData)
        .expect(successful.created)
    })
  })
})
