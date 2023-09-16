/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'custom',
    minimumCacheTTL: 60,
  }
}

module.exports = nextConfig
