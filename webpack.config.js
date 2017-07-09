/**
 * Created by mandyjcho on 7/4/2017.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    main: ['./app/js/helper.js', './app/index.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
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
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'app', 'styles')
        ],
        use : ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  devtool: 'source-map',
  target: 'web',
  plugins: [
    /*
     // file size testing
     new BundleAnalyzerPlugin({
     analyzerMode: 'static'
     }),*/
    // redundant files
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor'],
      children: true,
      async: true,
      minChunks: function(module, count){
        return count >= 2
      }
    }),
    //specifically bundle these large things
    new webpack.optimize.CommonsChunkPlugin({
      name: ['react-bundle'],
      async: 'react',
      minChunks(module, count) {
        var context = module.context;
        var targets = ['react', 'react-dom', 'react-router'];
        return context && context.indexOf('node_modules') >= 0 && targets.find(t => new RegExp('\\\\' + t + '\\\\', 'i').test(context));
      },
    }),
    new HTMLPlugin({
      template: path.join(__dirname, '/app/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css'
    })
  ]
};