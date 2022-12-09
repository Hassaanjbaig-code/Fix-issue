const path = require('path');
const Htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    clean: true,
    assetModuleFilename: 'images/[name][ext]',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  // resolve: {
  //   extensions: ['.ts', '.js'],
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new Htmlwebpackplugin({
      title: 'To do',
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
};