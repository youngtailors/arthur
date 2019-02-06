const merge = require('webpack-merge')
const common = require('./webpack.common')
const ChromeExtensionReloader = require('webpack-chrome-extension-reloader')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    new ChromeExtensionReloader({
      entries: {
        // The entries used for the content/background scripts
        contentScript: 'inject', // Use the entry names, not the file name or the path
        background: 'background', // *REQUIRED
      },
    }),
  ],
})
