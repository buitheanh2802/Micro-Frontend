const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "Angular_remote",
    publicPath: "http://localhost:3001/",
    scriptType:'text/javascript'
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
    port: 3001,
    webSocketServer: false,
    // host: '0.0.0.0',
    // allowedHosts: 'all',
    // historyApiFallback: true
  },
  experiments: {
    // outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "Angular_remote",
        filename: "remoteEntry.js",
        exposes: {
            './AuthModule':'./src/app/modules/auth/auth.module.ts'
        },

        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        shared: {
            "@angular/core": { singleton: true, strictVersion: false },
            "@angular/common": { singleton: true, strictVersion: false },
            "@angular/router": { singleton: true, strictVersion: false },
  
          //   ...sharedMappings.getDescriptors()
          }

    }),
    // sharedMappings.getPlugin()
  ],
};