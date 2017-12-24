require('babel-polyfill')
require('babel-register')
const serverSideRender = require('./serverSideRender.js').default

function onProdDone (stats) {
  serverSideRender(stats)
}

module.exports = onProdDone
