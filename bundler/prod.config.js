const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const fs = require('fs')
const gzipSize = require('gzip-size')
const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = require('./config')
const onProdDone = require('./onProdDone.js')

module.exports = Object.assign({},
  config,
  {
    module: {
      rules: config.module.rules.concat([{
          test: /\.(eot|woff|woff2|ttf|otf|svg|png|jpg)$/,
          use: 'url-loader?limit=30000&name=/fonts/[name].[ext]'
        },
        {
          test: /\.s?css$/,
          exclude: /node_modules\/(?!transactions-).*/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: { minimize: true }
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: function () {
                    return [autoprefixer]
                  }
                }
              },
              'sass-loader',
              {
                 loader: "sass-vars-loader",
                 options: {
                   files: [
                     path.resolve(__dirname, '../frontend/scripts/utils/sass.js')
                   ]
                 }
              }
            ]
          })
        }
      ])
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
      function () {
        this.plugin('done', function (stats) {
          const filename = stats.compilation.outputOptions.filename.replace('[hash]', stats.hash)
          const filepath = path.join(stats.compilation.outputOptions.path, filename)
          fs.readFile(filepath, (err, data) => {
            if (err) { console.log('error reading js bundle', err) }
            const byteSize = gzipSize.sync(data)
            const kbSize = Math.round(byteSize / 1024)
            console.log('\n\nGZIP size\n', filename + ': ~', kbSize, 'kB\n')
          })
        })
      },
      new ExtractTextPlugin({
        filename: 'styles/index_bundle.css'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true
        }
      }),
      function () {
        this.plugin('done', function (stats) {
          onProdDone(stats)
        })
      },
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: path.resolve(__dirname, 'report.html')
      })
    ]
  }
)
