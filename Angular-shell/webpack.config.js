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
            name: 'Angular_shell',
            remotes: {
                'React_remote': 'React_remote@http://localhost:3001/remoteEntry.js'
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