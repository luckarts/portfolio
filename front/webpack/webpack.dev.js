const webpack = require('webpack');

const commonPaths = require('./paths');

module.exports = {
	mode: 'development',
	output: {
		filename: '[name].js',
		path: commonPaths.outputPath,
		publicPath: '/',
		chunkFilename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							localsConvention: 'camelCase',
						},
					},
					'sass-loader',
				],
			},
		],
	},

	plugins: [new webpack.HotModuleReplacementPlugin()],
};
