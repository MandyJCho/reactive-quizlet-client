const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


const loaders = [
  {
    enforce: 'pre',
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
  },
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    include: path.resolve(__dirname, 'src'),
    query: {
      presets: ['es2016', 'react'],
      plugins: ['transform-class-properties', 'transform-object-rest-spread']
    }
  }
];

module.exports = {
  entry: {
    main: [path.resolve(__dirname, 'src/index.jsx')],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: loaders,
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json'],
    alias: {
      Components : path.resolve(__dirname, 'src/components/'),
      Containers : path.resolve(__dirname, 'src/containers/')
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Reactive Quizlet',
      template: path.join(__dirname, 'src/index.tmpl.html'),
      inject: true,
    })
  ]
}