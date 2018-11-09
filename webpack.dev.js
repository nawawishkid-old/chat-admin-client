const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const env = {
  WEBPACK_API_SERVER_PORT: 11112
};

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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(env)
  ]
});
