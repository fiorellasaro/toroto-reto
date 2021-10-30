// module.exports = {
//   reactStrictMode: true,
// }

const { access } = require('fs')
const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    mapbox_key: process.env.ACCESS_TOKEN_MAP.toString(),
  }
}