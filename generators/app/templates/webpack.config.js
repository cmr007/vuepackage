
'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包

module.exports = {
  entry: __dirname + '/src/entry.js', //唯一入口文件
  output: {
      path: __dirname + '/build', //打包后的文件存放的地方
      filename: 'bundle.js' //打包后输出文件的文件名
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue',
      },
      {  
        test: /\.js$/,
        exclude: /node_modules/,  
        loader: 'babel'  
      },
      //html模板编译
      { 
        test: /\.(html|tpl)$/,
        loader: 'html-loader' 
      },
      { 
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css!postcss")
      },
      {
        test: /\.(png|jpg|gif|jpeg|otf|eot|svg|ttf|woff|woff2)(\?\S+)?$/,
        loader: "file?name=asset/[hash].[ext]",
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
  },
  postcss: [
    require('autoprefixer')    //调用autoprefixer插件,css3自动补全
  ],
  devServer: {
    historyApiFallback: true,
    hot: false,
    inline: true,
    grogress: true
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
  ]

}
