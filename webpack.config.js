var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './build',
    publicPath: '/build/',
    filename: 'bundle.js'
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
  devServer: {
    contentBase: "./",
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