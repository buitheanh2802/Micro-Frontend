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
        webSocketServer: false,
    },
}