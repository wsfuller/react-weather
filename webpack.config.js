let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let imageWebpackLoader = require('image-webpack-loader');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');

let isDev = process.env.NODE_ENV === 'dev';

let assetsDev = 'file-loader?name=[name].[ext]';
let fontBundle = 'file-loader?name=assets/fonts/[name].[ext]';
let imageBundle = 'file-loader?name=assets/images/[name].[ext]';

let fontConfig = isDev ? assetsDev : fontBundle;
let imageConfig = isDev ? assetsDev : imageBundle;

let BUNDLE_DIR = path.resolve(__dirname, './build');
let SRC_DIR = path.resolve(__dirname, './src');

let PUBLIC_PATH = isDev ? '/' : './';

let BASE_URL;
let setBASE_URL = function() {
	switch (process.env.NODE_ENV) {
		case 'dev':
			BASE_URL = "'http://localhost:3004'";
			break;
		case 'prod':
			BASE_URL = "'api.openweathermap.org/data/2.5/'";
			break;
	}
};
setBASE_URL();

module.exports = {
	entry: [SRC_DIR + '/index.jsx'],
	output: {
		path: BUNDLE_DIR,
		publicPath: PUBLIC_PATH,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(s?)css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'resolve-url-loader', 'postcss-loader', 'sass-loader']
				})
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				exclude: /node_modules/,
				use: fontConfig
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					imageConfig,
					{
						loader: 'image-webpack-loader',
						query: {
							mozjpeg: {
								progressive: true
							},
							gifsicle: {
								interlaced: false
							},
							optipng: {
								optimizationLevel: 4
							},
							pngquant: {
								quality: '75-90',
								speed: 3
							}
						}
					}
				]
			}
		]
	},
	devServer: {
		contentBase: BUNDLE_DIR,
		stats: 'errors-only',
		compress: !isDev,
		overlay: isDev,
		historyApiFallback: true,
		hot: isDev
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			title: 'ReactWeather',
			minify: {
				collapseWhitespace: !isDev
			},
			hash: true,
			template: SRC_DIR + '/index.ejs'
		}),
		new ExtractTextPlugin({
			filename: 'app.css',
			disable: isDev,
			allChunks: true
		}),
		new FaviconsWebpackPlugin({
			logo: SRC_DIR + '/assets/images/logos/react-weather-logo.png',
			prefix: './assets/icons/',
			icons: {
				android: false,
				appleIcon: false,
				appleStartup: false,
				coast: false,
				favicons: true,
				firefox: false,
				opengraph: false,
				twitter: false,
				yandex: false,
				windows: false
			}
		}),
		new webpack.DefinePlugin({
			BASE_URL: BASE_URL
		}),
		new CopyWebpackPlugin([])
	]
};
