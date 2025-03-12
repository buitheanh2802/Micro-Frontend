const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "Angular_shell",
    publicPath: "http://localhost:3000/",
    scriptType:'text/javascript',
    environment: {
      asyncFunction: true,
    }
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    // alias: {
    //   ...sharedMappings.getAliases(),
    // }
  },
  devServer: {
    port: 3000,
    // webSocketServer: false,
    // host: '0.0.0.0',
    // allowedHosts: 'all',
    // historyApiFallback: true
  },
  experiments: {
    // outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "Angular_shell",
        filename: "remoteEntry.js",
        shared: {},
        remotes: {
          'Angular_remote': 'Angular_remote@http://localhost:3001/remoteEntry.js',
        },
        shared: {
          "@angular/core": { singleton: true,eager: true, strictVersion: false,  },
          "@angular/common": { singleton: true,eager: true, strictVersion: false,  },
          "@angular/router": { singleton: true,eager: true, strictVersion: false,  },
        }
    }),
    // sharedMappings.getPlugin()
  ],
};