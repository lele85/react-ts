const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require("path");
const os = require("os");
const webpack = require("webpack");

module.exports = [
	//Application bundle
	{
		devtool: "inline-source-map",
		entry: {
			app: "./src/App.tsx"
		},
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "[name].js"
		},
		resolve: {
			extensions: [".tsx", ".ts", ".js"],
			modules: [
				path.resolve(__dirname, "src"),
				path.resolve(__dirname, "node_modules")
			]
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
			        exclude: [ /node_modules/ ],
			        use: [
			            {
			                loader: "cache-loader"
			            },
			            {
			                loader: "thread-loader",
			                options: {
			                    workers: os.cpus().length - 1
			                }
			            },
			            {
			                loader: "ts-loader",
			                options: {
			                    happyPackMode:true,
			                    onlyCompileBundledFiles: true
			                }
			            }
			        ]
				}
			]
		},
		plugins: [
			new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
			new LiveReloadPlugin({})
		]
	}
]