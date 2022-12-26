import dotenv from 'dotenv'

import { applicationEnvironmentsConstants } from '@main/constants/application-environments.constants'

dotenv.config()

const { development } = applicationEnvironmentsConstants

const applicationEnvironment = process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : development
const port = process.env.PORT !== undefined ? process.env.PORT : 7000
const referralCodeSize = 8

export const environmentsConfig = {
  applicationEnvironment,
  port,
  referralCodeSize
}
