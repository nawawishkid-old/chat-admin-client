const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true
  },
  resolve: {
    alias: { "~": path.resolve(__dirname) }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        // exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
