import { Express } from 'express'
import swaggerUi from 'swagger-ui-express'

import { environmentsConfig } from '@main/configs/environments.config'
import { applicationEndpointsConstants } from '@main/constants/application-endpoints.constants'
import { applicationEnvironmentsConstants } from '@main/constants/application-environments.constants'
import { swaggerSpecificationDoc } from '@main/docs/swagger-specification.doc'

const runningInProductionEnvironment = (): boolean => {
  const { applicationEnvironment } = environmentsConfig
  const { production } = applicationEnvironmentsConstants

  return applicationEnvironment === production
}

const setupApiDocs = (app: Express): void => {
  if (runningInProductionEnvironment()) return

  const { apiDocumentation } = applicationEndpointsConstants

  app.use(
    apiDocumentation,
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpecificationDoc)
  )
}

export { setupApiDocs }
