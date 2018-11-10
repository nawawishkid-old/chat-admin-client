require("dotenv").config();

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

const manifest = {
  filename: "manifest.json",
  name: "ChatAdmin",
  short_name: "ChatAdmin",
  display: "standalone",
  background_color: "#f2f2f2",
  icons: [
    {
      src: path.resolve("public/icons/android-chrome-192x192.png"),
      type: "image/png",
      sizes: "192x192"
    },
    {
      src: path.resolve("public/icons/android-chrome-512x512.png"),
      type: "image/png",
      sizes: "512x512"
    }
  ]
};
const appVar = {
  REACT_APP_STORAGE_ACCESS_TOKEN_NAME: JSON.stringify("accessToken"),
  REACT_APP_STORAGE_ACCESS_TOKEN_PAYLOAD_NAME: JSON.stringify(
    "accessTokenPayload"
  )
};
const publicPath = process.env.REACT_APP_PUBLIC_PATH;
const env = Object.keys(process.env)
  .filter(key => /^REACT_APP_/g.test(key))
  .reduce((accumulator, key) => {
    accumulator[key] = JSON.stringify(process.env[key]);

    return accumulator;
  }, appVar);

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: (value => (value === "/" ? "" : value))(publicPath)
  },
  devtool: "cheap-module-source-map",
  resolve: {
    alias: { "~": path.resolve(__dirname) }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
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
    new CopyWebpackPlugin([{ from: "public" }]),
    new WebpackPwaManifest(manifest),
    new webpack.DefinePlugin(env)
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};
