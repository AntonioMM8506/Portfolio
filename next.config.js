/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'custom',
    minimumCacheTTL: 60,
  }
}

module.exports = nextConfig
