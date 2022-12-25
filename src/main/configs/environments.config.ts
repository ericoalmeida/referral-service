import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT !== undefined ? process.env.PORT : 7000
const referralCodeSize = 8

export const environmentsConfig = {
  port,
  referralCodeSize
}
