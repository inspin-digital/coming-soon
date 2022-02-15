const path = require('path')
require('dotenv').config()

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()',
          },
        ],
      },
    ]
  },
  devIndicators: {
    autoPrerender: false
  },
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SENDGRID_LIST_ID: process.env.SENDGRID_LIST_ID
  },
  webpack: config => {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['public'] = path.join(__dirname, 'public')

    return config
  }
}