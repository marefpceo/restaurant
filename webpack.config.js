const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: './images/[name][ext][query]',
    publicPath: '',
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'The Veggie Table',
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 
        {
          loader: 'css-loader',
          options: {
          },
        },
      ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.html$/i,
      //   loader: 'html-loader',
      // },
    ],
  },
};