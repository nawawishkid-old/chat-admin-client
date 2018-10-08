const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: process.env.CHATADMIN_PUBLIC_PATH
  },
  devtool: "cheap-module-source-map"
});
