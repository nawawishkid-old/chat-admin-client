const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.js");
const constants = {
  WEBPACK_APP_BASE_PATH: JSON.stringify("/chat-admin")
};

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "/chat-admin/"
  },
  devtool: "cheap-module-source-map",
  plugins: [new webpack.DefinePlugin(constants)]
});
