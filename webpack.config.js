var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var srcPath = path.resolve(__dirname, 'src/');
module.exports = {
  entry: {
    main : './src/main.js'
  },
  output: {
    path: './build',
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      // {
      //   test : /\.js$/,
      //   loader : 'uglify'
      // },
      {
        test : /\.tpl\.html$/,
        loader : 'raw'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      },
      {
        test: /\.less$/,
        //   exclude: /node_modules/,
        // loader: "style!css?sourceMap!less?sourceMap"
        // loader: 'style/url!file?name=[name].css!less?sourceMap'
        loader: ExtractTextPlugin.extract('css?sourceMap!less?sourceMap')
      },
      {
        test: /\.(sass|scss)$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
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
  devServer: {
    contentBase: srcPath,
    inline: true,
    noInfo: false
  },
  devtool: "#source-map",
  plugins: [
    new ExtractTextPlugin("styles.css")
  ],
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}