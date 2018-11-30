const webpack = require('webpack');
// use resolve() to normalize paths between unix/windows environments
const path = require('path');

// function resolve (dir) {
//     return path.join(__dirname, '..', dir)
// }
// const nodeEnv = process.env.NODE_ENV || 'production';
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

  mode: 'development',

  entry: './src/app.js',
  devtool: 'inline-source-map',
  output: {
      path: path.resolve(__dirname,'dist'),
      filename: 'app.js'
  },

  module: {
    rules : [
       {
            test: /^(?!.*\.{test,min}\.js$).*\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }
    ]
  }
};