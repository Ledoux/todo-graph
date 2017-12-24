require('babel-polyfill')
const path = require('path')
const { credentialData } = require('transactions-express-data')

const type = process.env.TYPE || 'development'

credentialData({ fileDir: path.join(__dirname, '../../../../data/json_data'),
  type
})
