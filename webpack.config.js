var path = require("path");
module.exports = {
	entry: './src/entry.js',//演示单入口文件
	output: {//输出文件路径
		path: path.join(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: '/build/'
    //公共文件生成的地址
	},
	//服务器配置相关，自动刷新
	devServer: {
		historyApiFallback: true,
		hot: false,
		inline: true,
		grogress: true
	},
	module: {
		loaders: [
			//解析.vue文件
			{ test: /\.vue$/,loader: 'vue'},
			// 编译css并自动添加css前缀
      { test: /\.css$/, loader: 'style!css!autoprefixer'},
       //html模板编译？
      { test: /\.(html|tpl)$/, loader: 'html-loader' }
					
		]
	},
    resolve: {
    // require时省略的扩展名，如：require('module') 不需要module.js
      extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
          filter: path.join(__dirname, './src/filters'),
          components: path.join(__dirname, './src/components')
        }
    },
};