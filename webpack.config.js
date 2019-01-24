const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },

  plugins: [
    // 自动基于某个html生成html。
    new HtmlWebpackPlugin({
      title: 'hello 我的天',
      template: path.resolve(__dirname, './public', './index.html')
    }),

    // 复制某个文件到 output 下面
    new CopyWebpackPlugin([
      {
        from: 'public/lib/',
        to: 'lib/'
      }
    ])
  ]
}
