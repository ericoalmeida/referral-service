import { PrismaClient } from '@prisma/client'

import { PrismaDBClient } from '@infra/repositories/prisma/prisma-db-client.type'

const dbClientFactory = (): PrismaDBClient => new PrismaClient()

export { dbClientFactory }
