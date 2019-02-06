const merge = require('webpack-merge')
const common = require('./webpack.common')
const ChromeExtensionReloader = require('webpack-chrome-extension-reloader')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [new ChromeExtensionReloader()],
})
