const webpack = require("webpack");
const path = require('path');

const config = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    inline: true,
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: 'babel-loader',
      query: {
        presets: ['react', 'env'],
        plugins: ['transform-class-properties', 'transform-decorators-legacy'],
      },
    },
    {
      test: /\.css$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: ['style-loader', 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]'],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;