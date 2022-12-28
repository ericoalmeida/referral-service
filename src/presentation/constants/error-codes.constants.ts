export const errorCodesConstants = {
  validations: {
    missingRequiredField: {
      code: 'VA0001',
      message: 'Required field is missing'
    }
  },
  healthCheckFailure: {
    code: 'HC0001',
    message: 'Health check failed'
  },
  referralMethod: {
    creationFailure: {
      code: 'RM0001',
      message: 'Referral method creation failed'
    },
    searchFailure: {
      code: 'RM0002',
      message: 'Referral method search failed'
    },
    notFound: {
      code: 'RM0003',
      message: 'Referral method not found'
    }
  }
}
