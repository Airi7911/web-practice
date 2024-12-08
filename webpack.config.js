const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "web-practice.bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  resolve: {
    extensions: [".js"],
  },
  devServer: {
    open: true,
    static: path.join(__dirname, "public"),
  },
};