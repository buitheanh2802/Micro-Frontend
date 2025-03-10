const { container } = require('webpack');
const { Configuration } = require('webpack')


/** @returns {Configuration}} */
module.exports = (env, args) => {

  return {
     plugins: [
        new container.ModuleFederationPlugin({
            name: "angular_todolist",
            filename: "remoteEntry.js",
            exposes: {
               AngularTodolist: "./src/app/loader.ts",
            },
        })
     ]
  }
}
