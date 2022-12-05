require('module-alias/register')

// eslint-disable-next-line import/first
import { environmentsConfig, setupApp } from '@main/configs'

const main = (): void => {
  const app = setupApp()

  app.listen(environmentsConfig.port, () => {
    console.log(`🚀 Server started at ${environmentsConfig.port} port.`)
  })
}

main()
