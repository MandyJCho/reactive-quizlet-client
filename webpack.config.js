const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


const ruleSet = [
  {
    enforce: 'pre',
    test: /\.js(x)?$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
  },
  {
    test: /\.js(x)?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
];

module.exports = {
  entry: {
    main: ['./src/index.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: ruleSet,
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Reactive Quizlet',
      template: path.join(__dirname, 'src/index.tmpl.html'),
      inject: true,
    }),
  ]
}