const { Configuration } = require('webpack');
const { container } = require('webpack');
const path = require('path');


/**
 * @type {Configuration}
 */
const Configurations = {
    name: 'angular-app-version-15',
    devServer: {
        port: 3001,
        host: '0.0.0.0',
        allowedHosts: 'all',
        historyApiFallback: true
    },
    output: {
        path: path.resolve(__dirname,'./build'),
        publicPath: 'http://localhost:3001',
        uniqueName: 'angular_app_15'
    },
    module: {},
    plugins: [
        new container.ModuleFederationPlugin({
            // remoteType: ''
            name: 'angular_app_15',
            filename: 'remoteEntry.js',
            exposes: {
                './NotFound': './src/app/modules/admin/notfound.component.ts',
            },
            remotes: {},
            shared: {
                "@angular/core": { singleton: true, eager: true },
                "@angular/common": { singleton: true, eager: true },
                "@angular/router": { singleton: true, eager: true },
            }
        })
    ],
    optimization: {
        splitChunks: false
    }
};

module.exports = Configurations;