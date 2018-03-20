const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: "development",
    entry: {
    	app: './src/index.js'
    },
    output: {
    	filename: '[name].js',
    	publicPath: './dist',
    	path: path.resolve(__dirname, './dist')
    }
}