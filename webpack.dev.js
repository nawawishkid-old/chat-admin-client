const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  output: {
    publicPath: "/"
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
