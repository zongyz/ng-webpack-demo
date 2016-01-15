var webpack = require('webpack'),
    config = require('./webpack.config'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

config.plugins.push(
  new CleanWebpackPlugin(['build'], {
    root: path.resolve(__dirname),
    verbose: true, 
    dry: false
  })
);
config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);
config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin()
);
module.exports = config;