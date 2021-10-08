/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-plugin-svgr');


const nextConfig = {
  reactStrictMode: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config
  },
}



module.exports = withPlugins([
  withSvgr
], nextConfig);

