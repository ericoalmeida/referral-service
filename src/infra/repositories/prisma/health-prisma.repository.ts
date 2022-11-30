import { HealthRepository } from '@data/protocols/repositories'
import { PrismaDBClient } from '@infra/repositories/prisma'

export class HealthPrismaRepository implements HealthRepository {
  constructor (private readonly dbClient: PrismaDBClient) {}

  private readonly healthCheckSuccessful = true

  public async check (): Promise<boolean> {
    await this.dbClient.$connect()
    await this.dbClient.$disconnect()

    return this.healthCheckSuccessful
  }
}
