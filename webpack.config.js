const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const eslint = require('eslint');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, 'src'),
  devtool: 'source-map',
  entry: {
    app: 'index.jsx'
  },
  resolve: {
    modules: [path.resolve('./src'), 'node_modules']
  },
  output: {
    filename: `js/[name].js`,
    path: path.resolve(__dirname, 'build'),
    chunkFilename: `js/[name].js`
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          formatter: eslint.CLIEngine.getFormatter('stylish'),
          emitWarning: process.env.NODE_ENV !== 'production'
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              localsConvention: 'camelCase'
            }
          },

          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin()],
    // Automatically split vendor and commons

    runtimeChunk: true
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.css', '.scss']
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html'
    })
  ]
};
