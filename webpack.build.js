var webpack = require('webpack'),
    config = require('./webpack.config'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
    CopyWebpackPlugin = require('copy-webpack-plugin');
    compress = require('compression');
var bs = require('browser-sync').create();

config.plugins.push(
  new CleanWebpackPlugin(['build'], {
    // root: '',
    verbose: true, 
    dry: false
  })
);


config.module.loaders.push(
  {
    test : /\.js$/,
    exclude: /node_modules/,
    loader : 'ng-annotate'
  }
);
// config.plugins.push(
//   new ngAnnotatePlugin({
//     add : true,
//   })
// );

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

config.plugins.push(
  new webpack.ProgressPlugin(function handler(percentage, msg) {
    if(percentage < 1 ){
      // console.log(msg);
    }else{
      console.log("\ndone....");
      bs.init({
        server: {
          baseDir: './build',
          middleware: function(req,res,next){
             var gzip = compress();
              gzip(req,res,next);
          }
        },
        startPath : '/',
        routes : {
          '/mock' : 'mock'
        }
      }); 
    }
  })
);

config.plugins.push(
  new CopyWebpackPlugin([
    {from : './src/index.html'}
  ])
)

module.exports = config;
