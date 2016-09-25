var webpack = require('karma-webpack')
var webpackConfig = require('./webpack.config.js')

module.exports=function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      'src/**/*.spec.js'
    ],
    frameworks: [ 'jasmine' ],
    preprocessors: {
      'src/**/*.spec.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo:true
    }
  })
}