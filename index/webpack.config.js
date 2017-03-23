var webpack = require("webpack");

var config = {
	entry:"./test.jsx",
	output:{
		path:__dirname,
		filename:"js/bundel.js"
	},
	module:{
		loaders:[
			{test:/\.jsx$/,exclude:/node_modules/,loader:"jsx-loader"},
			{test:/\.scss$/,loader:"style-loader!css-loader!sass-loader"},
			{test:/\.css$/,loader:"style-loader!css-loader"}
		]
	},
	plugins: [
	    new webpack.BannerPlugin('这个就是我们调用了webpack自带的插件，我们給bundle.js的头部添加了注释信息')
	  ]
}

module.exports = config;