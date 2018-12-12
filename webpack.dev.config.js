const merge = require('webpack-merge');
const common = require('./webpack/webpack.common.config.js');

module.exports = merge(common, {
	watch: true,
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /.spec\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'es2015', 'react'],
					cacheDirectory: true
				}
			},
			// {
			// 	test: /.ts$/,
			// 	loader: 'babel-loader',
			// 	exclude: /(node_modules|bower_components)/,
			// 	options: {
			// 		presets: ['@babel/preset-typescript'],
			// 	},
			// }
		]
	},
	devServer: {
		port: 3002,
		contentBase: common.context,
		disableHostCheck: true,
		historyApiFallback: true,
		openPage: '/',

		stats: {
			warnings: false
		},

		proxy: [
			{
				context: ['/api/**'],
				target: 'https://backend.com/',
				pathRewrite: {'^/api': '/'},
				secure: false,
				onProxyReq: (proxyReq, req, res) => {
					proxyReq.setHeader('Host', 'backend.com');
				}
			}
		]
	}
});
