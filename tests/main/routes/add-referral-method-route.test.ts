import { Express } from 'express'
import request from 'supertest'

import { faker } from '@faker-js/faker'
import { setupApp } from '@main/configs'
import { serverEndpointsConstants } from '@main/constants'
import { httpStatusCodeConstants } from '@presentation/constants'

let app: Express

describe('AddReferralMethod Route', () => {
  beforeAll(() => {
    app = setupApp()
  })

  describe('#POST /api/referral-method', () => {
    it('Should return success', async () => {
      const { successful } = httpStatusCodeConstants
      const { endpointsPrefix, referralMethod } = serverEndpointsConstants

      const addReferralMethodURI = `${endpointsPrefix}${referralMethod.add}`

      const user_id = faker.datatype.uuid()

      await request(app)
        .post(addReferralMethodURI)
        .send({ user_id })
        .expect(successful.created)
    })
  })
})
