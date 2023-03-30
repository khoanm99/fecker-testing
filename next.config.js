/** @type {import('next').NextConfig} */
const path = require('path');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: [
      'localhost',
      'fecker-holzbau-cms.absolutagentur.ch',
      'storage.googleapis.com'
    ],
    minimumCacheTTL: 60
  }
};

module.exports = nextConfig;
