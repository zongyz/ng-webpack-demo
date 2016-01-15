var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    srcPath = require('path').resolve(__dirname, 'src/');

var config = {
  entry: {
    vendor : ['angular','angular-ui-router'],
    main : './src/main.js'
  },
  output: {
    path: './build',
    publicPath: '/',
    filename: 'js/[name].js'
  },
  module: {
    loaders: [
      {
        test : /\.js$/,
        exclude: /node_modules/,
        loader : 'ng-annotate'
      },
      {
        test : /\.tpl\.html$/i,
        exclude: /node_modules/,
        loader : 'raw'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        exclude: /node_modules/,
        loader: 'url?limit=8192&name=img/[hash].[ext]'
      },
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        // loader: "style!css?sourceMap!less?sourceMap"
        // loader: 'style/url!file?name=[name].css!less?sourceMap'
        loader: ExtractTextPlugin.extract('css?sourceMap!less?sourceMap')
      },
      {
        test: /\.(sass|scss)$/i,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
      }
    ]
  },
  resolve : {
    root : srcPath,
    alias : {
      "ui.router" : "angular-ui-router",
      "common" : 'common',
      "page" : 'page',
      "comp" : 'component'
    }
  },
  
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
    
  ]
}

module.exports = config;