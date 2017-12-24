const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const devConfig = require('./dev.config')
const { contentBase,
  host,
  port,
  url
} = require('./server.config.js')

new WebpackDevServer(
  webpack(devConfig),
  {
    contentBase,
    headers: {
      "Access-Control-Allow-Origin": 'http://localhost:5000'
    },
    hot: true,
    historyApiFallback: true,
    publicPath: devConfig.output.publicPath,

    // provide less noisy output from webpack
    quiet: false,
    noInfo: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  }
).listen(port, host, function (err, result) {
  if (err) {
    return console.log(err)
  }
  console.log(`You hot server is available here ${url}`)
})
