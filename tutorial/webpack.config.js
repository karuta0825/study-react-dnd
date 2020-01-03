const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/App.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  devServer: {
    open: true
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          configFile: path.resolve(__dirname, "tsconfig.json")
        }
      }
    ]
  },
  // .jsもないとwebpack-dev-serverが失敗する
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
