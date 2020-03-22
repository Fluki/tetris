var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
     entry: "./src/main.js",
     plugins: [
          new HtmlWebpackPlugin({
               template: "./src/index.html"
          })
     ]
}
