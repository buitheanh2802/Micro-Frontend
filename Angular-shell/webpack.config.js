const { container } = require('webpack');
const { Configuration } = require('webpack')


/** @returns {Configuration}} */
module.exports = (env, args) => {

   return {
      output: {
         publicPath: 'http://localhost:4200',
      },
      optimization: {
         runtimeChunk: false,
      },
      plugins: [
       
      ]
   }
}
