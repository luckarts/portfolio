const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const commonPaths = require('./paths');

module.exports = {
	mode: 'production',
	output: {
		filename: `${commonPaths.jsFolder}/[name].js`,
		path: commonPaths.outputPath,
		chunkFilename: `${commonPaths.jsFolder}/[name].js`,
	},
	//contentHashing js file
	optimization: {
		minimizer: [new OptimizeCSSAssetsPlugin()],
		// Automatically split vendor and commons

		runtimeChunk: true,
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
	resolve: {
		modules: ['src', 'node_modules'],
		extensions: ['*', '.js', '.jsx', '.css', '.scss'],
	},
	devtool: 'source-map',
};
