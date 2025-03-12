const Webpack = require("webpack");
const { container } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

/**
 * 
 * @param {*} env 
 * @param {{mode: 'development' | 'production'}} args 
 * @returns {Webpack.Configuration}
 */
module.exports = (env, args) => {
    const isDev = args.mode == 'development';
    return {
        mode: args.mode,
        module: {
            rules: [{
                test: /\.(tsx|ts|jsx|js|mjs)$/i,
                use: {
                    loader: 'babel-loader',
                    options: {}
                },
                exclude: /node_modules/
            }]
        },
        plugins: [
            new HtmlWebpackPlugin({
                publicPath: '/',
                filename: 'index.html',
                template: path.resolve(__dirname,'./public/index.html'),
                inject: 'body',
                minify: true,
                scriptLoading: 'defer',
                title: 'hello world',
                showErrors: true,
            }),
            new container.ModuleFederationPlugin({
                name: 'React_remote',
                filename: 'remoteEntry.js',
                exposes: {},
                shared: {
                    react: {
                      singleton: true,
                      eager: true
                    }
                },
                remotes: {
                    'Angular_remote': 'Angular_remote@http://localhost:3001/remoteEntry.js',
                    // 'React_remote': 'React_remote@http://localhost:3002/remoteEntry.js'
                },
            }),
            !isDev && new CleanWebpackPlugin({

            })
        ],
        entry: {
            main: path.resolve(__dirname, './src/index.tsx')
        },
        output: {
            publicPath: 'auto',
            path: path.resolve(__dirname, './build'),
            environment: {
                arrowFunction: false,
                asyncFunction: true,
                destructuring: false,
                bigIntLiteral: false,
                const: false,
                document: false,
                dynamicImport: false,
                dynamicImportInWorker: false,
                forOf: false,
                globalThis: false,
                module: false,
                nodePrefixForCoreModules: false,
                optionalChaining: false,
                templateLiteral: false
            }
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs']
        },
        devServer: {
            allowedHosts: 'all',
            port: 3002,
            static: {
                publicPath: '/',
                directory: path.resolve(__dirname,'public'),
                watch: true
            },
            open: false,
            historyApiFallback: true,
            client: {
                logging: 'info',
                overlay: {
                    errors: true,
                    runtimeErrors: false,
                    warnings: false,
                },
                progress: false,
                reconnect: true,
                webSocketTransport: 'ws',
                // webSocketURL: 'auto://cms.vietnamnet.vn/ws',
            },
            // proxy: {}
        },
        optimization: {
            
        }
    }
}