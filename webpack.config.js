/*
 * @Author: Jerrychan
 * @Date: 2018-10-29 14:01:27
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-10-29 14:04:45
 * @Description: 这是webpack配置文件
 */

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let WEBPACK_ENV = process.env.WEBPACK_ENV || "dev";
console.log(WEBPACK_ENV);
module.exports = {
  entry: "./src/app.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath:
      WEBPACK_ENV === "dev" ? "/dist/" : "//mall.52react.cn/",
    filename: "js/app.js"
  },
  resolve: {
    alias: {
      page: path.resolve(__dirname, "src/page"),
      component: path.resolve(__dirname, "src/component"),
      util: path.resolve(__dirname, "src/util"),
      service: path.resolve(__dirname, "src/service"),
      image: path.resolve(__dirname, "src/image"),
    }
  },
  module: {
    rules: [
      // react(jsx)语法的处理
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"],
            plugins: [
              ["import", { libraryName: "antd", style: "css" }] // antd按需加载
            ]
          }
        }
      },
      // css文件的处理
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      // sass文件的处理
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      // 图片的配置
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      // 字体图标的配置
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "resource/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 处理html文件
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./favicon.ico"
    }),
    // 独立css文件
    new ExtractTextPlugin("css/[name].css"),
    // 提出公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: "js/base.js"
    })
  ],
  devServer: {
    port: 8086,
    historyApiFallback: {
      index: "/dist/index.html" //404 或招不到则返回首页
    },
    open: true, //自动打开浏览器
    proxy: {
      "/manage": {
        target: "http://admintest.happymmall.com", //选择请求代理
        changeOrigin: true
      },
      "/user/logout.do": {
        target: "http://admintest.happymmall.com",
        changeOrigin: true
      }
    }
  }
};
