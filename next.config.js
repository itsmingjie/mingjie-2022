const { i18n } = require('./next-i18next.config');
const path = require('path');

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n,
  env: {
    LASTFM_API_KEY: process.env.LASTFM_API_KEY,
  }
};
