require('babel-polyfill')
const env = require('node-env-file')
const path = require('path')
const { modifyData } = require('transactions-express-data')
const { JOIN, JOINS } = require('transactions-tools-isomorphic')

const description = require('../app/lib/description').default

const type = process.env.TYPE || 'development'
env(__dirname + '/' + type + '_secret.sh')
const mongoUrl = process.env.MONGO_URL

const modifyConfig = { description,
  mongoUrl,
  collectionName: 'reviewers'
}

// modifyData({}, {}, modifyConfig))
