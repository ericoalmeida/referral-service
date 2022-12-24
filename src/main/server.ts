/* eslint-disable import/first */
require('module-alias/register')

import { environmentsConfig } from '@main/configs/environments.config'
import { setupApp } from '@main/configs/setup-app.config'

const main = (): void => {
  const app = setupApp()

  app.listen(environmentsConfig.port, () => {
    console.log(`🚀 Server started at ${environmentsConfig.port} port.`)
  })
}

main()
