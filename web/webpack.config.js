const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const context = path.resolve(__dirname);
module.exports = {
  mode: 'development',
  context,
  entry: path.resolve(context, 'src/main.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        include: /src/,
        sideEffects: true,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]--[hash:base64:5]'
              },
            },
          },
          {
            loader: 'postcss-loader'
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(context, 'dist'),
    publicPath: '/',
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Agencies',
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify('http://localhost:9001/api'),
      },
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: {
      index: '/index.html'
    },
    port: 9000,
  },
};
