const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.js");
// const env = {
//   WEBPACK_APP_BASE_PATH: "/chat-admin/"
// };

module.exports = merge(common, {
  mode: "production",
	output: {
		publicPath: '/'
	},
  // output: {
  //   publicPath: env.WEBPACK_APP_BASE_PATH
  // },
  devtool: "cheap-module-source-map",
  // plugins: [new webpack.DefinePlugin(env)]
});
