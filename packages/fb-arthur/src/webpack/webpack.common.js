const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    'content-script': path.join(__dirname, '../content_script.ts'),
    background: path.join(__dirname, '../background.ts'),
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: path.join(__dirname, '../../static') }]),
  ],
}
