// const webpack = require('webpack');
const { container } = require('webpack');

/**
 * 
 * @param {*} env 
 * @param {*} args 
 * @returns {webpack.Configuration}
 */
module.exports = {
    output: {
        publicPath: "auto",
        uniqueName: "angular_18_mfe_app",
        scriptType: "text/javascript",
        assetModuleFilename: 'images/[hash][ext][query]',
        environment: {
            asyncFunction: true
        }
    },
    optimization: {
        runtimeChunk: false,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
            },
        ],
    },
    devServer: {
        // this is to remove the error "ws://localhost:4200/ws failed" in the console when we disable live reload
        // also this solve websocket proxy issue in local
        // webSocketServer: false,
        port: 3000,
        host: '0.0.0.0',
        allowedHosts: 'all',
        historyApiFallback: true
    },
    plugins: [
        new container.ModuleFederationPlugin({
            filename: 'remoteEntry.js',
            name: 'angular_18_mfe_app',
            remotes: {
                'angular_app_15': 'angular_app_15@http://localhost:3001/remoteEntry.js'
            },
            shared: {
                "@angular/core": { singleton: true,eager: true },
                "@angular/common": { singleton: true,eager: true },
                "@angular/router": { singleton: true,eager: true },
            }
            // remoteType: ''
        })
    ]
}