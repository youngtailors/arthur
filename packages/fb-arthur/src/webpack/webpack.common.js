const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

let resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
  entry: {
    'content-script': path.join(__dirname, '../content-script.ts'),
    background: path.join(__dirname, '../background.ts'),
    inject: path.join(__dirname, '../inject.ts'),
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: 'js/[name].js',
  },
  // optimization: {
  //   splitChunks: {
  //     name: 'vendor',
  //     chunks: 'initial',
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.styl(us)?$/,
        use: ['vue-style-loader', 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue',
      '@': resolve('src'),
    },
  },
  plugins: [
    new CopyWebpackPlugin([{ from: path.join(__dirname, '../../static') }]),
    new VueLoaderPlugin(),
  ],
}
