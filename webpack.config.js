const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: __dirname + '/assets',
      filename: 'js/[name].[contenthash:8].js',
      publicPath: '/assets/'

    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.ejs',
        filename: '../_includes/webpacked-libs.html'
      })
    ]
}
