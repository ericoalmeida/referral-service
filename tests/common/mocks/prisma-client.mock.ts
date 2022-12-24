import { PrismaClient } from '@prisma/client'
import { DeepMockProxy, mockDeep, mockReset } from 'jest-mock-extended'

import dbClient from './db-client'

jest.mock('./db-client', () => {
  return {
    __esModule: true,
    default: mockDeep<PrismaClient>()
  }
})

beforeEach(() => {
  mockReset(dbClientMock)
})

const dbClientMock = dbClient as unknown as DeepMockProxy<PrismaClient>

export { dbClientMock }
