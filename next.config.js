/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  webpack5: true,
  images: {
    domains: ['image.tmdb.org'],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })

    return config
  }
}

module.exports = nextConfig
