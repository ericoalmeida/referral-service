import swaggerJSDoc from 'swagger-jsdoc'

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Referral Service',
      description: 'Engine of referrals',
      version: '1.0.0'
    }
  },
  apis: ['./src/main/routes/*.ts']
}

const swaggerSpecificationDoc = swaggerJSDoc(options)

export { swaggerSpecificationDoc }
