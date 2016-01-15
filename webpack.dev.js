var webpack = require('webpack'),
    config = require('./webpack.config');

config.devServer = {
    port : '8080',
    contentBase: config.resolve.root,
    inline: true,
    noInfo: false,
    progress : true,
    // hot : false,
    stats: {
        cached: false,
        exclude: [/node_modules[\\\/]/],
        colors: true
    }
  };
config.devtool =  "#source-map",

module.exports = config;