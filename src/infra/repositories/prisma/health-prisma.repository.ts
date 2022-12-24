import { HealthRepository } from '@data/protocols/repositories/health.repository'
import { PrismaDBClient } from '@infra/repositories/prisma/prisma-db-client.type'

export class HealthPrismaRepository implements HealthRepository {
  constructor (private readonly dbClient: PrismaDBClient) {}

  private readonly healthCheckSuccessful = true

  public async check (): Promise<boolean> {
    await this.dbClient.$connect()
    await this.dbClient.$disconnect()

    return this.healthCheckSuccessful
  }
}
