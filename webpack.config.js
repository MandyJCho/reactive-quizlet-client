const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


const rules = [
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
    query: {
      presets: ['react', 'es2016'],
    },
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
    rules
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Reactive',
      template: path.join(__dirname, 'src/index.tmpl.html'),
      inject: true,
    }),
  ]
}