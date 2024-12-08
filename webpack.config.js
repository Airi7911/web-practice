const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "web-practice.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ejs$/,
        use: [
          /**
           * HtmlLoader -> TemplateEjsLoader
           */ 
          "html-loader",
          "template-ejs-loader",
        ],
      },
    ]
  },
  
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "source.ejs"),
      filename: "target.html",
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
      },
    }),
  ],

  resolve: {
    extensions: [".js"],
  },
  devServer: {
    open: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },
};