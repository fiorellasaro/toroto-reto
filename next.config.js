// module.exports = {
//   reactStrictMode: true,
// }

const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiZmlvcmVsbGFzYXJvIiwiYSI6ImNrdjhtbGIyNTI1cTEydmwwcWNiYndnbHEifQ.GpLFyqi8k7lfJeTpEc1_-Q',
  }
}