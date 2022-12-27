import swaggerJSDoc from 'swagger-jsdoc'

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Referral Service',
    description: 'Referral processing engine',
    version: '1.0.0'
  }
}

const options = {
  swaggerDefinition,
  apis: [
    './src/main/routes/*.ts',
    './src/main/docs/*.yml'
  ]
}

const swaggerSpecificationDoc = swaggerJSDoc(options)

export { swaggerSpecificationDoc }
