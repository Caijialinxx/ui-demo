const base = require('./webpack.config.dev')
const path = require('path')

module.exports = Object.assign({}, base, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'doc/')
  }
})