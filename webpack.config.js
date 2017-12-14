var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT, 'build');
module.exports = {
  entry: {
    app: path.resolve(ROOT, 'src/index.jsx')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },

  //enable dev source map
  devtool: 'eval-source-map',
  // //enable dev server
  // devServer: {
  //   historyApiFallback: true,
  //   hot: true,
  //   inline: true,
  //   progress: true
  // },
  resolve: {
        extensions: ['*','.js','.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loaders: [
          'babel-loader'
        ],
        include: [
          path.resolve(ROOT, "src"),
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
