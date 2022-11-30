import { Prisma, PrismaClient } from '@prisma/client'

export type PrismaDBClient = PrismaClient<
Prisma.PrismaClientOptions,
never,
Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
>
