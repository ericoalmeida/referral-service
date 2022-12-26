/* eslint-disable import/first */
require('module-alias/register')

import { environmentVariablesConfig } from '@main/configs/environment-variables.config'
import { setupApp } from '@main/configs/setup-app.config'

const main = (): void => {
  const app = setupApp()

  app.listen(environmentVariablesConfig.port, () => {
    console.log(`🚀 Server started at ${environmentVariablesConfig.port} port.`)
  })
}

main()
