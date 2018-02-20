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
			extensions: [".tsx", ".ts", ".js", ".json"],
			modules: [
				path.resolve(__dirname, "src"),
				path.resolve(__dirname, "node_modules")
			]
		},
		module: {
			rules: [
                {
                    test: /\.css$/,
                    exclude: [ /node_modules/ ],
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'typings-for-css-modules-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1,
                                modules: true,
                                camelCase: true,
                                localIdentName: '[name]_[hash:base64:5]',
                                minimize: false,
                                namedExport: true
                            }
                        },
                    ]
                },
                {
                    test: /\.scss$/,
                    exclude: [ /node_modules/ ],
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'typings-for-css-modules-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1,
                                modules: true,
                                camelCase: true,
                                localIdentName: '[name]_[hash:base64:5]',
                                minimize: false,
                                namedExport: true,
                                sass: true
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                },
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
                },
			]
		},
		plugins: [
			new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
			new LiveReloadPlugin({})
		]
	}
]