const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "AngularApp",
    publicPath: "auto",
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
    host: '0.0.0.0',
    allowedHosts: 'all',
    historyApiFallback: true
  },
  experiments: {
    // outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        // library: { type: "module" },

        // For remotes (please adjust)
        name: "AngularApp",
        filename: "remoteEntry.js",
        exposes: {
            
            './Notfound':'./src/app/modules/admin/notfound.component.ts'
        },

        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        shared: {
            "@angular/core": { singleton: true },
            "@angular/common": { singleton: true },
            "@angular/common/http": { singleton: true },
            "@angular/router": { singleton: true },
  
          //   ...sharedMappings.getDescriptors()
          }

    }),
    // sharedMappings.getPlugin()
  ],
};